function getThumbnailUrl(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.includes('images.unsplash.com')) {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=480&q=75`;
  }
  return url;
}

function getDetailImageUrl(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.includes('images.unsplash.com')) {
    const base = url.split('?')[0];
    return `${base}?auto=format&fit=crop&w=900&q=80`;
  }
  return url;
}

const gallery = (source) => [getThumbnailUrl(source)];

const CATALOG_DEFAULTS = [
  // --- ARREGLOS FLORALES (10 productos · Stock inicial: 30 unidades c/u) ---
  {
    id: 1,
    name: "Jardín de rosas",
    category: "Arreglos florales",
    price: 34.9,
    oldPrice: 42,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1512056495345-913a0c261dc8"),
    alt: "Arreglo floral Jardín de rosas compuesto por 18 rosas rojas frescas y follaje verde en envoltura de papel artesanal",
    description: "Composición romántica de 18 rosas rojas de exportación de tallo largo cultivadas en la Sierra ecuatoriana, acompañadas de hipericum rojo, eucalipto aromático y follaje silvestre de temporada. Envuelto a mano en papel kraft impermeable de doble capa con lazo de satén e incluye sobre de nutriente floral y tarjeta dedicatoria impresa para aniversarios o declaraciones especiales."
  },
  {
    id: 2,
    name: "Luz de girasoles",
    category: "Arreglos florales",
    price: 29.5,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1673277848241-86e145cd7112"),
    alt: "Arreglo floral Luz de girasoles con flores amarillas luminosas sobre mesa de madera rústica",
    description: "Ramo radiante elaborado con girasoles frescos de centro oscuro combinados con mini rosas amarillas, solidago dorado y hojas de ruscus verde intenso que aportan volumen y frescura. Presentado en envoltura rústica artesanal con cinta de yute natural, ideal para transmitir alegría, felicitar por un logro profesional o iluminar cualquier espacio del hogar."
  },
  {
    id: 3,
    name: "Dulce primavera",
    category: "Arreglos florales",
    price: 27.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1610190427750-03e9095f18e3"),
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
    images: gallery("https://images.unsplash.com/photo-1694620131938-0f88d08610a4"),
    alt: "Ramo de 24 rosas rosadas seleccionadas con envoltura premium sobre fondo de mesa clara",
    description: "Bouquet de lujo conformado por 24 rosas ecuatorianas variedad Mondial y Pink Floyd en degradé de rosa pálido y pétalos bordes crema de gran apertura. Empacado en papel coreano mate resistente al agua con cinta de seda tejida y tarjeta de saludo personalizada, pensado para celebrar nacimientos, aniversarios o momentos inolvidables."
  },
  {
    id: 5,
    name: "Abrazo silvestre",
    category: "Arreglos florales",
    price: 31.75,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1645373570905-8820514f9fed"),
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
    images: gallery("https://images.unsplash.com/photo-1556712691-5c39e0e32a8e"),
    alt: "Ramo floral cálido con rosas color coral, anaranjadas y follaje de temporada",
    description: "Vibrante combinación de rosas en gamas coral, mandarina, durazno y rojo carmesí seleccionadas tallo por tallo en su punto exacto de apertura para asegurar más de 10 días de frescura. Acompañado de follaje verde esmeralda y envoltura protectora para transporte en automóvil, transmite calidez, energía y entusiasmo en cada entrega."
  },
  {
    id: 23,
    name: "Ramo lavanda",
    category: "Arreglos florales",
    price: 26.5,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1582874576091-26fa231ce87c"),
    alt: "Ramo delicado de rosas en tonalidades lavanda y rosa suave con lazo de tela",
    description: "Armonioso bouquet en tonalidades lilas, lavanda y rosa pastel compuesto por rosas variedad Ocean Song, alstroemerias claras y espigas aromáticas de lavanda seca. Envuelto en papel texturizado color marfil con lazo de organza, proyecta serenidad y elegancia para desear pronta recuperación o celebrar una fecha especial."
  },
  {
    id: 24,
    name: "Mesa de rosas",
    category: "Arreglos florales",
    price: 46.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1706741921206-837f9e326ecd"),
    alt: "Centro de mesa con florero de rosas rosadas abiertas y follaje de temporada",
    description: "Centro de mesa floral dispuesto sobre un florero cilíndrico de vidrio reutilizable con 20 rosas rosadas de botón grande, lisianthus blancos y ramas de eucalipto. Listo para exhibirse directamente en comedores, recepciones u oficinas sin necesidad de buscar recipiente adicional, incluyendo conservante floral e instrucciones de cuidado."
  },
  {
    id: 25,
    name: "Rosas de algodón",
    category: "Arreglos florales",
    price: 35.4,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1618239265038-9e4c865fbd10"),
    alt: "Ramo de rosas blancas y rosadas con envoltura de papel claro y cinta decorativa",
    description: "Fina selección de rosas blancas nieve y rosas rubor pálido acompañadas de gipsófila (velo de novia) y follaje verde suave que resalta la pureza de cada pétalo. Presentado en pliegos de papel seda blanco y cinta satinada, es el detalle predilecto para graduaciones, compromisos, bautizos o muestras de afecto sincero."
  },
  {
    id: 26,
    name: "Jarrón cielo",
    category: "Arreglos florales",
    price: 39.8,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1592560926131-050f712852f8"),
    alt: "Flores frescas blancas y amarillas dispuestas en un jarrón cerámico de color azul",
    description: "Arreglo de autor montado en un jarrón de cerámica esmaltada en tono azul celeste, combinado con rosas crema, ranúnculos amarillos, manzanilla ornamental y follaje aireado. Una pieza decorativa duradera cuyo jarrón artesanal queda como recuerdo permanente para el hogar o el escritorio de quien lo recibe."
  },

  // --- REGALOS (12 productos · Stock inicial: 30 unidades c/u) ---
  {
    id: 6,
    name: "Rosas eternas",
    category: "Regalos",
    price: 49.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1518709779341-56cf4535e94b"),
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
    images: gallery("https://images.unsplash.com/photo-1615182787503-08365d1e7fae"),
    alt: "Detalle de regalo con mini ramo de rosas rosadas frescas y bombones de chocolate artesanal",
    description: "Combo de obsequio que une un bouquet compacto de rosas rosadas frescas y eucalipto con un estuche de 8 bombones artesanales elaborados con cacao fino de aroma ecuatoriano al 65%. Empacado con cinta decorativa y tarjeta dedicatoria, perfecto para sorprender en la oficina o celebrar un detalle espontáneo."
  },
  {
    id: 8,
    name: "Tomatodo botánico",
    category: "Regalos",
    price: 16.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1604432835437-59ad4d22c1a5"),
    alt: "Tomatodo térmico reutilizable con diseño botánico decorado con flor fresca y lazo",
    description: "Termo reutilizable de acero inoxidable de doble pared (500 ml) con ilustración botánica exclusiva, capaz de conservar bebidas frías por 12 horas o calientes por 8 horas. Se entrega en caja ecológica decorada con una flor natural fresca del día, lazo de tela y tarjeta personalizada."
  },
  {
    id: 9,
    name: "Desayuno entre flores",
    category: "Regalos",
    price: 39.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1686424735290-ea6ac590983c"),
    alt: "Caja sorpresa de desayuno con florero de rosas rosadas, jugo artesanal y fruta fresca",
    description: "Bandeja de madera artesanal que incluye un mini florero con rosas rosadas frescas, croissant recién horneado, jugo natural de naranja prensado en frío, bowl de frutas de estación picadas, yogurt griego con granola y café gourmet. Programado especialmente para entregas matutinas (08:00 a 11:00) con tarjeta impresa."
  },
  {
    id: 10,
    name: "Canasta con cariño",
    category: "Regalos",
    price: 44,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1689877164987-8cb9e9c91464"),
    alt: "Canasta de mimbre decorativa llena de flores frescas, galletas artesanales y vela aromática",
    description: "Canasta tejida en mimbre natural reutilizable que combina un arreglo floral en tonos pastel con una lata de galletas artesanales de mantequilla, una vela aromática de cera de soya con esencia de vainilla y lavanda, e infusiones relajantes. Ideal para el Día de la Madre, cumpleaños o desear bienestar en casa."
  },
  {
    id: 16,
    name: "Celebración",
    category: "Regalos",
    price: 36.25,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1713094010686-7e071fb887da"),
    alt: "Ramo de rosas rojas y rosadas en florero con globo de celebración y bombones",
    description: "Set festivo completo integrado por un arreglo de 12 rosas rojas y fucsias en base decorativa, un globo metalizado de 18 pulgadas inflado con helio y una caja de trufas rellenas de avellana y cacao. Pensado para llevar alegría inmediata en cumpleaños, ascensos laborales o sorpresas a domicilio en Quito y Valles."
  },
  {
    id: 17,
    name: "Canasta dulce",
    category: "Regalos",
    price: 32.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1777196582906-81a99c692de2"),
    alt: "Canasta de regalo artesanal con chocolates surtidos, flores decorativas y tarjeta",
    description: "Cesta gourmet surtida con chocolates finos rellenos de maracuyá, mora y caramelo salado, almendras confitadas y galletas bañadas en chocolate negro, coronada con un ramillete de flores frescas de estación. Envuelta en celofán protector con moño satinado y tarjeta dedicatoria."
  },
  {
    id: 18,
    name: "Baúl de chocolates",
    category: "Regalos",
    price: 41.5,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1647168672642-695e96782922"),
    alt: "Baúl pequeño de madera abierto mostrando selección de chocolates finos y lazo",
    description: "Cofre artesanal de madera pino barnizada con herrajes metálicos que alberga una cata de 16 chocolates ecuatorianos de exportación (70% cacao de origen Manabí y Esmeraldas), trufas belgas y flores secas aromáticas. El baúl funciona posteriormente como joyero o caja organizadora de recuerdos."
  },
  {
    id: 19,
    name: "Rosa y cacao",
    category: "Regalos",
    price: 28,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1687471603664-c76ac6556b6f"),
    alt: "Caja de bombones artesanales junto a una rosa roja fresca y tarjeta personalizada",
    description: "Estuche elegante de formato alargado que presenta una rosa roja imperial de tallo hidratado en tubo individual junto a una fila de 10 bombones artesanales de praliné y ganache de chocolate con leche. Un detalle sofisticado, romántico y fácil de transportar para aniversarios o citas especiales."
  },
  {
    id: 20,
    name: "Bolsa celebración",
    category: "Regalos",
    price: 35.75,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1772474316870-5a77e61a1f9e"),
    alt: "Bolsa de regalo decorada con flores frescas de temporada para cumpleaños",
    description: "Bolsa boutique rígida con asas de cordón de algodón que contiene una composición floral hidratada en esponja interna con rosas, claveles y alstroemerias de colores vivos, acompañada de una tarjeta de felicitación grande. Su diseño práctico permite entregarla y exhibirla en cualquier superficie sin requerir florero."
  },
  {
    id: 27,
    name: "Bolsa de cacao",
    category: "Regalos",
    price: 34.2,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1769738135915-7a317e95b609"),
    alt: "Bolsa de regalo con selección de chocolates finos, flores decorativas y tarjeta dedicatoria",
    description: "Presentación de regalo con dos tabletas de chocolate orgánico ecuatoriano, bombones rellenos de frutos rojos, frutos secos tostados y un bouquet lateral de flores frescas con eucalipto. Ideal para agradecimientos corporativos, detalles de amistad o celebraciones familiares."
  },
  {
    id: 28,
    name: "Canasta de jardín",
    category: "Regalos",
    price: 37.6,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1646948402935-86fa043e5ae1"),
    alt: "Canasta artesanal con flores silvestres y espacio para tarjeta de felicitaciones",
    description: "Cesta tejida a mano por artesanos locales equipada con espuma floral hidratada y decorada con rosas color durazno, margaritas blancas, statice morado y follaje fresco del día. Su asa firme y base estable facilitan el traslado seguro y lucen impecables en recibidores, terrazas o escritorios."
  },

  // --- FUNERARIOS (10 productos · Stock inicial: 30 unidades c/u) ---
  {
    id: 11,
    name: "Corona serenidad",
    category: "Funerarios",
    price: 89,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1758334587590-011cf260c10f"),
    alt: "Corona fúnebre en forma de corazón elaborada con flores blancas, lirios lilas y cinta para dedicatoria",
    description: "Solemne corona fúnebre de gran formato (90 cm de diámetro) montada sobre atril de madera estable, elaborada con más de 60 tallos entre rosas blancas, lirios orientales lilas, crisantemos y follaje de palma seleccionada. Incluye cinta luctuosa impresa en letras doradas con tu dedicatoria de condolencia de hasta 350 caracteres para salas de velación."
  },
  {
    id: 12,
    name: "Paz blanca",
    category: "Funerarios",
    price: 64.5,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1787788629138-58bd773bf157"),
    alt: "Arreglo funerario solemne en canasta con calas blancas y follaje verde de condolencia",
    description: "Arreglo de condolencias dispuesto en canasta baja con espuma floral de hidratación prolongada, protagonizado por calas blancas naturales, rosas crema, gladiolos y hojas de монstera y ruscus. Diseñado para acompañar con sobriedad en capillas ardientes, misas de honras o enviar directamente al domicilio de la familia doliente."
  },
  {
    id: 13,
    name: "Memoria y luz",
    category: "Funerarios",
    price: 72,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1622299141360-cfb438913c02"),
    alt: "Corona fúnebre circular con flores blancas, rosas claras y follaje solemne con cinta dedicatoria",
    description: "Corona circular clásica de homenaje póstumo confeccionada con rosas blancas de exportación, pompones albos, liliums perfumados y gipsófila sobre aro de espuma hidratada con caballete incluido. Representa el ciclo eterno de la memoria y lleva impresa sin costo adicional la banda fúnebre con el nombre de los remitentes."
  },
  {
    id: 14,
    name: "Ramo consuelo",
    category: "Funerarios",
    price: 48.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1705980540921-818a93a07391"),
    alt: "Canasta de flores blancas y tonos morados para acompañamiento y pésame en velaciones",
    description: "Composición floral de pésame en tonos blancos y violetas suaves que combina rosas blancas, lisianthus morados, alstroemerias y follaje de eucalipto en base discreta. Su tamaño mediano permite ubicarlo tanto en el altar de la sala de velación como en el hogar familiar, acompañado de tarjeta y cinta luctuosa personalizada."
  },
  {
    id: 21,
    name: "Lirios de calma",
    category: "Funerarios",
    price: 58,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1498814117408-e396f5507073"),
    alt: "Arreglo fúnebre solemne de lirios blancos y rosas pálidas con cinta luctuosa",
    description: "Arreglo vertical de condolencias elaborado con varas de lirios blancos Stargazer y Casablanca de suave fragancia, escoltados por rosas marfil y follaje verde estructurado. Preparado al instante por nuestros floristas para conservar su frescura durante toda la jornada de velación, incluyendo cinta impresa."
  },
  {
    id: 22,
    name: "Canasta alba",
    category: "Funerarios",
    price: 54.25,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1571990306521-cf96e6858f2a"),
    alt: "Canasta de rosas blancas y beige con follaje verde solemne y tarjeta de condolencias",
    description: "Canasta de tributo floral tejida en tono natural con 24 rosas blancas y crema, claveles blancos importados y helecho cuero que aporta serenidad y respeto. Incluye hidratación interna en espuma Oasis de larga duración y tarjeta formal de condolencias para expresar solidaridad a familiares, amigos o colegas."
  },
  {
    id: 29,
    name: "Lirios blancos",
    category: "Funerarios",
    price: 61.5,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1721275690341-d236f5946c3a"),
    alt: "Composición floral funeraria de lirios blancos y hojas verdes en base solemne",
    description: "Tributo simétrico de alta presencia compuesto por lirios blancos abiertos y en botón, combinados con astromelias níveas y follaje tropical sobre base firme. Ideal para envíos institucionales o familiares a funerarias de Quito y los Valles, con transporte protegido en automóvil y cinta dedicatoria incluida."
  },
  {
    id: 30,
    name: "Ofrenda alba",
    category: "Funerarios",
    price: 67.9,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1681367613655-7358b0a088df"),
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
    images: gallery("https://images.unsplash.com/photo-1544816155-12df9643f363"),
    alt: "Arreglo funerario en forma de cruz con rosas blancas, claveles y follaje solemne con cinta de pésame",
    description: "Solemne cruz floral de 1 metro de altura tupida con rosas blancas frescas, claveles seleccionados y follaje verde pino sobre estructura hidratada con soporte de pie incluido. Lleva cruzada una cinta de satén con impresión personalizada para acompañar ceremonias religiosas, sepelios y capillas ardientes."
  },
  {
    id: 32,
    name: "Cojín de condolencias",
    category: "Funerarios",
    price: 52,
    stock: 30,
    images: gallery("https://images.unsplash.com/photo-1526047932273-341f2a7631f9"),
    alt: "Cojín floral fúnebre con calas, lirios blancos y toques lilas para capilla ardiente o sala de velación",
    description: "Cojín horizontal para pie de féretro o mesa de honras elaborado en base de esponja húmeda con calas blancas, lirios, rosas claras y delicados acentos lilas de statice. Incluye tarjeta formal y cinta dedicatoria personalizada, entregado puntualmente en cualquier sala de velación de Quito y los Valles."
  }
];

const products = JSON.parse(JSON.stringify(CATALOG_DEFAULTS));

// Estado global de la aplicación
let state = {
  screen: 'home',
  selectedProductId: null,
  cart: {},
  funeralNotes: {}, // id -> dedicatoria
  query: '',
  category: 'Todos',
  signedIn: false,
  accountTab: 'orders', // 'orders' | 'addresses' | 'payments' | 'security'
  checkoutAfterAuth: false,
  orderNumber: '',
  fulfillmentMethod: 'delivery',
  paymentMethod: 'card', // 'card' | 'cash' | 'transfer'
  showConfirmation: false,
  lastTotal: 0,
  chatbotOpen: false,
  chatMessages: [
    { sender: 'bot', text: '¡Hola! Soy tu asistente virtual de Ramoza 🌸 ¿En qué puedo orientarte hoy con tu pedido o entrega?' }
  ],
  // Un dispositivo nuevo inicia SIN datos predefinidos: el usuario los ingresa (los campos muestran ejemplos en gris)
  userProfile: {
    name: '',
    email: '',
    phone: '',
    docType: 'cedula',
    cedula: ''
  },
  checkoutForm: {
    contactName: '',
    docType: 'cedula',
    contactId: '',
    contactPhone: '',
    contactEmail: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryTimeSlot: '',
    condolenceMsg: '',
    orderNote: '',
    ccNum: '',
    ccName: '',
    ccExp: '',
    ccCvv: '',
    cashAmount: '',
    transferRef: ''
  },
  orders: []
};

// ================= ZONA HORARIA DE QUITO (America/Guayaquil, UTC-5) =================
// Todas las entregas se realizan en Ecuador: aunque el cliente compre desde otro país,
// la fecha mínima y las franjas disponibles se calculan con la hora oficial de Quito.
const QUITO_TZ = 'America/Guayaquil';

// Franjas de entrega. "cutoff" = última hora (en minutos) para pedir esa franja el MISMO día
// (fin de la franja menos 2 horas de preparación del arreglo).
const DELIVERY_SLOTS = [
  { value: 'Mañana (09:00 - 13:00)', cutoff: 11 * 60, cutoffLabel: '11:00' },
  { value: 'Tarde (14:00 - 18:00)', cutoff: 16 * 60, cutoffLabel: '16:00' },
  { value: 'Especial urgente (18:00 - 20:00)', cutoff: 18 * 60, cutoffLabel: '18:00' }
];

function getQuitoNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: QUITO_TZ, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(new Date());
  const get = type => (parts.find(p => p.type === type) || {}).value || '0';
  let hour = parseInt(get('hour'), 10);
  if (hour === 24) hour = 0;
  const minute = parseInt(get('minute'), 10);
  return { date: `${get('year')}-${get('month')}-${get('day')}`, hour, minute, minutes: hour * 60 + minute };
}

function addDaysIso(isoDate, days) {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().split('T')[0];
}

// Franjas que todavía se pueden elegir para una fecha dada (según la hora actual de Quito)
function getAvailableSlots(isoDate) {
  const now = getQuitoNow();
  if (!isoDate || isoDate < now.date) return [];
  if (isoDate > now.date) return DELIVERY_SLOTS.map(s => s.value);
  return DELIVERY_SLOTS.filter(s => now.minutes < s.cutoff).map(s => s.value);
}

function formatQuitoDateTime(date = new Date()) {
  return date.toLocaleString('es-EC', {
    timeZone: QUITO_TZ, day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}

function formatIsoDateLong(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString('es-EC', {
    timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

// ================= MÓDULO DE SEGURIDAD CRIPTOGRÁFICA (SHA-256 + SALT) Y ANTI-SQLi =================

// Generador de Sal Criptográfica Aleatoria (128 bits / 32 caracteres hex)
function generateSalt(byteLength = 16) {
  const array = new Uint8Array(byteLength);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < byteLength; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

// Implementación estándar FIPS 180-4 de SHA-256 (produce hash hexadecimal de 64 caracteres idéntico a PostgreSQL pgcrypto)
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
      for (let i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
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
    for (let i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

// Aplica SHA-256 + Sal Criptográfica (formato: sha256(salt + ":" + plainText))
function hashWithSalt(plainText, customSalt = null) {
  const salt = customSalt || generateSalt(16);
  const hash = sha256Hex(`${salt}:${String(plainText)}`);
  return {
    algorithm: 'SHA-256 + Salt',
    salt: salt,
    hash: hash,
    combined: `${salt}$${hash}`
  };
}

// Registro de auditoría criptográfica y de seguridad para el Panel de Administrador
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
  } catch (e) {
    console.warn('Error registrando evento de seguridad', e);
  }
}

// Detector de Inyección SQL (DROP TABLE, DELETE, TRUNCATE, UNION SELECT, comentarios SQL y XSS)
function containsSqlInjection(inputStr) {
  if (typeof inputStr !== 'string' || !inputStr) return false;
  const sqlPatterns = [
    /\b(DROP|TRUNCATE|ALTER)\s+(TABLE|DATABASE|SCHEMA|VIEW|INDEX|TRIGGER|FUNCTION)\b/i,
    /\bDELETE\s+FROM\b/i,
    /\bINSERT\s+INTO\b/i,
    /\bUPDATE\s+[a-zA-Z0-9_]+\s+SET\b/i,
    /\bUNION\s+(ALL\s+)?SELECT\b/i,
    /\bEXEC(UTE)?\s*\(/i,
    /\bPG_SLEEP\s*\(/i,
    /;\s*(DROP|DELETE|TRUNCATE|ALTER|INSERT|UPDATE|SELECT)\b/i,
    /'\s*(OR|AND)\s*'?\d+'?\s*=\s*'?\d+/i,
    /--\s*$/m,
    /\/\*[\s\S]*?\*\//,
    /<\s*script\b/i,
    /javascript\s*:/i,
    /on(error|load|click|mouseover)\s*=/i
  ];
  return sqlPatterns.some(pattern => pattern.test(inputStr));
}

// Sanitiza cadenas de entrada y bloquea payloads maliciosos
function sanitizeSafeInput(str, fieldLabel = 'Campo') {
  if (typeof str !== 'string') return '';
  if (containsSqlInjection(str)) {
    logSecurityEvent(
      'SQL_INJECTION_BLOCKED',
      `Intento de comando malicioso bloqueado en "${fieldLabel}"`,
      { payloadPreview: str.slice(0, 60) }
    );
    showToast('⚠️ El texto contiene símbolos no permitidos y fueron retirados.');
    return str
      .replace(/\b(DROP|TRUNCATE|ALTER|DELETE|INSERT|UPDATE|UNION|SELECT|EXEC)\b/gi, '')
      .replace(/[;<>$`]/g, '')
      .replace(/--/g, '');
  }
  return str;
}

