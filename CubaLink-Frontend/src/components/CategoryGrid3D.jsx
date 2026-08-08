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
    // Airbus/Boeing blanco en vuelo 45° arriba-derecha: alas simétricas, 2 turbinas, cola clara
    to: '/viajes',
    title: 'Viajes',
    colors: ['#0284c7', '#0369a1', '#38bdf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          {/* Fuselaje blanco satinado */}
          <linearGradient id="g-via-w" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="#f1f5f9" />
            <stop offset="1" stopColor="#cbd5e1" />
          </linearGradient>
          {/* Ala metálica azulada */}
          <linearGradient id="g-via-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f8fafc" />
            <stop offset="0.5" stopColor="#94a3b8" />
            <stop offset="1" stopColor="#64748b" />
          </linearGradient>
          {/* Estabilizador */}
          <linearGradient id="g-via-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        {/* Avión en pleno vuelo: ángulo 45° hacia arriba-derecha, sin sombra de suelo ni estela */}
        <g transform="rotate(-45 24 24) translate(1.8 3.7) translate(24 24) scale(0.88) translate(-24 -24)">
          {/* Estabilizador horizontal (detrás) */}
          <path d="M10 18.5 L4.2 21.5 L4.2 24.2 L12 21.5 Z" fill="url(#g-via-b)" />
          {/* Ala lejana (detrás del fuselaje, arriba) */}
          <path d="M26 13.8 L35.8 10.2 L38.4 12.2 L31.8 15.8 Z" fill="#cbd5e1" opacity="0.8" />
          {/* Turbina 2 (ala lejana, asomando tras el fuselaje) */}
          <rect x="33" y="12.8" width="3.8" height="5.4" rx="1.9" fill="url(#g-via-a)" />
          <rect x="34" y="13.7" width="1.8" height="3.6" rx="0.9" fill="#0f172a" />
          {/* Deriva (cola vertical clara) */}
          <path d="M15 14.5 L11.4 5.8 L21 9.8 Z" fill="url(#g-via-w)" />
          <path d="M15 14.5 L16.6 10 L18.9 10.9 Z" fill="#0284c7" opacity="0.55" />
          {/* Fuselaje blanco (nariz cónica) */}
          <path
            d="M11 20.5 Q11 14.5 18 14.5 H30 Q38.5 14.5 40.2 20.5 Q38.5 26.5 30 26.5 H18 Q11 26.5 11 20.5 Z"
            fill="url(#g-via-w)"
          />
          {/* Vientre sombreado */}
          <path
            d="M11 20.5 Q11 26.5 18 26.5 H30 Q38.5 26.5 40.2 20.5 L40.2 23.5 Q38.5 26.5 30 26.5 H18 Q11 26.5 11 23.5 Z"
            fill="#94a3b8" opacity="0.4"
          />
          {/* Líneas azules de la aerolínea */}
          <path d="M14 21.4 H33" stroke="#0284c7" strokeWidth="1.05" strokeLinecap="round" />
          <path d="M14.5 22.8 H30.5" stroke="#0ea5e9" strokeWidth="0.65" strokeLinecap="round" opacity="0.7" />
          {/* Ventanillas azules */}
          <g fill="#0369a1">
            <circle cx="15.2" cy="18.6" r="0.95" />
            <circle cx="19.2" cy="18.6" r="0.95" />
            <circle cx="23.2" cy="18.6" r="0.95" />
            <circle cx="27.2" cy="18.6" r="0.95" />
            <circle cx="31.2" cy="18.6" r="0.95" />
          </g>
          {/* Puerta delantera */}
          <rect x="34.6" y="17.6" width="1.3" height="2.6" rx="0.65" fill="#475569" opacity="0.5" />
          {/* Ala cercana (barrida, con brillo de borde de ataque) */}
          <path d="M22 24.5 L6.5 29.5 L6.5 33.5 L28 27 Z" fill="url(#g-via-a)" />
          <path d="M22 24.5 L6.5 29.5 L6.5 31 L26 26.2 Z" fill="#ffffff" opacity="0.3" />
          {/* Turbina 1 bajo el ala cercana */}
          <g>
            <rect x="11.6" y="29.4" width="4.8" height="5.4" rx="2.4" fill="url(#g-via-w)" />
            <rect x="12.6" y="30.3" width="2.8" height="3.6" rx="1.4" fill="#0f172a" />
            <rect x="13.4" y="30.9" width="1.2" height="2.4" rx="0.6" fill="#94a3b8" opacity="0.65" />
          </g>
        </g>
      </svg>
    ),
  },
  remesas: {
    // Fajo de 3 billetes 3D (papel moneda verde) ligeramente inclinado + anillo dorado de envío
    to: '/remesas',
    title: 'Remesas',
    colors: ['#7c3aed', '#6d28d9', '#a78bfa'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          {/* Billete superior: verde papel moneda */}
          <linearGradient id="g-rem-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b7e4ae" />
            <stop offset="1" stopColor="#6db45e" />
          </linearGradient>
          {/* Dorado metálico del anillo */}
          <linearGradient id="g-rem-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fde68a" />
            <stop offset="0.45" stopColor="#f59e0b" />
            <stop offset="0.55" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#b45309" />
          </linearGradient>
        </defs>
        {/* Sombra suave */}
        <ellipse cx="24" cy="42.5" rx="11" ry="2.1" fill="#0f172a" opacity="0.13" />
        {/* Fajo de 3 billetes, estrictamente centrado, ligeramente inclinado */}
        <g transform="translate(24 24) rotate(-4)">
          {/* Billete 1 (fondo) */}
          <rect x="-12.5" y="-6.2" width="24" height="14" rx="1.7" fill="#14532d" />
          {/* Billete 2 (medio) */}
          <rect x="-12" y="-7" width="24" height="14" rx="1.7" fill="#166534" />
          {/* Billete 3 (frente) */}
          <rect x="-11.5" y="-7.8" width="24" height="14" rx="1.7" fill="url(#g-rem-1)" />
          {/* Marco de filigrana */}
          <rect x="-9.9" y="-6.2" width="20.8" height="10.8" rx="1" fill="none" stroke="#d1fae5" strokeWidth="0.7" opacity="0.85" />
          {/* Retrato ovalado central (papel moneda) */}
          <ellipse cx="0" cy="-1.2" rx="3.9" ry="4.4" fill="#14532d" />
          <ellipse cx="0" cy="-1.2" rx="3.9" ry="4.4" fill="none" stroke="#bbf7d0" strokeWidth="0.5" opacity="0.7" />
          {/* Texto simulado bajo el retrato */}
          <rect x="-5.5" y="3.2" width="11" height="0.55" rx="0.27" fill="#d1fae5" opacity="0.8" />
          <rect x="-4" y="4.05" width="8" height="0.55" rx="0.27" fill="#d1fae5" opacity="0.55" />
          {/* Numerales de esquina "100" */}
          <g fill="none" stroke="#ecfdf5" strokeWidth="1" strokeLinecap="round">
            <path d="M-8.3 -4.4 v2.2 l-0.8 0.5" />
            <circle cx="-6.9" cy="-3.4" r="0.95" />
            <circle cx="-5.5" cy="-3.4" r="0.95" />
            <path d="M8.3 3.4 v-2.2 l0.8 -0.5" />
            <circle cx="6.9" cy="2.4" r="0.95" />
            <circle cx="5.5" cy="2.4" r="0.95" />
          </g>
          {/* Franja de seguridad */}
          <rect x="-9" y="4.9" width="18" height="0.6" rx="0.3" fill="#bbf7d0" opacity="0.5" />
          {/* Brillo satinado */}
          <rect x="-11.5" y="-7.8" width="24" height="14" rx="1.7" fill="#ffffff" opacity="0.05" />
        </g>
        {/* Anillo dorado metálico de envío (único, con punta direccional) */}
        {/* 3 arcos menores de 90° alrededor de (24,24): 3 en punto → 12 en punto (hueco arriba-derecha) */}
        <path
          d="M40 24 A 16 16 0 0 1 24 40 A 16 16 0 0 1 8 24 A 16 16 0 0 1 24 8"
          fill="none" stroke="url(#g-rem-g)" strokeWidth="3.2" strokeLinecap="round"
        />
        {/* Brillo interior del anillo */}
        <path
          d="M38.4 24 A 14.4 14.4 0 0 1 24 38.4 A 14.4 14.4 0 0 1 9.6 24 A 14.4 14.4 0 0 1 24 9.6"
          fill="none" stroke="#fde68a" strokeWidth="0.9" strokeLinecap="round" opacity="0.5"
        />
        {/* Punta de flecha en la dirección del flujo (tangente en 12 en punto) */}
        <path
          d="M27.8 8 L23.8 5.8 L23.8 10.2 Z"
          fill="url(#g-rem-g)"
        />
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
    // Llave inglesa ajustable + destornillador de cruz en X simétrica, acero cromado, sin artefactos
    to: '/servicios',
    title: 'Servicios',
    colors: ['#e11d48', '#be123c', '#fb7185'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          {/* Cromado reluciente (bandas de luz) */}
          <linearGradient id="g-ser-c" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#cbd5e1" />
            <stop offset="0.2" stopColor="#f8fafc" />
            <stop offset="0.45" stopColor="#e2e8f0" />
            <stop offset="0.7" stopColor="#94a3b8" />
            <stop offset="1" stopColor="#64748b" />
          </linearGradient>
          {/* Mango ergonómico rojo */}
          <linearGradient id="g-ser-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fb7185" />
            <stop offset="0.35" stopColor="#e11d48" />
            <stop offset="1" stopColor="#881337" />
          </linearGradient>
        </defs>
        {/* Sombra suave */}
        <ellipse cx="24" cy="42" rx="13" ry="2.1" fill="#0f172a" opacity="0.12" />
        {/* Llave inglesa ajustable (45°, cabeza con boca arriba-derecha) — sin anillos ni círculos */}
        <g transform="translate(24 24) rotate(45)">
          <g transform="translate(0 2.25)">
            {/* Mordaza izquierda */}
            <rect x="-5" y="-12" width="3.4" height="6.5" rx="1.5" fill="url(#g-ser-c)" />
            {/* Mordaza derecha */}
            <rect x="1.6" y="-12" width="3.4" height="6.5" rx="1.5" fill="url(#g-ser-c)" />
            {/* Base de la cabeza */}
            <rect x="-5" y="-5.5" width="10" height="4" rx="1.6" fill="url(#g-ser-c)" />
            {/* Mecanismo de ajuste (integrado en la cabeza) */}
            <rect x="-2.4" y="-6.7" width="4.8" height="1.8" rx="0.9" fill="#475569" />
            <path d="M-1.2 -6.7 v1.8 M0 -6.7 v1.8 M1.2 -6.7 v1.8" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.7" />
            {/* Mango */}
            <rect x="-2.1" y="-1.5" width="4.2" height="9" rx="2.1" fill="url(#g-ser-c)" />
            {/* Brillos cromados */}
            <rect x="-1.1" y="-0.7" width="0.9" height="7.5" rx="0.45" fill="#ffffff" opacity="0.55" />
            <rect x="-4.2" y="-11.3" width="8.4" height="0.8" rx="0.4" fill="#ffffff" opacity="0.6" />
          </g>
        </g>
        {/* Destornillador de cruz (diagonal -45°, punta arriba-izquierda, mango abajo-derecha) */}
        <g transform="translate(24 24) rotate(-45)">
          {/* Varilla cromada */}
          <rect x="-1.15" y="-13.5" width="2.3" height="13.8" rx="1.15" fill="url(#g-ser-c)" />
          {/* Punta de cruz (Phillips) */}
          <path d="M-1.15 -13.5 h2.3 l-0.55 -2.3 h-1.2 z" fill="#94a3b8" />
          <path d="M-0.75 -15.55 l1.5 1.55 M0.75 -15.55 l-1.5 1.55" stroke="#e2e8f0" strokeWidth="0.6" strokeLinecap="round" opacity="0.9" />
          {/* Anillo metálico del mango */}
          <rect x="-1.7" y="0.3" width="3.4" height="1.7" rx="0.85" fill="url(#g-ser-c)" />
          {/* Mango ergonómico rojo */}
          <rect x="-3.6" y="2" width="7.2" height="13.6" rx="3.4" fill="url(#g-ser-2)" />
          {/* Estrías de agarre */}
          <path d="M-2.7 5.4 h5.4 M-2.7 8.6 h5.4 M-2.7 11.8 h5.4" stroke="#9f1239" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />
          {/* Brillo del mango */}
          <rect x="-2.4" y="3" width="1.3" height="11" rx="0.65" fill="#ffffff" opacity="0.3" />
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
