import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import { ListingCard } from '../components/ListingCarousel'

// Chips y líneas telefónicas en Moscú (demo 100% frontend)
const SIMS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=400&q=60',
    price: '1 200 ₽',
    title: 'Chip SIM ruso activado + número MTS',
    location: 'Metro Kotelniki',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=400&q=60',
    price: '1 500 ₽',
    title: 'SIM Beeline con paquete de datos 30 GB',
    location: 'Metro Tekhnopark',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=60',
    price: '2 000 ₽',
    title: 'Teléfono Xiaomi Redmi 9A liberado',
    location: 'Metro Salaryevo',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=60',
    price: '800 ₽',
    title: 'Chip eSIM activado con número ruso',
    location: 'Metro Chistye Prudy',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=60',
    price: '2 500 ₽',
    title: 'Número dorado + SIM MTS con saldo',
    location: 'Metro VDNKh',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=60',
    price: '1 800 ₽',
    title: 'Smartphone Samsung Galaxy A13 64GB',
    location: 'Metro Novokosino',
  },
]

const BENEFITS = [
  { icon: 'bolt', text: 'Activación el mismo día' },
  { icon: 'wifi', text: 'Internet ilimitado en planes' },
  { icon: 'support_agent', text: 'Soporte en español y ruso' },
  { icon: 'verified', text: 'Vendedores de confianza' },
]

export default function Lines() {
  const [query, setQuery] = useState('')
  const filtered = SIMS.filter((s) =>
    `${s.title} ${s.location}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* ===== Encabezado ===== */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Telefonía</span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2 mb-2">
                Líneas SIM y chips para cubanos
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Chips ruso y de viaje, eSIM y teléfonos liberados. Listos para activar, sin papeleo raro.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-sm text-label-sm">
              <MaterialIcon name="sim_card" fill className="text-[18px]" />
              <span>Activación inmediata</span>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MaterialIcon name="search" className="text-outline" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              placeholder="Busca por chip, operador o zona..."
              type="text"
            />
          </div>
        </section>

        {/* ===== Beneficios ===== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {BENEFITS.map((b) => (
            <div key={b.text} className="flex items-center gap-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl px-3 py-3 premium-shadow">
              <span className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                <MaterialIcon name={b.icon} className="text-[18px]" />
              </span>
              <span className="text-[11px] sm:text-label-sm text-primary font-medium leading-snug">{b.text}</span>
            </div>
          ))}
        </section>

        {/* ===== Listado de chips y teléfonos (grid compacto) ===== */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline-md text-[19px] sm:text-headline-md text-primary">Ofertas de Líneas</h3>
            <span className="text-label-sm text-on-surface-variant">{filtered.length} disponibles</span>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="w-16 h-16 mx-auto rounded-2xl bg-surface-container-low flex items-center justify-center mb-4">
                <MaterialIcon name="sim_card" className="text-3xl text-outline" />
              </span>
              <p className="text-on-surface-variant">No encontramos chips para esa búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {filtered.map((s) => (
                <ListingCard
                  key={`line-${s.id}`}
                  item={{ favKey: `line-${s.id}`, img: s.img, price: s.price, title: s.title, location: s.location, available: true }}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
