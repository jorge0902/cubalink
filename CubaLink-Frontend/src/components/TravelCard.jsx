import MaterialIcon from './MaterialIcon'
import { travelTypes } from '../data/travel'

const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  return `${d} ${months[m - 1]} ${y}`
}

export default function TravelCard({ trip }) {
  const typeInfo = travelTypes.find((t) => t.id === trip.type)

  const typeStyle = {
    'agencia_pasajes': 'bg-brand-gold text-white',
    'rus_a_cuba': 'bg-primary text-white',
    'cuba_a_rus': 'bg-secondary-container text-on-secondary-container',
    'busco_paquete': 'bg-error-container/40 text-on-error-container',
    'llevo_paquetes': 'bg-primary/10 text-primary',
    'busco_acompanante': 'bg-tertiary-container/30 text-on-tertiary-container',
    'espacio_equipaje': 'bg-secondary-container/30 text-on-secondary-container',
  }

  return (
    <article className="bg-surface-container-lowest rounded-xl border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all p-6 flex flex-col group">
      {/* Tipo */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${typeStyle[trip.type] || 'bg-surface-container text-on-surface-variant'}`}>
          {typeInfo?.label || trip.type}
        </span>
        {trip.agency && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 font-label-sm text-label-sm">
            <MaterialIcon name="verified" className="text-[14px]" />
            Verificado
          </span>
        )}
      </div>

      {/* Ruta */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
          <MaterialIcon name={typeInfo?.icon || 'flight'} className="text-[22px]" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-title-md font-title-md text-primary">
            <span className="truncate">{trip.from}</span>
            <MaterialIcon name="arrow_forward" className="text-[18px] text-brand-gold flex-shrink-0" />
            <span className="truncate">{trip.to}</span>
          </div>
          <p className="text-label-sm text-on-surface-variant font-label-sm mt-0.5">
            {trip.agency ? (trip.compagny || 'Agencia') : fmtDate(trip.date)}
          </p>
        </div>
      </div>

      {/* Peso / precio — para agencias se muestra la tarifa del pasaje */}
      <div className="grid grid-cols-2 gap-2 my-4">
        {trip.agency ? (
          <>
            <div className="bg-surface-container-low rounded-lg p-2.5 text-center col-span-1">
              <p className="text-brand-gold font-bold text-title-md leading-none">{trip.fare}</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Pasaje ida y vuelta</p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-2.5 text-center">
              <p className="text-primary font-bold text-title-md leading-none flex items-center justify-center gap-1">
                <MaterialIcon name="support_agent" className="text-[18px]" />
                Asesoría
              </p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">En tu idioma</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-surface-container-low rounded-lg p-2.5 text-center">
              <p className="text-primary font-bold text-title-md leading-none">
                {trip.weight > 0 ? `${trip.weight} kg` : '—'}
              </p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Peso disp.</p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-2.5 text-center">
              <p className="text-brand-gold font-bold text-title-md leading-none">
                {trip.price > 0 ? `${trip.price}₽/kg` : 'Gratis'}
              </p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Precio</p>
            </div>
          </>
        )}
      </div>

      <p className="text-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3 flex-grow">
        {trip.description}
      </p>

      <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
        <span className="text-outline text-label-sm font-label-sm flex items-center gap-1">
          <MaterialIcon name="schedule" className="text-[15px]" />
          {trip.posted}
        </span>
        <a
          href={`tel:${trip.contact.replace(/\s/g, '')}`}
          className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center gap-1.5 active:scale-95"
        >
          <MaterialIcon name="chat" className="text-[16px]" />
          Contactar
        </a>
      </div>
    </article>
  )
}
