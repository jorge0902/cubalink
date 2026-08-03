import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import ProductCard from '../components/ProductCard'
import PublishModal from '../components/PublishModal'
import { marketProducts, marketCategories, productConditions } from '../data/marketplace'

const publishFields = [
  { key: 'title', label: 'Título del producto', placeholder: 'Ej: Xiaomi Redmi Note 12, 128GB', required: true },
  { key: 'category', label: 'Categoría', type: 'select', required: true, options: marketCategories.filter((c) => c.id !== 'todos').map((c) => c.label) },
  { key: 'price', label: 'Precio (₽)', type: 'number', placeholder: 'Ej: 15000', required: true },
  { key: 'condition', label: 'Estado', type: 'select', options: productConditions },
  { key: 'location', label: 'Ubicación / metro', placeholder: 'Ej: Metro Krylatskoe', required: true },
  { key: 'phone', label: 'Tu teléfono (contacto)', placeholder: '+7 ...', required: true },
  { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Describe el producto, su estado y cómo entregas...', required: true },
]

export default function Marketplace() {
  const [items, setItems] = useState(marketProducts)
  const [catFilter, setCatFilter] = useState('todos')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [showFavs, setShowFavs] = useState(false)

  const filtered = items.filter((p) => {
    const okCat = catFilter === 'todos' || p.category === catFilter
    const okQuery =
      query.trim() === '' ||
      `${p.title} ${p.description} ${p.location}`.toLowerCase().includes(query.toLowerCase())
    const okFav = !showFavs || favorites[p.id]
    return okCat && okQuery && okFav
  })

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      return next
    })
  }

  const share = async (product) => {
    const text = `${product.title} — ${product.price}₽ en CubaLink Marketplace`
    if (navigator.share) {
      try {
        await navigator.share({ title: product.title, text })
        return
      } catch {
        /* usuario canceló */
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      setToast('Enlace copiado al portapapeles ✓')
      setTimeout(() => setToast(''), 2500)
    }
  }

  const publish = (form) => {
    const cat = marketCategories.find((c) => c.label === form.category)
    const newProduct = {
      id: Date.now(),
      title: form.title,
      category: cat?.id || 'otros',
      price: Number(form.price) || 0,
      condition: form.condition || 'Usado',
      location: form.location,
      date: 'Recién publicado',
      description: form.description,
      seller: '~Tú',
      phone: form.phone,
      photos: ['/images/producto-telefono.jpg'],
      favorites: 0,
      featured: true,
    }
    setItems((prev) => [newProduct, ...prev])
    setModalOpen(false)
    setToast('✓ Anuncio publicado, ya está en el marketplace')
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
              Marketplace <span className="align-middle">🛒</span>
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Compra y vende entre cubanos en Rusia. Teléfonos, computadoras, ropa y de todo — directo, sin intermediarios.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-label-sm text-label-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            <MaterialIcon name="sell" className="text-[18px]" />
            Vender algo
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
            placeholder="Buscar productos..."
            type="text"
          />
        </div>
      </section>

      {/* Categorías */}
      <section className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {marketCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCatFilter(c.id)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5 ${
                catFilter === c.id
                  ? 'active-pill shadow-md border border-primary'
                  : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <MaterialIcon name={c.icon} className="text-[15px]" />
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={() => setShowFavs((v) => !v)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1.5 ${
              showFavs ? 'bg-brand-gold text-white shadow-md' : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <MaterialIcon name="favorite" className="text-[15px]" />
            Mis favoritos
          </button>
          <span className="text-label-sm text-on-surface-variant font-label-sm">
            {filtered.length} anuncios
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isFavorite={!!favorites[p.id]}
            onToggleFavorite={toggleFavorite}
            onShare={share}
          />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant text-center mt-4">
          <MaterialIcon name="search_off" className="text-outline text-5xl mb-3" />
          <p className="font-title-md text-title-md text-primary mb-1">Nada por aquí</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {showFavs ? 'Aún no guardas favoritos. Toca el corazón en un anuncio.' : 'Prueba con otra búsqueda o categoría.'}
          </p>
        </div>
      )}

      <PublishModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onPublish={publish}
        title="Publica tu producto"
        subtitle="En menos de 2 minutos tu anuncio está visible para toda la comunidad."
        fields={publishFields}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8 whitespace-nowrap">
          {toast}
        </div>
      )}
    </main>
  )
}
