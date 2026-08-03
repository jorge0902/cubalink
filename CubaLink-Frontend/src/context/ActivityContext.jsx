import { createContext, useContext, useState } from 'react'

// Estado de la demo: roles activos del usuario (UN SOLO PERFIL, MÚLTIPLES ROLES).
// Todo en memoria — sin persistencia, sin backend. Reinicia al recargar la página.
const ActivityContext = createContext(null)

// Roles activos por defecto: una selección rica para que el perfil demo luzca completo.
const DEFAULT_ROLES = [
  'trabajador',
  'contratar',
  'rentas',
  'marketplace',
  'remesas',
  'viajes',
  'negocio',
  'comunidad',
]

export function ActivityProvider({ children }) {
  const [activeRoles, setActiveRoles] = useState(DEFAULT_ROLES)

  const toggleRole = (roleId) => {
    setActiveRoles((prev) =>
      prev.includes(roleId) ? prev.filter((r) => r !== roleId) : [...prev, roleId]
    )
  }

  const isActive = (roleId) => activeRoles.includes(roleId)

  return (
    <ActivityContext.Provider value={{ activeRoles, toggleRole, isActive }}>
      {children}
    </ActivityContext.Provider>
  )
}

export function useActivity() {
  const ctx = useContext(ActivityContext)
  if (!ctx) throw new Error('useActivity debe usarse dentro de <ActivityProvider>')
  return ctx
}