// ================= CONECTOR POSTGRESQL SUPABASE Y TRADUCTOR DE CONSTRAINTS =================

// Configuración de conexión a Supabase PostgreSQL
// Puedes pegar tu URL y Anon Key aquí directamente o desde el Panel de Administrador (admin.html)
// IMPORTANTE: anonKey pública configurada para que CUALQUIER dispositivo (celular de la ingeniera, otra PC o GitHub Pages)
// se conecte automáticamente y lea el stock real desde Supabase PostgreSQL.
const SUPABASE_CONFIG = {
  url: 'https://jrgazeamnnqnyumnybxo.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZ2F6ZWFtbm5xbnl1bW55YnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NzU4OTQsImV4cCI6MjEwOTE1MTg5NH0.PHxJOMw-nBWcQal5zZ2iXq9zIRiRntjgwJzasitndVI'
};

// ================= ENVÍO REAL DE CORREOS (EmailJS) =================
// Configura tu cuenta gratuita en https://www.emailjs.com y pega aquí tus 4 datos.
// Se usa para enviar el Comprobante de Venta y el código de "Olvidé mi contraseña" al correo real del cliente.
const EMAIL_CONFIG = {
  publicKey: '',          // Account → General → Public Key
  serviceId: '',          // Email Services → Service ID (ej. service_xxxxx)
  templateReceipt: '',    // Email Templates → ID de la plantilla del comprobante (ej. template_comprobante)
  templateReset: ''       // Email Templates → ID de la plantilla del código de recuperación (ej. template_reset)
};

function getActiveSupabaseConfig() {
  try {
    const saved = localStorage.getItem('ramoza_supabase_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.url && parsed.anonKey) return parsed;
    }
  } catch (e) {}
  return SUPABASE_CONFIG;
}

/**
 * Traductor de Errores de Constraints de Base de Datos (PostgreSQL / Supabase / SQL)
 * NUNCA muestra errores técnicos crudos como "ERROR 1452: Cannot add or update a child row: a foreign key constraint fails..."
 * sino que traduce cada constraint a un mensaje claro y comprensible para el usuario final.
 */
function translateDbConstraintError(err, context = {}) {
  const rawMessage = typeof err === 'string'
    ? err
    : (err?.message || err?.details || err?.hint || err?.constraint || '');
  const code = String(err?.code || '');
  const constraint = String(err?.constraint || context.constraint || '').toLowerCase();
  const lowerMsg = rawMessage.toLowerCase();
  const prodName = context.productName || 'este producto';
  const stockLimit = typeof context.stock === 'number' ? context.stock : 30;

  // Registrar el evento técnico únicamente en la bitácora interna del Administrador
  logSecurityEvent(
    'DB_CONSTRAINT_TRIGGERED',
    `Constraint activado (${constraint || code || 'validación de negocio'})`,
    { payloadPreview: rawMessage.slice(0, 90) || `Producto: ${prodName}, Stock: ${stockLimit}` }
  );

  // 1. Constraint de Stock Agotado o Stock Insuficiente (chk_carrito_limite_stock / chk_producto_stock_no_negativo)
  if (
    constraint.includes('stock') ||
    lowerMsg.includes('stock insuficiente') ||
    lowerMsg.includes('chk_producto_stock') ||
    lowerMsg.includes('chk_carrito_limite_stock')
  ) {
    if (stockLimit <= 0) {
      return `⚠️ Lo sentimos, "${prodName}" está agotado por el momento.`;
    }
    if (stockLimit <= 5) {
      return `⚠️ Solo quedan ${stockLimit} ${stockLimit === 1 ? 'unidad disponible' : 'unidades disponibles'} de "${prodName}". Ya tienes el máximo en tu carrito.`;
    }
    return `⚠️ Has alcanzado la cantidad máxima permitida para "${prodName}". Ya tienes el máximo en tu carrito.`;
  }

  // 2. Constraint de Llave Foránea (ej. ERROR 1452 / SQLSTATE 23503 / fk_cliente / pedidos_usuario_id_fkey)
  if (
    code === '23503' ||
    code === '1452' ||
    constraint.includes('fk_') ||
    constraint.includes('fkey') ||
    lowerMsg.includes('foreign key constraint fails') ||
    lowerMsg.includes('violates foreign key constraint')
  ) {
    return '⚠️ No se pudo vincular el pedido con el registro del cliente o producto seleccionado. Por favor verifica tus datos e intenta nuevamente.';
  }

  // 3. Constraint de Documento de Identidad (Cédula Módulo 10 o Pasaporte 6-15 alfanumérico)
  if (
    constraint.includes('documento_valido') ||
    lowerMsg.includes('chk_usuario_documento_valido') ||
    lowerMsg.includes('chk_pedido_documento_valido')
  ) {
    return '⚠️ El documento de identidad ingresado no es válido. Ingresa una Cédula ecuatoriana válida de 10 dígitos o un Pasaporte de 6 a 15 letras y números.';
  }

  // 4. Constraint de Teléfono Móvil Ecuatoriano
  if (constraint.includes('telefono_ec') || lowerMsg.includes('telefono')) {
    return '⚠️ El número de teléfono móvil debe tener exactamente 10 dígitos e iniciar con 09.';
  }

  // 5. Constraint de Duplicados (Unique Violation 23505)
  if (code === '23505' || lowerMsg.includes('duplicate key') || lowerMsg.includes('unique constraint')) {
    return '⚠️ Ya existe un registro con ese correo electrónico, documento de identidad o código de comprobante.';
  }

  // 6. Constraint de Precio u Oferta en Productos
  if (constraint.includes('precio') || constraint.includes('oferta')) {
    return '⚠️ El precio del producto debe ser mayor a $0.00 y el precio anterior debe ser mayor al precio de oferta.';
  }

  // 7. Constraint Anti-Inyección SQL en Base de Datos (chk_*_texto_seguro)
  if (constraint.includes('seguro') || lowerMsg.includes('fn_es_texto_seguro')) {
    return '⚠️ El texto ingresado contiene símbolos no permitidos. Por favor revísalo.';
  }

  // 8. Fecha u hora de entrega ya pasada (validada con la hora de Quito)
  if (lowerMsg.includes('franja') || lowerMsg.includes('fecha de entrega')) {
    return '⚠️ La fecha u horario de entrega elegido ya no está disponible (hora de Quito). Elige otra franja.';
  }

  // 9. Respaldo general amigable (jamás expone SQL crudo en la interfaz)
  return '⚠️ No se pudo completar la operación. Revisa tus datos e inténtalo nuevamente.';
}

