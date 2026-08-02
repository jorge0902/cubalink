import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import logoCubaLink from '../logo/mixboard-image (2).png'

// Navegación principal de CubaLink (diseño del TopAppBar original de la landing)
export const NAV_LINKS = [
  { to: '/', label: 'Inicio', icon: 'home' },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
  { to: '/empresas', label: 'Empresas', icon: 'apartment' },
  { to: '/perfil', label: 'Perfil', icon: 'person' },
  { to: '/servicios', label: 'Servicios', icon: 'handyman' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <nav className="hidden md:flex gap-2 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MaterialIcon name="notifications" className="text-on-surface-variant cursor-pointer active:scale-95 transition-transform" />
          <Link
            to="/perfil"
            className="hidden sm:inline-block bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all"
          >
            Ingresar
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
        <div className="fixed top-16 left-0 right-0 z-40 bg-surface-container-lowest border-b border-outline-variant shadow-lg md:hidden">
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
            <Link
              to="/perfil"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-primary text-on-primary text-center px-4 py-3 rounded-lg font-label-sm text-label-sm"
            >
              Ingresar
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
