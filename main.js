const gallery = (source) => [`${source.split("?")[0]}?auto=format&fit=crop&w=1200&q=85`];

const products = [
  { id: 1, name: "Jardín de rosas", category: "Arreglos florales", price: 34.9, oldPrice: 42, images: gallery("https://images.unsplash.com/photo-1512056495345-913a0c261dc8"), alt: "Ramo abundante de rosas rojas", description: "18 rosas frescas, follaje de temporada y envoltura artesanal. Ideal para celebrar un momento especial." },
  { id: 2, name: "Luz de girasoles", category: "Arreglos florales", price: 29.5, images: gallery("https://images.unsplash.com/photo-1673277848241-86e145cd7112"), alt: "Ramo amarillo sobre una mesa de madera", description: "Girasoles y flores amarillas en una composición luminosa, preparada por el proveedor el día de la entrega." },
  { id: 3, name: "Dulce primavera", category: "Arreglos florales", price: 27.9, images: gallery("https://images.unsplash.com/photo-1610190427750-03e9095f18e3"), alt: "Flores rosadas y amarillas con hojas verdes", description: "Mezcla suave de flores rosadas y amarillas con follaje fresco. Cada ramo es una pieza única." },
  { id: 4, name: "Rosas de aurora", category: "Arreglos florales", price: 38, oldPrice: 45, images: gallery("https://images.unsplash.com/photo-1694620131938-0f88d08610a4"), alt: "Ramo de rosas rosadas sobre una mesa", description: "24 rosas rosadas seleccionadas, con presentación premium y tarjeta para un mensaje personal." },
  { id: 5, name: "Abrazo silvestre", category: "Arreglos florales", price: 31.75, images: gallery("https://images.unsplash.com/photo-1645373570905-8820514f9fed"), alt: "Persona sosteniendo un ramo de flores silvestres", description: "Flores silvestres de estación con textura natural. Los tonos pueden variar según disponibilidad." },
  { id: 6, name: "Rosas eternas", category: "Regalos", price: 49.9, images: gallery("https://images.unsplash.com/photo-1518709779341-56cf4535e94b"), alt: "Rosas rojas abiertas en primer plano", description: "Caja de rosas preservadas que conserva su belleza por meses, acompañada de una tarjeta dedicatoria." },
  { id: 7, name: "Detalle rosa", category: "Regalos", price: 24.5, oldPrice: 29.9, images: gallery("https://images.unsplash.com/photo-1615182787503-08365d1e7fae"), alt: "Rosas rosadas fotografiadas de cerca", description: "Mini ramo de rosas, chocolate artesanal y tarjeta. Un detalle completo listo para regalar." },
  { id: 8, name: "Tomatodo botánico", category: "Regalos", price: 16.9, images: gallery("https://images.unsplash.com/photo-1604432835437-59ad4d22c1a5"), alt: "Mujer sosteniendo flores en tonos suaves", description: "Tomatodo térmico reutilizable con diseño botánico, empacado con una flor y tarjeta personalizable." },
  { id: 9, name: "Desayuno entre flores", category: "Regalos", price: 39.9, images: gallery("https://images.unsplash.com/photo-1686424735290-ea6ac590983c"), alt: "Florero con rosas rosadas sobre una mesa", description: "Caja de desayuno, jugo, fruta, flores frescas y mensaje impreso. Entregas de 08:00 a 11:00." },
  { id: 10, name: "Canasta con cariño", category: "Regalos", price: 44, images: gallery("https://images.unsplash.com/photo-1689877164987-8cb9e9c91464"), alt: "Florero lleno de flores rosadas", description: "Flores frescas, galletas y una vela aromática en una canasta reutilizable." },
  { id: 11, name: "Corona serenidad", category: "Funerarios", price: 89, images: gallery("https://images.unsplash.com/photo-1758334587590-011cf260c10f"), alt: "Corona en forma de corazón con flores blancas y lilas", description: "Corona en tonos blancos y lilas. Incluye una cinta con un mensaje breve." },
  { id: 12, name: "Paz blanca", category: "Funerarios", price: 64.5, images: gallery("https://images.unsplash.com/photo-1787788629138-58bd773bf157"), alt: "Ramo de calas blancas con hojas verdes", description: "Canasta de calas blancas y follaje, con tarjeta o cinta para un mensaje corto." },
  { id: 13, name: "Memoria y luz", category: "Funerarios", price: 72, images: gallery("https://images.unsplash.com/photo-1622299141360-cfb438913c02"), alt: "Corona de flores blancas con follaje", description: "Corona circular de flores claras y follaje con cinta personalizable." },
  { id: 14, name: "Ramo consuelo", category: "Funerarios", price: 48.9, images: gallery("https://images.unsplash.com/photo-1705980540921-818a93a07391"), alt: "Ramo de flores blancas y moradas sobre una mesa", description: "Canasta de flores blancas y lilas con una dedicatoria personal." },
  { id: 15, name: "Estación coral", category: "Arreglos florales", price: 33.6, oldPrice: 39.5, images: gallery("https://images.unsplash.com/photo-1556712691-5c39e0e32a8e"), alt: "Rosas naranjas, rojas y rosadas", description: "Rosas coral y flores de temporada en una combinación cálida. Disponible mientras dure la estación." },
  { id: 16, name: "Celebración", category: "Regalos", price: 36.25, images: gallery("https://images.unsplash.com/photo-1713094010686-7e071fb887da"), alt: "Ramo de rosas rojas y rosadas en florero", description: "Ramo colorido, globo y chocolates. Puedes escribir el mensaje antes de finalizar la compra." },
  { id: 17, name: "Canasta dulce", category: "Regalos", price: 32.9, images: gallery("https://images.unsplash.com/photo-1777196582906-81a99c692de2"), alt: "Canasta con chocolates surtidos", description: "Canasta con chocolates surtidos, flores decorativas y una tarjeta para dedicar." },
  { id: 18, name: "Baúl de chocolates", category: "Regalos", price: 41.5, images: gallery("https://images.unsplash.com/photo-1647168672642-695e96782922"), alt: "Baúl de madera abierto con chocolates", description: "Baúl pequeño de madera con una selección de chocolates y lazo decorativo." },
  { id: 19, name: "Rosa y cacao", category: "Regalos", price: 28, images: gallery("https://images.unsplash.com/photo-1687471603664-c76ac6556b6f"), alt: "Caja de chocolates junto a una rosa roja", description: "Caja de bombones con una rosa fresca y mensaje personalizado." },
  { id: 20, name: "Bolsa celebración", category: "Regalos", price: 35.75, images: gallery("https://images.unsplash.com/photo-1772474316870-5a77e61a1f9e"), alt: "Bolsa de regalo blanca con un arreglo de flores", description: "Bolsa decorada con flores frescas de temporada y una tarjeta para cumpleaños." },
  { id: 21, name: "Lirios de calma", category: "Funerarios", price: 58, images: gallery("https://images.unsplash.com/photo-1498814117408-e396f5507073"), alt: "Arreglo de flores blancas y rosa pálido", description: "Arreglo de flores claras con follaje discreto y cinta para dedicatoria." },
  { id: 22, name: "Canasta alba", category: "Funerarios", price: 54.25, images: gallery("https://images.unsplash.com/photo-1571990306521-cf96e6858f2a"), alt: "Ramo de rosas en tonos blancos y beige", description: "Canasta mediana de rosas claras, follaje y tarjeta." },
  { id: 23, name: "Ramo lavanda", category: "Arreglos florales", price: 26.5, images: gallery("https://images.unsplash.com/photo-1582874576091-26fa231ce87c"), alt: "Rosas en tonos lavanda y rosa", description: "Ramo delicado en tonos lavanda, envuelto en papel y lazo." },
  { id: 24, name: "Mesa de rosas", category: "Arreglos florales", price: 46.9, images: gallery("https://images.unsplash.com/photo-1706741921206-837f9e326ecd"), alt: "Florero de rosas rosadas sobre una mesa", description: "Florero reutilizable con rosas rosadas y follaje de temporada." },
  { id: 25, name: "Rosas de algodón", category: "Arreglos florales", price: 35.4, images: gallery("https://images.unsplash.com/photo-1618239265038-9e4c865fbd10"), alt: "Ramo de rosas blancas y rosadas", description: "Ramo de rosas blancas y rosadas con envoltura clara y lazo." },
  { id: 26, name: "Jarrón cielo", category: "Arreglos florales", price: 39.8, images: gallery("https://images.unsplash.com/photo-1592560926131-050f712852f8"), alt: "Flores blancas y amarillas en un jarrón azul", description: "Jarrón azul con flores claras y follaje ligero." },
  { id: 27, name: "Bolsa de cacao", category: "Regalos", price: 34.2, images: gallery("https://images.unsplash.com/photo-1769738135915-7a317e95b609"), alt: "Bolsa de regalo blanca con chocolates y flores decorativas", description: "Bolsa de regalo con chocolates surtidos, flores decorativas y una tarjeta para dedicar." },
  { id: 28, name: "Canasta de jardín", category: "Regalos", price: 37.6, images: gallery("https://images.unsplash.com/photo-1646948402935-86fa043e5ae1"), alt: "Canasta con flores sobre una mesa", description: "Canasta reutilizable con flores de temporada y espacio para una dedicatoria." },
  { id: 29, name: "Lirios blancos", category: "Funerarios", price: 61.5, images: gallery("https://images.unsplash.com/photo-1721275690341-d236f5946c3a"), alt: "Lirios blancos dentro de un florero", description: "Composición de lirios blancos y follaje en una base sencilla." },
  { id: 30, name: "Ofrenda alba", category: "Funerarios", price: 67.9, images: gallery("https://images.unsplash.com/photo-1681367613655-7358b0a088df"), alt: "Ramo de flores blancas con tallos verdes", description: "Ramo amplio de flores blancas con cinta para un mensaje breve." }
];

