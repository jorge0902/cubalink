import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import caimanLogo from '../assets/caiman/logo-removebg-preview.png'

export default function CaimanCashBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-outline-variant bg-gradient-to-br from-[#071b35] via-[#0b294d] to-[#10385f] shadow-lg mb-8 group" aria-label="Caiman Cash - Remesa directa">
      {/* Decorative accents */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center justify-center bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10 w-32 h-20 sm:w-40 sm:h-24 transition-transform group-hover:scale-105 duration-300">
            <img 
              src={caimanLogo} 
              alt="Caiman Cash" 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Info Area */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(244,200,74,0.6)]" />
              <span className="text-brand-gold text-[11px] font-extrabold tracking-widest uppercase">
                Remesa Directa
              </span>
            </div>
            
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3 tracking-tight">
              Envía tu remesa de forma directa
            </h2>
            
            <p className="text-white/70 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              Gestiona tu envío a Cuba de forma sencilla desde Cubalink con <strong className="text-white font-semibold">Caiman Cash</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-white/50 text-[11px] font-medium">
              <span className="flex items-center gap-1">
                <MaterialIcon name="check_circle" className="text-brand-gold text-[14px]" />
                Proceso guiado
              </span>
              <span className="flex items-center gap-1">
                <MaterialIcon name="check_circle" className="text-brand-gold text-[14px]" />
                Remesa directa
              </span>
              <span className="flex items-center gap-1">
                <MaterialIcon name="check_circle" className="text-brand-gold text-[14px]" />
                Integrado en Cubalink
              </span>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col items-center md:items-end gap-3 min-w-[200px]">
            <Link
              to="https://caimancash.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-[#071b35] px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-brand-gold/90 hover:-translate-y-0.5 active:scale-95 shadow-lg hover:shadow-brand-gold/20"
            >
              Enviar con Caiman Cash
              <MaterialIcon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-white/40 text-[10px] font-medium italic">
              Comienza tu remesa ahora
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}