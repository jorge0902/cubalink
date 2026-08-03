import { useState } from 'react'
import MaterialIcon from './MaterialIcon'

// Modal de publicación reutilizable — "publica en menos de 2 minutos".
// Cada sección le pasa sus campos, título y texto del botón.
export default function PublishModal({ open, onClose, onPublish, title, subtitle, fields }) {
  const [form, setForm] = useState({})
  const [error, setError] = useState('')

  if (!open) return null

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const submit = () => {
    const required = fields.filter((f) => f.required)
    const missing = required.find((f) => !String(form[f.key] || '').trim())
    if (missing) {
      setError(`Falta completar: ${missing.label}`)
      return
    }
    setError('')
    onPublish(form)
    setForm({})
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 md:p-6" onClick={onClose}>
      <div
        className="bg-surface-container-lowest w-full md:max-w-lg rounded-t-2xl md:rounded-2xl shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-outline-variant">
          <div>
            <h3 className="font-title-md text-title-md text-primary">{title}</h3>
            {subtitle && (
              <p className="text-label-sm text-on-surface-variant font-label-sm mt-1">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="w-9 h-9 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <MaterialIcon name="close" />
          </button>
        </div>

        {/* Campos */}
        <div className="p-6 overflow-y-auto space-y-4 flex-grow">
          {fields.map((f) => (
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

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-outline-variant flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-outline-variant text-on-surface-variant rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={submit}
            className="flex-1 py-3 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <MaterialIcon name="send" className="text-[16px]" />
            Publicar
          </button>
        </div>
      </div>
    </div>
  )
}
