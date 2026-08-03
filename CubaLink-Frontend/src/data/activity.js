// Contenido por rol del perfil demo — cada actividad tiene su propio detalle y reviews.

// ==== Perfil Trabajador ====
export const WORKER_PROFILE = {
  profesion: 'Constructor / Albañil',
  experiencia: '6 años de experiencia en construcción y acabados.',
  especialidades: ['Albañilería', 'Enfoscado', 'Pladur', 'Pintura', 'Mampostería'],
  disponibilidad: 'Disponible todos los días (8am - 6pm)',
  buscandoTrabajo: true,
  habilidades: [
    'Electricista', 'Soldador', 'Pladur', 'Pintor', 'Construcción',
    'Limpieza', 'Carga', 'Mudanzas', 'Plomería', 'Carpintería',
  ],
  reputacion: { estrellas: 4.9, trabajos: 98, recomendaciones: 124 },
}

// === Perfil Brigadier ===
export const BRIGADIER_PROFILE = {
  empresa: 'Brigada Yosvani & Cía',
  contratados: 387,
  trabajosPublicados: 129,
  ultimaActividad: 'Hace 1 hora',
  dashboard: {
    trabajadores: 387,
    trabajos: 129,
    pagosConfirmados: 121,
    reportes: 2,
  },
  indicadores: ['Paga puntual', 'Muy recomendado', 'Responde rápido', 'Verificado'],
}

// === Perfil Remesas ===
export const REMESAS_PROFILE = {
  reputacion: 4.8,
  tiempoPromedio: '15-20 minutos',
  comision: '0% en recargas • 3% en efectivo',
  metodosPago: ['Transferencia SBP', 'Tarjeta Mir', 'Efectivo', 'СБП'],
  operaciones: 342,
}

// === Perfil Rentas ===
export const RENTALS_PROFILE = {
  apartamentos: 4,
  habitaciones: 6,
  estudios: 2,
  reservasSimuladas: 11,
}

// === Perfil Marketplace ===
export const MARKETPLACE_PROFILE = {
  publicados: 23,
  vendidos: 19,
  calificacion: 4.9,
  categorias: ['Electrónica', 'Ropa', 'Hogar', 'Herramientas'],
}

// === Perfil Negocio ===
export const BUSINESS_PROFILE = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYIARpHWuq2rYpw3JGxlomGldssVu_qxuYfuoGYtHwPzLNBsxd31OEePBpDqFAOXN6RV8gCMN4bYklqUWSJTEEpBoHvnuL8pp4B7Yxc1I5cnDU_gFctHU_BmCoKsGajcGNEHmC4PJkkH71rdjnwqf9JDMVXw4pEmhn5RcWIeFM3ZWvYpTn9pAGdqwU4un_HRGByDPLB9Qm789Y_P0xq2qNgJfC0LI5k2us_egDAcvP84H-fwluGnr3g',
  descripcion:
    'Renta de cuartos y apartamentos, además de servicio de mudanzas y envíos para la comunidad cubana en Moscú.',
  servicios: ['Rentas amuebladas', 'Mudanzas', 'Envíos Cuba ⇄ Rusia', 'Asesoría de trámites'],
  horario: 'Lun - Sáb de 9am a 8pm',
  contacto: '+7 999 123-45-67 • @yosvani.cuba',
}

// === Reviews por rol (cada módulo tiene SUS propias opiniones) ===
export const REVIEWS = {
  trabajador: [
    { autor: '~El angel', estrellas: 5, texto: 'Trabaja duro y nunca deja el mango. Lo recomiendo pa\' cualquier obra.' },
    { autor: '~Brigada Kuzminki', estrellas: 5, texto: 'Serio, puntual y hace el trabajo sin estar encima. Contratamos de nuevo seguro.' },
    { autor: '~Cliente directo', estrellas: 4, texto: 'Buen albañil, solo hay que coordinar bien los materiales.' },
  ],
  contratar: [
    { autor: '~Peón', estrellas: 5, texto: 'Paga al terminar el día sin excusas. Pocos así.' },
    { autor: '~Cargador', estrellas: 4, texto: 'Buen brigadier, responde rápido y organiza bien.' },
  ],
  rentas: [
    { autor: '~Locataria', estrellas: 5, texto: 'Cuarto limpio y justo como en las fotos. Súper recomendado.' },
  ],
  marketplace: [
    { autor: '~Comprador', estrellas: 5, texto: 'Vendió el teléfono tal cual lo describió. Excelente trato.' },
  ],
  remesas: [
    { autor: '~Familiar', estrellas: 5, texto: 'La familia recibió la plata al instante. De confianza.' },
  ],
  viajes: [
    { autor: '~Viajero', estrellas: 5, texto: 'Me trajo mi encargo de Cuba sin problema. Muy serio.' },
  ],
  transporte: [
    { autor: '~Mudanza', estrellas: 4, texto: 'Traslado rápido y precio claro antes de empezar.' },
  ],
  envios: [
    { autor: '~Remitente', estrellas: 5, texto: 'El paquete llegó bien cuidado y a tiempo.' },
  ],
  negocio: [
    { autor: '~Cliente', estrellas: 5, texto: 'Atención de 10 y precios justos. Vuelvo seguro.' },
  ],
  servicios: [
    { autor: '~Vecino', estrellas: 5, texto: 'Me arregló la cocina en un día. Profesional.' },
  ],
  comunidad: [
    { autor: '~Comunidad', estrellas: 5, texto: 'Siempre echando un cable cuando se necesita.' },
  ],
}