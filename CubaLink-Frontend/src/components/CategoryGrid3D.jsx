import { Link } from 'react-router-dom'

// Iconos 3D inline (SVG con degradados, sombras y brillos especulares).
// No dependen de Google Fonts ni Material Symbols (bloqueada en Rusia) — siempre legibles.
// Acabado común: iluminación suave, bordes redondeados, sombra paralela tenue y centrado total.
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
        {/* Sombra paralela */}
        <ellipse cx="24" cy="41" rx="16" ry="2.2" fill="#0f172a" opacity="0.14" />
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
    // Cama acogedora 3D pulida con mesita de noche y lámpara
    to: '/rentas',
    title: 'Rentas Moscú',
    colors: ['#0d9488', '#0f766e', '#14b8a6'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-ren-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d9488" />
            <stop offset="1" stopColor="#134e4a" />
          </linearGradient>
          <linearGradient id="g-ren-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#ccfbf1" />
          </linearGradient>
          <linearGradient id="g-ren-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5eead4" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        {/* Sombra proyectada en el suelo */}
        <ellipse cx="23.5" cy="42" rx="16.5" ry="2.4" fill="#0f172a" opacity="0.15" />
        {/* Patas */}
        <rect x="7" y="37.5" width="2.4" height="3.4" rx="1" fill="#134e4a" />
        <rect x="29.5" y="37.5" width="2.4" height="3.4" rx="1" fill="#134e4a" />
        {/* Marco/base de la cama */}
        <rect x="3" y="27" width="33" height="10" rx="3" fill="url(#g-ren-1)" />
        <rect x="3" y="27" width="33" height="3.2" rx="1.6" fill="#ffffff" opacity="0.14" />
        {/* Cabecera */}
        <rect x="3" y="15.5" width="4.6" height="21.5" rx="2" fill="#0f766e" />
        <rect x="3.8" y="16.6" width="1.4" height="19" rx="0.7" fill="#5eead4" opacity="0.4" />
        {/* Colchón */}
        <rect x="5" y="20" width="29" height="9" rx="3" fill="url(#g-ren-2)" />
        {/* Borde de luz superior del colchón */}
        <rect x="7" y="21" width="25" height="1.5" rx="0.75" fill="#ffffff" opacity="0.85" />
        {/* Costuras del colchón */}
        <path d="M11 22.6 v3.6 M16 22.6 v3.6 M21 22.6 v3.6 M26 22.6 v3.6" stroke="#99f6e4" strokeWidth="0.9" strokeLinecap="round" opacity="0.9" />
        {/* Almohada */}
        <rect x="8.5" y="21.6" width="8.5" height="5.6" rx="2.3" fill="#ffffff" />
        <path d="M11.5 24.5 h1.5 M9.8 26 h1.5" stroke="#99f6e4" strokeWidth="0.8" strokeLinecap="round" />
        {/* Manta doblada al pie */}
        <path d="M21.5 20 v9 h12.5 a3 3 0 0 0 3 -3 v-3 a3 3 0 0 0 -3 -3 z" fill="url(#g-ren-3)" />
        <path d="M23 21.8 v5.8 h9.5" fill="none" stroke="#a7f3d0" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
        {/* Mesita de noche con lámpara */}
        <g transform="translate(38.5 24)">
          <rect x="0" y="4" width="6.5" height="10.5" rx="1.8" fill="#134e4a" />
          <rect x="0.8" y="5.4" width="4.9" height="3.2" rx="1" fill="#5eead4" opacity="0.5" />
          {/* Lámpara */}
          <path d="M3.25 4 v-3" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M1.4 -1.2 h3.7 l-0.6 -1.6 h-2.5 z" fill="#fcd34d" />
          {/* Halo de luz */}
          <path d="M0.4 -0.2 a2.85 2.85 0 0 1 5.7 0 z" fill="#fde68a" opacity="0.85" />
        </g>
      </svg>
    ),
  },
  marketplace: {
    // Smartphone vertical con app de tienda (limpio y simétrico)
    to: '/marketplace',
    title: 'Marketplace',
    colors: ['#f59e0b', '#d97706', '#fbbf24'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-mkt-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fcd34d" />
            <stop offset="0.5" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="g-mkt-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {/* Sombra */}
        <ellipse cx="24" cy="42" rx="11" ry="2.2" fill="#0f172a" opacity="0.16" />
        {/* Cuerpo del teléfono (vertical, centrado) */}
        <rect x="13.5" y="6" width="21" height="36" rx="5" fill="url(#g-mkt-1)" />
        {/* Bisel interno */}
        <rect x="16" y="8.6" width="16" height="28.8" rx="3.2" fill="url(#g-mkt-2)" />
        {/* Pantalla: app de marketplace */}
        <rect x="17.8" y="10.4" width="12.4" height="25.2" rx="2" fill="#0f172a" />
        {/* Cabecera de la app */}
        <rect x="19.2" y="11.8" width="9.6" height="2.1" rx="1.05" fill="#1e40af" opacity="0.95" />
        {/* Grid 2x2 de productos */}
        <rect x="19.2" y="15.6" width="4.5" height="4.5" rx="1.2" fill="#fbbf24" />
        <rect x="24.7" y="15.6" width="4.5" height="4.5" rx="1.2" fill="#34d399" />
        <rect x="19.2" y="21.3" width="4.5" height="4.5" rx="1.2" fill="#38bdf8" />
        <rect x="24.7" y="21.3" width="4.5" height="4.5" rx="1.2" fill="#f472b6" />
        {/* Barra inferior de la app */}
        <rect x="19.2" y="31.2" width="9.6" height="2.5" rx="1.25" fill="#f59e0b" />
        <circle cx="24" cy="32.45" r="0.75" fill="#ffffff" />
        {/* Notch */}
        <rect x="22.5" y="7.5" width="3" height="1.5" rx="0.75" fill="#78350f" opacity="0.75" />
        {/* Brillo especular del cristal */}
        <path d="M18.6 11.4 h7.4" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M18.6 13 h4.2" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      </svg>
    ),
  },
  viajes: {
    // Avión comercial moderno 3D (reemplaza la maleta)
    to: '/viajes',
    title: 'Viajes',
    colors: ['#0284c7', '#0369a1', '#38bdf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-via-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="0.55" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="g-via-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#bae6fd" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        {/* Sombra en el suelo */}
        <ellipse cx="23.5" cy="42" rx="14" ry="2.2" fill="#0f172a" opacity="0.16" />
        {/* Estela / contrail */}
        <g transform="translate(1.5 0)">
          <path d="M4 33.5 q9 -1.5 13.5 -6" stroke="#bae6fd" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.75" />
          <path d="M4 37 q10 -2 14.5 -7.5" stroke="#e0f2fe" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.5" />
        </g>
        {/* Avión en ligero ángulo ascendente */}
        <g transform="translate(1.5 0) rotate(-14 24 24)">
          {/* Ala lejana (detrás, más oscura) */}
          <path d="M21 20.5 L6.5 27.5 L6.5 31 L25.5 23.5 Z" fill="#075985" />
          {/* Estabilizador horizontal de cola */}
          <path d="M10.5 15.5 L4.5 18.5 L4.5 21.5 L12.5 18.5 Z" fill="#0369a1" opacity="0.9" />
          {/* Fuselaje */}
          <path d="M11 17.5 Q11 11 22.5 11 H32 Q40 11 40 17.5 Q40 24 32 24 H22.5 Q11 24 11 17.5 Z" fill="url(#g-via-1)" />
          {/* Grosor inferior del fuselaje */}
          <path d="M11 17.5 Q11 24 22.5 24 H32 Q40 24 40 17.5 L40 20.5 Q40 24 32 24 H22.5 Q11 24 11 20.5 Z" fill="#075985" opacity="0.5" />
          {/* Línea de cabina */}
          <path d="M15.5 16.5 H33" stroke="#e0f2fe" strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
          {/* Ventanillas */}
          <g fill="#e0f2fe">
            <circle cx="18.5" cy="17.8" r="1.1" />
            <circle cx="22.5" cy="17.8" r="1.1" />
            <circle cx="26.5" cy="17.8" r="1.1" />
            <circle cx="30.5" cy="17.8" r="1.1" />
          </g>
          {/* Ala cercana */}
          <path d="M23 18.5 L8 27 L8 30.5 L27 21.5 Z" fill="url(#g-via-2)" />
          {/* Brillo del ala */}
          <path d="M23 18.5 L27 21.5 L8 30.5 L8 27 Z" fill="#ffffff" opacity="0.18" />
          {/* Motor bajo el ala */}
          <rect x="13.5" y="25.5" width="4.2" height="5" rx="1.8" fill="#0c4a6e" />
          {/* Cola vertical */}
          <path d="M14.5 11 L11 3.5 L21.5 7.8 Z" fill="url(#g-via-2)" />
          <path d="M14.5 11 L21.5 7.8 L21 9.5 Z" fill="#ffffff" opacity="0.15" />
        </g>
      </svg>
    ),
  },
  remesas: {
    // Fajo de billetes centrado con flechas de transferencia equilibradas
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
        {/* Sombra */}
        <ellipse cx="24" cy="41.5" rx="13" ry="2.2" fill="#0f172a" opacity="0.15" />
        {/* Fajo de billetes perfectamente centrado */}
        <g transform="translate(24 24.5) rotate(-5)">
          {/* Billetes de fondo */}
          <rect x="-9.75" y="-9.1" width="21" height="12.5" rx="1.8" fill="#065f46" />
          <rect x="-10.5" y="-7.8" width="21" height="12.5" rx="1.8" fill="#047857" />
          {/* Billete superior */}
          <rect x="-10.5" y="-6.5" width="21" height="12.5" rx="1.8" fill="url(#g-rem-1)" />
          {/* Borde interior */}
          <rect x="-8.6" y="-4.6" width="17.2" height="8.6" rx="1.3" fill="url(#g-rem-2)" />
          {/* Círculo de la moneda (centrado en el billete) */}
          <circle cx="0" cy="-0.3" r="3.3" fill="#047857" stroke="#a7f3d0" strokeWidth="0.9" />
          <path d="M-1.5 -0.3 l1 1 l2.1 -2.3" fill="none" stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          {/* Brillo sutil */}
          <rect x="-10.5" y="-6.5" width="21" height="12.5" rx="1.8" fill="#ffffff" opacity="0.07" />
        </g>
        {/* Flechas de transferencia circulares y equilibradas */}
        <g fill="none" stroke="#fcd34d" strokeWidth="2.1" strokeLinecap="round">
          {/* Arco superior: izquierda → derecha */}
          <path d="M8 13.5 C 13 5, 35 5, 40 13.5" />
          <path d="M39.6 12.2 l2.2 2.8 l-4.1 0.3 z" fill="#fcd34d" stroke="none" />
          {/* Arco inferior: derecha → izquierda */}
          <path d="M40 30.5 C 35 39, 13 39, 8 30.5" />
          <path d="M8.4 31.8 l-2.2 -2.8 l4.1 -0.3 z" fill="#fcd34d" stroke="none" />
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
    // Herramientas cruzadas simétricas (llave y martillo) 3D, sin artefactos
    to: '/servicios',
    title: 'Servicios',
    colors: ['#e11d48', '#be123c', '#fb7185'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-ser-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e2e8f0" />
            <stop offset="0.5" stopColor="#94a3b8" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="g-ser-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f43f5e" />
            <stop offset="1" stopColor="#9f1239" />
          </linearGradient>
          <linearGradient id="g-ser-3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#cbd5e1" />
            <stop offset="1" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Sombra */}
        <ellipse cx="24" cy="42" rx="14" ry="2.2" fill="#0f172a" opacity="0.15" />
        {/* Llave inglesa (diagonal 45°, anillo arriba-derecha) */}
        <g transform="translate(24 23.5) rotate(45)">
          <circle cx="0" cy="-8.2" r="3.9" fill="url(#g-ser-1)" />
          <circle cx="0" cy="-8.2" r="1.8" fill="#1e293b" opacity="0.35" />
          <rect x="-2.3" y="-5.2" width="4.6" height="12.4" rx="2.3" fill="url(#g-ser-1)" />
          <path
            d="M-3.2 7.6 h6.4 a2.9 2.9 0 0 1 2.9 2.9 v3.2 a2.9 2.9 0 0 1 -2.9 2.9 h-6.4 a2.9 2.9 0 0 1 -2.9 -2.9 v-3.2 a2.9 2.9 0 0 1 2.9 -2.9 z"
            fill="url(#g-ser-1)"
          />
          <rect x="-0.8" y="9.6" width="1.6" height="6.6" rx="0.8" fill="#334155" opacity="0.5" />
          {/* Brillo del mango */}
          <rect x="-1.2" y="-4.4" width="1" height="10" rx="0.5" fill="#ffffff" opacity="0.5" />
        </g>
        {/* Martillo (diagonal -45°, cabeza arriba-izquierda) */}
        <g transform="translate(24 23.5) rotate(-45)">
          {/* Mango rojo */}
          <rect x="-2.3" y="1.5" width="4.6" height="14.5" rx="2.3" fill="url(#g-ser-2)" />
          <rect x="-1.2" y="2.6" width="1" height="12" rx="0.5" fill="#ffffff" opacity="0.28" />
          {/* Cabeza de acero */}
          <rect x="-9" y="-11.5" width="18" height="8" rx="2" fill="url(#g-ser-3)" />
          {/* Cara de golpe */}
          <rect x="-9" y="-11" width="2.8" height="7" rx="1.3" fill="#94a3b8" />
          {/* Brillo de la cabeza */}
          <rect x="-5" y="-10.6" width="8.6" height="1.3" rx="0.65" fill="#ffffff" opacity="0.6" />
        </g>
      </svg>
    ),
  },
  lineas: {
    // Tarjeta SIM / chip móvil brillante 3D, limpia y centrada (sin ondas)
    to: '/lineas',
    title: 'Líneas',
    colors: ['#0ea5e9', '#0369a1', '#38bdf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-lin-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#075985" />
          </linearGradient>
          <radialGradient id="g-lin-2" cx="0.35" cy="0.28" r="0.85">
            <stop offset="0" stopColor="#bae6fd" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="1" stopColor="#0369a1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Sombra */}
        <ellipse cx="24" cy="42" rx="13" ry="2" fill="#0f172a" opacity="0.15" />
        {/* Cuerpo de la SIM (ligeramente inclinada, centrada) */}
        <g transform="rotate(-4 24 24)">
          <rect x="13" y="10" width="22" height="28" rx="4" fill="url(#g-lin-1)" />
          {/* Borde de luz superior */}
          <path d="M17 10.6 h14 a3.4 3.4 0 0 1 3.4 3.4 v2" fill="none" stroke="#bae6fd" strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
          {/* Esquina recortada (SIM) */}
          <path d="M35 21 v7 l-2.5 2.5 h-2.5 v-9.5 h5 z" fill="#0284c7" opacity="0.6" />
          {/* Chip dorado */}
          <rect x="18.5" y="15.5" width="11" height="9" rx="2" fill="#fcd34d" />
          <rect x="18.5" y="15.5" width="11" height="9" rx="2" fill="#ffffff" opacity="0.18" />
          {/* Contactos del chip */}
          <g stroke="#b45309" strokeWidth="0.9" opacity="0.85">
            <path d="M24 17 v5.8 M20.4 19.9 h7.2 M21.2 17.9 h5.6 M21.2 21.9 h5.6" />
          </g>
          {/* Número de serie estilizado */}
          <g fill="#7dd3fc" opacity="0.85">
            <rect x="19" y="28" width="10" height="1.8" rx="0.9" />
            <rect x="19" y="31.3" width="7" height="1.8" rx="0.9" />
          </g>
          {/* Brillo especular */}
          <rect x="13" y="10" width="22" height="28" rx="4" fill="url(#g-lin-2)" />
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
