import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import PublishModal from './PublishModal'
import { useFavorites } from '../context/FavoritesContext'
import { useNotifications } from '../context/NotificationsContext'
import logoCubaLink from '../assets/cubalink-logo.png'

// Campos genéricos del modal de publicación (demo)
export const PUBLISH_FIELDS = [
  { key: 'titulo', label: 'Título del anuncio', placeholder: 'Ej: Cuarto en Kotelniki, iPhone 12, busco albañil...', required: true },
  { key: 'detalle', label: 'Detalle', placeholder: 'Describe lo que publicas: precio, zona, condiciones...', required: true },
  { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
]

// Navegación principal de CubaLink (design del TopAppBar original de la landing)
// Desktop: Inicio | Empleos | Rentas | Comunidad | Explorar (dropdown)
export const NAV_LINKS = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/rentas', label: 'Rentas', icon: 'home_work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
]

// Perfil vive solo en el menú hamburguesa móvil (acceso secundario)
const PROFILE_LINK = { to: '/perfil', label: 'Perfil', icon: 'person' }

// Secciones agrupadas en el menú "Explorar"
export const EXPLORE_LINKS = [
  { to: '/rentas', label: 'Rentas Moscú', icon: 'home_work', desc: 'Cuartos y apartamentos' },
  { to: '/marketplace', label: 'Marketplace', icon: 'storefront', desc: 'Compra y venta' },
  { to: '/viajes', label: 'Viajes', icon: 'flight_takeoff', desc: 'Paquetes Cuba ⇄ Rusia' },
  { to: '/remesas', label: 'Remesas', icon: 'currency_exchange', desc: 'Envíos de dinero' },
  { to: '/empresas', label: 'Empresas', icon: 'apartment', desc: 'Aliados y vacantes' },
  { to: '/servicios', label: 'Servicios', icon: 'handyman', desc: 'Profesionales de la red' },
  { to: '/confiables', label: 'Confiables', icon: 'shield', desc: 'Gente de confianza' },
  { to: '/lineas', label: 'Líneas', icon: 'sim_card', desc: 'Chips y telefonía' },
]

// Ítem de Soporte/Ayuda (se muestra al final del menú Explorar)
export const SUPPORT_LINK = { to: '/soporte', label: 'Soporte', icon: 'help' }

