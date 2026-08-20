import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import caimanBg from '../assets/caiman/caiman-cash-bg-definitive.png'

// Estilos CSS-in-JS para el banner - sin librerías extra
const bannerStyles = {
  section: {
    position: 'relative',
    backgroundImage: `url(${caimanBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '1.25rem', // rounded-2xl
    border: '1px solid rgba(226, 232, 240, 0.15)',
    overflow: 'hidden',
    marginBottom: '2rem', // mb-8
    minHeight: '320px',
    // Desktop: horizontal layout
    // Mobile: stacked
  },
  container: {
    position: 'relative',
    zIndex: 1,
    padding: '3rem 1.5rem', // py-12 px-6
    maxWidth: '1200px',
    margin: '0 auto',
    // Flex layout for horizontal desktop
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '320px',
    // Responsive handled via media queries in CSS classes
  },
  // These will be applied via className with Tailwind
}

export default function CaimanCashBanner() {
  return (
    <section 
      className="relative overflow-hidden rounded-2xl border border-outline-variant/30 mb-8 min-h-[320px] md:min-h-[280px] lg:min-h-[320px] animate-fade-in-up"
      style={{
        backgroundImage: `url(${caimanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby="caiman-hero-title"
    >
      {/* NO overlay oscuro - la imagen se ve limpia */}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          {/* Left Content Area - texto a la izquierda */}
          <div className="flex-1 min-w-0 md:max-w-2xl text-left">
            {/* Brand identifier - solo si no está en la imagen */}
            <div className="mb-6 md:mb-8">
              <span className="text-white/60 text-xs sm:text-sm font-medium tracking-widest uppercase">
                Caiman Cash
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D6B5]" />
                <span className="text-[#59D6B5] text-[10px] font-semibold tracking-widest uppercase">
                  POWERED BY CUBALINK
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2 
              id="caiman-hero-title"
              className="text-[#F8FAFC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
            >
              Envía dinero a Cuba.
            </h2>
            
            <p className="text-[#59D6B5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
              Rápido y seguro.
            </p>

            {/* Subtitle */}
            <p className="text-[#E5E7EB] text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-lg">
              A solo <span className="font-bold text-white">2 clicks</span> de distancia.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
              {/* Benefit 1: Rápido */}
              <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                <MaterialIcon name="speed" className="text-[#59D6B5] text-[20px]" />
                <div className="hidden sm:block">
                  <div className="text-[#F8FAFC] text-sm font-semibold leading-tight">Rápido</div>
                  <div className="text-[#CBD5E1] text-xs leading-tight">Tu dinero llega rápidamente</div>
                </div>
                <div className="sm:hidden text-[#F8FAFC] text-xs font-semibold">Rápido</div>
              </div>

              {/* Benefit 2: Seguro */}
              <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[20px]" />
                <div className="hidden sm:block">
                  <div className="text-[#F8FAFC] text-sm font-semibold leading-tight">Seguro</div>
                  <div className="text-[#CBD5E1] text-xs leading-tight">Transacciones protegidas</div>
                </div>
                <div className="sm:hidden text-[#F8FAFC] text-xs font-semibold">Seguro</div>
              </div>

              {/* Benefit 3: Buenas tasas */}
              <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                <MaterialIcon name="trending_up" className="text-[#59D6B5] text-[20px]" />
                <div className="hidden sm:block">
                  <div className="text-[#F8FAFC] text-sm font-semibold leading-tight">Buenas tasas</div>
                  <div className="text-[#CBD5E1] text-xs leading-tight">Más valor para tu envío</div>
                </div>
                <div className="sm:hidden text-[#F8FAFC] text-xs font-semibold">Buenas tasas</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="https://caimancash.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#59D6B5] text-[#06131B] px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-200 hover:bg-[#6DE8C7] hover:-translate-y-0.5 active:scale-[0.98] shadow-xl shadow-[#59D6B5]/30 hover:shadow-[#59D6B5]/40 focus:outline-none focus:ring-4 focus:ring-[#59D6B5]/50 focus:ring-offset-2 focus:ring-offset-[#06131B]"
                aria-label="Enviar remesa con Caiman Cash - Se abre en nueva pestaña"
              >
                Enviar remesa
                <MaterialIcon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
              </Link>
              
              <span className="text-[#A7B8B5] text-sm md:text-base font-medium italic hidden sm:inline self-center">
                Fácil, rápido y sin complicaciones
              </span>
            </div>
          </div>

          {/* Right Visual Area - espacio para el caimán/logo en el fondo */}
          {/* En desktop: el fondo ya tiene la tarjeta/logo a la derecha */}
          {/* En móvil: no mostramos nada extra, el fondo se ve completo */}
          <div className="hidden md:block w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0" aria-hidden="true">
            {/* Espacio reservado - el fondo ya tiene la visual del caimán */}
          </div>
        </div>
      </div>
    </section>
  )
}