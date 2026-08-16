import { createContext, useContext, useState } from 'react'

const NotificationsContext = createContext()

export function NotificationsProvider({ children, value }) {
  return (
    <NotificationsContext.Provider value={{ unreadCount: value !== undefined ? value : 0 }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationsContext)
  if (!context) {
    console.warn('useNotifications must be used within a NotificationsProvider')
    return { unreadCount: 0 }
  }
  return context
}

export default NotificationsContext