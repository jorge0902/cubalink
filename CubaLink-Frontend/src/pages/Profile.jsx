import { useState } from 'react'
import { Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import RoleChips from '../components/RoleChips'
import TrustBadge from '../components/TrustBadge'
import CarnetConfianza from '../components/CarnetConfianza'
import AdminActivitiesPanel from '../components/AdminActivitiesPanel'
import RoleTab from '../components/RoleTab'
import { useActivity } from '../context/ActivityContext'
import { ROLE_MAP, REPUTATION } from '../data/roles'
import { PERSONA, VERIFICATIONS, BADGES } from '../data/persona'

const COVER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDo831PEmrJDJlAgkCT0pmBunLH_e7KDGAGJTOSxK8q9FynFk6w6ofThqGNdn3TkMAcSL8qnd6Z_-TTrc9YvqQNZgm9B77lt-bCIXvSv8sLC0G1uIslYUBPR3nCSTftq6s6vpsRjxv-q5OJa1UBTAXu6-GTJwyGGfOlVyg--OtFns9yjgouj0fwcCLv56lcIZxNBL6pZMwggJiddCKKj2T9yRGBTvkoppXsl5CZLeHDxM8GV5IbUPOwdQ'

// Perfil unificado: UN SOLO PERFIL, MÚLTIPLES ROLES. Las pestañas nacen de los módulos activos.
export default function Profile() {
  const { activeRoles } = useActivity()
  const [tab, setTab] = useState('informacion')
  const [contactado, setContactado] = useState(false)

  // Pestañas = Información (siempre) + una por rol activo
  const tabs = [{ id: 'informacion', label: 'Información', icon: 'person' }].concat(
    activeRoles.map((id) => ({ id, label: ROLE_MAP[id].chip, icon: ROLE_MAP[id].icon }))
  )

  const reputacionPromedio =
    activeRoles.length === 0
      ? 0
      : activeRoles.reduce((acc, id) => acc + (REPUTATION[id]?.stars || 0), 0) / activeRoles.length

  const chipsActivos = activeRoles.map((id) => ROLE_MAP[id].chip)

  const contactar = () => {
    setContactado(true)
    setTimeout(() => setContactado(false), 2500)
  }

  return (
    <main className="pt-16 pb-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* ===== Columna principal ===== */}
          <div className="lg:col-span-8 space-y-gutter">
            {/* Header del perfil */}
            <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant overflow-hidden">
              <div className="h-44 relative bg-primary-container overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25"></div>
              </div>
              <div className="px-6 md:px-8 pb-8 -mt-14 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div className="flex flex-col md:flex-row md:items-end gap-5">
                    <div className="w-28 h-28 rounded-xl border-4 border-surface-container-lowest overflow-hidden premium-shadow bg-surface shrink-0">
                      <img className="w-full h-full object-cover" src={PERSONA.avatar} alt={PERSONA.nombre} />
                    </div>
                    <div className="mt-14 md:mt-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="font-headline-lg text-headline-lg text-primary">{PERSONA.nombre}</h1>
                        <TrustBadge emoji="🟢" label="Verificado" className="bg-green-100 text-green-800 border-green-300" />
                        <TrustBadge emoji="🟣" label="Premium" className="bg-purple-100 text-purple-800 border-purple-300" />
                      </div>
                      <p className="font-title-md text-title-md text-on-surface-variant mt-1">{PERSONA.profesion}</p>
                      <div className="flex items-center gap-1 mt-2 text-on-surface-variant opacity-80">
                        <MaterialIcon name="location_on" className="text-body-md" />
                        <span className="font-body-md text-body-md">{PERSONA.ubicacion}</span>
                        <span className="mx-1">•</span>
                        <MaterialIcon name="schedule" className="text-body-md" />
                        <span className="font-body-md text-body-md">{PERSONA.tiempoEnRusia}</span>
                      </div>
                      {/* Roles activos como chips */}
                      <div className="mt-3">
                        <RoleChips roles={chipsActivos} size="lg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 md:mb-1">
                    <button
                      onClick={contactar}
                      className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-lg premium-shadow-hover transition-all active:scale-95 flex items-center gap-2"
                    >
                      <MaterialIcon name="mail" className="text-[18px]" />
                      Contactar
                    </button>
                    <button className="border border-outline-variant bg-surface-container-lowest text-primary font-label-sm text-label-sm px-6 py-3 rounded-lg premium-shadow-hover transition-all active:scale-95 flex items-center gap-2">
                      <MaterialIcon name="share" className="text-[18px]" />
                      Compartir
                    </button>
                    <Link
                      to="/registro"
                      className="border border-outline-variant bg-surface-container-lowest text-primary font-label-sm text-label-sm px-6 py-3 rounded-lg premium-shadow-hover transition-all active:scale-95 flex items-center gap-2"
                    >
                      <MaterialIcon name="add_circle" className="text-[18px]" />
                      Activar módulos
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Tabs dinámicas por rol activo */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all inline-flex items-center gap-1.5 ${
                    tab === t.id
                      ? 'bg-brand-blue-deep text-white shadow-md'
                      : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-brand-blue-deep'
                  }`}
                >
                  <MaterialIcon name={t.icon} className="text-[16px]" />
                  {t.label}
                </button>
              ))}
            </div>

            {/* Contenido de la pestaña */}
            {tab === 'informacion' ? (
              <>
                {/* Bio + datos básicos */}
                <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
                  <h2 className="font-title-md text-title-md text-primary mb-3">Sobre mí</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{PERSONA.bio}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {/* Idiomas y ruso */}
                  <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
                    <h2 className="font-title-md text-title-md text-primary mb-4">Idiomas</h2>
                    <div className="space-y-3">
                      {PERSONA.idiomas.map((idioma) => (
                        <div key={idioma} className="flex items-center justify-between">
                          <span className="font-body-md text-body-md text-on-surface">{idioma}</span>
                          <MaterialIcon name="check_circle" className="text-brand-blue-deep" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 bg-surface-container-low rounded-lg p-3 flex items-start gap-2">
                      <MaterialIcon name="translate" className="text-brand-blue-deep mt-0.5" />
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">¿Habla ruso?</p>
                        <p className="font-body-md text-body-md text-primary text-[14px]">{PERSONA.hablaRuso}</p>
                      </div>
                    </div>
                  </section>

                  {/* Documentación y datos */}
                  <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
                    <h2 className="font-title-md text-title-md text-primary mb-4">Documentación</h2>
                    <div className="space-y-2.5">
                      {PERSONA.documentacion.map((doc) => (
                        <div key={doc} className="flex items-center gap-2 text-on-surface font-body-md text-body-md text-[14px]">
                          <MaterialIcon name="description" className="text-brand-blue-deep text-[18px]" />
                          {doc}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-outline-variant space-y-2">
                      <div className="flex justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Miembro desde</span>
                        <span className="font-label-sm text-label-sm text-primary font-semibold">{PERSONA.miembroDesde}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Última conexión</span>
                        <span className="font-label-sm text-label-sm text-primary font-semibold">{PERSONA.ultimaConexion}</span>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Badges del usuario */}
                <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
                  <h2 className="font-title-md text-title-md text-primary mb-4">Insignias</h2>
                  <div className="flex flex-wrap gap-2">
                    {BADGES.map((b) => (
                      <span key={b.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/10 text-on-surface border border-brand-gold/30 font-label-sm text-label-sm">
                        {b.icon} {b.label}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Reputación por rol (NO única) */}
                <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
                  <h2 className="font-title-md text-title-md text-primary mb-1">Reputación por actividad</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 text-[14px]">
                    Cada módulo tiene su propia reputación. Así da más confianza.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeRoles.map((id) => (
                      <div key={id} className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant">
                        <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary font-semibold">
                          {ROLE_MAP[id].chip}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MaterialIcon name="star" fill className="text-brand-gold text-[16px]" />
                          <span className="font-label-sm text-label-sm text-on-surface font-bold">{REPUTATION[id].stars.toFixed(1)}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <RoleTab roleId={tab} />
            )}
          </div>

          {/* ===== Barra lateral ===== */}
          <div className="lg:col-span-4 space-y-gutter">
            <CarnetConfianza persona={PERSONA} activeRoles={activeRoles} reputacionPromedio={reputacionPromedio} />

            {/* Verificaciones */}
            <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6">
              <h3 className="font-title-md text-title-md text-primary mb-4">Verificaciones</h3>
              <div className="space-y-2.5">
                {VERIFICATIONS.map((v) => (
                  <div key={v.id} className="flex items-center gap-2">
                    <span className="text-[16px]">{v.emoji}</span>
                    <span className="font-label-sm text-label-sm text-on-surface">{v.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <AdminActivitiesPanel />
          </div>
        </div>
      </div>

      {/* Toast contactar */}
      {contactado && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Mensaje enviado a {PERSONA.nombre}
        </div>
      )}
    </main>
  )
}