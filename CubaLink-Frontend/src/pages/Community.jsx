import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import { posts, groups, recommendations } from '../data/posts'

const ME = {
  name: 'Usuario CubaLink',
  role: 'Cubano en Moscú',
  avatar: null,
}

// Filtros por tema (sidebar izquierda)
const FILTERS = [
  { id: 'todos', label: 'Todos', icon: 'view_list' },
  { id: 'chambas', label: 'Chambas', icon: 'work' },
  { id: 'servicios', label: 'Servicios', icon: 'handyman' },
  { id: 'alquileres', label: 'Alquileres', icon: 'home_work' },
  { id: 'simm', label: 'SIM y Recargas', icon: 'sim_card' },
  { id: 'viajes', label: 'Viajes', icon: 'flight_takeoff' },
]

// Reglas de coincidencia por tema
const FILTER_MATCH = {
  chambas: (c) => c.startsWith('empleo_'),
  servicios: (c) => c === 'servicios' || c === 'cambio_dinero',
  alquileres: (c) => c === 'alquiler',
  simm: (c) => c === 'sim_cards' || c === 'recargas',
  viajes: (c) => c === 'viajes',
}

// Accesos rápidos del sidebar
const QUICK_LINKS = [
  { label: 'Servicios', icon: 'handyman', to: '/servicios' },
  { label: 'Fotos', icon: 'photo_library', to: '/comunidad' },
  { label: 'Ofertas', icon: 'local_offer', to: '/marketplace' },
]

const AVATAR_COLORS = [
  'bg-brand-gold',
  'bg-brand-blue-deep',
  'bg-teal-600',
  'bg-rose-500',
  'bg-violet-600',
  'bg-emerald-600',
]

