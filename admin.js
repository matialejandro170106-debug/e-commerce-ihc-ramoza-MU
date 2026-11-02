// =========================================================================
// RAMOZA - APLICACIÓN INDEPENDIENTE DE ADMINISTRACIÓN (SOLO ACCESO ADMIN)
// Gestión de Catálogo, Control de Stock (Inicial 30), Pedidos, Comprobantes,
// Seguridad Criptográfica SHA-256 + Sal y Conexión Directa a Supabase PostgreSQL
// =========================================================================

const galleryAdmin = (source) => [`${source.split("?")[0]}?auto=format&fit=crop&w=480&q=75`];

const DEFAULT_PRODUCTS = [
  // --- ARREGLOS FLORALES (10 productos · Stock inicial: 30 c/u) ---
  {
    id: 1,
    name: "Jardín de rosas",
    category: "Arreglos florales",
    price: 34.9,
    oldPrice: 42,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1512056495345-913a0c261dc8"),
    alt: "Arreglo floral Jardín de rosas compuesto por 18 rosas rojas frescas y follaje verde en envoltura de papel artesanal",
    description: "Composición romántica de 18 rosas rojas de exportación de tallo largo cultivadas en la Sierra ecuatoriana, acompañadas de hipericum rojo, eucalipto aromático y follaje silvestre de temporada. Envuelto a mano en papel kraft impermeable de doble capa con lazo de satén e incluye sobre de nutriente floral y tarjeta dedicatoria impresa para aniversarios o declaraciones especiales."
  },
  {
    id: 2,
    name: "Luz de girasoles",
    category: "Arreglos florales",
    price: 29.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1673277848241-86e145cd7112"),
    alt: "Arreglo floral Luz de girasoles con flores amarillas luminosas sobre mesa de madera rústica",
    description: "Ramo radiante elaborado con girasoles frescos de centro oscuro combinados con mini rosas amarillas, solidago dorado y hojas de ruscus verde intenso que aportan volumen y frescura. Presentado en envoltura rústica artesanal con cinta de yute natural, ideal para transmitir alegría, felicitar por un logro profesional o iluminar cualquier espacio del hogar."
  },
  {
    id: 3,
    name: "Dulce primavera",
    category: "Arreglos florales",
    price: 27.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1610190427750-03e9095f18e3"),
    alt: "Arreglo floral Dulce primavera con rosas rosadas, flores amarillas y hojas verdes frescas en jarrón",
    description: "Delicada mezcla primaveral de gerberas coral, rosas en tonos salmón, margaritas moradas de centro verde y botones florales frescos entrelazados con eucalipto baby. Cada arreglo es armado el mismo día por floristas artesanos para garantizar máxima duración en florero, convirtiéndolo en el obsequio perfecto para cumpleaños, agradecimientos o visitas familiares."
  },
  {
    id: 4,
    name: "Rosas de aurora",
    category: "Arreglos florales",
    price: 38,
    oldPrice: 45,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1694620131938-0f88d08610a4"),
    alt: "Ramo de 24 rosas rosadas seleccionadas con envoltura premium sobre fondo de mesa clara",
    description: "Bouquet de lujo conformado por 24 rosas ecuatorianas variedad Mondial y Pink Floyd en degradé de rosa pálido y pétalos bordes crema de gran apertura. Empacado en papel coreano mate resistente al agua con cinta de seda tejida y tarjeta de saludo personalizada, pensado para celebrar nacimientos, aniversarios o momentos inolvidables."
  },
  {
    id: 5,
    name: "Abrazo silvestre",
    category: "Arreglos florales",
    price: 31.75,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1645373570905-8820514f9fed"),
    alt: "Persona sosteniendo un ramo artesanal de flores silvestres variadas de estación en tonos naturales",
    description: "Diseño botánico de estilo campestre con claveles bicolor en blanco y fucsia, bayas de brunia plateada, astilbe y abundante follaje orgánico de eucalipto cinerea. Su estructura asimétrica y aroma fresco de campo brindan una estética natural y contemporánea, ideal para amantes de la naturaleza y decoración de interiores."
  },
  {
    id: 15,
    name: "Estación coral",
    category: "Arreglos florales",
    price: 33.6,
    oldPrice: 39.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1556712691-5c39e0e32a8e"),
    alt: "Ramo floral cálido con rosas color coral, anaranjadas y follaje de temporada",
    description: "Vibrante combinación de rosas en gamas coral, mandarina, durazno y rojo carmesí seleccionadas tallo por tallo en su punto exacto de apertura para asegurar más de 10 días de frescura. Acompañado de follaje verde esmeralda y envoltura protectora para transporte en automóvil, transmite calidez, energía y entusiasmo en cada entrega."
  },
  {
    id: 23,
    name: "Ramo lavanda",
    category: "Arreglos florales",
    price: 26.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1582874576091-26fa231ce87c"),
    alt: "Ramo delicado de rosas en tonalidades lavanda y rosa suave con lazo de tela",
    description: "Armonioso bouquet en tonalidades lilas, lavanda y rosa pastel compuesto por rosas variedad Ocean Song, alstroemerias claras y espigas aromáticas de lavanda seca. Envuelto en papel texturizado color marfil con lazo de organza, proyecta serenidad y elegancia para desear pronta recuperación o celebrar una fecha especial."
  },
  {
    id: 24,
    name: "Mesa de rosas",
    category: "Arreglos florales",
    price: 46.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1706741921206-837f9e326ecd"),
    alt: "Centro de mesa con florero de rosas rosadas abiertas y follaje de temporada",
    description: "Centro de mesa floral dispuesto sobre un florero cilíndrico de vidrio reutilizable con 20 rosas rosadas de botón grande, lisianthus blancos y ramas de eucalipto. Listo para exhibirse directamente en comedores, recepciones u oficinas sin necesidad de buscar recipiente adicional, incluyendo conservante floral e instrucciones de cuidado."
  },
  {
    id: 25,
    name: "Rosas de algodón",
    category: "Arreglos florales",
    price: 35.4,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1618239265038-9e4c865fbd10"),
    alt: "Ramo de rosas blancas y rosadas con envoltura de papel claro y cinta decorativa",
    description: "Fina selección de rosas blancas nieve y rosas rubor pálido acompañadas de gipsófila (velo de novia) y follaje verde suave que resalta la pureza de cada pétalo. Presentado en pliegos de papel seda blanco y cinta satinada, es el detalle predilecto para graduaciones, compromisos, bautizos o muestras de afecto sincero."
  },
  {
    id: 26,
    name: "Jarrón cielo",
    category: "Arreglos florales",
    price: 39.8,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1592560926131-050f712852f8"),
    alt: "Flores frescas blancas y amarillas dispuestas en un jarrón cerámico de color azul",
    description: "Arreglo de autor montado en un jarrón de cerámica esmaltada en tono azul celeste, combinado con rosas crema, ranúnculos amarillos, manzanilla ornamental y follaje aireado. Una pieza decorativa duradera cuyo jarrón artesanal queda como recuerdo permanente para el hogar o el escritorio de quien lo recibe."
  },

  // --- REGALOS (12 productos · Stock inicial: 30 c/u) ---
  {
    id: 6,
    name: "Rosas eternas",
    category: "Regalos",
    price: 49.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1518709779341-56cf4535e94b"),
    alt: "Caja de regalo con rosas rojas preservadas abiertas en primer plano con tarjeta de felicitación",
    description: "Exclusiva sombrerera rígida de colección con rosas rojas naturales sometidas a un proceso orgánico de preservación que mantiene intacta su textura aterciopelada y su color intenso hasta por más de un año sin requerir agua ni luz solar. Incluye tarjeta impresa en relieve dorado y bolsa de regalo de alta gama."
  },
  {
    id: 7,
    name: "Detalle rosa",
    category: "Regalos",
    price: 24.5,
    oldPrice: 29.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1615182787503-08365d1e7fae"),
    alt: "Detalle de regalo con mini ramo de rosas rosadas frescas y bombones de chocolate artesanal",
    description: "Combo de obsequio que une un bouquet compacto de rosas rosadas frescas y eucalipto con un estuche de 8 bombones artesanales elaborados con cacao fino de aroma ecuatoriano al 65%. Empacado con cinta decorativa y tarjeta dedicatoria, perfecto para sorprender en la oficina o celebrar un detalle espontáneo."
  },
  {
    id: 8,
    name: "Tomatodo botánico",
    category: "Regalos",
    price: 16.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1604432835437-59ad4d22c1a5"),
    alt: "Tomatodo térmico reutilizable con diseño botánico decorado con flor fresca y lazo",
    description: "Termo reutilizable de acero inoxidable de doble pared (500 ml) con ilustración botánica exclusiva, capaz de conservar bebidas frías por 12 horas o calientes por 8 horas. Se entrega en caja ecológica decorada con una flor natural fresca del día, lazo de tela y tarjeta personalizada."
  },
  {
    id: 9,
    name: "Desayuno entre flores",
    category: "Regalos",
    price: 39.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1686424735290-ea6ac590983c"),
    alt: "Caja sorpresa de desayuno con florero de rosas rosadas, jugo artesanal y fruta fresca",
    description: "Bandeja de madera artesanal que incluye un mini florero con rosas rosadas frescas, croissant recién horneado, jugo natural de naranja prensado en frío, bowl de frutas de estación picadas, yogurt griego con granola y café gourmet. Programado especialmente para entregas matutinas (08:00 a 11:00) con tarjeta impresa."
  },
  {
    id: 10,
    name: "Canasta con cariño",
    category: "Regalos",
    price: 44,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1689877164987-8cb9e9c91464"),
    alt: "Canasta de mimbre decorativa llena de flores frescas, galletas artesanales y vela aromática",
    description: "Canasta tejida en mimbre natural reutilizable que combina un arreglo floral en tonos pastel con una lata de galletas artesanales de mantequilla, una vela aromática de cera de soya con esencia de vainilla y lavanda, e infusiones relajantes. Ideal para el Día de la Madre, cumpleaños o desear bienestar en casa."
  },
  {
    id: 16,
    name: "Celebración",
    category: "Regalos",
    price: 36.25,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1713094010686-7e071fb887da"),
    alt: "Ramo de rosas rojas y rosadas en florero con globo de celebración y bombones",
    description: "Set festivo completo integrado por un arreglo de 12 rosas rojas y fucsias en base decorativa, un globo metalizado de 18 pulgadas inflado con helio y una caja de trufas rellenas de avellana y cacao. Pensado para llevar alegría inmediata en cumpleaños, ascensos laborales o sorpresas a domicilio en Quito y Valles."
  },
  {
    id: 17,
    name: "Canasta dulce",
    category: "Regalos",
    price: 32.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1777196582906-81a99c692de2"),
    alt: "Canasta de regalo artesanal con chocolates surtidos, flores decorativas y tarjeta",
    description: "Cesta gourmet surtida con chocolates finos rellenos de maracuyá, mora y caramelo salado, almendras confitadas y galletas bañadas en chocolate negro, coronada con un ramillete de flores frescas de estación. Envuelta en celofán protector con moño satinado y tarjeta dedicatoria."
  },
  {
    id: 18,
    name: "Baúl de chocolates",
    category: "Regalos",
    price: 41.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1647168672642-695e96782922"),
    alt: "Baúl pequeño de madera abierto mostrando selección de chocolates finos y lazo",
    description: "Cofre artesanal de madera pino barnizada con herrajes metálicos que alberga una cata de 16 chocolates ecuatorianos de exportación (70% cacao de origen Manabí y Esmeraldas), trufas belgas y flores secas aromáticas. El baúl funciona posteriormente como joyero o caja organizadora de recuerdos."
  },
  {
    id: 19,
    name: "Rosa y cacao",
    category: "Regalos",
    price: 28,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1687471603664-c76ac6556b6f"),
    alt: "Caja de bombones artesanales junto a una rosa roja fresca y tarjeta personalizada",
    description: "Estuche elegante de formato alargado que presenta una rosa roja imperial de tallo hidratado en tubo individual junto a una fila de 10 bombones artesanales de praliné y ganache de chocolate con leche. Un detalle sofisticado, romántico y fácil de transportar para aniversarios o citas especiales."
  },
  {
    id: 20,
    name: "Bolsa celebración",
    category: "Regalos",
    price: 35.75,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1772474316870-5a77e61a1f9e"),
    alt: "Bolsa de regalo decorada con flores frescas de temporada para cumpleaños",
    description: "Bolsa boutique rígida con asas de cordón de algodón que contiene una composición floral hidratada en esponja interna con rosas, claveles y alstroemerias de colores vivos, acompañada de una tarjeta de felicitación grande. Su diseño práctico permite entregarla y exhibirla en cualquier superficie sin requerir florero."
  },
  {
    id: 27,
    name: "Bolsa de cacao",
    category: "Regalos",
    price: 34.2,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1769738135915-7a317e95b609"),
    alt: "Bolsa de regalo con selección de chocolates finos, flores decorativas y tarjeta dedicatoria",
    description: "Presentación de regalo con dos tabletas de chocolate orgánico ecuatoriano, bombones rellenos de frutos rojos, frutos secos tostados y un bouquet lateral de flores frescas con eucalipto. Ideal para agradecimientos corporativos, detalles de amistad o celebraciones familiares."
  },
  {
    id: 28,
    name: "Canasta de jardín",
    category: "Regalos",
    price: 37.6,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1646948402935-86fa043e5ae1"),
    alt: "Canasta artesanal con flores silvestres y espacio para tarjeta de felicitaciones",
    description: "Cesta tejida a mano por artesanos locales equipada con espuma floral hidratada y decorada con rosas color durazno, margaritas blancas, statice morado y follaje fresco del día. Su asa firme y base estable facilitan el traslado seguro y lucen impecables en recibidores, terrazas o escritorios."
  },

  // --- FUNERARIOS (10 productos · Stock inicial: 30 c/u) ---
  {
    id: 11,
    name: "Corona serenidad",
    category: "Funerarios",
    price: 89,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1758334587590-011cf260c10f"),
    alt: "Corona fúnebre en forma de corazón elaborada con flores blancas, lirios lilas y cinta para dedicatoria",
    description: "Solemne corona fúnebre de gran formato (90 cm de diámetro) montada sobre atril de madera estable, elaborada con más de 60 tallos entre rosas blancas, lirios orientales lilas, crisantemos y follaje de palma seleccionada. Incluye cinta luctuosa impresa en letras doradas con tu dedicatoria de condolencia de hasta 350 caracteres para salas de velación."
  },
  {
    id: 12,
    name: "Paz blanca",
    category: "Funerarios",
    price: 64.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1787788629138-58bd773bf157"),
    alt: "Arreglo funerario solemne en canasta con calas blancas y follaje verde de condolencia",
    description: "Arreglo de condolencias dispuesto en canasta baja con espuma floral de hidratación prolongada, protagonizado por calas blancas naturales, rosas crema, gladiolos y hojas de monstera y ruscus. Diseñado para acompañar con sobriedad en capillas ardientes, misas de honras o enviar directamente al domicilio de la familia doliente."
  },
  {
    id: 13,
    name: "Memoria y luz",
    category: "Funerarios",
    price: 72,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1622299141360-cfb438913c02"),
    alt: "Corona fúnebre circular con flores blancas, rosas claras y follaje solemne con cinta dedicatoria",
    description: "Corona circular clásica de homenaje póstumo confeccionada con rosas blancas de exportación, pompones albos, liliums perfumados y gipsófila sobre aro de espuma hidratada con caballete incluido. Representa el ciclo eterno de la memoria y lleva impresa sin costo adicional la banda fúnebre con el nombre de los remitentes."
  },
  {
    id: 14,
    name: "Ramo consuelo",
    category: "Funerarios",
    price: 48.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1705980540921-818a93a07391"),
    alt: "Canasta de flores blancas y tonos morados para acompañamiento y pésame en velaciones",
    description: "Composición floral de pésame en tonos blancos y violetas suaves que combina rosas blancas, lisianthus morados, alstroemerias y follaje de eucalipto en base discreta. Su tamaño mediano permite ubicarlo tanto en el altar de la sala de velación como en el hogar familiar, acompañado de tarjeta y cinta luctuosa personalizada."
  },
  {
    id: 21,
    name: "Lirios de calma",
    category: "Funerarios",
    price: 58,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1498814117408-e396f5507073"),
    alt: "Arreglo fúnebre solemne de lirios blancos y rosas pálidas con cinta luctuosa",
    description: "Arreglo vertical de condolencias elaborado con varas de lirios blancos Stargazer y Casablanca de suave fragancia, escoltados por rosas marfil y follaje verde estructurado. Preparado al instante por nuestros floristas para conservar su frescura durante toda la jornada de velación, incluyendo cinta impresa."
  },
  {
    id: 22,
    name: "Canasta alba",
    category: "Funerarios",
    price: 54.25,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1571990306521-cf96e6858f2a"),
    alt: "Canasta de rosas blancas y beige con follaje verde solemne y tarjeta de condolencias",
    description: "Canasta de tributo floral tejida en tono natural con 24 rosas blancas y crema, claveles blancos importados y helecho cuero que aporta serenidad y respeto. Incluye hidratación interna en espuma Oasis de larga duración y tarjeta formal de condolencias para expresar solidaridad a familiares, amigos o colegas."
  },
  {
    id: 29,
    name: "Lirios blancos",
    category: "Funerarios",
    price: 61.5,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1721275690341-d236f5946c3a"),
    alt: "Composición floral funeraria de lirios blancos y hojas verdes en base solemne",
    description: "Tributo simétrico de alta presencia compuesto por lirios blancos abiertos y en botón, combinados con astromelias níveas y follaje tropical sobre base firme. Ideal para envíos institucionales o familiares a funerarias de Quito y los Valles, con transporte protegido en automóvil y cinta dedicatoria incluida."
  },
  {
    id: 30,
    name: "Ofrenda alba",
    category: "Funerarios",
    price: 67.9,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1681367613655-7358b0a088df"),
    alt: "Ramo amplio de flores blancas solemnes con cinta para dedicatoria de pésame",
    description: "Abanico floral de gran amplitud visual diseñado con más de 35 tallos de flores blancas entre rosas, gladiolos, crisantemos y nube blanca, montado sobre base elevada para flanquear el féretro o la urna. Incluye cinta fúnebre impresa con mensaje de condolencia y fotografía previa por WhatsApp antes del despacho."
  },
  {
    id: 31,
    name: "Cruz de esperanza",
    category: "Funerarios",
    price: 79.5,
    oldPrice: 88,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1544816155-12df9643f363"),
    alt: "Arreglo funerario en forma de cruz con rosas blancas, claveles y follaje solemne con cinta de pésame",
    description: "Solemne cruz floral de 1 metro de altura tupida con rosas blancas frescas, claveles seleccionados y follaje verde pino sobre estructura hidratada con soporte de pie incluido. Lleva cruzada una cinta de satén con impresión personalizada para acompañar ceremonias religiosas, sepelios y capillas ardientes."
  },
  {
    id: 32,
    name: "Cojín de condolencias",
    category: "Funerarios",
    price: 52,
    stock: 30,
    images: galleryAdmin("https://images.unsplash.com/photo-1526047932273-341f2a7631f9"),
    alt: "Cojín floral fúnebre con calas, lirios blancos y toques lilas para capilla ardiente o sala de velación",
    description: "Cojín horizontal para pie de féretro o mesa de honras elaborado en base de esponja húmeda con calas blancas, lirios, rosas claras y delicados acentos lilas de statice. Incluye tarjeta formal y cinta dedicatoria personalizada, entregado puntualmente en cualquier sala de velación de Quito y los Valles."
  }
];

