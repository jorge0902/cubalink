import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children, value }) {
  return (
    <FavoritesContext.Provider value={{ favorites: value || [] }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    console.warn('useFavorites must be used within a FavoritesProvider')
    return { favorites: [] }
  }
  return context
}

export default FavoritesContext