// Estado global (reemplaza a los hooks de React)
let state = {
  screen: 'home',
  selectedProductId: null,
  cart: {},
  query: '',
  category: 'Todos',
  signedIn: false,
  checkoutAfterAuth: false,
  orderNumber: '',
  fulfillmentMethod: 'delivery',
  showConfirmation: false
};

const icons = {
  search: '<circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />',
  cart: '<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H7" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" />',
  arrow: '<path d="M5 12h14" /><path d="m14 6 6 6-6 6" />',
  back: '<path d="M19 12H5" /><path d="m10 6-6 6 6 6" />',
  plus: '<path d="M12 5v14M5 12h14" />',
  minus: '<path d="M5 12h14" />',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" />',
  check: '<path d="m5 12 4 4L19 6" />',
  info: '<circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" />',
  leaf: '<path d="M5 21C5 10 11 4 20 3c0 9-5 15-15 18Z" /><path d="M6 19c3-5 6-8 11-12" />',
  user: '<circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />',
  close: '<path d="m6 6 12 12M18 6 6 18" />'
};

const getIcon = (name, size = 22) => `
  <svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    ${icons[name]}
  </svg>
`;

function getProduct(id) {
  return products.find(p => p.id === id);
}

function renderProductCard(p) {
  const quantity = state.cart[p.id] || 0;
  return `
    <article class="product-card">
      <button class="product-image" onclick="openProduct(${p.id})" aria-label="Ver detalles de ${p.name}">
        <img src="${p.images[0]}" alt="${p.alt}" />
      </button>
      <div class="product-copy">
        <p class="eyebrow" aria-hidden="true">${p.category}</p>
        <button class="product-name" onclick="openProduct(${p.id})" aria-label="Ver detalles de ${p.name}">${p.name}</button>
        <div class="price-line">
          <div><strong ${p.oldPrice ? 'style="color: var(--coral);"' : ''}>$${p.price.toFixed(2)}</strong>${p.oldPrice ? `<del aria-label="Precio anterior">$${p.oldPrice.toFixed(2)}</del>` : ''}</div>
          ${quantity === 0 
            ? `<button class="round-add" onclick="updateCart(${p.id}, 1)" aria-label="Agregar 1 unidad de ${p.name} al carrito">${getIcon('plus')}</button>` 
            : `<div class="card-quantity" role="group" aria-label="Control de cantidad de ${p.name}">
                 <button class="${quantity === 1 ? 'delete-control' : ''}" onclick="updateCart(${p.id}, -1)" aria-label="${quantity === 1 ? `Eliminar ${p.name} del carrito` : `Quitar una unidad de ${p.name}`}">
                   ${getIcon(quantity === 1 ? 'trash' : 'minus', 16)}
                 </button>
                 <span aria-live="polite" aria-atomic="true">${quantity} en carrito</span>
                 <button onclick="updateCart(${p.id}, 1)" aria-label="Añadir otra unidad de ${p.name}">${getIcon('plus', 17)}</button>
               </div>`
          }
        </div>
      </div>
    </article>
  `;
}