// URL de Caiman Cash
const CAIMAN_CASH_URL = 'https://caimancash.vercel.app/'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [publishOpen, setPublishOpen] = useState(false)
  const [toast, setToast] = useState('')
  const location = useLocation()
  const { favorites } = useFavorites()
  const { unreadCount } = useNotifications()

  // Detect currency from URL params - Default to RUB (Russia)
  const urlParams = new URLSearchParams(location.search)
  const currencyParam = urlParams.get('currency') || 'RUB'
  const sourceCurrency = currencyParam.toUpperCase()

  // Currency change handler
  const handleCurrencyChange = (e) => {
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('currency', e.target.value)
    window.history.pushState({}, '', newUrl.toString())
  }

  // Cierra el dropdown al navegar
  useEffect(() => {
    setExploreOpen(false)
    setMenuOpen(false)
  }, [location.pathname])

  const isExploreActive = EXPLORE_LINKS.some((l) => location.pathname.startsWith(l.to))

  const headerClass = `fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant transition-all duration-200 ${
    scrolled ? 'shadow-md bg-surface-container-lowest/90 backdrop-blur-md' : 'shadow-sm'
  }`

  const linkClass = ({ isActive }) =>
    `font-label-sm text-label-sm px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? 'text-primary font-semibold bg-surface-container-low'
        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
    }`

  return (
    <>
      <header className={headerClass}>
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoCubaLink} alt="CubaLink logo" className="h-10 w-10 object-contain rounded-lg" />
            <span className="text-title-md font-title-md font-bold tracking-tight text-primary">
              CubaLink
            </span>
          </Link>
        </div>

        {/* Currency Selector (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <select
            value={sourceCurrency}
            onChange={handleCurrencyChange}
            className="px-3 py-1.5 border border-outline-variant rounded-lg text-sm font-medium text-on-surface-variant bg-background hover:bg-surface-container-low transition-colors"
          >
            <option value="AED">🇦🇪 AED (Dubai)</option>
            <option value="RUB">🇷🇺 RUB (Rusia)</option>
          </select>
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-1 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}

          {/* Dropdown Explorar */}
          <div className="relative" onMouseEnter={() => setExploreOpen(true)} onMouseLeave={() => setExploreOpen(false)}>
            <button
              onClick={() => setExploreOpen((v) => !v)}
              className={`font-label-sm text-label-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isExploreActive
                  ? 'text-primary font-semibold bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              Explorar
              <MaterialIcon name={exploreOpen ? 'expand_less' : 'expand_more'} className="text-[16px]" />
            </button>
            {exploreOpen && (
              <div className="absolute top-full right-0 pt-2">
                <div className="w-72 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-2xl p-2">
                  {EXPLORE_LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          isActive ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'
                        }`
                      }
                    >
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${link.to.startsWith('/confiables') ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-primary'}`}>
                        <MaterialIcon name={link.icon} className="text-[18px]" />
                      </span>
                      <span>
                        <span className="block font-label-sm text-label-sm text-primary font-semibold">{link.label}</span>
                        <span className="block text-[11px] text-on-surface-variant">{link.desc}</span>
                      </span>
                    </NavLink>
                  ))}

                  {/* Separador */}
                  <div className="border-t border-outline-variant my-2 mx-4"></div>

                  {/* Soporte/Ayuda */}
                  <NavLink
                    to={SUPPORT_LINK.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg font-label-sm text-label-sm transition-colors ${
                        isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`
                    }
                  >
                    <MaterialIcon name={SUPPORT_LINK.icon} className="text-[18px]" />
                    {SUPPORT_LINK.label}
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Botón Publicar anuncio */}
          <button
            onClick={() => setPublishOpen(true)}
            className="hidden md:inline-flex items-center gap-2 bg-brand-gold text-primary px-5 py-2.5 rounded-xl font-label-sm text-label-sm font-bold hover:shadow-lg hover:bg-brand-gold/90 active:scale-95 transition-all btn-shine"
          >
            <MaterialIcon name="add_circle" className="text-[18px]" />
            Publicar anuncio
          </button>

          <a
            href={CAIMAN_CASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand-blue-deep text-white px-5 py-2.5 rounded-xl font-label-sm text-label-sm font-bold hover:shadow-lg hover:bg-brand-blue-deep/90 active:scale-95 transition-all"
          >
            <MaterialIcon name="smartphone" className="text-[18px]" />
            Caiman Cash
          </a>

          <Link
            to="/registro"
            className="hidden sm:inline-block bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all"
          >
            Unirte
          </Link>

          {/* Favoritos / Guardados */}
          <Link
            to="/guardados"
            aria-label="Mis guardados"
            className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-brand-gold"
          >
            <MaterialIcon name={favorites.length > 0 ? 'favorite' : 'favorite_border'} fill={favorites.length > 0} className="text-[22px]" />
            {favorites.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-gold text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {favorites.length > 9 ? '9+' : favorites.length}
              </span>
            )}
          </Link>

          {/* Campana de notificaciones */}
          <Link
            to="/notificaciones"
            aria-label="Notificaciones"
            className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors text-on-surface-variant hover:text-brand-gold"
          >
            <MaterialIcon name={unreadCount > 0 ? 'notifications_active' : 'notifications'} className="text-[22px]" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center animate-soft-pulse">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </Link>

          {/* Hamburger móvil */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container-low transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <MaterialIcon name={menuOpen ? 'close' : 'menu'} className="text-primary" />
          </button>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-surface-container-lowest border-b border-outline-variant shadow-lg md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {/* Selector de moneda móvil */}
            <div className="border-b border-outline-variant pb-2 mb-2">
              <select
                value={sourceCurrency}
                onChange={(e) => {
                  handleCurrencyChange(e)
                  setMenuOpen(false)
                }}
                className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm font-medium text-on-surface-variant bg-background"
              >
                <option value="AED">🇦🇪 AED (Dubai)</option>
                <option value="RUB">🇷🇺 RUB (Rusia)</option>
              </select>
            </div>

            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm transition-colors ${
                    isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`
                }
              >
                <MaterialIcon name={link.icon} className="text-[20px]" />
                {link.label}
              </NavLink>
            ))}

            <p className="px-4 pt-3 pb-1 text-[11px] uppercase tracking-widest text-outline font-semibold">
              Explorar
            </p>
            {EXPLORE_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm transition-colors ${
                    isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`
                }
              >
                <MaterialIcon name={link.icon} className="text-[20px]" />
                {link.label}
              </NavLink>
            ))}

            {/* Separador */}
            <div className="border-t border-outline-variant my-2 mx-4"></div>

            {/* Soporte/Ayuda */}
            <NavLink
              to={SUPPORT_LINK.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm transition-colors ${
                  isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              <MaterialIcon name={SUPPORT_LINK.icon} className="text-[20px]" />
              {SUPPORT_LINK.label}
            </NavLink>

            <Link
              to="/registro"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-primary text-on-primary text-center px-4 py-3 rounded-lg font-label-sm text-label-sm"
            >
              Unirte a CubaLink
            </Link>
          </nav>
        </div>
      )}

      {/* Botón compartir app en remesas */}
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'CubaLink',
              text: 'Comparte CubaLink con amigos',
              url: window.location.href,
            })
          }
        }}
        className="fixed bottom-6 right-6 bg-brand-gold text-primary w-14 h-14 rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all flex items-center justify-center md:hidden z-40 btn-shine"
        aria-label="Compartir CubaLink"
      >
        <MaterialIcon name="share" className="text-[24px]" />
      </button>

      {/* Modal Publicar anuncio */}
      <PublishModal
        open={publishOpen}
        onClose={() => setPublishOpen(false)}
        onPublish={() => {
          setPublishOpen(false)
          setToast('¡Anuncio publicado! Es una demo — pronto conectarás con la comunidad.')
        }}
        title="Publica tu anuncio"
        subtitle="En menos de 2 minutos tu anuncio está visible para toda la comunidad."
        fields={PUBLISH_FIELDS}
      />
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8 whitespace-nowrap animate-fade-in-up">
          {toast}
        </div>
      )}
    </>
  )
}