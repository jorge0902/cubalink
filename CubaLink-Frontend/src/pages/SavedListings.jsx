import { Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import { ListingCard } from '../components/ListingCarousel'
import { useFavorites } from '../context/FavoritesContext'
import { rentals } from '../data/rentals'
import { marketProducts } from '../data/marketplace'
import { jobs } from '../data/jobs'

const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

// Normaliza cada dataset a la anatomía de tarjeta Dubizzle
const buildItems = () => [
  ...rentals.map((r) => ({
    favKey: `rent-${r.id}`,
    img: r.photos[0],
    price: `${fmtPrice(r.price)} ₽`,
    title: r.title,
    location: r.metro,
    available: r.available === 'inmediato',
  })),
  ...marketProducts.map((p) => ({
    favKey: `prod-${p.id}`,
    img: p.photos[0],
    price: `${fmtPrice(p.price)} ₽`,
    title: p.title,
    location: p.location,
    available: true,
  })),
  ...jobs.map((j) => ({
    favKey: `job-${j.id}`,
    img: j.image,
    price: j.salary,
    title: `${j.title} · ${j.company}`,
    location: j.location,
    available: true,
  })),
]

export default function SavedListings() {
  const { favorites } = useFavorites()
  const saved = buildItems().filter((i) => favorites.includes(i.favKey))

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-28 sm:pb-20">
        <div className="flex items-center justify-between mb-6 animate-fade-in-up">
          <h1 className="font-headline-lg text-headline-lg text-primary flex items-center gap-2">
            <MaterialIcon name="favorite" fill className="text-brand-gold" /> Guardados
          </h1>
          <span className="px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold font-bold text-label-sm">
            {saved.length}
          </span>
        </div>

        {saved.length === 0 ? (
          <div className="text-center py-20 animate-fade-in-up">
            <span className="w-20 h-20 mx-auto rounded-3xl bg-surface-container-low flex items-center justify-center mb-5">
              <MaterialIcon name="favorite_border" className="text-4xl text-outline" />
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Aún no has guardado nada</h2>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-8">
              Toca el corazón de cualquier anuncio para guardarlo aquí y encontrarlo rápido cuando lo necesites.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-label-sm text-label-sm hover:opacity-90 transition-all"
            >
              Explorar anuncios <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in-up">
            {saved.map((item) => (
              <ListingCard key={item.favKey} item={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