// ================= VISTAS =================

function viewHome() {
  const top12 = products.slice(0, 12).map(renderProductCard).join('');
  return `
    <section class="hero" aria-labelledby="hero-heading">
      <img src="https://images.unsplash.com/photo-1685613858397-64f79a0f3603?auto=format&fit=crop&w=1600&q=90" alt="Arreglo floral fresco y luminoso" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-kicker" aria-hidden="true">FLORES FRESCAS · ENTREGAS EN QUITO Y VALLES</p>
        <h1 id="hero-heading">Un detalle que<br />llega <em>a tiempo.</em></h1>
        <p>Elige, personaliza y decide cómo recibir tu pedido en pocos pasos. Te mostramos el precio y la disponibilidad antes de pagar.</p>
        <button class="primary" onclick="setCategory('Todos'); navigate('search')" aria-label="Ver todos los productos del catálogo">Ver productos ${getIcon('arrow')}</button>
      </div>
    </section>

    <section class="category-strip" aria-labelledby="category-heading">
      <div class="section-heading">
        <div><p class="eyebrow" aria-hidden="true">COMPRA POR OCASIÓN</p><h2 id="category-heading">Encuentra el detalle indicado</h2></div>
      </div>
      <div class="category-grid">
        <button class="category-tile" onclick="setCategory('Arreglos florales'); navigate('category')" aria-label="Explorar todos los Arreglos florales">
          <img src="${products[2].images[0]}" alt="Ejemplo de arreglos florales" />
          <span><b>Arreglos florales</b><small>Celebra lo cotidiano con flores frescas.</small><i>Explorar ${getIcon('arrow', 18)}</i></span>
        </button>
        <button class="category-tile" onclick="setCategory('Regalos'); navigate('category')" aria-label="Explorar todos los Regalos">
          <img src="${products[8].images[0]}" alt="Ejemplo de regalos" />
          <span><b>Regalos</b><small>Pequeños gestos para grandes momentos.</small><i>Explorar ${getIcon('arrow', 18)}</i></span>
        </button>
        <button class="category-tile" onclick="setCategory('Funerarios'); navigate('category')" aria-label="Explorar todos los Arreglos Funerarios">
          <img src="${products[11].images[0]}" alt="Ejemplo de arreglos funerarios" />
          <span><b>Funerarios</b><small>Acompaña con respeto cuando más importa.</small><i>Explorar ${getIcon('arrow', 18)}</i></span>
        </button>
      </div>
    </section>

    <section class="catalog-section" aria-labelledby="catalog-heading">
      <div class="section-heading">
        <div><p class="eyebrow" aria-hidden="true">CATÁLOGO</p><h2 id="catalog-heading">Explora nuestros productos</h2></div>
      </div>
      <div class="product-rail" role="region" tabindex="0" aria-label="Lista desplazable horizontal de productos destacados">
        ${top12}
        <div class="rail-end"><span>${getIcon('leaf', 32)}</span><b>Eso es todo por ahora</b><p>Incorporamos nuevos productos de proveedores aliados cada semana.</p></div>
      </div>
    </section>
  `;
}

