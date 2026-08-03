import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import RentCard from '../components/RentCard'
import PublishModal from '../components/PublishModal'
import { rentals, rentTypes, districts, rentalFilters } from '../data/rentals'

const publishFields = [
  { key: 'type', label: 'Tipo de vivienda', type: 'select', required: true, options: rentTypes.map((t) => t.label) },
  { key: 'title', label: 'Título del anuncio', placeholder: 'Ej: Habitación cerca del metro...', required: true },
  { key: 'price', label: 'Precio mensual (₽)', type: 'number', placeholder: 'Ej: 25000', required: true },
  { key: 'metro', label: 'Metro más cercano', placeholder: 'Ej: Metro Kotelniki', required: true },
  { key: 'district', label: 'Distrito', type: 'select', options: districts.filter((d) => d !== 'Todos los distritos') },
  { key: 'furnished', label: '¿Amueblado?', type: 'select', options: ['Sí', 'No'] },
  { key: 'phone', label: 'Tu teléfono (contacto)', placeholder: '+7 ...', required: true },
  { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Cuenta qué ofreces: ambiente, servicios, condiciones...', required: true },
]

export default function Rentals() {
  const [items, setItems] = useState(rentals)
  const [typeFilter, setTypeFilter] = useState('todos')
  const [priceFilter, setPriceFilter] = useState('todos')
  const [districtFilter, setDistrictFilter] = useState('Todos los distritos')
  const [roomsFilter, setRoomsFilter] = useState('Cualquiera')
  const [onlyFurnished, setOnlyFurnished] = useState(false)
  const [onlyPets, setOnlyPets] = useState(false)
  const [onlyImmediate, setOnlyImmediate] = useState(false)
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)

  const priceOk = (p) => {
    if (priceFilter === 'todos') return true
    if (priceFilter === 'hasta-20k') return p.price <= 20000
    if (priceFilter === '20-40k') return p.price >= 20000 && p.price <= 40000
    if (priceFilter === '40-70k') return p.price >= 40000 && p.price <= 70000
    if (priceFilter === 'mas-70k') return p.price > 70000
    return true
  }

  const roomsOk = (p) => {
    if (roomsFilter === 'Cualquiera') return true
    if (roomsFilter === '3+') return p.rooms >= 3
    return p.rooms === Number(roomsFilter)
  }

  const filtered = items.filter((r) => {
    const okType = typeFilter === 'todos' || r.type === typeFilter
    const okDistrict = districtFilter === 'Todos los distritos' || r.district === districtFilter
    const okQuery =
      query.trim() === '' ||
      `${r.title} ${r.metro} ${r.district} ${r.address}`.toLowerCase().includes(query.toLowerCase())
    const okFurnished = !onlyFurnished || r.furnished
    const okPets = !onlyPets || r.pets
    const okImmediate = !onlyImmediate || r.available === 'inmediato'
    return okType && priceOk(r) && okDistrict && roomsOk(r) && okQuery && okFurnished && okPets && okImmediate
  })

  const publish = (form) => {
    const typeInfo = rentTypes.find((t) => t.label === form.type)
    const newRent = {
      id: Date.now(),
      type: typeInfo?.id || 'habitacion',
      title: form.title,
      price: Number(form.price) || 0,
      priceNote: '/ mes',
      deposit: 0,
      commission: 0,
      metro: form.metro,
      address: '',
      district: form.district || 'Centro (CAO)',
      rooms: 1,
      baths: 1,
      area: 20,
      furnished: form.furnished === 'Sí',
      services: ['Agua', 'Luz'],
      available: 'inmediato',
      pets: false,
      description: form.description,
      advertiser: '~Tú',
      phone: form.phone,
      photos: ['/images/renta-estudio.jpg'],
      posted: 'Recién publicado',
      featured: true,
    }
    setItems((prev) => [newRent, ...prev])
    setModalOpen(false)
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  const toggle = (setter) => (setter((v) => !v))

  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
              Rentas Moscú <span className="align-middle">🏠</span>
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Cuartos, estudios y apartamentos para la comunidad cubana. Anuncios claros, precios en rublos y sin letra pequeña.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-label-sm text-label-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            <MaterialIcon name="add_home" className="text-[18px]" />
            Publicar alquiler
          </button>
        </div>

        {/* Búsqueda */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <MaterialIcon name="search" className="text-outline" />
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
            placeholder="Buscar por metro, distrito o dirección..."
            type="text"
          />
        </div>
      </section>

      {/* Filtros */}
      <section className="mb-8 space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setTypeFilter('todos')}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${
              typeFilter === 'todos'
                ? 'active-pill shadow-md border border-primary'
                : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            Todos
          </button>
          {rentTypes.map((t) => (
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
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {rentalFilters.prices.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            value={roomsFilter}
            onChange={(e) => setRoomsFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {rentalFilters.rooms.map((r) => (
              <option key={r} value={r}>{r === 'Cualquiera' ? 'Hab: Cualquiera' : `${r} hab.`}</option>
            ))}
          </select>
          <button
            onClick={() => toggle(setOnlyFurnished)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all ${
              onlyFurnished ? 'bg-secondary-container text-on-secondary-container font-bold' : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            Amueblado
          </button>
          <button
            onClick={() => toggle(setOnlyPets)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all ${
              onlyPets ? 'bg-secondary-container text-on-secondary-container font-bold' : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            🐾 Acepta mascotas
          </button>
          <button
            onClick={() => toggle(setOnlyImmediate)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all ${
              onlyImmediate ? 'bg-secondary-container text-on-secondary-container font-bold' : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            ⚡ Disponible ya
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((rent) => (
          <RentCard key={rent.id} rent={rent} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant text-center mt-4">
          <MaterialIcon name="home_work" className="text-outline text-5xl mb-3" />
          <p className="font-title-md text-title-md text-primary mb-1">No hay anuncios con esos filtros</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Prueba quitando algún filtro o busca otro metro.
          </p>
        </div>
      )}

      <PublishModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onPublish={publish}
        title="Publica tu alquiler"
        subtitle="Se publica al instante, sin esperas."
        fields={publishFields}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Alquiler publicado, ya está visible
        </div>
      )}
    </main>
  )
}
