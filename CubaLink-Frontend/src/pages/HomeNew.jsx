import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
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
    color: 'bg-blue-50 text-blue-600',
    subs: ['Construcción', 'Carga', 'Limpieza', 'Oficina'],
  },
  {
    to: '/rentas', icon: 'home_work', title: 'Rentas Moscú', desc: 'Cuartos y apartamentos',
    color: 'bg-teal-50 text-teal-600',
    subs: ['Habitaciones', 'Estudios', '1 Habitación', 'Casas'],
  },
  {
    to: '/marketplace', icon: 'storefront', title: 'Marketplace', desc: 'Compra y venta',
    color: 'bg-amber-50 text-amber-600',
    subs: ['Teléfonos', 'Computadoras', 'Ropa', 'Vehículos'],
  },
  {
    to: '/viajes', icon: 'flight_takeoff', title: 'Viajes', desc: 'Paquetes Cuba ⇄ Rusia',
    color: 'bg-sky-50 text-sky-600',
    subs: ['Agencias', 'Carga de viaje', 'Pasajes'],
  },
  {
    to: '/remesas', icon: 'currency_exchange', title: 'Remesas', desc: 'Envío seguro a Cuba',
    color: 'bg-violet-50 text-violet-600',
    subs: ['Dinero', 'Recargas', 'Tasas del día'],
  },
  {
    to: '/confiables', icon: 'shield', title: 'Confiables', desc: 'Gente de confianza',
    color: 'bg-emerald-50 text-emerald-600',
    subs: ['Contratistas', 'Rentas', 'Remesas', 'Empresas'],
  },
  {
    to: '/empresas', icon: 'apartment', title: 'Empresas', desc: 'Aliados y vacantes',
    color: 'bg-indigo-50 text-indigo-600',
    subs: ['Aliados', 'Ofertas', 'Colaboración'],
  },
  {
    to: '/servicios', icon: 'handyman', title: 'Servicios', desc: 'Profesionales de la red',
    color: 'bg-rose-50 text-rose-600',
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

  const popularRentals = rentals.filter((r) => r.featured).slice(0, 4)
  const popularProducts = marketProducts.filter((p) => p.featured).slice(0, 4)
  const popularJobs = jobs.filter((j) => j.featured).slice(0, 4)

  const submitSearch = (e) => {
    e?.preventDefault()
    const target = SEARCH_TABS.find((t) => t.id === tab)?.to || '/empleos'
    navigate(target)
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* ===== HERO con buscador gigante (estilo Dubizzle) ===== */}
      <section className="relative bg-gradient-to-br from-brand-blue-deep via-primary to-brand-blue-deep text-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-60 h-60 rounded-full bg-brand-gold/30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
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
        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Categorías populares</h2>
            <p className="text-label-sm text-on-surface-variant mt-1">Explora lo que la comunidad ofrece</p>
          </div>
          <Link to="/comunidad" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors">
            Ver todo <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.to}
              className={`bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 premium-hover animate-fade-in-up delay-${Math.min((i % 4) * 100 + 100, 500)}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.color}`}>
                  <MaterialIcon name={c.icon} className="text-[22px]" />
                </span>
                <div>
                  <Link to={c.to} className="font-title-md text-title-md text-primary hover:text-brand-blue-deep transition-colors">
                    {c.title}
                  </Link>
                  <p className="text-[11px] text-on-surface-variant">{c.desc}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
                {c.subs.map((s) => (
                  <li key={s}>
                    <Link
                      to={c.to}
                      className="text-label-sm text-on-surface-variant hover:text-brand-blue-deep transition-colors flex items-center gap-1.5 group/sub"
                    >
                      <span className="w-1 h-1 rounded-full bg-outline group-hover/sub:bg-brand-gold transition-colors"></span>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={c.to}
                className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-blue-deep hover:text-brand-gold transition-colors"
              >
                Ver todo en {c.title} <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </Link>
            </div>
          ))}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularRentals.map((r) => (
            <RentCard key={r.id} rent={r} />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularProducts.map((p) => (
            <ProductCard key={p.id} product={p} isFavorite={false} onToggleFavorite={() => {}} onShare={() => {}} />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularJobs.map((j) => (
            <JobCard key={j.id} job={j} variant="featured" />
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
