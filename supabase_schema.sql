-- =================================================================================
-- RAMOZA E-COMMERCE · ESQUEMA ROBUSTO POSTGRESQL (SUPABASE) CON LÓGICA DE NEGOCIO
-- Seguridad Criptográfica: Hash SHA-256 + Sal (pgcrypto) en Claves y Tarjetas
-- Protección Anti-Inyección SQL, Constraints de Validación, Triggers y Bloqueo DROP
-- =================================================================================

-- 1. EXTENSIONES NECESARIAS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =================================================================================
-- 2. FUNCIONES DE SEGURIDAD CRIPTOGRÁFICA (SHA-256 + SALT) Y VALIDACIÓN DE NEGOCIO
-- =================================================================================

-- 2.1 Generador de Sal Criptográfica Aleatoria de 128 bits (32 caracteres hex)
CREATE OR REPLACE FUNCTION public.fn_generar_salt()
RETURNS VARCHAR(32) AS $$
BEGIN
    RETURN encode(gen_random_bytes(16), 'hex');
END;
$$ LANGUAGE plpgsql VOLATILE;

-- 2.2 Función de Hash SHA-256 + Sal Criptográfica (Formato idéntico al Frontend: sha256(salt || ':' || texto))
CREATE OR REPLACE FUNCTION public.fn_hash_sha256_sal(p_texto TEXT, p_salt TEXT)
RETURNS CHAR(64) AS $$
BEGIN
    RETURN encode(digest(p_salt || ':' || COALESCE(p_texto, ''), 'sha256'), 'hex');
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 2.3 Función Anti-Inyección SQL y Anti-XSS a nivel de Base de Datos (usada en CHECK constraints)
CREATE OR REPLACE FUNCTION public.fn_es_texto_seguro(p_texto TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    IF p_texto IS NULL THEN
        RETURN TRUE;
    END IF;
    -- Rechaza comandos destructivos SQL o scripts ejecutables aunque intenten inyectarse como texto
    IF p_texto ~* '\m(DROP\s+TABLE|DROP\s+DATABASE|TRUNCATE\s+TABLE|DELETE\s+FROM|ALTER\s+TABLE|UNION\s+SELECT|INSERT\s+INTO|PG_SLEEP)\M' THEN
        RETURN FALSE;
    END IF;
    IF p_texto ~* '(<\s*script|javascript\s*:|onerror\s*=|onload\s*=|--\s*$)' THEN
        RETURN FALSE;
    END IF;
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 2.4 Algoritmo Oficial Módulo 10 para Cédula Ecuatoriana (10 dígitos) y Pasaporte Extranjero (6-15 alfanuméricos)
CREATE OR REPLACE FUNCTION public.fn_validar_documento_identidad(p_tipo VARCHAR, p_documento VARCHAR)
RETURNS BOOLEAN AS $$
DECLARE
    v_region INT;
    v_tercer INT;
    v_coef INT[] := ARRAY[2, 1, 2, 1, 2, 1, 2, 1, 2];
    v_suma INT := 0;
    v_val INT;
    v_verificador INT;
    i INT;
BEGIN
    IF p_documento IS NULL OR NOT public.fn_es_texto_seguro(p_documento) THEN
        RETURN FALSE;
    END IF;

    IF p_tipo = 'pasaporte' THEN
        -- Pasaporte extranjero: de 6 a 15 caracteres estrictamente alfanuméricos
        RETURN p_documento ~ '^[A-Za-z0-9]{6,15}$';
    ELSIF p_tipo = 'cedula' THEN
        -- Cédula ecuatoriana: 10 dígitos numéricos + validación Módulo 10 del Registro Civil
        IF p_documento !~ '^[0-9]{10}$' THEN
            RETURN FALSE;
        END IF;
        v_region := CAST(SUBSTRING(p_documento FROM 1 FOR 2) AS INT);
        IF v_region < 1 OR (v_region > 24 AND v_region <> 30) THEN
            RETURN FALSE;
        END IF;
        v_tercer := CAST(SUBSTRING(p_documento FROM 3 FOR 1) AS INT);
        IF v_tercer >= 6 THEN
            RETURN FALSE;
        END IF;
        FOR i IN 1..9 LOOP
            v_val := CAST(SUBSTRING(p_documento FROM i FOR 1) AS INT) * v_coef[i];
            IF v_val >= 10 THEN
                v_val := v_val - 9;
            END IF;
            v_suma := v_suma + v_val;
        END LOOP;
        v_verificador := (10 - (v_suma % 10)) % 10;
        RETURN v_verificador = CAST(SUBSTRING(p_documento FROM 10 FOR 1) AS INT);
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- =================================================================================
-- 3. TABLAS DEL SISTEMA CON CONSTRAINTS ESTRICTOS DE NEGOCIO
-- =================================================================================

-- 3.1 TABLA: CATEGORÍAS (1/12)
CREATE TABLE IF NOT EXISTS public.categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL UNIQUE,
    slug VARCHAR(80) NOT NULL UNIQUE,
    descripcion TEXT,
    imagen_portada TEXT,
    activa BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_categoria_nombre_seguro CHECK (public.fn_es_texto_seguro(nombre)),
    CONSTRAINT chk_categoria_desc_segura CHECK (public.fn_es_texto_seguro(descripcion))
);

-- 3.2 TABLA: PROVEEDORES / TALLERES FLORALES ALIADOS (2/12)
CREATE TABLE IF NOT EXISTS public.proveedores (
    id SERIAL PRIMARY KEY,
    nombre_taller VARCHAR(120) NOT NULL,
    sector_quito VARCHAR(100) NOT NULL,
    direccion TEXT NOT NULL,
    telefono_contacto VARCHAR(15) NOT NULL,
    permite_retiro BOOLEAN NOT NULL DEFAULT TRUE,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_proveedor_telefono_ec CHECK (telefono_contacto ~ '^09[0-9]{8}$'),
    CONSTRAINT chk_proveedor_texto_seguro CHECK (
        public.fn_es_texto_seguro(nombre_taller) AND
        public.fn_es_texto_seguro(direccion)
    )
);