// Cliente REST ligero para conectar con PostgreSQL en Supabase
const RamozaSupabase = {
  isConnected() {
    const cfg = getActiveSupabaseConfig();
    return Boolean(cfg && cfg.url && cfg.anonKey && cfg.url.startsWith('https://'));
  },
  getHeaders() {
    const cfg = getActiveSupabaseConfig();
    return {
      'Content-Type': 'application/json',
      'apikey': cfg.anonKey,
      'Authorization': `Bearer ${cfg.anonKey}`,
      'Prefer': 'return=representation'
    };
  },
  async fetchCatalog() {
    if (!this.isConnected()) return null;
    const cfg = getActiveSupabaseConfig();
    try {
      const res = await fetch(`${cfg.url.replace(/\/$/, '')}/rest/v1/productos?select=*&activo=eq.true&order=id.asc`, {
        method: 'GET',
        headers: this.getHeaders()
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw errBody;
      }
      const rows = await res.json();
      if (Array.isArray(rows) && rows.length > 0) {
        const catMap = { 1: 'Arreglos florales', 2: 'Regalos', 3: 'Funerarios' };
        rows.forEach(dbRow => {
          const existing = products.find(p => p.id === dbRow.id);
          if (existing) {
            existing.name = dbRow.nombre || existing.name;
            existing.description = dbRow.descripcion || existing.description;
            existing.price = Number(dbRow.precio) || existing.price;
            if (dbRow.precio_anterior) existing.oldPrice = Number(dbRow.precio_anterior);
            else delete existing.oldPrice;
            existing.stock = typeof dbRow.stock === 'number' ? dbRow.stock : 30;
            existing.category = catMap[dbRow.categoria_id] || existing.category;
          }
        });
        localStorage.setItem('ramoza_custom_products', JSON.stringify(products));
        renderApp();
      }
      return rows;
    } catch (err) {
      console.warn('Aviso sincronizando catálogo desde Supabase:', err);
      return null;
    }
  },
  async syncOrderAndDeductStock(orderRecord, itemsList, receiptRecord) {
    if (!this.isConnected()) return { ok: true, mode: 'local' };
    const cfg = getActiveSupabaseConfig();
    const baseUrl = cfg.url.replace(/\/$/, '');
    try {
      // 1. Insertar Pedido en tabla `pedidos`
      const pedidoRes = await fetch(`${baseUrl}/rest/v1/pedidos`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          codigo_orden: orderRecord.code,
          comprador_nombre: receiptRecord.buyerName,
          comprador_tipo_documento: receiptRecord.buyerDocType,
          comprador_documento: receiptRecord.buyerCedula,
          comprador_telefono: receiptRecord.buyerPhone,
          comprador_email: receiptRecord.buyerEmail || null,
          modalidad_entrega: state.fulfillmentMethod,
          direccion_entrega: state.fulfillmentMethod === 'delivery' ? (state.checkoutForm?.deliveryAddress || 'Quito / Valles') : null,
          fecha_entrega: state.checkoutForm?.deliveryDate || getMinDeliveryDate(),
          franja_horaria: state.checkoutForm?.deliveryTimeSlot || 'Mañana (09:00 - 13:00)',
          subtotal: receiptRecord.subtotal,
          costo_envio: receiptRecord.deliveryCost,
          total: receiptRecord.total
        })
      });
      if (!pedidoRes.ok) {
        const errData = await pedidoRes.json().catch(() => ({}));
        throw errData;
      }
      const [insertedPedido] = await pedidoRes.json();

      // 2. Insertar Detalle de Pedido (activa el trigger trg_descontar_stock_producto en PostgreSQL)
      for (const item of itemsList) {
        const detRes = await fetch(`${baseUrl}/rest/v1/detalle_pedido`, {
          method: 'POST',
          headers: this.getHeaders(),
          body: JSON.stringify({
            pedido_id: insertedPedido.id,
            producto_id: item.id,
            nombre_producto: item.name,
            cantidad: item.qty,
            precio_unitario: item.unitPrice,
            subtotal_linea: Number(item.lineSubtotal.toFixed(2))
          })
        });
        if (!detRes.ok) {
          const errDet = await detRes.json().catch(() => ({}));
          throw errDet;
        }
      }

      // 3. Insertar Pago (activa trg_simular_estado_pago y trg_emitir_comprobante_por_pago en PostgreSQL)
      const pagoRes = await fetch(`${baseUrl}/rest/v1/pagos`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({
          codigo_pago: receiptRecord.paymentCode,
          pedido_id: insertedPedido.id,
          metodo_pago: receiptRecord.paymentMethod,
          monto_pago: receiptRecord.total,
          tarjeta_ultimos_4: receiptRecord.cardLast4,
          tarjeta_salt: receiptRecord.cardSalt,
          tarjeta_numero_hash_sha256: receiptRecord.cardHashSha256,
          estado_pago: receiptRecord.paymentStatus
        })
      });
      if (!pagoRes.ok) {
        const errPago = await pagoRes.json().catch(() => ({}));
        throw errPago;
      }

      return { ok: true, mode: 'supabase' };
    } catch (err) {
      const friendlyMsg = translateDbConstraintError(err);
      return { ok: false, error: friendlyMsg };
    }
  },
  // Llama a funciones seguras (RPC) de PostgreSQL. La lógica de contraseñas vive en la base de datos.
  async rpc(fnName, params) {
    if (!this.isConnected()) return { ok: false, offline: true };
    const cfg = getActiveSupabaseConfig();
    try {
      const res = await fetch(`${cfg.url.replace(/\/$/, '')}/rest/v1/rpc/${fnName}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(params || {})
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) return { ok: false, error: body };
      return { ok: true, data: body };
    } catch (err) {
      return { ok: false, error: err, network: true };
    }
  }
};

// ================= CUENTAS DE USUARIO (registro, inicio de sesión, cambio y recuperación de clave) =================
// Con Supabase conectado, las contraseñas se verifican DENTRO de PostgreSQL (SHA-256 + sal con pgcrypto).
// Sin conexión, se usa un respaldo local con el mismo algoritmo. Nunca se guarda la clave en texto plano.

const LOCAL_ACCOUNTS_KEY = 'ramoza_accounts';
const LOCAL_RESET_KEY = 'ramoza_reset_codes';

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}
function isValidEmail(email) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(String(email || '').trim());
}
function isStrongPassword(pwd) {
  return typeof pwd === 'string' && pwd.length >= 8 && /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(pwd) && /\d/.test(pwd);
}
function readLocalJson(key) {
  try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) { return {}; }
}
function writeLocalJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// Comparación en tiempo constante para evitar ataques de temporización
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
function generateNumericCode(len = 6) {
  const arr = new Uint32Array(len);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, n => String(n % 10)).join('');
}

const AccountService = {
  async register(name, email, password) {
    const mail = normalizeEmail(email);
    if (RamozaSupabase.isConnected()) {
      const r = await RamozaSupabase.rpc('fn_registrar_cliente', { p_nombre: name, p_email: mail, p_password: password });
      if (r.ok && r.data && r.data.ok) return { ok: true, name: r.data.nombre, email: r.data.email };
      if (r.ok && r.data && r.data.error === 'existe') return { ok: false, message: 'Ya existe una cuenta con ese correo. Inicia sesión o usa "Olvidé mi contraseña".' };
      if (!r.network) return { ok: false, message: 'No se pudo crear la cuenta. Revisa tus datos e inténtalo nuevamente.' };
    }
    const accounts = readLocalJson(LOCAL_ACCOUNTS_KEY);
    if (accounts[mail]) return { ok: false, message: 'Ya existe una cuenta con ese correo. Inicia sesión o usa "Olvidé mi contraseña".' };
    const crypto = hashWithSalt(password);
    accounts[mail] = { name, salt: crypto.salt, hash: crypto.hash, failed: 0, lockedUntil: 0, createdAt: Date.now() };
    writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
    return { ok: true, name, email: mail };
  },

  async login(email, password) {
    const mail = normalizeEmail(email);
    const genericError = 'Correo o contraseña incorrectos.';
    if (RamozaSupabase.isConnected()) {
      const r = await RamozaSupabase.rpc('fn_login_cliente', { p_email: mail, p_password: password });
      if (r.ok && r.data && r.data.ok) return { ok: true, name: r.data.nombre, email: r.data.email };
      if (r.ok && r.data && r.data.error === 'bloqueado') return { ok: false, message: 'Demasiados intentos fallidos. Por seguridad, espera 15 minutos o usa "Olvidé mi contraseña".' };
      if (!r.network) return { ok: false, message: genericError };
    }
    const accounts = readLocalJson(LOCAL_ACCOUNTS_KEY);
    const acc = accounts[mail];
    if (!acc) return { ok: false, message: genericError };
    if (acc.lockedUntil && Date.now() < acc.lockedUntil) {
      return { ok: false, message: 'Demasiados intentos fallidos. Por seguridad, espera 15 minutos o usa "Olvidé mi contraseña".' };
    }
    const check = hashWithSalt(password, acc.salt);
    if (!safeEqual(check.hash, acc.hash)) {
      acc.failed = (acc.failed || 0) + 1;
      if (acc.failed >= 5) { acc.lockedUntil = Date.now() + 15 * 60 * 1000; acc.failed = 0; }
      writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
      return { ok: false, message: genericError };
    }
    acc.failed = 0; acc.lockedUntil = 0;
    writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
    return { ok: true, name: acc.name, email: mail };
  },

  async changePassword(email, currentPwd, newPwd) {
    const mail = normalizeEmail(email);
    if (RamozaSupabase.isConnected()) {
      const r = await RamozaSupabase.rpc('fn_cambiar_password', { p_email: mail, p_actual: currentPwd, p_nueva: newPwd });
      if (r.ok) return r.data === true ? { ok: true } : { ok: false, message: 'La contraseña actual no es correcta.' };
      if (!r.network) return { ok: false, message: 'No se pudo actualizar la contraseña. Inténtalo nuevamente.' };
    }
    const accounts = readLocalJson(LOCAL_ACCOUNTS_KEY);
    const acc = accounts[mail];
    if (!acc || !safeEqual(hashWithSalt(currentPwd, acc.salt).hash, acc.hash)) {
      return { ok: false, message: 'La contraseña actual no es correcta.' };
    }
    const crypto = hashWithSalt(newPwd);
    acc.salt = crypto.salt; acc.hash = crypto.hash;
    writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
    return { ok: true };
  },

  // Genera un código de 6 dígitos válido por 10 minutos (se guarda solo su hash) y lo envía al correo real
  async requestReset(email) {
    const mail = normalizeEmail(email);
    let code = null;
    if (RamozaSupabase.isConnected()) {
      const r = await RamozaSupabase.rpc('fn_solicitar_reset', { p_email: mail });
      if (r.ok && r.data && r.data.error === 'limite') {
        return { ok: false, message: 'Ya solicitaste varios códigos. Espera 15 minutos antes de pedir otro.' };
      }
      if (r.ok) code = r.data && r.data.codigo ? r.data.codigo : null;
      else if (!r.network) return { ok: false, message: 'No se pudo procesar la solicitud. Inténtalo nuevamente.' };
    }
    if (code === null && !RamozaSupabase.isConnected()) {
      const accounts = readLocalJson(LOCAL_ACCOUNTS_KEY);
      if (accounts[mail]) {
        code = generateNumericCode(6);
        const resets = readLocalJson(LOCAL_RESET_KEY);
        const crypto = hashWithSalt(code);
        resets[mail] = { salt: crypto.salt, hash: crypto.hash, expires: Date.now() + 10 * 60 * 1000, attempts: 0 };
        writeLocalJson(LOCAL_RESET_KEY, resets);
      }
    }
    // Respuesta idéntica exista o no la cuenta (evita revelar qué correos están registrados)
    if (code) {
      const sent = await EmailService.sendResetCode(mail, code);
      if (!sent.ok) return { ok: false, message: sent.message };
    }
    return { ok: true };
  },

  async confirmReset(email, code, newPwd) {
    const mail = normalizeEmail(email);
    const badCode = 'El código no es válido o ya expiró. Solicita uno nuevo.';
    if (RamozaSupabase.isConnected()) {
      const r = await RamozaSupabase.rpc('fn_confirmar_reset', { p_email: mail, p_codigo: code, p_nueva: newPwd });
      if (r.ok) return r.data === true ? { ok: true } : { ok: false, message: badCode };
      if (!r.network) return { ok: false, message: badCode };
    }
    const resets = readLocalJson(LOCAL_RESET_KEY);
    const entry = resets[mail];
    if (!entry || Date.now() > entry.expires || entry.attempts >= 5) return { ok: false, message: badCode };
    if (!safeEqual(hashWithSalt(code, entry.salt).hash, entry.hash)) {
      entry.attempts += 1;
      writeLocalJson(LOCAL_RESET_KEY, resets);
      return { ok: false, message: badCode };
    }
    const accounts = readLocalJson(LOCAL_ACCOUNTS_KEY);
    if (!accounts[mail]) return { ok: false, message: badCode };
    const crypto = hashWithSalt(newPwd);
    accounts[mail].salt = crypto.salt;
    accounts[mail].hash = crypto.hash;
    accounts[mail].failed = 0;
    accounts[mail].lockedUntil = 0;
    writeLocalJson(LOCAL_ACCOUNTS_KEY, accounts);
    delete resets[mail];
    writeLocalJson(LOCAL_RESET_KEY, resets);
    return { ok: true };
  }
};

// ================= SERVICIO DE CORREO (EmailJS) =================
const EmailService = {
  isConfigured(kind) {
    const tpl = kind === 'reset' ? EMAIL_CONFIG.templateReset : EMAIL_CONFIG.templateReceipt;
    return Boolean(EMAIL_CONFIG.publicKey && EMAIL_CONFIG.serviceId && tpl);
  },
  loadSdk() {
    return new Promise((resolve, reject) => {
      if (window.emailjs && window.emailjs.send) return resolve(window.emailjs);
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      s.async = true;
      s.onload = () => {
        window.emailjs.init({ publicKey: EMAIL_CONFIG.publicKey });
        resolve(window.emailjs);
      };
      s.onerror = () => reject(new Error('No se pudo cargar el servicio de correo'));
      document.head.appendChild(s);
    });
  },
  async send(templateId, params) {
    const sdk = await this.loadSdk();
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 12000));
    return Promise.race([sdk.send(EMAIL_CONFIG.serviceId, templateId, params), timeout]);
  },
  buildReceiptHtml(r) {
    const rows = (r.itemsList || []).map(i => `
      <tr>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;">${i.qty}x</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;">${escapeHtml(i.name)}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:right;">$${Number(i.lineSubtotal).toFixed(2)}</td>
      </tr>`).join('');
    const color = r.paymentStatus === 'CANCELADO' ? '#14532D' : '#92400E';
    return `
      <div style="font-family:Arial,sans-serif;max-width:560px;color:#1f2937;">
        <h2 style="margin:0 0 4px;">Comprobante de Venta N.° ${escapeHtml(r.receiptNumber)}</h2>
        <p style="margin:0 0 12px;color:#6b7280;">Pedido ${escapeHtml(r.orderCode)} · Emitido: ${escapeHtml(r.issuedAt)} (hora de Quito)</p>
        <p style="font-weight:bold;color:${color};">Estado del pago: ${escapeHtml(r.paymentStatus)}</p>
        <p>Cliente: ${escapeHtml(r.buyerName)}<br>Método de pago: ${escapeHtml(r.paymentMethodLabel)}<br>
        Entrega: ${escapeHtml(r.fulfillmentLabel)} · ${escapeHtml(r.deliveryDateLabel || '')} · ${escapeHtml(r.deliverySlot || '')}</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
        <p style="text-align:right;margin:10px 0 0;">Subtotal: $${Number(r.subtotal).toFixed(2)}<br>Envío: $${Number(r.deliveryCost).toFixed(2)}<br>
        <strong style="font-size:17px;">Total: $${Number(r.total).toFixed(2)}</strong></p>
        <p style="color:#6b7280;font-size:12px;">Este documento es un Comprobante de Venta (no es factura). Ramoza · Quito, Ecuador.</p>
      </div>`;
  },
  async sendReceipt(receipt, toEmail) {
    if (!isValidEmail(toEmail)) return { ok: false, message: 'Correo no válido.' };
    if (!this.isConfigured('receipt')) return { ok: false, message: 'El envío de correos aún no está configurado.' };
    try {
      await this.send(EMAIL_CONFIG.templateReceipt, {
        to_email: toEmail,
        to_name: receipt.buyerName,
        receipt_number: receipt.receiptNumber,
        order_code: receipt.orderCode,
        payment_status: receipt.paymentStatus,
        payment_method: receipt.paymentMethodLabel,
        total: '$' + Number(receipt.total).toFixed(2),
        delivery_date: receipt.deliveryDateLabel || '',
        delivery_slot: receipt.deliverySlot || '',
        items_text: receipt.itemsSummary,
        issued_at: receipt.issuedAt,
        receipt_html: this.buildReceiptHtml(receipt)
      });
      return { ok: true };
    } catch (e) {
      console.warn('No se pudo enviar el comprobante por correo:', e);
      return { ok: false, message: 'No se pudo enviar el correo en este momento.' };
    }
  },
  async sendResetCode(toEmail, code) {
    if (!this.isConfigured('reset')) {
      return { ok: false, message: 'El envío de correos aún no está configurado. Contacta a Ramoza por WhatsApp para recuperar tu cuenta.' };
    }
    try {
      await this.send(EMAIL_CONFIG.templateReset, { to_email: toEmail, code: code, expires_minutes: '10' });
      return { ok: true };
    } catch (e) {
      console.warn('No se pudo enviar el código:', e);
      return { ok: false, message: 'No se pudo enviar el correo en este momento. Inténtalo nuevamente.' };
    }
  }
};

const icons = {
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
  cart: '<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H7"></path><circle cx="10" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle>',
  arrow: '<path d="M5 12h14"></path><path d="m14 6 6 6-6 6"></path>',
  back: '<path d="M19 12H5"></path><path d="m10 6-6 6 6 6"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  minus: '<path d="M5 12h14"></path>',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"></path>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  info: '<circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7h.01"></path>',
  leaf: '<path d="M5 21C5 10 11 4 20 3c0 9-5 15-15 18Z"></path><path d="M6 19c3-5 6-8 11-12"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>',
  eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line>'
};

const getIcon = (name, size = 22) => `
  <svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    ${icons[name] || ''}
  </svg>
`;

function getProduct(id) {
  return products.find(p => p.id === id);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str || '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Fecha mínima de entrega según la hora de Quito: si ya pasaron todas las franjas de hoy, es mañana
function getMinDeliveryDate() {
  const now = getQuitoNow();
  return getAvailableSlots(now.date).length > 0 ? now.date : addDaysIso(now.date, 1);
}

// Al cambiar la fecha se recalculan las franjas disponibles (sin perder lo ya escrito)
function onDeliveryDateChange(input) {
  saveCheckoutForm();
  syncCheckoutField('deliveryDate', input.value);
  const slots = getAvailableSlots(input.value);
  if (!slots.includes(state.checkoutForm.deliveryTimeSlot)) {
    state.checkoutForm.deliveryTimeSlot = slots[0] || '';
  }
  renderApp();
  const again = document.getElementById('delivery-date');
  if (again) again.focus();
}

function syncCheckoutField(fieldName, value) {
  if (!state.checkoutForm) state.checkoutForm = {};
  state.checkoutForm[fieldName] = sanitizeSafeInput(value, fieldName);
}

function saveCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;
  if (!state.checkoutForm) state.checkoutForm = {};
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.name && el.type !== 'radio' && el.type !== 'submit') {
      state.checkoutForm[el.name] = el.value;
    }
  }
}

function changeFulfillment(method) {
  saveCheckoutForm();
  state.fulfillmentMethod = method;
  renderApp();
}

function changePayment(method) {
  saveCheckoutForm();
  state.paymentMethod = method;
  renderApp();
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  if (btn) {
    btn.innerHTML = getIcon(isPassword ? 'eyeOff' : 'eye', 18);
    const label = isPassword ? 'Ocultar contraseña' : 'Ver contraseña';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
    btn.title = label;
  }
}

function checkPasswordMatch() {
  const p1 = document.getElementById('auth-pwd');
  const p2 = document.getElementById('auth-pwd2');
  const matchMsg = document.getElementById('pwd-match-msg');
  if (!p1 || !p2 || !matchMsg) return;
  
  if (!p2.value) {
    matchMsg.innerHTML = '';
    p2.setCustomValidity('');
    return;
  }
  
  if (p1.value === p2.value) {
    matchMsg.innerHTML = `<span style="color: var(--green); display: flex; align-items: center; gap: 4px; font-weight: 600;">${getIcon('check', 16)} ¡Las contraseñas coinciden correctamente!</span>`;
    p2.setCustomValidity('');
  } else {
    matchMsg.innerHTML = `<span style="color: var(--coral); display: flex; align-items: center; gap: 4px; font-weight: 600;">${getIcon('close', 16)} Las contraseñas no coinciden. Haz clic en el botón del ojo para revisar el error.</span>`;
    p2.setCustomValidity('Las contraseñas no coinciden');
  }
}

function checkAccountSecurityPasswordMatch() {
  const p1 = document.getElementById('new-pwd');
  const p2 = document.getElementById('confirm-new-pwd');
  const matchMsg = document.getElementById('account-pwd-match-msg');
  if (!p1 || !p2 || !matchMsg) return;
  
  if (!p2.value) {
    matchMsg.innerHTML = '';
    p2.setCustomValidity('');
    return;
  }
  
  if (p1.value === p2.value) {
    matchMsg.innerHTML = `<span style="color: var(--green); display: flex; align-items: center; gap: 4px; font-weight: 600;">${getIcon('check', 16)} ¡Las contraseñas coinciden!</span>`;
    p2.setCustomValidity('');
  } else {
    matchMsg.innerHTML = `<span style="color: var(--coral); display: flex; align-items: center; gap: 4px; font-weight: 600;">${getIcon('close', 16)} Las contraseñas no coinciden. Usa el botón del ojo para ver el error.</span>`;
    p2.setCustomValidity('Las contraseñas no coinciden');
  }
}

function announceToScreenReader(message) {
  const announcer = document.getElementById('a11y-announcer');
  if (announcer) {
    announcer.textContent = message;
  }
}

function animateCartBadge() {
  const cartBadge = document.getElementById('cart-badge');
  const cartLink = document.querySelector('.cart-action');
  if (cartBadge) {
    cartBadge.classList.remove('pulse-badge');
    void cartBadge.offsetWidth;
    cartBadge.classList.add('pulse-badge');
  }
  if (cartLink) {
    cartLink.classList.remove('pulse-link');
    void cartLink.offsetWidth;
    cartLink.classList.add('pulse-link');
  }
}

// Validación formal del algoritmo de cédula ecuatoriana (10 dígitos - Módulo 10)
function validarCedulaEcuatoriana(cedula) {
  if (!/^\d{10}$/.test(cedula)) return false;
  const digitoRegion = parseInt(cedula.substring(0, 2), 10);
  if (digitoRegion < 1 || (digitoRegion > 24 && digitoRegion !== 30)) return false;
  const tercerDigito = parseInt(cedula.charAt(2), 10);
  if (tercerDigito >= 6) return false;
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let suma = 0;
  for (let i = 0; i < 9; i++) {
    let valor = parseInt(cedula.charAt(i), 10) * coeficientes[i];
    if (valor >= 10) valor -= 9;
    suma += valor;
  }
  const digitoVerificador = (10 - (suma % 10)) % 10;
  return digitoVerificador === parseInt(cedula.charAt(9), 10);
}

// Validación de número de pasaporte extranjero (6 a 15 caracteres alfanuméricos)
function validarPasaporteExtranjero(pasaporte) {
  if (!pasaporte || typeof pasaporte !== 'string') return false;
  return /^[A-Z0-9]{6,15}$/i.test(pasaporte.trim());
}

function changeDocumentType(newDocType) {
  saveCheckoutForm();
  if (!state.checkoutForm) state.checkoutForm = {};
  state.checkoutForm.docType = newDocType;
  if (newDocType === 'cedula' && state.checkoutForm.contactId && !/^\d+$/.test(state.checkoutForm.contactId)) {
    state.checkoutForm.contactId = '';
  }
  renderApp();
}

// Aviso de disponibilidad visible al cliente: solo cuando quedan 5 o menos unidades (o está agotado)
function getLowStockNotice(p) {
  const stock = typeof p.stock === 'number' ? p.stock : 30;
  if (stock <= 0) return { cls: 'out', text: 'Agotado por el momento' };
  if (stock <= 5) return { cls: 'low', text: `¡Solo ${stock} ${stock === 1 ? 'disponible' : 'disponibles'}!` };
  return null;
}

function renderProductCard(p) {
  const quantity = state.cart[p.id] || 0;
  const maxStock = typeof p.stock === 'number' ? p.stock : 30;
  const isOutOfStock = maxStock <= 0;
  const isAtMaxLimit = quantity >= maxStock;
  const notice = getLowStockNotice(p);

  return `
    <article class="product-card" aria-label="${escapeHtml(p.name)}, precio $${p.price.toFixed(2)}${notice ? ', ' + notice.text : ''}">
      <a class="product-image" href="producto.html?id=${p.id}" onclick="openProduct(${p.id}); return false;" aria-label="Ver detalles e información completa de ${escapeHtml(p.name)}">
        <img src="${getThumbnailUrl(p.images[0])}" alt="${escapeHtml(p.alt)}" loading="lazy" decoding="async" width="280" height="260" />
      </a>
      <div class="product-copy">
        <p class="eyebrow" aria-hidden="true">${escapeHtml(p.category)}</p>
        <a class="product-name" href="producto.html?id=${p.id}" onclick="openProduct(${p.id}); return false;" aria-label="Ver detalles de ${escapeHtml(p.name)}">${escapeHtml(p.name)}</a>
        ${notice ? `<div><span class="stock-badge ${notice.cls}">${notice.text}</span></div>` : ''}
        <div class="price-line">
          <div class="price-box"><strong ${p.oldPrice ? 'style="color: var(--coral);"' : ''}>$${p.price.toFixed(2)}</strong>${p.oldPrice ? `<del aria-label="Precio anterior">$${p.oldPrice.toFixed(2)}</del>` : ''}</div>
          ${quantity === 0 
            ? `<button class="round-add" type="button" ${isOutOfStock ? 'aria-disabled="true"' : ''} onclick="updateCart(${p.id}, 1)" aria-label="${isOutOfStock ? `${escapeHtml(p.name)} sin stock disponible` : `Agregar 1 unidad de ${escapeHtml(p.name)} al carrito`}">${getIcon('plus')}</button>` 
            : `<div class="card-quantity" role="group" aria-label="Cantidad seleccionada de ${escapeHtml(p.name)}">
                 <button class="qty-btn ${quantity === 1 ? 'delete-control' : ''}" type="button" onclick="updateCart(${p.id}, -1)" aria-label="${quantity === 1 ? `Eliminar ${escapeHtml(p.name)} del carrito` : `Quitar una unidad de ${escapeHtml(p.name)}`}">
                   ${getIcon(quantity === 1 ? 'trash' : 'minus', 15)}
                 </button>
                 <span class="card-qty-num" aria-hidden="true">${quantity}</span>
                 <span class="sr-only">${quantity} en carrito</span>
                 <button class="qty-btn" type="button" ${isAtMaxLimit ? 'aria-disabled="true"' : ''} onclick="updateCart(${p.id}, 1)" aria-label="${isAtMaxLimit ? `No hay más unidades disponibles de ${escapeHtml(p.name)}` : `Añadir una unidad más de ${escapeHtml(p.name)}`}">
                   ${getIcon('plus', 15)}
                 </button>
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
      <img src="https://images.unsplash.com/photo-1685613858397-64f79a0f3603?auto=format&fit=crop&w=1200&q=80" alt="Arreglo floral fresco de rosas y follaje luminoso en florero decorativo para entrega en Quito" fetchpriority="high" decoding="async" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-kicker" aria-hidden="true">FLORES FRESCAS · ENTREGAS EN QUITO Y VALLES</p>
        <h1 id="hero-heading">Un detalle que<br />llega <em>a tiempo.</em></h1>
        <p>Elige, personaliza y decide cómo recibir tu pedido en pocos pasos. Te mostramos el precio y la disponibilidad antes de pagar.</p>
        <a class="primary" href="catalogo.html?cat=Todos" onclick="setCategory('Todos'); return false;" aria-label="Ver todos los productos del catálogo">Ver productos ${getIcon('arrow')}</a>
      </div>
    </section>

    <section class="category-strip" aria-labelledby="category-heading">
      <div class="section-heading">
        <div><p class="eyebrow" aria-hidden="true">COMPRA POR OCASIÓN</p><h2 id="category-heading">Encuentra el detalle indicado</h2></div>
      </div>
      <div class="category-grid">
        <a class="category-tile" href="catalogo.html?cat=Arreglos%20florales" onclick="setCategory('Arreglos florales'); return false;" aria-label="Explorar categoría Arreglos florales">
          <img src="${getThumbnailUrl((products[2] || products[0]).images[0])}" alt="Ejemplo de arreglos florales frescos de rosas y follaje de temporada" loading="lazy" decoding="async" />
          <span><span class="tile-link">Arreglos florales ${getIcon('arrow', 18)}</span></span>
        </a>
        <a class="category-tile" href="catalogo.html?cat=Regalos" onclick="setCategory('Regalos'); return false;" aria-label="Explorar categoría Regalos">
          <img src="${getThumbnailUrl((products[8] || products[0]).images[0])}" alt="Ejemplo de regalos con chocolates, canastas y flores frescas" loading="lazy" decoding="async" />
          <span><span class="tile-link">Regalos ${getIcon('arrow', 18)}</span></span>
        </a>
        <a class="category-tile" href="catalogo.html?cat=Funerarios" onclick="setCategory('Funerarios'); return false;" aria-label="Explorar categoría Funerarios">
          <img src="${getThumbnailUrl((products[11] || products[0]).images[0])}" alt="Ejemplo de arreglos funerarios solemnes y coronas de condolencias" loading="lazy" decoding="async" />
          <span><span class="tile-link">Funerarios ${getIcon('arrow', 18)}</span></span>
        </a>
      </div>
    </section>

    <section class="catalog-section" aria-labelledby="catalog-heading">
      <div class="section-heading">
        <div><p class="eyebrow" aria-hidden="true">CATÁLOGO DESTACADO</p><h2 id="catalog-heading">Explora nuestros productos</h2></div>
      </div>
      <div class="product-rail" role="region" tabindex="0" aria-label="Lista desplazable horizontal de productos destacados">
        ${top12}
        <div class="rail-end"><span>${getIcon('leaf', 32)}</span><strong class="rail-title">Eso es todo por ahora</strong><p>Incorporamos nuevos productos de proveedores aliados cada semana.</p></div>
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
  
  const eyebrow = state.screen === 'search' ? 'RESULTADOS DE BÚSQUEDA' : 'CATÁLOGO DE PRODUCTOS';

  return `
    <section class="page-shell listing-page">
      <a class="back-link" aria-label="Volver a la página de inicio" href="index.html">${getIcon('back')} Volver al inicio</a>
      <div class="listing-heading" style="margin-bottom: 30px;">
        <div>
          <p class="eyebrow" aria-hidden="true">${eyebrow}</p>
          <h1 aria-live="polite">${heading}</h1>
          <p style="color: var(--slate-muted); font-size: 15px; margin-top: 6px;">${filtered.length} productos disponibles con entrega en Quito y Valles.</p>
        </div>
      </div>
      <div class="product-grid" role="region" aria-label="Cuadrícula de productos filtrados" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px;">
        ${filtered.map(renderProductCard).join('')}
      </div>
    </section>
  `;
}

function viewDetail() {
  const p = getProduct(state.selectedProductId);
  if (!p) {
    return `<section class="page-shell"><div class="empty-state"><h1>Producto no encontrado</h1><a class="primary" href="catalogo.html">Volver al catálogo</a></div></section>`;
  }
  const qty = state.cart[p.id] || 0;
  const maxStock = typeof p.stock === 'number' ? p.stock : 30;
  const remainingStock = Math.max(0, maxStock - qty);
  const isOutOfStock = maxStock <= 0;
  const isAtMaxLimit = qty >= maxStock;
  const isFuneral = p.category === 'Funerarios';
  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 5).map(renderProductCard).join('');
  const activeAlert = (state.stockConstraintAlert && state.stockConstraintAlert.productId === p.id)
    ? state.stockConstraintAlert.message
    : null;

  return `
    <section class="page-shell" aria-labelledby="detail-product-title">
      <a class="back-link" aria-label="Volver al catálogo de productos" href="catalogo.html">${getIcon('back')} Volver al catálogo</a>
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="detail-image"><img src="${getDetailImageUrl(p.images[0])}" alt="${escapeHtml(p.alt)}" decoding="async" /></div>
        </div>
        <div class="detail-copy">
          <p class="eyebrow" aria-hidden="true">${escapeHtml(p.category)}</p>
          <h1 id="detail-product-title">${escapeHtml(p.name)}</h1>
          <div class="detail-price"><strong ${p.oldPrice ? 'style="color: var(--coral);"' : ''}>$${p.price.toFixed(2)}</strong>${p.oldPrice ? `<del aria-label="Precio anterior">$${p.oldPrice.toFixed(2)}</del>`:''}</div>
          <p class="description">${escapeHtml(p.description)}</p>
          <div class="availability" role="status" aria-live="polite">
            ${getIcon(isOutOfStock ? 'info' : 'check')}
            <div>
              <strong>${isOutOfStock ? 'Agotado por el momento' : 'Disponible para entrega en Quito y Valles'}</strong>
              <span class="subtext">Envío protegido en automóvil o retiro sin costo en taller aliado.</span>
              ${getLowStockNotice(p) && !isOutOfStock ? `<span class="stock-badge low" style="margin-top: 8px;">${getLowStockNotice(p).text}</span>` : ''}
            </div>
          </div>
          
          ${isFuneral ? `
            <div class="funeral-dedication-box" style="margin: 20px 0; padding: 18px; border: 1.5px solid rgb(27 106 56 / 25%); border-radius: 8px; background: #FFFFFF;">
              <label for="detail-funeral-note" style="display: block; font-weight: 700; color: var(--slate); font-size: 14.5px; margin-bottom: 6px;">
                Dedicatoria para arreglo funerario (máx. 350 caracteres):
              </label>
              <textarea id="detail-funeral-note" maxlength="350" rows="3" placeholder="Escribe aquí tu mensaje de condolencia o dedicatoria para la cinta (ej. Con profundo pesar, Familia Pérez Gómez)..." oninput="state.funeralNotes[${p.id}] = sanitizeSafeInput(this.value, 'Dedicatoria')" aria-describedby="detail-funeral-help">${escapeHtml(state.funeralNotes[p.id] || '')}</textarea>
              <span id="detail-funeral-help" class="field-help-text">Personaliza tu nota luctuosa antes de añadir el arreglo al carrito.</span>
            </div>
          ` : ''}

          ${activeAlert ? `
            <div class="constraint-alert-banner" role="alert" aria-live="assertive">
              <span>${escapeHtml(activeAlert)}</span>
            </div>
          ` : ''}

          ${qty > 0 ? `
            <div class="product-feedback-banner" role="status" aria-live="polite" style="background: var(--green-light); border-left: 4px solid var(--green); padding: 12px 16px; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-weight: 700; color: var(--green); font-size: 15px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ¡${qty} ${qty === 1 ? 'unidad en el carrito' : 'unidades en el carrito'}!
            </div>
          ` : ''}

          ${qty === 0 
            ? `<button class="primary wide" type="button" ${isOutOfStock ? 'aria-disabled="true"' : ''} onclick="updateCart(${p.id}, 1)" aria-label="${isOutOfStock ? `${escapeHtml(p.name)} agotado` : `Agregar ${escapeHtml(p.name)} al carrito por $${p.price.toFixed(2)}`}">
            ${isOutOfStock ? 'Agotado por el momento' : `Agregar al carrito — $${p.price.toFixed(2)}`} ${getIcon('cart')}
          </button>`
            : `<div class="card-quantity detail-quantity" style="width: 100%; justify-content: space-between; margin-bottom: 12px; min-height: 48px;" role="group" aria-label="Control de cantidad de ${escapeHtml(p.name)}">
                 <button class="${qty === 1 ? 'delete-control' : ''}" type="button" onclick="updateCart(${p.id}, -1)" aria-label="${qty === 1 ? `Eliminar ${escapeHtml(p.name)} del carrito` : `Quitar una unidad de ${escapeHtml(p.name)}`}">
                   ${getIcon(qty === 1 ? 'trash' : 'minus', 18)}
                 </button>
                 <span aria-live="polite" aria-atomic="true" style="font-size: 15px; font-weight: 700;">${qty} en carrito</span>
                 <button type="button" ${isAtMaxLimit ? 'aria-disabled="true"' : ''} onclick="updateCart(${p.id}, 1)" aria-label="${isAtMaxLimit ? `No hay más unidades disponibles de ${escapeHtml(p.name)}` : `Añadir otra unidad de ${escapeHtml(p.name)}`}">${getIcon('plus', 19)}</button>
               </div>`
          }
          
          <a class="secondary wide detail-cart-link" href="carrito.html" aria-label="Ir directamente al carrito de compras">Ir al carrito ${getIcon('arrow')}</a>
        </div>
      </div>
      <div class="related" style="margin-top: 60px;">
        <div class="section-heading"><div><p class="eyebrow" aria-hidden="true">TAMBIÉN PODRÍA GUSTARTE</p><h2>Productos relacionados</h2></div></div>
        <div class="product-rail" role="region" tabindex="0" aria-label="Lista desplazable de productos relacionados">${related}</div>
      </div>
    </section>
  `;
}

function viewCart() {
  const cartIds = Object.keys(state.cart).map(Number);
  if (cartIds.length === 0) {
    return `
      <section class="page-shell narrow">
        <a class="back-link" href="catalogo.html" aria-label="Volver a la tienda para seguir comprando">${getIcon('back')} Seguir comprando</a>
        <div class="empty-state">
          <span class="empty-icon" aria-hidden="true">${getIcon('cart', 38)}</span>
          <h1>Tu carrito está vacío</h1>
          <p style="color: var(--slate-muted); margin-bottom: 24px;">No tienes productos seleccionados todavía.</p>
          <a class="primary" href="catalogo.html" aria-label="Regresar al catálogo para ver productos">Ver productos ${getIcon('arrow')}</a>
        </div>
      </section>
    `;
  }

  let subtotal = 0;
  const itemsHtml = cartIds.map(id => {
    const p = getProduct(id);
    if (!p) return '';
    const q = state.cart[id];
    const maxStock = typeof p.stock === 'number' ? p.stock : 30;
    const isAtMaxLimit = q >= maxStock;
    subtotal += p.price * q;
    const funeralNote = state.funeralNotes[id];
    const itemAlert = (state.stockConstraintAlert && state.stockConstraintAlert.productId === id)
      ? state.stockConstraintAlert.message
      : null;

    return `
      <article class="cart-item" role="listitem">
        <a class="cart-item-thumb-link" href="producto.html?id=${p.id}" onclick="openProduct(${p.id}); return false;" aria-label="Ver detalles de ${escapeHtml(p.name)}" title="Ver detalles de ${escapeHtml(p.name)}">
          <img src="${getThumbnailUrl(p.images[0])}" alt="${escapeHtml(p.alt)}" loading="lazy" decoding="async" width="110" height="110" />
        </a>
        <div class="cart-item-info">
          <p class="eyebrow" aria-hidden="true">${escapeHtml(p.category)}</p>
          <h2 class="cart-item-title">
            <a href="producto.html?id=${p.id}" onclick="openProduct(${p.id}); return false;" aria-label="Ver detalles de ${escapeHtml(p.name)}" title="Ver detalles de ${escapeHtml(p.name)}">
              ${escapeHtml(p.name)}
            </a>
          </h2>
          ${getLowStockNotice(p) ? `<div style="margin: 2px 0 6px;"><span class="stock-badge ${getLowStockNotice(p).cls}">${getLowStockNotice(p).text}</span></div>` : ''}
          ${funeralNote ? `<p style="font-size: 13px; color: var(--slate); background: var(--green-light); padding: 6px 10px; border-radius: 6px; margin: 6px 0;"><strong>Dedicatoria:</strong> "${escapeHtml(funeralNote)}"</p>` : ''}
          ${itemAlert ? `<div class="constraint-alert-banner" role="alert" aria-live="assertive" style="margin: 6px 0; padding: 8px 12px; font-size: 12.5px;">${escapeHtml(itemAlert)}</div>` : ''}
          <div class="quantity" role="group" aria-label="Control de cantidad de ${escapeHtml(p.name)}">
            <button class="${q===1?'delete-control':''}" type="button" onclick="updateCart(${id}, -1)" aria-label="${q===1 ? `Eliminar ${escapeHtml(p.name)} del carrito` : `Quitar una unidad de ${escapeHtml(p.name)}`}">${getIcon(q===1?'trash':'minus', 17)}</button>
            <span aria-live="polite" aria-atomic="true">${q} en carrito</span>
            <button type="button" ${isAtMaxLimit ? 'aria-disabled="true"' : ''} onclick="updateCart(${id}, 1)" aria-label="${isAtMaxLimit ? `No hay más unidades disponibles de ${escapeHtml(p.name)}` : `Añadir una unidad de ${escapeHtml(p.name)}`}">${getIcon('plus', 17)}</button>
          </div>
        </div>
        <div class="cart-item-end"><strong aria-label="Subtotal del producto: $${(p.price * q).toFixed(2)}">$${(p.price * q).toFixed(2)}</strong></div>
      </article>
    `;
  }).join('');

  return `
    <section class="page-shell narrow">
      <a class="back-link" href="catalogo.html" aria-label="Volver al inicio para seguir comprando">${getIcon('back')} Seguir comprando</a>
      <div class="page-title"><p class="eyebrow" aria-hidden="true">TU COMPRA</p><h1>Carrito de compras</h1></div>
      <div class="cart-layout">
        <div class="cart-items" role="list" aria-label="Artículos en tu carrito">${itemsHtml}</div>
        <aside class="summary" aria-label="Resumen de pago">
          <h2>Resumen del pedido</h2>
          <div><span>Subtotal de productos</span><strong class="price-value">$${subtotal.toFixed(2)}</strong></div>
          <div><span>Envío estimado</span><span class="shipping-info-tag">Calculado en checkout</span></div>
          <hr />
          <div class="total"><span>Total estimado</span><strong class="price-value">$${subtotal.toFixed(2)}</strong></div>
          
          <div class="summary-info-card" role="note">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p><strong>Modalidad de entrega:</strong> En el siguiente paso podrás elegir entre envío protegido en auto a Quito ($5.00) o retiro sin costo en taller.</p>
          </div>

          <a class="primary wide" href="checkout.html" aria-label="Proceder al checkout para elegir método de entrega y pago">
            Continuar al pago ${getIcon('arrow')}
          </a>
        </aside>
      </div>
    </section>
  `;
}

function viewCheckout() {
  const cartIds = Object.keys(state.cart).map(Number);
  if (cartIds.length === 0) {
    return `
      <section class="page-shell narrow">
        <div class="empty-state">
          <span class="empty-icon" aria-hidden="true">${getIcon('cart', 38)}</span>
          <h1>Tu carrito está vacío</h1>
          <p style="color: var(--slate-muted); margin-bottom: 24px;">Agrega productos a tu carrito antes de continuar al checkout.</p>
          <a class="primary" href="catalogo.html">Ir a la tienda</a>
        </div>
      </section>
    `;
  }

  const hasFuneralProduct = cartIds.some(id => getProduct(id)?.category === 'Funerarios');
  const funeralProduct = hasFuneralProduct ? products.find(p => cartIds.includes(p.id) && p.category === 'Funerarios') : null;
  const currentNote = funeralProduct ? (state.funeralNotes[funeralProduct.id] || '') : '';

  const delivery = state.fulfillmentMethod === 'pickup' ? 0 : 5.00;
  let subtotal = 0;
  cartIds.forEach(id => { subtotal += getProduct(id).price * state.cart[id]; });
  const total = subtotal + delivery;
  state.lastTotal = total;

  if (!state.checkoutForm) state.checkoutForm = {};
  const form = state.checkoutForm;
  // Solo se precargan datos si el usuario inició sesión (son SUS datos); si no, los campos quedan vacíos
  const profile = state.signedIn ? state.userProfile : {};
  const contactName = form.contactName || profile.name || '';
  const docType = form.docType || profile.docType || 'cedula';
  const contactId = form.contactId || profile.cedula || '';
  const contactPhone = form.contactPhone || profile.phone || '';
  const contactEmail = form.contactEmail || profile.email || '';
  const deliveryAddress = form.deliveryAddress || '';
  const minDate = getMinDeliveryDate();
  const deliveryDate = (form.deliveryDate && form.deliveryDate >= minDate) ? form.deliveryDate : minDate;
  const availableSlots = getAvailableSlots(deliveryDate);
  const deliveryTimeSlot = availableSlots.includes(form.deliveryTimeSlot) ? form.deliveryTimeSlot : (availableSlots[0] || '');
  form.deliveryDate = deliveryDate;
  form.deliveryTimeSlot = deliveryTimeSlot;
  const quitoNow = getQuitoNow();
  const isToday = deliveryDate === quitoNow.date;
  const condolenceMsg = form.condolenceMsg !== undefined ? form.condolenceMsg : currentNote;
  const ccNum = form.ccNum || '';
  const ccName = form.ccName || '';
  const ccExp = form.ccExp || '';
  const ccCvv = form.ccCvv || '';
  const cashAmount = form.cashAmount || '';
  const transferRef = form.transferRef || '';

  return `
    <section class="page-shell narrow">
      <a class="back-link" href="carrito.html" aria-label="Volver al carrito de compras">${getIcon('back')} Volver al carrito</a>
      <div class="page-title"><p class="eyebrow" aria-hidden="true">TU COMPRA</p><h1>Finalizar compra</h1></div>
      
      <form class="checkout-layout" id="checkout-form" onsubmit="event.preventDefault(); handleCheckoutSubmit(this);">
        <div class="checkout-form">
          ${hasFuneralProduct ? `
            <fieldset><legend>Nota de condolencia</legend>
              <div class="form-grid">
                <label for="checkout-funeral-msg" class="full">
                  Dedicatoria o cinta para el arreglo funerario (máx. 350 caracteres):
                  <textarea id="checkout-funeral-msg" name="condolenceMsg" maxlength="350" rows="3" placeholder="Escribe un mensaje de condolencia o dedicatoria para la cinta..." oninput="syncCheckoutField('condolenceMsg', this.value); if(${funeralProduct.id}) state.funeralNotes[${funeralProduct.id}] = this.value" aria-describedby="condolence-help">${escapeHtml(condolenceMsg)}</textarea>
                  <span id="condolence-help" class="field-help-text">Puedes editar o confirmar la dedicatoria para el florista artesano.</span>
                </label>
              </div>
            </fieldset>
          ` : ''}

          <fieldset><legend>Datos para el comprobante de venta y contacto</legend>
            <div class="form-grid">
              <label for="contact-name" class="full">
                Nombre y apellido completo
                <input required id="contact-name" name="contactName" maxlength="100" value="${escapeHtml(contactName)}" oninput="syncCheckoutField(this.name, this.value)" placeholder="Ej. María Pérez" aria-required="true" aria-describedby="name-help" />
                <span id="name-help" class="field-help-text">Ingresa tu nombre para el registro del comprobante de venta.</span>
              </label>

              <label for="contact-doc-type">
                Tipo de documento de identidad
                <select id="contact-doc-type" name="docType" onchange="changeDocumentType(this.value)" aria-describedby="doc-type-help">
                  <option value="cedula" ${docType === 'cedula' ? 'selected' : ''}>Cédula ecuatoriana (10 dígitos)</option>
                  <option value="pasaporte" ${docType === 'pasaporte' ? 'selected' : ''}>Pasaporte extranjero (Alfanumérico)</option>
                </select>
                <span id="doc-type-help" class="field-help-text">Elige Cédula si eres ciudadano en Ecuador o Pasaporte si eres extranjero.</span>
              </label>

              <label for="contact-id">
                ${docType === 'pasaporte' ? 'Número de Pasaporte extranjero (6 a 15 caracteres)' : 'Cédula de identidad ecuatoriana (10 dígitos)'}
                <input required id="contact-id" name="contactId" type="text" inputmode="${docType === 'pasaporte' ? 'text' : 'numeric'}" pattern="${docType === 'pasaporte' ? '[A-Za-z0-9]{6,15}' : '[0-9]{10}'}" maxlength="${docType === 'pasaporte' ? '15' : '10'}" value="${escapeHtml(contactId)}" oninput="${docType === 'pasaporte' ? "this.value = this.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();" : "this.value = this.value.replace(/[^0-9]/g, '');"} syncCheckoutField(this.name, this.value); validarDocumentoInput(this);" placeholder="${docType === 'pasaporte' ? 'Ej. AB1234567' : 'Ej. 1712345678'}" aria-required="true" aria-describedby="id-help" />
                <span id="id-help" class="field-help-text">${docType === 'pasaporte' ? 'Ingresa de 6 a 15 letras y números de tu pasaporte vigente.' : 'Ingresa los 10 dígitos de tu cédula.'}</span>
              </label>

              <label for="contact-email" class="full">
                Correo electrónico (aquí te enviaremos tu comprobante)
                <input required id="contact-email" name="contactEmail" type="email" inputmode="email" autocomplete="email" maxlength="100" value="${escapeHtml(contactEmail)}" oninput="syncCheckoutField(this.name, this.value)" placeholder="Ej. nombre@correo.com" aria-required="true" aria-describedby="email-checkout-help" />
                <span id="email-checkout-help" class="field-help-text">Recibirás una copia del comprobante de venta en este correo.</span>
              </label>

              <label for="contact-phone" class="full">
                Teléfono móvil (WhatsApp de confirmación)
                <input required id="contact-phone" name="contactPhone" type="tel" inputmode="numeric" pattern="09[0-9]{8}" maxlength="10" value="${escapeHtml(contactPhone)}" oninput="this.value = this.value.replace(/[^0-9]/g, ''); syncCheckoutField(this.name, this.value);" placeholder="Ej. 0991234567" aria-required="true" aria-describedby="phone-help" />
                <span id="phone-help" class="field-help-text">Número de 10 dígitos iniciando con 09 para coordinar el despacho.</span>
              </label>
            </div>
          </fieldset>

          <fieldset><legend>Modalidad y fecha de entrega</legend>
            <div class="payment-options-group" role="radiogroup" aria-label="Selecciona método de entrega">
              <label class="payment-option ${state.fulfillmentMethod === 'delivery' ? 'selected' : ''}">
                <input type="radio" name="fulfillment" value="delivery" onchange="changeFulfillment('delivery')" ${state.fulfillmentMethod === 'delivery' ? 'checked' : ''} aria-label="Envío protegido en auto en Quito y Valles" />
                <span>
                  <strong>Envío protegido en Quito y Valles ($5.00)</strong>
                  <span class="subtext">Coordinado mediante automóvil cerrado para cuidar la frescura e integridad del arreglo.</span>
                </span>
              </label>
              <label class="payment-option ${state.fulfillmentMethod === 'pickup' ? 'selected' : ''}">
                <input type="radio" name="fulfillment" value="pickup" onchange="changeFulfillment('pickup')" ${state.fulfillmentMethod === 'pickup' ? 'checked' : ''} aria-label="Retiro en tienda sin costo adicional" />
                <span>
                  <strong>Retiro con el proveedor (Sin costo)</strong>
                  <span class="subtext">Te notificaremos por WhatsApp cuando el arreglo esté preparado para retirar en taller aliado.</span>
                </span>
              </label>
            </div>
            
            ${state.fulfillmentMethod === 'delivery' ? `
              <div style="margin-top: 18px;">
                <label for="delivery-address">
                  Dirección exacta de entrega y referencias en Quito / Valles
                  <input required id="delivery-address" name="deliveryAddress" maxlength="200" value="${escapeHtml(deliveryAddress)}" oninput="syncCheckoutField(this.name, this.value)" placeholder="Calle principal, número, sector (Cumbayá, Tumbaco, Centro, Norte) y referencia visual..." aria-required="true" aria-describedby="address-help" />
                  <span id="address-help" class="field-help-text">Indica el sector y una referencia clara para el conductor del automóvil.</span>
                </label>
              </div>
            ` : `
              <div class="pickup-note" role="note" aria-live="polite">
                ${getIcon('info', 20)}
                <div><strong>Retiro sin costo en taller</strong><p>Tus datos quedan guardados. Te enviaremos la ubicación exacta del taller aliado por WhatsApp.</p></div>
              </div>
            `}

            <div class="form-grid" style="margin-top: 18px;">
              <label for="delivery-date">
                Fecha programada de entrega
                <input required id="delivery-date" name="deliveryDate" type="date" min="${minDate}" value="${escapeHtml(deliveryDate)}" onchange="onDeliveryDateChange(this)" aria-required="true" aria-describedby="date-help" />
                <span id="date-help" class="field-help-text">Horario de Quito, Ecuador. ${minDate !== quitoNow.date ? 'Las franjas de hoy ya cerraron; la entrega más próxima es mañana.' : 'Puedes elegir hoy o una fecha posterior.'}</span>
              </label>

              <label for="delivery-time-slot">
                Franja horaria preferida
                <select id="delivery-time-slot" name="deliveryTimeSlot" onchange="syncCheckoutField(this.name, this.value)" aria-describedby="time-help" required aria-required="true">
                  ${DELIVERY_SLOTS.map(s => {
                    const enabled = availableSlots.includes(s.value);
                    return `<option value="${s.value}" ${s.value === deliveryTimeSlot ? 'selected' : ''} ${enabled ? '' : 'disabled'}>${s.value}${enabled ? '' : ' — ya no disponible hoy'}</option>`;
                  }).join('')}
                </select>
                <span id="time-help" class="field-help-text">${isToday ? `Para entregas hoy: Mañana hasta las 11:00, Tarde hasta las 16:00 y Urgente hasta las 18:00 (hora de Quito).` : 'Horario en que el destinatario estará disponible.'}</span>
              </label>
            </div>
          </fieldset>

          <fieldset><legend>Forma de pago</legend>
            <div class="payment-options-group" role="radiogroup" aria-label="Selecciona la forma de pago">
              <label class="payment-option ${state.paymentMethod === 'card' ? 'selected' : ''}">
                <input type="radio" name="payment" value="card" onchange="changePayment('card')" ${state.paymentMethod === 'card' ? 'checked' : ''} aria-label="Pagar con tarjeta de crédito o débito" />
                <span>
                  <strong>Tarjeta de crédito o débito</strong>
                  <span class="subtext">Aceptamos Visa, Mastercard y tarjetas nacionales con confirmación inmediata.</span>
                </span>
              </label>

              <label class="payment-option ${state.paymentMethod === 'cash' ? 'selected' : ''}">
                <input type="radio" name="payment" value="cash" onchange="changePayment('cash')" ${state.paymentMethod === 'cash' ? 'checked' : ''} aria-label="Pagar en efectivo contraentrega al recibir el pedido" />
                <span>
                  <strong>Pago contraentrega (Efectivo al recibir)</strong>
                  <span class="subtext">Cancela el valor directamente al chofer al momento de la entrega o al retirar.</span>
                </span>
              </label>

              <label class="payment-option ${state.paymentMethod === 'transfer' ? 'selected' : ''}">
                <input type="radio" name="payment" value="transfer" onchange="changePayment('transfer')" ${state.paymentMethod === 'transfer' ? 'checked' : ''} aria-label="Pagar mediante transferencia bancaria Banco Pichincha o Deuna" />
                <span>
                  <strong>Transferencia bancaria directa (Banco Pichincha / Deuna)</strong>
                  <span class="subtext">Transfiere desde tu banca virtual o Deuna y registra el número de comprobante.</span>
                </span>
              </label>
            </div>

            ${state.paymentMethod === 'card' ? `
              <div class="card-details-fields" aria-label="Formulario de tarjeta de crédito o débito">
                <div class="form-grid">
                  <label for="cc-num" class="full">
                    Número de tarjeta
                    <input required id="cc-num" name="ccNum" type="text" inputmode="numeric" autocomplete="cc-number" maxlength="19" value="${escapeHtml(ccNum)}" placeholder="4000 1234 5678 9010" pattern="[0-9 ]{15,19}" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim(); syncCheckoutField(this.name, this.value);" aria-required="true" aria-describedby="cc-num-help" />
                    <span id="cc-num-help" class="field-help-text">16 dígitos numéricos impresos en el frente de tu tarjeta.</span>
                  </label>

                  <label for="cc-name" class="full">
                    Nombre del titular de la tarjeta
                    <input required id="cc-name" name="ccName" type="text" autocomplete="cc-name" maxlength="60" value="${escapeHtml(ccName)}" placeholder="Ej. MARÍA PÉREZ" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,60}" oninput="syncCheckoutField(this.name, this.value);" aria-required="true" aria-describedby="cc-name-help" />
                    <span id="cc-name-help" class="field-help-text">Nombre tal como aparece registrado en la tarjeta.</span>
                  </label>

                  <label for="cc-exp">
                    Fecha de vencimiento (MM/AA)
                    <input required id="cc-exp" name="ccExp" type="text" inputmode="numeric" autocomplete="cc-exp" maxlength="5" value="${escapeHtml(ccExp)}" placeholder="12/28" pattern="(0[1-9]|1[0-2])\\/[0-9]{2}" oninput="if(this.value.length === 2 && !this.value.includes('/')) this.value += '/'; syncCheckoutField(this.name, this.value);" aria-required="true" aria-describedby="cc-exp-help" />
                    <span id="cc-exp-help" class="field-help-text">Mes y año en formato MM/AA.</span>
                  </label>

                  <label for="cc-cvv">
                    Código de seguridad (CVV)
                    <div class="password-wrapper">
                      <input required id="cc-cvv" name="ccCvv" type="password" inputmode="numeric" autocomplete="cc-csc" maxlength="4" value="${escapeHtml(ccCvv)}" placeholder="123" pattern="[0-9]{3,4}" oninput="this.value = this.value.replace(/[^0-9]/g, ''); syncCheckoutField(this.name, this.value);" aria-required="true" aria-describedby="cc-cvv-help" />
                      <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('cc-cvv', this)" aria-label="Ver código CVV" aria-pressed="false" title="Ver código CVV">
                        ${getIcon('eye', 18)}
                      </button>
                    </div>
                    <span id="cc-cvv-help" class="field-help-text">3 o 4 dígitos de seguridad al reverso.</span>
                  </label>
                </div>
                <div class="receipt-payment-banner cancelado" role="status" style="margin-top: 16px;">
                  <div>
                    <strong>Pago con tarjeta:</strong> Al confirmar tu compra, tu Comprobante de Venta se emitirá con estado <strong>CANCELADO</strong>.
                  </div>
                  <span class="receipt-status-badge cancelado">CANCELADO</span>
                </div>
              </div>
            ` : state.paymentMethod === 'transfer' ? `
              <div class="bank-transfer-box" role="region" aria-label="Datos bancarios para transferencia">
                <div class="bank-details-card">
                  <div class="bank-row"><span>Banco:</span><strong>Banco Pichincha</strong></div>
                  <div class="bank-row"><span>Tipo de cuenta:</span><strong>Cuenta Corriente</strong></div>
                  <div class="bank-row"><span>Número de cuenta:</span><strong>2100847291</strong></div>
                  <div class="bank-row"><span>Beneficiario:</span><strong>Ramoza Florería Cía. Ltda.</strong></div>
                  <div class="bank-row"><span>RUC:</span><strong>1792348567001</strong></div>
                  <div class="bank-row"><span>Monto a transferir:</span><strong>$${total.toFixed(2)}</strong></div>
                </div>
                <div style="margin-top: 14px;">
                  <label for="transfer-ref">
                    Número de comprobante / Referencia de transferencia bancaria
                    <input required id="transfer-ref" name="transferRef" type="text" maxlength="30" value="${escapeHtml(transferRef)}" oninput="syncCheckoutField(this.name, this.value)" placeholder="Ej. 94827104" aria-required="true" aria-describedby="transfer-ref-help" />
                    <span id="transfer-ref-help" class="field-help-text">Ingresa el código numérico emitido por tu banca móvil o app Deuna.</span>
                  </label>
                </div>
                <div class="receipt-payment-banner cancelado" role="status" style="margin-top: 16px;">
                  <div>
                    <strong>Comprobante de Venta por Transferencia:</strong> Tu comprobante de venta quedará registrado con el pago bancario como <strong>CANCELADO</strong>.
                  </div>
                  <span class="receipt-status-badge cancelado">CANCELADO</span>
                </div>
              </div>
            ` : `
              <div class="cash-note-box" role="note" aria-live="polite">
                ${getIcon('info', 22)}
                <div style="width: 100%;">
                  <strong>Pago contraentrega en efectivo</strong>
                  <p>Por favor ten listo el monto de <strong>$${total.toFixed(2)}</strong> al momento de la entrega para agilizar el despacho de tus flores.</p>
                  <div style="margin-top: 10px;">
                    <label for="cash-amount" style="font-size: 13px; font-weight: 600;">
                      ¿Con cuánto vas a pagar? (Opcional, para que el chofer lleve cambio):
                      <input id="cash-amount" name="cashAmount" type="text" maxlength="15" placeholder="Ej. $20.00 o $50.00" value="${escapeHtml(cashAmount)}" oninput="syncCheckoutField(this.name, this.value)" style="margin-top: 4px;" />
                    </label>
                  </div>
                  <div class="receipt-payment-banner falta-cancelar" role="status" style="margin-top: 14px;">
                    <div>
                      <strong>Comprobante de Venta por Pago Contraentrega:</strong> Se generará tu comprobante de venta vinculado a este pago con estado <strong>FALTA CANCELAR</strong> hasta el momento de la entrega.
                    </div>
                    <span class="receipt-status-badge falta-cancelar">FALTA CANCELAR</span>
                  </div>
                </div>
              </div>
            `}
          </fieldset>

          <!-- Promesas y Garantías de Compra Ramoza -->
          <div class="checkout-promises-card" role="region" aria-label="Nuestras garantías de compra Ramoza">
            <div class="promises-header">
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Nuestras Garantías en tu Pedido</span>
            </div>
            <div class="promises-grid">
              <div class="promise-item">
                <div class="promise-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Entrega puntual garantizada</strong>
                  <p>Llegamos en la fecha y franja horaria pactada en Quito y los Valles, sin retrasos.</p>
                </div>
              </div>

              <div class="promise-item">
                <div class="promise-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 21C5 10 11 4 20 3c0 9-5 15-15 18Z"></path><path d="M6 19c3-5 6-8 11-12"></path>
                  </svg>
                </div>
                <div>
                  <strong>Frescura de exportación 100%</strong>
                  <p>Flores cortadas el mismo día. Si no llegan frescas, te entregamos un nuevo ramo sin costo.</p>
                </div>
              </div>

              <div class="promise-item">
                <div class="promise-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <strong>Foto previa por WhatsApp</strong>
                  <p>Te enviamos una fotografía de tu arreglo preparado antes de que salga del taller rumbo al destino.</p>
                </div>
              </div>

              <div class="promise-item">
                <div class="promise-icon" aria-hidden="true">
                  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Satisfacción garantizada</strong>
                  <p>Cuidamos cada detalle de tu arreglo para que tu sorpresa y experiencia sean inolvidables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <aside class="summary" aria-label="Resumen de pago final">
          <h2>Resumen del pedido</h2>
          <div><span>Subtotal productos</span><strong class="price-value">$${subtotal.toFixed(2)}</strong></div>
          <div><span>${state.fulfillmentMethod === 'delivery' ? 'Costo de envío en auto' : 'Retiro en taller'}</span><strong class="price-value">${state.fulfillmentMethod === 'delivery' ? '$5.00' : '$0.00 (Gratis)'}</strong></div>
          <div><span>Forma de pago</span><strong class="price-value">${state.paymentMethod === 'card' ? '💳 Tarjeta' : (state.paymentMethod === 'transfer' ? '🏦 Transferencia' : '💵 Contraentrega')}</strong></div>
          <div><span>Documento de compra</span><strong class="price-value">Comprobante de Venta</strong></div>
          <div><span>Estado según pago</span><strong class="price-value" style="color: ${state.paymentMethod === 'cash' ? '#92400E' : 'var(--green)'};">${state.paymentMethod === 'cash' ? 'FALTA CANCELAR' : 'CANCELADO'}</strong></div>
          <div><span>Fecha entrega</span><strong class="price-value">${escapeHtml(deliveryDate)}</strong></div>
          <hr />
          <div class="total"><span>Total del pago</span><strong class="price-value">$${total.toFixed(2)}</strong></div>

          <div class="summary-info-card" role="note">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p><strong>Comprobante de Venta:</strong> Cada pago genera su propio comprobante de venta (no factura). Si pagas con tarjeta saldrá como <strong>CANCELADO</strong>; si es contraentrega saldrá como <strong>FALTA CANCELAR</strong>.</p>
          </div>

          <ul class="summary-promises-list" aria-label="Compromisos de entrega Ramoza">
            <li>${getIcon('check', 16)} <span>Flores frescas cortadas hoy</span></li>
            <li>${getIcon('check', 16)} <span>Foto antes de salir de taller</span></li>
            <li>${getIcon('check', 16)} <span>Transporte protegido en auto</span></li>
            <li>${getIcon('check', 16)} <span>Garantía total de reposición</span></li>
          </ul>

          <button class="primary wide" type="submit" aria-label="Confirmar pedido y emitir comprobante de venta" style="margin-top: 14px;">Confirmar y generar comprobante ${getIcon('arrow')}</button>
        </aside>
      </form>

      ${state.showConfirmation ? `
        <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title" aria-describedby="confirm-modal-desc" style="position: fixed; inset: 0; background: rgba(30, 43, 55, 0.7); display: grid; place-items: center; z-index: 100; backdrop-filter: blur(2px);">
          <div class="modal-card" style="background: #FFFFFF; padding: 35px 30px; border-radius: 12px; width: min(480px, 92%); text-align: center; box-shadow: 0 25px 50px rgba(30,43,55,0.35);">
            <div style="margin-bottom: 25px;">
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px auto; display: block;">
                <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h2 id="confirm-modal-title" style="color: var(--slate); font: 700 24px Georgia, serif; margin: 0 0 10px 0; line-height: 1.2;">¿Confirmar pago y emitir Comprobante de Venta?</h2>
              <p id="confirm-modal-desc" style="color: var(--slate-muted); font-size: 15px; margin: 0; line-height: 1.5;">
                Monto del pago: <strong>$${total.toFixed(2)}</strong> mediante <strong>${state.paymentMethod === 'card' ? 'Tarjeta de crédito / débito' : (state.paymentMethod === 'transfer' ? 'Transferencia bancaria Banco Pichincha' : 'Pago contraentrega en efectivo')}</strong>.
              </p>
              <div style="margin-top: 12px; font-size: 13.5px; padding: 10px 12px; border-radius: 8px; background: ${state.paymentMethod === 'cash' ? '#FEF3C7' : '#E8F5ED'}; color: ${state.paymentMethod === 'cash' ? '#92400E' : '#14532D'}; border: 1px solid ${state.paymentMethod === 'cash' ? '#D97706' : '#1B6A38'};">
                Estado del Comprobante de Venta a emitir: <strong>${state.paymentMethod === 'cash' ? 'FALTA CANCELAR' : 'CANCELADO'}</strong>
              </div>
              <div style="margin-top: 10px; font-size: 13.5px; color: var(--slate); background: var(--green-light); padding: 8px 12px; border-radius: 6px;">
                Entrega: <strong>${escapeHtml(deliveryDate)}</strong> (${escapeHtml(deliveryTimeSlot)})
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <button type="button" class="secondary" style="border-color: var(--coral); color: var(--coral);" onclick="state.showConfirmation=false; renderApp();">No, revisar</button>
              <button type="button" class="primary" onclick="submitOrder()">Sí, emitir comprobante</button>
            </div>
          </div>
        </div>
      ` : ''}
    </section>
  `;
}

function handleCheckoutSubmit(form) {
  saveCheckoutForm();
  const docType = (state.checkoutForm && state.checkoutForm.docType) || 'cedula';
  const docInput = form.querySelector('#contact-id');

  // Validar seguridad contra inyección SQL en todos los campos del formulario
  for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    if (el.value && containsSqlInjection(el.value)) {
      logSecurityEvent('SQL_INJECTION_BLOCKED', `Intento bloqueado en Checkout (${el.name || el.id})`, { payloadPreview: el.value.slice(0, 50) });
      el.setCustomValidity('Por favor ingresa únicamente caracteres válidos.');
      el.reportValidity();
      return;
    }
  }

  if (docInput) {
    if (docType === 'pasaporte') {
      if (!validarPasaporteExtranjero(docInput.value)) {
        docInput.setCustomValidity('El pasaporte extranjero debe tener entre 6 y 15 caracteres alfanuméricos.');
        docInput.reportValidity();
        return;
      }
      docInput.setCustomValidity('');
    } else {
      if (!validarCedulaEcuatoriana(docInput.value)) {
        docInput.setCustomValidity('El número de cédula ingresado no es válido. Por favor verifica los 10 dígitos.');
        docInput.reportValidity();
        return;
      }
      docInput.setCustomValidity('');
    }
  }

  if (state.paymentMethod === 'card') {
    const ccNumInput = form.querySelector('#cc-num');
    const cleanNum = (ccNumInput?.value || '').replace(/\s/g, '');
    if (!cleanNum || cleanNum.length < 15) {
      ccNumInput?.setCustomValidity('Ingresa un número de tarjeta válido de al menos 15 dígitos.');
      ccNumInput?.reportValidity();
      return;
    }
  } else if (state.paymentMethod === 'transfer') {
    const refInput = form.querySelector('#transfer-ref');
    if (!refInput?.value.trim()) {
      refInput?.setCustomValidity('Ingresa el número de comprobante o referencia bancaria.');
      refInput?.reportValidity();
      return;
    }
  }

  state.showConfirmation = true;
  renderApp();
}

function validarDocumentoInput(input) {
  const docType = (state.checkoutForm && state.checkoutForm.docType) || 'cedula';
  if (docType === 'pasaporte') {
    if (input.value.length > 0 && (input.value.length < 6 || !validarPasaporteExtranjero(input.value))) {
      input.setCustomValidity('Pasaporte inválido. Ingresa entre 6 y 15 letras o números.');
    } else {
      input.setCustomValidity('');
    }
  } else {
    if (input.value.length === 10) {
      if (!validarCedulaEcuatoriana(input.value)) {
        input.setCustomValidity('Cédula inválida. Por favor verifica los 10 dígitos.');
      } else {
        input.setCustomValidity('');
      }
    } else {
      input.setCustomValidity('');
    }
  }
}
const validarCedulaInput = validarDocumentoInput;

function renderReceiptCard(receipt) {
  if (!receipt) return '';
  const isCancelado = receipt.paymentStatus === 'CANCELADO';
  const badgeClass = isCancelado ? 'cancelado' : 'falta-cancelar';
  const itemsRows = (receipt.itemsList || []).map(item => `
    <tr>
      <td><strong>${item.qty}x</strong></td>
      <td>${escapeHtml(item.name)}</td>
      <td>$${Number(item.unitPrice).toFixed(2)}</td>
      <td><strong>$${Number(item.lineSubtotal).toFixed(2)}</strong></td>
    </tr>
  `).join('');

  return `
    <div class="sales-receipt-card" role="region" aria-label="Comprobante de Venta ${receipt.receiptNumber}">
      <div class="receipt-top-bar">
        <div class="receipt-title-block">
          <p class="eyebrow" style="margin-bottom: 4px;">DOCUMENTO DE COMPRA ASOCIADO AL PAGO (NO FACTURA)</p>
          <h2>Comprobante de Venta N.° ${receipt.receiptNumber}</h2>
          <p>Vinculado al Pago N.° <strong>${receipt.paymentCode}</strong> · Orden N.° <strong>${receipt.orderCode}</strong></p>
        </div>
        <span class="receipt-status-badge ${badgeClass}" role="status" aria-label="Estado del comprobante: ${receipt.paymentStatus}">
          ${isCancelado ? '✓ CANCELADO' : '⏳ FALTA CANCELAR'}
        </span>
      </div>

      <div class="receipt-meta-grid">
        <div class="receipt-meta-item">
          <span>Comprador</span>
          <strong>${escapeHtml(receipt.buyerName || 'Cliente Ramoza')}</strong>
        </div>
        <div class="receipt-meta-item">
          <span>${receipt.buyerDocType === 'pasaporte' ? 'Pasaporte Extranjero' : 'Cédula Ecuatoriana'}</span>
          <strong>${escapeHtml(receipt.buyerCedula || '1712345678')}</strong>
        </div>
        <div class="receipt-meta-item">
          <span>Teléfono de Contacto</span>
          <strong>${escapeHtml(receipt.buyerPhone || '0991234567')}</strong>
        </div>
        <div class="receipt-meta-item">
          <span>Fecha de Emisión</span>
          <strong>${escapeHtml(receipt.issuedAt || 'Hoy')}</strong>
        </div>
        <div class="receipt-meta-item">
          <span>Modalidad de Entrega</span>
          <strong>${escapeHtml(receipt.fulfillmentLabel)}</strong>
        </div>
        <div class="receipt-meta-item">
          <span>Método de Pago Vinculado</span>
          <strong>${escapeHtml(receipt.paymentMethodLabel)}</strong>
        </div>
      </div>

      <table class="receipt-items-table" aria-label="Detalle de productos en el comprobante de venta">
        <thead>
          <tr>
            <th>Cant.</th>
            <th>Descripción del Producto</th>
            <th>P. Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows || `<tr><td>1x</td><td>${escapeHtml(receipt.itemsSummary || 'Arreglo floral Ramoza')}</td><td>$${Number(receipt.subtotal || receipt.total || 0).toFixed(2)}</td><td><strong>$${Number(receipt.subtotal || receipt.total || 0).toFixed(2)}</strong></td></tr>`}
        </tbody>
      </table>

      <div class="receipt-totals">
        <div class="receipt-total-row">
          <span>Subtotal de productos</span>
          <strong>$${Number(receipt.subtotal || 0).toFixed(2)}</strong>
        </div>
        <div class="receipt-total-row">
          <span>Costo de envío (${escapeHtml(receipt.fulfillmentLabel)})</span>
          <strong>$${Number(receipt.deliveryCost || 0).toFixed(2)}</strong>
        </div>
        <div class="receipt-total-row grand-total">
          <span>Total del Comprobante (Según Pago ${receipt.paymentCode})</span>
          <strong>$${Number(receipt.total || 0).toFixed(2)}</strong>
        </div>
      </div>

      <div class="receipt-payment-banner ${badgeClass}">
        <div>
          <strong>Estado del Pago (${receipt.paymentCode}): ${receipt.paymentStatus}</strong><br />
          <span>${escapeHtml(receipt.paymentDetail)}</span>
        </div>
        <button type="button" class="secondary no-print" onclick="window.print()" style="padding: 8px 14px; font-size: 13px;" aria-label="Imprimir o guardar en PDF el comprobante de venta">
          🖨️ Imprimir Comprobante
        </button>
      </div>
    </div>
  `;
}

function viewSuccess() {
  const receipt = state.lastReceipt || (state.orders && state.orders[0] && state.orders[0].receipt) || {
    receiptNumber: 'CV-2026-004812',
    paymentCode: 'PAG-2026-83921',
    orderCode: state.orderNumber || 'RMZ-582910',
    buyerName: state.userProfile.name || 'Cliente Ramoza',
    buyerCedula: state.userProfile.cedula || '1712345678',
    buyerPhone: state.userProfile.phone || '0991234567',
    issuedAt: new Date().toLocaleDateString('es-EC', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    fulfillmentLabel: state.fulfillmentMethod === 'delivery' ? 'Envío protegido a domicilio en auto' : 'Retiro en taller del proveedor',
    paymentMethodLabel: state.paymentMethod === 'card' ? 'Tarjeta de crédito / débito' : (state.paymentMethod === 'transfer' ? 'Transferencia bancaria Banco Pichincha' : 'Pago contraentrega en efectivo'),
    paymentStatus: state.paymentMethod === 'cash' ? 'FALTA CANCELAR' : 'CANCELADO',
    paymentDetail: state.paymentMethod === 'card'
      ? 'Simulación de pago con tarjeta aprobada exitosamente. El comprobante de venta queda en estado CANCELADO.'
      : (state.paymentMethod === 'transfer'
        ? 'Transferencia bancaria registrada. El comprobante de venta queda en estado CANCELADO.'
        : 'Pago contraentrega seleccionado. El comprobante de venta queda emitido con estado FALTA CANCELAR hasta el momento de recibir el pedido.'),
    subtotal: Math.max(0, (state.lastTotal || 39.90) - (state.fulfillmentMethod === 'delivery' ? 5 : 0)),
    deliveryCost: state.fulfillmentMethod === 'delivery' ? 5.00 : 0.00,
    total: state.lastTotal || 39.90,
    itemsList: []
  };

  return `
    <section class="page-shell success-page" aria-live="polite" style="max-width: 780px;">
      <div class="success-mark">${getIcon('check', 44)}</div>
      <p class="eyebrow" aria-hidden="true">¡COMPRA REGISTRADA Y COMPROBANTE EMITIDO!</p>
      <h1>Comprobante de Venta Generado</h1>
      <p style="color: var(--slate-muted); font-size: 16px; line-height: 1.6;">
        Se ha emitido el <strong>Comprobante de Venta</strong> correspondiente a tu pago (no se emite factura). Revisa a continuación el estado de tu pago y el detalle de tu compra:
      </p>

      ${renderReceiptCard(receipt)}

      <p style="color: var(--slate-muted); font-size: 14px; margin-bottom: 24px;">
        Te enviaremos actualizaciones a tu número de WhatsApp con la fotografía previa del arreglo antes de salir a ruta.
      </p>

      <div class="no-print" style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <a class="primary" href="catalogo.html" aria-label="Regresar al catálogo de flores">Volver al catálogo</a>
        <a class="secondary" href="cuenta.html" aria-label="Ver mis comprobantes de venta en mi cuenta">Ver Comprobantes en Mi Cuenta</a>
      </div>
    </section>
  `;
}

async function handleAuthSubmit(form, type) {
  const emailVal = (form.email?.value || '').trim();
  const pwd1Val = form.pwd1?.value || '';
  const pwd2Val = form.pwd2?.value || '';

  if (containsSqlInjection(emailVal) || containsSqlInjection(pwd1Val)) {
    logSecurityEvent('SQL_INJECTION_BLOCKED', `Intento bloqueado en formulario de ${type === 'signin' ? 'Inicio de Sesión' : 'Registro'}`, { payloadPreview: emailVal.slice(0, 40) });
    showToast('⚠️ Se ingresaron caracteres no permitidos.');
    return;
  }

  if (type === 'signup') {
    if (pwd1Val !== pwd2Val) {
      form.pwd2.setCustomValidity('Las contraseñas no coinciden');
      form.pwd2.reportValidity();
      return;
    }
    if (pwd1Val.length < 8) {
      form.pwd1.setCustomValidity('La contraseña debe tener al menos 8 caracteres');
      form.pwd1.reportValidity();
      return;
    }

    const regResult = await AccountService.register(emailVal.split('@')[0], emailVal, pwd1Val);
    if (!regResult.ok) {
      showToast(regResult.message || 'No se pudo crear la cuenta.');
      return;
    }
    state.userProfile.name = regResult.name;
    state.userProfile.email = regResult.email;
    state.signedIn = true;
    persistState();
    showToast('¡Cuenta creada exitosamente! Bienvenido/a a Ramoza.');
    navigate(Object.keys(state.cart).length ? 'checkout' : 'home');
    return;
  }

  // Inicio de sesión
  const loginResult = await AccountService.login(emailVal, pwd1Val);
  if (!loginResult.ok) {
    showToast(loginResult.message || 'Correo o contraseña incorrectos.');
    return;
  }

  state.userProfile.name = loginResult.name || emailVal.split('@')[0];
  state.userProfile.email = loginResult.email || emailVal;
  state.signedIn = true;
  persistState();
  showToast('¡Bienvenido/a de nuevo!');
  navigate(Object.keys(state.cart).length ? 'checkout' : 'home');
}

async function handlePasswordUpdate(form) {
  const currentPwdEl = document.getElementById('current-pwd');
  const newPwdEl = document.getElementById('new-pwd');
  const confirmPwdEl = document.getElementById('confirm-new-pwd');

  if (newPwdEl && confirmPwdEl && newPwdEl.value !== confirmPwdEl.value) {
    confirmPwdEl.setCustomValidity('Las contraseñas no coinciden');
    confirmPwdEl.reportValidity();
    return;
  }

  if (newPwdEl && newPwdEl.value.length < 8) {
    newPwdEl.setCustomValidity('La nueva contraseña debe tener al menos 8 caracteres');
    newPwdEl.reportValidity();
    return;
  }

  const changeRes = await AccountService.changePassword(
    state.userProfile.email,
    currentPwdEl ? currentPwdEl.value : '',
    newPwdEl ? newPwdEl.value : ''
  );

  if (!changeRes.ok) {
    showToast(changeRes.message || 'No se pudo actualizar la contraseña.');
    return;
  }

  if (currentPwdEl) currentPwdEl.value = '';
  if (newPwdEl) newPwdEl.value = '';
  if (confirmPwdEl) confirmPwdEl.value = '';
  persistState();
  renderApp();
  showToast('✔ Tu contraseña ha sido cambiada exitosamente.');
}

// ================= RECUPERACIÓN DE CONTRASEÑA ("OLVIDÉ MI CONTRASEÑA") =================
let resetFlowState = {
  step: 'email', // 'email' | 'code' | 'done'
  email: ''
};

async function handleRequestResetCode(form) {
  const emailInput = form.resetEmail;
  const emailVal = normalizeEmail(emailInput ? emailInput.value : '');
  if (!isValidEmail(emailVal)) {
    showToast('Por favor ingresa un correo electrónico válido.');
    return;
  }
  resetFlowState.email = emailVal;
  showToast('Enviando código de verificación a tu correo...');
  const res = await AccountService.requestReset(emailVal);
  if (!res.ok) {
    showToast(res.message || 'No se pudo enviar el código.');
    return;
  }
  resetFlowState.step = 'code';
  renderApp();
  showToast('✔ Te hemos enviado un código de 6 dígitos a tu correo.');
}

async function handleConfirmReset(form) {
  const codeVal = (form.resetCode ? form.resetCode.value : '').trim();
  const pwd1 = form.resetPwd1 ? form.resetPwd1.value : '';
  const pwd2 = form.resetPwd2 ? form.resetPwd2.value : '';

  if (pwd1 !== pwd2) {
    form.resetPwd2.setCustomValidity('Las contraseñas no coinciden');
    form.resetPwd2.reportValidity();
    return;
  }
  if (pwd1.length < 8) {
    form.resetPwd1.setCustomValidity('La contraseña debe tener al menos 8 caracteres');
    form.resetPwd1.reportValidity();
    return;
  }

  const res = await AccountService.confirmReset(resetFlowState.email, codeVal, pwd1);
  if (!res.ok) {
    showToast(res.message || 'El código no es válido o expiró.');
    return;
  }

  resetFlowState.step = 'done';
  renderApp();
  showToast('✔ Contraseña restablecida. Ahora puedes iniciar sesión.');
}

function viewForgotPassword() {
  if (resetFlowState.step === 'code') {
    return `
      <section class="auth-page">
        <div class="auth-card">
          <h1>Restablecer Contraseña</h1>
          <p style="color: var(--slate-muted); font-size: 14.5px; margin-bottom: 20px;">
            Ingresa el código de 6 dígitos enviado a <strong>${escapeHtml(resetFlowState.email)}</strong> y tu nueva contraseña:
          </p>
          <form onsubmit="event.preventDefault(); handleConfirmReset(this);" autocomplete="off">
            <label for="reset-code">
              Código de verificación (6 dígitos)
              <input type="text" id="reset-code" name="resetCode" required maxlength="6" pattern="[0-9]{6}" inputmode="numeric" placeholder="123456" style="letter-spacing: 4px; font-weight: 700; font-size: 18px; text-align: center;" />
            </label>

            <label for="reset-pwd1">
              Nueva contraseña
              <div class="password-wrapper">
                <input type="password" id="reset-pwd1" name="resetPwd1" required minlength="8" placeholder="Mínimo 8 caracteres" />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('reset-pwd1', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
            </label>

            <label for="reset-pwd2">
              Confirmar nueva contraseña
              <div class="password-wrapper">
                <input type="password" id="reset-pwd2" name="resetPwd2" required minlength="8" placeholder="Repite tu nueva contraseña" />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('reset-pwd2', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
            </label>

            <button class="primary wide" type="submit" style="margin-top: 14px;">Cambiar Contraseña</button>

            <div style="text-align: center; margin-top: 18px;">
              <button type="button" class="secondary" onclick="resetFlowState.step='email'; renderApp();" style="border:none; background:none; color:var(--slate-muted); cursor:pointer; text-decoration:underline; font-size:13.5px;">
                ¿No recibiste el código? Solicitar otro
              </button>
            </div>
          </form>
        </div>
      </section>
    `;
  }

  if (resetFlowState.step === 'done') {
    return `
      <section class="auth-page">
        <div class="auth-card" style="text-align: center;">
          <div style="color: var(--green); margin-bottom: 12px;">${getIcon('check', 46)}</div>
          <h1>¡Contraseña Actualizada!</h1>
          <p style="color: var(--slate-muted); font-size: 15px; margin-bottom: 24px;">
            Tu contraseña ha sido restablecida exitosamente. Ya puedes entrar con tu nueva clave.
          </p>
          <a class="primary wide" href="cuenta.html?auth=signin">Iniciar Sesión</a>
        </div>
      </section>
    `;
  }

  return `
    <section class="auth-page">
      <div class="auth-card">
        <h1>¿Olvidaste tu contraseña?</h1>
        <p style="color: var(--slate-muted); font-size: 14.5px; margin-bottom: 20px;">
          Ingresa el correo electrónico asociado a tu cuenta. Te enviaremos un código de verificación para que elijas una nueva contraseña.
        </p>
        <form onsubmit="event.preventDefault(); handleRequestResetCode(this);" autocomplete="off">
          <label for="reset-email">
            Correo electrónico
            <input type="email" id="reset-email" name="resetEmail" required maxlength="100" autocomplete="email" placeholder="usuario@correo.com" />
          </label>

          <button class="primary wide" type="submit" style="margin-top: 14px;">Enviar código de recuperación</button>

          <div style="text-align: center; margin-top: 20px; font-size: 14px;">
            <a href="cuenta.html?auth=signin" style="color: var(--green); font-weight: 700; text-decoration: underline;">Volver a iniciar sesión</a>
          </div>
        </form>
      </div>
    </section>
  `;
}

function viewAuth(type) {
  if (type === 'forgot') {
    return viewForgotPassword();
  }

  return `
    <section class="auth-page">
      <div class="auth-card">
        <h1>${type === 'signin' ? 'Inicia sesión en Ramoza' : 'Crea una cuenta en Ramoza'}</h1>
        <form onsubmit="event.preventDefault(); handleAuthSubmit(this, '${type}');" autocomplete="off">
          <label for="auth-email">
            Correo electrónico
            <input type="email" id="auth-email" name="email" required maxlength="100" autocomplete="email" value="${state.userProfile.email}" placeholder="usuario@correo.com" aria-required="true" aria-describedby="email-help" />
            <span id="email-help" class="field-help-text">Ingresa tu correo habitual.</span>
          </label>

          <label for="auth-pwd">
            Contraseña
            <div class="password-wrapper">
              <input type="password" id="auth-pwd" name="pwd1" required autocomplete="current-password" placeholder="Tu contraseña" aria-required="true" aria-describedby="pwd-help" oninput="checkPasswordMatch()" />
              <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('auth-pwd', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                ${getIcon('eye', 18)}
              </button>
            </div>
            <span id="pwd-help" class="field-help-text">Mínimo 8 caracteres.</span>
          </label>

          ${type === 'signin' ? `
            <div style="text-align: right; margin: -4px 0 14px 0;">
              <a href="cuenta.html?auth=forgot" style="color: var(--green); font-size: 13.5px; text-decoration: underline; font-weight: 600;">¿Olvidaste tu contraseña?</a>
            </div>
          ` : ''}

          ${type === 'signup' ? `
            <label for="auth-pwd2">
              Confirmar contraseña
              <div class="password-wrapper">
                <input type="password" id="auth-pwd2" name="pwd2" required autocomplete="new-password" placeholder="Repite tu contraseña" aria-required="true" aria-describedby="pwd2-help" oninput="checkPasswordMatch()" />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('auth-pwd2', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
              <span id="pwd2-help" class="field-help-text">Vuelve a ingresar la misma clave anterior.</span>
              <div id="pwd-match-msg" aria-live="polite" style="margin-top: 6px; font-size: 13px;"></div>
            </label>
          ` : ''}

          <button class="primary wide" type="submit" style="margin-top: 10px;" aria-label="${type === 'signin' ? 'Entrar a mi cuenta' : 'Registrar nueva cuenta'}">
            ${type === 'signin' ? 'Entrar' : 'Registrarse'}
          </button>
          
          <div style="text-align: center; margin-top: 20px; font-size: 14.5px;">
            ${type === 'signin' 
              ? `¿No tienes cuenta? <a href="cuenta.html?auth=signup" style="color:var(--green); font-weight:700; text-decoration:underline;">Crea una aquí</a>`
              : `¿Ya tienes cuenta? <a href="cuenta.html?auth=signin" style="color:var(--green); font-weight:700; text-decoration:underline;">Inicia sesión</a>`
            }
          </div>
        </form>
      </div>
    </section>
  `;
}

// ================= PERFIL DE USUARIO MODULAR =================

function viewAccount() {
  const tab = state.accountTab || 'orders';
  return `
    <section class="page-shell account-page">
      <a class="back-link" href="index.html" aria-label="Volver a la tienda para seguir comprando">${getIcon('back')} Volver a la tienda</a>
      <div class="page-title">
        <p class="eyebrow" aria-hidden="true">PANEL DE CONTROL</p>
        <h1>Mi Cuenta</h1>
        <p style="color: var(--slate-muted); margin-top: 6px;">Bienvenido, <strong>${state.userProfile.name}</strong>. Administra tus pedidos, direcciones guardadas y contraseña.</p>
      </div>

      <nav class="account-tabs-nav" aria-label="Módulos de cuenta">
        <button class="account-tab-btn ${tab === 'orders' ? 'active' : ''}" type="button" onclick="state.accountTab='orders'; renderApp();" aria-current="${tab === 'orders' ? 'page' : 'false'}">
          Mis Pedidos y Comprobantes
        </button>
        <button class="account-tab-btn ${tab === 'addresses' ? 'active' : ''}" type="button" onclick="state.accountTab='addresses'; renderApp();" aria-current="${tab === 'addresses' ? 'page' : 'false'}">
          Direcciones guardadas
        </button>
        <button class="account-tab-btn ${tab === 'payments' ? 'active' : ''}" type="button" onclick="state.accountTab='payments'; renderApp();" aria-current="${tab === 'payments' ? 'page' : 'false'}">
          Métodos de pago
        </button>
        <button class="account-tab-btn ${tab === 'security' ? 'active' : ''}" type="button" onclick="state.accountTab='security'; renderApp();" aria-current="${tab === 'security' ? 'page' : 'false'}">
          Cambiar Contraseña
        </button>
      </nav>

      ${tab === 'orders' ? `
        <div class="account-module-card" aria-labelledby="mod-orders-title">
          <h2 id="mod-orders-title" style="font: 700 20px Georgia, serif; margin: 0 0 6px; color: var(--slate);">Historial de Compras y Comprobantes de Venta</h2>
          <p style="font-size: 13.5px; color: var(--slate-muted); margin: 0 0 18px;">Cada compra emite un <strong>Comprobante de Venta</strong> asociado a su pago (no se emite factura). Estado <strong>CANCELADO</strong> en pagos con tarjeta y <strong>FALTA CANCELAR</strong> en pagos contraentrega.</p>
          
          ${(state.orders && state.orders.length > 0) ? state.orders.map((ord, idx) => {
            const rec = ord.receipt || {};
            const isPaid = (rec.paymentStatus || (ord.payment && ord.payment.includes('Contraentrega') ? 'FALTA CANCELAR' : 'CANCELADO')) === 'CANCELADO';
            const statusText = isPaid ? 'CANCELADO' : 'FALTA CANCELAR';
            const badgeCls = isPaid ? 'cancelado' : 'falta-cancelar';
            return `
              <div class="order-history-item" style="border-left: 4px solid ${isPaid ? 'var(--green)' : '#D97706'}; margin-bottom: 16px;">
                <div class="order-history-header" style="flex-wrap: wrap; gap: 10px;">
                  <div>
                    <strong style="color: var(--slate); font-size: 15.5px;">Comprobante: ${rec.receiptNumber || ('CV-2026-00' + (4810 + idx))} · Pago: ${rec.paymentCode || ('PAG-2026-' + (83900 + idx))}</strong>
                    <div style="font-size: 12.5px; color: var(--slate-muted); margin-top: 2px;">Pedido: <strong>${ord.code}</strong> · Fecha: ${ord.date} · ${ord.fulfillment}</div>
                  </div>
                  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                    <span class="receipt-status-badge ${badgeCls}" style="font-size: 11.5px; padding: 5px 12px;">
                      ${isPaid ? '✓ CANCELADO' : '⏳ FALTA CANCELAR'}
                    </span>
                    <span class="order-badge ${ord.badgeClass || 'pending'}">${ord.status}</span>
                  </div>
                </div>
                <p style="font-size: 14px; margin: 8px 0 4px; color: var(--slate);">Detalle: <strong>${escapeHtml(ord.items)}</strong> · Total del pago: <strong>$${Number(ord.total || 0).toFixed(2)}</strong> (${escapeHtml(ord.payment)})</p>
                <div style="font-size: 12.5px; color: var(--slate-muted); margin-bottom: 10px;">
                  ${isPaid ? 'Pago con tarjeta simulado y aprobado — Comprobante CANCELADO.' : 'Pago contraentrega en efectivo — Comprobante emitido con estado FALTA CANCELAR al recibir.'}
                </div>
                ${rec.receiptNumber ? `
                  <details style="margin-top: 8px;">
                    <summary style="cursor: pointer; color: var(--green); font-weight: 700; font-size: 13.5px;">Ver Comprobante de Venta completo (${rec.receiptNumber})</summary>
                    ${renderReceiptCard(rec)}
                  </details>
                ` : ''}
              </div>
            `;
          }).join('') : ''}

          <div class="order-history-item" style="border-left: 4px solid var(--green);">
            <div class="order-history-header" style="flex-wrap: wrap; gap: 10px;">
              <div>
                <strong>Comprobante: CV-2026-003914 · Pago: PAG-2026-71042</strong>
                <div style="font-size: 12.5px; color: var(--slate-muted); margin-top: 2px;">Pedido: <strong>RMZ-93717</strong> · Fecha: 15 de Octubre, 2026 · Envío protegido</div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="receipt-status-badge cancelado" style="font-size: 11.5px; padding: 5px 12px;">✓ CANCELADO</span>
                <span class="order-badge success">✓ Entregado con fotografía</span>
              </div>
            </div>
            <p style="font-size: 14px; margin: 6px 0; color: var(--slate);">Producto: <strong>Jardín de rosas (18 rosas rojas)</strong> · Total del pago: <strong>$39.90</strong> (Tarjeta de crédito •••• 4821)</p>
            <div style="font-size: 12.5px; color: var(--slate-muted);">Pago con tarjeta simulado — Comprobante de Venta CANCELADO. Entregado en Urb. San Antonio, Cumbayá.</div>
          </div>

          <div class="order-history-item" style="border-left: 4px solid #D97706;">
            <div class="order-history-header" style="flex-wrap: wrap; gap: 10px;">
              <div>
                <strong>Comprobante: CV-2026-003850 · Pago: PAG-2026-68219</strong>
                <div style="font-size: 12.5px; color: var(--slate-muted); margin-top: 2px;">Pedido: <strong>RMZ-84192</strong> · Fecha: 28 de Septiembre, 2026 · Envío a domicilio</div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="receipt-status-badge falta-cancelar" style="font-size: 11.5px; padding: 5px 12px;">⏳ FALTA CANCELAR</span>
                <span class="order-badge pending">En ruta de entrega</span>
              </div>
            </div>
            <p style="font-size: 14px; margin: 6px 0; color: var(--slate);">Producto: <strong>Canasta con cariño</strong> · Total del pago: <strong>$44.00</strong> (Pago contraentrega en efectivo)</p>
            <div style="font-size: 12.5px; color: var(--slate-muted);">Pago contraentrega — Comprobante de Venta emitido con estado FALTA CANCELAR al recibir el pedido.</div>
          </div>
        </div>
      ` : ''}

      ${tab === 'addresses' ? `
        <div class="account-module-card" aria-labelledby="mod-addr-title">
          <h2 id="mod-addr-title" style="font: 700 20px Georgia, serif; margin: 0 0 16px; color: var(--slate);">Libreta de direcciones frecuentes</h2>
          
          <div class="address-card-item default">
            <span style="font-size: 12px; font-weight: 800; color: var(--green); text-transform: uppercase;">Dirección principal predeterminada</span>
            <h3 style="margin: 6px 0 4px; font-size: 16px; color: var(--slate);">Casa - Cumbayá</h3>
            <p style="margin: 0; font-size: 14px; color: var(--slate);">Av. Interoceánica Km 12 y Calle Los Helechos, Urb. San Antonio, Casa 4B.</p>
            <p style="margin: 4px 0 0; font-size: 12.5px; color: var(--slate-muted);">Referencia: Portón negro frente a la farmacia Fybeca.</p>
          </div>

          <div class="address-card-item">
            <span style="font-size: 12px; font-weight: 800; color: var(--slate-muted); text-transform: uppercase;">Dirección secundaria</span>
            <h3 style="margin: 6px 0 4px; font-size: 16px; color: var(--slate);">Oficina - Quito Norte</h3>
            <p style="margin: 0; font-size: 14px; color: var(--slate);">Av. Amazonas N34-120 y República, Edificio Torre del Parque, Piso 5.</p>
            <p style="margin: 4px 0 0; font-size: 12.5px; color: var(--slate-muted);">Referencia: Recepción principal del edificio.</p>
          </div>

          <button class="secondary" type="button" onclick="showToast('Formulario para añadir nueva dirección')" style="margin-top: 10px;">
            + Agregar nueva dirección
          </button>
        </div>
      ` : ''}

      ${tab === 'payments' ? `
        <div class="account-module-card" aria-labelledby="mod-pay-title">
          <h2 id="mod-pay-title" style="font: 700 20px Georgia, serif; margin: 0 0 16px; color: var(--slate);">Métodos de pago guardados</h2>
          
          <div style="display: flex; gap: 14px; align-items: center; padding: 18px; border: 1.5px solid var(--green); border-radius: 8px; background: var(--green-light); margin-bottom: 14px;">
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            <div>
              <strong style="color: var(--slate); font-size: 15px;">Visa crédito terminada en •••• 4821</strong>
              <div style="font-size: 12.5px; color: var(--slate-muted);">Titular: ${state.userProfile.name.toUpperCase()} · Vence: 10/28 (Predeterminada)</div>
            </div>
          </div>

          <p style="font-size: 13.5px; color: var(--slate-muted); margin-bottom: 16px;">Método de pago guardado para tus próximas compras.</p>
          <button class="secondary" type="button" onclick="showToast('Módulo de registro de tarjeta bancaria')">+ Vincular otra tarjeta</button>
        </div>
      ` : ''}

      ${tab === 'security' ? `
        <div class="account-module-card" aria-labelledby="mod-sec-title">
          <h2 id="mod-sec-title" style="font: 700 20px Georgia, serif; margin: 0 0 8px; color: var(--slate);">Cambiar Contraseña</h2>
          <p style="color: var(--slate-muted); font-size: 14px; margin: 0 0 20px;">
            Para mantener segura tu cuenta, te recomendamos usar una clave de al menos 8 caracteres con letras y números.
          </p>
          
          <form onsubmit="event.preventDefault(); handlePasswordUpdate(this);" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
            <label for="current-pwd">
              Contraseña actual
              <div class="password-wrapper">
                <input type="password" id="current-pwd" placeholder="Ingresa tu clave actual" required />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('current-pwd', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
            </label>

            <label for="new-pwd">
              Nueva contraseña
              <div class="password-wrapper">
                <input type="password" id="new-pwd" placeholder="Mínimo 8 caracteres" required oninput="checkAccountSecurityPasswordMatch()" />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('new-pwd', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
            </label>

            <label for="confirm-new-pwd">
              Confirmar nueva contraseña
              <div class="password-wrapper">
                <input type="password" id="confirm-new-pwd" placeholder="Repite tu nueva clave" required oninput="checkAccountSecurityPasswordMatch()" />
                <button type="button" class="pwd-toggle-btn" onclick="togglePasswordVisibility('confirm-new-pwd', this)" aria-label="Ver contraseña" aria-pressed="false" title="Ver contraseña">
                  ${getIcon('eye', 18)}
                </button>
              </div>
              <div id="account-pwd-match-msg" aria-live="polite" style="margin-top: 6px; font-size: 13px;"></div>
            </label>

            <button class="primary" type="submit" style="align-self: flex-start; margin-top: 6px;">Guardar nueva contraseña</button>
          </form>
        </div>
      ` : ''}

      <div style="margin-top: 28px;">
        <button class="secondary" type="button" onclick="state.signedIn=false; showToast('Sesión cerrada'); navigate('home');" aria-label="Cerrar sesión de la cuenta actual">
          Cerrar sesión
        </button>
      </div>
    </section>
  `;
}

function viewPolicy() {
  return `
    <section class="page-shell policy-page">
      <a class="back-link" aria-label="Volver a la página de inicio" href="index.html">${getIcon('back')} Volver al inicio</a>
      <div class="page-title"><h1>Envíos y devoluciones</h1></div>
      <div class="policy-grid">
        <article><strong class="policy-step-num" aria-hidden="true">01</strong><h2>Antes de preparar</h2><p>Puedes solicitar la cancelación o el cambio mientras el proveedor todavía no haya preparado el pedido. Escríbenos con tu número de orden.</p></article>
        <article><strong class="policy-step-num" aria-hidden="true">02</strong><h2>Productos perecibles</h2><p>Las flores no admiten devolución por cambio de opinión una vez entregadas. Algunas variedades pueden sustituirse por otras equivalentes si falta stock; te avisaremos primero.</p></article>
        <article><strong class="policy-step-num" aria-hidden="true">03</strong><h2>Si algo llegó mal</h2><p>Reporta daños, un producto incorrecto o una entrega incompleta con una fotografía. Gestionaremos con el proveedor la reposición del producto o la devolución del dinero.</p></article>
        <article><strong class="policy-step-num" aria-hidden="true">04</strong><h2>Entrega en Quito y Valles</h2><p>Ramoza coordina el traslado en automóvil mediante Uber Flash o inDrive Entregas para proteger los arreglos. La tarifa depende de la ruta y se confirma por WhatsApp. También puedes retirar sin costo con el proveedor.</p></article>
      </div>
    </section>
  `;
}

function viewContact() {
  return `
    <section class="page-shell narrow" style="text-align: center; padding: 60px 20px;">
      <a class="back-link" href="index.html" aria-label="Volver a la página de inicio">${getIcon('back')} Volver al inicio</a>
      <div style="background: #FFFFFF; padding: 50px 30px; border-radius: 16px; margin-top: 20px; border: 1px solid rgb(44 62 80 / 14%); box-shadow: 0 10px 30px rgba(30,43,55,0.06);">
        <div style="color: var(--green); margin-bottom: 20px;">
          <svg aria-hidden="true" focusable="false" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto; display: block;">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <h1 style="color: var(--slate); font-family: Georgia, serif; margin: 0 0 15px; font-size: 28px;">Contáctanos por WhatsApp</h1>
        <p style="color: var(--slate-muted); font-size: 16px; margin-bottom: 24px; line-height: 1.5; max-width: 480px; margin-left: auto; margin-right: auto;">
          ¿Tienes alguna duda sobre tu pedido floral, horarios de despacho o necesitas asesoría personalizada? Escríbenos directamente a nuestro WhatsApp oficial:
        </p>
        <div style="font-size: 28px; font-weight: 800; color: var(--green); margin-bottom: 35px; letter-spacing: 1px;" aria-label="Número de WhatsApp +593 93 905 0668">
          +593 93 905 0668
        </div>
        <a href="https://wa.me/593939050668" target="_blank" rel="noopener noreferrer" class="primary" style="display: inline-flex; width: min(340px, 100%);" aria-label="Abrir chat de WhatsApp en una nueva pestaña">
          Abrir chat de WhatsApp
        </a>
      </div>
    </section>
  `;
}

// ================= CONTROLADOR Y ENRUTADOR HASH =================

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!hash || hash === 'home') {
    return { screen: 'home', category: 'Todos' };
  }
  if (hash.startsWith('producto-')) {
    const id = parseInt(hash.replace('producto-', ''), 10);
    return { screen: 'detail', productId: id };
  }
  if (hash.startsWith('categoria-')) {
    const slug = hash.replace('categoria-', '');
    const map = {
      'arreglos-florales': 'Arreglos florales',
      'regalos': 'Regalos',
      'funerarios': 'Funerarios',
      'todos': 'Todos'
    };
    return { screen: 'category', category: map[slug] || 'Todos' };
  }
  if (hash === 'search') {
    return { screen: 'search' };
  }
  if (['cart', 'checkout', 'success', 'signin', 'signup', 'policy', 'contact', 'account'].includes(hash)) {
    return { screen: hash };
  }
  return { screen: 'home' };
}

function handleRoute() {
  const route = getRouteFromHash();
  state.screen = route.screen;
  if (route.category) state.category = route.category;
  if (route.productId) state.selectedProductId = route.productId;
  renderApp();

  const main = document.getElementById('main');
  if (main) {
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    main.focus();
  }
}

// ================= PERSISTENCIA LOCALSTORAGE Y ARQUITECTURA MULTIPÁGINA =================

function loadPersistedState() {
  try {
    const savedCustomProducts = localStorage.getItem('ramoza_custom_products');
    if (savedCustomProducts) {
      const parsedProducts = JSON.parse(savedCustomProducts);
      if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
        // Actualizar descripciones detalladas y garantizar que cada producto tenga stock numérico (por defecto 30)
        const upgraded = parsedProducts.map(item => {
          const def = CATALOG_DEFAULTS.find(d => d.id === item.id);
          return {
            ...item,
            stock: typeof item.stock === 'number' ? item.stock : (def ? def.stock : 30),
            images: Array.isArray(item.images) && item.images.length > 0
              ? item.images.map(getThumbnailUrl)
              : (def ? def.images : []),
            description: (!item.description || item.description.length < 115) && def
              ? def.description
              : item.description
          };
        });
        products.length = 0;
        products.push(...upgraded);
        localStorage.setItem('ramoza_custom_products', JSON.stringify(products));
      }
    }
    const savedCart = localStorage.getItem('ramoza_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
    const savedNotes = localStorage.getItem('ramoza_notes');
    if (savedNotes) state.funeralNotes = JSON.parse(savedNotes);
    const savedUser = localStorage.getItem('ramoza_user');
    if (savedUser) state.userProfile = { ...state.userProfile, ...JSON.parse(savedUser) };
    const savedForm = localStorage.getItem('ramoza_checkout');
    if (savedForm) state.checkoutForm = { ...state.checkoutForm, ...JSON.parse(savedForm) };
    const savedOrders = localStorage.getItem('ramoza_orders');
    if (savedOrders) state.orders = JSON.parse(savedOrders);
    const savedReceipt = localStorage.getItem('ramoza_last_receipt');
    if (savedReceipt) state.lastReceipt = JSON.parse(savedReceipt);
    const savedAuth = localStorage.getItem('ramoza_auth');
    if (savedAuth !== null) state.signedIn = JSON.parse(savedAuth);
    const savedFulfill = localStorage.getItem('ramoza_fulfillment');
    if (savedFulfill) state.fulfillmentMethod = savedFulfill;
    const savedPay = localStorage.getItem('ramoza_payment');
    if (savedPay) state.paymentMethod = savedPay;
  } catch (e) {
    console.warn('Error leyendo localStorage', e);
  }
}

function persistState() {
  try {
    localStorage.setItem('ramoza_cart', JSON.stringify(state.cart));
    localStorage.setItem('ramoza_notes', JSON.stringify(state.funeralNotes));
    localStorage.setItem('ramoza_user', JSON.stringify(state.userProfile));
    localStorage.setItem('ramoza_checkout', JSON.stringify(state.checkoutForm));
    localStorage.setItem('ramoza_orders', JSON.stringify(state.orders));
    if (state.lastReceipt) {
      localStorage.setItem('ramoza_last_receipt', JSON.stringify(state.lastReceipt));
    }
    localStorage.setItem('ramoza_auth', JSON.stringify(state.signedIn));
    localStorage.setItem('ramoza_fulfillment', state.fulfillmentMethod);
    localStorage.setItem('ramoza_payment', state.paymentMethod);
  } catch (e) {
    console.warn('Error escribiendo en localStorage', e);
  }
}

function navigate(screen) {
  persistState();
  const pageMap = {
    'home': 'index.html',
    'catalog': 'catalogo.html',
    'category': 'catalogo.html',
    'search': 'catalogo.html',
    'cart': 'carrito.html',
    'checkout': 'checkout.html',
    'success': 'exito.html',
    'account': 'cuenta.html',
    'signin': 'cuenta.html?auth=signin',
    'signup': 'cuenta.html?auth=signup',
    'policy': 'politicas.html',
    'contact': 'contacto.html'
  };
  const target = pageMap[screen] || 'index.html';
  const currentPath = window.location.pathname.toLowerCase();
  if (currentPath.endsWith(target.split('?')[0])) {
    renderApp();
  } else {
    window.location.href = target;
  }
}

function openProduct(id) {
  state.selectedProductId = id;
  persistState();
  window.location.href = 'producto.html?id=' + id;
}

function setCategory(cat) {
  state.category = cat;
  persistState();
  window.location.href = 'catalogo.html?cat=' + encodeURIComponent(cat);
}

function updateCart(id, delta) {
  const p = getProduct(id);
  if (!p) return;

  const maxStock = typeof p.stock === 'number' ? p.stock : 30;
  const current = state.cart[id] || 0;
  const next = Math.max(0, current + delta);

  // Si el producto está agotado (stock === 0) y se intenta añadir
  if (delta > 0 && maxStock <= 0) {
    const friendlyMsg = translateDbConstraintError(
      { constraint: 'chk_producto_stock_no_negativo', message: 'Stock insuficiente en inventario (0 disponibles)' },
      { constraint: 'chk_producto_stock_no_negativo', productName: p.name, stock: 0 }
    );
    state.stockConstraintAlert = { productId: id, message: friendlyMsg };
    showToast(friendlyMsg);
    announceToScreenReader(friendlyMsg);
    renderApp();
    return;
  }

  // Si el usuario intenta añadir más unidades que el stock disponible del producto
  if (delta > 0 && next > maxStock) {
    state.cart[id] = maxStock;
    const friendlyMsg = translateDbConstraintError(
      { constraint: 'chk_carrito_limite_stock', message: `Violates check constraint chk_carrito_limite_stock (max ${maxStock})` },
      { constraint: 'chk_carrito_limite_stock', productName: p.name, stock: maxStock }
    );
    state.stockConstraintAlert = { productId: id, message: friendlyMsg };
    persistState();
    showToast(friendlyMsg);
    announceToScreenReader(friendlyMsg);
    renderApp();
    return;
  }

  // Limpiar alerta previa si la operación está dentro del stock permitido
  if (state.stockConstraintAlert && state.stockConstraintAlert.productId === id) {
    state.stockConstraintAlert = null;
  }

  if (next === 0) {
    delete state.cart[id];
    showToast(`🗑️ "${p.name}" ha sido eliminado del carrito.`);
    announceToScreenReader(`Se eliminó ${p.name} del carrito.`);
  } else {
    state.cart[id] = next;
    if (delta > 0) {
      if (current === 0) {
        showToast(`✔ ¡"${p.name}" añadido al carrito!`);
        announceToScreenReader(`Se añadió una unidad de ${p.name} al carrito.`);
      } else {
        showToast(`➕ Se aumentó a ${next} unidades de "${p.name}".`);
        announceToScreenReader(`Se aumentó la cantidad de ${p.name} a ${next}.`);
      }
    } else if (delta < 0) {
      showToast(`➖ Se redujo a ${next} unidades de "${p.name}".`);
      announceToScreenReader(`Se redujo la cantidad de ${p.name} a ${next}.`);
    }
  }

  persistState();
  animateCartBadge();
  renderApp();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.innerText = msg;
    toast.style.display = 'flex';
    toast.removeAttribute('aria-hidden');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      toast.style.display = 'none';
      toast.setAttribute('aria-hidden', 'true');
    }, 4000);
  }
}

async function submitOrder() {
  state.showConfirmation = false;

  // 1. Verificar constraint de stock disponible antes de procesar el pago
  for (const idStr of Object.keys(state.cart)) {
    const prod = getProduct(Number(idStr));
    const requestedQty = state.cart[idStr] || 0;
    if (prod) {
      const available = typeof prod.stock === 'number' ? prod.stock : 30;
      if (requestedQty > available) {
        const msg = translateDbConstraintError(
          { constraint: 'chk_producto_stock_no_negativo' },
          { constraint: 'chk_producto_stock_no_negativo', productName: prod.name, stock: available }
        );
        showToast(msg);
        announceToScreenReader(msg);
        renderApp();
        return;
      }
    }
  }

  const newOrderNumber = 'RMZ-' + Math.floor(100000 + Math.random() * 900000);
  const paymentCode = 'PAG-2026-' + Math.floor(10000 + Math.random() * 90000);
  const receiptNumber = 'CV-2026-00' + Math.floor(1000 + Math.random() * 9000);
  state.orderNumber = newOrderNumber;

  let subtotal = 0;
  const itemsList = Object.keys(state.cart).map(id => {
    const prod = getProduct(Number(id));
    const qty = state.cart[id] || 1;
    if (!prod) return null;
    const lineSubtotal = prod.price * qty;
    subtotal += lineSubtotal;
    return {
      id: prod.id,
      name: prod.name,
      qty: qty,
      unitPrice: prod.price,
      lineSubtotal: lineSubtotal
    };
  }).filter(Boolean);

  const deliveryCost = state.fulfillmentMethod === 'pickup' ? 0.00 : 5.00;
  const total = subtotal + deliveryCost;
  state.lastTotal = total;

  const itemsSummary = itemsList.map(i => `${i.qty}x ${i.name}`).join(', ');
  const form = state.checkoutForm || {};
  const buyerName = sanitizeSafeInput(form.contactName || state.userProfile.name || 'Cliente Ramoza', 'Nombre');
  const buyerDocType = form.docType || state.userProfile.docType || 'cedula';
  const buyerCedula = sanitizeSafeInput(form.contactId || state.userProfile.cedula || '1712345678', 'Documento');
  const buyerPhone = sanitizeSafeInput(form.contactPhone || state.userProfile.phone || '0991234567', 'Teléfono');
  const rawCard = (form.ccNum || '').replace(/\s/g, '');
  const rawCvv = (form.ccCvv || '').trim();
  const last4 = rawCard.length >= 4 ? rawCard.slice(-4) : '4242';
  const transferRef = sanitizeSafeInput(form.transferRef || '94827104', 'Referencia');

  // Seguridad SHA-256 + Sal para el número de tarjeta de crédito y CVV
  let cardSalt = null;
  let cardHashSha256 = null;
  let cvvHashSha256 = null;
  if (state.paymentMethod === 'card') {
    const cardCrypto = hashWithSalt(rawCard || '4000123456784242');
    const cvvCrypto = hashWithSalt(rawCvv || '123', cardCrypto.salt);
    cardSalt = cardCrypto.salt;
    cardHashSha256 = cardCrypto.hash;
    cvvHashSha256 = cvvCrypto.hash;

    logSecurityEvent(
      'CARD_HASHED_SHA256',
      `Tarjeta terminada en •••• ${last4} protegida con Sal + SHA-256 en Pago ${paymentCode}`,
      { salt: cardSalt, hashSha256: cardHashSha256, cardLast4: last4 }
    );
  }

  // Estado del Comprobante de Venta determinado por el Pago
  const isCash = state.paymentMethod === 'cash';
  const paymentStatus = isCash ? 'FALTA CANCELAR' : 'CANCELADO';
  const paymentMethodLabel = state.paymentMethod === 'card'
    ? `Tarjeta de crédito / débito (•••• ${last4})`
    : (state.paymentMethod === 'transfer' ? `Transferencia Banco Pichincha (Ref: ${transferRef})` : 'Pago contraentrega en efectivo');

  const paymentDetail = state.paymentMethod === 'card'
    ? `Cobro con tarjeta •••• ${last4} procesado exitosamente. El Comprobante de Venta se emite con estado CANCELADO.`
    : (state.paymentMethod === 'transfer'
      ? `Transferencia bancaria registrada con referencia ${transferRef}. El Comprobante de Venta se emite con estado CANCELADO.`
      : `Pago contraentrega seleccionado. El Comprobante de Venta se emite con estado FALTA CANCELAR hasta la recepción del pedido.`);

  const receipt = {
    receiptNumber: receiptNumber,
    paymentCode: paymentCode,
    orderCode: newOrderNumber,
    buyerName: buyerName,
    buyerEmail: form.contactEmail || state.userProfile.email || '',
    buyerDocType: buyerDocType,
    buyerCedula: buyerCedula,
    buyerPhone: buyerPhone,
    deliveryDateLabel: formatIsoDateLong(form.deliveryDate),
    deliverySlot: form.deliveryTimeSlot,
    issuedAt: formatQuitoDateTime(),
    fulfillmentLabel: state.fulfillmentMethod === 'delivery' ? 'Envío protegido a domicilio en auto' : 'Retiro en taller del proveedor',
    paymentMethod: state.paymentMethod,
    paymentMethodLabel: paymentMethodLabel,
    paymentStatus: paymentStatus,
    paymentDetail: paymentDetail,
    cardLast4: state.paymentMethod === 'card' ? last4 : null,
    cardSalt: cardSalt,
    cardHashSha256: cardHashSha256,
    cvvHashSha256: cvvHashSha256,
    subtotal: subtotal,
    deliveryCost: deliveryCost,
    total: total,
    itemsList: itemsList,
    itemsSummary: itemsSummary
  };

  state.lastReceipt = receipt;

  // Enviar el comprobante de venta al correo real del cliente (si EmailJS está configurado)
  if (receipt.buyerEmail) {
    EmailService.sendReceipt(receipt, receipt.buyerEmail).then(res => {
      if (res && res.ok) {
        console.log('Comprobante enviado por correo a:', receipt.buyerEmail);
      }
    }).catch(err => {
      console.warn('Envío de comprobante por correo en segundo plano:', err);
    });
  }

  const newOrder = {
    code: newOrderNumber,
    date: new Date().toLocaleDateString('es-EC', { day: '2-digit', month: 'short', year: 'numeric' }),
    items: itemsSummary,
    total: total,
    status: 'En preparación con el florista',
    badgeClass: 'pending',
    fulfillment: state.fulfillmentMethod === 'delivery' ? 'Envío a domicilio en auto' : 'Retiro en taller',
    payment: paymentMethodLabel,
    receipt: receipt
  };

  if (!state.orders) state.orders = [];
  state.orders.unshift(newOrder);

  // Descontar automáticamente el stock de cada producto comprado y persistir en el catálogo
  itemsList.forEach(item => {
    const p = getProduct(item.id);
    if (p) {
      const currentStock = typeof p.stock === 'number' ? p.stock : 30;
      p.stock = Math.max(0, currentStock - item.qty);
    }
  });
  localStorage.setItem('ramoza_custom_products', JSON.stringify(products));

  // Sincronizar con PostgreSQL en Supabase si las credenciales están activas
  if (RamozaSupabase.isConnected()) {
    const syncRes = await RamozaSupabase.syncOrderAndDeductStock(newOrder, itemsList, receipt);
    if (!syncRes.ok && syncRes.error) {
      showToast(syncRes.error);
      announceToScreenReader(syncRes.error);
      return;
    }
  }

  state.cart = {};
  state.checkoutForm = {};
  persistState();
  window.location.href = 'exito.html?order=' + newOrderNumber;
}

function renderApp() {
  persistState();

  // 1. Sincronizar badge de carrito
  const totalItems = Object.values(state.cart).reduce((a, b) => a + b, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.innerText = totalItems;
    badge.style.display = totalItems > 0 ? 'grid' : 'none';
  }

  // 2. Sincronizar estado de usuario
  const authStatus = document.getElementById('auth-status');
  const authLabel = document.getElementById('auth-label');
  const navAccount = document.getElementById('nav-account');
  if (authStatus && authLabel) {
    authStatus.innerText = state.signedIn ? 'Sesión activa' : 'Hola, invitado';
    authLabel.innerText = state.signedIn ? 'Mi cuenta' : 'Ingresar';
  }
  if (navAccount) {
    navAccount.setAttribute('href', state.signedIn ? 'cuenta.html' : 'cuenta.html?auth=signin');
    navAccount.setAttribute('aria-label', state.signedIn ? 'Ver panel de mi cuenta' : 'Iniciar sesión o crear cuenta');
  }

  // 3. Sincronizar enlaces de navegación activos
  document.querySelectorAll('.nav-inner .nav-link').forEach(link => {
    const cat = link.getAttribute('data-cat');
    const nav = link.getAttribute('data-nav');
    const href = link.getAttribute('href') || '';
    const isActive = (state.screen === 'home' && href.includes('index.html')) ||
                     (state.screen === 'category' && cat === state.category) ||
                     (nav && state.screen === nav) ||
                     (state.screen === 'policy' && href.includes('politicas.html'));
    if (isActive) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // 4. Renderizar vista correspondiente en el contenedor principal
  const container = document.getElementById('view-container');
  if (!container) return;

  switch (state.screen) {
    case 'home': container.innerHTML = viewHome(); break;
    case 'search': 
    case 'category': container.innerHTML = viewSearchCategory(); break;
    case 'detail': container.innerHTML = viewDetail(); break;
    case 'cart': container.innerHTML = viewCart(); break;
    case 'checkout': container.innerHTML = viewCheckout(); break;
    case 'success': container.innerHTML = viewSuccess(); break;
    case 'signin': container.innerHTML = viewAuth(state.authSubView === 'forgot' ? 'forgot' : 'signin'); break;
    case 'signup': container.innerHTML = viewAuth('signup'); break;
    case 'policy': container.innerHTML = viewPolicy(); break;
    case 'contact': container.innerHTML = viewContact(); break;
    case 'account': container.innerHTML = viewAccount(); break;
    default: container.innerHTML = viewHome(); break;
  }
}

// ================= LÓGICA DEL CHATBOT ASISTENTE =================

function setupChatbot() {
  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const chatWindow = document.getElementById('chatbot-window');
  const inputForm = document.getElementById('chatbot-input-form');
  const userInput = document.getElementById('chatbot-user-input');
  const messagesBox = document.getElementById('chatbot-messages');

  if (!toggleBtn || !chatWindow) return;

  toggleBtn.addEventListener('click', () => {
    state.chatbotOpen = !state.chatbotOpen;
    chatWindow.style.display = state.chatbotOpen ? 'flex' : 'none';
    toggleBtn.setAttribute('aria-expanded', state.chatbotOpen ? 'true' : 'false');
    if (state.chatbotOpen && userInput) userInput.focus();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      state.chatbotOpen = false;
      chatWindow.style.display = 'none';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }

  const faqResponses = {
    cobertura: '¡Entregamos en todo Quito! Cubrimos el Norte, Centro, Sur, Valles de Cumbayá, Tumbaco y Los Chillos mediante transporte protegido en auto cerrado para cuidar tus flores.',
    costo: 'El envío en automóvil protegido en Quito y Valles tiene un valor estándar de $5.00. También tienes la opción de retirar con el proveedor aliado sin ningún costo adicional ($0.00).',
    pago: 'Aceptamos tarjetas de crédito y débito, transferencia bancaria Banco Pichincha / Deuna y pago contraentrega en efectivo al recibir el pedido.',
    comprobante: 'Por cada pago emitimos un Comprobante de Venta individual (no se emite factura). Si pagas con tarjeta o transferencia sale con estado CANCELADO; si eliges contraentrega sale con estado FALTA CANCELAR hasta la entrega.',
    horarios: 'Contamos con 3 franjas horarias programadas: Mañana (09:00 - 13:00), Tarde (14:00 - 18:00) y Especial Urgente (18:00 - 20:00). Los desayunos se entregan de 08:00 a 11:00.',
    documento: 'En el Checkout puedes elegir mediante el selector (combobox) entre Cédula ecuatoriana (10 dígitos validados por Módulo 10) o Pasaporte extranjero (6 a 15 caracteres alfanuméricos) si eres extranjero.',
    dedicatoria: '¡Sí! Todos nuestros arreglos incluyen tarjeta dedicatoria sin costo adicional, y los arreglos funerarios incluyen una cinta impresa personalizada de hasta 350 caracteres.',
    foto: 'Como parte de nuestras 4 promesas de compra, te enviamos por WhatsApp una fotografía real de tu arreglo floral recién preparado antes de que salga del taller hacia su destino.',
    cuidados: 'Para prolongar la frescura de tus flores: cambia el agua fresca cada 2 días, corta 1 cm de los tallos en diagonal y ubica el arreglo lejos de la luz solar directa o corrientes de aire.'
  };

  // Renderizar dinámicamente las 9 preguntas frecuentes en la bandeja del asistente
  const quickQuestionsBox = chatWindow.querySelector('.chatbot-quick-questions');
  if (quickQuestionsBox) {
    const faqList = [
      { key: 'cobertura', label: 'Cobertura en Quito' },
      { key: 'costo', label: 'Costo de envío' },
      { key: 'pago', label: 'Formas de pago' },
      { key: 'comprobante', label: 'Comprobante de venta' },
      { key: 'horarios', label: 'Horarios de entrega' },
      { key: 'documento', label: 'Cédula o Pasaporte' },
      { key: 'dedicatoria', label: 'Dedicatoria funeraria' },
      { key: 'foto', label: 'Foto por WhatsApp' },
      { key: 'cuidados', label: 'Cuidados de flores' }
    ];
    quickQuestionsBox.innerHTML = faqList
      .map(item => `<button type="button" class="faq-chip" data-faq="${item.key}">${item.label}</button>`)
      .join('');
  }

  chatWindow.querySelectorAll('.faq-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const faqKey = chip.getAttribute('data-faq');
      const questionText = chip.innerText;
      addChatMessage('user', escapeHtml(questionText));
      setTimeout(() => {
        addChatMessage('bot', faqResponses[faqKey] || 'Con gusto te asesoramos con cualquier duda.');
      }, 350);
    });
  });

  if (inputForm) {
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawText = userInput.value.trim();
      if (!rawText) return;

      if (containsSqlInjection(rawText)) {
        logSecurityEvent('SQL_INJECTION_BLOCKED', 'Intento bloqueado en el Asistente Virtual 24/7', { payloadPreview: rawText.slice(0, 50) });
        userInput.value = '';
        addChatMessage('bot', 'El mensaje contiene caracteres no permitidos. Por favor escribe tu consulta normalmente.');
        return;
      }

      const safeText = escapeHtml(rawText);
      addChatMessage('user', safeText);
      userInput.value = '';

      const lower = rawText.toLowerCase();
      setTimeout(() => {
        if (lower.includes('cobertura') || lower.includes('donde') || lower.includes('sector') || lower.includes('valles') || lower.includes('quito')) {
          addChatMessage('bot', faqResponses.cobertura);
        } else if (lower.includes('costo') || lower.includes('precio') || lower.includes('envio') || lower.includes('envío') || lower.includes('tarifa')) {
          addChatMessage('bot', faqResponses.costo);
        } else if (lower.includes('comprobante') || lower.includes('factura') || lower.includes('recibo') || lower.includes('cancelado')) {
          addChatMessage('bot', faqResponses.comprobante);
        } else if (lower.includes('pago') || lower.includes('tarjeta') || lower.includes('efectivo') || lower.includes('contraentrega') || lower.includes('transferencia')) {
          addChatMessage('bot', faqResponses.pago);
        } else if (lower.includes('horario') || lower.includes('hora') || lower.includes('cuando') || lower.includes('tiempo') || lower.includes('mañana') || lower.includes('tarde')) {
          addChatMessage('bot', faqResponses.horarios);
        } else if (lower.includes('cedula') || lower.includes('cédula') || lower.includes('pasaporte') || lower.includes('extranjero') || lower.includes('documento')) {
          addChatMessage('bot', faqResponses.documento);
        } else if (lower.includes('dedicatoria') || lower.includes('cinta') || lower.includes('funerari') || lower.includes('mensaje') || lower.includes('condolencia')) {
          addChatMessage('bot', faqResponses.dedicatoria);
        } else if (lower.includes('foto') || lower.includes('whatsapp') || lower.includes('imagen') || lower.includes('promesa')) {
          addChatMessage('bot', faqResponses.foto);
        } else if (lower.includes('cuidar') || lower.includes('cuidado') || lower.includes('agua') || lower.includes('duran') || lower.includes('frescura')) {
          addChatMessage('bot', faqResponses.cuidados);
        } else {
          addChatMessage('bot', 'Gracias por tu consulta 🌸 Puedes tocar cualquiera de las preguntas frecuentes de abajo o <a href="https://wa.me/593939050668" target="_blank" rel="noopener noreferrer" style="color:var(--green); font-weight:700; text-decoration:underline;">escribirnos directo a nuestro WhatsApp</a>.');
        }
      }, 450);
    });
  }

  function addChatMessage(sender, htmlText) {
    if (!messagesBox) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = `<p>${htmlText}</p>`;
    messagesBox.appendChild(msgDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
}

// ================= INICIALIZACIÓN MULTIPÁGINA =================

function initMultiPage() {
  loadPersistedState();

  const path = window.location.pathname.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const bodyPage = document.body ? document.body.getAttribute('data-page') : null;

  if (bodyPage === 'catalogo' || path.includes('catalogo.html')) {
    state.screen = 'category';
    if (searchParams.has('cat')) {
      state.category = searchParams.get('cat');
    }
    if (searchParams.has('q')) {
      state.screen = 'search';
      state.query = searchParams.get('q');
    }
  } else if (bodyPage === 'producto' || path.includes('producto.html')) {
    state.screen = 'detail';
    const prodId = Number(searchParams.get('id'));
    if (prodId && getProduct(prodId)) {
      state.selectedProductId = prodId;
    } else {
      state.selectedProductId = 1;
    }
  } else if (bodyPage === 'carrito' || path.includes('carrito.html')) {
    state.screen = 'cart';
  } else if (bodyPage === 'checkout' || path.includes('checkout.html')) {
    state.screen = 'checkout';
  } else if (bodyPage === 'exito' || path.includes('exito.html')) {
    state.screen = 'success';
    if (searchParams.has('order')) {
      state.orderNumber = searchParams.get('order');
    }
  } else if (bodyPage === 'cuenta' || path.includes('cuenta.html')) {
    if (searchParams.get('auth') === 'signin') {
      state.screen = 'signin';
    } else if (searchParams.get('auth') === 'signup') {
      state.screen = 'signup';
    } else if (searchParams.get('auth') === 'forgot') {
      state.screen = 'signin';
      resetFlowState.step = 'email';
      state.authSubView = 'forgot';
    } else {
      state.screen = 'account';
    }
  } else if (bodyPage === 'politicas' || path.includes('politicas.html')) {
    state.screen = 'policy';
  } else if (bodyPage === 'contacto' || path.includes('contacto.html')) {
    state.screen = 'contact';
  } else {
    state.screen = 'home';
  }

  // Redirección si se accede con hash antiguo (#cart -> carrito.html)
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'cart' && !path.includes('carrito.html')) {
      window.location.href = 'carrito.html';
      return;
    }
    if (hash === 'checkout' && !path.includes('checkout.html')) {
      window.location.href = 'checkout.html';
      return;
    }
    if (hash.startsWith('producto-') && !path.includes('producto.html')) {
      window.location.href = 'producto.html?id=' + hash.split('-')[1];
      return;
    }
    if (hash === 'account' && !path.includes('cuenta.html')) {
      window.location.href = 'cuenta.html';
      return;
    }
  }

  renderApp();
  setupChatbot();

  // Si Supabase está configurado, sincronizar catálogo y stock real desde PostgreSQL
  if (RamozaSupabase.isConnected()) {
    RamozaSupabase.fetchCatalog();
  }
}

// Navegación accesible por teclado (Tecla Escape cierra modales, chatbot y notificaciones)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.showConfirmation) {
      state.showConfirmation = false;
      renderApp();
      return;
    }
    if (state.chatbotOpen) {
      const chatWindow = document.getElementById('chatbot-window');
      const toggleBtn = document.getElementById('chatbot-toggle-btn');
      state.chatbotOpen = false;
      if (chatWindow) chatWindow.style.display = 'none';
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
      return;
    }
    const toast = document.getElementById('toast');
    if (toast && toast.style.display !== 'none') {
      toast.style.display = 'none';
      toast.setAttribute('aria-hidden', 'true');
    }
  }
});

// Configuración de eventos globales
const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('site-search');
    const rawQuery = input ? input.value.trim() : '';
    if (containsSqlInjection(rawQuery)) {
      logSecurityEvent('SQL_INJECTION_BLOCKED', 'Intento de inyección SQL bloqueado en barra de búsqueda', { payloadPreview: rawQuery.slice(0, 50) });
      if (input) input.value = '';
      showToast('🛡️ Alerta de Seguridad: Comando SQL bloqueado en el buscador.');
      return;
    }
    const query = sanitizeSafeInput(rawQuery, 'Buscador');
    persistState();
    window.location.href = 'catalogo.html?q=' + encodeURIComponent(query);
  });
}

const toastClose = document.getElementById('toast-close');
if (toastClose) {
  toastClose.addEventListener('click', () => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.style.display = 'none';
      toast.setAttribute('aria-hidden', 'true');
    }
  });
}

// Iniciar aplicación
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMultiPage);
} else {
  initMultiPage();
}
