import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'

// Formularios de publicación por tipo (demo 100% frontend — datos mock)
const TYPES = {
  empleo: {
    label: 'Empleo',
    icon: 'work',
    accent: 'bg-blue-50 text-blue-700',
    subtitle: 'Publica una oferta o tu búsqueda de trabajo',
    fields: [
      { key: 'titulo', label: 'Puesto / Título', placeholder: 'Ej: Cargador en Perekrestok, albañil, cocinero...', required: true },
      {
        key: 'categoria', label: 'Categoría', type: 'select', required: true,
        options: ['Construcción', 'Carga y descarga', 'Limpieza', 'Cocina', 'Conductor', 'Servicios', 'Otro'],
      },
      { key: 'salario', label: 'Salario (₽)', placeholder: 'Ej: 80,000 ₽ / mes', required: true },
      { key: 'detalle', label: 'Detalle', type: 'textarea', placeholder: 'Horario, requisitos, zona...', required: true },
      { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
    ],
  },
  renta: {
    label: 'Renta',
    icon: 'home_work',
    accent: 'bg-emerald-50 text-emerald-700',
    subtitle: 'Publica una habitación o propiedad en alquiler',
    fields: [
      { key: 'titulo', label: 'Título', placeholder: 'Ej: Cuarto en Kotelniki, todo incluido', required: true },
      {
        key: 'tipo', label: 'Tipo de propiedad', type: 'select', required: true,
        options: ['Habitación', 'Estudio', 'Apartamento', 'Cama en cuarto compartido', 'Casa'],
      },
      { key: 'precio', label: 'Precio (₽ / mes)', placeholder: 'Ej: 25,000 ₽', required: true },
      { key: 'detalle', label: 'Detalle', type: 'textarea', placeholder: 'Zona, metro, condiciones, amueblado...', required: true },
      { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
    ],
  },
  viajes: {
    label: 'Vuelos / Viajes',
    icon: 'flight_takeoff',
    accent: 'bg-sky-50 text-sky-700',
    subtitle: 'Comparte o ofrece cupo de viaje / pasaje',
    fields: [
      {
        key: 'tipo', label: 'Tipo de viaje', type: 'select', required: true,
        options: ['Agencia: vendo pasajes', 'Viajo de Rusia a Cuba', 'Viajo de Cuba a Rusia', 'Busco quien lleve un paquete', 'Llevo paquetes', 'Busco acompañante', 'Ofrezco espacio en equipaje'],
      },
      { key: 'ruta', label: 'Ruta', placeholder: 'Ej: Moscú → La Habana', required: true },
      { key: 'fecha', label: 'Fecha de viaje', placeholder: 'Ej: 15 de septiembre', required: true },
      { key: 'detalle', label: 'Detalle', type: 'textarea', placeholder: 'Equipaje disponible, precio por kg, condiciones...', required: true },
      { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
    ],
  },
  marketplace: {
    label: 'Marketplace / Venta',
    icon: 'storefront',
    accent: 'bg-amber-50 text-amber-700',
    subtitle: 'Vende un artículo o servicio',
    fields: [
      { key: 'titulo', label: 'Título del artículo', placeholder: 'Ej: iPhone 12 128GB, nuevo', required: true },
      {
        key: 'categoria', label: 'Categoría', type: 'select', required: true,
        options: ['Teléfonos', 'Computadoras', 'Ropa', 'Electrodomésticos', 'Muebles', 'Autos', 'Otro'],
      },
      { key: 'precio', label: 'Precio (₽)', placeholder: 'Ej: 45,000 ₽', required: true },
      { key: 'detalle', label: 'Detalle', type: 'textarea', placeholder: 'Estado, tiempo de uso, entrega...', required: true },
      { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
    ],
  },
  remesas: {
    label: 'Remesas / Servicios',
    icon: 'currency_exchange',
    accent: 'bg-rose-50 text-rose-700',
    subtitle: 'Otro tipo de anuncio: envíos, recargas, servicios',
    fields: [
      {
        key: 'tipo', label: 'Tipo de anuncio', type: 'select', required: true,
        options: ['Envío de dinero', 'Recarga de saldo', 'Servicio profesional', 'Otro'],
      },
      { key: 'titulo', label: 'Título', placeholder: 'Ej: Recargo saldos desde Rusia', required: true },
      { key: 'detalle', label: 'Detalle', type: 'textarea', placeholder: 'Tasas, plazos, condiciones...', required: true },
      { key: 'contacto', label: 'Contacto (teléfono o Telegram)', placeholder: '+7 ...', required: true },
    ],
  },
}

export default function Publicar() {
  const { tipo } = useParams()
  const navigate = useNavigate()
  const type = TYPES[tipo] || TYPES.empleo
  const [form, setForm] = useState({})
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const submit = () => {
    const required = type.fields.filter((f) => f.required)
    const missing = required.find((f) => !String(form[f.key] || '').trim())
    if (missing) {
      setError(`Falta completar: ${missing.label}`)
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-surface pb-24 md:pb-16">
      <div className="max-w-2xl mx-auto px-4 pt-24 md:pt-28">
        {/* Encabezado */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-label-sm text-on-surface-variant hover:text-primary transition-colors mb-4">
          <MaterialIcon name="arrow_back" className="text-[16px]" /> Volver al Inicio
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${type.accent}`}>
            <MaterialIcon name={type.icon} className="text-[24px]" />
          </span>
          <div>
            <h1 className="font-title-lg text-title-lg text-primary">Publicar {type.label}</h1>
            <p className="text-label-sm text-on-surface-variant font-label-sm">{type.subtitle}</p>
          </div>
        </div>

        {sent ? (
          /* Confirmación de éxito (demo) */
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <MaterialIcon name="check" className="text-[32px]" />
            </div>
            <h2 className="font-title-md text-title-md text-primary mb-2">¡Anuncio publicado!</h2>
            <p className="text-body-sm text-on-surface-variant mb-6">
              Tu anuncio de <strong className="text-primary">{type.label}</strong> ya está visible para la comunidad.
              Es una demo — pronto conectarás con la gente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={`/${tipo}`} className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-sm text-label-sm hover:opacity-90 transition-all text-center">
                Ver la sección
              </Link>
              <button
                onClick={() => { setSent(false); setForm({}) }}
                className="px-6 py-3 border border-outline-variant text-on-surface-variant rounded-xl font-label-sm text-label-sm hover:bg-surface-container-low transition-colors"
              >
                Publicar otro
              </button>
            </div>
          </div>
        ) : (
          /* Formulario */
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6">
            <div className="space-y-4">
              {type.fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                    {f.label}
                    {f.required && <span className="text-error ml-0.5">*</span>}
                  </label>
                  {f.type === 'select' ? (
                    <select
                      value={form[f.key] || ''}
                      onChange={(e) => set(f.key, e.target.value)}
                      className="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                    >
                      <option value="">Selecciona...</option>
                      {f.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === 'textarea' ? (
                    <textarea
                      value={form[f.key] || ''}
                      onChange={(e) => set(f.key, e.target.value)}
                      rows={f.rows || 3}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-body-md resize-none"
                    />
                  ) : (
                    <input
                      type={f.type || 'text'}
                      value={form[f.key] || ''}
                      onChange={(e) => set(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                    />
                  )}
                </div>
              ))}

              {error && (
                <p className="text-error text-label-sm font-label-sm flex items-center gap-1.5">
                  <MaterialIcon name="error_outline" className="text-[16px]" />
                  {error}
                </p>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 py-3 border border-outline-variant text-on-surface-variant rounded-xl font-label-sm text-label-sm hover:bg-surface-container-low transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={submit}
                className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-label-sm text-label-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <MaterialIcon name="send" className="text-[16px]" />
                Publicar anuncio
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
