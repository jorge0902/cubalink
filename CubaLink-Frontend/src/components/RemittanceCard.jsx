import MaterialIcon from './MaterialIcon'
import { remittanceTypes } from '../data/remittances'

const directionStyle = {
  send: {
    pill: 'bg-primary/10 text-primary',
    accent: 'bg-primary',
    icon: 'currency_exchange',
  },
  exchange: {
    pill: 'bg-emerald-50 text-emerald-700',
    accent: 'bg-emerald-500',
    icon: 'swap_horiz',
  },
  buy: {
    pill: 'bg-teal-50 text-teal-700',
    accent: 'bg-teal-500',
    icon: 'add_card',
  },
  sell: {
    pill: 'bg-violet-50 text-violet-700',
    accent: 'bg-violet-500',
    icon: 'currency_bitcoin',
  },
}

const directionLabel = {
  send: 'Envío',
  exchange: 'Cambio',
  buy: 'Compro',
  sell: 'Vendo',
}

// Separa "1 RUB = 10.30 CUP" en [origen, destino]
function parseRate(rate) {
  const m = rate.split('=')
  if (m.length === 2) return { from: m[0].trim(), to: m[1].trim() }
  return { from: rate, to: '' }
}

export default function RemittanceCard({ rem }) {
  const typeInfo = remittanceTypes.find((t) => t.id === rem.type)
  const st = directionStyle[typeInfo?.direction] || directionStyle.send
  const { from, to } = parseRate(rem.rate)

  return (
    <article className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant custom-shadow hover:border-primary hover:shadow-lg transition-all overflow-hidden flex flex-col group">
      {/* Franja de acento superior por tipo */}
      <div className={`h-1 w-full ${st.accent}`} />

      <div className="p-6 flex flex-1 flex-col">
        {/* Header: tipo + verificado */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold inline-flex items-center gap-1.5 ${st.pill}`}>
            <MaterialIcon name={st.icon} className="text-[14px]" />
            {directionLabel[typeInfo?.direction]}
          </span>
          {rem.verified ? (
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 font-label-sm text-label-sm font-semibold">
              <MaterialIcon name="verified" fill className="text-[15px]" />
              Verificado
            </span>
          ) : (
            <span className="inline-flex items-center text-outline font-label-sm text-label-sm">
              Sin verificar
            </span>
          )}
        </div>

        {/* Tasa destacada tipo ticker */}
        <div className="bg-surface-container-low rounded-xl border border-outline-variant/70 px-4 py-3 mb-3">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-on-surface-variant text-[11px] font-medium uppercase tracking-wide mb-0.5">
                Desde
              </div>
              <div className="text-primary font-extrabold text-[22px] leading-none truncate">
                {from}
              </div>
            </div>
            {to && (
              <>
                <MaterialIcon name="arrow_right_alt" className="text-[22px] text-outline flex-shrink-0" />
                <div className="min-w-0 text-right">
                  <div className="text-on-surface-variant text-[11px] font-medium uppercase tracking-wide mb-0.5">
                    Recibe
                  </div>
                  <div className="text-on-surface font-extrabold text-[22px] leading-none truncate">
                    {to}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Comisión */}
        <div className="flex items-center gap-2 mb-3">
          <MaterialIcon name="percent" className="text-[16px] text-primary" />
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            Comisión: <span className="font-semibold text-on-surface">{rem.commission}</span>
          </span>
        </div>

        {/* Método + ciudad */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2.5 py-1 bg-surface-container rounded-full text-label-sm text-on-surface-variant inline-flex items-center gap-1">
            <MaterialIcon name="account_balance_wallet" className="text-[14px]" />
            {rem.method}
          </span>
          <span className="px-2.5 py-1 bg-surface-container rounded-full text-label-sm text-on-surface-variant inline-flex items-center gap-1">
            <MaterialIcon name="location_on" className="text-[14px]" />
            {rem.city}
          </span>
        </div>

        <p className="text-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3 flex-grow">
          {rem.comments}
        </p>

        {/* Footer */}
        <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
          <span className="text-outline text-label-sm font-label-sm inline-flex items-center gap-1">
            <MaterialIcon name="schedule" className="text-[15px]" />
            {rem.posted}
          </span>
          <a
            href={`tel:${rem.contact.replace(/\s/g, '')}`}
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