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
      {/* ==================== DESKTOP: Horizontal layout (CLEAN COLORS) ==================== */}
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
                className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3"
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
                    <div className="text-[#FFFFFF] text-sm font-semibold leading-tight">Rápido</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Tu dinero llega rápidamente</div>
                  </div>
                  <div className="sm:hidden text-[#FFFFFF] text-xs font-semibold">Rápido</div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#FFFFFF] text-sm font-semibold leading-tight">Seguro</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Transacciones protegidas</div>
                  </div>
                  <div className="sm:hidden text-[#FFFFFF] text-xs font-semibold">Seguro</div>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:border-[#59D6B5]/50 hover:bg-white/10">
                  <MaterialIcon name="trending_up" className="text-[#59D6B5] text-[20px]" />
                  <div className="hidden sm:block">
                    <div className="text-[#FFFFFF] text-sm font-semibold leading-tight">Buenas tasas</div>
                    <div className="text-[#CBD5E1] text-xs leading-tight">Más valor para tu envío</div>
                  </div>
                  <div className="sm:hidden text-[#FFFFFF] text-xs font-semibold">Buenas tasas</div>
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

      {/* ==================== MOBILE: Full-width layout (FIXED OVERFLOW & POSITIONING) ==================== */}
      <div className="md:hidden">
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-1 * (100vw - 100%) / 2)',
            marginRight: 'calc(-1 * (100vw - 100%) / 2)',
            backgroundImage: `url(${caimanBgMobile})`,
            backgroundSize: 'contain', // FIX: Show FULL image, no cropping
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px',
            minHeight: '600px',
            zIndex: 1,
            backgroundColor: '#06131B'
          }}
        >
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'linear-gradient(180deg, rgba(6,19,28,0.5) 0%, rgba(6,19,28,0.2) 40%, rgba(6,19,28,0) 70%, rgba(6,19,28,0.6) 100%)',
          }}></div>

          {/* Content layer - Adjusted padding and layout to fit inside the visual card of the image */}
          <div style={{ 
            position: 'relative', 
            zIndex: 10, 
            padding: '24px 20px', 
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            {/* Branding */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#59D6B5', boxShadow: '0 0 10px rgba(89,214,181,0.8)' }}></span>
                <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 800, letterSpacing: '-0.045em' }}>Caiman</span>
                <span style={{ color: '#59D6B5', fontSize: '16px', fontWeight: 800, letterSpacing: '-0.045em' }}>Cash</span>
              </div>
              <div style={{ color: '#59D6B5', fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '3px', marginLeft: '14px' }}>
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
              background: 'rgba(89,214,181,0.1)',
              border: '1px solid rgba(89,214,181,0.2)',
              color: '#59D6B5',
              fontSize: '8px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              <span>✦</span>
              <span>ENVÍA DINERO A CUBA</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              color: '#FFFFFF',
              fontSize: '26px',
              fontWeight: 900,
              lineHeight: '1.1',
              letterSpacing: '-0.04em',
              margin: '0 0 8px 0',
              textShadow: '0 3px 20px rgba(0,0,0,0.4)',
            }}>
              Envía dinero
              <br />
              <span style={{ color: '#59D6B5' }}>a Cuba.</span>
            </h1>

            {/* Subtitle 1 */}
            <h2 style={{
              color: '#59D6B5',
              fontWeight: 800,
              fontSize: '17px',
              marginBottom: '8px',
            }}>
              Rápido y seguro.
            </h2>

            {/* Subtitle 2 */}
            <p style={{
              color: '#CBD5E1',
              fontSize: '13px',
              fontWeight: 500,
              lineHeight: '1.4',
              marginBottom: '16px',
              maxWidth: '260px'
            }}>
              A solo <span style={{ color: '#FFFFFF', fontWeight: 700 }}>2 clicks</span> de distancia.
            </p>

            {/* Benefits Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              marginBottom: '160px' 
            }}>
              <div style={{
                padding: '8px 6px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.15)',
                background: 'rgba(4,17,24,0.6)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '4px' }}>⚡</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800 }}>Rápido</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2' }}>Envío instantáneo</div>
              </div>
              <div style={{
                padding: '8px 6px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.15)',
                background: 'rgba(4,17,24,0.6)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '4px' }}>🛡️</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800 }}>Seguro</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2' }}>Operación protegida</div>
              </div>
              <div style={{
                padding: '8px 6px',
                borderRadius: '12px',
                border: '1px solid rgba(89,214,181,0.15)',
                background: 'rgba(4,17,24,0.6)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#59D6B5', fontSize: '14px', marginBottom: '4px' }}>💸</div>
                <div style={{ color: '#FFFFFF', fontSize: '9px', fontWeight: 800 }}>Tasas</div>
                <div style={{ color: '#94A3B8', fontSize: '6px', lineHeight: '1.2' }}>Mejor valor</div>
              </div>
            </div>

            {/* CTA Button - Positioned precisely inside the banner image bottom area */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              zIndex: 20
            }}>
              <div style={{
                padding: '10px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, rgba(5,20,27,0.5), rgba(5,20,27,0.8))',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                textAlign: 'center'
              }}>
                <Link
                  to="https://caimancash.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full min-h-[50px] rounded-[15px] font-extrabold text-base flex items-center justify-center gap-2 transition-all hover:scale-[0.98]"
                  style={{
                    backgroundColor: '#59D6B5',
                    color: '#06131B',
                    textDecoration: 'none',
                    boxShadow: '0 10px 20px rgba(89,214,181,0.3)'
                  }}
                >
                  Enviar remesa →
                  <MaterialIcon name="arrow_forward" className="text-[16px]" />
                </Link>

                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <MaterialIcon name="shield_lock" className="text-[#59D6B5] text-[14px]" />
                  <span style={{ color: '#94A3B8', fontSize: '11px', fontWeight: 500 }}>
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
