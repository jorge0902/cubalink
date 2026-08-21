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
      {/* ==================== DESKTOP: Horizontal background-image layout (UNCHANGED) ==================== */}
      <div className="hidden md:block" style={{
        backgroundImage: `url(${caimanBgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '1.25rem'
      }}>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex md:items-center md:justify-between gap-8 md:gap-12 min-h-[280px] lg:min-h-[320px]">
            <div className="flex-1 min-w-0 md:max-w-2xl text-left px-6 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
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

              <h2
                id="caiman-hero-title"
                className="text-[#F8FC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
              >
                Envía dinero a Cuba.
              </h2>

              <p className="text-[#59D6B5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Rápido y seguro.
              </p>

              <p className="text-[#E5E7EB] text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-lg">
                A solo <span className="font-bold text-white">2 clicks</span> de distancia.
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="speed" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Rápido</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Tu dinero llega rápidamente</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Rápido</div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Seguro</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Transacciones protegidas</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Seguro</div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="trending_up" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#F8FC] text-sm font-semibold leading-tight">Buenas tasas</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Más valor para tu envío</div>
                  </div>
                  <div className="sm:hidden text-[#F8FC] text-xs font-semibold">Buenas tasas</div>
                </div>
              </div>

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
            <div className="hidden md:block w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0" aria-hidden="true">
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE: Full-width vertical banner ==================== */}
      {/* 4 FIX APPLIED: */}
      {/* 1. width: 100vw (no margins) */}
      {/* 2. All text inside card with word-break */}
      {/* 3. #FFFFFF instead of pink */}
      {/* 4. CTA at bottom inside card */}
      <div className="md:hidden">
        {/* Banner container: 100vw width, full mobile image visible with cover */}
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-1 * (100vw - 100%) / 2)',
            marginRight: 'calc(-1 * (100vw - 100%) / 2)',
            backgroundImage: `url(${caimanBgMobile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            minHeight: '580px',
            zIndex: 1,
          }}
        >
          {/* Subtle overlay for text readability (NOT darkening the image) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'linear-gradient(180deg, rgba(2,8,12,0.45) 0%, rgba(2,8,12,0.35) 35%, rgba(2,8,12,0.25) 55%, rgba(2,8,12,0.05) 75%, rgba(2,8,12,0.0) 100%)',
          }}></div>

          {/* Content layer - all text/CTA INSIDE the banner */}
          <div style={{ position: 'relative', zIndex: 10, padding: '20px 16px 16px', width: '100%' }}>
            {/* Branding: Caiman Cash + POWERED BY CUBALINK */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59D6B5', boxShadow: '0 0 10px rgba(89,214,181,0.8)' }}></span>
                <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 800, letterSpacing: '-0.045em', wordBreak: 'break-word' }}>Caiman</span>
                <span style={{ color: '#59D6B5', fontSize: '16px', fontWeight: 800, letterSpacing: '-0.045em', wordBreak: 'break-word' }}>Cash</span>
              </div>
              <div style={{ color: '#59D6B5', fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '3px', marginLeft: '14px', wordBreak: 'break-all' }}>
                POWERED BY CUBALINK
              </div>
            </div>

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '999px',
              background: 'rgba(89,214,181,0.08)',
              border: '1px solid rgba(89,214,181,0.16)',
              color: '#59D6B5',
              fontSize: '8px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              wordBreak: 'break-all'
            }}>
              <span>✦</span>
              <span>ENVÍA DINERO A CUBA</span>
            </div>

            {/* Main Title: "Envía dinero" / "a Cuba." */}
            <h1 style={{
              color: '#FFFFFF',
              fontSize: '28px',
              fontWeight: 900,
              lineHeight: '0.94',
              letterSpacing: '-0.048em',
              margin: '6px 0',
              textShadow: '0 3px 25px rgba(0,0,0,0.35)',
              wordBreak: 'break-word'
            }}>
              Envía dinero
              <br />
              <span style={{ color: '#59D6B5' }}>a Cuba.</span>
            </h1>

            {/* Subtitle: Rápido y seguro */}
            <h2 style={{
              color: '#59D6B5',
              fontWeight: 800,
              fontSize: '18px',
              marginBottom: '6px',
              wordBreak: 'break-word'
            }}>
              Rápido y seguro.
            </h2>

            {/* Subtitle: 2 clicks */}
            <p style={{
              color: '#CBD5E1',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: '1.35',
              maxWidth: '280px',
              marginBottom: '12px',
              wordBreak: 'break-word'
            }}>
              A solo <span style={{ color: '#FFFFFF', fontWeight: 700 }}>2 clicks</span> de distancia.
            </p>

            {/* Benefits Grid - 3 benefits */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '6px',
              maxWidth: '380px',
              marginBottom: '180px'
            }}>
              {/* Rápido */}
              <div style={{
                padding: '8px 7px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.14)',
                background: 'rgba(4,17,24,0.55)',
                backdropFilter: 'blur(9px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '3px' }}>⚡</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800, wordBreak: 'break-all' }}>Rápido</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2', wordBreak: 'break-all' }}>Tu dinero llega rápidamente</div>
              </div>
              {/* Seguro */}
              <div style={{
                padding: '8px 7px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.14)',
                background: 'rgba(4,17,24,0.55)',
                backdropFilter: 'blur(9px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '3px' }}>🛡️</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800, wordBreak: 'break-all' }}>Seguro</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2', wordBreak: 'break-all' }}>Transacciones protegidas</div>
              </div>
              {/* Buenas tasas */}
              <div style={{
                padding: '8px 7px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.14)',
                background: 'rgba(4,17,24,0.55)',
                backdropFilter: 'blur(9px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '3px' }}>💸</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800, wordBreak: 'break-all' }}>Buenas tasas</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2', wordBreak: 'break-all' }}>Más valor para tu envío</div>
              </div>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1, minHeight: '10px' }}></div>

            {/* CTA Button - absolutely positioned at bottom, inside banner */}
            <div className="caiman-mobile-cta-area">
              <div style={{
                padding: '9px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, rgba(5,20,27,0.45), rgba(5,20,27,0.75))',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)'
              }}>
                <Link
                  to="https://caimancash.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group caiman-mobile-button w-full min-h-[50px] rounded-[15px] font-extrabold text-base flex items-center justify-center gap-2 caiman-mobile-text"
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
      </div>
    </section>
  )
}