export default function Community() {
  const [endorsed, setEndorsed] = useState({})
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState('todos')
  const [showToast, setShowToast] = useState(false)
  const [showFABPost, setShowFABPost] = useState(false)

  const toggleEndorse = (id) => {
    setEndorsed((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const publishPost = () => {
    if (draft.trim() === '') return
    setDraft('')
    setShowToast(true)
    setShowFABPost(false)
    setTimeout(() => setShowToast(false), 2500)
  }

  const filteredPosts =
    filter === 'todos'
      ? posts
      : posts.filter((p) => {
          const cat = p.categoria || ''
          return FILTER_MATCH[filter] ? FILTER_MATCH[filter](cat) : true
        })

  const avatarColorFor = (name) => AVATAR_COLORS[(name?.charCodeAt(1) || 0) % AVATAR_COLORS.length]

  return (
    <main className="pt-16 pb-24 min-h-screen bg-surface">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-headline-lg text-headline-lg text-primary">Comunidad CubaLink 🇨🇺</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Chambas, ayuda y conexión para los cubanos en Rusia
          </p>
        </div>

        {/* ===== Layout 3 columnas (max 1200px centrado) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_260px] gap-6 lg:gap-8 items-start">
          {/* ========== COLUMNA IZQUIERDA — Navegación (sticky) ========== */}
          <aside className="hidden lg:block space-y-5 lg:sticky lg:top-20 lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto lg:pr-1">
            {/* Botón destacado Crear Publicación */}
            <button
              onClick={() => setShowFABPost(true)}
              className="w-full flex items-center justify-center gap-2 bg-brand-blue-deep text-white px-4 py-3 rounded-xl font-label-sm text-label-sm font-bold hover:shadow-lg hover:bg-brand-blue-deep/90 active:scale-[0.98] transition-all btn-shine"
            >
              <MaterialIcon name="add_circle" className="text-[18px]" />
              Crear Publicación
            </button>

            {/* Accesos rápidos */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-2">
              {QUICK_LINKS.map((q) => (
                <a
                  key={q.label}
                  href={q.to}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-label-sm text-label-sm text-primary hover:bg-surface-container-low transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-brand-blue-deep">
                    <MaterialIcon name={q.icon} className="text-[17px]" />
                  </span>
                  {q.label}
                </a>
              ))}
            </div>

            {/* Filtros por temas */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4">
              <h3 className="font-title-md text-[13px] font-semibold text-primary mb-3 uppercase tracking-wide">
                Explorar por tema
              </h3>
              <div className="space-y-1">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-label-sm text-label-sm transition-all active:scale-[0.98] ${
                      filter === f.id
                        ? 'bg-brand-blue-deep text-white shadow-sm'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                    }`}
                  >
                    <MaterialIcon name={f.icon} className="text-[17px]" />
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tarjeta perfil + Carnet de Confianza */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
              <div className="h-16 bg-gradient-to-r from-brand-blue-deep to-primary relative">
                <div className="absolute -bottom-6 left-4 w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-white flex items-center justify-center">
                  <span className="text-brand-blue-deep font-bold text-sm">U</span>
                </div>
              </div>
              <div className="pt-8 pb-4 px-4">
                <p className="font-title-md text-[13px] text-primary font-semibold">{ME.name}</p>
                <p className="text-[11px] text-on-surface-variant">{ME.role}</p>
                <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MaterialIcon name="verified_user" className="text-[16px] text-emerald-600" />
                    <span className="text-[11px] font-bold text-emerald-700">Carnet de Confianza</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-700">
                    <MaterialIcon name="star" fill className="text-[12px] text-brand-gold" />
                    4.9 · 12 respaldos de la comunidad
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ========== COLUMNA CENTRAL — Feed (máx 680px) ========== */}
          <div className="max-w-[680px] w-full mx-auto space-y-4">
            {/* Caja interactiva de publicación */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue-deep flex items-center justify-center text-white font-bold flex-shrink-0">
                  U
                </div>
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="w-full bg-surface-bright border border-outline-variant rounded-xl p-3 font-body-md text-[14px] focus:ring-1 focus:ring-brand-blue-deep focus:outline-none h-[72px] resize-none"
                  placeholder="¿Qué necesitas o qué quieres compartir hoy?"
                ></textarea>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors">
                    <MaterialIcon name="photo_camera" className="text-[16px] text-emerald-600" />
                    <span className="hidden sm:inline">Foto</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors">
                    <MaterialIcon name="location_on" className="text-[16px] text-rose-500" />
                    <span className="hidden sm:inline">Ubicación</span>
                  </button>
                </div>
                <button
                  onClick={publishPost}
                  className="bg-brand-blue-deep text-white px-5 py-2 rounded-full font-label-sm text-label-sm hover:shadow-md active:scale-95 transition-all"
                >
                  Publicar
                </button>
              </div>
            </div>

            {/* Posts del feed */}
            {filteredPosts.map((post, idx) => {
              const isEndorsed = endorsed[post.id]
              const catLabel = (post.categoria || 'general').replace(/_/g, ' ')
              return (
                <article key={post.id} className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 md:p-5 shadow-sm animate-fade-in-up" style={{ animationDelay: `${Math.min(idx * 40, 200)}ms` }}>
                  {/* Header: avatar + nombre + badge + tiempo + tag */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-full ${avatarColorFor(post.author)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {(post.author || '?').charAt(1) || 'C'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-semibold text-[14px] text-primary truncate">{post.author}</h4>
                          <span className="w-4 h-4 rounded-full bg-brand-blue-deep text-white flex items-center justify-center flex-shrink-0">
                            <MaterialIcon name="verified" fill className="text-[10px]" />
                          </span>
                        </div>
                        <p className="text-[11px] text-on-surface-variant truncate">
                          {post.role} · {post.time}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-surface-container rounded-full text-[10px] text-on-surface-variant font-medium whitespace-nowrap flex-shrink-0">
                      #{catLabel}
                    </span>
                  </div>

                  {/* Texto estructurado */}
                  <p className="font-body-md text-[14px] leading-relaxed text-on-surface mb-3 whitespace-pre-line">{post.content}</p>

                  {/* Imagen integrada, bordes redondeados */}
                  {post.image && (
                    <div className="rounded-xl overflow-hidden mb-3 border border-outline-variant/60 group cursor-pointer">
                      <img
                        src={post.image}
                        alt="Publicación de la comunidad"
                        className="w-full max-h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Meta: ubicación / teléfono / pago */}
                  {(post.ubicacion || post.telefono || post.pago) && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 items-center mb-3">
                      {post.ubicacion && (
                        <span className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                          <MaterialIcon name="location_on" className="text-[14px] text-brand-blue-deep" /> {post.ubicacion}
                        </span>
                      )}
                      {post.pago && (
                        <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold rounded-full text-[11px] font-bold">
                          {post.pago}
                        </span>
                      )}
                      {post.telefono && (
                        <span className="flex items-center gap-1.5 text-[11px] text-on-surface-variant font-semibold">
                          <MaterialIcon name="phone" className="text-[14px] text-brand-blue-deep" /> {post.telefono}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Barra de acciones: reaccionar, comentar, compartir, mensaje */}
                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/70">
                    <div className="flex gap-1 sm:gap-2">
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors group">
                        <MaterialIcon name="thumb_up" className="text-[17px] group-active:scale-125 transition-transform" />
                        <span className="font-medium">{post.likes}</span>
                        <span className="hidden sm:inline">Me gusta</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors group">
                        <MaterialIcon name="chat_bubble_outline" className="text-[17px] group-active:scale-125 transition-transform" />
                        <span className="font-medium">{post.comments}</span>
                        <span className="hidden sm:inline">Comentar</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors group">
                        <MaterialIcon name="share" className="text-[17px] group-active:scale-125 transition-transform" />
                        <span className="hidden sm:inline">Compartir</span>
                      </button>
                      <button className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-on-surface-variant text-[12px] hover:bg-surface-container-low transition-colors">
                        <MaterialIcon name="send" className="text-[17px]" />
                        Mensaje
                      </button>
                    </div>
                    <button
                      onClick={() => toggleEndorse(post.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-all active:scale-95 ${
                        isEndorsed
                          ? 'bg-brand-gold text-white shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      <MaterialIcon name="verified" fill={isEndorsed} className="text-[15px]" />
                      <span>{isEndorsed ? 'Respaldado' : 'Respaldar'}</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* ========== COLUMNA DERECHA — Tendencias / Herramientas (sticky) ========== */}
          <aside className="hidden lg:block space-y-5 lg:sticky lg:top-20 lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto lg:pr-1">
            {/* Gente de confianza — miembros activos en Moscú */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4">
              <h3 className="font-semibold text-[13px] text-primary mb-3 flex items-center gap-2">
                <MaterialIcon name="shield" className="text-[16px] text-emerald-600" />
                Gente de confianza
              </h3>
              <div className="space-y-3">
                {recommendations.map((r) => (
                  <div key={r.name} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                      <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold text-primary truncate">{r.name}</p>
                      <p className="text-[10px] text-on-surface-variant truncate">{r.role}</p>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="verified" fill className="text-[12px]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grupos de la comunidad */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4">
              <h3 className="font-semibold text-[13px] text-primary mb-3 flex items-center gap-2">
                <MaterialIcon name="groups" className="text-[16px] text-brand-blue-deep" />
                Grupos activos
              </h3>
              <div className="space-y-2.5">
                {groups.map((g) => (
                  <a key={g.name} href="/comunidad" className="flex items-center gap-2.5 group">
                    <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-brand-blue-deep group-hover:bg-brand-blue-deep group-hover:text-white transition-colors flex-shrink-0">
                      <MaterialIcon name={g.icon} className="text-[16px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-primary truncate group-hover:text-brand-blue-deep transition-colors">{g.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{g.members}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Avisos de la comunidad */}
            <div className="bg-gradient-to-br from-brand-blue-deep to-primary rounded-xl p-4 text-white">
              <h3 className="font-semibold text-[13px] mb-2 flex items-center gap-2">
                <MaterialIcon name="campaign" className="text-[16px] text-brand-gold" />
                Aviso de la comunidad
              </h3>
              <p className="text-[11px] leading-relaxed opacity-90">
                Reunión de cubanos en Krylatskoe · Ago 15, 6:00 PM. Comparte y participa 🇨🇺
              </p>
              <button className="mt-3 w-full bg-brand-gold text-primary text-[11px] font-bold py-2 rounded-lg hover:bg-brand-gold/90 transition-colors">
                Ver evento
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* ===== FAB móvil — Crear publicación ===== */}
      <button
        onClick={() => setShowFABPost(true)}
        className="lg:hidden fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-brand-blue-deep text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
        aria-label="Crear publicación"
      >
        <MaterialIcon name="edit" className="text-[24px]" />
      </button>

      {/* ===== Modal móvil — Crear publicación ===== */}
      {showFABPost && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setShowFABPost(false)}>
          <div
            className="w-full sm:max-w-lg bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl p-5 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-title-md text-title-md text-primary">Crear publicación</h3>
              <button onClick={() => setShowFABPost(false)} className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center" aria-label="Cerrar">
                <MaterialIcon name="close" />
              </button>
            </div>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full bg-surface-bright border border-outline-variant rounded-xl p-3 font-body-md text-[14px] focus:ring-1 focus:ring-brand-blue-deep focus:outline-none h-28 resize-none"
              placeholder="¿Qué necesitas o qué quieres compartir hoy?"
              autoFocus
            ></textarea>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setShowFABPost(false)}
                className="flex-1 border border-outline-variant text-primary py-2.5 rounded-xl font-label-sm text-label-sm"
              >
                Cancelar
              </button>
              <button
                onClick={publishPost}
                className="flex-1 bg-brand-blue-deep text-white py-2.5 rounded-xl font-label-sm text-label-sm font-bold"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-brand-blue-deep text-white px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8 whitespace-nowrap animate-fade-in-up">
          ✓ Publicación enviada a la comunidad
        </div>
      )}
    </main>
  )
}
