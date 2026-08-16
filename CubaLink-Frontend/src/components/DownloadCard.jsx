import { useState, useRef } from 'react'
import MaterialIcon from './MaterialIcon'
import ShareFallback from './ShareFallback'

// Configuración - estos valores deben ser actualizados cuando exista la APK real
const APK_CONFIG = {
  // TODO: Reemplazar con la URL real cuando la APK exista
  // Por ahora, enlazamos al manifest como placeholder
  APK_DOWNLOAD_URL: '/cubalink.apk',
  PUBLIC_URL: 'https://cubalink.vercel.app',
}

export default function DownloadCard() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isCopying, setIsCopying] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const shareButtonRef = useRef(null)

  const handleDownload = (e) => {
    e.preventDefault()
    
    // Si existe la APK real, navegar a la URL de descarga
    // Por ahora, mostramos el manifest como fallback
    const link = document.createElement('a')
    link.href = APK_CONFIG.APK_DOWNLOAD_URL
    link.download = 'cubalink.apk'
    link.click()
    
    // Feedback visual
    setToastMessage('Descarga iniciada')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const handleShareClick = async (e) => {
    e.preventDefault()
    
    if (!navigator.share) {
      // Fallback: mostrar menú de compartir manual
      setShowShareMenu(true)
      return
    }

    try {
      setIsSharing(true)
      await navigator.share({
        title: 'CubalLink',
        text: 'Descubre CubalLink, la red de cubanos y nuestra comunidad.',
        url: APK_CONFIG.PUBLIC_URL,
      })
      setShowShareMenu(false)
    } catch (error) {
      // El usuario canceló el share o hubo error, mostrar fallback
      setShowShareMenu(true)
    } finally {
      setIsSharing(false)
    }
  }

  const handleCopyLink = async () => {
    try {
      setIsCopying(true)
      await navigator.clipboard.writeText(APK_CONFIG.PUBLIC_URL)
      setToastMessage('¡Enlace copiado!')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (error) {
      console.error('Error al copiar:', error)
      setToastMessage('No se pudo copiar')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } finally {
      setIsCopying(false)
      setShowShareMenu(false)
    }
  }

  // Close share menu when clicking outside
  const handleOutsideClick = (e) => {
    if (shareButtonRef.current && !shareButtonRef.current.contains(e.target)) {
      setShowShareMenu(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      {/* Toast Notification */}
      {showToast && (
        <div 
          className="fixed bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-xl shadow-xl z-50 animate-fade-in-up"
          role="alert"
          aria-live="polite"
        >
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Share Menu Fallback */}
      {showShareMenu && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
            onClick={() => setShowShareMenu(false)}
            aria-label="Cerrar menú"
          />
          <ShareFallback 
            url={APK_CONFIG.PUBLIC_URL}
            onCopy={handleCopyLink}
            onClose={() => setShowShareMenu(false)}
          />
        </>
      )}

      <div className="bg-gradient-to-r from-brand-blue-deep to-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-56 h-56 rounded-full bg-brand-gold/40 blur-3xl"></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Icon / Visual Element */}
          <div className="flex items-start sm:items-center gap-4">
            <span 
              className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <MaterialIcon name="smartphone" className="text-3xl" />
            </span>
            <div>
              <h3 className="font-headline-md text-headline-md text-white">
                CubalLink en tu bolsillo
              </h3>
              <p className="opacity-90 text-[13px] sm:text-body-md text-white/90">
                Descarga la app y lleva tu comunidad contigo a donde vayas.
              </p>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Primary Button: Descargar APK */}
            <a
              href="/manifest.json"
              download
              onClick={handleDownload}
              className="flex items-center justify-center gap-3 bg-brand-gold text-primary px-7 py-3.5 rounded-xl font-label-sm font-bold shadow-lg shadow-brand-gold/30 hover:bg-brand-gold/90 hover:shadow-xl active:scale-95 transition-all btn-shine whitespace-nowrap"
              aria-label="Descargar aplicación CubalLink para Android"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-[22px] h-[22px]" 
                aria-hidden="true"
              >
                <path d="M6 9.5 a6 6 0 0 1 12 0 v8 a1.5 1.5 0 0 1 -1.5 1.5 h-9 A1.5 1.5 0 0 1 6 17.5 z" />
                <path d="M6 11 h12 v5 h-12 z" fill="#ffffff" opacity="0.35" />
                <circle cx="9.8" cy="13.8" r="1.1" />
                <circle cx="14.2" cy="13.8" r="1.1" />
                <path d="M8 3.5 l-1.6 -1.6 M16 3.5 l1.6 -1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M5.5 9.5 l-2 -1 M18.5 9.5 l2 -1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              </svg>
              <span>Descargar APK</span>
              <span className="text-xs opacity-70 hidden sm:inline">Android • APK</span>
            </a>

            {/* Secondary Button: Compartir App */}
            <button
              ref={shareButtonRef}
              onClick={handleShareClick}
              disabled={isSharing || isCopying}
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur text-white px-5 py-3.5 rounded-xl font-label-sm font-medium hover:bg-white/25 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Compartir CubalLink"
            >
              <MaterialIcon 
                name={isSharing ? "hourglass_top" : "share"} 
                className="text-lg"
              />
              <span>Compartir app</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}