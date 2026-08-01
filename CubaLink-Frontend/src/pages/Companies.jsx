import MaterialIcon from '../components/MaterialIcon'
import { companies } from '../data/companies'

export default function Companies() {
  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <section className="mb-12 text-center md:text-left">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Empresas Aliadas</h2>
        <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
          Conecta con las organizaciones que están impulsando la contratación de talento cubano a nivel global.
          Explora sus culturas, misiones y vacantes abiertas.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {companies.map((company) => (
          <div 
            key={company.id} 
            className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant custom-shadow hover:border-primary transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
                {company.logo ? (
                  <img className="w-full h-full object-cover" src={company.logo} alt={company.name} />
                ) : (
                  <MaterialIcon name={company.icon || 'business'} className="text-primary text-3xl" />
                )}
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm font-label-sm">
                {company.industry}
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-primary mb-2 group-hover:text-brand-blue-deep transition-colors">
              {company.name}
            </h3>
            <p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">
              {company.description}
            </p>
            <div className="flex flex-col gap-3 pt-6 border-t border-slate-50">
              <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Ubicación:</span>
                <span className="text-primary font-semibold">{company.location}</span>
              </div>
              <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Tamaño:</span>
                <span className="text-primary font-semibold">{company.size} emp.</span>
              </div>
              <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                <span>Vacantes:</span>
                <span className="text-primary font-semibold">{company.openRoles} abiertas</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Ver Perfil de Empresa
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
