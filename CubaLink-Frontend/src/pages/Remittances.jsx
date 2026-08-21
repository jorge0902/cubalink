import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import RemittanceCard from '../components/RemittanceCard'
import PublishModal from '../components/PublishModal'
import CaimanCashBanner from '../components/CaimanCashBanner'
import { remittances, remittanceTypes, paymentMethods, safetyRules } from '../data/remittances'

const publishFields = [
  { key: 'type', label: 'Tipo de operación', type: 'select', required: true, options: remittanceTypes.map((t) => t.label) },
  { key: 'rate', label: 'Tasa ofrecida', placeholder: 'Ej: 1 RUB = 3.2 CUP', required: true },
  { key: 'commission', label: 'Comisión', placeholder: 'Ej: 2% o Sin comisión' },
  { key: 'method', label: 'Método de pago', type: 'select', required: true, options: paymentMethods },
  { key: 'city', label: 'Ciudad', placeholder: 'Moscú, San Petersburgo u Online', required: true },
  { key: 'phone', label: 'Tu teléfono (contacto)', placeholder: '+7 ...', required: true },
  { key: 'comments', label: 'Condiciones y comentarios', type: 'textarea', placeholder: 'Explica tus condiciones, montos y cómo operas...', required: true },
]

export default function Remittances() {
  const [items, setItems] = useState(remittances)
  const [typeFilter, setTypeFilter] = useState('todos')
  const [methodFilter, setMethodFilter] = useState('todos')
  const [onlyVerified, setOnlyVerified] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)

  const filtered = items.filter((r) => {
    const okType = typeFilter === 'todos' || r.type === typeFilter
    const okMethod = methodFilter === 'todos' || r.method === methodFilter
    const okVerified = !onlyVerified || r.verified
    return okType && okMethod && okVerified
  })

  const publish = (form) => {
    const typeInfo = remittanceTypes.find((t) => t.label === form.type)
    const newRem = {
      id: Date.now(),
      type: typeInfo?.id || 'rub_cup',
      rate: form.rate,
      commission: form.commission || 'Sin comisión',
      method: form.method,
      city: form.city,
      date: 'Hoy',
      comments: form.comments,
      contact: form.phone,
      posted: 'Recién publicado',
      verified: false,
    }
    setItems((prev) => [newRem, ...prev])
    setModalOpen(false)
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <main className="pt-20 pb-24 min-h-screen max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header */}
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
              Remesas Cuba ⇄ Rusia 💸
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Contacta con personas que envían dinero entre Rusia y Cuba. Compara tasas, elige con confianza y opera con gente de la comunidad.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-brand-blue-deep text-white px-6 py-3 rounded-xl font-label-sm text-label-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 self-start md:self-auto"
          >
            <MaterialIcon name="currency_exchange" className="text-[18px]" />
            Publicar oferta
          </button>
        </div>

        {/* Advertencia de seguridad */}
        <div className="bg-error-container/40 border border-error/30 rounded-xl p-4 md:p-5 flex gap-3 items-start">
          <MaterialIcon name="warning" className="text-error text-[22px] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-label-sm text-label-sm text-on-error-container font-bold mb-1">
              ⚠️ CubaLink solo conecta personas. No participa en las transacciones ni garantiza su cumplimiento.
            </p>
            <p className="text-label-sm font-label-sm text-on-error-container/90 leading-relaxed">
              Opera siempre bajo tu propio criterio, verifica al contacto y sigue las reglas de seguridad. Reporta cualquier actividad sospechosa a la comunidad.
            </p>
          </div>
        </div>

        {/* Referencia de cambio */}
        <div className="mt-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-wrap items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
            <MaterialIcon name="currency_ruble" className="text-[20px]" />
          </span>
          <div className="flex-1 min-w-[200px]">
            <p className="font-label-sm text-label-sm text-primary font-bold">
              Tasa de referencia (moneda nacional)
            </p>
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              1 RUB = 10.30 CUP (peso cubano) — orientativa, cada quien publica su tasa del día.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-label-sm text-label-sm font-bold">
            1 ₽ → 10.30 CUP
          </span>
        </div>
      </section>

      {/* Caiman Cash Banner - Inserted after reference rate */}
      <CaimanCashBanner />

      {/* Separador P2P */}
      <div className="mb-8 text-center">
        <h3 className="font-title-md text-title-md text-primary mb-1">
          Explora también las ofertas de la comunidad
        </h3>
        <p className="text-on-surface-variant text-label-sm font-label-sm">
          Compara tasas y métodos publicados por otros usuarios y proveedores.
        </p>
      </div>

      {/* Filtros */}
      <section className="mb-8 space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setTypeFilter('todos')}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${
              typeFilter === 'todos'
                ? 'active-pill shadow-md border border-primary'
                : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            Todas
          </button>
          {remittanceTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTypeFilter(t.id)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5 ${
                typeFilter === t.id
                  ? 'active-pill shadow-md border border-primary'
                  : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <MaterialIcon name={t.icon} className="text-[15px]" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <select
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
            className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-label-sm font-label-sm text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="todos">Método: Todos</option>
            {paymentMethods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <button
            onClick={() => setOnlyVerified((v) => !v)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-1.5 ${
              onlyVerified
                ? 'bg-secondary-container text-on-secondary-container font-bold'
                : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <MaterialIcon name="verified" className="text-[15px]" />
            Solo verificados
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((rem) => (
          <RemittanceCard key={rem.id} rem={rem} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant text-center mt-4">
          <MaterialIcon name="currency_exchange" className="text-outline text-5xl mb-3" />
          <p className="font-title-md text-title-md text-primary mb-1">No hay ofertas con esos filtros</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Prueba con otro tipo de operación o método de pago.
          </p>
        </div>
      )}

      {/* Reglas de seguridad */}
      <section className="mt-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-6 md:p-8">
        <h2 className="font-title-md text-title-md text-primary mb-1 flex items-center gap-2">
          <MaterialIcon name="shield" className="text-brand-gold" />
          Reglas de oro de la comunidad
        </h2>
        <p className="text-label-sm font-label-sm text-on-surface-variant mb-5">
          Estas reglas te protegen a ti y a los tuyos. Léelas antes de operar.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {safetyRules.map((rule, i) => (
            <li key={i} className="flex gap-3 items-start bg-surface-container-low/60 rounded-lg p-3.5">
              <span className="w-6 h-6 rounded-full bg-brand-gold text-white text-label-sm font-label-sm flex items-center justify-center flex-shrink-0 font-bold">
                {i + 1}
              </span>
              <span className="text-body-md text-body-md text-on-surface">{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <PublishModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onPublish={publish}
        title="Publica tu oferta"
        subtitle="Sé claro con tu tasa y condiciones. La confianza es lo primero."
        fields={publishFields}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Oferta publicada, ya está visible
        </div>
      )}
    </main>
  )
}