function viewSearchCategory() {
  const filtered = products.filter(p => {
    const matchCat = state.category === 'Todos' || p.category === state.category;
    const text = (p.name + " " + p.category + " " + p.description).toLowerCase();
    return matchCat && text.includes(state.query.trim().toLowerCase());
  });

  const heading = state.screen === 'search' 
    ? (state.query ? `Resultados para "${state.query}"` : 'Resultados de búsqueda')
    : state.category;
  
  const eyebrow = state.screen === 'search' ? 'RESULTADOS DE BÚSQUEDA' : 'CATÁLOGO';

  return `
    <section class="page-shell listing-page">
      <button class="back-link" aria-label="Volver a la página de inicio" onclick="navigate('home')">${getIcon('back')} Volver al inicio</button>
      <div class="listing-heading">
        <div>
          <p class="eyebrow" aria-hidden="true">${eyebrow}</p>
          <h1 aria-live="polite">${heading}</h1>
          <p>${filtered.length} productos disponibles.</p>
        </div>
      </div>
      <div class="product-grid" role="region" aria-label="Cuadrícula de productos filtrados">
        ${filtered.map(renderProductCard).join('')}
      </div>
    </section>
  `;
}

function viewDetail() {
  const p = getProduct(state.selectedProductId);
  const qty = state.cart[p.id] || 0;
  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 5).map(renderProductCard).join('');

  return `
    <section class="page-shell">
      <button class="back-link" aria-label="Volver al catálogo" onclick="navigate('home')">${getIcon('back')} Volver al catálogo</button>
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="detail-image"><img src="${p.images[0]}" alt="${p.alt}" /></div>
        </div>
        <div class="detail-copy">
          <p class="eyebrow">${p.category}</p>
          <h1>${p.name}</h1>
          <div class="detail-price"><strong ${p.oldPrice ? 'style="color: var(--coral);"' : ''}>$${p.price.toFixed(2)}</strong>${p.oldPrice ? `<del aria-label="Precio anterior">$${p.oldPrice.toFixed(2)}</del>`:''}</div>
          <p class="description">${p.description}</p>
          <div class="availability">${getIcon('check')}<div><b>Disponible para envío en Quito y Valles o retiro</b><small>Ramoza coordina un automóvil para proteger el producto.</small></div></div>
          
          ${qty === 0 
            ? `<button class="primary wide" onclick="updateCart(${p.id}, 1); showToast('${p.name} agregado')" aria-label="Agregar ${p.name} al carrito por $${p.price.toFixed(2)}">
            Agregar al carrito · $${p.price.toFixed(2)} ${getIcon('cart')}
          </button>`
            : `<div class="card-quantity" style="width: 100%; justify-content: space-between; margin-bottom: 12px; min-height: 48px;" role="group" aria-label="Control de cantidad de ${p.name}">
                 <button class="${qty === 1 ? 'delete-control' : ''}" style="width: 48px;" onclick="updateCart(${p.id}, -1)" aria-label="${qty === 1 ? `Eliminar ${p.name} del carrito` : `Quitar una unidad de ${p.name}`}">
                   ${getIcon(qty === 1 ? 'trash' : 'minus', 18)}
                 </button>
                 <span aria-live="polite" aria-atomic="true" style="font-size: 15px;">${qty} en carrito</span>
                 <button style="width: 48px;" onclick="updateCart(${p.id}, 1)" aria-label="Añadir otra unidad de ${p.name}">${getIcon('plus', 19)}</button>
               </div>`
          }
          
          <button class="secondary wide detail-cart-link" onclick="navigate('cart')" aria-label="Ir directamente al carrito de compras">Ir al carrito ${getIcon('arrow')}</button>
        </div>
      </div>
      <div class="related">
        <div class="section-heading"><div><p class="eyebrow" aria-hidden="true">TAMBIÉN PODRÍA GUSTARTE</p><h2>Productos relacionados</h2></div></div>
        <div class="product-rail compact" role="region" tabindex="0" aria-label="Lista desplazable de productos similares">${related}</div>
      </div>
    </section>
  `;
}

