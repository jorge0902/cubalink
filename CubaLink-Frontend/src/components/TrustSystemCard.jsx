import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'

export default function TrustSystemCard() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <Link
        to="/confiables"
        className="block bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group premium-hover"
        aria-label="Ver Sistema de Confianza - Personas y negocios verificados"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/30 blur-2xl"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-white/20 blur-2xl"></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Icon header */}
          <div className="flex items-start sm:items-center gap-4">
            <span 
              className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0"
              aria-hidden="true"
            >
              <MaterialIcon name="verified" className="text-3xl" />
            </span>
            <div>
              <h3 className="font-headline-md text-headline-md text-white">
                Sistema de Confianza
              </h3>
              <p className="opacity-90 text-[13px] sm:text-body-md text-white/90">
                Personas y negocios verificados por la comunidad.
                <span className="block sm:inline"> Conecta y haz negocios con mayor tranquilidad.</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <span 
            className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-title-md hover:bg-emerald-50 transition-colors whitespace-nowrap w-full sm:w-auto text-center"
            aria-label="Ver Confiables"
          >
            Ver confiables →
          </span>
        </div>
      </Link>
    </section>
  )
}