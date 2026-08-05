import MaterialIcon from './MaterialIcon'
import { marketCategories } from '../data/marketplace'

const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

const conditionStyles = {
  'Nuevo': 'bg-primary/10 text-primary',
  'Como nuevo': 'bg-secondary-container/30 text-on-secondary-container',
  'Usado': 'bg-surface-container text-on-surface-variant',
  'Para reparar': 'bg-error-container/40 text-on-error-container',
}

export default function ProductCard({ product, isFavorite, onToggleFavorite, onShare, variant = 'full' }) {
  const cat = marketCategories.find((c) => c.id === product.category)

  // Variante compacta estilo Dubizzle: foto limpia + precio + título + ubicación
  if (variant === 'compact') {
    return (
      <article className="group cursor-pointer">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container">
          <img
            src={product.photos[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <button
            onClick={() => onToggleFavorite(product.id)}
            aria-label="Guardar en favoritos"
            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all active:scale-90 ${
              isFavorite ? 'bg-brand-gold text-white' : 'bg-white/90 text-on-surface-variant hover:text-brand-gold'
            }`}
          >
            <MaterialIcon name={isFavorite ? 'favorite' : 'favorite_border'} className="text-[16px]" />
          </button>
        </div>
        <div className="pt-2">
          <p className="font-bold text-[15px] text-primary leading-tight">{fmtPrice(product.price)}₽</p>
          <h3 className="text-sm font-normal text-gray-800 line-clamp-2 leading-snug mt-0.5">{product.title}</h3>
          <p className="text-xs text-gray-500 truncate mt-0.5">{product.location}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all group flex flex-col">
      {/* Foto */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.photos[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-primary font-label-sm text-label-sm shadow-sm flex items-center gap-1">
          <MaterialIcon name={cat?.icon || 'category'} className="text-[14px]" />
          {cat?.label || 'Otros'}
        </span>
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => onToggleFavorite(product.id)}
            aria-label="Guardar en favoritos"
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-all active:scale-90 ${
              isFavorite ? 'bg-brand-gold text-white' : 'bg-white/95 text-on-surface-variant hover:text-brand-gold'
            }`}
          >
            <MaterialIcon name={isFavorite ? 'favorite' : 'favorite_border'} className="text-[18px]" />
          </button>
          <button
            onClick={() => onShare(product)}
            aria-label="Compartir"
            className="w-9 h-9 rounded-full bg-white/95 text-on-surface-variant flex items-center justify-center shadow-sm hover:text-brand-blue-deep transition-colors active:scale-90"
          >
            <MaterialIcon name="share" className="text-[18px]" />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="text-brand-gold font-bold text-title-md">{fmtPrice(product.price)}₽</span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${conditionStyles[product.condition] || 'bg-surface-container text-on-surface-variant'}`}
          >
            {product.condition}
          </span>
        </div>

        <h3 className="font-title-md text-title-md text-primary mb-2 line-clamp-2 group-hover:text-brand-blue-deep transition-colors">
          {product.title}
        </h3>

        <p className="text-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-outline-variant mb-3">
          <span className="text-on-surface-variant text-label-sm font-label-sm flex items-center gap-1">
            <MaterialIcon name="location_on" className="text-[15px] text-brand-blue-deep" />
            {product.location}
          </span>
          <span className="text-outline text-label-sm font-label-sm">{product.date}</span>
        </div>

        <div className="flex gap-2">
          <a
            href={`tel:${product.phone.replace(/\s/g, '')}`}
            className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <MaterialIcon name="chat" className="text-[16px]" />
            Escribir
          </a>
          <span className="flex items-center gap-1 text-on-surface-variant text-label-sm font-label-sm px-2">
            <MaterialIcon name="favorite" className="text-[16px] text-brand-gold" />
            {product.favorites}
          </span>
        </div>
      </div>
    </article>
  )
}
