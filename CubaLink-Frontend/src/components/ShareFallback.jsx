import MaterialIcon from './MaterialIcon'

export default function ShareFallback({ url, onCopy, onClose }) {
  const handleCopyLink = () => {
    if (onCopy) onCopy()
  }

  const shareViaWhatsApp = () => {
    const text = 'Descubre CubalLink, la red de cubanos y nuestra comunidad.'
    const waUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    if (onClose) onClose()
  }

  const shareViaTelegram = () => {
    const text = 'Descubre CubalLink, la red de cubanos y nuestra comunidad.'
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    window.open(tgUrl, '_blank', 'noopener,noreferrer')
    if (onClose) onClose()
  }

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-surface-container rounded-2xl shadow-xl p-4 min-w-[280px] z-50 border border-outline-variant animate-fade-in-up">
      <div className="flex flex-col gap-2">
        <h4 className="font-title-md text-sm text-on-surface font-medium mb-1">Compartir CubalLink</h4>
        
        {/* Primary: Copiar enlace (recomendado) */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-surface_CONTAINER_LOW transition-colors"
          aria-label="Copiar enlace"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-blue-deep/10 flex items-center justify-center">
            <MaterialIcon name="content_copy" className="text-base text-brand-blue-deep" />
          </span>
          <div className="flex-1 text-left">
            <span className="font-medium text-on-surface">Copiar enlace</span>
          </div>
        </button>

        {/* WhatsApp */}
        <button
          onClick={shareViaWhatsApp}
          className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-surface_CONTAINER_LOW transition-colors"
          aria-label="Compartir por WhatsApp"
        >
          <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 1H4C2.9 1 2 1.9 2 3v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM8.5 14.5c-.3 0-.5-.1-.8-.4l-2.7-2.7c-.2-.2-.3-.5-.3-.8 0-.4.1-.7.3-1 .2-.2.5-.3.8-.3h.5c.3 0 .6.1.8.3l2.7 2.7c.2.2.3.5.3.8 0 .3-.1.6-.3.8-.1.1-.4.2-.8.2-.4 0-.6-.1-.9-.4l-2.7-2.7L8 10.5H7.5C7.3 10.5 7 10.5 6.5 10.5C6.2 10.5 5.9 10.5 5.5 10.5C5.2 10.5 4.9 10.5 4.5 10.5C4.3 10.5 4 10.5 3.7 10.5C3.3 10.5 3 10.5 2.7 10.5C2.4 10.5 2.1 10.5 1.8 10.5C1.5 10.5 1.2 10.5 .9 10.5C.6 10.5 .3 10.5 0 10.5C0 10.5 0 10.5 0 10.5C-.3 10.5-2 11.5-2 15C-2 18 0 21 0 21C0 21 2 22 5 22C9 22 11.5 20 12.5 18C13.5 16 14 14 14 13C14 12.5 13.5 12 13 11.5C12.5 11 12 10.5 11.5 10C11 9.5 10.5 9 10 9C9.5 9 9 9.5 8.5 10C8 10.5 7.5 11 7 11.5C6.5 12 5.5 12 5 11.5C4.5 11 4 10.5 3.5 10C3 9.5 2.5 9 2 9"/>
            </svg>
          </span>
          <span className="text-sm text-on-surface">WhatsApp</span>
        </button>

        {/* Telegram */}
        <button
          onClick={shareViaTelegram}
          className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-surface_CONTAINER_LOW transition-colors"
          aria-label="Compartir por Telegram"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 3.77 2.17 7.02 5.24 8.62 1.36-.5 2.53-1.27 3.54-2.27-.58-.35-.94-.9-1.14-1.62-.62-.25-1.06-.52-1.45-.82-.71-.55-1.22-1.22-1.64-2.04-.69-1.44-.88-2.47-.58-3.27.29-.72.85-1.23 1.54-1.54.77-.32 1.27-.32 1.7-.32.3.1.6.2.9.3.2.1.5.2.8.3.3.1.6.2.9.3.2.1.5.2.8.3.2.1.5.2.8.3.2.1.5.2.8.3.2.1.5.2.8.3.2.1.5.2.8.3.2.1.5.2.8.3.2.1.5.2.8.3.9.5.5 1 .9.5 1.4.5v-.1c0-1.5-1.1-2.8-2.5-3-1.7-.4-3.5.4-4.3 1.8-.2.4-.3.8-.4 1.2-.1.4.3.7.5 1 .2.3.5.5.9.7.3.2.7.4 1.1.5 1.1.3 2.2.3 3.3.1 1.1-.2 2.2-.7 3.1-1.4.8-.7 1.5-1.5 2.2-2.4.4-.5.8-1 1.2-1.5.4-.5.8-1 1.2-1.5.4-.5.8-1 1.2-1.5.4-.5.8-1 1.2-1.5.4-.5.8-1 1.2-1.5.4-.5.8-1 1.2-1.5.7-.9 1.3-1.9 1.9-2.9.7-1 1.4-2 2.1-2.9.8-.9 1.6-1.8 2.4-2.6.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8"/>
            </svg>
          </span>
          <span className="text-sm text-on-surface">Telegram</span>
        </button>
      </div>
      
      {/* Arrow indicator */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2">
        <span className="w-3 h-3 border-2 border-surface rounded-full bg-transparent"></span>
      </div>
    </div>
  )
}