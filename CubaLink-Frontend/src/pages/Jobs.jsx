import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import JobCard from '../components/JobCard'
import { jobs, jobFilters, topLocations, mapImage } from '../data/jobs'

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState('Todas las Chambas')
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  // Filtrado por categoría (en español) y texto de búsqueda
  const filtered = jobs.filter((job) => {
    const matchesCategory =
      activeFilter === 'Todas las Chambas' || job.category === activeFilter
    const matchesQuery =
      query.trim() === '' ||
      `${job.title} ${job.company} ${job.location}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* ===== Búsqueda y marca ===== */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Chamba</span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2 mb-2">
                Trabajo fresco para cubanos en Rusia
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Ofertas de hoy, directo y sin cuento. De gente de confianza que paga seguro y al kilo.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-sm text-label-sm">
              <MaterialIcon name="verified" fill className="text-[18px]" />
              <span>Oportunidades verificadas hoy</span>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MaterialIcon name="search" className="text-outline" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-28 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              placeholder="Busca por trabajo, empresa o zona..."
              type="text"
            />
            <button className="absolute right-3 top-2.5 bottom-2.5 px-6 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity active:scale-95">
              Buscar
            </button>
          </div>
        </section>

        {/* ===== Filtros ===== */}
        <section className="mb-8 overflow-x-auto">
          <div className="flex items-center gap-3 whitespace-nowrap pb-2">
            {jobFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-label-sm text-label-sm transition-all ${
                  activeFilter === filter
                    ? 'active-pill shadow-md border border-primary'
                    : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* ===== Grid: Trabajos + Barra lateral ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Lista de trabajos */}
          <div className="lg:col-span-8 space-y-4">
            {filtered.slice(0, visibleCount).map((job) => (
              <JobCard key={job.id} job={job} variant="list" />
            ))}
            {filtered.length === 0 && (
              <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant text-center">
                <MaterialIcon name="search_off" className="text-outline text-4xl mb-3" />
                <p className="font-title-md text-title-md text-primary mb-1">No se encontraron chambas</p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Prueba con otro filtro o término de búsqueda.
                </p>
              </div>
            )}
            {visibleCount < filtered.length && (
              <button
                onClick={() => setVisibleCount((c) => c + 3)}
                className="w-full py-4 border-2 border-dashed border-outline-variant text-outline rounded-xl hover:bg-surface-container-low hover:text-primary hover:border-primary transition-all font-label-sm text-label-sm"
              >
                Ver más oportunidades
              </button>
            )}
          </div>

          {/* Barra lateral */}
          <aside className="hidden lg:block lg:col-span-4 space-y-gutter">
            {/* Completar perfil */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant custom-shadow">
              <h4 className="font-title-md text-title-md text-primary mb-4">Completa tu perfil</h4>
              <div className="w-full bg-surface-container h-2 rounded-full mb-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[75%]"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-6">
                Completa tu perfil para que te encuentren 3 veces más rápido.
              </p>
              <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                Terminar perfil
              </button>
            </div>

            {/* Alertas de empleo */}
            <div className="bg-primary text-on-primary p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-title-md text-title-md mb-2">Alertas de chamba</h4>
                <p className="font-body-md text-body-md opacity-80 mb-4 text-white">
                  Recibe las mejores ofertas cada mañana directo en tu correo, pa'lante.
                </p>
                <input
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 mb-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="tucorreo@ejemplo.com"
                  type="email"
                />
                <button className="w-full py-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm font-bold">
                  Suscribirme
                </button>
              </div>
            </div>

            {/* Zonas populares */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant custom-shadow">
              <h4 className="font-title-md text-title-md text-primary mb-4">Zonas con más chamba</h4>
              <div className="rounded-lg h-40 bg-surface-container overflow-hidden relative group">
                <img className="w-full h-full object-cover" src={mapImage} alt="Mapa de oportunidades en Moscú" />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-white text-primary rounded-full font-label-sm text-label-sm shadow-md">
                    Abrir mapa
                  </button>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {topLocations.map((loc) => (
                  <li
                    key={loc.city}
                    className="flex justify-between text-label-sm font-label-sm text-on-surface-variant"
                  >
                    <span>{loc.city}</span>
                    <span>{loc.roles} chambas</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}