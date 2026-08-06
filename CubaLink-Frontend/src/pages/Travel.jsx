import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import SkyClouds from '../components/SkyClouds'
import TravelCard from '../components/TravelCard'
import PublishModal from '../components/PublishModal'
import { travels, travelTypes, travelCities } from '../data/travel'

const publishFields = [
  { key: 'type', label: 'Tipo de publicación', type: 'select', required: true, options: travelTypes.map((t) => t.label) },
  { key: 'from', label: 'Ciudad de salida', type: 'select', required: true, options: travelCities },
  { key: 'to', label: 'Ciudad de destino', type: 'select', required: true, options: travelCities },
  { key: 'date', label: 'Fecha del viaje', type: 'date', required: true },
  { key: 'weight', label: 'Peso disponible (kg)', type: 'number', placeholder: 'Ej: 10' },
  { key: 'price', label: 'Precio por kg (₽) — 0 si es gratis', type: 'number', placeholder: 'Ej: 1500' },
  { key: 'phone', label: 'Tu teléfono (contacto)', placeholder: '+7 ...', required: true },
  { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Cuenta tu viaje: fechas, condiciones, qué puedes llevar...', required: true },
]

const typeTabs = [
  { id: 'todos', label: 'Todos', icon: 'apps' },
  ...travelTypes,
]

export default function Travel() {
  const [items, setItems] = useState(travels)
  const [typeFilter, setTypeFilter] = useState('todos')
  const [fromFilter, setFromFilter] = useState('todos')
  const [toFilter, setToFilter] = useState('todos')
  const [priceFilter, setPriceFilter] = useState('todos')
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)

  const filtered = items.filter((t) => {
    const okType = typeFilter === 'todos' || t.type === typeFilter
    const okFrom = fromFilter === 'todos' || t.from === fromFilter
    const okTo = toFilter === 'todos' || t.to === toFilter
    const okPrice = priceFilter === 'todos' || (priceFilter === 'gratis' && t.price === 0) || (priceFilter === 'pago' && t.price > 0)
    return okType && okFrom && okTo && okPrice
  })

  const publish = (form) => {
    const typeInfo = travelTypes.find((t) => t.label === form.type)
    const newTrip = {
      id: Date.now(),
      type: typeInfo?.id || 'rus_a_cuba',
      from: form.from,
      to: form.to,
      date: form.date || '2026-12-01',
      weight: Number(form.weight) || 0,
      price: Number(form.price) || 0,
      description: form.description,
      contact: form.phone,
      posted: 'Recién publicado',
    }
    setItems((prev) => [newTrip, ...prev])
    setModalOpen(false)
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header — hero con fondo de nubes animadas */}
      <section className="relative overflow-hidden rounded-3xl mb-8 min-h-[260px] shadow-lg border border-outline-variant/40">
        {/* Fondo animado: dos capas de canvas (nubes base + capa atmosférica) */}
        <SkyClouds />

        {/* Contenido por encima del canvas */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 p-6 md:p-10">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-white mb-2 drop-shadow-md">
              Viajes Cuba ⇄ Rusia <span className="align-middle">✈️</span>
            </h1>
            <p className="text-white/95 font-body-md text-body-md drop-shadow-sm">
              Paquetes, encargos y acompañantes entre Cuba y Rusia. Conecta con la gente que viaja y lleva tus cosas seguras.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-brand-blue-deep px-6 py-3 rounded-xl font-label-sm text-label-sm shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            <MaterialIcon name="flight_takeoff" className="text-[18px]" />
            Publicar viaje
          </button>
        </div>
      </section>

      {/* Filtros */}
      <section className="mb-8 space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {typeTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTypeFilter(t.id)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5 ${
                typeFilter === t.id
                  ? 'active-pill shadow-md border border-primary'
                  : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <MaterialIcon name={t.icon} className="text-[15px]" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={fromFilter}
            onChange={(e) => setFromFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="todos">Sale de: Cualquier ciudad</option>
            {travelCities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={toFilter}
            onChange={(e) => setToFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="todos">Va a: Cualquier ciudad</option>
            {travelCities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="todos">Cualquier precio</option>
            <option value="gratis">Gratis</option>
            <option value="pago">Con costo</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((trip) => (
          <TravelCard key={trip.id} trip={trip} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant text-center mt-4">
          <MaterialIcon name="flight" className="text-outline text-5xl mb-3" />
          <p className="font-title-md text-title-md text-primary mb-1">No hay viajes con esos filtros</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Prueba cambiando la ciudad o el tipo de publicación.
          </p>
        </div>
      )}

      <PublishModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onPublish={publish}
        title="Publica tu viaje"
        subtitle="Conecta con cubanos que necesitan llevar o recibir encargos."
        fields={publishFields}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Viaje publicado, ya está visible
        </div>
      )}
    </main>
  )
}
