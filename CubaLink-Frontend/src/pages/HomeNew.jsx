import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import SkyClouds from '../components/SkyClouds'
import CategoryGrid3D from '../components/CategoryGrid3D'
import ListingCarousel from '../components/ListingCarousel'
import { rentals } from '../data/rentals'
import { marketProducts } from '../data/marketplace'
import { jobs } from '../data/jobs'

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

  const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

  const popularRentals = rentals.filter((r) => r.featured).slice(0, 5)
  const popularProducts = marketProducts.filter((p) => p.featured).slice(0, 5)
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

      {/* ===== CATEGORÍAS POPULARES (grid Dubizzle con iconos 3D) ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-14">
        <div className="flex items-center justify-between mb-6 animate-fade-in-up">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Categorías populares</h2>
            <p className="text-label-sm text-on-surface-variant mt-1">Explora lo que la comunidad ofrece</p>
          </div>
          <Link to="/comunidad" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap">
            Ver todo <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <CategoryGrid3D />
      </section>

      {/* ===== POPULARES EN RENTAS — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Rentas"
        icon={<MaterialIcon name="home_work" className="text-teal-600" />}
        to="/rentas"
        items={popularRentals.map((r) => ({
          favKey: `rent-${r.id}`,
          img: r.photos[0],
          price: `${fmtPrice(r.price)} ₽`,
          title: r.title,
          location: r.metro,
          available: r.available === 'inmediato',
        }))}
      />

      {/* ===== POPULARES EN MARKETPLACE — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Marketplace"
        icon={<MaterialIcon name="storefront" className="text-amber-600" />}
        to="/marketplace"
        items={popularProducts.map((p) => ({
          favKey: `prod-${p.id}`,
          img: p.photos[0],
          price: `${fmtPrice(p.price)} ₽`,
          title: p.title,
          location: p.location,
          available: true,
        }))}
      />

      {/* ===== POPULARES EN EMPLEOS — carrusel horizontal Dubizzle ===== */}
      <ListingCarousel
        title="Populares en Empleos"
        icon={<MaterialIcon name="work" className="text-blue-600" />}
        to="/empleos"
        items={popularJobs.map((j) => ({
          favKey: `job-${j.id}`,
          img: j.image,
          price: `${j.salary}${j.salaryNote || ''}`,
          title: `${j.title} · ${j.company}`,
          location: j.location,
          available: true,
        }))}
      />

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

      {/* ===== BANNER DESCARGA LA APP (APK) ===== */}
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
            {/* Botón único de alto contraste: Descargar APK (icono Android inline, sin fuentes externas) */}
            <a
              href="/manifest.json"
              download
              className="flex items-center gap-3 bg-brand-gold text-primary px-7 py-3.5 rounded-xl font-label-sm text-label-sm font-bold shadow-lg shadow-brand-gold/30 hover:bg-brand-gold/90 hover:shadow-xl active:scale-95 transition-all btn-shine whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]" aria-hidden="true">
                {/* Robot de Android */}
                <path d="M6 9.5 a6 6 0 0 1 12 0 v8 a1.5 1.5 0 0 1 -1.5 1.5 h-9 A1.5 1.5 0 0 1 6 17.5 z" />
                <path d="M6 11 h12 v5 h-12 z" fill="#ffffff" opacity="0.35" />
                <circle cx="9.8" cy="13.8" r="1.1" />
                <circle cx="14.2" cy="13.8" r="1.1" />
                <path d="M8 3.5 l-1.6 -1.6 M16 3.5 l1.6 -1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M5.5 9.5 l-2 -1 M18.5 9.5 l2 -1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              </svg>
              Descargar APK
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-28 sm:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { num: '+10,000', label: 'Profesionales', icon: 'groups' },
            { num: '+3,500', label: 'Empleos publicados', icon: 'work' },
            { num: '+1,500', label: 'Negocios verificados', icon: 'verified' },
            { num: '98%', label: 'Resuelven su trámite', icon: 'thumb_up' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant px-3 py-5 md:p-6 text-center premium-hover flex flex-col items-center justify-center min-w-0"
            >
              <span className="w-10 h-10 mb-3 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center flex-shrink-0">
                <MaterialIcon name={s.icon} className="text-[20px]" />
              </span>
              {/* clamp(): la cifra nunca desborda la tarjeta en móviles */}
              <p className="font-display-md text-[clamp(1.15rem,5.5vw,1.75rem)] leading-none text-brand-blue-deep font-bold text-center w-full break-words">
                {s.num}
              </p>
              <p className="text-[11px] sm:text-label-sm text-on-surface-variant mt-2 text-center leading-snug w-full">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