function viewCart() {
  const cartIds = Object.keys(state.cart).map(Number);
  if (cartIds.length === 0) {
    return `
      <section class="page-shell narrow">
        <button class="back-link" onclick="navigate('home')" aria-label="Volver a la tienda para seguir comprando">${getIcon('back')} Seguir comprando</button>
        <div class="empty-state">
          <span class="empty-icon" aria-hidden="true">${getIcon('cart', 38)}</span>
          <h2>Tu carrito está vacío</h2>
          <button class="primary" onclick="navigate('home')" aria-label="Regresar al inicio para ver productos">Ver productos ${getIcon('arrow')}</button>
        </div>
      </section>
    `;
  }

  let subtotal = 0;
  const itemsHtml = cartIds.map(id => {
    const p = getProduct(id);
    const q = state.cart[id];
    subtotal += p.price * q;
    return `
      <article class="cart-item">
        <img src="${p.images[0]}" alt="${p.alt}" />
        <div class="cart-item-info">
          <p class="eyebrow" aria-hidden="true">${p.category}</p>
          <h2>${p.name}</h2>
          <div class="quantity" role="group" aria-label="Control de cantidad de ${p.name}">
            <button class="${q===1?'delete-control':''}" onclick="updateCart(${id}, -1)" aria-label="${q===1 ? `Eliminar ${p.name} del carrito` : `Quitar una unidad de ${p.name}`}">${getIcon(q===1?'trash':'minus', 17)}</button>
            <span aria-live="polite" aria-atomic="true">${q} en carrito</span>
            <button onclick="updateCart(${id}, 1)" aria-label="Añadir una unidad de ${p.name}">${getIcon('plus', 17)}</button>
          </div>
        </div>
        <div class="cart-item-end"><strong aria-label="Subtotal del producto: $${(p.price * q).toFixed(2)}">$${(p.price * q).toFixed(2)}</strong></div>
      </article>
    `;
  }).join('');

  return `
    <section class="page-shell narrow">
      <button class="back-link" onclick="navigate('home')" aria-label="Volver al inicio para seguir comprando">${getIcon('back')} Seguir comprando</button>
      <div class="page-title"><p class="eyebrow" aria-hidden="true">TU COMPRA</p><h1>Carrito de compras</h1></div>
      <div class="cart-layout">
        <div class="cart-items" role="list" aria-label="Artículos en tu carrito">${itemsHtml}</div>
        <aside class="summary" aria-label="Resumen de pago">
          <h2>Resumen del pedido</h2>
          <div><span>Subtotal</span><b>$${subtotal.toFixed(2)}</b></div>
          <hr />
          <div class="total"><span>Total estimado</span><strong>$${subtotal.toFixed(2)}</strong></div>
          <button class="primary wide" onclick="navigate(state.signedIn ? 'checkout' : 'signin')" aria-label="${state.signedIn ? 'Proceder a elegir el método de entrega' : 'Iniciar sesión para continuar con la compra'}">
            ${state.signedIn ? 'Elegir entrega' : 'Iniciar sesión para comprar'} ${getIcon('arrow')}
          </button>
        </aside>
      </div>
    </section>
  `;
}

