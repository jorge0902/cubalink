import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import logoCubaLink from '../assets/cubalink-logo.png'

// Footer de CubaLink — columnas de secciones, ayuda y redes (estilo marketplace)
const FOOTER_SECTIONS = [
  {
    title: 'Secciones',
    links: [
      { to: '/empleos', label: 'Empleos' },
      { to: '/rentas', label: 'Rentas Moscú' },
      { to: '/marketplace', label: 'Marketplace' },
      { to: '/viajes', label: 'Viajes' },
      { to: '/remesas', label: 'Remesas' },
      { to: '/confiables', label: 'Confiables' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { to: '/comunidad', label: 'Comunidad' },
      { to: '/empresas', label: 'Empresas' },
      { to: '/servicios', label: 'Servicios' },
      { to: '/perfil', label: 'Mi perfil' },
      { to: '/registro', label: 'Crear cuenta' },
    ],
  },
]

const FOOTER_HELP = [
  { to: '#', label: 'Centro de ayuda', icon: 'help' },
  { to: '#', label: 'Contacto', icon: 'mail' },
  { to: '#', label: 'Términos y condiciones', icon: 'description' },
  { to: '#', label: 'Privacidad', icon: 'lock' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary pt-14 pb-10 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoCubaLink}
                alt="CubaLink logo"
                className="h-12 w-12 object-contain rounded-lg bg-white p-0.5 shadow-sm"
              />
              <span className="text-headline-lg font-headline-lg text-secondary-fixed">CubaLink</span>
            </div>
            <p className="font-body-md text-body-md opacity-80 max-w-xs">
              La red profesional de los cubanos en Rusia. Trabajo, renta, remesas y confianza en un solo lugar.
            </p>
            <p className="flex items-center gap-2 text-label-sm text-label-sm opacity-70">
              <MaterialIcon name="location_on" className="text-[16px]" />
              Moscú, Rusia
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { icon: 'facebook', label: 'Facebook' },
                { icon: 'telegram', label: 'Telegram' },
                { icon: 'instagram', label: 'Instagram' },
                { icon: 'youtube', label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-primary transition-all active:scale-90"
                >
                  <MaterialIcon name={s.icon} className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de secciones */}
          {FOOTER_SECTIONS.map((col) => (
            <div key={col.title}>
              <h4 className="font-title-md text-title-md text-secondary-fixed mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-label-sm text-label-sm text-on-primary opacity-75 hover:opacity-100 hover:text-brand-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Ayuda */}
          <div>
            <h4 className="font-title-md text-title-md text-secondary-fixed mb-4">Ayuda</h4>
            <ul className="space-y-2.5">
              {FOOTER_HELP.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.to}
                    className="font-label-sm text-label-sm text-on-primary opacity-75 hover:opacity-100 hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <MaterialIcon name={l.icon} className="text-[16px]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm opacity-60">© 2026 CubaLink Professional · Hecho con ❤ para la comunidad cubana en Rusia</p>
          <div className="flex gap-2">
            {[
              { icon: 'shield', label: 'Comunidad verificada' },
              { icon: 'verified', label: 'Gente de confianza' },
            ].map((b) => (
              <span
                key={b.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-label-sm text-label-sm opacity-90"
              >
                <MaterialIcon name={b.icon} className="text-[14px] text-brand-gold" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