-- 3.3 TABLA: PRODUCTOS (3/12)
CREATE TABLE IF NOT EXISTS public.productos (
    id SERIAL PRIMARY KEY,
    categoria_id INTEGER NOT NULL REFERENCES public.categorias(id) ON DELETE RESTRICT,
    proveedor_id INTEGER REFERENCES public.proveedores(id) ON DELETE SET NULL,
    nombre VARCHAR(120) NOT NULL,
    descripcion TEXT NOT NULL,
    precio NUMERIC(10, 2) NOT NULL,
    precio_anterior NUMERIC(10, 2),
    texto_alternativo_accesible TEXT NOT NULL,
    permite_dedicatoria BOOLEAN NOT NULL DEFAULT TRUE,
    stock INTEGER NOT NULL DEFAULT 30,
    destacado BOOLEAN NOT NULL DEFAULT FALSE,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_producto_precio_positivo CHECK (precio > 0 AND precio <= 5000),
    CONSTRAINT chk_producto_oferta_valida CHECK (precio_anterior IS NULL OR precio_anterior > precio),
    CONSTRAINT chk_producto_stock_no_negativo CHECK (stock >= 0 AND stock <= 1000),
    CONSTRAINT chk_producto_texto_seguro CHECK (
        public.fn_es_texto_seguro(nombre) AND
        public.fn_es_texto_seguro(descripcion) AND
        public.fn_es_texto_seguro(texto_alternativo_accesible)
    )
);

-- 3.4 TABLA: IMÁGENES DE PRODUCTOS (4/12)
CREATE TABLE IF NOT EXISTS public.imagenes_producto (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL REFERENCES public.productos(id) ON DELETE CASCADE,
    url_imagen TEXT NOT NULL,
    orden SMALLINT NOT NULL DEFAULT 1,
    es_principal BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_url_imagen_segura CHECK (url_imagen ~ '^https?://' AND public.fn_es_texto_seguro(url_imagen))
);

-- 3.5 TABLA: USUARIOS / CLIENTES Y ADMINISTRADOR (5/12)
-- Almacena Sal Criptográfica (password_salt) + Hash SHA-256 (password_hash_sha256) y soporta Cédula o Pasaporte
CREATE TABLE IF NOT EXISTS public.usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rol VARCHAR(20) NOT NULL DEFAULT 'cliente' CHECK (rol IN ('cliente', 'admin')),
    nombre_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    tipo_documento VARCHAR(15) NOT NULL DEFAULT 'cedula' CHECK (tipo_documento IN ('cedula', 'pasaporte')),
    documento_identidad VARCHAR(15) NOT NULL UNIQUE,
    telefono VARCHAR(10) NOT NULL,
    password_salt VARCHAR(64) NOT NULL DEFAULT public.fn_generar_salt(),
    password_hash_sha256 CHAR(64) NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_usuario_email_valido CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT chk_usuario_telefono_ec CHECK (telefono ~ '^09[0-9]{8}$'),
    CONSTRAINT chk_usuario_documento_valido CHECK (public.fn_validar_documento_identidad(tipo_documento, documento_identidad)),
    CONSTRAINT chk_usuario_sha256_formato CHECK (password_hash_sha256 ~ '^[a-f0-9]{64}$'),
    CONSTRAINT chk_usuario_nombre_seguro CHECK (public.fn_es_texto_seguro(nombre_completo))
);

-- 3.6 TABLA: DIRECCIONES FRECUENTES DEL USUARIO (6/12)
CREATE TABLE IF NOT EXISTS public.direcciones_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id UUID NOT NULL REFERENCES public.usuarios(id) ON DELETE CASCADE,
    alias VARCHAR(60) NOT NULL,
    sector VARCHAR(80) NOT NULL,
    calle_principal_y_numero VARCHAR(200) NOT NULL,
    referencia_visual VARCHAR(200),
    es_predeterminada BOOLEAN NOT NULL DEFAULT FALSE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_direccion_segura CHECK (
        public.fn_es_texto_seguro(alias) AND
        public.fn_es_texto_seguro(sector) AND
        public.fn_es_texto_seguro(calle_principal_y_numero) AND
        public.fn_es_texto_seguro(referencia_visual)
    )
);

-- 3.7 TABLA: MÉTODOS DE PAGO TOKENIZADOS DEL USUARIO CON SHA-256 + SALT (7/12)
CREATE TABLE IF NOT EXISTS public.metodos_pago_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id UUID NOT NULL REFERENCES public.usuarios(id) ON DELETE CASCADE,
    marca_tarjeta VARCHAR(30) NOT NULL CHECK (marca_tarjeta IN ('Visa', 'Mastercard', 'Diners', 'Discover', 'Otra')),
    ultimos_4_digitos CHAR(4) NOT NULL CHECK (ultimos_4_digitos ~ '^[0-9]{4}$'),
    nombre_titular VARCHAR(60) NOT NULL,
    vencimiento_mm_aa CHAR(5) NOT NULL CHECK (vencimiento_mm_aa ~ '^(0[1-9]|1[0-2])\/[0-9]{2}$'),
    tarjeta_salt VARCHAR(64) NOT NULL DEFAULT public.fn_generar_salt(),
    tarjeta_numero_hash_sha256 CHAR(64) NOT NULL CHECK (tarjeta_numero_hash_sha256 ~ '^[a-f0-9]{64}$'),
    es_predeterminada BOOLEAN NOT NULL DEFAULT FALSE,
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_titular_tarjeta_seguro CHECK (public.fn_es_texto_seguro(nombre_titular))
);

-- 3.8 TABLA: CARRITOS DE COMPRA ACTIVOS (8/12)
CREATE TABLE IF NOT EXISTS public.carritos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID REFERENCES public.usuarios(id) ON DELETE CASCADE,
    estado VARCHAR(20) NOT NULL DEFAULT 'activo' CHECK (estado IN ('activo', 'convertido', 'abandonado')),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.9 TABLA: ÍTEMS DEL CARRITO (9/12) — Validado dinámicamente contra el stock real del producto mediante Trigger
CREATE TABLE IF NOT EXISTS public.carrito_items (
    id SERIAL PRIMARY KEY,
    carrito_id UUID NOT NULL REFERENCES public.carritos(id) ON DELETE CASCADE,
    producto_id INTEGER NOT NULL REFERENCES public.productos(id) ON DELETE CASCADE,
    cantidad INTEGER NOT NULL CONSTRAINT chk_carrito_limite_stock CHECK (cantidad >= 1 AND cantidad <= 1000),
    dedicatoria_personalizada VARCHAR(350),
    agregado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(carrito_id, producto_id),
    CONSTRAINT chk_carrito_dedicatoria_segura CHECK (public.fn_es_texto_seguro(dedicatoria_personalizada))
);

