import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import logoCubaLink from '../assets/cubalink-logo.png'

// Navegación principal de CubaLink (diseño del TopAppBar original de la landing)
export const NAV_LINKS = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
  { to: '/perfil', label: 'Perfil', icon: 'person' },
]

// Secciones agrupadas en el menú "Explorar"
export const EXPLORE_LINKS = [
  { to: '/rentas', label: 'Rentas Moscú', icon: 'home_work', desc: 'Cuartos y apartamentos' },
  { to: '/marketplace', label: 'Marketplace', icon: 'storefront', desc: 'Compra y venta' },
  { to: '/viajes', label: 'Viajes', icon: 'flight_takeoff', desc: 'Paquetes Cuba ⇄ Rusia' },
  { to: '/remesas', label: 'Remesas', icon: 'currency_exchange', desc: 'Envíos de dinero' },
  { to: '/empresas', label: 'Empresas', icon: 'apartment', desc: 'Aliados y vacantes' },
  { to: '/servicios', label: 'Servicios', icon: 'handyman', desc: 'Profesionales de la red' },
  { to: '/confiables', label: 'Confiables', icon: 'shield', desc: 'Gente de confianza' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isExploreActive && location.pathname === link.to ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-primary'}`}>
                        <MaterialIcon name={link.icon} className="text-[18px]" />
                      </span>
                      <span>
                        <span className="block font-label-sm text-label-sm text-primary font-semibold">{link.label}</span>
                        <span className="block text-[11px] text-on-surface-variant">{link.desc}</span>
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <MaterialIcon name="notifications" className="text-on-surface-variant cursor-pointer active:scale-95 transition-transform" />
          <Link
            to="/registro"
            className="hidden sm:inline-block bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all"
          >
            Unirte
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
    </>
  )
}
