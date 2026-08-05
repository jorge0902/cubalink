import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import { useActivity } from '../context/ActivityContext'
import { ALL_ROLES } from '../data/roles'
import { PERSONA } from '../data/persona'

// Registro de CubaLink: UN SOLO PERFIL, MÚLTIPLES ROLES.
// El usuario activa uno o varios módulos — todos a la vez, sin límite.
export default function Register() {
  const { activeRoles, toggleRole } = useActivity()
  const navigate = useNavigate()
  const [paso, setPaso] = useState(2) // 1 = datos básicos (demo), 2 = elegir roles

  const continuar = () => {
    navigate('/perfil')
  }

  return (
    <main className="pt-16 pb-24 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-10">
        {/* Descargar App */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-5">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-brand-blue-deep/10 flex items-center justify-center text-brand-blue-deep">
              <MaterialIcon name="download" className="text-2xl" />
            </span>
            <div>
              <p className="font-title-md text-title-md text-primary">Descarga la app de CubaLink</p>
              <p className="text-label-sm text-on-surface-variant">Lleva la red profesional en tu bolsillo</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="/manifest.json"
              download
              className="flex items-center gap-2 bg-brand-blue-deep text-white px-5 py-2.5 rounded-lg font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all"
            >
              <MaterialIcon name="android" className="text-[18px]" />
              Google Play
            </a>
            <a
              href="/manifest.json"
              download
              className="flex items-center gap-2 border border-outline-variant text-primary px-5 py-2.5 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low active:scale-95 transition-all"
            >
              <MaterialIcon name="apple" className="text-[18px]" />
              App Store
            </a>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-3 mb-10">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-label-sm text-label-sm ${paso === 1 ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-primary'}`}>
            1
          </span>
          <span className="h-px flex-1 bg-outline-variant"></span>
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-label-sm text-label-sm ${paso === 2 ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-primary'}`}>
            2
          </span>
          <div className="flex-1"></div>
        </div>

        {paso === 1 && (
          <section className="bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-8">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Cuéntanos de ti, asere</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Tus datos básicos para el perfil (demo — sin registro real).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Nombre y apellidos', value: PERSONA.nombre, icon: 'person' },
                { label: 'Ciudad en Rusia', value: PERSONA.ciudad, icon: 'location_on' },
                { label: 'Tiempo en Rusia', value: PERSONA.tiempoEnRusia, icon: 'schedule' },
                { label: 'Profesión principal', value: PERSONA.profesion, icon: 'work' },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1.5 block">{f.label}</span>
                  <div className="flex items-center gap-2 border border-outline-variant rounded-lg px-3 py-2.5 bg-surface-bright">
                    <MaterialIcon name={f.icon} className="text-on-surface-variant" />
                    <input
                      defaultValue={f.value}
                      className="w-full bg-transparent font-body-md text-body-md focus:outline-none"
                    />
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setPaso(2)}
                className="bg-brand-blue-deep text-white px-8 py-3 rounded-lg font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
              >
                Continuar
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>
          </section>
        )}

        {paso === 2 && (
          <>
            <div className="text-center mb-10">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Un solo perfil</span>
              <h1 className="font-headline-lg text-headline-lg text-primary mt-2">¿Qué quieres hacer en CubaLink?</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl mx-auto">
                Activa uno o varios roles. Son como módulos dentro de tu perfil: los activas, los usas y los apagas cuando quieras. Sin límite, sin cuentas separadas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ALL_ROLES.map((rol) => {
                const activo = activeRoles.includes(rol.id)
                return (
                  <button
                    key={rol.id}
                    onClick={() => toggleRole(rol.id)}
                    className={`text-left p-5 rounded-xl border transition-all active:scale-[0.98] ${
                      activo
                        ? 'bg-surface-container-low border-brand-blue-deep shadow-md'
                        : 'bg-surface-container-lowest border-outline-variant hover:border-brand-blue-deep/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activo ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-primary'}`}>
                        <MaterialIcon name={rol.icon} className="text-[22px]" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-title-md text-title-md text-primary">{rol.label}</h3>
                          <span
                            className={`shrink-0 px-3 py-1 rounded-full font-label-sm text-label-sm transition-colors ${
                              activo ? 'bg-brand-blue-deep text-white' : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            {activo ? '✓ Activo' : 'Activar'}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-[14px] leading-snug">
                          {rol.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Resumen de activación */}
            <div className="mt-10 bg-surface-container-lowest rounded-xl premium-shadow border border-outline-variant p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tu perfil tendrá</p>
                <p className="font-title-md text-title-md text-primary mt-1">
                  {activeRoles.length} {activeRoles.length === 1 ? 'actividad activa' : 'actividades activas'}
                  {activeRoles.length > 0 && (
                    <span className="text-on-surface-variant font-body-md"> — {activeRoles.map((id) => ALL_ROLES.find((r) => r.id === id)?.chip).join(' · ')}</span>
                  )}
                </p>
              </div>
              <button
                onClick={continuar}
                className="bg-brand-blue-deep text-white px-10 py-3.5 rounded-lg font-title-md text-title-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
              >
                Ver mi perfil
                <MaterialIcon name="arrow_forward" className="text-[20px]" />
              </button>
            </div>

            <p className="text-center mt-8">
              <Link to="/perfil" className="font-label-sm text-label-sm text-primary underline underline-offset-4 hover:text-brand-blue-deep">
                Ya tengo cuenta — ir a mi perfil
              </Link>
            </p>
          </>
        )}
      </div>
    </main>
  )
}