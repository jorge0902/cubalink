import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import SkyClouds from '../components/SkyClouds'
import RentCard from '../components/RentCard'
import ProductCard from '../components/ProductCard'
import JobCard from '../components/JobCard'
import { rentals } from '../data/rentals'
import { marketProducts } from '../data/marketplace'
import { jobs } from '../data/jobs'

// Categorías principales con subcategorías (estilo Dubizzle, adaptado a CubaLink)
const CATEGORIES = [
  {
    to: '/empleos', icon: 'work', title: 'Empleos', desc: 'Vacantes verificadas',
    borderAccent: 'border-blue-600', bgSoft: 'bg-blue-50', textAccent: 'text-blue-600', dotColor: 'bg-blue-600',
    subs: ['Construcción', 'Carga', 'Limpieza', 'Oficina'],
  },
  {
    to: '/rentas', icon: 'home_work', title: 'Rentas Moscú', desc: 'Cuartos y apartamentos',
    borderAccent: 'border-emerald-600', bgSoft: 'bg-emerald-50', textAccent: 'text-emerald-600', dotColor: 'bg-emerald-600',
    subs: ['Habitaciones', 'Estudios', '1 Habitación', 'Casas'],
  },
  {
    to: '/marketplace', icon: 'storefront', title: 'Marketplace', desc: 'Compra y venta',
    borderAccent: 'border-amber-500', bgSoft: 'bg-amber-50', textAccent: 'text-amber-600', dotColor: 'bg-amber-500',
    subs: ['Teléfonos', 'Computadoras', 'Ropa', 'Vehículos'],
  },
  {
    to: '/viajes', icon: 'flight_takeoff', title: 'Viajes', desc: 'Paquetes Cuba ⇄ Rusia',
    borderAccent: 'border-sky-500', bgSoft: 'bg-sky-50', textAccent: 'text-sky-600', dotColor: 'bg-sky-500',
    subs: ['Agencias', 'Carga de viaje', 'Pasajes'],
  },
  {
    to: '/remesas', icon: 'currency_exchange', title: 'Remesas', desc: 'Envío seguro a Cuba',
    borderAccent: 'border-violet-500', bgSoft: 'bg-violet-50', textAccent: 'text-violet-600', dotColor: 'bg-violet-500',
    subs: ['Dinero', 'Recargas', 'Tasas del día'],
  },
  {
    to: '/confiables', icon: 'shield', title: 'Confiables', desc: 'Gente de confianza',
    borderAccent: 'border-teal-600', bgSoft: 'bg-teal-50', textAccent: 'text-teal-600', dotColor: 'bg-teal-600',
    subs: ['Contratistas', 'Rentas', 'Remesas', 'Empresas'],
  },
  {
    to: '/empresas', icon: 'apartment', title: 'Empresas', desc: 'Aliados y vacantes',
    borderAccent: 'border-indigo-500', bgSoft: 'bg-indigo-50', textAccent: 'text-indigo-600', dotColor: 'bg-indigo-500',
    subs: ['Aliados', 'Ofertas', 'Colaboración'],
  },
  {
    to: '/servicios', icon: 'handyman', title: 'Servicios', desc: 'Profesionales de la red',
    borderAccent: 'border-rose-500', bgSoft: 'bg-rose-50', textAccent: 'text-rose-600', dotColor: 'bg-rose-500',
    subs: ['Reparaciones', 'Diseño', 'Trámites', 'Clases'],
  },
]

// Pestañas del buscador (estilo Dubizzle: filtran la búsqueda por sección)
const SEARCH_TABS = [
  { id: 'todo', label: 'Todo', to: '/empleos' },
  { id: 'empleos', label: 'Empleos', to: '/empleos' },
  { id: 'rentas', label: 'Rentas', to: '/rentas' },
  { id: 'marketplace', label: 'Marketplace', to: '/marketplace' },
  { id: 'viajes', label: 'Viajes', to: '/viajes' },
  { id: 'remesas', label: 'Remesas', to: '/remesas' },
  { id: 'confiables', label: 'Confiables', to: '/confiables' },
]