function viewCheckout() {
  const delivery = state.fulfillmentMethod === 'pickup' ? 0 : null;
  let subtotal = 0;
  Object.keys(state.cart).forEach(id => { subtotal += getProduct(Number(id)).price * state.cart[id]; });

  const total = subtotal + (delivery || 0);

  return `
    <section class="page-shell narrow">
      <button class="back-link" onclick="navigate('cart')" aria-label="Volver al carrito de compras">${getIcon('back')} Volver al carrito</button>
      <div class="page-title"><p class="eyebrow" aria-hidden="true">FINALIZAR COMPRA</p><h1>¿Cómo quieres recibirlo?</h1></div>
      
      <form class="checkout-layout" onsubmit="event.preventDefault(); state.showConfirmation=true; renderApp();">
        <div class="checkout-form">
          <fieldset><legend>Datos de contacto</legend>
            <div class="form-grid">
              <label>Nombre completo
                <input required placeholder="Ej. María Pérez" aria-label="Ingresa tu nombre completo" />
              </label>
              <label>Teléfono (WhatsApp)
                <input required type="tel" placeholder="09..." aria-label="Ingresa tu número de celular para contactarte por WhatsApp" />
              </label>
            </div>
          </fieldset>

          <fieldset><legend>Método de entrega</legend>
            <label class="payment-option ${state.fulfillmentMethod === 'delivery' ? 'selected' : ''}">
              <input type="radio" name="fulfillment" value="delivery" onchange="state.fulfillmentMethod='delivery'; renderApp()" ${state.fulfillmentMethod === 'delivery' ? 'checked' : ''} aria-label="Envío protegido en Quito y Valles" />
              <span aria-hidden="true"><b>Envío protegido en Quito y Valles</b><small>Solicitaremos un automóvil mediante Uber Flash o inDrive.</small></span>
            </label>
            <label class="payment-option ${state.fulfillmentMethod === 'pickup' ? 'selected' : ''}">
              <input type="radio" name="fulfillment" value="pickup" onchange="state.fulfillmentMethod='pickup'; renderApp()" ${state.fulfillmentMethod === 'pickup' ? 'checked' : ''} aria-label="Retiro en persona con el proveedor, sin costo adicional" />
              <span aria-hidden="true"><b>Retiro con el proveedor</b><small>Te avisaremos por WhatsApp cuando el pedido esté listo. Sin costo.</small></span>
            </label>
          </fieldset>
          
          ${state.fulfillmentMethod === 'delivery' ? `
            <fieldset id="address-fields"><legend>Dirección de entrega</legend>
              <div class="form-grid">
                <label class="full">Dirección, sector y referencia
                  <input required placeholder="Calle, número, sector..." aria-label="Ingresa tu dirección completa, sector de la ciudad y una referencia visual" />
                </label>
              </div>
            </fieldset>
          ` : `
            <aside class="pickup-note" aria-live="polite">${getIcon('info', 20)}<div><b>Retiro sin costo</b><p>No necesitas ingresar dirección.</p></div></aside>
          `}
        </div>
        
        <aside class="summary" aria-label="Resumen de pago final">
          <h2>Resumen del pedido</h2>
          <div><span>Subtotal</span><b>$${subtotal.toFixed(2)}</b></div>
          <div><span>${state.fulfillmentMethod === 'delivery' ? 'Envío' : 'Retiro'}</span><b class="${delivery===null?'pending-cost':''}">${delivery===null?'Por confirmar':'$0.00'}</b></div>
          <hr />
          <div class="total"><span>Total a pagar</span><strong>$${total.toFixed(2)}</strong></div>
          <button class="primary wide" type="submit" aria-label="Confirmar pedido y registrar compra">Confirmar pedido ${getIcon('arrow')}</button>
        </aside>
      </form>
      ${state.showConfirmation ? `
        <div class="modal-overlay" style="position: fixed; inset: 0; background: rgba(44, 62, 80, 0.6); display: grid; place-items: center; z-index: 100; backdrop-filter: blur(2px);">
          <div class="modal-card" style="background: var(--smoke); padding: 35px 30px; border-radius: 12px; width: min(420px, 90%); text-align: center; box-shadow: 0 25px 50px rgba(44,62,80,0.3);">
            <div style="margin-bottom: 25px;">
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px auto; display: block;">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>
              </svg>
              <h3 style="color: var(--slate); font: 700 24px Georgia, serif; margin: 0 0 8px 0; line-height: 1.1;">Confirmar pedido</h3>
              <p style="color: rgba(44,62,80,0.75); font-size: 15px; margin: 0; line-height: 1.4;">¿Seguro quieres comprar este artículo?</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <button type="button" class="secondary" style="border-color: #E74C3C; color: #E74C3C;" onclick="state.showConfirmation=false; renderApp();">No, revisar</button>
              <button type="button" class="primary" onclick="submitOrder()">Sí, confirmar</button>
            </div>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}

