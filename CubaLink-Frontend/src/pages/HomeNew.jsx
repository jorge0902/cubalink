import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import SkyClouds from '../components/SkyClouds'
import CategoryGrid3D from '../components/CategoryGrid3D'
import ListingCarousel from '../components/ListingCarousel'
import TrustSystemCard from '../components/TrustSystemCard'
import DownloadCard from '../components/DownloadCard'
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

      {/* ===== BANNER SISTEMA DE CONFIANZA (NUEVO COMPONENTE) ===== */}
      <TrustSystemCard />

      {/* ===== BANNER DESCARGA LA APP (NUEVO COMPONENTE) ===== */}
      <DownloadCard />

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