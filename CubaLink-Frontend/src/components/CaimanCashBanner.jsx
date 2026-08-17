import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'

// Caiman Cash logo - copied from Caiman Cash dist assets
import caimanLogo from '../assets/caiman/logo-C_SwFFml.png'

export default function CaimanCashBanner() {
  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-lg">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-full translate-x-12 -translate-y-12" />
        
        <div className="relative p-4 sm:p-6 md:p-8">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={caimanLogo} 
                alt="Caiman Cash" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-full">
                  REMESA DIRECTA
                </span>
                <h2 className="font-title-md text-title-md text-primary">
                  Caiman Cash
                </h2>
              </div>
              
              <h3 className="font-label-sm text-label-sm text-on-surface-variant mb-2">
                Envía tu remesa de forma directa
              </h3>
              
              <p className="text-body-sm text-body-sm text-on-surface-variant/80 mb-4">
                Gestiona tu envío a Cuba de forma sencilla desde Cubalink con Caiman Cash.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  to="https://caimancash.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue-deep text-white px-5 py-2.5 rounded-xl font-label-sm text-label-sm font-bold hover:shadow-lg hover:bg-brand-blue-deep/90 active:scale-95 transition-all"
                >
                  Enviar con Caiman Cash
                  <MaterialIcon name="open_in_new" className="text-[16px]" />
                </Link>
                
                <div className="flex items-center gap-2 text-xs text-on-surface-variant/60">
                  <MaterialIcon name="schedule" className="text-[14px]" />
                  <span>Proceso guiado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}