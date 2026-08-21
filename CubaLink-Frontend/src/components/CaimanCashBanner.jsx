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
      {/* Image uses background-size: contain so the entire composition is visible */}
      {/* FIX 1: 100% viewport width, no margins */}
      {/* FIX 2: All text inside card bounds, word-break for overflow */}
      {/* FIX 3: No pink colors - all text #FFFFFF */}
      {/* FIX 4: CTA positioned at bottom, inside card bounds */}
      <div className="md:hidden">
        <div
          className="caiman-mobile-banner"
          style={{
            backgroundImage: `url(${caimanBgMobile})`,
          }}
        >
          {/* Overlay for text readability */}
          <div className="caiman-mobile-overlay"></div>

          {/* Content - all text INSIDE the banner image bounds */}
          <div className="relative z-10 px-4 py-4">
            {/* Brand - Caiman Cash + POWERED BY CUBALINK */}
            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D6B5] animate-pulse" />
                <span className="caiman-mobile-white-text text-lg font-extrabold caiman-mobile-text">Caiman</span>
                <span className="caiman-mobile-turquoise-text text-lg font-extrabold caiman-mobile-text">Cash</span>
              </div>
              <div className="text-[#59D6B5] text-[10px] font-extrabold tracking-widest uppercase mt-0.5 ml-5 caiman-mobile-text">
                POWERED BY CUBALINK
              </div>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#59D6B5]/8 border border-[#59D6B5]/16 mb-2 caiman-mobile-text">
              <span className="text-[#59D6B5]">✦</span>
              <span className="text-[8px] font-extrabold tracking-widest uppercase caiman-mobile-white-text">
                ENVÍA DINERO A CUBA
              </span>
            </div>

            {/* Main Title - Envía dinero / a Cuba. */}
            <h1 className="caiman-mobile-white-text text-2xl font-extrabold caiman-mobile-text" style={{ lineHeight: '0.94' }}>
              Envía dinero
              <br />
              <span className="caiman-mobile-turquoise-text">a Cuba.</span>
            </h1>

            {/* Rápido y seguro */}
            <h2 className="caiman-mobile-turquoise-text font-extrabold text-lg mb-1 caiman-mobile-text">
              Rápido y seguro.
            </h2>

            {/* Subtitle - 2 clicks */}
            <p className="caiman-mobile-subtitle-gray text-xs font-medium mb-3 caiman-mobile-text" style={{ lineHeight: '1.35' }}>
              A solo <span className="font-bold caiman-mobile-white-text">2 clicks</span> de distancia.
            </p>

            {/* Benefits - compact grid */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-2 py-1.5 text-center">
                <div className="caiman-mobile-turquoise-text text-sm mb-0.5">⚡</div>
                <div className="caiman-mobile-white-text text-[9px] font-extrabold caiman-mobile-text">Rápido</div>
                <div className="caiman-mobile-gray-text text-[6px] caiman-mobile-text">Tu dinero llega rápidamente</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-2 py-1.5 text-center">
                <div className="caiman-mobile-turquoise-text text-sm mb-0.5">🛡️</div>
                <div className="caiman-mobile-white-text text-[9px] font-extrabold caiman-mobile-text">Seguro</div>
                <div className="caiman-mobile-gray-text text-[6px] caiman-mobile-text">Transacciones protegidas</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-2 py-1.5 text-center">
                <div className="caiman-mobile-turquoise-text text-sm mb-0.5">💸</div>
                <div className="caiman-mobile-white-text text-[9px] font-extrabold caiman-mobile-text">Buenas tasas</div>
                <div className="caiman-mobile-gray-text text-[6px] caiman-mobile-text">Más valor para tu envío</div>
              </div>
            </div>

            {/* Flex spacer to push CTA to bottom of banner */}
            <div className="flex-1 min-h-[10px]"></div>

            {/* CTA Button - positioned at bottom, inside banner bounds */}
            <div className="caiman-mobile-cta-area">
              <Link
                to="https://caimancash.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="caiman-mobile-button group w-full min-h-[50px] rounded-[15px] font-extrabold text-base flex items-center justify-center gap-2 caiman-mobile-text"
                aria-label="Enviar remesa con Caiman Cash - Se abre en nueva pestaña"
              >
                Enviar remesa →
                <MaterialIcon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 mt-2">
                <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[14px]" />
                <span className="caiman-mobile-gray-text text-xs font-medium caiman-mobile-text">
                  Fácil, rápido y sin complicaciones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
