import { createContext, useContext, useEffect, useState } from 'react'

// Sistema de notificaciones de CubaLink (demo 100% frontend).
// - Notificaciones mock con categoría, ruta destino y marca de tiempo.
// - Preferencias del usuario (categorías + canales) persistidas en localStorage,
//   como si fueran la base de datos vinculada a su cuenta.
const NotificationsContext = createContext(null)

const PREFS_KEY = 'cubalink_notif_prefs'

// Categorías de alerta que el usuario puede activar/desactivar
export const NOTIF_CATEGORIES = [
  { key: 'rentas', label: 'Rentas Moscú', desc: 'Nuevos cuartos y apartamentos', icon: 'home_work', emoji: '🏠' },
  { key: 'empleos', label: 'Empleos', desc: 'Nuevas vacantes y ofertas de trabajo', icon: 'work', emoji: '💼' },
  { key: 'marketplace', label: 'Marketplace', desc: 'Anuncios de compra y venta', icon: 'storefront', emoji: '🛒' },
  { key: 'lineas', label: 'Líneas y Telefonía', desc: 'Venta de chips, SIMs y promociones', icon: 'sim_card', emoji: '📲' },
  { key: 'viajes_remesas', label: 'Viajes y Remesas', desc: 'Novedades sobre envíos o vuelos', icon: 'flight_takeoff', emoji: '✈️' },
  { key: 'comunidad', label: 'Comunidad y Confiables', desc: 'Alertas generales y de servicios', icon: 'groups', emoji: '🤝' },
]

// Canales de recepción
export const NOTIF_CHANNELS = [
  { key: 'push', label: 'Notificaciones Push / In-App', desc: 'En el navegador o aplicación', icon: 'notifications', emoji: '📱' },
  { key: 'email', label: 'Correo Electrónico', desc: 'Resúmenes periódicos o avisos importantes', icon: 'mail', emoji: '📧' },
]

const now = Date.now()
const MIN = 60_000
const HOUR = 60 * MIN

// Bandeja de entrada mock (demo). `to` = ruta a la que navega la tarjeta.
const INITIAL_NOTIFICATIONS = [
  { id: 1, cat: 'empleos', icon: 'work', title: 'Nueva vacante: Repartidor en Yandex Eda', message: 'Sueldo desde 2 500 ₽/día, en Novokosino. Aplica directo desde la sección Empleos.', to: '/empleos', time: now - 8 * MIN, read: false },
  { id: 2, cat: 'rentas', icon: 'home_work', title: 'Cuarto disponible en Kotelniki', message: 'Se publicó una habitación para cubano, ambiente tranquilo. 18 000 ₽/mes.', to: '/rentas', time: now - 25 * MIN, read: false },
  { id: 3, cat: 'marketplace', icon: 'storefront', title: 'Oferta del día en Marketplace', message: 'Xiaomi Redmi Note 12, 128GB a buen precio. ¡Míralo antes que se venda!', to: '/marketplace', time: now - 1.2 * HOUR, read: false },
  { id: 4, cat: 'lineas', icon: 'sim_card', title: 'Chips SIM disponibles', message: 'Nueva tanda de líneas MTS y Beeline activadas, listas para entregar en Moscú.', to: '/lineas', time: now - 3 * HOUR, read: true },
  { id: 5, cat: 'viajes_remesas', icon: 'flight_takeoff', title: 'Tasa del día para remesas', message: '1 ₽ = 10.30 CUP. El envío a Cuba sigue disponible por Confiables.', to: '/remesas', time: now - 7 * HOUR, read: true },
  { id: 6, cat: 'comunidad', icon: 'groups', title: 'Nuevo negocio verificado', message: 'Ferretaría La Esperanza se unió a la red y ya es parte de Confiables.', to: '/confiables', time: now - 26 * HOUR, read: true },
  { id: 7, cat: 'empleos', icon: 'work', title: 'Vacantes de construcción abiertas', message: 'Constructora Solntsevo busca peones de obra. Pago diario seguro.', to: '/empleos', time: now - 2 * 26 * HOUR, read: true },
]

const DEFAULT_PREFS = () => ({
  categories: NOTIF_CATEGORIES.map((c) => c.key),
  channels: NOTIF_CHANNELS.map((c) => c.key),
  onboarded: false,
})

export function NotificationsProvider({ children }) {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)
  const [prefs, setPrefs] = useState(() => {
    try {
      const raw = localStorage.getItem(PREFS_KEY)
      if (!raw) return DEFAULT_PREFS()
      const saved = JSON.parse(raw)
      return { ...DEFAULT_PREFS(), ...saved }
    } catch {
      return DEFAULT_PREFS()
    }
  })

  // Persistir preferencias (simula la BD vinculada a la cuenta; invitado = localStorage)
  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
    } catch {
      /* almacenamiento no disponible: la demo sigue en memoria */
    }
  }, [prefs])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))

  const markRead = (id) =>
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))

  const toggleCategory = (key) =>
    setPrefs((prev) => ({
      ...prev,
      categories: prev.categories.includes(key)
        ? prev.categories.filter((k) => k !== key)
        : [...prev.categories, key],
    }))

  const toggleChannel = (key) =>
    setPrefs((prev) => ({
      ...prev,
      channels: prev.channels.includes(key)
        ? prev.channels.filter((k) => k !== key)
        : [...prev.channels, key],
    }))

  const completeOnboarding = (selectedCategories) =>
    setPrefs((prev) => ({ ...prev, categories: selectedCategories, onboarded: true }))

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        markAllRead,
        markRead,
        prefs,
        toggleCategory,
        toggleChannel,
        completeOnboarding,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext)
  if (!ctx) throw new Error('useNotifications debe usarse dentro de <NotificationsProvider>')
  return ctx
}

// Tiempo relativo en español: "Hace 5 min", "Hace 2 h", "Ayer", "Hace 3 días"
export function timeAgo(ts) {
  const diff = now - ts
  if (diff < MIN) return 'Ahora mismo'
  if (diff < HOUR) return `Hace ${Math.floor(diff / MIN)} min`
  if (diff < 24 * HOUR) return `Hace ${Math.floor(diff / HOUR)} h`
  if (diff < 48 * HOUR) return 'Ayer'
  return `Hace ${Math.floor(diff / (24 * HOUR))} días`
}
