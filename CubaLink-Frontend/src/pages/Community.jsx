import { useState } from 'react'
import MaterialIcon from '../components/MaterialIcon'
import { posts, groups, events, recommendations } from '../data/posts'

const ME = {
  name: 'Alejandro Ruiz',
  role: 'Software Engineer at TechMoscú',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDudekq8Iy_61oh0s9s3NhSsuq2HosrLzhI2XzqSdGmwlWcazyzQ9YODt4Nsmev4PdhKqLRZBblqmdsQfFhJo2JEd_dJYmxNXu-dC3I0Jv3yrGE0CrnfDBolgB2wQ7aWuL8mFYgEbFPLAAgi-JBiBluN70nA4i0nOZxE9t4__oSJuU_U2UVg4fCYw1GRSoaIvPR3R9hzwXvpUaTINqM-wTY0L07drPvg_rNgAqsgNWPlqNHnvMBVQlQQA',
  composerAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDiZn8qPu5cwrblFvQBhtrH1bx8Nzyc6Kuer7XhPD7SZUKcpdkCtXQDZ08drhFXpkBVmV5U9wpTugL32yOUA-JLC6jp0oMDTL4K9GJvIqD2EZqgVozkyDFIIctLyTzi07deQxciFIo2Nr-wobwWQUr6uBmvkH9jCZUv7qWX7OwB5K--2vw0cT3q71RxeNYsziFLDiJbRp5xmjDhUGBCrWBmPcIVEzxbxK7UAcLfveHv_TYqmRwwFjNvNg',
}

