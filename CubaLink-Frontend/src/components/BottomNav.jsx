import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import { EXPLORE_LINKS } from './Navbar'

// Opciones del menú de publicación — cada una lleva a su formulario específico
const PUBLISH_OPTIONS = [
  { to: '/publicar/empleo', icon: 'work', label: 'Empleo', desc: 'Oferta o búsqueda de trabajo', accent: 'bg-blue-50 text-blue-700' },
  { to: '/publicar/renta', icon: 'home_work', label: 'Renta', desc: 'Habitación o propiedad', accent: 'bg-emerald-50 text-emerald-700' },
  { to: '/publicar/viajes', icon: 'flight_takeoff', label: 'Vuelos / Viajes', desc: 'Cupo de viaje o pasaje', accent: 'bg-sky-50 text-sky-700' },
  { to: '/publicar/marketplace', icon: 'storefront', label: 'Marketplace / Venta', desc: 'Vender un artículo o servicio', accent: 'bg-amber-50 text-amber-700' },
  { to: '/publicar/remesas', icon: 'currency_exchange', label: 'Remesas / Servicios', desc: 'Otro tipo de anuncio', accent: 'bg-rose-50 text-rose-700' },
]

// Barra de navegación inferior (móvil) — 5 ítems, el "+" Publicar exactamente al centro
const items = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/empleos', label: 'Empleos', icon: 'work' },
  { to: '/comunidad', label: 'Comunidad', icon: 'groups' },
]

export default function BottomNav() {
  const [exploreOpen, setExploreOpen] = useState(false)
  const [publishOpen, setPublishOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Al elegir un tipo, navega al formulario y cierra el menú
  const chooseType = (to) => {
    setPublishOpen(false)
    navigate(to)
  }

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-stretch h-16 bg-surface-container-lowest pb-safe border-t border-outline-variant shadow-lg">
        {/* Inicio, Empleos — a la izquierda del botón central */}
        {items.slice(0, 2).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-1 flex-1 active:scale-90 transition-all duration-150 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant opacity-70 hover:text-primary'
              }`
            }
          >
            <MaterialIcon name={item.icon} className="text-[24px]" />
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </NavLink>
        ))}

        {/* Botón central + Publicar — 3ra posición exacta (FAB elevado) */}
        <button
          onClick={() => setPublishOpen(true)}
          aria-label="Publicar"
          className="flex flex-col items-center justify-center gap-0.5 px-1 flex-1 active:scale-90 transition-all duration-150 group"
        >
          <span className="-mt-7 w-14 h-14 rounded-2xl bg-brand-gold text-primary shadow-lg shadow-brand-gold/40 flex items-center justify-center transition-all duration-150 group-hover:bg-brand-gold/90 group-hover:shadow-xl group-active:scale-95 btn-shine">
            <MaterialIcon name="add" className="text-[32px] font-bold" />
          </span>
          <span className="font-label-sm text-label-sm font-semibold text-primary">Publicar</span>
        </button>

        {/* Comunidad — a la derecha del botón central */}
        {items.slice(2).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-1 flex-1 active:scale-90 transition-all duration-150 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant opacity-70 hover:text-primary'
              }`
            }
          >
            <MaterialIcon name={item.icon} className="text-[24px]" />
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </NavLink>
        ))}

        {/* Explorar — última posición */}
        <button
          onClick={() => setExploreOpen((v) => !v)}
          className={`flex flex-col items-center justify-center gap-0.5 px-1 flex-1 active:scale-90 transition-all duration-150 ${
            exploreOpen ? 'text-primary font-bold' : 'text-on-surface-variant opacity-70 hover:text-primary'
          }`}
          aria-label="Abrir explorar"
        >
          <MaterialIcon name={exploreOpen ? 'close' : 'grid_view'} className="text-[24px]" />
          <span className="font-label-sm text-label-sm">{exploreOpen ? 'Cerrar' : 'Explorar'}</span>
        </button>
      </nav>

      {/* Menú Publicar (bottom sheet) — elige qué tipo de contenido publicar */}
      {publishOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[45] bg-black/50 animate-fade-in"
            onClick={() => setPublishOpen(false)}
            aria-label="Cerrar menú de publicación"
          />
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-outline-variant shadow-2xl rounded-t-2xl animate-fade-in-up">
            <div className="w-10 h-1 bg-outline-variant rounded-full mx-auto mt-3" />
            <div className="p-5 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-title-md text-title-md text-primary">¿Qué quieres publicar?</h3>
                  <p className="text-label-sm text-on-surface-variant font-label-sm mt-0.5">
                    Elige el tipo de anuncio y completa el formulario
                  </p>
                </div>
                <button
                  onClick={() => setPublishOpen(false)}
                  aria-label="Cerrar"
                  className="w-9 h-9 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-colors"
                >
                  <MaterialIcon name="close" />
                </button>
              </div>
              <div className="space-y-2">
                {PUBLISH_OPTIONS.map((opt) => (
                  <button
                    key={opt.to}
                    onClick={() => chooseType(opt.to)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-outline-variant hover:border-brand-blue-deep hover:bg-surface-container-low transition-all active:scale-[0.98] text-left"
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.accent}`}>
                      <MaterialIcon name={opt.icon} className="text-[20px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-label-sm text-label-sm font-semibold text-primary">{opt.label}</span>
                      <span className="block text-[11px] text-on-surface-variant">{opt.desc}</span>
                    </span>
                    <MaterialIcon name="chevron_right" className="text-on-surface-variant flex-shrink-0" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPublishOpen(false)}
                className="mt-4 w-full py-3 border border-outline-variant text-on-surface-variant rounded-xl font-label-sm text-label-sm hover:bg-surface-container-low transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </>
      )}

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