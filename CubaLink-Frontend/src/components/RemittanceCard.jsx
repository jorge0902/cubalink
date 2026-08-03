import MaterialIcon from './MaterialIcon'
import { remittanceTypes } from '../data/remittances'

const directionStyle = {
  send: 'bg-primary/10 text-primary',
  exchange: 'bg-secondary-container/30 text-on-secondary-container',
  buy: 'bg-primary text-white',
  sell: 'bg-tertiary-container/30 text-on-tertiary-container',
}

const directionLabel = {
  send: 'Envío',
  exchange: 'Cambio',
  buy: 'Compro',
  sell: 'Vendo',
}

export default function RemittanceCard({ rem }) {
  const typeInfo = remittanceTypes.find((t) => t.id === rem.type)

  return (
    <article className="bg-surface-container-lowest rounded-xl border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all p-6 flex flex-col group">
      {/* Header: tipo + verificado */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${directionStyle[typeInfo?.direction] || 'bg-surface-container text-on-surface-variant'}`}>
          {directionLabel[typeInfo?.direction]} · {typeInfo?.label?.split(' ').slice(-1)[0] || ''}
        </span>
        {rem.verified && (
          <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
            <MaterialIcon name="verified" fill className="text-[16px]" />
            Verificado
          </span>
        )}
      </div>

      {/* Tasa */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-primary font-bold text-headline-lg-mobile leading-none">{rem.rate}</span>
      </div>
      <p className="text-on-surface-variant text-label-sm font-label-sm mb-4">
        {rem.commission}
      </p>

      {/* Método + ciudad */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2.5 py-1 bg-surface-container rounded-full text-label-sm text-on-surface-variant flex items-center gap-1">
          <MaterialIcon name="account_balance_wallet" className="text-[14px]" />
          {rem.method}
        </span>
        <span className="px-2.5 py-1 bg-surface-container rounded-full text-label-sm text-on-surface-variant flex items-center gap-1">
          <MaterialIcon name="location_on" className="text-[14px]" />
          {rem.city}
        </span>
      </div>

      <p className="text-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3 flex-grow">
        {rem.comments}
      </p>

      <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
        <span className="text-outline text-label-sm font-label-sm flex items-center gap-1">
          <MaterialIcon name="schedule" className="text-[15px]" />
          {rem.posted}
        </span>
        <a
          href={`tel:${rem.contact.replace(/\s/g, '')}`}
          className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center gap-1.5 active:scale-95"
        >
          <MaterialIcon name="chat" className="text-[16px]" />
          Contactar
        </a>
      </div>
    </article>
  )
}