// ================= FUNCIONES CRIPTOGRÁFICAS SHA-256 + SAL =================

function generateSalt(byteLength = 16) {
  const array = new Uint8Array(byteLength);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < byteLength; i++) array[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

function sha256Hex(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let result = '';
  const words = [];
  const utf8Str = unescape(encodeURIComponent(String(ascii)));
  const asciiBitLength = utf8Str.length * 8;
  let hash = sha256Hex.h = sha256Hex.h || [];
  const k = sha256Hex.k = sha256Hex.k || [];
  let primeCounter = k.length;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  hash = hash.slice(0, 8);
  let str = utf8Str + '\x80';
  while ((str.length % 64) - 56) str += '\x00';
  for (let i = 0; i < str.length; i++) {
    const j = str.charCodeAt(i);
    if (j >> 8) return '';
    words[i >> 2] |= j << ((3 - (i % 4)) * 8);
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;
  for (let j = 0; j < words.length;) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const a = hash[0], e = hash[4];
      const temp1 =
        hash[7] +
        (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
        ((e & hash[5]) ^ (~e & hash[6])) +
        k[i] +
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                w[i - 7] +
                (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
              0);
      const temp2 =
        (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
      hash.pop();
    }
    for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

function hashWithSalt(plainText, customSalt = null) {
  const salt = customSalt || generateSalt(16);
  const hash = sha256Hex(`${salt}:${String(plainText)}`);
  return { salt, hash, combined: `${salt}$${hash}` };
}

function containsSqlInjection(inputStr) {
  if (typeof inputStr !== 'string' || !inputStr) return false;
  const sqlPatterns = [
    /\b(DROP|TRUNCATE|ALTER)\s+(TABLE|DATABASE|SCHEMA|VIEW|INDEX|TRIGGER|FUNCTION)\b/i,
    /\bDELETE\s+FROM\b/i,
    /\bINSERT\s+INTO\b/i,
    /\bUPDATE\s+[a-zA-Z0-9_]+\s+SET\b/i,
    /\bUNION\s+(ALL\s+)?SELECT\b/i,
    /;\s*(DROP|DELETE|TRUNCATE|ALTER|INSERT|UPDATE|SELECT)\b/i,
    /'\s*(OR|AND)\s*'?\d+'?\s*=\s*'?\d+/i,
    /--\s*$/m,
    /<\s*script\b/i
  ];
  return sqlPatterns.some(p => p.test(inputStr));
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str || '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function logSecurityEvent(eventType, detail, extra = {}) {
  try {
    const raw = localStorage.getItem('ramoza_security_log');
    const logs = raw ? JSON.parse(raw) : [];
    logs.unshift({
      id: 'SEC-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      timestamp: new Date().toLocaleString('es-EC'),
      type: eventType,
      detail: detail,
      ...extra
    });
    localStorage.setItem('ramoza_security_log', JSON.stringify(logs.slice(0, 80)));
  } catch (e) {}
}

// Traductor de Errores de Constraints de Base de Datos
function translateDbConstraintError(err, context = {}) {
  const rawMessage = typeof err === 'string'
    ? err
    : (err?.message || err?.details || err?.hint || err?.constraint || '');
  const code = String(err?.code || '');
  const constraint = String(err?.constraint || context.constraint || '').toLowerCase();
  const lowerMsg = rawMessage.toLowerCase();

  logSecurityEvent(
    'DB_CONSTRAINT_TRANSLATED',
    `Error técnico interceptado y traducido a mensaje amigable (${constraint || code || 'constraint'})`,
    { payloadPreview: rawMessage.slice(0, 100) }
  );

  if (constraint.includes('stock') || lowerMsg.includes('stock')) {
    return '⚠️ Restricción de Stock: El stock de un producto debe estar entre 0 y 1000 unidades y no puede quedar en negativo.';
  }
  if (
    code === '23503' ||
    code === '1452' ||
    constraint.includes('fk_') ||
    lowerMsg.includes('foreign key constraint fails')
  ) {
    return '⚠️ No se puede completar la acción porque el registro está vinculado a un cliente, categoría o pedido activo.';
  }
  if (constraint.includes('precio') || constraint.includes('oferta')) {
    return '⚠️ El precio de venta debe ser mayor a $0.00 y el precio anterior debe ser mayor al precio actual.';
  }
  return '⚠️ Operación rechazada por regla de validación de la base de datos. Verifica los campos ingresados.';
}

// Credenciales Maestras del Administrador protegidas con Sal fija + Hash SHA-256
const ADMIN_EMAIL = 'admin@ramoza.ec';
const ADMIN_SALT = 'a1b2c3d4e5f60718293a4b5c6d7e8f90';
const ADMIN_EXPECTED_HASH = sha256Hex(`${ADMIN_SALT}:AdminRamoza2026`);

let adminState = {
  authenticated: sessionStorage.getItem('ramoza_admin_auth') === 'true',
  tab: 'products', // 'products' | 'orders' | 'security' | 'supabase'
  products: [],
  orders: [],
  simInput: '4532015112830366',
  simResult: null,
  constraintDemoResult: null
};

function getSupabaseConfig() {
  try {
    const saved = localStorage.getItem('ramoza_supabase_config');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { url: '', anonKey: '' };
}

function loadAdminData() {
  const savedConfig = localStorage.getItem('ramoza_supabase_config');
  if (!savedConfig) {
    const defaultConfig = {
      url: 'https://jrgazeamnnqnyumnybxo.supabase.co',
      anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZ2F6ZWFtbm5xbnl1bW55YnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NzU4OTQsImV4cCI6MjEwOTE1MTg5NH0.PHxJOMw-nBWcQal5zZ2iXq9zIRiRntjgwJzasitndVI'
    };
    localStorage.setItem('ramoza_supabase_config', JSON.stringify(defaultConfig));
  }
  try {
    const savedProds = localStorage.getItem('ramoza_custom_products');
    if (savedProds) {
      const parsed = JSON.parse(savedProds);
      adminState.products = parsed.map(item => {
        const def = DEFAULT_PRODUCTS.find(d => d.id === item.id);
        return {
          ...item,
          stock: typeof item.stock === 'number' ? item.stock : (def ? def.stock : 30),
          description: (!item.description || item.description.length < 115) && def
            ? def.description
            : item.description
        };
      });
    } else {
      adminState.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    }
  } catch (e) {
    adminState.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  }

  try {
    const savedOrders = localStorage.getItem('ramoza_orders');
    adminState.orders = savedOrders ? JSON.parse(savedOrders) : [];
  } catch (e) {
    adminState.orders = [];
  }
}

function saveAdminProducts() {
  localStorage.setItem('ramoza_custom_products', JSON.stringify(adminState.products));
}

function saveAdminOrders() {
  localStorage.setItem('ramoza_orders', JSON.stringify(adminState.orders));
  if (adminState.orders.length > 0 && adminState.orders[0].receipt) {
    localStorage.setItem('ramoza_last_receipt', JSON.stringify(adminState.orders[0].receipt));
  }
}

function showAdminToast(msg) {
  const el = document.getElementById('admin-toast');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  clearTimeout(el.timer);
  el.timer = setTimeout(() => {
    el.style.display = 'none';
  }, 4200);
}

function handleAdminLogin(form) {
  const email = (form.email.value || '').trim().toLowerCase();
  const pwd = form.password.value || '';

  if (containsSqlInjection(email) || containsSqlInjection(pwd)) {
    logSecurityEvent('SQL_INJECTION_BLOCKED', 'Intento de inyección SQL bloqueado en Login de Administrador', { payloadPreview: email.slice(0, 40) });
    showAdminToast('🛡️ Ataque SQL bloqueado y registrado en auditoría.');
    return;
  }

  const computedHash = sha256Hex(`${ADMIN_SALT}:${pwd}`);
  if (email === ADMIN_EMAIL && computedHash === ADMIN_EXPECTED_HASH) {
    adminState.authenticated = true;
    sessionStorage.setItem('ramoza_admin_auth', 'true');
    logSecurityEvent('ADMIN_LOGIN_SHA256', `Acceso concedido a ${ADMIN_EMAIL} verificando Sal + Hash SHA-256`, { salt: ADMIN_SALT, hashSha256: computedHash });
    showAdminToast('✓ Acceso concedido. Hash SHA-256 + Sal verificado.');
    renderAdmin();
  } else {
    logSecurityEvent('ADMIN_LOGIN_FAILED', `Intento fallido de acceso a panel admin con correo ${email}`, { salt: ADMIN_SALT, hashSha256: computedHash });
    showAdminToast('❌ Credenciales incorrectas. Verifica el correo y la clave de administrador.');
  }
}

function adminLogout() {
  adminState.authenticated = false;
  sessionStorage.removeItem('ramoza_admin_auth');
  showAdminToast('Sesión de administrador cerrada.');
  renderAdmin();
}

function toggleAdminPwd() {
  const inp = document.getElementById('admin-pwd');
  if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
}

// ================= ACCIONES DE PRODUCTOS Y CONTROL DE STOCK =================

async function syncProductToSupabase(prod) {
  const cfg = getSupabaseConfig();
  if (!cfg.url || !cfg.anonKey) return;
  const catIdMap = { 'Arreglos florales': 1, 'Regalos': 2, 'Funerarios': 3 };
  try {
    const res = await fetch(`${cfg.url.replace(/\/$/, '')}/rest/v1/productos?id=eq.${prod.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': cfg.anonKey,
        'Authorization': `Bearer ${cfg.anonKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        nombre: prod.name,
        categoria_id: catIdMap[prod.category] || 1,
        descripcion: prod.description,
        precio: prod.price,
        precio_anterior: prod.oldPrice || null,
        stock: prod.stock
      })
    });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw errBody;
    }
  } catch (err) {
    showAdminToast(translateDbConstraintError(err));
  }
}

function handleAddProduct(form) {
  const name = form.name.value.trim();
  const category = form.category.value;
  const price = parseFloat(form.price.value);
  const oldPrice = form.oldPrice.value ? parseFloat(form.oldPrice.value) : null;
  const stock = form.stock.value !== '' ? parseInt(form.stock.value, 10) : 30;
  const imageUrl = form.imageUrl.value.trim() || 'https://images.unsplash.com/photo-1512056495345-913a0c261dc8?auto=format&fit=crop&w=1200&q=85';
  const description = form.description.value.trim();

  if (containsSqlInjection(name) || containsSqlInjection(description) || containsSqlInjection(imageUrl)) {
    logSecurityEvent('SQL_INJECTION_BLOCKED', 'Intento de comando SQL bloqueado al crear producto en Admin', { payloadPreview: name });
    showAdminToast('🛡️ Alerta: No se permiten comandos SQL (DROP, DELETE, etc.).');
    return;
  }

  if (isNaN(stock) || stock < 0 || stock > 1000) {
    showAdminToast(translateDbConstraintError({ constraint: 'chk_producto_stock_no_negativo' }));
    return;
  }

  if (!name || isNaN(price) || price <= 0) {
    showAdminToast(translateDbConstraintError({ constraint: 'chk_producto_precio_positivo' }));
    return;
  }

  const maxId = adminState.products.reduce((max, p) => Math.max(max, p.id), 32);
  const newProd = {
    id: maxId + 1,
    name: name,
    category: category,
    price: Number(price.toFixed(2)),
    stock: stock,
    ...(oldPrice && oldPrice > price ? { oldPrice: Number(oldPrice.toFixed(2)) } : {}),
    images: [imageUrl],
    alt: `Arreglo floral ${name} de la categoría ${category}`,
    description: description || 'Composición floral fresca elaborada el mismo día de la entrega con tallos seleccionados de exportación, follaje natural e hidratación prolongada.'
  };

  adminState.products.unshift(newProd);
  saveAdminProducts();
  form.reset();
  showAdminToast(`✔ Producto "${name}" añadido con ${stock} unidades de stock.`);
  renderAdmin();
}

function updateProductRow(id) {
  const nameEl = document.getElementById(`prod-name-${id}`);
  const catEl = document.getElementById(`prod-cat-${id}`);
  const priceEl = document.getElementById(`prod-price-${id}`);
  const oldPriceEl = document.getElementById(`prod-oldprice-${id}`);
  const stockEl = document.getElementById(`prod-stock-${id}`);
  const descEl = document.getElementById(`prod-desc-${id}`);

  if (!nameEl || !priceEl || !stockEl) return;
  const newName = nameEl.value.trim();
  const newCat = catEl ? catEl.value : 'Arreglos florales';
  const newPrice = parseFloat(priceEl.value);
  const newOldPrice = oldPriceEl && oldPriceEl.value ? parseFloat(oldPriceEl.value) : null;
  const newStock = parseInt(stockEl.value, 10);
  const newDesc = descEl ? descEl.value.trim() : '';

  if (containsSqlInjection(newName) || containsSqlInjection(newDesc)) {
    logSecurityEvent('SQL_INJECTION_BLOCKED', `Intento bloqueado al editar producto #${id}`, { payloadPreview: newName });
    showAdminToast('🛡️ Comando SQL bloqueado por seguridad.');
    return;
  }

  if (isNaN(newStock) || newStock < 0 || newStock > 1000) {
    showAdminToast(translateDbConstraintError({ constraint: 'chk_producto_stock_no_negativo' }));
    return;
  }

  if (!newName || isNaN(newPrice) || newPrice <= 0) {
    showAdminToast(translateDbConstraintError({ constraint: 'chk_producto_precio_positivo' }));
    return;
  }

  const idx = adminState.products.findIndex(p => p.id === id);
  if (idx !== -1) {
    adminState.products[idx].name = newName;
    adminState.products[idx].category = newCat;
    adminState.products[idx].price = Number(newPrice.toFixed(2));
    adminState.products[idx].stock = newStock;
    if (newDesc) adminState.products[idx].description = newDesc;
    if (newOldPrice && newOldPrice > newPrice) {
      adminState.products[idx].oldPrice = Number(newOldPrice.toFixed(2));
    } else {
      delete adminState.products[idx].oldPrice;
    }
    saveAdminProducts();
    syncProductToSupabase(adminState.products[idx]);
    showAdminToast(`✔ Producto #${id} ("${newName}") guardado · Stock actual: ${newStock} unidades.`);
    renderAdmin();
  }
}

function resetAllStockTo30() {
  adminState.products.forEach(p => {
    p.stock = 30;
    syncProductToSupabase(p);
  });
  saveAdminProducts();
  showAdminToast('✔ Todos los productos han sido restablecidos a 30 unidades de stock.');
  renderAdmin();
}

function deleteProductRow(id) {
  const prod = adminState.products.find(p => p.id === id);
  if (!prod) return;
  adminState.products = adminState.products.filter(p => p.id !== id);
  saveAdminProducts();
  showAdminToast(`🗑️ Producto "${prod.name}" eliminado del catálogo.`);
  renderAdmin();
}

function restoreDefaultProducts() {
  localStorage.removeItem('ramoza_custom_products');
  adminState.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  saveAdminProducts();
  showAdminToast('↺ Catálogo restaurado a los 32 productos originales con descripciones completas y stock 30.');
  renderAdmin();
}

// ================= ACCIONES DE PEDIDOS Y COMPROBANTES =================

function toggleReceiptPaymentStatus(orderIndex) {
  const ord = adminState.orders[orderIndex];
  if (!ord) return;
  if (!ord.receipt) ord.receipt = {};

  const current = ord.receipt.paymentStatus || 'FALTA CANCELAR';
  const next = current === 'CANCELADO' ? 'FALTA CANCELAR' : 'CANCELADO';
  ord.receipt.paymentStatus = next;
  ord.receipt.paymentDetail = next === 'CANCELADO'
    ? 'Pago verificado y marcado como CANCELADO por el Administrador.'
    : 'Comprobante de Venta marcado como FALTA CANCELAR hasta la recepción del pago.';

  saveAdminOrders();
  showAdminToast(`✔ Comprobante ${ord.receipt.receiptNumber || ord.code} actualizado a ${next}.`);
  renderAdmin();
}

function changeOrderStatus(orderIndex, newStatus) {
  const ord = adminState.orders[orderIndex];
  if (!ord) return;
  ord.status = newStatus;
  ord.badgeClass = newStatus.includes('Entregado') ? 'success' : 'pending';
  saveAdminOrders();
  showAdminToast(`✔ Estado del pedido ${ord.code} actualizado a "${newStatus}".`);
  renderAdmin();
}

// ================= SIMULADORES EN VIVO Y CONEXIÓN SUPABASE =================

function runCryptoSimulation() {
  const inp = document.getElementById('sim-input');
  if (!inp) return;
  const val = inp.value;
  const isSqlAttack = containsSqlInjection(val);
  const cryptoRes = hashWithSalt(val);
  adminState.simInput = val;
  adminState.simResult = {
    plain: val,
    isSqlAttack: isSqlAttack,
    salt: cryptoRes.salt,
    hash: cryptoRes.hash
  };
  if (isSqlAttack) {
    logSecurityEvent('SQL_INJECTION_BLOCKED', 'Prueba de defensa Anti-SQLi en simulador Admin', { payloadPreview: val.slice(0, 50) });
  } else {
    logSecurityEvent('CRYPTO_TEST_SHA256', 'Generación de Sal + Hash SHA-256 en simulador Admin', { salt: cryptoRes.salt, hashSha256: cryptoRes.hash });
  }
  renderAdmin();
}

function runConstraintTranslationDemo(type) {
  let rawSqlError = '';
  let friendlyOutput = '';
  if (type === 'fk_1452') {
    rawSqlError = "ERROR 1452: Cannot add or update a child row: a foreign key constraint fails (`tienda`.`pedidos`, CONSTRAINT `fk_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`idcliente`))";
    friendlyOutput = translateDbConstraintError({ code: '1452', constraint: 'fk_cliente', message: rawSqlError });
  } else if (type === 'stock_23514') {
    rawSqlError = 'ERROR: 23514: new row for relation "carrito_items" violates check constraint "chk_carrito_limite_stock"';
    friendlyOutput = '⚠️ Stock insuficiente: Solo quedan 30 unidades disponibles en stock para "Dulce primavera". No puedes agregar más unidades de las existentes en inventario.';
  }
  adminState.constraintDemoResult = { rawSqlError, friendlyOutput };
  renderAdmin();
}

async function saveSupabaseConfigForm(form) {
  let url = (form.supaUrl.value || '').trim().replace(/\/+$/, '');
  // Si el usuario pegó la URL con "/rest/v1", la limpiamos para que quede la URL base del proyecto
  url = url.replace(/\/rest\/v1\/?$/, '');
  const anonKey = (form.supaKey.value || '').trim();
  localStorage.setItem('ramoza_supabase_config', JSON.stringify({ url, anonKey }));

  if (!url || !anonKey) {
    showAdminToast('Modo local activo (sin credenciales de Supabase).');
    renderAdmin();
    return;
  }

  try {
    const res = await fetch(`${url}/rest/v1/productos?select=id,nombre,stock&limit=5`, {
      headers: {
        'apikey': anonKey,
        'Authorization': `Bearer ${anonKey}`
      }
    });
    if (res.ok) {
      showAdminToast('🔌 ¡Conexión exitosa con PostgreSQL en Supabase!');
    } else {
      let detalleError = '';
      try {
        const errJson = await res.json();
        detalleError = errJson.message || errJson.error || JSON.stringify(errJson);
      } catch (_) {
        detalleError = `Código HTTP ${res.status} (${res.statusText})`;
      }
      console.error('Error de conexión Supabase:', res.status, detalleError);
      showAdminToast(`⚠️ Supabase respondió (${res.status}): ${detalleError}`);
    }
  } catch (e) {
    console.error('Fallo de red Supabase:', e);
    showAdminToast(`⚠️ Error de red/CORS: ${e.message}. Verifica el formato de la URL.`);
  }
  renderAdmin();
}

// ================= RENDERIZADO DE INTERFAZ SIMPLE Y ACCESIBLE =================

function renderAdmin() {
  loadAdminData();
  const app = document.getElementById('admin-app');
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (!app) return;

  if (!adminState.authenticated) {
    if (logoutBtn) logoutBtn.style.display = 'none';
    app.innerHTML = `
      <div class="card login-box" role="region" aria-labelledby="admin-login-title">
        <h2 id="admin-login-title">🔑 Acceso Exclusivo Administrador</h2>
        <p style="font-size: 13px; color: var(--slate-muted); margin: 0 0 16px;">
          Esta aplicación es independiente y de acceso privado. La contraseña se verifica mediante <strong>Sal Criptográfica + Hash SHA-256</strong>.
        </p>

        <div style="background: #E8F5ED; border: 1px solid var(--green); border-radius: 7px; padding: 10px 12px; margin-bottom: 16px; font-size: 12.5px;">
          <strong>Credenciales del Administrador:</strong><br />
          • Correo: <code>admin@ramoza.ec</code><br />
          • Clave: <code>AdminRamoza2026</code>
        </div>

        <form onsubmit="event.preventDefault(); handleAdminLogin(this);">
          <label for="admin-email">
            Correo del Administrador
            <input id="admin-email" name="email" type="email" required value="admin@ramoza.ec" />
          </label>
          <label for="admin-pwd">
            Contraseña Maestra
            <div style="display: flex; gap: 6px; margin-top: 4px;">
              <input id="admin-pwd" name="password" type="password" required value="AdminRamoza2026" style="margin-top: 0;" />
              <button type="button" class="btn btn-outline" onclick="toggleAdminPwd()" aria-label="Mostrar u ocultar contraseña">👁️ Ver</button>
            </div>
          </label>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 6px;">
            Verificar Hash SHA-256 y Entrar
          </button>
        </form>

        <div style="margin-top: 16px; border-top: 1px solid var(--border); padding-top: 12px; font-size: 11.5px; color: var(--slate-muted);">
          <strong>Hash SHA-256 + Sal requerido en Base de Datos:</strong>
          <div class="mono" style="margin-top: 4px;">
            Sal: ${ADMIN_SALT}<br />
            SHA-256: ${ADMIN_EXPECTED_HASH}
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (logoutBtn) logoutBtn.style.display = 'inline-flex';
  const logs = JSON.parse(localStorage.getItem('ramoza_security_log') || '[]');
  const supaCfg = getSupabaseConfig();
  const isSupaConfigured = Boolean(supaCfg.url && supaCfg.anonKey);

  app.innerHTML = `
    <div class="tabs" role="tablist" aria-label="Secciones del panel de administración">
      <button type="button" class="tab-btn ${adminState.tab === 'products' ? 'active' : ''}" onclick="adminState.tab='products'; renderAdmin();">
        🌸 1. Productos y Control de Stock (${adminState.products.length})
      </button>
      <button type="button" class="tab-btn ${adminState.tab === 'orders' ? 'active' : ''}" onclick="adminState.tab='orders'; renderAdmin();">
        🧾 2. Pedidos y Comprobantes (${adminState.orders.length})
      </button>
      <button type="button" class="tab-btn ${adminState.tab === 'security' ? 'active' : ''}" onclick="adminState.tab='security'; renderAdmin();">
        🛡️ 3. Seguridad SHA-256 + Sal y Constraints (${logs.length})
      </button>
      <button type="button" class="tab-btn ${adminState.tab === 'supabase' ? 'active' : ''}" onclick="adminState.tab='supabase'; renderAdmin();">
        🔌 4. Conexión Supabase PostgreSQL ${isSupaConfigured ? '✓' : ''}
      </button>
    </div>

    ${adminState.tab === 'products' ? `
      <div class="card">
        <h2>➕ Agregar Nuevo Producto al Catálogo</h2>
        <form onsubmit="event.preventDefault(); handleAddProduct(this);">
          <div class="grid-3">
            <label>
              Nombre del producto
              <input name="name" required maxlength="80" placeholder="Ej. Ramo Imperial de Lirios" />
            </label>
            <label>
              Categoría
              <select name="category">
                <option value="Arreglos florales">Arreglos florales</option>
                <option value="Regalos">Regalos</option>
                <option value="Funerarios">Funerarios</option>
              </select>
            </label>
            <label>
              Precio de venta ($)
              <input name="price" type="number" step="0.01" min="1" required placeholder="35.00" />
            </label>
            <label>
              Precio anterior tachado (Opcional $)
              <input name="oldPrice" type="number" step="0.01" min="1" placeholder="42.00" />
            </label>
            <label>
              Stock inicial disponible (unidades)
              <input name="stock" type="number" step="1" min="0" max="1000" required value="30" />
            </label>
            <label>
              URL de imagen (Unsplash)
              <input name="imageUrl" type="url" placeholder="https://images.unsplash.com/..." />
            </label>
          </div>
          <label style="margin-top: 8px;">
            Descripción detallada del producto
            <textarea name="description" rows="2" maxlength="500" placeholder="Describe las flores, tallos, envoltura y ocasión especial del producto..."></textarea>
          </label>
          <button type="submit" class="btn btn-primary" style="margin-top: 6px;">+ Guardar Nuevo Producto</button>
        </form>
      </div>

      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
          <h2 style="margin: 0;">📦 Inventario, Stock y Descripciones (${adminState.products.length} productos)</h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" class="btn btn-amber" onclick="resetAllStockTo30()">↺ Reiniciar todo el Stock a 30</button>
            <button type="button" class="btn btn-outline" onclick="restoreDefaultProducts()">↺ Restaurar catálogo original</button>
          </div>
        </div>
        <p style="font-size: 13px; color: var(--slate-muted); margin-top: 0;">
          Todos los productos inician con <strong>Stock = 30</strong>. Puedes modificar el <strong>Stock</strong>, el <strong>Precio</strong> o la <strong>Descripción</strong> de cualquier producto y presionar <strong>Guardar</strong>. Si un cliente intenta agregar más unidades que el stock configurado aquí, el sistema activará el constraint de stock insuficiente.
        </p>
        <div style="overflow-x: auto;">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre y Categoría</th>
                <th>Descripción Detallada</th>
                <th>Precio ($)</th>
                <th>Oferta ($)</th>
                <th>Stock Disponible</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${adminState.products.map(p => `
                <tr>
                  <td><strong>#${p.id}</strong></td>
                  <td style="min-width: 175px;">
                    <input id="prod-name-${p.id}" value="${escapeHtml(p.name)}" maxlength="80" aria-label="Nombre de ${escapeHtml(p.name)}" style="margin:0 0 6px 0;" />
                    <select id="prod-cat-${p.id}" aria-label="Categoría de ${escapeHtml(p.name)}" style="margin:0;">
                      <option value="Arreglos florales" ${p.category === 'Arreglos florales' ? 'selected' : ''}>Arreglos florales</option>
                      <option value="Regalos" ${p.category === 'Regalos' ? 'selected' : ''}>Regalos</option>
                      <option value="Funerarios" ${p.category === 'Funerarios' ? 'selected' : ''}>Funerarios</option>
                    </select>
                  </td>
                  <td style="min-width: 270px;">
                    <textarea id="prod-desc-${p.id}" rows="3" maxlength="600" aria-label="Descripción de ${escapeHtml(p.name)}" style="margin:0; font-size: 12px;">${escapeHtml(p.description || '')}</textarea>
                  </td>
                  <td><input id="prod-price-${p.id}" type="number" step="0.01" min="1" value="${p.price}" aria-label="Precio de ${escapeHtml(p.name)}" style="margin:0; width: 85px;" /></td>
                  <td><input id="prod-oldprice-${p.id}" type="number" step="0.01" min="0" value="${p.oldPrice || ''}" placeholder="-" aria-label="Precio anterior de ${escapeHtml(p.name)}" style="margin:0; width: 80px;" /></td>
                  <td>
                    <input id="prod-stock-${p.id}" type="number" step="1" min="0" max="1000" value="${typeof p.stock === 'number' ? p.stock : 30}" aria-label="Stock disponible de ${escapeHtml(p.name)}" style="margin:0; width: 82px; font-weight: 800; border-color: ${(p.stock ?? 30) <= 5 ? '#EF4444' : 'var(--green)'};" />
                  </td>
                  <td style="white-space: nowrap;">
                    <button type="button" class="btn btn-primary" onclick="updateProductRow(${p.id})">💾 Guardar</button>
                    <button type="button" class="btn btn-danger" onclick="deleteProductRow(${p.id})" aria-label="Eliminar ${escapeHtml(p.name)}">🗑️</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    ${adminState.tab === 'orders' ? `
      <div class="card">
        <h2>🧾 Control de Pedidos y Comprobantes de Venta (1:1 con cada Pago)</h2>
        <p style="font-size: 13px; color: var(--slate-muted); margin-top: 0;">
          Aquí puedes verificar los Comprobantes de Venta emitidos y cambiar su estado de <strong>FALTA CANCELAR</strong> (contraentrega) a <strong>CANCELADO</strong> cuando el chofer reciba el efectivo.
        </p>

        ${adminState.orders.length === 0 ? `
          <div style="padding: 24px; text-align: center; background: #F8FAFC; border-radius: 8px; color: var(--slate-muted);">
            Aún no se han generado pedidos nuevos en esta sesión. Realiza una compra de prueba en la tienda para administrarla aquí.
          </div>
        ` : `
          <div style="overflow-x: auto;">
            <table>
              <thead>
                <tr>
                  <th>Comprobante / Pago</th>
                  <th>Comprador y Documento</th>
                  <th>Productos / Total</th>
                  <th>Estado Comprobante</th>
                  <th>Estado Despacho</th>
                  <th>Acción Rápida</th>
                </tr>
              </thead>
              <tbody>
                ${adminState.orders.map((ord, idx) => {
                  const rec = ord.receipt || {};
                  const isPaid = (rec.paymentStatus || 'CANCELADO') === 'CANCELADO';
                  const docLabel = rec.buyerDocType === 'pasaporte' ? 'Pasaporte' : 'Cédula';
                  return `
                    <tr>
                      <td>
                        <strong>${escapeHtml(rec.receiptNumber || 'CV-2026')}</strong><br />
                        <span style="font-size: 11.5px; color: var(--slate-muted);">Pago: ${escapeHtml(rec.paymentCode || '-')} · Orden: ${escapeHtml(ord.code)}</span>
                      </td>
                      <td>
                        <strong>${escapeHtml(rec.buyerName || 'Cliente')}</strong><br />
                        <span style="font-size: 11.5px; color: var(--slate-muted);">${docLabel}: ${escapeHtml(rec.buyerCedula || '-')} · Tel: ${escapeHtml(rec.buyerPhone || '-')}</span>
                      </td>
                      <td>
                        <strong>$${Number(ord.total || 0).toFixed(2)}</strong><br />
                        <span style="font-size: 11.5px; color: var(--slate-muted);">${escapeHtml(ord.items)} (${escapeHtml(ord.payment)})</span>
                      </td>
                      <td>
                        <span class="badge ${isPaid ? 'badge-ok' : 'badge-wait'}">
                          ${isPaid ? '✓ CANCELADO' : '⏳ FALTA CANCELAR'}
                        </span>
                      </td>
                      <td>
                        <select onchange="changeOrderStatus(${idx}, this.value)" style="margin: 0; font-size: 12px; padding: 6px;">
                          <option value="En preparación con el florista" ${ord.status.includes('preparación') ? 'selected' : ''}>En preparación con el florista</option>
                          <option value="En ruta de entrega" ${ord.status.includes('ruta') ? 'selected' : ''}>En ruta de entrega</option>
                          <option value="✓ Entregado con fotografía" ${ord.status.includes('Entregado') ? 'selected' : ''}>✓ Entregado con fotografía</option>
                        </select>
                      </td>
                      <td>
                        <button type="button" class="btn ${isPaid ? 'btn-amber' : 'btn-primary'}" onclick="toggleReceiptPaymentStatus(${idx})">
                          ${isPaid ? 'Marcar FALTA CANCELAR' : '✓ Marcar CANCELADO'}
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    ` : ''}

    ${adminState.tab === 'security' ? `
      <div class="card">
        <h2>🛡️ Traductor de Constraints (Sin Errores Crudos de Base de Datos)</h2>
        <p style="font-size: 13px; color: var(--slate-muted); margin-top: 0;">
          Demostración de cómo la aplicación intercepta cualquier error técnico de constraint de la base de datos (como <code>ERROR 1452</code> o <code>23514 chk_carrito_limite_stock</code>) y jamás lo muestra en crudo al usuario, sino como un aviso claro en español:
        </p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button type="button" class="btn btn-outline" onclick="runConstraintTranslationDemo('stock_23514')">
            Probar Constraint de Stock Insuficiente (chk_carrito_limite_stock)
          </button>
          <button type="button" class="btn btn-outline" onclick="runConstraintTranslationDemo('fk_1452')">
            Probar Constraint Llave Foránea (ERROR 1452 / fk_cliente)
          </button>
        </div>
        ${adminState.constraintDemoResult ? `
          <div style="margin-top: 12px; padding: 14px; border-radius: 8px; background: #F8FAFC; border: 1px solid var(--border);">
            <div style="font-size: 12px; color: #991B1B; margin-bottom: 8px;">
              <strong>❌ Error técnico crudo del motor SQL (Oculto al usuario):</strong>
              <div class="mono" style="margin-top: 4px; background: #FEE2E2; color: #7F1D1D;">${escapeHtml(adminState.constraintDemoResult.rawSqlError)}</div>
            </div>
            <div style="font-size: 13px; color: #14532D;">
              <strong>✔ Mensaje amigable mostrado en la página web Ramoza:</strong>
              <div style="margin-top: 4px; padding: 10px 12px; border-radius: 6px; background: #E8F5ED; border-left: 4px solid var(--green); font-weight: 700;">
                ${escapeHtml(adminState.constraintDemoResult.friendlyOutput)}
              </div>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="card">
        <h2>🔬 Simulador en Vivo: Hash SHA-256 + Sal y Escudo Anti-Inyección SQL</h2>
        <p style="font-size: 13px; color: var(--slate-muted); margin-top: 0;">
          Prueba cómo se transforma cualquier contraseña o tarjeta de crédito en un <strong>Hash SHA-256 con Sal aleatoria de 128 bits</strong>, o escribe un comando peligroso como <code>DROP TABLE productos;</code> para comprobar el bloqueo automático.
        </p>
        <div style="display: flex; gap: 10px; align-items: flex-end; flex-wrap: wrap;">
          <label style="flex: 1; min-width: 260px; margin-bottom: 0;">
            Texto de prueba (Contraseña, Número de Tarjeta o intento de SQL Injection):
            <input id="sim-input" value="${escapeHtml(adminState.simInput)}" placeholder="Ej. 4532015112830366 o DROP TABLE usuarios;" />
          </label>
          <button type="button" class="btn btn-primary" onclick="runCryptoSimulation()">Generar Hash SHA-256 + Sal / Probar Escudo</button>
        </div>

        ${adminState.simResult ? `
          <div style="margin-top: 14px; padding: 14px; border-radius: 8px; background: ${adminState.simResult.isSqlAttack ? '#FEE2E2' : '#E8F5ED'}; border: 1px solid ${adminState.simResult.isSqlAttack ? '#EF4444' : 'var(--green)'};">
            <strong>${adminState.simResult.isSqlAttack ? '🚨 ¡INTENTO DE INYECCIÓN SQL DETECTADO Y BLOQUEADO!' : '🔒 Resumen Criptográfico Generado (SHA-256 + Sal):'}</strong>
            <div class="mono" style="margin-top: 8px; background: #FFFFFF;">
              <div><strong>Entrada analizada:</strong> ${escapeHtml(adminState.simResult.plain)}</div>
              <div><strong>Sal aleatoria (128 bits):</strong> ${adminState.simResult.salt}</div>
              <div><strong>Hash SHA-256 (64 hex):</strong> ${adminState.simResult.hash}</div>
              <div><strong>Formato en Base de Datos:</strong> ${adminState.simResult.salt}$${adminState.simResult.hash}</div>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h2 style="margin: 0;">📜 Registro de Auditoría Criptográfica y Bloqueos SQL (${logs.length})</h2>
          <button type="button" class="btn btn-outline" onclick="localStorage.removeItem('ramoza_security_log'); renderAdmin();">Limpiar registro</button>
        </div>
        ${logs.length === 0 ? `
          <p style="font-size: 13px; color: var(--slate-muted);">No hay eventos registrados todavía. Inicia sesión, paga con tarjeta en la tienda o usa el simulador superior para ver los hashes generados.</p>
        ` : `
          <div style="overflow-x: auto;">
            <table>
              <thead>
                <tr>
                  <th>Fecha / Hora</th>
                  <th>Tipo de Evento</th>
                  <th>Detalle</th>
                  <th>Sal Criptográfica / Hash SHA-256 / Payload</th>
                </tr>
              </thead>
              <tbody>
                ${logs.map(item => `
                  <tr>
                    <td style="white-space: nowrap;">${escapeHtml(item.timestamp)}</td>
                    <td>
                      <span class="badge ${item.type.includes('BLOCKED') || item.type.includes('FAILED') || item.type.includes('CONSTRAINT') ? 'badge-block' : 'badge-sec'}">
                        ${escapeHtml(item.type)}
                      </span>
                    </td>
                    <td>${escapeHtml(item.detail)}</td>
                    <td>
                      <div class="mono">
                        ${item.salt ? `<strong>Sal:</strong> ${escapeHtml(item.salt)}<br />` : ''}
                        ${item.hashSha256 ? `<strong>SHA-256:</strong> ${escapeHtml(item.hashSha256)}` : ''}
                        ${item.payloadPreview ? `<strong>Detalle:</strong> ${escapeHtml(item.payloadPreview)}` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    ` : ''}

    ${adminState.tab === 'supabase' ? `
      <div class="card">
        <h2>🔌 Conexión en Tiempo Real con PostgreSQL en Supabase</h2>
        <p style="font-size: 13px; color: var(--slate-muted); margin-top: 0;">
          Pega aquí la <strong>Project URL</strong> y la <strong>anon public key</strong> de tu proyecto en Supabase (desde <em>Project Settings → API</em>). Una vez guardadas, tanto la tienda pública como este panel de administración sincronizarán los productos, el stock y los comprobantes de venta directamente con PostgreSQL.
        </p>
        <form onsubmit="event.preventDefault(); saveSupabaseConfigForm(this);">
          <label>
            Supabase Project URL
            <input name="supaUrl" type="url" value="${escapeHtml(supaCfg.url || '')}" placeholder="https://tu-proyecto.supabase.co" />
          </label>
          <label>
            Supabase Anon Public Key
            <input name="supaKey" type="text" value="${escapeHtml(supaCfg.anonKey || '')}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
          </label>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button type="submit" class="btn btn-primary">💾 Guardar y Probar Conexión Supabase</button>
            <button type="button" class="btn btn-outline" onclick="localStorage.removeItem('ramoza_supabase_config'); showAdminToast('Desconectado de Supabase (Modo Local Activo).'); renderAdmin();">Desconectar (Usar Modo Local)</button>
          </div>
        </form>
      </div>
    ` : ''}
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAdmin);
} else {
  renderAdmin();
}
