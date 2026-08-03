// Catálogo de roles/actividades de CubaLink — UN SOLO PERFIL, MÚLTIPLES ROLES.
// Cada rol es un módulo activable que añade pestañas al perfil y reputación propia.

export const ALL_ROLES = [
  {
    id: 'trabajador',
    label: 'Buscar trabajo',
    chip: '👷 Trabajador',
    icon: 'construction',
    desc: 'Ofrece tu chamba: construcción, limpieza, carga, mudanzas y más.',
  },
  {
    id: 'contratar',
    label: 'Contratar trabajadores',
    chip: '🦺 Brigadier',
    icon: 'groups_2',
    desc: 'Publica ofertas, arma brigadas y contrata gente de confianza.',
  },
  {
    id: 'rentas',
    label: 'Publicar rentas',
    chip: '🏠 Rentas',
    icon: 'home_work',
    desc: 'Publica cuartos, estudios y apartamentos en Moscú y otras ciudades.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    chip: '🛒 Marketplace',
    icon: 'storefront',
    desc: 'Compra y vende entre cubanos: teléfonos, ropa, vehículos y más.',
  },
  {
    id: 'remesas',
    label: 'Remesas',
    chip: '💸 Remesas',
    icon: 'currency_exchange',
    desc: 'Envía dinero y recargas a Cuba con tasas claras y gente verificada.',
  },
  {
    id: 'viajes',
    label: 'Viajes',
    chip: '✈️ Viajes',
    icon: 'flight_takeoff',
    desc: 'Paquetes y encargos entre Cuba y Rusia. Gente de confianza que viaja.',
  },
  {
    id: 'transporte',
    label: 'Transporte',
    chip: '🚗 Transporte',
    icon: 'local_taxi',
    desc: 'Traslados, mudanzas y flete por toda Rusia con precio claro.',
  },
  {
    id: 'envios',
    label: 'Envíos Cuba ⇄ Rusia',
    chip: '📦 Envíos',
    icon: 'inventory_2',
    desc: 'Paquetes, cajas y mandados entre Cuba y Rusia, con seguimiento.',
  },
  {
    id: 'negocio',
    label: 'Tengo un negocio',
    chip: '🏢 Negocio',
    icon: 'apartment',
    desc: 'Promociona tu negocio: servicios, productos y tu horario.',
  },
  {
    id: 'servicios',
    label: 'Servicios profesionales',
    chip: '🛠️ Servicios',
    icon: 'handyman',
    desc: 'Ofrece servicios profesionales: reparaciones, diseño, trámites.',
  },
  {
    id: 'comunidad',
    label: 'Comunidad',
    chip: '💬 Comunidad',
    icon: 'forum',
    desc: 'Comparte, pregunta y ayuda a la comunidad cubana en Rusia.',
  },
]

export const ROLE_MAP = Object.fromEntries(ALL_ROLES.map((r) => [r.id, r]))

// Reputación independiente por rol (NO existe una única reputación)
export const REPUTATION = {
  trabajador: { stars: 4.9, jobs: 98, reviews: 124, label: 'Trabajador' },
  contratar: { stars: 4.5, jobs: 129, reviews: 76, label: 'Brigadier' },
  rentas: { stars: 5.0, jobs: 23, reviews: 41, label: 'Arrendador' },
  marketplace: { stars: 4.9, jobs: 67, reviews: 58, label: 'Vendedor' },
  remesas: { stars: 4.8, jobs: 342, reviews: 210, label: 'Agente de Remesas' },
  viajes: { stars: 4.7, jobs: 54, reviews: 39, label: 'Viajero' },
  transporte: { stars: 4.6, jobs: 88, reviews: 61, label: 'Transportista' },
  envios: { stars: 4.8, jobs: 143, reviews: 95, label: 'Correo' },
  negocio: { stars: 4.9, jobs: 12, reviews: 33, label: 'Negocio' },
  servicios: { stars: 4.7, jobs: 76, reviews: 52, label: 'Proveedor' },
  comunidad: { stars: 5.0, jobs: 0, reviews: 18, label: 'Comunidad' },
}
