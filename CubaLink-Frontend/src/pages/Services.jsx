import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import { services, serviceCategories } from '../data/services'

export default function Services() {
  const [activeCat, setActiveCat] = useState('Todos')

  const filtered = services.filter(s => activeCat === 'Todos' || s.category === activeCat)

  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <section className="mb-12 text-center md:text-left">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Marketplace de Servicios</h2>
        <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
          Accede a consultorías, mentorías y servicios profesionales ofrecidos por la comunidad de CubaLink.
          Calidad verificada y talento global.
        </p>
      </section>

      {/* Filtros de Categoría */}
      <div className="flex gap-3 overflow-x-auto pb-6 mb-8">
        {serviceCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full font-label-sm text-label-sm transition-all ${
              activeCat === cat 
              ? 'bg-primary text-white shadow-md' 
              : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map(service => (
          <div 
            key={service.id} 
            className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant premium-shadow hover:border-primary transition-all group flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <MaterialIcon name={service.icon} className="text-3xl" />
              </div>
              <div className="flex items-center gap-1 bg-secondary-container/20 text-secondary px-2 py-1 rounded-full text-[10px] font-bold uppercase">
                <MaterialIcon name="verified" className="text-[12px]" fill />
                {service.verified ? 'Verificado' : 'Socio'}
              </div>
            </div>
            
            <h3 className="font-title-md text-title-md text-primary mb-1 group-hover:text-brand-blue-deep transition-colors">
              {service.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <img className="w-6 h-6 rounded-full object-cover" src={service.avatar || 'https://via.placeholder.com/40'} alt={service.provider} />
              <span className="text-on-surface-variant font-body-md text-body-md text-[14px]">{service.provider}</span>
            </div>

            <p className="text-on-surface-variant font-body-md text-body-md mb-6 flex-grow">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] rounded border border-outline-variant">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-brand-gold font-bold text-title-md">{service.price}</span>
                <span className="text-on-surface-variant text-label-sm font-label-sm ml-1">{service.priceNote}</span>
              </div>
              <div className="flex items-center gap-1 text-secondary font-bold text-label-sm">
                <MaterialIcon name="star" fill className="text-[14px]" />
                {service.rating} ({service.reviews})
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Reservar Servicio
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
