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
    <footer className="w-full bg-primary text-on-primary pt-14 pb-28 md:pb-10 px-margin-mobile md:px-margin-desktop">
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
            <div className="flex flex-wrap gap-3 pt-1">
              {/* SVGs inline: no dependen de Google Fonts (bloqueada en Rusia) — evita textos crudos encimados */}
              {[
                {
                  label: 'Facebook',
                  path: 'M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.3l.7-3H13v-1.3c0-.4.2-.7.5-.7Z',
                },
                {
                  label: 'Telegram',
                  path: 'M20.7 4.3 3.9 10.9c-1.2.5-1.2 2.2 0 2.6l4.1 1.3 1.5 4.7c.3 1 1.6 1.3 2.3.5l2-2.2 4 3c.9.6 2.1.1 2.3-1L23 5.9c.3-1.3-.9-2.4-2.3-1.6ZM8.4 14.2l9-5.7c.3-.2.6.2.4.4l-7.4 7.1-.3 3.1-1.7-4.9Z',
                },
                {
                  label: 'Instagram',
                  path: 'M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0 5.2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm4.1-5.4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.8 6.6A2.9 2.9 0 0 0 4.9 9.5v5a2.9 2.9 0 0 0 2.9 2.9h4.4a2.9 2.9 0 0 0 2.9-2.9v-5a2.9 2.9 0 0 0-2.9-2.9H7.8Zm4.4 1.2h-4.4a1.7 1.7 0 0 0-1.7 1.7v5a1.7 1.7 0 0 0 1.7 1.7h4.4a1.7 1.7 0 0 0 1.7-1.7v-5a1.7 1.7 0 0 0-1.7-1.7Z',
                },
                {
                  label: 'YouTube',
                  path: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.2 12 10 15.2Z',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  title={s.label}
                  className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-primary transition-all active:scale-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
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
          <p className="font-label-sm text-label-sm opacity-60 text-center md:text-left">© 2026 CubaLink Professional · Hecho con ❤ para la comunidad cubana en Rusia</p>
          <div className="flex flex-wrap justify-center gap-2">
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
