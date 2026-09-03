import { createContext, useContext, useEffect, useState } from 'react'

// Favoritos compartidos de CubaLink (demo): se persisten en localStorage para que el
// corazón del header, las tarjetas y la página /guardados estén siempre sincronizados.
// Clave compuesta: `${tipo}-${id}` (ej. 'rent-3', 'prod-7', 'job-2')
const FavoritesContext = createContext(null)

const STORAGE_KEY = 'cubalink_favorites'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      /* almacenamiento no disponible: la demo sigue funcionando en memoria */
    }
  }, [favorites])

  const toggleFavorite = (key) =>
    setFavorites((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))

  const isFavorite = (key) => favorites.includes(key)

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites debe usarse dentro de <FavoritesProvider>')
  return ctx
}
