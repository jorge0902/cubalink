import MaterialIcon from './MaterialIcon'

// Tarjeta de empleo con dos variantes que replican los diseños originales:
// - "featured": tarjetas de "Empleos Destacados" de la landing
// - "list": tarjetas del marketplace de empleos
export default function JobCard({ job, variant = 'list' }) {
  if (variant === 'featured') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all group">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center">
            <MaterialIcon name={job.icon || 'work'} className="text-primary" />
          </div>
          <span
            className={`px-3 py-1 rounded-full text-label-sm font-label-sm ${
              job.type === 'Hybrid'
                ? 'bg-secondary-container/20 text-on-secondary-container'
                : 'bg-primary/10 text-primary'
            }`}
          >
            {job.type}
          </span>
        </div>
        <h4 className="font-title-md text-title-md text-primary mb-1 group-hover:text-brand-blue-deep transition-colors">
          {job.title}
        </h4>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          {job.company} • {job.location}
        </p>
        <div className="flex items-center justify-between border-t border-slate-50 pt-4">
          <span className="text-brand-gold font-bold text-label-sm">{job.salary}</span>
          <button className="bg-primary text-white px-4 py-2 rounded text-label-sm hover:opacity-90 transition-opacity">
            Postular
          </button>
        </div>
      </div>
    )
  }

  // Variante "list" — marketplace de empleos
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl custom-shadow border border-outline-variant hover:border-primary transition-all group cursor-pointer">
      <div className="flex gap-4 items-start">
        <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden flex-shrink-0">
          {job.logo ? (
            <img className="w-full h-full object-cover" src={job.logo} alt={`Logo de ${job.company}`} />
          ) : (
            <MaterialIcon name={job.icon || 'work'} className="text-primary text-[32px]" />
          )}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-title-md text-title-md text-primary group-hover:text-primary-container transition-colors">
              {job.title}
            </h3>
            <span className="font-label-sm text-label-sm text-secondary font-bold">{job.salary}</span>
          </div>
          <p className="text-on-surface font-body-md text-body-md mb-3">
            {job.company} • {job.location}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full font-label-sm text-[11px] uppercase tracking-wider ${
                  tag === 'Featured'
                    ? 'bg-secondary-container/20 text-secondary'
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
              View Details
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
