import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import caimanBgDesktop from '../assets/caiman/caiman-cash-bg-definitive.png'
import bannerTelefono from '../assets/caiman/banner-telefono.jpg'

export default function CaimanCashBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-outline-variant/30 mb-8 animate-fade-in-up"
      aria-labelledby="caiman-hero-title"
    >
      {/* ==================== DESKTOP: compact horizontal layout ==================== */}
      <div className="hidden md:block" style={{
        backgroundImage: `url(${caimanBgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '1.25rem'
      }}>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-12">
          <div className="flex md:items-center md:justify-between gap-8 min-h-[230px] lg:min-h-[250px]">
            <div className="flex-1 min-w-0 max-w-xl text-left py-9 md:py-10">
              <div className="mb-4">
                <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                  Caiman Cash
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59D6B5]" />
                  <span className="text-[#59D6B5] text-[9px] font-semibold tracking-widest uppercase">
                    POWERED BY CUBALINK
                  </span>
                </div>
              </div>

              <h2
                id="caiman-hero-title"
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-2"
              >
                Envía dinero a Cuba.
              </h2>
              <p className="text-[#59D6B5] text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 tracking-tight">
                Rápido y seguro.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MaterialIcon name="speed" className="text-[#59D6B5] text-[18px]" />
                  <span className="text-white text-xs font-semibold hidden sm:inline">Rápido</span>
                  <span className="text-[#CBD5E1] text-[11px] hidden lg:inline">· envío instantáneo</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[18px]" />
                  <span className="text-white text-xs font-semibold hidden sm:inline">Seguro</span>
                  <span className="text-[#CBD5E1] text-[11px] hidden lg:inline">· operación protegida</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MaterialIcon name="trending_up" className="text-[#59D6B5] text-[18px]" />
                  <span className="text-white text-xs font-semibold hidden sm:inline">Buenas tasas</span>
                  <span className="text-[#CBD5E1] text-[11px] hidden lg:inline">· mejor valor</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="https://caimancash.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-[#59D6B5] text-[#06131B] px-7 py-3 rounded-xl font-bold text-base transition-all duration-200 hover:bg-[#6DE8C7] hover:-translate-y-0.5 active:scale-[0.98] shadow-lg shadow-[#59D6B5]/30 focus:outline-none focus:ring-4 focus:ring-[#59D6B5]/50 focus:ring-offset-2 focus:ring-offset-[#06131B]"
                  aria-label="Enviar remesa con Caiman Cash - Se abre en nueva pestaña"
                >
                  Enviar remesa
                  <MaterialIcon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[#A7B8B5] text-sm font-medium italic hidden lg:inline">
                  A solo <span className="font-bold text-white">2 clicks</span> de distancia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE: banner horizontal compacto ==================== */}
      <div className="md:hidden">
        <div
          className="relative overflow-hidden rounded-2xl flex items-center"
          style={{
            backgroundImage: `url(${bannerTelefono})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#050b14',
            minHeight: '200px'
          }}
        >
          {/* Legibilidad hacia la izquierda (texto+botón sobre el fondo oscuro) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(5,11,20,0.9) 0%, rgba(5,11,20,0.55) 45%, rgba(5,11,20,0.15) 70%, rgba(5,11,20,0) 100%)',
              zIndex: 1
            }}
          />

          <div className="relative z-10 w-full flex flex-col items-start justify-center gap-3 p-5 pr-14 max-w-[78%]">
            <p className="text-white text-[16px] font-extrabold leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
              Envía dinero a Cuba,
              <br />
              <span className="text-[#59D6B5]">rápido y seguro.</span>
            </p>
            <p className="text-[#CBD5E1] text-[11px]">
              A solo <span className="text-white font-bold">2 clicks</span> de distancia.
            </p>
            <Link
              to="https://caimancash.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 bg-[#59D6B5] text-[#06131B] px-5 py-2.5 rounded-lg font-extrabold text-[13px] transition-all active:scale-[0.97] shadow-lg shadow-[#59D6B5]/40 whitespace-nowrap"
            >
              Enviar
              <MaterialIcon name="arrow_forward" className="text-[15px] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}