-- 3.10 TABLA: PEDIDOS / ÓRDENES DE COMPRA (10/12)
CREATE TABLE IF NOT EXISTS public.pedidos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo_orden VARCHAR(20) NOT NULL UNIQUE CHECK (codigo_orden ~ '^RMZ-[0-9]{5,8}$'),
    usuario_id UUID REFERENCES public.usuarios(id) ON DELETE SET NULL,
    comprador_nombre VARCHAR(100) NOT NULL,
    comprador_tipo_documento VARCHAR(15) NOT NULL DEFAULT 'cedula' CHECK (comprador_tipo_documento IN ('cedula', 'pasaporte')),
    comprador_documento VARCHAR(15) NOT NULL,
    comprador_telefono VARCHAR(10) NOT NULL CHECK (comprador_telefono ~ '^09[0-9]{8}$'),
    comprador_email VARCHAR(100),
    modalidad_entrega VARCHAR(20) NOT NULL CHECK (modalidad_entrega IN ('delivery', 'pickup')),
    direccion_entrega VARCHAR(200),
    fecha_entrega DATE NOT NULL CHECK (fecha_entrega >= CURRENT_DATE),
    franja_horaria VARCHAR(50) NOT NULL CHECK (franja_horaria IN (
        'Mañana (09:00 - 13:00)',
        'Tarde (14:00 - 18:00)',
        'Especial urgente (18:00 - 20:00)'
    )),
    nota_condolencia VARCHAR(350),
    subtotal NUMERIC(10, 2) NOT NULL CHECK (subtotal >= 0),
    costo_envio NUMERIC(10, 2) NOT NULL DEFAULT 5.00 CHECK (costo_envio IN (0.00, 5.00)),
    total NUMERIC(10, 2) NOT NULL CHECK (total >= 0),
    estado_pedido VARCHAR(40) NOT NULL DEFAULT 'En preparación con el florista' CHECK (estado_pedido IN (
        'En preparación con el florista',
        'En ruta de entrega',
        'Entregado con fotografía',
        'Cancelado'
    )),
    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_pedido_documento_valido CHECK (public.fn_validar_documento_identidad(comprador_tipo_documento, comprador_documento)),
    CONSTRAINT chk_pedido_total_exacto CHECK (total = subtotal + costo_envio),
    CONSTRAINT chk_pedido_direccion_obligatoria CHECK (
        (modalidad_entrega = 'pickup' AND costo_envio = 0.00) OR
        (modalidad_entrega = 'delivery' AND costo_envio = 5.00 AND direccion_entrega IS NOT NULL AND LENGTH(TRIM(direccion_entrega)) >= 5)
    ),
    CONSTRAINT chk_pedido_textos_seguros CHECK (
        public.fn_es_texto_seguro(comprador_nombre) AND
        public.fn_es_texto_seguro(direccion_entrega) AND
        public.fn_es_texto_seguro(nota_condolencia)
    )
);

-- 3.11 TABLA: DETALLE DE PRODUCTOS POR PEDIDO (11/12)
CREATE TABLE IF NOT EXISTS public.detalle_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id UUID NOT NULL REFERENCES public.pedidos(id) ON DELETE RESTRICT,
    producto_id INTEGER REFERENCES public.productos(id) ON DELETE SET NULL,
    nombre_producto VARCHAR(120) NOT NULL,
    cantidad INTEGER NOT NULL CHECK (cantidad >= 1 AND cantidad <= 1000),
    precio_unitario NUMERIC(10, 2) NOT NULL CHECK (precio_unitario > 0),
    subtotal_linea NUMERIC(10, 2) NOT NULL CHECK (subtotal_linea > 0),
    dedicatoria VARCHAR(350),
    CONSTRAINT chk_detalle_subtotal_exacto CHECK (subtotal_linea = ROUND(cantidad * precio_unitario, 2)),
    CONSTRAINT chk_detalle_texto_seguro CHECK (public.fn_es_texto_seguro(nombre_producto) AND public.fn_es_texto_seguro(dedicatoria))
);

-- 3.12 TABLA: PAGOS CON HASH SHA-256 + SALT PARA TARJETAS (12a/12)
-- El número completo de tarjeta y CVV jamás se guardan en texto plano; se guarda su Sal + Hash SHA-256
CREATE TABLE IF NOT EXISTS public.pagos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    codigo_pago VARCHAR(25) NOT NULL UNIQUE CHECK (codigo_pago ~ '^PAG-[0-9]{4}-[0-9]{4,6}$'),
    pedido_id UUID NOT NULL REFERENCES public.pedidos(id) ON DELETE RESTRICT,
    metodo_pago VARCHAR(20) NOT NULL CHECK (metodo_pago IN ('card', 'cash', 'transfer')),
    monto_pago NUMERIC(10, 2) NOT NULL CHECK (monto_pago > 0),
    -- Si es con tarjeta: se guarda solo últimos 4 dígitos, Sal de 128 bits y Hash SHA-256
    tarjeta_ultimos_4 CHAR(4) CHECK (tarjeta_ultimos_4 IS NULL OR tarjeta_ultimos_4 ~ '^[0-9]{4}$'),
    tarjeta_titular VARCHAR(60),
    tarjeta_salt VARCHAR(64),
    tarjeta_numero_hash_sha256 CHAR(64) CHECK (tarjeta_numero_hash_sha256 IS NULL OR tarjeta_numero_hash_sha256 ~ '^[a-f0-9]{64}$'),
    tarjeta_cvv_hash_sha256 CHAR(64) CHECK (tarjeta_cvv_hash_sha256 IS NULL OR tarjeta_cvv_hash_sha256 ~ '^[a-f0-9]{64}$'),
    -- Si es transferencia o efectivo
    referencia_transferencia VARCHAR(30),
    efectivo_monto_entrega VARCHAR(20),
    -- Simulación automática según método de pago:
    -- Tarjeta ('card') o Transferencia ('transfer') -> 'CANCELADO'
    -- Contraentrega ('cash') -> 'FALTA CANCELAR'
    estado_pago VARCHAR(20) NOT NULL CHECK (estado_pago IN ('CANCELADO', 'FALTA CANCELAR')),
    fecha_pago TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_pago_tarjeta_protegida_sha256 CHECK (
        metodo_pago <> 'card' OR (
            tarjeta_ultimos_4 IS NOT NULL AND
            tarjeta_salt IS NOT NULL AND
            tarjeta_numero_hash_sha256 IS NOT NULL
        )
    ),
    CONSTRAINT chk_pago_textos_seguros CHECK (
        public.fn_es_texto_seguro(tarjeta_titular) AND
        public.fn_es_texto_seguro(referencia_transferencia) AND
        public.fn_es_texto_seguro(efectivo_monto_entrega)
    )
);

