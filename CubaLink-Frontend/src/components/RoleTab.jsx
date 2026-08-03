import { useState } from 'react'
import MaterialIcon from './MaterialIcon'
import StarRating from './StarRating'
import { ROLE_MAP, REPUTATION } from '../data/roles'
import {
  WORKER_PROFILE,
  BRIGADIER_PROFILE,
  REMESAS_PROFILE,
  RENTALS_PROFILE,
  MARKETPLACE_PROFILE,
  BUSINESS_PROFILE,
  REVIEWS,
} from '../data/activity'

// Pestaña de contenido de un rol activo: detalle del módulo + reputación + reviews + reporte.
export default function RoleTab({ roleId }) {
  const [reportado, setReportado] = useState(false)
  const rol = ROLE_MAP[roleId]
  const rep = REPUTATION[roleId]
  const reviews = REVIEWS[roleId] || []

  const reportar = () => {
    setReportado(true)
    setTimeout(() => setReportado(false), 2500)
  }

  return (
    <div className="space-y-gutter">
      {/* Detalle del módulo */}
      <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant overflow-hidden">
        <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-blue-deep/10 text-brand-blue-deep flex items-center justify-center">
              <MaterialIcon name={rol.icon} className="text-[20px]" />
            </span>
            <div>
              <h2 className="font-title-md text-title-md text-primary">{rol.chip}</h2>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{rol.desc}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={rep.stars} size={16} />
            <span className="font-label-sm text-label-sm text-on-surface-variant">{rep.jobs} {rep.jobs === 1 ? 'trabajo' : 'trabajos'}</span>
          </div>
        </div>

        <div className="p-6">
          <RoleDetails roleId={roleId} />
        </div>
      </section>

      {/* Reputación específica del rol */}
      <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
        <h3 className="font-title-md text-title-md text-primary mb-4">Reputación como {rep.label}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <StarRating rating={rep.stars} size={20} showValue={false} className="justify-center" />
            <p className="font-headline-lg text-headline-lg text-primary mt-1">{rep.stars.toFixed(1)}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Estrellas</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary">{rep.jobs}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">{rep.label === 'Brigadier' ? 'Trabajos publicados' : 'Trabajos'}</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary">{rep.reviews}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Recomendaciones</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Reportar este módulo</span>
            <button
              onClick={reportar}
              className={`mt-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-label-sm text-label-sm border transition-all ${
                reportado ? 'bg-error text-on-error border-error' : 'bg-surface-container-lowest text-error border-error/40 hover:bg-error-container'
              }`}
            >
              <MaterialIcon name="flag" className="text-[14px]" />
              {reportado ? 'Reportado ✓' : 'Reportar'}
            </button>
          </div>
        </div>
      </section>

      {/* Reviews solo de este módulo */}
      <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-title-md text-title-md text-primary">Opiniones como {rep.label}</h3>
          <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            {reviews.length} {reviews.length === 1 ? 'opinión' : 'opiniones'}
          </span>
        </div>
        <div className="space-y-4">
          {reviews.map((rv, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant">
              <div className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-sm shrink-0">
                {rv.autor.replace('~', '').charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <p className="font-label-sm text-label-sm text-primary font-semibold">{rv.autor}</p>
                  <StarRating rating={rv.estrellas} size={14} showValue={false} />
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-[14px]">{rv.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toast de reporte (no afecta otros módulos) */}
      {reportado && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-error text-on-error px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Reporte enviado — solo afecta el módulo {rol.chip}
        </div>
      )}
    </div>
  )
}

// Detalle visual específico de cada rol
function RoleDetails({ roleId }) {
  switch (roleId) {
    case 'trabajador':
      return (
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Profesión</p>
              <p className="font-title-md text-title-md text-primary">{WORKER_PROFILE.profesion}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">{WORKER_PROFILE.experiencia}</p>
            </div>
            <button className="bg-brand-blue-deep text-white px-6 py-3 rounded-lg font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all inline-flex items-center gap-2 self-start">
              <MaterialIcon name="work" className="text-[18px]" />
              Estoy buscando trabajo
            </button>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Especialidades</p>
            <div className="flex flex-wrap gap-2">
              {WORKER_PROFILE.especialidades.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm border border-surface-variant">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Habilidades</p>
            <div className="flex flex-wrap gap-2">
              {WORKER_PROFILE.habilidades.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-brand-blue-deep/5 text-brand-blue-deep font-label-sm text-label-sm border border-brand-blue-deep/20">{s}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-label-sm text-on-surface-variant bg-surface-container-low rounded-lg px-4 py-3">
            <MaterialIcon name="event_available" className="text-brand-blue-deep" />
            {WORKER_PROFILE.disponibilidad}
          </div>
        </div>
      )

    case 'contratar':
      return (
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Empresa / Brigada</p>
              <p className="font-title-md text-title-md text-primary">{BRIGADIER_PROFILE.empresa}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {BRIGADIER_PROFILE.contratados} trabajadores contratados · {BRIGADIER_PROFILE.trabajosPublicados} trabajos publicados
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm self-start">
              <MaterialIcon name="schedule" className="text-[16px]" />
              {BRIGADIER_PROFILE.ultimaActividad}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(BRIGADIER_PROFILE.dashboard).map(([k, v]) => (
              <div key={k} className="bg-surface-container-low rounded-xl p-4 text-center">
                <p className="font-headline-lg text-headline-lg text-primary">{v}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant capitalize">{k.replace(/([A-Z])/g, ' $1')}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Indicadores</p>
            <div className="flex flex-wrap gap-2">
              {BRIGADIER_PROFILE.indicadores.map((i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-50 text-green-800 font-label-sm text-label-sm border border-green-200">
                  <MaterialIcon name="check_circle" className="text-[16px]" />
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      )

    case 'remesas':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Tiempo promedio</p>
            <p className="font-title-md text-title-md text-primary mt-1">{REMESAS_PROFILE.tiempoPromedio}</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Comisión</p>
            <p className="font-title-md text-title-md text-primary mt-1 text-[13px]">{REMESAS_PROFILE.comision}</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Operaciones</p>
            <p className="font-title-md text-title-md text-primary mt-1">{REMESAS_PROFILE.operaciones}</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Métodos</p>
            <p className="font-title-md text-title-md text-primary mt-1 text-[13px]">{REMESAS_PROFILE.metodosPago.join(' · ')}</p>
          </div>
        </div>
      )

    case 'rentas':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['Apartamentos', RENTALS_PROFILE.apartamentos, 'apartment'],
            ['Habitaciones', RENTALS_PROFILE.habitaciones, 'single_bed'],
            ['Estudios', RENTALS_PROFILE.estudios, 'weekend'],
            ['Reservas', RENTALS_PROFILE.reservasSimuladas, 'event_available'],
          ].map(([label, val, icon]) => (
            <div key={label} className="bg-surface-container-low rounded-xl p-4 text-center">
              <MaterialIcon name={icon} className="text-brand-blue-deep mx-auto mb-1" />
              <p className="font-headline-lg text-headline-lg text-primary">{val}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">{label}</p>
            </div>
          ))}
        </div>
      )

    case 'marketplace':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary">{MARKETPLACE_PROFILE.publicados}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Publicados</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary">{MARKETPLACE_PROFILE.vendidos}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Vendidos</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary">{MARKETPLACE_PROFILE.calificacion.toFixed(1)}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Calificación</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-4 text-center">
            <p className="font-headline-lg text-headline-lg text-primary text-[14px]">{MARKETPLACE_PROFILE.categorias.join(' · ')}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Categorías</p>
          </div>
        </div>
      )

    case 'negocio':
      return (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-24 h-24 rounded-xl bg-surface border border-outline-variant flex items-center justify-center overflow-hidden shrink-0 premium-shadow">
            <img className="w-full h-full object-cover" src={BUSINESS_PROFILE.logo} alt="Logo del negocio" />
          </div>
          <div className="flex-1 space-y-3">
            <p className="font-title-md text-title-md text-primary">Mi negocio en Moscú</p>
            <p className="font-body-md text-body-md text-on-surface-variant">{BUSINESS_PROFILE.descripcion}</p>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_PROFILE.servicios.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-brand-blue-deep/5 text-brand-blue-deep font-label-sm text-label-sm border border-brand-blue-deep/20">{s}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-1 text-label-sm text-on-surface-variant">
              <span className="inline-flex items-center gap-1"><MaterialIcon name="schedule" className="text-brand-blue-deep" /> {BUSINESS_PROFILE.horario}</span>
              <span className="inline-flex items-center gap-1"><MaterialIcon name="phone" className="text-brand-blue-deep" /> {BUSINESS_PROFILE.contacto}</span>
            </div>
          </div>
        </div>
      )

    default:
      // Viajes, transporte, envíos, servicios, comunidad: reputación + descripción genérica
      return (
        <div className="space-y-4">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tienes activo el módulo <strong className="text-primary">{rol.chip}</strong>. Publica, comparte y conecta con la comunidad — todo desde este perfil.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Publicar ahora', 'Ver actividad', 'Conectar gente'].map((accion) => (
              <button key={accion} className="px-4 py-2 rounded-lg bg-surface-container-low text-primary font-label-sm text-label-sm border border-surface-variant hover:border-brand-blue-deep transition-colors">
                {accion}
              </button>
            ))}
          </div>
        </div>
      )
  }
}