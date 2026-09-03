import MaterialIcon from './MaterialIcon'
import { travelTypes } from '../data/travel'

const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  return `${d} ${months[m - 1]} ${y}`
}

// Estilo por tipo: pastilla + franja de acento
const typeStyle = {
  'agencia_pasajes': { pill: 'bg-cyan-50 text-cyan-700', bar: 'bg-gradient-to-r from-cyan-500 to-sky-400' },
  'rus_a_cuba': { pill: 'bg-primary/10 text-primary', bar: 'bg-gradient-to-r from-blue-500 to-sky-400' },
  'cuba_a_rus': { pill: 'bg-emerald-50 text-emerald-700', bar: 'bg-gradient-to-r from-emerald-500 to-teal-400' },
  'busco_paquete': { pill: 'bg-rose-50 text-rose-700', bar: 'bg-gradient-to-r from-rose-400 to-pink-500' },
  'llevo_paquetes': { pill: 'bg-violet-50 text-violet-700', bar: 'bg-gradient-to-r from-violet-500 to-purple-400' },
  'busco_acompanante': { pill: 'bg-sky-50 text-sky-700', bar: 'bg-gradient-to-r from-sky-500 to-cyan-400' },
  'espacio_equipaje': { pill: 'bg-indigo-50 text-indigo-700', bar: 'bg-gradient-to-r from-indigo-500 to-blue-400' },
}
const fallback = { pill: 'bg-surface-container text-on-surface-variant', bar: 'from-slate-400 to-slate-500' }

export default function TravelCard({ trip }) {
  const typeInfo = travelTypes.find((t) => t.id === trip.type)
  const st = typeStyle[trip.type] || fallback

  return (
    <article className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all overflow-hidden flex flex-col group">
      {/* Franja de acento por tipo */}
      <div className={`h-1 w-full ${st.bar}`} />

      <div className="p-5 flex flex-1 flex-col">
        {/* Header: tipo + verificado */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold inline-flex items-center gap-1.5 ${st.pill}`}>
            <MaterialIcon name={typeInfo?.icon || 'flight'} className="text-[14px]" />
            {typeInfo?.label || trip.type}
          </span>
          {trip.agency ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 font-label-sm text-label-sm font-semibold">
              <MaterialIcon name="verified" className="text-[14px]" />
              Verificado
            </span>
          ) : (
            <span className="inline-flex items-center text-outline font-label-sm text-label-sm">
              Sin verificar
            </span>
          )}
        </div>

        {/* Ruta destacada */}
        <div className="bg-surface-container-low rounded-xl border border-outline-variant/70 p-3.5 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 min-w-0 text-center">
              <div className="text-on-surface-variant text-[10px] font-medium uppercase tracking-wide mb-0.5">Salida</div>
              <div className="text-primary font-extrabold text-[17px] leading-tight truncate">{trip.from}</div>
            </div>
            <div className="flex flex-col items-center gap-0.5 flex-shrink-0 px-1">
              <MaterialIcon name="flight_takeoff" className="text-[16px] text-brand-gold" />
              <div className="w-8 h-px bg-outline-variant" />
              <MaterialIcon name="flight_land" className="text-[16px] text-brand-gold" />
            </div>
            <div className="flex-1 min-w-0 text-center">
              <div className="text-on-surface-variant text-[10px] font-medium uppercase tracking-wide mb-0.5">Llegada</div>
              <div className="text-on-surface font-extrabold text-[17px] leading-tight truncate">{trip.to}</div>
            </div>
          </div>
        </div>

        {/* Detalle de viaje */}
        <div className="flex items-center gap-2 mb-3">
          <MaterialIcon name={trip.agency ? 'airline_seat_recline_normal' : 'event'} className="text-[16px] text-primary" />
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            <span className="font-semibold text-on-surface">{trip.agency ? (trip.compagny || 'Agencia') : fmtDate(trip.date)}</span>
            {!trip.agency && trip.weight > 0 && ` · ${trip.weight} kg disponibles`}
          </span>
        </div>

        {/* Peso / precio — para agencias la tarifa del pasaje */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {trip.agency ? (
            <>
              <div className="bg-surface-container-low rounded-lg p-3 text-center">
                <p className="text-brand-gold font-extrabold text-title-md leading-none">{trip.fare}</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Pasaje ida y vuelta</p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 text-center">
                <p className="text-primary font-extrabold text-title-md leading-none flex items-center justify-center gap-1">
                  <MaterialIcon name="support_agent" className="text-[18px]" />
                  Asesoría
                </p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">En tu idioma</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-surface-container-low rounded-lg p-3 text-center">
                <p className="text-primary font-extrabold text-title-md leading-none">
                  {trip.weight > 0 ? `${trip.weight} kg` : '—'}
                </p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wide mt-1">Peso disp.</p>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 text-center">
                <p className="text-brand-gold font-extrabold text-title-md leading-none">
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

        {/* Footer */}
        <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
          <span className="text-outline text-label-sm font-label-sm inline-flex items-center gap-1">
            <MaterialIcon name="schedule" className="text-[15px]" />
            {trip.posted}
          </span>
          <a
            href={`tel:${trip.contact.replace(/\s/g, '')}`}
            className="bg-brand-blue-deep text-white px-5 py-2.5 rounded-lg font-label-sm text-label-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5 shadow-md shadow-primary/20 active:scale-95"
          >
            <MaterialIcon name="chat" className="text-[16px]" />
            Contactar
          </a>
        </div>
      </div>
    </article>
  )
}