export default function Community() {
  const [endorsed, setEndorsed] = useState({})
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState('All Posts')
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

  return (
    <main className="pt-24 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* ===== Left Sidebar: Profile Summary & Groups ===== */}
      <aside className="hidden lg:block lg:col-span-3 space-y-gutter">
        <div className="glass-card premium-shadow rounded-xl p-6 overflow-hidden">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full mb-4 border-2 border-primary-fixed p-1">
              <img className="w-full h-full object-cover rounded-full" src={ME.avatar} alt={ME.name} />
            </div>
            <h2 className="font-title-md text-title-md text-primary">{ME.name}</h2>
            <p className="font-body-md text-label-sm text-on-surface-variant mt-1">{ME.role}</p>
            <div className="mt-4 pt-4 border-t border-outline-variant w-full flex justify-around">
              <div className="text-center">
                <span className="block font-bold text-primary">1.2k</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">Network</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-primary">84</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">Endorsements</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card premium-shadow rounded-xl p-6">
          <h3 className="font-title-md text-label-sm text-primary uppercase tracking-widest mb-4">
            Highlighted Groups
          </h3>
          <div className="space-y-4">
            {groups.map((g) => (
              <div key={g.name} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MaterialIcon name={g.icon} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-title-md text-[14px] text-on-surface">{g.name}</p>
                  <p className="text-label-sm text-on-surface-variant">{g.members}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-primary text-primary font-label-sm text-label-sm rounded-lg hover:bg-primary hover:text-white transition-all">
            Discover Groups
          </button>
        </div>
      </aside>

      {/* ===== Main Feed ===== */}
      <div className="lg:col-span-6 space-y-gutter">
        {/* Composer */}
        <div className="glass-card premium-shadow rounded-xl p-6">
          <div className="flex gap-4">
            <img className="w-10 h-10 rounded-full object-cover" src={ME.composerAvatar} alt="Tu avatar" />
            <div className="flex-1">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="w-full bg-surface-bright border-none rounded-xl p-3 font-body-md text-body-md focus:ring-1 focus:ring-primary h-20 resize-none"
                placeholder="What's on your mind, Alejandro?"
              ></textarea>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <MaterialIcon name="image" className="text-[20px]" />
                <span className="font-label-sm text-label-sm">Photo</span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <MaterialIcon name="event" className="text-[20px]" />
                <span className="font-label-sm text-label-sm">Event</span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <MaterialIcon name="article" className="text-[20px]" />
                <span className="font-label-sm text-label-sm">Article</span>
              </button>
            </div>
            <button
              onClick={publishPost}
              className="bg-primary text-white px-6 py-2 rounded-full font-label-sm text-label-sm hover:shadow-lg active:scale-95 transition-all"
            >
              Post
            </button>
          </div>
        </div>

        {/* Feed Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All Posts', 'Advice for Russia', 'Networking', 'Job Offers'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors ${
                filter === f
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:border-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Posts */}
        {posts.map((post) => {
          const isEndorsed = endorsed[post.id]
          return (
            <article key={post.id} className="glass-card premium-shadow rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <img className="w-12 h-12 rounded-full object-cover" src={post.avatar} alt={post.author} />
                  <div>
                    <h4 className="font-title-md text-body-md text-primary">{post.author}</h4>
                    <p className="text-label-sm text-on-surface-variant">
                      {post.role} • {post.time}
                    </p>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary">
                  <MaterialIcon name="more_horiz" />
                </button>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-4">{post.content}</p>
              {post.image && (
                <div className="rounded-xl overflow-hidden mb-4 border border-outline-variant">
                  <img className="w-full h-64 object-cover" src={post.image} alt="Publicación de la comunidad" />
                </div>
              )}
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                <div className="flex gap-6">
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors group">
                    <MaterialIcon name="thumb_up" className="text-[20px] group-active:scale-125 transition-transform" />
                    <span className="font-label-sm text-label-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors group">
                    <MaterialIcon name="chat_bubble" className="text-[20px]" />
                    <span className="font-label-sm text-label-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors group">
                    <MaterialIcon name="share" className="text-[20px]" />
                  </button>
                </div>
                <button
                  onClick={() => toggleEndorse(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-label-sm hover:shadow-md transition-all ${
                    isEndorsed ? 'bg-secondary text-white active-glow' : 'bg-secondary-container text-on-secondary-container'
                  }`}
                >
                  <MaterialIcon name="verified" className="text-[18px]" />
                  <span>{isEndorsed ? 'Endorsed' : 'Endorse Post'}</span>
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {/* ===== Right Sidebar: Events & Recommended ===== */}
      <aside className="hidden lg:block lg:col-span-3 space-y-gutter">
        <div className="glass-card premium-shadow rounded-xl p-6">
          <h3 className="font-title-md text-label-sm text-primary uppercase tracking-widest mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.title} className="flex gap-3">
                <div className="flex flex-col items-center justify-center bg-surface-container w-12 h-12 rounded-lg shrink-0">
                  <span className="text-[10px] font-bold text-primary uppercase">{e.month}</span>
                  <span className="text-title-md font-bold text-primary">{e.day}</span>
                </div>
                <div>
                  <p className="font-title-md text-[14px] text-on-surface leading-tight">{e.title}</p>
                  <p className="text-label-sm text-on-surface-variant mt-1">{e.meta}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-primary font-label-sm text-label-sm hover:underline">
            View All Events
          </button>
        </div>

        <div className="glass-card premium-shadow rounded-xl p-6">
          <h3 className="font-title-md text-label-sm text-primary uppercase tracking-widest mb-4">
            Recommended for You
          </h3>
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img className="w-8 h-8 rounded-full" src={rec.avatar} alt={rec.name} />
                  <div className="max-w-[100px]">
                    <p className="text-label-sm font-bold truncate">{rec.name}</p>
                    <p className="text-[10px] text-on-surface-variant truncate">{rec.role}</p>
                  </div>
                </div>
                <button className="text-primary font-label-sm text-[10px] border border-primary px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <p className="text-[11px] text-on-surface-variant opacity-60">
            © 2024 CubaLink Professional. All rights reserved.
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a className="text-[11px] text-on-surface-variant hover:text-primary" href="#">
              Privacy
            </a>
            <a className="text-[11px] text-on-surface-variant hover:text-primary" href="#">
              Terms
            </a>
            <a className="text-[11px] text-on-surface-variant hover:text-primary" href="#">
              Help
            </a>
          </div>
        </div>
      </aside>

      {/* Toast de confirmación */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl font-label-sm text-label-sm md:bottom-8">
          ✓ Publicación enviada a la comunidad
        </div>
      )}
    </main>
  )
}