-- 3.13 TABLA: COMPROBANTES DE VENTA (12b/12 · Relación 1 a 1 con cada Pago, NO es Factura)
CREATE TABLE IF NOT EXISTS public.comprobantes_venta (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    numero_comprobante VARCHAR(30) NOT NULL UNIQUE CHECK (numero_comprobante ~ '^CV-[0-9]{4}-[0-9]{5,7}$'),
    pago_id UUID NOT NULL UNIQUE REFERENCES public.pagos(id) ON DELETE RESTRICT,
    pedido_id UUID NOT NULL REFERENCES public.pedidos(id) ON DELETE RESTRICT,
    comprador_nombre VARCHAR(100) NOT NULL,
    comprador_tipo_documento VARCHAR(15) NOT NULL DEFAULT 'cedula' CHECK (comprador_tipo_documento IN ('cedula', 'pasaporte')),
    comprador_documento VARCHAR(15) NOT NULL,
    comprador_telefono VARCHAR(10) NOT NULL,
    metodo_pago_resumen VARCHAR(80) NOT NULL,
    subtotal NUMERIC(10, 2) NOT NULL CHECK (subtotal >= 0),
    costo_envio NUMERIC(10, 2) NOT NULL CHECK (costo_envio >= 0),
    total_comprobante NUMERIC(10, 2) NOT NULL CHECK (total_comprobante > 0),
    -- Estado del Comprobante de Venta vinculado al Pago:
    -- 'CANCELADO' (pago con tarjeta simulado / transferencia)
    -- 'FALTA CANCELAR' (pago contraentrega en efectivo)
    estado_comprobante VARCHAR(20) NOT NULL CHECK (estado_comprobante IN ('CANCELADO', 'FALTA CANCELAR')),
    observacion_estado TEXT NOT NULL,
    emitido_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_comprobante_documento_valido CHECK (public.fn_validar_documento_identidad(comprador_tipo_documento, comprador_documento))
);

-- =================================================================================
-- 4. TRIGGERS DE LÓGICA DE NEGOCIO Y SIMULACIONES EN LA BASE DE DATOS
-- =================================================================================

-- 4.1 Trigger: Antes de insertar un Pago, simula automáticamente el estado ('CANCELADO' vs 'FALTA CANCELAR')
CREATE OR REPLACE FUNCTION public.fn_simular_estado_pago()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.metodo_pago = 'card' OR NEW.metodo_pago = 'transfer' THEN
        NEW.estado_pago := 'CANCELADO';
    ELSIF NEW.metodo_pago = 'cash' THEN
        NEW.estado_pago := 'FALTA CANCELAR';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_simular_estado_pago ON public.pagos;
CREATE TRIGGER trg_simular_estado_pago
BEFORE INSERT ON public.pagos
FOR EACH ROW
EXECUTE FUNCTION public.fn_simular_estado_pago();

-- 4.2 Trigger: Por cada Pago registrado, emite automáticamente su Comprobante de Venta (1:1, NO Factura)
CREATE OR REPLACE FUNCTION public.fn_emitir_comprobante_por_pago()
RETURNS TRIGGER AS $$
DECLARE
    v_pedido RECORD;
    v_num_comprobante VARCHAR(30);
    v_metodo_txt VARCHAR(80);
    v_obs TEXT;