export default function HomeNew() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('todo')
  const [query, setQuery] = useState('')

  const popularRentals = rentals.filter((r) => r.featured).slice(0, 5)
  const popularProducts = marketProducts.filter((p) => p.featured).slice(0, 4)
  const popularJobs = jobs.filter((j) => j.featured).slice(0, 5)

  const submitSearch = (e) => {
    e?.preventDefault()
    const target = SEARCH_TABS.find((t) => t.id === tab)?.to || '/empleos'
    navigate(target)
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* ===== HERO con cielo nocturno animado (nubes de algodón) + buscador gigante ===== */}
      <section className="relative text-white pt-24 pb-20 px-6 overflow-hidden">
        {/* Fondo animado: cielo nocturno + nubes en 2 capas canvas */}
        <SkyClouds variant="night" />

        {/* Brillo sutil sobre el cielo nocturno */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-60 h-60 rounded-full bg-sky-400/10 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        {/* Contenido por encima del lienzo */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-5 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-soft-pulse"></span>
            La red de los cubanos en Moscú
          </span>
          <h1 className="font-display-lg text-[30px] leading-[1.15] sm:text-4xl md:text-display-lg mb-4 animate-fade-in-up delay-100">
            Trabajo, renta, remesa y esa mano que hace falta
          </h1>
          <p className="font-body-lg text-[15px] sm:text-body-lg mb-8 opacity-90 max-w-xl mx-auto animate-fade-in-up delay-200">
            Conectamos a la comunidad cubana en Rusia con oportunidades reales y gente de confianza.
          </p>

          {/* Buscador gigante con pestañas */}
          <form
            onSubmit={submitSearch}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 text-left animate-fade-in-up delay-300"
          >
            {/* Pestañas de sección */}
            <div className="flex flex-wrap gap-1 px-2 pt-2 pb-3 border-b border-slate-100 justify-center sm:justify-start">
              {SEARCH_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-label-sm font-label-sm transition-all ${
                    tab === t.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            {/* Campo + botón */}
            <div className="flex items-center gap-2 p-2">
              <MaterialIcon name="search" className="text-on-surface-variant ml-2 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué estás buscando? Ej: albañil, cuarto, remesa..."
                className="flex-1 min-w-0 py-2.5 text-[14px] sm:text-primary placeholder:text-on-surface-variant/60 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-gold text-primary w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center hover:shadow-lg hover:bg-brand-gold/90 active:scale-95 transition-all btn-shine flex-shrink-0"
                aria-label="Buscar"
              >
                <MaterialIcon name="arrow_forward" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-label-sm opacity-80 animate-fade-in-up delay-400">
            +10,000 profesionales cubanos ya se han unido · <span className="text-brand-gold font-semibold">Moscú, Rusia</span>
          </p>
        </div>
      </section>

      {/* ===== CATEGORÍAS con subcategorías (estilo Dubizzle) ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Franja de encabezado — cabecera visual del área */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 rounded-full mb-8 animate-fade-in-up"></div>

        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Categorías populares</h2>
            <p className="text-label-sm text-on-surface-variant mt-1">Explora lo que la comunidad ofrece</p>
          </div>
          <Link to="/comunidad" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors">
            Ver todo <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>

        {/* Contenedor con fondo dinámico: azul pastel → verde menta + textura palmas/metro */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-100 via-teal-50 to-emerald-100 border border-sky-200/50 p-4 md:p-6 animate-fade-in-up delay-100">
          {/* Patrón de textura sutil: palmas + líneas de metro de Moscú */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke="#0f766e" strokeWidth="2">
              {/* Línea circular del metro de Moscú */}
              <circle cx="1010" cy="110" r="70" />
              <circle cx="1010" cy="110" r="52" strokeDasharray="6 8" />
              {/* Radiales del metro */}
              <path d="M1010 40 L1010 -20 M1010 180 L1010 230 M940 110 L890 90 M1080 110 L1130 90 M955 55 L915 25 M1065 55 L1105 25 M955 165 L915 195 M1065 165 L1105 195" />
              {/* Línea curva estilo ramal */}
              <path d="M120 420 C 260 380 340 260 480 240 C 620 220 700 120 830 90" strokeWidth="3" />
              <path d="M200 430 C 320 400 380 300 500 280" strokeWidth="1.5" />
            </g>
            {/* Hojas de palma estilizadas */}
            <g fill="#0f766e">
              <path d="M1050 330 C 1030 290 1060 260 1100 250 C 1105 285 1085 315 1050 330 Z" />
              <path d="M1120 350 C 1110 320 1130 300 1160 295 C 1162 325 1145 345 1120 350 Z" />
              <path d="M140 150 C 120 120 140 95 175 88 C 178 120 160 142 140 150 Z" />
              <path d="M200 165 C 190 140 205 125 232 120 C 234 146 220 160 200 165 Z" />
              <path d="M60 320 C 50 300 60 285 82 280 C 84 305 72 315 60 320 Z" />
              <path d="M700 380 C 692 365 700 352 718 348 C 720 368 710 376 700 380 Z" />
            </g>
          </svg>

          {/* Decoraciones culturales minimalistas (desktop) */}
          {/* Almendrón — coche clásico cubano, cerca de Viajes */}
          <svg
            className="hidden lg:block absolute top-1/3 right-1 w-20 opacity-20 text-rose-400 pointer-events-none"
            viewBox="0 0 120 60"
            aria-hidden="true"
          >
            <path d="M6 42 C6 36 12 32 20 30 C30 20 48 16 62 16 L78 16 C92 18 104 26 110 34 C116 38 118 44 118 48 C118 52 114 54 108 54 L16 54 C10 54 6 50 6 42 Z" fill="currentColor" />
            <circle cx="30" cy="52" r="9" fill="currentColor" />
            <circle cx="30" cy="52" r="4" fill="#fff" opacity="0.7" />
            <circle cx="94" cy="52" r="9" fill="currentColor" />
            <circle cx="94" cy="52" r="4" fill="#fff" opacity="0.7" />
            <rect x="20" y="22" width="38" height="6" rx="3" fill="#fff" opacity="0.55" />
          </svg>
          {/* Samovar — cerca de Rentas Moscú */}
          <svg
            className="hidden lg:block absolute top-0 left-1/4 -translate-y-1/3 w-12 opacity-20 text-amber-500 pointer-events-none"
            viewBox="0 0 60 80"
            aria-hidden="true"
          >
            <path d="M10 20 L50 20 L44 62 C42 70 18 70 16 62 Z" fill="currentColor" />
            <path d="M14 62 L46 62 L46 68 L14 68 Z" fill="currentColor" />
            <rect x="20" y="8" width="20" height="12" rx="4" fill="currentColor" />
            <circle cx="30" cy="6" r="4" fill="currentColor" />
            <path d="M22 14 C 18 14 14 12 12 8 M38 14 C 42 14 46 12 48 8" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M18 32 L42 32" stroke="#fff" strokeWidth="3" opacity="0.5" />
          </svg>
          {/* Maracas — cerca de Marketplace */}
          <svg
            className="hidden lg:block absolute bottom-0 right-1/3 translate-y-1/3 w-14 opacity-20 text-violet-400 pointer-events-none"
            viewBox="0 0 80 60"
            aria-hidden="true"
          >
            <path d="M14 4 C22 -4 34 -4 38 6 L34 40 C33 46 26 50 20 50 C14 50 9 46 8 40 Z" fill="currentColor" />
            <rect x="14" y="48" width="8" height="12" rx="3" fill="currentColor" />
            <path d="M48 0 C56 -8 68 -8 72 2 L68 36 C67 42 60 46 54 46 C48 46 43 42 42 36 Z" fill="currentColor" />
            <rect x="48" y="44" width="8" height="12" rx="3" fill="currentColor" />
            <path d="M18 14 L32 14 M17 22 L31 22" stroke="#fff" strokeWidth="2" opacity="0.5" />
            <path d="M52 10 L66 10 M51 18 L65 18" stroke="#fff" strokeWidth="2" opacity="0.5" />
          </svg>

          {/* Grid compacto: 2 cols móvil, 4 cols desktop */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.to}
                to={c.to}
                className={`group relative bg-white rounded-xl border border-outline-variant/60 border-b-2 ${c.borderAccent} shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden animate-fade-in-up delay-${Math.min((i % 4) * 100 + 100, 500)} transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]`}
              >
                {/* Franja de color que se expande hacia arriba al hover */}
                <div className={`absolute inset-x-0 bottom-0 h-0 group-hover:h-full ${c.bgSoft} transition-all duration-300 pointer-events-none opacity-60`}></div>

                <div className="relative px-3 py-3 md:px-4 md:py-3.5">
                  {/* Fila superior: círculo con icono + título */}
                  <div className="flex items-center gap-2.5">
                    <span className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${c.bgSoft} group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <MaterialIcon name={c.icon} fill className={`text-[20px] md:text-[22px] ${c.textAccent}`} />
                    </span>
                    <div className="min-w-0">
                      <span className={`block font-semibold text-sm leading-tight truncate ${c.textAccent}`}>
                        {c.title}
                      </span>
                      <span className="block text-[10px] text-on-surface-variant truncate">{c.desc}</span>
                    </div>
                  </div>

                  {/* Píldoras de subcategorías — una línea */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {c.subs.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className={`px-1.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-medium ${c.bgSoft} ${c.textAccent} whitespace-nowrap`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULARES EN RENTAS ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-md text-[19px] sm:text-headline-md text-primary flex items-center gap-2">
            <MaterialIcon name="home_work" className="text-teal-600 text-2xl" /> Populares en Rentas
          </h2>
          <Link to="/rentas" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap">
            Ver todos <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {popularRentals.map((r) => (
            <RentCard key={r.id} rent={r} variant="compact" />
          ))}
        </div>
      </section>

      {/* ===== POPULARES EN MARKETPLACE ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-md text-[19px] sm:text-headline-md text-primary flex items-center gap-2">
            <MaterialIcon name="storefront" className="text-amber-600 text-2xl" /> Populares en Marketplace
          </h2>
          <Link to="/marketplace" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap">
            Ver todos <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {popularProducts.map((p) => (
            <ProductCard key={p.id} product={p} isFavorite={false} onToggleFavorite={() => {}} onShare={() => {}} variant="compact" />
          ))}
        </div>
      </section>

      {/* ===== POPULARES EN EMPLEOS ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-md text-[19px] sm:text-headline-md text-primary flex items-center gap-2">
            <MaterialIcon name="work" className="text-blue-600 text-2xl" /> Populares en Empleos
          </h2>
          <Link to="/empleos" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap">
            Ver todos <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {popularJobs.map((j) => (
            <JobCard key={j.id} job={j} variant="compact" />
          ))}
        </div>
      </section>

      {/* ===== BANNER SISTEMA DE CONFIANZA ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <Link
          to="/confiables"
          className="block bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group premium-hover"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/30 blur-2xl"></div>
            <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-white/20 blur-2xl"></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <MaterialIcon name="verified" className="text-3xl" />
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md">Sistema de Confianza</h3>
                <p className="opacity-90 text-[13px] sm:text-body-md">Personas y negocios verificados por la comunidad. ¿Con quién haces negocios sin preocuparte?</p>
              </div>
            </div>
            <span className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-title-md hover:bg-emerald-50 transition-colors whitespace-nowrap w-full sm:w-auto text-center">
              Ver Confiables →
            </span>
          </div>
        </Link>
      </section>

      {/* ===== BANNER DESCARGA LA APP ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-brand-blue-deep to-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-56 h-56 rounded-full bg-brand-gold/40 blur-3xl"></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                <MaterialIcon name="smartphone" className="text-3xl" />
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md">CubaLink en tu bolsillo</h3>
                <p className="opacity-90 text-[13px] sm:text-body-md">Descarga la app y lleva la red profesional contigo a donde vayas.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/manifest.json"
                download
                className="flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-xl font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all"
              >
                <MaterialIcon name="android" className="text-[18px]" /> Google Play
              </a>
              <a
                href="/manifest.json"
                download
                className="flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-xl font-label-sm text-label-sm hover:bg-white/10 active:scale-95 transition-all"
              >
                <MaterialIcon name="apple" className="text-[18px]" /> App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-28 sm:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '+10,000', label: 'Profesionales', icon: 'groups' },
            { num: '+3,500', label: 'Empleos publicados', icon: 'work' },
            { num: '+1,500', label: 'Negocios verificados', icon: 'verified' },
            { num: '98%', label: 'Resuelven su trámite', icon: 'thumb_up' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 text-center premium-hover"
            >
              <span className="w-10 h-10 mx-auto mb-3 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
                <MaterialIcon name={s.icon} className="text-[20px]" />
              </span>
              <p className="font-display-md text-display-md text-brand-blue-deep">{s.num}</p>
              <p className="text-label-sm text-on-surface-variant mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