function viewSuccess() {
  return `
    <section class="success-page" aria-live="polite">
      <span class="success-mark" aria-hidden="true">${getIcon('check', 40)}</span>
      <p class="eyebrow" aria-hidden="true">PEDIDO REGISTRADO</p>
      <h1>Tu pedido quedó confirmado.</h1>
      <div class="order-code"><small>Número de pedido</small><strong aria-label="El número de tu pedido es ${state.orderNumber}">${state.orderNumber}</strong></div>
      <button class="primary" onclick="navigate('home')" aria-label="Volver a la página de inicio">Volver al inicio ${getIcon('arrow')}</button>
    </section>
  `;
}

function viewAuth(type) {
  return `
    <section class="auth-page">
      <div class="auth-card">
        <h1>${type === 'signin' ? 'Inicia sesión en Ramoza' : 'Crea una cuenta en Ramoza'}</h1>
        <form onsubmit="event.preventDefault(); state.signedIn=true; navigate(Object.keys(state.cart).length ? 'checkout' : 'home');" autocomplete="off">
          <label>Correo electrónico <input type="text" autocomplete="off" aria-label="Ingresa tu correo electrónico" /></label>
          <label>Contraseña <input type="password" autocomplete="new-password" aria-label="Ingresa tu contraseña" /></label>
          <button class="primary wide" type="submit" aria-label="${type === 'signin' ? 'Iniciar sesión' : 'Registrar nueva cuenta'}">${type === 'signin' ? 'Entrar' : 'Registrarse'}</button>
        </form>
      </div>
    </section>
  `;
}

function viewAccount() {
  return `
    <section class="page-shell account-page">
      <button class="back-link" onclick="navigate('home')" aria-label="Volver a la tienda para seguir comprando">${getIcon('back')} Volver a la tienda</button>
      <div class="page-title"><p class="eyebrow" aria-hidden="true">MI CUENTA</p><h1>Hola, visitante</h1><p>Encuentra flores y obsequios para tu próxima ocasión.</p></div>
      <button class="primary" onclick="navigate('home')" aria-label="Ir al inicio para realizar compras">Ir a comprar ${getIcon('arrow', 17)}</button>
      <button class="secondary" onclick="state.signedIn=false; navigate('home');" aria-label="Cerrar sesión de la cuenta actual">Cerrar sesión</button>
    </section>
  `;
}

function viewPolicy() {
  return `
    <section class="page-shell policy-page">
      <button class="back-link" aria-label="Volver a la página de inicio" onclick="navigate('home')">${getIcon('back')} Volver al inicio</button>
      <div class="page-title"><h1>Envíos y devoluciones</h1></div>
      <div class="policy-grid">
        <article><span aria-hidden="true">01</span><h2>Antes de preparar</h2><p>Puedes solicitar la cancelación o el cambio mientras el proveedor todavía no haya preparado el pedido. Escríbenos con tu número de pedido.</p></article>
        <article><span aria-hidden="true">02</span><h2>Productos perecibles</h2><p>Las flores no admiten devolución por cambio de opinión una vez entregadas. Algunas variedades pueden sustituirse por otras equivalentes si falta stock; te avisaremos primero.</p></article>
        <article><span aria-hidden="true">03</span><h2>Si algo llegó mal</h2><p>Reporta daños, un producto incorrecto o una entrega incompleta con una fotografía. Gestionaremos con el proveedor la reposición del producto o la devolución del dinero.</p></article>
        <article><span aria-hidden="true">04</span><h2>Entrega en Quito y Valles</h2><p>Ramoza coordina el traslado en automóvil mediante Uber Flash o inDrive Entregas para proteger los arreglos. La tarifa depende de la ruta y se confirma por WhatsApp. También puedes retirar sin costo con el proveedor.</p></article>
      </div>
      <aside class="help-band">${getIcon('info', 28)}<div><h2>¿Tienes un problema con tu pedido?</h2><p>Escríbenos por WhatsApp con el número de pedido y una foto si el producto llegó dañado.</p></div><button class="secondary" aria-label="Escribir al equipo de soporte por WhatsApp para reportar un problema con tu pedido">Escribir por WhatsApp</button></aside>
    </section>
  `;
}

// ================= CONTROLADOR =================

