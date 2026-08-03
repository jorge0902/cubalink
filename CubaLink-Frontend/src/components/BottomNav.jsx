import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import { EXPLORE_LINKS } from './Navbar'

// Barra de navegación inferior (móvil) — diseño original de las páginas Stitch
const items = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
  { to: '/perfil', label: 'Perfil', icon: 'person' },
]

export default function BottomNav() {
  const [exploreOpen, setExploreOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface-container-lowest pb-safe border-t border-outline-variant shadow-lg">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-2 active:scale-90 transition-all duration-150 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant opacity-70 hover:text-primary'
              }`
            }
          >
            <MaterialIcon name={item.icon} className="text-[24px]" />
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </NavLink>
        ))}

        {/* Botón central Explorar */}
        <button
          onClick={() => setExploreOpen((v) => !v)}
          className={`flex flex-col items-center justify-center gap-0.5 px-2 active:scale-90 transition-all duration-150 ${
            exploreOpen ? 'text-primary font-bold' : 'text-on-surface-variant opacity-70 hover:text-primary'
          }`}
          aria-label="Abrir explorar"
        >
          <MaterialIcon name={exploreOpen ? 'close' : 'grid_view'} className="text-[24px]" />
          <span className="font-label-sm text-label-sm">{exploreOpen ? 'Cerrar' : 'Explorar'}</span>
        </button>
      </nav>

      {/* Panel Explorar (sheet desde abajo) */}
      {exploreOpen && (
        <div className="md:hidden fixed bottom-16 left-0 right-0 z-40 bg-surface-container-lowest border-t border-outline-variant shadow-2xl rounded-t-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-4">
            <p className="px-2 pt-1 pb-2 text-[11px] uppercase tracking-widest text-outline font-semibold">
              Todo lo que CubaLink te ofrece
            </p>
            <div className="grid grid-cols-2 gap-2">
              {EXPLORE_LINKS.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setExploreOpen(false)}
                    className={isActive
                      ? 'flex items-center gap-3 p-3 rounded-xl border transition-all bg-brand-blue-deep text-white border-brand-blue-deep'
                      : 'flex items-center gap-3 p-3 rounded-xl border transition-all bg-surface-container-lowest border-outline-variant hover:border-brand-blue-deep'}
                  >
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/15 text-white' : 'bg-surface-container text-primary'}`}>
                      <MaterialIcon name={link.icon} className="text-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className={`block font-label-sm text-label-sm font-semibold ${isActive ? 'text-white' : 'text-primary'}`}>
                        {link.label}
                      </span>
                      <span className={`block text-[10px] truncate ${isActive ? 'text-white/70' : 'text-on-surface-variant'}`}>
                        {link.desc}
                      </span>
                    </span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
