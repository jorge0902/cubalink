import { Link } from 'react-router-dom'

// Iconos 3D inline (SVG con degradados, sombras y brillos especulares).
// No dependen de Google Fonts ni Material Symbols (bloqueada en Rusia) — siempre legibles.
const ICON_3D = {
  empleos: {
    // Maletín de negocios 3D
    to: '/empleos',
    title: 'Empleos',
    colors: ['#2563eb', '#1d4ed8', '#3b82f6'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-emp-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e40af" />
          </linearGradient>
          <radialGradient id="g-emp-2" cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Cuerpo del maletín */}
        <rect x="8" y="18" width="32" height="19" rx="4" fill="url(#g-emp-1)" />
        {/* Tapa superior */}
        <rect x="11" y="15" width="26" height="6" rx="2.5" fill="#1e40af" />
        {/* Asa */}
        <path d="M19 15 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="#93c5fd" strokeWidth="2.6" strokeLinecap="round" />
        {/* Cierre */}
        <rect x="22" y="23" width="4" height="3" rx="1" fill="#fcd34d" />
        {/* Brillo especular */}
        <rect x="8" y="18" width="32" height="19" rx="4" fill="url(#g-emp-2)" />
        {/* Costuras */}
        <path d="M13 22 v12 M35 22 v12" stroke="#1e40af" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  rentas: {
    // Cama acogedora 3D con mesita de noche
    to: '/rentas',
    title: 'Rentas Moscú',
    colors: ['#0d9488', '#0f766e', '#14b8a6'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-ren-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#14b8a6" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="g-ren-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0fdfa" />
            <stop offset="1" stopColor="#99f6e4" />
          </linearGradient>
        </defs>
        {/* Base de la cama */}
        <rect x="6" y="28" width="32" height="9" rx="3" fill="url(#g-ren-1)" />
        {/* Colchón */}
        <rect x="8" y="22" width="28" height="8" rx="3" fill="url(#g-ren-2)" />
        {/* Cabecera */}
        <rect x="6" y="18" width="5" height="19" rx="2" fill="#115e59" />
        {/* Almohada */}
        <rect x="10" y="23.5" width="8" height="5" rx="2" fill="#ffffff" opacity="0.85" />
        {/* Pata delantera */}
        <rect x="10" y="37" width="2.6" height="4" rx="1" fill="#0f766e" />
        <rect x="32" y="37" width="2.6" height="4" rx="1" fill="#0f766e" />
        {/* Mesita de noche */}
        <rect x="41" y="26" width="7" height="12" rx="2" fill="#134e4a" />
        <rect x="42.2" y="27.6" width="4.6" height="4.4" rx="1.2" fill="#5eead4" />
        {/* Lámpara */}
        <path d="M44.5 24 v-2.5" stroke="#fcd34d" strokeWidth="1.6" />
        <path d="M42.5 20.6 h4 a1.4 1.4 0 0 1 0 2.8 h-4 z" fill="#fcd34d" />
        {/* Brillo */}
        <rect x="8" y="22" width="28" height="8" rx="3" fill="url(#g-ren-2)" opacity="0.35" />
      </svg>
    ),
  },
  marketplace: {
    // Smartphone de alta gama con reloj
    to: '/marketplace',
    title: 'Marketplace',
    colors: ['#f59e0b', '#d97706', '#fbbf24'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-mkt-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
          <radialGradient id="g-mkt-2" cx="0.35" cy="0.25" r="0.8">
            <stop offset="0" stopColor="#fde68a" />
            <stop offset="1" stopColor="#d97706" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {/* Smartphone (ligeramente inclinado) */}
        <g transform="rotate(-8 24 24)">
          <rect x="14" y="7" width="21" height="35" rx="4.5" fill="url(#g-mkt-1)" />
          <rect x="16.5" y="10" width="16" height="27" rx="2.5" fill="#0f172a" />
          {/* Pantalla brillante */}
          <rect x="18" y="12" width="13" height="23" rx="1.8" fill="#1e3a8a" />
          <rect x="18" y="12" width="13" height="23" rx="1.8" fill="url(#g-mkt-2)" opacity="0.55" />
          {/* Notch */}
          <rect x="22.5" y="9" width="3" height="1.6" rx="0.8" fill="#111827" />
        </g>
        {/* Reloj inteligente junto al teléfono */}
        <g transform="translate(38 12)">
          <rect x="0" y="3" width="9" height="13" rx="3" fill="#f59e0b" />
          <rect x="1.5" y="4.6" width="6" height="9.6" rx="2" fill="#0f172a" />
          <circle cx="4.5" cy="9.4" r="2.4" fill="#38bdf8" />
          <path d="M1 3 q3 -4 7 0" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  viajes: {
    // Maleta de viaje 3D con etiqueta
    to: '/viajes',
    title: 'Viajes',
    colors: ['#0284c7', '#0369a1', '#38bdf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-via-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#075985" />
          </linearGradient>
          <radialGradient id="g-via-2" cx="0.35" cy="0.25" r="0.85">
            <stop offset="0" stopColor="#bae6fd" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        {/* Maleta tumbada */}
        <g transform="rotate(-10 24 26)">
          <rect x="8" y="16" width="32" height="21" rx="4" fill="url(#g-via-1)" />
          {/* Canal central */}
          <rect x="8" y="24.5" width="32" height="4" fill="#0c4a6e" />
          {/* Cierre */}
          <path d="M22.5 24.5 v-8 h3 v8" fill="none" stroke="#e0f2fe" strokeWidth="1.6" />
          {/* Asa */}
          <path d="M20 16 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#bae6fd" strokeWidth="2.4" strokeLinecap="round" />
          {/* Esquinas reforzadas */}
          <rect x="10.5" y="18.5" width="5" height="5" rx="1.2" fill="#0c4a6e" opacity="0.6" />
          <rect x="32.5" y="18.5" width="5" height="5" rx="1.2" fill="#0c4a6e" opacity="0.6" />
          {/* Brillo */}
          <rect x="8" y="16" width="32" height="21" rx="4" fill="url(#g-via-2)" />
        </g>
        {/* Etiqueta de equipaje */}
        <g transform="translate(36 10) rotate(14)">
          <rect x="0" y="0" width="8" height="11" rx="1.5" fill="#fcd34d" />
          <rect x="2.4" y="2.4" width="3.2" height="3.2" rx="1" fill="#b45309" />
          <path d="M3 7 v2 M1.5 11 v1.4 h5 v-1.4" stroke="#b45309" strokeWidth="0.9" fill="none" />
        </g>
      </svg>
    ),
  },
  remesas: {
    // Fajo de billetes con flechas de transferencia circular
    to: '/remesas',
    title: 'Remesas',
    colors: ['#7c3aed', '#6d28d9', '#a78bfa'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-rem-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="g-rem-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#a7f3d0" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Fajo de billetes */}
        <g transform="rotate(-12 20 30)">
          {/* Billetes de fondo */}
          <rect x="10" y="20" width="20" height="12" rx="1.5" fill="#065f46" />
          <rect x="9.5" y="18.5" width="20" height="12" rx="1.5" fill="#047857" />
          {/* Billete superior */}
          <rect x="9" y="17" width="20" height="12" rx="1.5" fill="url(#g-rem-1)" />
          <rect x="11" y="19.4" width="16" height="7.2" rx="1" fill="url(#g-rem-2)" />
          {/* Círculo de la moneda */}
          <circle cx="19" cy="23" r="3" fill="#047857" stroke="#34d399" strokeWidth="0.8" />
          <path d="M18.2 22.2 l1.6 1.6 l2.4 -2.6" fill="none" stroke="#a7f3d0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* Flechas de transferencia circular */}
        <g fill="none" stroke="#fcd34d" strokeWidth="2.4" strokeLinecap="round">
          <path d="M40 20 a14 14 0 0 0 -6.5 -9" />
          <path d="M32 6.5 l2.2 4.6 l-4.8 -1.6 z" fill="#fcd34d" stroke="none" />
          <path d="M8 26 a14 14 0 0 0 8.5 10.5" />
          <path d="M19.5 38 l-4.8 1.6 l2.2 -4.6 z" fill="#fcd34d" stroke="none" />
        </g>
      </svg>
    ),
  },
  confiables: {
    // Escudo de protección 3D pulido
    to: '/confiables',
    title: 'Confiables',
    colors: ['#0d9488', '#115e59', '#2dd4bf'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-con-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
          <radialGradient id="g-con-2" cx="0.38" cy="0.28" r="0.8">
            <stop offset="0" stopColor="#ccfbf1" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0d9488" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        {/* Sombra */}
        <ellipse cx="24" cy="41" rx="13" ry="2.4" fill="#0f172a" opacity="0.18" />
        {/* Escudo */}
        <path
          d="M24 6 L37 10.5 v11 c0 9 -5.5 15.5 -13 18.5 c-7.5 -3 -13 -9.5 -13 -18.5 v-11 z"
          fill="url(#g-con-1)"
        />
        {/* Borde interior */}
        <path
          d="M24 9.5 L34.5 13 v8.5 c0 7.4 -4.4 12.8 -10.5 15.6 c-6.1 -2.8 -10.5 -8.2 -10.5 -15.6 v-8.5 z"
          fill="none" stroke="#ccfbf1" strokeWidth="1.6" opacity="0.65"
        />
        {/* Verificación */}
        <path
          d="M17.5 23.5 l4.5 4.5 l8.5 -9.5"
          fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Brillo especular */}
        <path
          d="M24 6 L37 10.5 v11 c0 9 -5.5 15.5 -13 18.5 c-7.5 -3 -13 -9.5 -13 -18.5 v-11 z"
          fill="url(#g-con-2)"
        />
      </svg>
    ),
  },
  empresas: {
    // Edificio corporativo de cristal 3D
    to: '/empresas',
    title: 'Empresas',
    colors: ['#4f46e5', '#4338ca', '#818cf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-emp2-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6366f1" />
            <stop offset="1" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="g-emp2-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c7d2fe" stopOpacity="0.9" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {/* Sombra */}
        <ellipse cx="24" cy="41.5" rx="14" ry="2.2" fill="#0f172a" opacity="0.16" />
        {/* Torre principal */}
        <path d="M14 40 V10 h11 v4 h3 v26 z" fill="url(#g-emp2-1)" />
        {/* Ala derecha */}
        <path d="M28 40 V18 h7 v22 z" fill="#4338ca" />
        {/* Cristal: ventanas */}
        <g fill="#c7d2fe" opacity="0.85">
          {[14, 18, 22].map((y) => (
            <g key={y}>
              <rect x="16" y={y} width="3" height="2.4" rx="0.5" />
              <rect x="21.5" y={y} width="3" height="2.4" rx="0.5" />
            </g>
          ))}
          <rect x="30" y="20.5" width="3" height="2.4" rx="0.5" />
          <rect x="30" y="25.5" width="3" height="2.4" rx="0.5" />
        </g>
        {/* Reflejo de cristal */}
        <path d="M14 10 h11 v4 h-5 v-4 h-6 z" fill="url(#g-emp2-2)" opacity="0.7" />
        {/* Puerta */}
        <rect x="20" y="33" width="4" height="7" rx="1" fill="#c7d2fe" opacity="0.9" />
        {/* Antena */}
        <path d="M24 10 v-3.5" stroke="#818cf8" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="24" cy="5.6" r="1.3" fill="#fcd34d" />
      </svg>
    ),
  },
  servicios: {
    // Herramientas cruzadas (llave y martillo) 3D
    to: '/servicios',
    title: 'Servicios',
    colors: ['#e11d48', '#be123c', '#fb7185'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-ser-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fda4af" />
            <stop offset="0.45" stopColor="#e11d48" />
            <stop offset="1" stopColor="#881337" />
          </linearGradient>
          <linearGradient id="g-ser-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fb7185" />
            <stop offset="1" stopColor="#9f1239" />
          </linearGradient>
        </defs>
        {/* Llave inglesa (diagonal) */}
        <g transform="rotate(-38 28 20)">
          <path
            d="M26 4 v14 a2.4 2.4 0 0 1 -1 1.9 l-2.6 2 v6 a2.4 2.4 0 0 1 2.4 2.4 v2.8 a2.4 2.4 0 0 1 -2.4 2.4 h-1 a2.4 2.4 0 0 1 -2.4 -2.4 v-2.8 a2.4 2.4 0 0 1 2.4 -2.4 v-5.4 l-2.6 -2.4 a2.4 2.4 0 0 1 -1 -1.9 V4 z"
            fill="url(#g-ser-1)"
          />
          <rect x="22.6" y="2" width="7" height="5" rx="2.2" fill="#fda4af" />
        </g>
        {/* Martillo (diagonal inversa) */}
        <g transform="rotate(34 20 28)">
          {/* Mango */}
          <rect x="17.2" y="16" width="5.6" height="20" rx="2.6" fill="url(#g-ser-2)" />
          {/* Cabeza */}
          <rect x="13.5" y="8.5" width="13" height="8" rx="2" fill="#e2e8f0" />
          <rect x="13.5" y="8.5" width="13" height="8" rx="2" fill="#94a3b8" opacity="0.55" />
          {/* Golpe metálico */}
          <rect x="24.5" y="9" width="2.4" height="7" rx="1.1" fill="#cbd5e1" />
          <path d="M14.5 10.5 h9" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
        </g>
      </svg>
    ),
  },
}

// Grid de accesos directos estilo Dubizzle: 3 columnas, tarjetas cuadradas, sombra sutil
export default function CategoryGrid3D() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-5">
      {Object.values(ICON_3D).map((cat, i) => (
        <Link
          key={cat.to}
          to={cat.to}
          className="group flex flex-col items-center bg-surface-container-lowest rounded-2xl border border-outline-variant/70 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-4 md:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] hover:border-primary/40 active:scale-[0.97] animate-fade-in-up"
          style={{ animationDelay: `${Math.min(i * 50, 350)}ms` }}
        >
          <span
            className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center drop-shadow-md transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `radial-gradient(circle at 30% 25%, #ffffffcc 0%, ${cat.colors[0]}22 28%, ${cat.colors[1]} 100%)`,
              boxShadow: `0 8px 18px -6px ${cat.colors[1]}66`,
            }}
          >
            {cat.svg}
          </span>
          <span className="mt-2.5 md:mt-3 text-[12px] md:text-[13px] font-bold text-gray-800 text-center leading-tight group-hover:text-primary transition-colors">
            {cat.title}
          </span>
        </Link>
      ))}
    </div>
  )
}
