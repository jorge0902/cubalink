import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'
import { useFavorites } from '../context/FavoritesContext'

const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

// Corazón de favoritos compartido (localStorage) — misma fuente de verdad que el header y /guardados
function FavHeart({ favKey, dark = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(favKey)
  return (
    <button
      aria-label={active ? 'Quitar de favoritos' : 'Guardar en favoritos'}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(favKey)
      }}
      className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all active:scale-90 z-10 ${
        active
          ? 'bg-brand-gold text-white'
          : dark
            ? 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/50'
            : 'bg-white/95 text-gray-600 hover:text-brand-gold'
      }`}
    >
      <MaterialIcon name={active ? 'favorite' : 'favorite_border'} fill={active} className="text-[16px]" />
    </button>
  )
}

// Tarjeta de anuncio estilo Dubizzle: imagen arriba, corazón, insignia, precio grande, título 2 líneas, ubicación
export function ListingCard({ item }) {
  return (
    <article className="group cursor-pointer snap-start shrink-0 w-[62%] sm:w-[46%] md:w-[38%] lg:w-[24.5%] xl:w-[19.5%]">
      <div className="relative aspect-[4/3] rounded-t-2xl overflow-hidden bg-surface-container">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <FavHeart favKey={item.favKey} />
        {item.available && (
          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-semibold shadow-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-soft-pulse"></span>
            Disponible
          </span>
        )}
      </div>
      <div className="bg-surface-container-lowest rounded-b-2xl border border-t-0 border-outline-variant/60 px-3 pt-2.5 pb-3 -mt-px">
        <p className="font-bold text-[17px] md:text-[18px] text-primary leading-tight truncate">{item.price}</p>
        <h3 className="text-[13px] text-gray-800 line-clamp-2 leading-snug mt-1 min-h-[2.4em]">{item.title}</h3>
        <p className="text-[11px] text-gray-500 truncate mt-1 flex items-center gap-0.5">
          <MaterialIcon name="location_on" className="text-[12px] flex-shrink-0" />
          {item.location}
        </p>
      </div>
    </article>
  )
}

// Carrusel horizontal Dubizzle: una fila, scroll-snap, barra oculta, 1.5 tarjetas visibles en móvil
export default function ListingCarousel({ title, icon, to, items, accentText = 'text-brand-blue-deep' }) {
  return (
    <section className="max-w-6xl mx-auto pb-14">
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="font-headline-md text-[19px] sm:text-headline-md text-primary flex items-center gap-2">
          <span className="text-2xl">{icon}</span> {title}
        </h2>
        <Link
          to={to}
          className={`${accentText} font-bold flex items-center gap-1 hover:text-brand-gold transition-colors text-label-sm whitespace-nowrap`}
        >
          Ver todos <MaterialIcon name="arrow_forward" className="text-sm" />
        </Link>
      </div>
      {/* -mx-6: el carrusel rompe el padding y llega al borde de pantalla, insinuando el deslizamiento */}
      <div className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden scroll-smooth">
        <div className="flex gap-3 md:gap-4 w-max">
          {items.map((item) => (
            <ListingCard key={item.favKey} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
