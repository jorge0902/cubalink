// Ranking de la Comunidad CubaLink - personas destacadas por actividad (demo)

const AV1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDudekq8Iy_61oh0s9s3NhSsuq2HosrLzhI2XzqSdGmwlWcazyzQ9YODt4Nsmev4PdhKqLRZBblqmdsQfFhJo2JEd_dJYmxNXu-dC3I0Jv3yrGE0CrnfDBolgB2wQ7aWuL8mFYgEbFPLAAgi-JBiBluN70nA4i0nOZxE9t4__oSJuU_U2UVg4fCYw1GRSoaIvPR3R9hzwXvpUaTINqM-wTY0L07drPvg_rNgAqsgNWPlqNHnvMBVQlQQA'

const AV2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDiZn8qPu4nN9xK8Y3y6Q1c2vw0t3ZX66qq0Vs8z_tp1fQ7SfYfWx0L2y9V0sY6b5IrC0THvuJm0vGhBh3vkmmX5y1h9y2z4v6b0u6vkY3q0r1q4y6b4j5c8N1g0K8mT5z1YxQ9t7b2Jm0fQ4r8z6v2p9N1d0C3o6y7a5s8g2M5nO1c4d2l8f0p5kA9x3q8s1v6i2n0t9w8y5h3r7e0u8d3f4v0k7b2kS1c0PJ0dOFz0h2iN8Dt5s5gK8N0wX6r'

const AV3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC48OZxttJw7c4vFPy5n8n4jmY1pz9vBg6Ky4rN7xXQ3zM0AB4sR2vB8u5u9vN1a0iE7gH3wL4oW6sJ0oV3rK8mH0dG4fC7lN1mB2vR5j0tK6wM1pY8dD3iN0sB9fV2tQ0kN9cE7xS0kW4tG1oH3cZ6rI9jN0yB4zX1kV3hL2qX6nF8tW1sD0kE2wG8bR4nC9jV0yM3rS6sN0vB7dH2kQ4kN1iR0cM2zO7wT4uN0xJ8eB3tV2yF2oT6cTn0sY1bJ8hD4zR7uW3kH0mX9nC0PY2lB'

const AV4 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHbnmN8z0w4c7NtU8u2mX1a6kZ0pF8sK9D0cH3nE6qV9eS0rB4vW7gR0oH2uY0xC6nT8sJ0oP4rV9cE5wZ0dS1uH3eY6kB0oU0xP7sW0aM0yL3cJ0hH7gD6wT2vU9nO8xE5cR4tR8zH1uP4kD0mS3hX9vP3wK0dJ7cG0aS8qB4nE1rF9d'

export const RANKING_TABS = [
  { id: 'trabajadores', label: 'Top Trabajadores' },
  { id: 'brigadieres', label: 'Top Brigadieres' },
  { id: 'remesas', label: 'Top Remesas' },
  { id: 'rentas', label: 'Top Rentas' },
  { id: 'marketplace', label: 'Top Marketplace' },
  { id: 'negocios', label: 'Top Negocios' },
  { id: 'viajes', label: 'Top Viajes' },
]

