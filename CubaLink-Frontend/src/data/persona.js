// Persona demo de CubaLink — UN SOLO PERFIL con múltiples roles activos.
const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPjjyFYrQnr1z3VjpCJKJ0an-PiiGCIfqS-YluHHhw5eMh-kR5t2xhlFz6mf0gTjMj_YVACKY8b6YTUANCnsJe9_nUqP3BWW7ngri5ydkRRnBkeoXU-1rSKWs3_hBDgR59BndhBPotQnGUSzgtGdom85A55i7ZVjlxIOAqfS1bITBm6gWq_7pdc9ZFkqPJtY88wstdUuzLav88gJOkksmOlNDZXWWK7NLhcf1u81x4YHrddVF6LFTU_A'

export const PERSONA = {
  nombre: 'Yosvani Pérez',
  ciudad: 'Moscú',
  tiempoEnRusia: '5 años en Rusia',
  profesion: 'Constructor y brigadier',
  bio:
    'Llegué de La Habana en 2021 y me he ido abriendo camino: primero en la construcción, después armando mi brigada. Hoy también ayudo a la gente con rentas, remesas y lo que haga falta pa\' resolver. Lo mío es el trabajo bien hecho y la palabra cumplida.',
  idiomas: ['Español (nativo)', 'Ruso (conversacional)', 'Inglés (básico)'],
  hablaRuso: 'Sí, conversacional — me defiendo en la obra y en los trámites.',
  documentacion: [
    'Pasaporte',
    'Registro de migración',
    'Patente de trabajo',
    'Residencia temporal (РВП)',
  ],
  ultimaConexion: 'Hace 5 minutos',
  miembroDesde: 'Marzo de 2021',
  avatar: AVATAR,
  ubicacion: 'Moscow, Russia',
}

// Verificaciones oficiales de CubaLink (insignias de confianza junto al nombre)
export const VERIFICATIONS = [
  { id: 'cubalink', label: 'Verificado por CubaLink', emoji: '🟢', color: 'bg-green-100 text-green-800 border-green-300' },
  { id: 'documento', label: 'Documento verificado', emoji: '🔵', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { id: 'ru', label: 'Número ruso confirmado', emoji: '🟡', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
  { id: 'premium', label: 'Premium', emoji: '🟣', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  { id: 'empresa', label: 'Empresa registrada', emoji: '🟠', color: 'bg-orange-100 text-orange-800 border-orange-300' },
]

// Badges que el usuario ha ganado
export const BADGES = [
  { id: 'paga', label: 'Siempre paga', icon: '🏅' },
  { id: 'recomendado', label: 'Muy recomendado', icon: '🏅' },
  { id: 'verificado', label: 'Verificado', icon: '🛡️' },
  { id: 'rapido', label: 'Responde rápido', icon: '⚡' },
  { id: 'trato', label: 'Excelente trato', icon: '🤝' },
  { id: 'seguro', label: 'Trabajo seguro', icon: '🔒' },
  { id: '100orec', label: 'Más de 100 recomendaciones', icon: '🏆' },
  { id: 'top', label: 'Top de la comunidad', icon: '👑' },
]