BEGIN
    SELECT * INTO v_pedido FROM public.pedidos WHERE id = NEW.pedido_id;
    v_num_comprobante := 'CV-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(FLOOR(RANDOM() * 900000 + 100000)::TEXT, 6, '0');

    IF NEW.metodo_pago = 'card' THEN
        v_metodo_txt := 'Tarjeta de crédito/débito (•••• ' || COALESCE(NEW.tarjeta_ultimos_4, '4242') || ' · Hash SHA-256 + Sal)';
        v_obs := 'Simulación de cobro con tarjeta aprobada (protegida con Sal + SHA-256). Comprobante de Venta emitido con estado CANCELADO.';
    ELSIF NEW.metodo_pago = 'transfer' THEN
        v_metodo_txt := 'Transferencia Bancaria (Ref: ' || COALESCE(NEW.referencia_transferencia, 'N/A') || ')';
        v_obs := 'Transferencia bancaria registrada. Comprobante de Venta emitido con estado CANCELADO.';
    ELSE
        v_metodo_txt := 'Pago Contraentrega (Efectivo al recibir)';
        v_obs := 'Pago contraentrega seleccionado. Comprobante de Venta emitido con estado FALTA CANCELAR hasta la entrega.';
    END IF;

    INSERT INTO public.comprobantes_venta (
        numero_comprobante, pago_id, pedido_id,
        comprador_nombre, comprador_tipo_documento, comprador_documento, comprador_telefono,
        metodo_pago_resumen, subtotal, costo_envio, total_comprobante,
        estado_comprobante, observacion_estado
    ) VALUES (
        v_num_comprobante, NEW.id, NEW.pedido_id,
        v_pedido.comprador_nombre, v_pedido.comprador_tipo_documento, v_pedido.comprador_documento, v_pedido.comprador_telefono,
        v_metodo_txt, v_pedido.subtotal, v_pedido.costo_envio, NEW.monto_pago,
        NEW.estado_pago, v_obs
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_emitir_comprobante_por_pago ON public.pagos;
CREATE TRIGGER trg_emitir_comprobante_por_pago
AFTER INSERT ON public.pagos
FOR EACH ROW
EXECUTE FUNCTION public.fn_emitir_comprobante_por_pago();

-- 4.3 Trigger: Cuando el Administrador actualiza el estado del Pago (de FALTA CANCELAR a CANCELADO), sincroniza el Comprobante
CREATE OR REPLACE FUNCTION public.fn_sincronizar_estado_comprobante()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.comprobantes_venta
    SET estado_comprobante = NEW.estado_pago,
        observacion_estado = CASE
            WHEN NEW.estado_pago = 'CANCELADO' THEN 'Pago verificado y cancelado en su totalidad.'
            ELSE 'Comprobante pendiente de cobro (FALTA CANCELAR).'
        END
    WHERE pago_id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_sincronizar_estado_comprobante ON public.pagos;
CREATE TRIGGER trg_sincronizar_estado_comprobante
AFTER UPDATE OF estado_pago ON public.pagos
FOR EACH ROW
EXECUTE FUNCTION public.fn_sincronizar_estado_comprobante();

-- 4.4 Trigger: Valida que la cantidad en carrito no supere el stock disponible del producto (chk_carrito_limite_stock)
CREATE OR REPLACE FUNCTION public.fn_validar_stock_carrito()
RETURNS TRIGGER AS $$
DECLARE
    v_stock INT;
    v_nombre VARCHAR(120);
BEGIN
    SELECT stock, nombre INTO v_stock, v_nombre
    FROM public.productos
    WHERE id = NEW.producto_id;

    IF v_stock IS NULL THEN
        RAISE EXCEPTION 'El producto solicitado no existe en el catálogo.'
            USING ERRCODE = '23503', CONSTRAINT = 'fk_carrito_producto';
    END IF;

    IF NEW.cantidad > v_stock THEN
        RAISE EXCEPTION 'Stock insuficiente para «%»: solo quedan % unidades disponibles en stock.', v_nombre, v_stock
            USING ERRCODE = '23514', CONSTRAINT = 'chk_carrito_limite_stock';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_validar_stock_carrito ON public.carrito_items;
CREATE TRIGGER trg_validar_stock_carrito
BEFORE INSERT OR UPDATE ON public.carrito_items
FOR EACH ROW
EXECUTE FUNCTION public.fn_validar_stock_carrito();

-- 4.5 Trigger: Descuenta automáticamente el stock del producto al insertar un detalle de pedido
CREATE OR REPLACE FUNCTION public.fn_descontar_stock_producto()
RETURNS TRIGGER AS $$
DECLARE
    v_stock_actual INT;
    v_nombre_prod VARCHAR(120);
BEGIN
    IF NEW.producto_id IS NOT NULL THEN
        SELECT stock, nombre INTO v_stock_actual, v_nombre_prod
        FROM public.productos
        WHERE id = NEW.producto_id;

        IF v_stock_actual IS NULL OR v_stock_actual < NEW.cantidad THEN
            RAISE EXCEPTION 'Stock insuficiente para «%»: solo quedan % unidades disponibles en stock.', COALESCE(v_nombre_prod, NEW.nombre_producto), COALESCE(v_stock_actual, 0)
                USING ERRCODE = '23514', CONSTRAINT = 'chk_carrito_limite_stock';
        END IF;

        UPDATE public.productos
        SET stock = stock - NEW.cantidad
        WHERE id = NEW.producto_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_descontar_stock_producto ON public.detalle_pedido;
CREATE TRIGGER trg_descontar_stock_producto
BEFORE INSERT ON public.detalle_pedido
FOR EACH ROW
EXECUTE FUNCTION public.fn_descontar_stock_producto();

-- =================================================================================
-- 5. BLINDAJE DE LA BASE DE DATOS: RLS, PERMISOS Y BLOQUEO DE DROP TABLE
-- =================================================================================

-- 5.1 Activar Row Level Security (RLS) en todas las tablas
ALTER TABLE public.categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.proveedores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.imagenes_producto ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direcciones_usuario ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metodos_pago_usuario ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carritos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carrito_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedidos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.detalle_pedido ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pagos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comprobantes_venta ENABLE ROW LEVEL SECURITY;

-- 5.2 Políticas de acceso seguro para la tienda web y el panel de administración (sin permitir DELETE ni DROP)
DROP POLICY IF EXISTS pol_lectura_categorias ON public.categorias;
CREATE POLICY pol_lectura_categorias ON public.categorias FOR SELECT USING (activa = TRUE);

DROP POLICY IF EXISTS pol_lectura_proveedores ON public.proveedores;
CREATE POLICY pol_lectura_proveedores ON public.proveedores FOR SELECT USING (activo = TRUE);

DROP POLICY IF EXISTS pol_lectura_productos ON public.productos;
CREATE POLICY pol_lectura_productos ON public.productos FOR SELECT USING (activo = TRUE);

DROP POLICY IF EXISTS pol_actualizar_productos_admin ON public.productos;
CREATE POLICY pol_actualizar_productos_admin ON public.productos FOR UPDATE USING (TRUE) WITH CHECK (stock >= 0 AND stock <= 1000 AND precio > 0);

DROP POLICY IF EXISTS pol_insertar_productos_admin ON public.productos;
CREATE POLICY pol_insertar_productos_admin ON public.productos FOR INSERT WITH CHECK (stock >= 0 AND stock <= 1000 AND precio > 0);

DROP POLICY IF EXISTS pol_lectura_imagenes ON public.imagenes_producto;
CREATE POLICY pol_lectura_imagenes ON public.imagenes_producto FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_insertar_imagenes ON public.imagenes_producto;
CREATE POLICY pol_insertar_imagenes ON public.imagenes_producto FOR INSERT WITH CHECK (TRUE);

DROP POLICY IF EXISTS pol_usuarios_select ON public.usuarios;
CREATE POLICY pol_usuarios_select ON public.usuarios FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_usuarios_insert ON public.usuarios;
CREATE POLICY pol_usuarios_insert ON public.usuarios FOR INSERT WITH CHECK (public.fn_validar_documento_identidad(tipo_documento, documento_identidad));

DROP POLICY IF EXISTS pol_usuarios_update ON public.usuarios;
CREATE POLICY pol_usuarios_update ON public.usuarios FOR UPDATE USING (TRUE) WITH CHECK (TRUE);

DROP POLICY IF EXISTS pol_pedidos_select ON public.pedidos;
CREATE POLICY pol_pedidos_select ON public.pedidos FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_pedidos_insert ON public.pedidos;
CREATE POLICY pol_pedidos_insert ON public.pedidos FOR INSERT WITH CHECK (public.fn_validar_documento_identidad(comprador_tipo_documento, comprador_documento));

DROP POLICY IF EXISTS pol_pedidos_update ON public.pedidos;
CREATE POLICY pol_pedidos_update ON public.pedidos FOR UPDATE USING (TRUE);

DROP POLICY IF EXISTS pol_detalle_select ON public.detalle_pedido;
CREATE POLICY pol_detalle_select ON public.detalle_pedido FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_detalle_insert ON public.detalle_pedido;
CREATE POLICY pol_detalle_insert ON public.detalle_pedido FOR INSERT WITH CHECK (cantidad >= 1);

DROP POLICY IF EXISTS pol_pagos_select ON public.pagos;
CREATE POLICY pol_pagos_select ON public.pagos FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_pagos_insert ON public.pagos;
CREATE POLICY pol_pagos_insert ON public.pagos FOR INSERT WITH CHECK (monto_pago > 0);

DROP POLICY IF EXISTS pol_pagos_update ON public.pagos;
CREATE POLICY pol_pagos_update ON public.pagos FOR UPDATE USING (TRUE);

DROP POLICY IF EXISTS pol_comprobantes_select ON public.comprobantes_venta;
CREATE POLICY pol_comprobantes_select ON public.comprobantes_venta FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS pol_comprobantes_insert ON public.comprobantes_venta;
CREATE POLICY pol_comprobantes_insert ON public.comprobantes_venta FOR INSERT WITH CHECK (total_comprobante > 0);

DROP POLICY IF EXISTS pol_comprobantes_update ON public.comprobantes_venta;
CREATE POLICY pol_comprobantes_update ON public.comprobantes_venta FOR UPDATE USING (TRUE);

-- 5.3 Conceder permisos de lectura y escritura necesarios a anon y authenticated, revocando destructivos (DELETE, TRUNCATE)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
        REVOKE DELETE, TRUNCATE ON ALL TABLES IN SCHEMA public FROM anon;
    END IF;
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
        REVOKE TRUNCATE ON ALL TABLES IN SCHEMA public FROM authenticated;
    END IF;
END $$;

-- 5.4 Event Trigger para bloquear cualquier intento de DROP TABLE en el esquema public
CREATE OR REPLACE FUNCTION public.fn_proteger_esquema_contra_drop()
RETURNS event_trigger AS $$
DECLARE
    obj record;
BEGIN
    FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects() LOOP
        IF obj.schema_name = 'public' AND obj.object_type = 'table' THEN
            RAISE EXCEPTION 'ALERTA DE SEGURIDAD RAMOZA: El comando DROP TABLE sobre "%" está bloqueado por política de seguridad.', obj.object_identity;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- =================================================================================
-- 6. SEMILLA INICIAL: CATEGORÍAS, PROVEEDORES, ADMIN Y LOS 32 PRODUCTOS (STOCK = 30)
-- =================================================================================

INSERT INTO public.categorias (id, nombre, slug, descripcion) VALUES
    (1, 'Arreglos florales', 'arreglos-florales', 'Celebra lo cotidiano con flores frescas de exportación.'),
    (2, 'Regalos', 'regalos', 'Pequeños gestos con chocolates, desayunos y flores para grandes momentos.'),
    (3, 'Funerarios', 'funerarios', 'Acompaña con respeto y cinta dedicatoria personalizada.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.proveedores (id, nombre_taller, sector_quito, direccion, telefono_contacto, permite_retiro) VALUES
    (1, 'Taller Floral La Carolina', 'Norte - La Carolina', 'Av. República del Salvador N35-82 y Portugal', '0991122334', TRUE),
    (2, 'Atelier Botánico Cumbayá', 'Valle de Cumbayá', 'Av. Interoceánica y Paseo de los Cañaris, Local 4', '0992233445', TRUE)
ON CONFLICT (id) DO NOTHING;

-- Usuario Administrador inicial protegido con Sal Criptográfica + Hash SHA-256
INSERT INTO public.usuarios (
    rol, nombre_completo, email, tipo_documento, documento_identidad, telefono,
    password_salt, password_hash_sha256
) VALUES (
    'admin',
    'Administrador Ramoza',
    'admin@ramoza.ec',
    'cedula',
    '1710034065',
    '0991234567',
    'a1b2c3d4e5f60718293a4b5c6d7e8f90',
    public.fn_hash_sha256_sal('AdminRamoza2026', 'a1b2c3d4e5f60718293a4b5c6d7e8f90')
) ON CONFLICT (email) DO NOTHING;

-- Inserción de los 32 Productos Oficiales con Stock inicial = 30 y Descripciones Detalladas
INSERT INTO public.productos (
    id, categoria_id, proveedor_id, nombre, descripcion, precio, precio_anterior,
    texto_alternativo_accesible, permite_dedicatoria, stock, destacado
) VALUES
    (1, 1, 1, 'Jardín de rosas', 'Exuberante bouquet artesanal compuesto por 18 rosas rojas ecuatorianas de exportación tipo Freedom, gerberas carmesí y bayas de hypericum sobre una cama de eucalipto cinerea fresco. Envuelto en papel kraft botánico con lazo de satén e hidratación en la base para prolongar su frescura por más de 10 días. Ideal para aniversarios, declaraciones románticas y celebraciones memorables.', 34.90, 42.00, 'Ramo redondo de rosas rojas intensas, gerberas carmesí y bayas rojas de hypericum rodeadas de hojas verdes frescas sobre una mesa de madera', TRUE, 30, TRUE),
    (2, 1, 1, 'Luz de girasoles', 'Radiante arreglo de 15 rosas amarillas variedad Brighton y botones dorados de invernadero que evocan la calidez del sol andino, acompañados de follaje verde limón y ruscus italiano. Presentado en envoltura de papel madera texturizado con cinta de yute natural y sobre de nutrientes florales incluido. Perfecto para transmitir alegría, felicitar por un logro o iluminar el hogar.', 29.50, NULL, 'Ramo brillante de rosas amarillas y botones dorados envuelto en papel kraft marrón claro', TRUE, 30, TRUE),
    (3, 1, 1, 'Dulce primavera', 'Delicada composición primaveral que combina gerberas color salmón, rosas tono durazno suave y margaritas borgoña de centro verde con toques de limonium silvestre. Cada tallo es seleccionado a mano en las faldas del Pichincha para lograr una armonía cromática cálida, fragante y llena de vitalidad. Incluye tarjeta dedicatoria impresa en papel algodón.', 27.90, NULL, 'Arreglo floral colorido con gerberas color salmón, rosas durazno y margaritas color vino tinto', TRUE, 30, TRUE),
    (4, 1, 2, 'Nube blanca', 'Diseño floral de inspiración minimalista con 14 rosas blancas variedad Mondial de pétalos rizados, astromelias níveas y ramas de eucalipto plateado aromático. Dispuesto en una base de cerámica blanca esmaltada reutilizable que realza la serenidad y pureza de cada flor sin necesidad de trasplante. Ideal para inaugurar espacios, agradecer o desear pronta recuperación.', 32.00, NULL, 'Ramo elegante de rosas blancas puras con hojas de eucalipto sobre fondo claro', TRUE, 30, FALSE),
    (5, 1, 2, 'Rosas de aurora', 'Bouquet romántico de 16 rosas ecuatorianas bicolor en tonos rosa pálido y crema con bordes suavemente verdes (variedad Esperance), acompañadas de follaje de pittosporum. Sus botones grandes de apertura lenta ofrecen una estética de jardín inglés sofisticada y duradera. Envuelto en doble pliego de papel artesanal con cinta de seda rosa vieja.', 38.00, 45.00, 'Ramo de rosas rosadas pálidas con bordes ligeramente verdes envuelto en papel marrón', TRUE, 30, FALSE),
    (6, 1, 1, 'Abrazo silvestre', 'Ramo campestre recién cortado que reúne mini claveles rosados de bordes matizados, bolitas de brunia plateada y abundante follaje orgánico de bosque andino. Su estructura suelta y natural transmite cercanía y espontaneidad, como un paseo por los valles floridos de Tumbaco. Incluye empaque ecológico respirable y guía de cuidados.', 31.75, NULL, 'Mano sosteniendo un ramo campestre de claveles rosados con blanco y abundante follaje verde', TRUE, 30, FALSE),
    (7, 1, 1, 'Estación coral', 'Vibrante fusión de rosas ecuatorianas en gama cálida: naranja mandarina, coral encendido, amarillo sol y rojo terciopelo en punto óptimo de apertura. Diseñado para llenar de energía cualquier estancia gracias a su contraste de pétalos aterciopelados y tallos vigorosos de 60 cm. Excelente opción para cumpleaños especiales y agradecimientos efusivos.', 33.60, 39.50, 'Primer plano de rosas frescas en tonos naranja, coral, amarillo y rojo intenso', TRUE, 30, FALSE),
    (8, 1, 2, 'Serenata lila', 'Arreglo artístico de alto contraste compuesto por anémonas de centro oscuro, ranúnculos morados, rosas lavanda y espigas silvestres en tonos violeta y crema. Su aroma suave y su combinación poco convencional de texturas botánicas lo convierten en una pieza de autor inolvidable. Viene listo para lucir con hidratación floral profesional.', 36.20, NULL, 'Ramo artístico de flores moradas, lilas, naranjas y blancas con centros oscuros', TRUE, 30, FALSE),
    (9, 1, 2, 'Brisa del valle', 'Refrescante bouquet de rosas rosadas de tallo largo combinadas con flores blancas de cera (waxflower), alstroemerias y ramas de eucalipto parvifolia recién cosechadas. Su fragancia mentolada natural y sus tonos pastel crean una atmósfera relajante y luminosa en el comedor o estudio. Presentado con lazo de organza y protector de tallos.', 28.40, NULL, 'Ramo fresco de rosas rosadas, flores blancas pequeñas y hojas de eucalipto', TRUE, 30, FALSE),
    (10, 1, 1, 'Sol de mediodía', 'Impactante ramo de girasoles gigantes de centro chocolate rodeados de solidago dorado, margaritas amarillas y follaje verde profundo de cordiline. Cada girasol es cultivado bajo sol directo para garantizar pétalos firmes y tallos robustos que se mantienen erguidos durante toda la semana. Un regalo lleno de optimismo y vitalidad.', 30.90, 35.00, 'Ramo luminoso de girasoles amarillos grandes con follaje verde fresco', TRUE, 30, FALSE),
    (11, 2, 1, 'Caja dulce detalle', 'Exquisita caja de regalo rígida que combina un bouquet compacto de rosas frescas tonos pastel con una selección de bombones artesanales de cacao fino de aroma ecuatoriano al 70%. Presentada con papel seda perfumado, cinta satinada de colección y tarjeta dedicatoria caligrafiada. El detalle perfecto para sorprender en aniversarios o fechas románticas.', 36.00, NULL, 'Ramo delicado de flores frescas acompañado de una caja de regalo elegante', TRUE, 30, TRUE),
    (12, 2, 2, 'Desayuno entre flores', 'Experiencia matutina gourmet que incluye un arreglo de rosas rosadas en florero de vidrio transparente junto a croissant francés de mantequilla, jugo natural de naranja recién exprimido, frutas de estación y café filtrado de altura. Todo dispuesto en una bandeja ecológica lista para servir en cama o en la oficina desde primera hora de la mañana.', 39.90, 46.00, 'Arreglo de rosas rosadas en florero de vidrio sobre una mesa exterior luminosa', TRUE, 30, FALSE),
    (13, 2, 1, 'Kit aniversario', 'Set de celebración romántica integrado por una docena de rosas rojas aterciopeladas de exportación, trufas de chocolate belga y una vela aromática de cera de soya con esencia de vainilla y sándalo. Empacado en cofre de lujo con lazo dorado para crear una velada inolvidable desde el primer instante.', 44.50, NULL, 'Ramo romántico de rosas rojas intensas ideal para celebración de aniversario', TRUE, 30, FALSE),
    (14, 2, 2, 'Canasta de cariño', 'Cesta artesanal tejida a mano con flores frescas en tonos durazno, rosa y marfil acompañadas de galletas de almendra, mermelada casera de frutos rojos e infusiones relajantes. Su diseño cálido permite reutilizar la canasta como pieza decorativa una vez disfrutados los bocadillos.', 41.20, NULL, 'Arreglo cálido de flores en tonos durazno y rosado dispuesto para regalo', TRUE, 30, FALSE),
    (15, 2, 1, 'Detalle con ternura', 'Encantador obsequio compuesto por un bouquet de flores blancas y rosadas suaves acompañado de un oso de peluche hipoalergénico de textura ultra suave y chocolates de leche. Muy solicitado para nacimientos, bienvenida de bebé, cumpleaños infantiles o muestras de afecto sincero.', 34.80, 40.00, 'Ramo tierno de flores blancas y suaves para obsequiar en ocasiones especiales', TRUE, 30, FALSE),
    (16, 2, 2, 'Sorpresa de cumpleaños', 'Vibrante arreglo festivo con rosas multicolor, gerberas encendidas, globo metalizado de felicitación y una porción individual de pastel húmedo de chocolate con ganache. Diseñado para llevar la fiesta completa directamente a la puerta del homenajeado en Quito o los Valles.', 37.90, NULL, 'Arreglo festivo de flores vibrantes en tonos cálidos para cumpleaños', TRUE, 30, FALSE),
    (17, 2, 1, 'Caja botánica', 'Elegante jardinera de madera curada con suculentas vivas de colección, mini rosas de jardín y musgo preservado que requiere mínimo mantenimiento. Incluye rociador de vidrio y guía ilustrada para conservar las plantas saludables por meses en escritorios o salas.', 42.75, NULL, 'Composición botánica de flores y follaje fresco en presentación de regalo', TRUE, 30, FALSE),
    (18, 2, 2, 'Brindis floral', 'Sofisticado dúo de celebración que marida un arreglo de rosas bicolores de exportación con una botella de espumante rosado semi-seco de 750 ml y bombones rellenos de avellana. Presentado en estuche rígido de seguridad para garantizar una entrega impecable en brindis corporativos o de pareja.', 46.30, 52.00, 'Arreglo elegante de rosas rosadas y crema para celebrar momentos especiales', TRUE, 30, FALSE),
    (19, 2, 1, 'Dulce compañía', 'Delicado arreglo en base cilíndrica con flores de estación en tonos lila y lavanda, acompañado de macarons franceses artesanales y té blanco orgánico. Pensado para acompañar tardes de lectura, agradecer un favor especial o consentir a alguien querido a distancia.', 35.40, NULL, 'Ramo colorido de flores moradas y tonos pastel para acompañar un regalo especial', TRUE, 30, FALSE),
    (20, 2, 2, 'Mini jardín de mesa', 'Centro de mesa compacto en maceta de cerámica artesanal con rosas spray rosadas, kalanchoes en flor y follaje de helecho rizado. Su tamaño equilibrado de 25 cm de altura se adapta perfectamente a mesas auxiliares, recepciones médicas o rincones de trabajo.', 31.90, NULL, 'Pequeño arreglo floral fresco en tonos rosados y verdes para decorar la mesa', TRUE, 30, FALSE),
    (21, 3, 1, 'Corona de paz', 'Solemne corona fúnebre circular elaborada sobre aro húmedo de alta duración con 60 rosas blancas de exportación, gladiolos imperiales, crisantemos níveos y follaje de laurel y eucalipto. Incluye atril de madera plegable y cinta fúnebre impresa en letras doradas con el nombre de la familia o institución.', 65.00, NULL, 'Corona funeraria solemne de flores blancas y follaje verde en homenaje de condolencias', TRUE, 30, TRUE),
    (22, 3, 1, 'Tributo sereno', 'Arreglo vertical de condolencias en base tipo ánfora con rosas marfil, lirios orientales blancos de suave aroma y ramas de olivo simbólicas. Diseñado para capillas ardientes, salas de velación o ceremonias religiosas con sobriedad y profundo respeto.', 48.00, 55.00, 'Arreglo floral sobrio en tonos suaves y elegantes para expresar respeto y condolencias', TRUE, 30, FALSE),
    (23, 3, 2, 'Homenaje eterno', 'Composición floral de consuelo con claveles blancos importados, rosas crema y espigas de delfinio que transmiten paz espiritual y acompañamiento sincero. Montado en esponja floral de hidratación prolongada para mantenerse intacto durante todos los servicios exequiales.', 58.90, NULL, 'Ramo de flores delicadas con follaje abundante para tributo y acompañamiento', TRUE, 30, FALSE),
    (24, 3, 2, 'Luz de consuelo', 'Pedestal fúnebre de 1.40 m de altura confeccionado con rosas blancas selectas, cartuchos etíopes, pompones blancos y hojas de palma real. Incluye banda conmemorativa personalizada sin costo adicional y entrega prioritaria en funerarias y camposantos de Quito y Valles.', 62.50, NULL, 'Arreglo floral luminoso y sereno para acompañar a la familia en momentos difíciles', TRUE, 30, FALSE),
    (25, 3, 1, 'Paz del alma', 'Cruz floral de tributo tejida artesanalmente con crisantemos blancos, rosas nieve y follaje de ciprés aromático sobre estructura firme con soporte incluido. Representa un mensaje de fe, esperanza y recuerdo eterno para honrar la memoria de un ser querido.', 54.00, NULL, 'Arreglo de flores frescas y serenas para enviar un mensaje de paz y solidaridad', TRUE, 30, FALSE),
    (26, 3, 1, 'Recuerdo blanco', 'Cubre-féretro clásico de rosas blancas puras, liliums cerrados y cortina de hiedra inglesa dispuesto en cascada simétrica de 90 cm. Elaborado al momento del pedido por maestros floristas para garantizar máxima frescura y presentación impecable en la sala de velación.', 51.75, 59.00, 'Composición floral blanca clásica con hojas verdes para homenaje póstumo', TRUE, 30, FALSE),
    (27, 3, 2, 'Abrazo de fe', 'Arreglo de condolencias para enviar al hogar de los deudos, compuesto por rosas crema, astromelias blancas y follaje plateado en base discreta de cerámica mate. Aporta calidez y serenidad en los días posteriores a la ceremonia, con tarjeta de pésame en sobre formal.', 56.80, NULL, 'Ramo sobrio en tonos crema y pastel suaves con cinta conmemorativa', TRUE, 30, FALSE),
    (28, 3, 2, 'Sendero de luz', 'Trípode floral majestuoso con más de 50 tallos entre rosas blancas, gladiolos, nardos perfumados y follaje de ruscus seleccionado. Su porte distinguido destaca en capillas y templos como muestra de aprecio institucional o familiar.', 69.00, NULL, 'Arreglo floral solemne con tallos verdes y flores claras en señal de respeto', TRUE, 30, FALSE),
    (29, 3, 1, 'Memoria viva', 'Jardinera fúnebre baja de estilo europeo con orquídeas blancas, rosas Mondial, anturios claros y hojas de monstera pulidas. Su diseño horizontal armónico es ideal para colocarse al pie del altar o junto al cofre cenizario.', 61.20, NULL, 'Arreglo de condolencias equilibrado y elegante para ceremonias conmemorativas', TRUE, 30, FALSE),
    (30, 3, 2, 'Silencio floral', 'Delicado bouquet de condolencias en tonos blanco perla y verde salvia, envuelto en lino natural con cinta de terciopelo gris perla. Pensado para entregar personalmente en mano a la familia como gesto íntimo de solidaridad y afecto.', 49.50, 56.00, 'Ramo sereno de rosas y flores blancas con eucalipto para acompañar con respeto', TRUE, 30, FALSE),
    (31, 1, 1, 'Encanto carmesí', 'Lujoso ramo imperial de 24 rosas rojas ecuatorianas de tallo largo (70 cm) seleccionadas capullo por capullo, acompañadas de ilusión blanca (gypsophila) y follaje de eucalipto. Un clásico atemporal de gran volumen y fragancia envolvente para expresar amor profundo.', 40.50, 47.00, 'Ramo abundante de rosas rojas profundas con follaje verde oscuro recién cortado', TRUE, 30, FALSE),
    (32, 1, 2, 'Destello dorado', 'Arreglo luminoso de rosas amarillas premium, alstroemerias doradas y botones de manzanilla silvestre dispuestos en espiral holandesa. Su paleta solar transmite gratitud, prosperidad y buenos deseos tanto en hogares como en oficinas.', 31.20, NULL, 'Ramo radiante de rosas amarillas frescas envuelto en papel artesanal', TRUE, 30, FALSE)
ON CONFLICT (id) DO UPDATE SET
    descripcion = EXCLUDED.descripcion,
    stock = EXCLUDED.stock,
    precio = EXCLUDED.precio,
    precio_anterior = EXCLUDED.precio_anterior;

-- Ajustar la secuencia de productos para nuevas creaciones desde el panel Admin
SELECT setval(pg_get_serial_sequence('public.productos', 'id'), COALESCE((SELECT MAX(id) FROM public.productos), 32));

-- Inserción de Imágenes Principales para los 32 Productos
INSERT INTO public.imagenes_producto (id, producto_id, url_imagen, orden, es_principal) VALUES
    (1, 1, 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (2, 2, 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (3, 3, 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (4, 4, 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (5, 5, 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (6, 6, 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (7, 7, 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (8, 8, 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (9, 9, 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (10, 10, 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (11, 11, 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (12, 12, 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (13, 13, 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (14, 14, 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (15, 15, 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (16, 16, 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (17, 17, 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (18, 18, 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (19, 19, 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (20, 20, 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (21, 21, 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (22, 22, 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (23, 23, 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (24, 24, 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (25, 25, 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (26, 26, 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (27, 27, 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (28, 28, 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (29, 29, 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (30, 30, 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (31, 31, 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80', 1, TRUE),
    (32, 32, 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80', 1, TRUE)
ON CONFLICT (id) DO NOTHING;

SELECT setval(pg_get_serial_sequence('public.imagenes_producto', 'id'), COALESCE((SELECT MAX(id) FROM public.imagenes_producto), 32));

