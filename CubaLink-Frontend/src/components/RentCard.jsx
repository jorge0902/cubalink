import MaterialIcon from './MaterialIcon'
import { rentTypes } from '../data/rentals'

const fmtPrice = (n) => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ')

export default function RentCard({ rent, variant = 'full' }) {
  const typeInfo = rentTypes.find((t) => t.id === rent.type)
  const isAvailable = rent.available === 'inmediato'

  // Variante compacta estilo Dubizzle: foto limpia + precio + título + ubicación
  if (variant === 'compact') {
    return (
      <article className="group cursor-pointer">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-container">
          <img
            src={rent.photos[0]}
            alt={rent.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {isAvailable && (
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-primary text-[10px] font-semibold shadow-sm">
              Disponible
            </span>
          )}
          <button
            aria-label="Guardar en favoritos"
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-on-surface-variant hover:text-brand-gold flex items-center justify-center shadow-sm transition-all active:scale-90"
          >
            <MaterialIcon name="favorite_border" className="text-[16px]" />
          </button>
        </div>
        <div className="pt-2">
          <p className="font-bold text-[15px] text-primary leading-tight">{fmtPrice(rent.price)}₽</p>
          <h3 className="text-sm font-normal text-gray-800 line-clamp-2 leading-snug mt-0.5">{rent.title}</h3>
          <p className="text-xs text-gray-500 truncate mt-0.5">{rent.metro}</p>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all group flex flex-col">
      {/* Foto */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={rent.photos[0]}
          alt={rent.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-white/95 text-primary font-label-sm text-label-sm shadow-sm flex items-center gap-1">
            <MaterialIcon name={typeInfo.icon} className="text-[14px]" />
            {typeInfo.label}
          </span>
          {rent.featured && (
            <span className="px-3 py-1 rounded-full bg-brand-gold text-white font-label-sm text-label-sm shadow-sm font-bold">
              Destacado
            </span>
          )}
        </div>
        {isAvailable && (
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm">
            Disponible ya
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="text-brand-gold font-bold text-title-md">
            {fmtPrice(rent.price)}₽
          </span>
          <span className="text-on-surface-variant text-label-sm font-label-sm">{rent.priceNote}</span>
        </div>

        <h3 className="font-title-md text-title-md text-primary mb-2 line-clamp-2 group-hover:text-brand-blue-deep transition-colors">
          {rent.title}
        </h3>

        <div className="flex items-center gap-1.5 text-on-surface-variant text-label-sm font-label-sm mb-3">
          <MaterialIcon name="location_on" className="text-[16px] text-brand-blue-deep" />
          <span>{rent.metro}</span>
          <span className="text-outline">•</span>
          <span>{rent.district.split(' ')[0]}</span>
        </div>

        {/* Datos clave */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-surface-container-low rounded-lg p-2 text-center">
            <p className="text-primary font-bold text-sm">{rent.rooms === 0 ? 'Cama' : rent.rooms}</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">Hab.</p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-2 text-center">
            <p className="text-primary font-bold text-sm">{rent.baths}</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">Baños</p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-2 text-center">
            <p className="text-primary font-bold text-sm">{rent.area} m²</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wide">Área</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {rent.furnished && (
            <span className="px-2 py-0.5 bg-secondary-container/25 text-on-secondary-container text-[11px] rounded-full font-semibold">
              Amueblado
            </span>
          )}
          {rent.pets && (
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[11px] rounded-full font-semibold">
              Mascotas OK
            </span>
          )}
          {rent.commission > 0 ? (
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[11px] rounded-full">
              Comisión {fmtPrice(rent.commission)}₽
            </span>
          ) : (
            <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[11px] rounded-full">
              Sin comisión
            </span>
          )}
        </div>

        <p className="text-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2 flex-grow">
          {rent.description}
        </p>

        {/* Anunciante + contacto */}
        <div className="pt-4 border-t border-outline-variant">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-blue-deep flex items-center justify-center text-white font-bold text-sm">
                {rent.advertiser.replace('~', '').charAt(0)}
              </div>
              <div>
                <p className="text-label-sm font-label-sm text-primary font-semibold">{rent.advertiser}</p>
                <p className="text-[11px] text-on-surface-variant">{rent.posted}</p>
              </div>
            </div>
            <span className="text-[11px] text-outline flex items-center gap-1">
              <MaterialIcon name="verified_user" className="text-[14px]" />
              Particular
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={`tel:${rent.phone.replace(/\s/g, '')}`}
              className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-1.5 active:scale-95"
            >
              <MaterialIcon name="phone" className="text-[16px]" />
              Contactar
            </a>
            <button className="w-10 bg-surface-container text-primary rounded-lg hover:bg-surface-container-high transition-colors flex items-center justify-center active:scale-95">
              <MaterialIcon name="favorite_border" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
