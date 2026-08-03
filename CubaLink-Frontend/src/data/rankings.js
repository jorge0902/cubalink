// Ranking de la Comunidad CubaLink — personas destacadas por actividad.

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
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['👷 Trabajador', '🦺 Brigadier'], reputacion: 4.9, recomendaciones: 412, badges: ['🏅 Muy recomendado', '🏅 Trabajo seguro'] },
    { avatar: AV2, nombre: '~El angel', roles: ['👷 Trabajador'], reputacion: 4.8, recomendaciones: 356, badges: ['🏅 Siempre paga'] },
    { avatar: AV3, nombre: '~Ramses', roles: ['👷 Trabajador', '🛠️ Servicios'], reputacion: 4.7, recomendaciones: 298, badges: ['🏅 Verificado'] },
    { avatar: AV4, nombre: '~Yosvany', roles: ['👷 Trabajador'], reputacion: 4.6, recomendaciones: 254, badges: ['🏅 Excelente trato'] },
  ],
  brigadieres: [
    { avatar: AV2, nombre: '~Ilianet', roles: ['🦺 Brigadier'], reputacion: 4.8, recomendaciones: 480, badges: ['🏅 Siempre paga', '🏅 Muy recomendado'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['🦺 Brigadier', '👷 Trabajador'], reputacion: 4.5, recomendaciones: 320, badges: ['🏅 Responde rápido'] },
    { avatar: AV3, nombre: '~Dairon', roles: ['🦺 Brigadier'], reputacion: 4.4, recomendaciones: 210, badges: ['🏅 Verificado'] },
  ],
  remesas: [
    { avatar: AV2, nombre: '~Lianet Perez', roles: ['💸 Remesas'], reputacion: 5.0, recomendaciones: 540, badges: ['🏅 Top de la comunidad', '🏅 Muy recomendado'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['💸 Remesas'], reputacion: 4.8, recomendaciones: 210, badges: ['🏅 Excelente trato'] },
    { avatar: AV4, nombre: '~Yaima', roles: ['💸 Remesas', '📦 Envíos'], reputacion: 4.7, recomendaciones: 180, badges: ['🏅 Responde rápido'] },
  ],
  rentas: [
    { avatar: AV4, nombre: '~Yalitza', roles: ['🏠 Rentas'], reputacion: 5.0, recomendaciones: 160, badges: ['🏅 Excelente trato', '🏅 Top de la comunidad'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['🏠 Rentas'], reputacion: 5.0, recomendaciones: 41, badges: ['🏅 Muy recomendado'] },
    { avatar: AV3, nombre: '~Carlos Mendoza', roles: ['🏠 Rentas'], reputacion: 4.8, recomendaciones: 88, badges: ['🏅 Verificado'] },
  ],
  marketplace: [
    { avatar: AV2, nombre: '~Pîpø', roles: ['🛒 Marketplace'], reputacion: 4.9, recomendaciones: 300, badges: ['🏅 Excelente trato', '🏅 Muy recomendado'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['🛒 Marketplace'], reputacion: 4.9, recomendaciones: 58, badges: ['🏅 Siempre paga'] },
    { avatar: AV4, nombre: '~Carlitos Havana', roles: ['🛒 Marketplace'], reputacion: 4.7, recomendaciones: 142, badges: ['🏅 Responde rápido'] },
  ],
  negocios: [
    { avatar: AV3, nombre: '~Yamila Cuba', roles: ['🏢 Negocio'], reputacion: 5.0, recomendaciones: 205, badges: ['🏅 Top de la comunidad', '🏅 Verificado'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['🏢 Negocio'], reputacion: 4.9, recomendaciones: 33, badges: ['🏅 Muy recomendado'] },
    { avatar: AV2, nombre: '~El cubano de siempre', roles: ['🏢 Negocio'], reputacion: 4.8, recomendaciones: 96, badges: ['🏅 Excelente trato'] },
  ],
  viajes: [
    { avatar: AV4, nombre: '~Yosvany el bueno', roles: ['✈️ Viajes', '📦 Envíos'], reputacion: 4.9, recomendaciones: 176, badges: ['🏅 Muy recomendado', '🏅 Verificado'] },
    { avatar: AV1, nombre: '~Yosvani Pérez', roles: ['✈️ Viajes'], reputacion: 4.7, recomendaciones: 39, badges: ['🏅 Trabajo seguro'] },
    { avatar: AV2, nombre: '~Lianet', roles: ['✈️ Viajes'], reputacion: 4.6, recomendaciones: 58, badges: ['🏅 Responde rápido'] },
  ],
}