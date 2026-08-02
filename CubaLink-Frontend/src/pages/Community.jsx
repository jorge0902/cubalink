import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import { posts, groups, events, recommendations } from '../data/posts'

const ME = {
  name: 'Usuario CubaLink',
  role: 'Cubano en Moscow',
  avatar: null,
  composerAvatar: null,
}

export default function Community() {
  const [endorsed, setEndorsed] = useState({})
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState('Todas')
  const [showToast, setShowToast] = useState(false)

  const toggleEndorse = (id) => {
    setEndorsed((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const publishPost = () => {
    if (draft.trim() === '') return
    setDraft('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  const categories = ['Todas', 'Chambas', 'SIM Cards', 'Remesas', 'Alquileres', 'Servicios']

  const filteredPosts = filter === 'Todas' ? posts : posts.filter(p => p.categoria.includes(filter.toLowerCase().replace(' ', '_')))

  return (
    <main className="pt-16 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-headline-lg text-headline-lg text-primary">Comunidad CubaLink 🇨🇺</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Chambas, ayuda y conexión para los cubanos en Russia
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {categories.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors ${
              filter === f
                ? 'bg-brand-blue-deep text-white'
                : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-brand-blue-deep'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Composer */}
      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-blue-deep flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className="flex-1">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full bg-surface-bright border-none rounded-xl p-3 font-body-md text-body-md focus:ring-1 focus:ring-brand-blue-deep h-20 resize-none"
              placeholder="¿Qué tienes para la comunidad, hermano?"
            ></textarea>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-on-surface-variant text-sm">📷 Foto</span>
            <span className="flex items-center gap-2 text-on-surface-variant text-sm">📍 Ubicación</span>
          </div>
          <button
            onClick={publishPost}
            className="bg-brand-blue-deep text-white px-6 py-2 rounded-full font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all"
          >
            Publicar
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const isEndorsed = endorsed[post.id]
          return (
            <article key={post.id} className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-sm">
                    {post.author.charAt(1)}
                  </div>
                  <div>
                    <h4 className="font-title-md text-body-md text-primary">{post.author}</h4>
                    <p className="text-label-sm text-on-surface-variant">
                      {post.role} • {post.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-surface-container rounded-full text-label-sm text-on-surface-variant">
                  {post.categoria?.replace(/_/g, ' ') || 'general'}
                </span>
                {post.pago && (
                  <span className="px-2 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-label-sm font-bold">
                    {post.pago}
                  </span>
                )}
              </div>

              <p className="font-body-md text-body-md text-on-surface mb-3 whitespace-pre-line">{post.content}</p>

              {post.ubicacion && (
                <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-3">
                  <MaterialIcon name="location_on" className="text-brand-blue-deep" />
                  <span>{post.ubicacion}</span>
                </div>
              )}

              {post.telefono && (
                <div className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-3">
                  <MaterialIcon name="phone" className="text-brand-blue-deep" />
                  <span className="font-bold">{post.telefono}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                <div className="flex gap-6">
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-brand-blue-deep transition-colors group">
                    <MaterialIcon name="thumb_up" className="text-[20px] group-active:scale-125 transition-transform" />
                    <span className="font-label-sm text-label-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-brand-blue-deep transition-colors group">
                    <MaterialIcon name="chat_bubble" className="text-[20px]" />
                    <span className="font-label-sm text-label-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-brand-blue-deep transition-colors group">
                    <MaterialIcon name="share" className="text-[20px]" />
                  </button>
                </div>
                <button
                  onClick={() => toggleEndorse(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-label-sm hover:shadow-md transition-all ${
                    isEndorsed ? 'bg-brand-gold text-white' : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  <MaterialIcon name="verified" className="text-[18px]" />
                  <span>{isEndorsed ? 'Respaldado' : 'Respaldar'}</span>
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Publicación enviada a la comunidad
        </div>
      )}
    </main>
  )
}