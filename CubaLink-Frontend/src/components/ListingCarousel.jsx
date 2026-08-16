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
      className={`absolute top-1.5 right-1.5 w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-all active:scale-90 z-10 ${
        active
          ? 'bg-brand-gold text-white'
          : dark
            ? 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/50'
            : 'bg-white/95 text-gray-600 hover:text-brand-gold'
      }`}
    >
      <MaterialIcon name={active ? 'favorite' : 'favorite_border'} fill={active} className="text-[15px]" />
    </button>
  )
}

// Tarjeta de anuncio estilo Dubizzle, tamaño compacto FIJO:
// - El ancho lo decide el padre (w-[160px] móvil / w-[220px] desktop en el carrusel; w-full en grids)
// - Imagen con altura FIJA (120px móvil / 145px desktop) + object-cover, nunca crece
// - flex-shrink: 0 para que el contenedor flex jamás la deforme
export function ListingCard({ item }) {
  return (
    <article className="group cursor-pointer w-full shrink-0">
      <div className="relative h-[120px] md:h-[145px] rounded-t-2xl overflow-hidden bg-surface-container">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <FavHeart favKey={item.favKey} />
        {item.available && (
          <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-semibold shadow-md flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white animate-soft-pulse"></span>
            Disponible
          </span>
        )}
      </div>
      <div className="bg-surface-container-lowest rounded-b-2xl border border-t-0 border-outline-variant/60 px-2.5 pt-2 pb-2.5 -mt-px">
        <p className="font-bold text-[15px] text-primary leading-tight truncate">{item.price}</p>
        <h3 className="text-[12px] text-gray-800 line-clamp-2 leading-snug mt-0.5 min-h-[2.2em]">{item.title}</h3>
        <p className="text-[10px] text-gray-500 truncate mt-1 flex items-center gap-0.5">
          <MaterialIcon name="location_on" className="text-[11px] flex-shrink-0" />
          {item.location}
        </p>
      </div>
    </article>
  )
}

// Carrusel horizontal Dubizzle con tarjetas de ANCHO FIJO:
// - flex: 0 0 160px en móvil (entran 2 tarjetas completas) → 220px en desktop
// - overflow-x auto + scroll-snap x mandatory + barra oculta
// - gap 12px como pediste
export default function ListingCarousel({ title, icon, to, items, accentText = 'text-brand-blue-deep' }) {
  return (
    <section className="max-w-6xl mx-auto pb-12">
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
      {/* -mx-6 px-6: el carrusel llega al borde de pantalla insinuando el deslizamiento.
          Sin w-max ni porcentajes: cada tarjeta tiene ancho fijo en px (160/220), sin estiramiento */}
      <div className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden scroll-smooth">
        <div className="flex gap-3">
          {items.map((item) => (
            <div key={item.favKey} className="snap-start shrink-0 basis-[160px] sm:basis-[220px]">
              <ListingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
