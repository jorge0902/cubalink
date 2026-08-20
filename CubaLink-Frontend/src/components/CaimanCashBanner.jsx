import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import caimanBgDesktop from '../assets/caiman/caiman-cash-bg-definitive.png'
import caimanBgMobile from '../assets/caiman/caiman-cash-bg-mobile.png'

export default function CaimanCashBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-outline-variant/30 mb-8 animate-fade-in-up"
      aria-labelledby="caiman-hero-title"
    >
      {/* ===== DESKTOP: Horizontal layout with background-image (UNCHANGED) ===== */}
      <div className="hidden md:block" style={{ backgroundImage: `url(${caimanBgDesktop})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '1.25rem' }}>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex md:items-center md:justify-between gap-8 md:gap-12 min-h-[280px] lg:min-h-[320px]">
            {/* Left Content Area - texto a la izquierda */}
            <div className="flex-1 min-w-0 md:max-w-2xl text-left px-6 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
              {/* Brand identifier */}
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
                className="text-[#F8FC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
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
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Rápido</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Tu dinero llega rápidamente</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Rápido</div>
                </div>

                {/* Benefit 2: Seguro */}
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Seguro</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Transacciones protegidas</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Seguro</div>
                </div>

                {/* Benefit 3: Buenas tasas */}
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="trending_up" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Buenas tasas</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Más valor para tu envío</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Buenas tasas</div>
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

            {/* Right Visual Area - espacio reservado para el caimán/logo en el fondo */}
            <div className="hidden md:block w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0" aria-hidden="true">
              {/* Espacio reservado - el fondo ya tiene la visual del caimán */}
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE: Full-width vertical layout with new mobile-exclusive image ===== */}
      {/* FIX 1: 100% viewport width, no margins, fully responsive */}
      {/* FIX 2: All text uses CSS custom classes with word-break */}
      {/* FIX 3: No pink colors, all text #FFFFFF or palette colors */}
      {/* FIX 4: CTA positioned at bottom inside image bounds */}
      <div className="md:hidden caiman-mobile-banner">
        <div
          className="caiman-mobile-banner"
          style={{
            backgroundImage: `url(${caimanBgMobile})`,
          }}
        >
          {/* Content overlay - all text and CTA INSIDE the banner image bounds */}
          <div className="relative z-10 px-4 py-4 pb-28">
            {/* Brand identifier */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                <span className="caiman-mobile-white-text text-lg font-bold tracking-tight caiman-mobile-text">Caiman</span>
                <span className="caiman-mobile-turquoise-text text-lg font-bold tracking-tight caiman-mobile-text">Cash</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D6B5]" />
                <span className="caiman-mobile-turquoise-text text-[10px] font-semibold tracking-widest uppercase caiman-mobile-text">
                  POWERED BY CUBALINK
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2 id="caiman-hero-title-mobile" className="caiman-mobile-white-text text-2xl font-extrabold leading-tight tracking-tight mb-1 caiman-mobile-text">
              Envía dinero
            </h2>
            <h2 className="caiman-mobile-white-text text-2xl font-extrabold leading-tight tracking-tight mb-1 caiman-mobile-text">
              a Cuba.
            </h2>
            <p className="caiman-mobile-turquoise-text text-xl font-extrabold leading-tight mb-2 caiman-mobile-text">
              Rápido y seguro.
            </p>

            {/* Subtitle */}
            <p className="caiman-mobile-subtitle-gray text-sm font-medium leading-relaxed mb-3 caiman-mobile-text">
              A solo <span className="font-bold caiman-mobile-white-text">2 clicks</span> de distancia.
            </p>

            {/* Benefits Row - horizontal, compact and within card */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-14">
              {/* Benefit 1: Rápido */}
              <div className="flex items-center gap-1 px-2 py-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 min-w-[110px]">
                <MaterialIcon name="speed" className="caiman-mobile-turquoise-text text-[14px] flex-shrink-0" />
                <div>
                  <div className="caiman-mobile-white-text text-[11px] font-semibold leading-tight caiman-mobile-text">Rápido</div>
                  <div className="caiman-mobile-gray-text text-[9px] leading-tight caiman-mobile-text max-w-[100px]">Tu dinero llega rápidamente</div>
                </div>
              </div>

              {/* Benefit 2: Seguro */}
              <div className="flex items-center gap-1 px-2 py-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 min-w-[110px]">
                <MaterialIcon name="shield_lock" className="caiman-mobile-turquoise-text text-[14px] flex-shrink-0" />
                <div>
                  <div className="caiman-mobile-white-text text-[11px] font-semibold leading-tight caiman-mobile-text">Seguro</div>
                  <div className="caiman-mobile-gray-text text-[9px] leading-tight caiman-mobile-text max-w-[100px]">Transacciones protegidas</div>
                </div>
              </div>

              {/* Benefit 3: Buenas tasas */}
              <div className="flex items-center gap-1 px-2 py-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 min-w-[110px]">
                <MaterialIcon name="trending_up" className="caiman-mobile-turquoise-text text-[14px] flex-shrink-0" />
                <div>
                  <div className="caiman-mobile-white-text text-[11px] font-semibold leading-tight caiman-mobile-text">Buenas tasas</div>
                  <div className="caiman-mobile-gray-text text-[9px] leading-tight caiman-mobile-text max-w-[100px]">Más valor para tu envío</div>
                </div>
              </div>
            </div>

            {/* CTA Button - positioned at bottom of image, fully inside banner bounds */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-stretch gap-2 px-4">
              <Link
                to="https://caimancash.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 caiman-mobile-button px-6 py-3.5 rounded-[22px] font-bold text-base transition-all duration-200 hover:bg-[#6DE8C7] hover:-translate-y-0.5 active:scale-[0.98] shadow-xl shadow-[#59D6B5]/30 hover:shadow-[#59D6B5]/40 focus:outline-none focus:ring-4 focus:ring-[#59D6B5]/50 focus:ring-offset-2 focus:ring-offset-[#06131B] caiman-mobile-text"
                aria-label="Enviar remesa con Caiman Cash - Se abre en nueva pestaña"
              >
                Enviar remesa
                <MaterialIcon name="arrow_forward" className="text-[20px] transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 caiman-mobile-gray-text text-xs font-medium caiman-mobile-text">
                <MaterialIcon name="shield_lock" className="caiman-mobile-turquoise-text text-[14px]" />
                <span>Fácil, rápido y sin complicaciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
