import { Link } from 'react-router-dom'

// Iconos 3D inline (SVG con degradados, sombras y brillos especulares).
// No dependen de Google Fonts ni Material Symbols (bloqueada en Rusia) — siempre legibles.
// Dirección de arte Claymorphism/Apple: materiales satinados, iluminación frontal,
// bordes suavizados, sombras difusas suaves, sin artefactos flotantes, centrado 1:1.
const ICON_3D = {
  empleos: {
    // Maletín ejecutivo 3D azul marino con broches metálicos
    to: '/empleos',
    title: 'Empleos',
    colors: ['#2563eb', '#1d4ed8', '#3b82f6'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="g-emp-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="0.6" stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
          <radialGradient id="g-emp-2" cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Sombra difusa */}
        <ellipse cx="24" cy="41" rx="15" ry="2.2" fill="#0f172a" opacity="0.14" />
        {/* Cuerpo del maletín */}
        <rect x="8" y="18" width="32" height="19" rx="4" fill="url(#g-emp-1)" />
        {/* Tapa superior */}
        <rect x="11" y="15" width="26" height="6" rx="2.5" fill="#1e3a8a" />
        {/* Asa */}
        <path d="M19 15 v-4 a5 5 0 0 1 10 0 v4" fill="none" stroke="#93c5fd" strokeWidth="2.6" strokeLinecap="round" />
        {/* Broches metálicos de las esquinas */}
        <g fill="#cbd5e1">
          <path d="M8 22 h2.6 v5 h-2.6 a2.6 2.6 0 0 1 0 -5 z" opacity="0.85" />
          <path d="M37.4 22 h2.6 a2.6 2.6 0 0 1 0 5 h-2.6 z" opacity="0.85" />
        </g>
        {/* Cierre dorado con brillo */}
        <rect x="21.6" y="22.8" width="4.8" height="3.4" rx="1.2" fill="#fcd34d" />
        <rect x="22.4" y="23.4" width="1.2" height="2.2" rx="0.6" fill="#fef3c7" opacity="0.9" />
        {/* Costuras */}
        <path d="M13 22.5 v11.5 M35 22.5 v11.5" stroke="#172554" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
        {/* Brillo especular */}
        <rect x="8" y="18" width="32" height="19" rx="4" fill="url(#g-emp-2)" />
      </svg>
    ),
  },
  rentas: {
    // Habitación acogedora 3D: cama sobre verde menta, bordes definidos y profundidad
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
        <ellipse cx="23.5" cy="42" rx="16" ry="2.4" fill="#0f172a" opacity="0.15" />
        {/* Patas */}
        <rect x="7" y="37.5" width="2.4" height="3.4" rx="1" fill="#134e4a" />
        <rect x="29.5" y="37.5" width="2.4" height="3.4" rx="1" fill="#134e4a" />
        {/* Marco/base de la cama */}
        <rect x="3" y="27" width="33" height="10" rx="3" fill="url(#g-ren-1)" />
        <rect x="3" y="27" width="33" height="3.2" rx="1.6" fill="#ffffff" opacity="0.14" />
        {/* Cabecera */}
        <rect x="3" y="15.5" width="4.6" height="21.5" rx="2" fill="#0f766e" />
        <rect x="3.8" y="16.6" width="1.4" height="19" rx="0.7" fill="#5eead4" opacity="0.4" />
        {/* Colchón con borde definido */}
        <rect x="5" y="20" width="29" height="9" rx="3" fill="url(#g-ren-2)" />
        <rect x="5" y="20" width="29" height="9" rx="3" fill="none" stroke="#5eead4" strokeWidth="0.9" opacity="0.7" />
        {/* Borde de luz superior */}
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
    // Smartphone 3D con app de tienda, pantalla clara, líneas limpias
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
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1e3a8a" />
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
        <rect x="19.2" y="11.8" width="9.6" height="2.1" rx="1.05" fill="#1d4ed8" opacity="0.95" />
        {/* Grid 2x2 de productos */}
        <rect x="19.2" y="15.6" width="4.5" height="4.5" rx="1.2" fill="#fbbf24" />
        <rect x="24.7" y="15.6" width="4.5" height="4.5" rx="1.2" fill="#34d399" />
        <rect x="19.2" y="21.3" width="4.5" height="4.5" rx="1.2" fill="#38bdf8" />
        <rect x="24.7" y="21.3" width="4.5" height="4.5" rx="1.2" fill="#818cf8" />
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
    // ✈️ Avión REAL descargado: Noto Emoji "flight" (2708) de Google — licencia Apache 2.0.
    // Reconocible al instante: fuselaje azul satinado, ala con reflejos 3D y estela de nube.
    to: '/viajes',
    title: 'Viajes',
    colors: ['#0284c7', '#0369a1', '#38bdf8'],
    svg: (
      <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
        {/* Sombra difusa suave */}
        <ellipse cx="24" cy="42" rx="13" ry="2.1" fill="#0f172a" opacity="0.13" />
        {/* Avión escalado y centrado */}
        <g transform="translate(0.9 1.8) scale(0.36)">
          <path fill="#006CA8" d="M37.08,80.79c0,0-27.47-5.87-27.94-5.78c-0.47,0.09-5.97,5.59-5.78,6.44C3.55,82.31,27.61,95,27.61,95l6.91-7.29L37.08,80.79z" />
          <path fill="#006CA8" d="M33.29,100.21c0,0,13.35,23.11,13.92,23.11s6.72-4.74,6.72-5.21c0-0.47-5.68-28.03-5.68-28.03l-9.76,1.14L33.29,100.21z" />
          <path fill="#9A9A9A" d="M22.79,25.78c0,0-1.92,2.17-2.33,2.94s-0.48,2.09,0.4,2.56c0.88,0.47,1.95,0.15,2.48-0.44c0.53-0.59,3.14-3.8,3.14-3.8S23.02,25.6,22.79,25.78z" />
          <path fill="#9A9A9A" d="M36.81,33.63c0,0-1.55,1.84-2.18,2.68c-0.61,0.81-0.6,2.08,0.25,2.68c1.22,0.86,2.43-0.1,3.09-0.81c0.61-0.66,2.33-2.68,2.33-2.68L36.81,33.63z" />
          <path fill="#9A9A9A" d="M50.08,40.77c0,0-2.03,2.03-2.63,2.84c-0.67,0.89-0.82,2.19,0.1,2.89c1.01,0.76,2.13,0.41,3.04-0.41c0.91-0.81,2.94-3.04,2.94-3.04L50.08,40.77z" />
          <path fill="#9A9A9A" d="M85.11,75.05c0,0-2.38,1.65-2.97,2.29c-0.58,0.64-0.97,1.92-0.22,2.59c0.74,0.67,1.86,0.61,2.52,0.17c0.66-0.44,3.96-2.93,3.96-2.93S85.38,74.94,85.11,75.05z" />
          <path fill="#9A9A9A" d="M93.13,87.61c0,0-1.97,1.38-2.79,2.03c-0.8,0.63-1.11,1.86-0.44,2.66c0.95,1.14,2.38,0.53,3.19,0.01c0.76-0.48,2.94-2,2.94-2L93.13,87.61z" />
          <path fill="#9A9A9A" d="M100.47,100.45c0,0-2.45,1.48-3.24,2.12c-0.86,0.71-1.32,1.93-0.59,2.83c0.8,0.98,1.97,0.9,3.05,0.34s3.58-2.24,3.58-2.24L100.47,100.45z" />
          <path fill="#9A9A9A" d="M57.27,23.73c0,0-0.35-2.33,1.54-4.96c1.89-2.63,8.16-8.77,9.13-8.82s3.29,1.18,5.62,3.47c2.22,2.17,3.25,4.96,3.29,5.62c0.04,0.66-4.34,5-5.48,6.05c-1.14,1.05-4.21,4.47-4.21,4.47L57.27,23.73z" />
          <path fill="#C8C8C8" d="M60.13,24.08c0,0,7.68-9.39,9.74-7.98c2.08,1.42-6.23,9.48-6.23,9.48L60.13,24.08z" />
          <path fill="#848484" d="M58.37,23.48c0,0,4.35-4.41,4.83-5.11c0.48-0.7,0.04-1.75-0.35-2.33c-0.39-0.57-0.99-0.79-0.99-0.79s-3.07,2.75-4.12,5.16c-0.82,1.87-0.68,2.82-0.68,2.82L58.37,23.48z" />
          <path fill="#848484" d="M65.86,25.75c0,0,1.65-1.71,2.48-2.39c0.75-0.61,1.86-0.55,2.52-0.16c0.85,0.5,1.05,1.36,1.05,1.36l-3.06,3.25L65.86,25.75z" />
          <path fill="#9A9A9A" d="M101.96,59.45c0,0,2.51-2.92,3.97-4.38c1.51-1.51,3.97-3.56,4.47-3.52c0.5,0.05,2.71,1.39,4.79,3.52c2.37,2.42,3.84,5.43,3.88,5.71c0.05,0.27-4.38,4.7-6.35,6.39c-1.41,1.21-10.18,4.79-10.18,4.34C102.56,71.05,101.96,59.45,101.96,59.45z" />
          <path fill="#C8C8C8" d="M103.41,65.1c0,0,7.26-7.96,8.92-6.47c1.66,1.49-8.31,10.45-8.31,10.45L103.41,65.1z" />
          <path fill="#848484" d="M102.87,63.1c0,0,2.07-2.28,2.65-2.92c0.94-1.03,0.88-2.41,0.6-3.01c-0.36-0.77-1.29-0.95-1.29-0.95l-3.45,3.67L102.87,63.1z" />
          <path fill="#848484" d="M105.38,69.71c0,0,4.16-3.75,4.87-4.34c0.71-0.59,1.86-1.01,2.77-0.38c0.68,0.47,0.98,1.04,0.98,1.04s-3.2,3.48-5.13,4.71c-1.21,0.77-4.07,1.21-4.07,1.21L105.38,69.71z" />
          <path fill="#006CA8" d="M11.65,8.92C10.67,9,4.46,16.34,4.24,16.88s0,1.42,1.53,2.18C7.29,19.82,50.24,42.5,50.9,43.04c0.65,0.55,9.16,10.03,9.16,10.03s21.04-14.5,20.93-14.93c-0.11-0.44-0.76-9.48-0.76-9.48S13.07,8.81,11.65,8.92z" />
          <path fill="#006CA8" d="M73.03,65.83c0,0,12.86,11.66,13.95,13.08c1.09,1.42,23.33,41.97,23.66,42.62c0.33,0.65,1.74,1.2,2.51,0.44s6.54-5.78,6.65-6.98c0.11-1.2-21.37-70.42-21.37-70.42l-16.57,6L73.03,65.83z" />
          <path fill="#014EAC" d="M66.81,43.26c0,0-10.14-9.81-10.9-10.36C55.15,32.36,7.62,12.74,7.62,12.74l-1.95,2.15c0,0,48.18,20.35,48.95,20.89c0.77,0.54,10.2,10.2,10.2,10.2L66.81,43.26z" />
          <path fill="#014EAC" d="M82.4,60.45c0,0,11.17,13.72,11.84,14.61s20.26,45.65,20.26,45.65l1.95-1.82c0,0-19.57-45.67-19.92-46.29c-0.35-0.62-13.36-16.7-13.36-16.7L82.4,60.45z" />
          <path fill="#9A9A9A" d="M24.22,98.4c0,0-4.18,5.98-4.18,6.45c0,0.48,2.8,3.54,3.12,3.54s6.4-4.34,6.4-4.34l-0.85-4.34L24.22,98.4z" />
          <path fill="#C8C8C8" d="M24.22,98.4c0,0,8.28-13.93,17.15-26.38c9.11-12.79,16.5-20.16,27.86-32.52c14.25-15.5,23.74-24.28,32.52-30.19c7.28-4.9,17.68-8.22,21.39-4.91c4.07,3.64-0.42,15.12-4.99,21.66c-10.37,14.84-19.27,21.9-29.48,31.81c-10.07,9.77-18.58,18.25-29.12,26.16c-7.1,5.33-30,20.04-30,20.04L24.22,98.4z" />
          <path fill="#3B5361" d="M103.92,11.05l2.77,2.92c0,0,4.64-4.47,8.11-1.14c3.56,3.41-1.35,8.25-1.35,8.25l2.99,3.34c0,0,8.11-9.18,1.49-15.15C112.17,4.07,103.92,11.05,103.92,11.05z" />
          <path fill="#9A9A9A" d="M47.84,74c-1.29,1.24-16.53,19.28-17.38,20.35c-1.09,1.38-1.59,3.04-0.36,4.06c1.23,1.01,2.56,0.01,3.77-0.8c1.52-1.01,19.18-16.59,20.35-17.67c1.88-1.74,2.2-4.88,0.22-6.66C52.26,71.32,49.8,72.12,47.84,74z" />
          <path fill="#DFDFDF" d="M47.29,69.91c-0.87-0.75-1.95-0.25-3.09,0.98c-0.98,1.07-1.43,2.73-0.45,3.4c0.98,0.67,2.28-0.31,3.09-1.3C47.65,72.01,48.27,70.76,47.29,69.91z" />
          <path fill="#DFDFDF" d="M50.11,64.09c-0.9,1.03-2.21,2.73-0.98,3.94c1.21,1.19,3.04-0.32,3.84-1.22c0.79-0.9,9.84-11.52,21.29-22.96c11.18-11.18,18.7-18.25,19.86-19.49c0.98-1.05,0.89-2.72,0.03-3.25c-1.02-0.63-2.15-0.23-3.55,1.17c-1.4,1.4-10.9,10.09-19.86,19.15S51.23,62.8,50.11,64.09z" />
          <path fill="#3B5361" d="M105.47,41.61c0,0-0.55-3.72-2.86-2.26c-2.48,1.57-0.63,5.83-0.63,5.83s0.93-0.87,1.92-1.91C104.72,42.42,105.2,41.92,105.47,41.61z" />
          <path fill="#3B5361" d="M96.6,50.36c0,0-0.39-4.77-3.01-2.81c-2.09,1.57-0.67,6.26-0.67,6.26s1.2-1.09,1.98-1.83C95.69,51.23,96.6,50.36,96.6,50.36z" />
          <path fill="#3B5361" d="M88.14,58.38c0,0-0.3-3.96-2.65-2.65c-2.35,1.31-0.78,5.99-0.78,5.99s1.04-0.94,1.74-1.64S88.14,58.38,88.14,58.38z" />
          <path fill="#3B5361" d="M78.56,67.64c0,0-0.18-3.94-2.49-2.89c-2.4,1.09-0.96,6.14-0.96,6.14s1.17-1.09,1.82-1.7C77.59,68.59,78.56,67.64,78.56,67.64z" />
        </g>
      </svg>
    ),
  },
  remesas: {
    // Fajo de 3 billetes verdes 3D + flecha dorada circular de transferencia.
    // Sin logos, sin círculos centrales: solo textura limpia de papel moneda.
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
          {/* Dorado metálico de la flecha */}
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
          {/* Texto de banco simulado (neutro, sin logos) */}
          <rect x="-5" y="-3.4" width="10" height="1.4" rx="0.7" fill="#166534" opacity="0.5" />
          <rect x="-3.6" y="-1" width="7.2" height="1" rx="0.5" fill="#166534" opacity="0.38" />
          {/* Numerales de esquina "100" */}
          <g fill="none" stroke="#ecfdf5" strokeWidth="1.1" strokeLinecap="round">
            <path d="M-8.3 -4.6 v2.4 l-0.85 0.55" />
            <circle cx="-6.8" cy="-3.5" r="1" />
            <circle cx="-5.3" cy="-3.5" r="1" />
            <path d="M8.3 3.6 v-2.4 l0.85 -0.55" />
            <circle cx="6.8" cy="2.5" r="1" />
            <circle cx="5.3" cy="2.5" r="1" />
          </g>
          {/* Franja de seguridad */}
          <rect x="-9" y="5" width="18" height="0.6" rx="0.3" fill="#bbf7d0" opacity="0.5" />
          {/* Brillo satinado */}
          <rect x="-11.5" y="-7.8" width="24" height="14" rx="1.7" fill="#ffffff" opacity="0.05" />
        </g>
        {/* Anillo dorado metálico de envío (único, con punta direccional) */}
        <path
          d="M40 24 A 16 16 0 0 1 24 40 A 16 16 0 0 1 8 24 A 16 16 0 0 1 24 8"
          fill="none" stroke="url(#g-rem-g)" strokeWidth="3.1" strokeLinecap="round"
        />
        {/* Brillo interior del anillo */}
        <path
          d="M38.3 24 A 14.3 14.3 0 0 1 24 38.3 A 14.3 14.3 0 0 1 9.7 24 A 14.3 14.3 0 0 1 24 9.7"
          fill="none" stroke="#fde68a" strokeWidth="0.9" strokeLinecap="round" opacity="0.5"
        />
        {/* Punta de flecha en la dirección del flujo */}
        <path d="M27.8 8 L23.8 5.8 L23.8 10.2 Z" fill="url(#g-rem-g)" />
      </svg>
    ),
  },
  confiables: {
    // Escudo de protección 3D con checkmark brillante en relieve
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
        <ellipse cx="24" cy="41" rx="13" ry="2.4" fill="#0f172a" opacity="0.16" />
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
        {/* Sombra del check (relieve) */}
        <path
          d="M17.9 24.1 l4.5 4.5 l8.5 -9.5"
          fill="none" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55"
        />
        {/* Checkmark brillante */}
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
    // Complejo de rascacielos 3D estilizados, perfil nítido y centrado
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
        <g fill="#c7d2fe" opacity="0.9">
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
        {/* Antena (sin esferas) */}
        <path d="M24 10 v-3.8" stroke="#818cf8" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="23.2" y="5" width="1.6" height="1.2" rx="0.4" fill="#fcd34d" />
      </svg>
    ),
  },
  servicios: {
    // Llave inglesa ajustable + destornillador de cruz en X simétrica.
    // Acero cromado pulido, mango ergonómico rojo. Cero círculos ni artefactos.
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
        {/* Llave inglesa ajustable (45°, cabeza con boca arriba-derecha) */}
        <g transform="translate(24 24) rotate(45)">
          <g transform="translate(0 1.75)">
            {/* Mordaza izquierda */}
            <rect x="-5.2" y="-12" width="3.6" height="6.8" rx="1.6" fill="url(#g-ser-c)" />
            {/* Mordaza derecha */}
            <rect x="1.6" y="-12" width="3.6" height="6.8" rx="1.6" fill="url(#g-ser-c)" />
            {/* Base de la cabeza */}
            <rect x="-5.2" y="-5.2" width="10.4" height="4.2" rx="1.7" fill="url(#g-ser-c)" />
            {/* Mecanismo de ajuste (integrado en la cabeza) */}
            <rect x="-2.6" y="-6.4" width="5.2" height="1.9" rx="0.95" fill="#475569" />
            <path d="M-1.3 -6.4 v1.9 M0 -6.4 v1.9 M1.3 -6.4 v1.9" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.7" />
            {/* Mango */}
            <rect x="-2.3" y="-1" width="4.6" height="9.5" rx="2.3" fill="url(#g-ser-c)" />
            {/* Brillos cromados */}
            <rect x="-1.2" y="-0.2" width="1" height="8" rx="0.5" fill="#ffffff" opacity="0.55" />
            <rect x="-4.4" y="-11.2" width="8.8" height="0.85" rx="0.42" fill="#ffffff" opacity="0.6" />
          </g>
        </g>
        {/* Destornillador de cruz (diagonal -45°, punta arriba-izquierda, mango abajo-derecha) */}
        <g transform="translate(24 24) rotate(-45)">
          {/* Varilla cromada gruesa */}
          <rect x="-1.4" y="-12.5" width="2.8" height="13" rx="1.4" fill="url(#g-ser-c)" />
          {/* Punta de cruz corta y ancha (Phillips) */}
          <path d="M-1.4 -12.5 h2.8 l-0.7 -1.9 h-1.4 z" fill="#94a3b8" />
          <path d="M-0.9 -14.2 l1.8 1.85 M0.9 -14.2 l-1.8 1.85" stroke="#e2e8f0" strokeWidth="0.65" strokeLinecap="round" opacity="0.9" />
          {/* Anillo metálico del mango */}
          <rect x="-1.9" y="0.5" width="3.8" height="1.8" rx="0.9" fill="url(#g-ser-c)" />
          {/* Mango ergonómico rojo (redondeado) */}
          <rect x="-3.8" y="2.3" width="7.6" height="12.4" rx="3.8" fill="url(#g-ser-2)" />
          {/* Estrías de agarre */}
          <path d="M-2.9 5.6 h5.8 M-2.9 8.8 h5.8 M-2.9 12 h5.8" stroke="#9f1239" strokeWidth="0.9" strokeLinecap="round" opacity="0.65" />
          {/* Brillo del mango */}
          <rect x="-2.6" y="3.2" width="1.4" height="10.6" rx="0.7" fill="#ffffff" opacity="0.3" />
        </g>
      </svg>
    ),
  },
  lineas: {
    // Tarjeta SIM telefónica 3D ultra limpia y centrada (sin líneas flotantes ni ruido)
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
