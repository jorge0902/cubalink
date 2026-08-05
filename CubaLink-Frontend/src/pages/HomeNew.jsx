import { Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'

export default function HomeNew() {
  const categories = [
    { to: '/empleos', icon: 'work', title: 'Empleos', desc: 'Vacantes verificadas', color: 'bg-blue-50 text-brand-blue-deep' },
    { to: '/confiables', icon: 'shield', title: 'Confiables', desc: 'Gente segura', color: 'bg-emerald-50 text-emerald-600' },
    { to: '/marketplace', icon: 'storefront', title: 'Marketplace', desc: 'Compra y venta', color: 'bg-amber-50 text-amber-600' },
    { to: '/viajes', icon: 'flight_takeoff', title: 'Viajes', desc: 'Pasajes y carga', color: 'bg-sky-50 text-sky-600' },
    { to: '/remesas', icon: 'currency_exchange', title: 'Remesas', desc: 'Envío seguro', color: 'bg-violet-50 text-violet-600' },
    { to: '/comunidad', icon: 'hub', title: 'Comunidad', desc: 'Red de apoyo', color: 'bg-rose-50 text-rose-600' },
    { to: '/rentas', icon: 'home_work', title: 'Rentas', desc: 'Cuartos y casas', color: 'bg-teal-50 text-teal-600' },
    { to: '/servicios', icon: 'build', title: 'Servicios', desc: 'Profesionales', color: 'bg-indigo-50 text-indigo-600' }
  ]

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero con buscador */}
      <section className="relative bg-gradient-to-br from-brand-blue-deep via-primary to-brand-blue-deep text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-60 h-60 rounded-full bg-brand-gold/30 blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-display-lg text-display-lg mb-4 leading-tight">
            CubaLink Rusia
          </h1>
          <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl mx-auto">
            Trabajo, renta, remesas y esa mano que hace falta cuando estás lejos de casa.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="¿Qué estás buscando? Ej: albañil, cuarto, remesa..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-on-surface placeholder:text-on-surface-variant/60 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
              <MaterialIcon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            </div>
            <Link
              to="/registro"
              className="bg-brand-gold text-primary px-8 py-4 rounded-xl font-title-md shadow-lg hover:shadow-xl active:scale-95 transition-all whitespace-nowrap"
            >
              Crear cuenta gratis
            </Link>
          </div>
          <p className="mt-6 text-label-sm opacity-80">+10k profesionales cubanos ya se han unido</p>
        </div>
      </section>

      {/* Categorías tipo Dubizzle */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">Explora por categoría</h2>
          <Link to="/comunidad" className="text-brand-blue-deep font-bold flex items-center gap-1 hover:text-brand-gold transition-colors">
            Ver todo <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 flex flex-col items-start gap-3 hover:border-brand-blue-deep hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.color} transition-transform group-hover:scale-110`}>
                <MaterialIcon name={c.icon} className="text-2xl" />
              </span>
              <div>
                <h3 className="font-title-md text-title-md text-primary group-hover:text-brand-blue-deep transition-colors">{c.title}</h3>
                <p className="text-label-sm text-on-surface-variant">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner confianza */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <Link
          to="/confiables"
          className="block bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/30 blur-2xl"></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <MaterialIcon name="verified" className="text-3xl" />
              </span>
              <div>
                <h3 className="font-headline-lg text-headline-lg">Sistema de Confianza</h3>
                <p className="opacity-90">Personas y negocios verificados por la comunidad. ¿Con quién haces negocios sin preocuparte?</p>
              </div>
            </div>
            <span className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-title-md hover:bg-emerald-50 transition-colors whitespace-nowrap">
              Ver Confiables →
            </span>
          </div>
        </Link>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '+10k', label: 'Profesionales' },
            { num: '+3k', label: 'Empleos publicados' },
            { num: '+1.5k', label: 'Negocios verificados' },
            { num: '98%', label: 'Resuelven su trámite' }
          ].map((s) => (
            <div key={s.label} className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 text-center hover:shadow-md transition-shadow">
              <p className="font-display-md text-display-md text-brand-blue-deep">{s.num}</p>
              <p className="text-label-sm text-on-surface-variant mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