function navigate(screen, push = true) {
  state.screen = screen;
  if (push) {
    history.pushState({ screen, category: state.category, productId: state.selectedProductId }, "", `#${screen}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
}

window.addEventListener("popstate", (e) => {
  if (e.state) {
    state.screen = e.state.screen;
    state.category = e.state.category;
    state.selectedProductId = e.state.productId;
    renderApp();
  }
});

function openProduct(id) {
  state.selectedProductId = id;
  navigate('detail');
}

function setCategory(cat) {
  state.category = cat;
}

function updateCart(id, delta) {
  const current = state.cart[id] || 0;
  const next = Math.max(0, current + delta);
  if (next === 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = next;
  }
  renderApp();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').innerText = msg;
  toast.style.display = 'flex';
  
  // Alertar al lector de pantalla
  toast.setAttribute('aria-hidden', 'false');
  
  setTimeout(() => {
    toast.style.display = 'none';
    toast.setAttribute('aria-hidden', 'true');
  }, 4000);
}

function submitOrder() {
  state.showConfirmation = false;
  state.orderNumber = 'RA-' + Math.floor(10000 + Math.random() * 89999);
  state.cart = {};
  navigate('success');
}

// Render principal
function renderApp() {
  // Update header badges con ARIA
  const cartCount = Object.values(state.cart).reduce((a, b) => a + b, 0);
  const badge = document.getElementById('cart-badge');
  const cartBtn = document.getElementById('nav-cart');
  
  if (cartCount > 0) {
    badge.innerText = cartCount;
    badge.style.display = 'grid';
    cartBtn.setAttribute('aria-label', `Carrito de compras, ${cartCount} producto${cartCount > 1 ? 's' : ''} agregado${cartCount > 1 ? 's' : ''}`);
  } else {
    badge.style.display = 'none';
    cartBtn.setAttribute('aria-label', `Carrito de compras vacío`);
  }

  // Auth UI con ARIA
  document.getElementById('auth-status').innerText = state.signedIn ? 'Sesión iniciada' : 'Hola, invitado';
  document.getElementById('auth-label').innerText = state.signedIn ? 'Mi perfil' : 'Mi cuenta';
  document.getElementById('nav-account').setAttribute('aria-label', state.signedIn ? 'Ver tu perfil y cerrar sesión' : 'Iniciar sesión o registrar una cuenta nueva');

  // Active nav class y Aria-current
  document.querySelectorAll('#main-nav button').forEach(btn => {
    if (btn.dataset.cat === state.category && (state.screen === 'home' || state.screen === 'category' || state.screen === 'search')) {
      btn.classList.add('active');
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.classList.remove('active');
      btn.removeAttribute('aria-current');
    }
  });

  // Render view
  const container = document.getElementById('view-container');
  switch (state.screen) {
    case 'home': container.innerHTML = viewHome(); break;
    case 'search': 
    case 'category': container.innerHTML = viewSearchCategory(); break;
    case 'detail': container.innerHTML = viewDetail(); break;
    case 'cart': container.innerHTML = viewCart(); break;
    case 'checkout': container.innerHTML = viewCheckout(); break;
    case 'success': container.innerHTML = viewSuccess(); break;
    case 'signin': container.innerHTML = viewAuth('signin'); break;
    case 'signup': container.innerHTML = viewAuth('signup'); break;
    case 'policy': container.innerHTML = viewPolicy(); break;
    case 'account': container.innerHTML = viewAccount(); break;
  }

  // Sincronizar todos los aria-label a title (tooltip de mouse) para evaluar accesibilidad visualmente
  document.querySelectorAll('[aria-label]').forEach(el => {
    el.setAttribute('title', el.getAttribute('aria-label'));
  });
}

// Setup events for static elements
document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  state.query = document.getElementById('site-search').value;
  state.category = 'Todos';
  navigate('search');
});

document.getElementById('toast-close').addEventListener('click', () => {
  document.getElementById('toast').style.display = 'none';
  document.getElementById('toast').setAttribute('aria-hidden', 'true');
});

document.getElementById('nav-logo').addEventListener('click', () => navigate('home'));
document.getElementById('footer-logo').addEventListener('click', () => navigate('home'));
document.getElementById('nav-account').addEventListener('click', () => navigate(state.signedIn ? 'account' : 'signin'));
document.getElementById('nav-cart').addEventListener('click', () => navigate('cart'));

document.querySelectorAll('[data-cat]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    state.category = e.target.dataset.cat;
    navigate('category');
  });
});

document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    navigate(e.target.dataset.nav);
  });
});

// Inicializar
if (!history.state) {
  history.replaceState({ screen: state.screen, category: state.category, productId: state.selectedProductId }, "", `#${state.screen}`);
} else {
  state.screen = history.state.screen;
  state.category = history.state.category;
  state.selectedProductId = history.state.productId;
}
renderApp();
