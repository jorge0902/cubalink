import MaterialIcon from './MaterialIcon'

// Tarjeta de empleo viva: imagen de cabecera con gradiente, etiquetas de color,
// hover con elevación. Dos variantes: "featured" (landing) y "list" (mercado).
export default function JobCard({ job, variant = 'list' }) {
  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
        <div className="relative h-36 overflow-hidden">
          {job.image ? (
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-blue-deep to-primary flex items-center justify-center">
              <MaterialIcon name={job.icon || 'work'} className="text-white/80 text-5xl" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <span
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-label-sm font-label-sm backdrop-blur ${
              job.type === 'Urgente'
                ? 'bg-red-500/90 text-white animate-pulse'
                : 'bg-white/90 text-primary'
            }`}
          >
            {job.type}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h4 className="font-title-md text-title-md text-primary mb-1 group-hover:text-brand-blue-deep transition-colors">
            {job.title}
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            {job.company} • {job.location}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
            <span className="text-brand-gold font-bold text-label-sm">{job.salary}</span>
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-label-sm hover:opacity-90 hover:shadow-md transition-all active:scale-95">
              Postular
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Variante "list" — mercado de empleos, con imagen lateral y más color
  return (
    <div className="bg-surface-container-lowest rounded-xl custom-shadow border border-outline-variant hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col sm:flex-row">
      <div className="relative sm:w-44 h-40 sm:h-auto overflow-hidden shrink-0">
        {job.image ? (
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-blue-deep to-primary flex items-center justify-center">
            <MaterialIcon name={job.icon || 'work'} className="text-white/80 text-5xl" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:bg-none"></div>
        <div className="absolute bottom-2 left-3 flex items-center gap-1.5 sm:static sm:absolute sm:top-3 sm:left-3 sm:bottom-auto">
          {job.logo ? (
            <img className="w-8 h-8 rounded-full object-cover border-2 border-white shadow" src={job.logo} alt={`Logo de ${job.company}`} />
          ) : (
            <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow">
              <MaterialIcon name={job.icon || 'work'} className="text-primary text-[16px]" />
            </span>
          )}
        </div>
      </div>
      <div className="flex-grow p-5">
        <div className="flex justify-between items-start mb-1 gap-3">
          <h3 className="font-title-md text-title-md text-primary group-hover:text-primary-container transition-colors">
            {job.title}
          </h3>
          <span className="font-label-sm text-label-sm text-secondary font-bold whitespace-nowrap">{job.salary}</span>
        </div>
        <p className="text-on-surface font-body-md text-body-md mb-3">
          {job.company} • {job.location}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full font-label-sm text-[11px] uppercase tracking-wider ${
                tag === 'Urgente'
                  ? 'bg-red-50 text-red-600 border border-red-200 animate-pulse'
                  : tag === 'Magazine'
                  ? 'bg-purple-50 text-purple-700 border border-purple-200'
                  : 'bg-surface-container text-primary'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-outline font-label-sm text-label-sm">{job.posted}</span>
          <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 group-hover:underline">
            Ver detalles
            <MaterialIcon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}