export const RANKINGS = {
  trabajadores: [
    { avatar: AV2, nombre: '~Vladimir', roles: ['👷 Trabajador'], reputacion: 4.9, recomendaciones: 536, badges: ['🏅 Excelente trato', '🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Onel', roles: ['👷 Trabajador'], reputacion: 4.8, recomendaciones: 200, badges: ['🏅 Excelente trato', '🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Katiuska', roles: ['👷 Trabajador', '📦 Envios'], reputacion: 4.3, recomendaciones: 444, badges: ['🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Carlos Mendoza', roles: ['👷 Trabajador'], reputacion: 4.4, recomendaciones: 129, badges: ['🏅 Trabajo seguro', '🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV2, nombre: '~Joel', roles: ['👷 Trabajador'], reputacion: 4.8, recomendaciones: 246, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV2, nombre: '~Ileana', roles: ['👷 Trabajador', '📦 Envios'], reputacion: 4.4, recomendaciones: 409, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Norge', roles: ['👷 Trabajador'], reputacion: 4.4, recomendaciones: 400, badges: ['🏅 Verificado', '🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Hansel', roles: ['👷 Trabajador'], reputacion: 4.3, recomendaciones: 209, badges: ['🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones'] },
  ],
  brigadieres: [
    { avatar: AV2, nombre: '~Ismael', roles: ['🦺 Brigadier'], reputacion: 4.2, recomendaciones: 102, badges: ['🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones', '🏅 Top de la comunidad'] },
    { avatar: AV3, nombre: '~Yuleisy', roles: ['🦺 Brigadier'], reputacion: 4.5, recomendaciones: 372, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Claudia', roles: ['🦺 Brigadier', '👷 Trabajador'], reputacion: 4.5, recomendaciones: 195, badges: ['🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones', '🏅 Verificado'] },
    { avatar: AV3, nombre: '~Haila', roles: ['🦺 Brigadier', '👷 Trabajador'], reputacion: 4.9, recomendaciones: 323, badges: ['🏅 Muy recomendado', '🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Dairon', roles: ['🦺 Brigadier'], reputacion: 4.4, recomendaciones: 447, badges: ['🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Raidel', roles: ['🦺 Brigadier'], reputacion: 4.8, recomendaciones: 209, badges: ['🏅 Excelente trato', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Lianet Perez', roles: ['🦺 Brigadier', '👷 Trabajador'], reputacion: 4.4, recomendaciones: 531, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Jennifer', roles: ['🦺 Brigadier'], reputacion: 4.4, recomendaciones: 418, badges: ['🏅 Trabajo seguro', '🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones'] },
  ],
  remesas: [
    { avatar: AV4, nombre: '~Geovani', roles: ['💸 Remesas', '🏢 Negocio'], reputacion: 4.2, recomendaciones: 519, badges: ['🏅 Muy recomendado', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Ernesto', roles: ['💸 Remesas'], reputacion: 4.9, recomendaciones: 379, badges: ['🏅 Excelente trato', '🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Ivan', roles: ['💸 Remesas', '🏢 Negocio'], reputacion: 4.4, recomendaciones: 325, badges: ['🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Lazaro', roles: ['💸 Remesas', '📦 Envios'], reputacion: 4.6, recomendaciones: 126, badges: ['🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones', '🏅 Top de la comunidad'] },
    { avatar: AV2, nombre: '~Sandra', roles: ['💸 Remesas'], reputacion: 4.9, recomendaciones: 444, badges: ['🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Sergio', roles: ['💸 Remesas'], reputacion: 5.0, recomendaciones: 403, badges: ['🏅 Muy recomendado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Livan', roles: ['💸 Remesas', '🏢 Negocio'], reputacion: 4.6, recomendaciones: 264, badges: ['🏅 Muy recomendado', '🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Ubaldo', roles: ['💸 Remesas', '🏢 Negocio'], reputacion: 4.4, recomendaciones: 529, badges: ['🏅 Verificado', '🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
  ],
  rentas: [
    { avatar: AV4, nombre: '~Yalitza', roles: ['🏠 Rentas'], reputacion: 4.6, recomendaciones: 289, badges: ['🏅 Verificado', '🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Leandro', roles: ['🏠 Rentas'], reputacion: 4.8, recomendaciones: 497, badges: ['🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV2, nombre: '~Dianelys', roles: ['🏠 Rentas', '🔧 Servicios'], reputacion: 4.5, recomendaciones: 85, badges: ['🏅 Muy recomendado', '🏅 Verificado', '🏅 Top de la comunidad'] },
    { avatar: AV4, nombre: '~Anabel', roles: ['🏠 Rentas', '🔧 Servicios'], reputacion: 4.8, recomendaciones: 428, badges: ['🏅 Top de la comunidad', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV2, nombre: '~El angel', roles: ['🏠 Rentas'], reputacion: 4.9, recomendaciones: 476, badges: ['🏅 Verificado', '🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Marta', roles: ['🏠 Rentas'], reputacion: 4.9, recomendaciones: 405, badges: ['🏅 Trabajo seguro', '🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Madelaine', roles: ['🏠 Rentas'], reputacion: 4.4, recomendaciones: 241, badges: ['🏅 Verificado', '🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Maikel', roles: ['🏠 Rentas'], reputacion: 5.0, recomendaciones: 519, badges: ['🏅 Trabajo seguro', '🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
  ],
  marketplace: [
    { avatar: AV1, nombre: '~Pedro Pablo', roles: ['🛒 Marketplace', '📦 Envios'], reputacion: 4.4, recomendaciones: 48, badges: ['🏅 Excelente trato', '🏅 Siempre paga'] },
    { avatar: AV3, nombre: '~Yanet', roles: ['🛒 Marketplace'], reputacion: 4.6, recomendaciones: 418, badges: ['🏅 Verificado', '🏅 Top de la comunidad', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Michel', roles: ['🛒 Marketplace', '🏢 Negocio'], reputacion: 4.8, recomendaciones: 220, badges: ['🏅 Verificado', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Tatiana', roles: ['🛒 Marketplace'], reputacion: 4.4, recomendaciones: 319, badges: ['🏅 Verificado', '🏅 Top de la comunidad', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Yusnier', roles: ['🛒 Marketplace', '🏢 Negocio'], reputacion: 4.7, recomendaciones: 531, badges: ['🏅 Top de la comunidad', '🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Yoandri', roles: ['🛒 Marketplace'], reputacion: 4.8, recomendaciones: 451, badges: ['🏅 Verificado', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Zulema', roles: ['🛒 Marketplace'], reputacion: 4.6, recomendaciones: 175, badges: ['🏅 Responde rapido', '🏅 Trabajo seguro', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Frank', roles: ['🛒 Marketplace', '📦 Envios'], reputacion: 5.0, recomendaciones: 403, badges: ['🏅 Responde rapido', '🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
  ],
  negocios: [
    { avatar: AV2, nombre: '~Yaima', roles: ['🏢 Negocio', '🔧 Servicios'], reputacion: 5.0, recomendaciones: 150, badges: ['🏅 Top de la comunidad', '🏅 Siempre paga', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Odalis', roles: ['🏢 Negocio'], reputacion: 4.7, recomendaciones: 383, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Elianet', roles: ['🏢 Negocio'], reputacion: 4.4, recomendaciones: 201, badges: ['🏅 Trabajo seguro', '🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Karel', roles: ['🏢 Negocio'], reputacion: 4.8, recomendaciones: 306, badges: ['🏅 Trabajo seguro', '🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Dariel', roles: ['🏢 Negocio', '🛒 Marketplace'], reputacion: 4.7, recomendaciones: 210, badges: ['🏅 Mas de 100 recomendaciones', '🏅 Siempre paga'] },
    { avatar: AV4, nombre: '~Wilfredo', roles: ['🏢 Negocio', '🛒 Marketplace'], reputacion: 4.5, recomendaciones: 294, badges: ['🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Yadier', roles: ['🏢 Negocio', '🔧 Servicios'], reputacion: 4.6, recomendaciones: 384, badges: ['🏅 Excelente trato', '🏅 Mas de 100 recomendaciones', '🏅 Responde rapido'] },
    { avatar: AV2, nombre: '~Yosvany', roles: ['🏢 Negocio', '🛒 Marketplace'], reputacion: 4.7, recomendaciones: 362, badges: ['🏅 Excelente trato', '🏅 Mas de 100 recomendaciones'] },
  ],
  viajes: [
    { avatar: AV3, nombre: '~Tomas', roles: ['✈️ Viajes'], reputacion: 4.9, recomendaciones: 201, badges: ['🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Orlando', roles: ['✈️ Viajes'], reputacion: 4.5, recomendaciones: 494, badges: ['🏅 Mas de 100 recomendaciones'] },
    { avatar: AV4, nombre: '~Ilianet', roles: ['✈️ Viajes'], reputacion: 4.3, recomendaciones: 290, badges: ['🏅 Mas de 100 recomendaciones', '🏅 Trabajo seguro', '🏅 Responde rapido'] },
    { avatar: AV1, nombre: '~Dayana', roles: ['✈️ Viajes'], reputacion: 4.8, recomendaciones: 375, badges: ['🏅 Top de la comunidad', '🏅 Mas de 100 recomendaciones', '🏅 Trabajo seguro'] },
    { avatar: AV2, nombre: '~Rolando', roles: ['✈️ Viajes'], reputacion: 4.8, recomendaciones: 553, badges: ['🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV3, nombre: '~Yasmani', roles: ['✈️ Viajes', '📦 Envios'], reputacion: 4.3, recomendaciones: 180, badges: ['🏅 Muy recomendado', '🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV2, nombre: '~Reinier', roles: ['✈️ Viajes'], reputacion: 4.4, recomendaciones: 481, badges: ['🏅 Top de la comunidad', '🏅 Verificado', '🏅 Mas de 100 recomendaciones'] },
    { avatar: AV1, nombre: '~Yudit', roles: ['✈️ Viajes'], reputacion: 4.8, recomendaciones: 275, badges: ['🏅 Responde rapido', '🏅 Mas de 100 recomendaciones'] },
  ],
}
