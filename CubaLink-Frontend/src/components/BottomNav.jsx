import { NavLink } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'

// Barra de navegación inferior (móvil) — diseño original de las páginas Stitch
const items = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
  { to: '/perfil', label: 'Perfil', icon: 'person' },
]

export default function BottomNav() {
  return (
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
    </nav>
  )
}
