import MaterialIcon from '../components/MaterialIcon'

// Imágenes originales de perfil_profesional/code.html
const HEADER_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDo831PEmrJDJlAgkCT0pmBunLH_e7KDGAGJTOSxK8q9FynFk6w6ofThqGNdn3TkMAcSL8qnd6Z_-TTrc9YvqQNZgm9B77lt-bCIXvSv8sLC0G1uIslYUBPR3nCSTftq6s6vpsRjxv-q5OJa1UBTAXu6-GTJwyGGfOlVyg--OtFns9yjgouj0fwcCLv56lcIZxNBL6pZMwggJiddCKKj2T9yRGBTvkoppXsl5CZLeHDxM8GV5IbUPOwdQ'
const PROFILE_PIC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPjjyFYrQnr1z3VjpCJKJ0an-PiiGCIfqS-YluHHhw5eMh-kR5t2xhlFz6mf0gTjMj_YVACKY8b6YTUANCnsJe9_nUqP3BWW7ngri5ydkRRnBkeoXU-1rSKWs3_hBDgR59BndhBPotQnGUSzgtGdom85A55i7ZVjlxIOAqfS1bITBm6gWq_7pdc9ZFkqPJtY88wstdUuzLav88gJOkksmOlNDZXWWK7NLhcf1u81x4YHrddVF6LFTU_A'
const CLOUDSPHERE_LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYIARpHWuq2rYpw3JGxlomGldssVu_qxuYfuoGYtHwPzLNBsxd31OEePBpDqFAOXN6RV8gCMN4bYklqUWSJTEEpBoHvnuL8pp4B7Yxc1I5cnDU_gFctHU_BmCoKsGajcGNEHmC4PJkkH71rdjnwqf9JDMVXw4pEmhn5RcWIeFM3ZWvYpTn9pAGdqwU4un_HRGByDPLB9Qm789Y_P0xq2qNgJfC0LI5k2us_egDAcvP84H-fwluGnr3g'
const MDS_LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHbFC9BDO3sZHNWOR-UIKr3Qi1qO368DZhvAvDhwXzA0y2RoTywgTfbii5pXNUGSQ5VmBpCC7P0QI4ygYi-0YPkFl5yJlx3WVSES6PNw_4i2-MpJo1f029iSH8KpHeSQbO05XFlweH1bnX0-L7KSBYa76Vm9rd2qiiIFfsAXrfBPsQSs0N1WkCjSUyf6GaC--wA2eyA0yKNnekzr4hhnpzzcxF70fs68u8_4yANdIzbOOhOdcA3oaajg'

const experience = [
  {
    logo: CLOUDSPHERE_LOGO,
    title: 'Lead Full-Stack Architect',
    company: 'CloudSphere Tech • Full-time',
    period: 'Jan 2021 - Present • 3 yrs 4 mos',
    description:
      'Leading the development of a cross-border remittance platform for the diaspora. Managing a team of 12 engineers across Moscow and Madrid.',
  },
  {
    logo: MDS_LOGO,
    title: 'Senior Software Engineer',
    company: 'Moscow Digital Systems • Contract',
    period: 'Jun 2018 - Dec 2020 • 2 yrs 7 mos',
    description:
      'Optimized backend microservices using Node.js and PostgreSQL, resulting in a 40% reduction in latency for international user queries.',
  },
]

const skills = [
  'TypeScript',
  'React / Next.js',
  'Node.js',
  'AWS Infrastructure',
  'PostgreSQL',
  'System Design',
  'Redis',
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Russian', level: 'Full Professional' },
  { name: 'English', level: 'Fluent' },
]

export default function Profile() {
  return (
    <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* ===== Main Info Card ===== */}
        <div className="md:col-span-8 bg-surface-container-lowest premium-shadow rounded-xl overflow-hidden border border-outline-variant">
          <div className="h-48 relative bg-primary-container overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
          </div>
          <div className="px-8 pb-8 -mt-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="flex flex-col">
                <div className="w-32 h-32 rounded-xl border-4 border-surface-container-lowest overflow-hidden premium-shadow bg-surface">
                  <img className="w-full h-full object-cover" src={PROFILE_PIC} alt="Alejandro Perez" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <h1 className="font-headline-lg text-headline-lg text-primary">Alejandro Perez</h1>
                    <MaterialIcon name="verified" fill className="text-secondary" />
                  </div>
                  <p className="font-title-md text-title-md text-on-surface-variant">Senior Developer</p>
                  <div className="flex items-center gap-1 mt-2 text-on-surface-variant opacity-80">
                    <MaterialIcon name="location_on" className="text-body-md" />
                    <span className="font-body-md text-body-md">Moscow, Russia</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-2">
                <button className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-lg premium-shadow-hover transition-all active:scale-95 flex items-center gap-2">
                  <MaterialIcon name="mail" className="text-[18px]" />
                  Contact
                </button>
                <button className="border border-outline-variant bg-surface-container-lowest text-primary font-label-sm text-label-sm px-6 py-3 rounded-lg premium-shadow-hover transition-all active:scale-95 flex items-center gap-2">
                  <MaterialIcon name="share" className="text-[18px]" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Stats Sidebar ===== */}
        <div className="md:col-span-4 grid grid-cols-1 gap-gutter">
          <div className="bg-surface-container-lowest premium-shadow rounded-xl border border-outline-variant p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Profile Strength
                </h3>
                <span className="font-label-sm text-label-sm text-secondary font-bold">Excellent</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[92%]"></div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 opacity-70">
              Your profile is in the top 5% of Cuban developers in Europe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary text-on-primary premium-shadow rounded-xl p-4 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
              <span className="font-headline-lg text-headline-lg">1.2k</span>
              <span className="font-label-sm text-label-sm opacity-80">Connections</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant premium-shadow rounded-xl p-4 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
              <span className="font-headline-lg text-headline-lg text-primary">854</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant opacity-80">Job Views</span>
            </div>
          </div>
        </div>

        {/* ===== Experience ===== */}
        <div className="md:col-span-8 space-y-gutter">
          <section className="bg-surface-container-lowest premium-shadow rounded-xl border border-outline-variant overflow-hidden">
            <div className="px-8 py-6 border-b border-outline-variant flex justify-between items-center">
              <h2 className="font-title-md text-title-md text-primary">Experience</h2>
              <button className="text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <MaterialIcon name="edit" />
              </button>
            </div>
            <div className="p-8 space-y-8">
              {experience.map((job) => (
                <div key={job.title} className="flex gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-lg bg-surface border border-outline-variant flex items-center justify-center p-2 premium-shadow overflow-hidden">
                    <img className="w-full h-full object-contain" src={job.logo} alt={job.company} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-title-md text-title-md text-primary group-hover:text-primary-container transition-colors">
                      {job.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface">{job.company}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70 mt-1">{job.period}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ===== Skills & Languages ===== */}
        <div className="md:col-span-4 space-y-gutter">
          <section className="bg-surface-container-lowest premium-shadow rounded-xl border border-outline-variant p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-title-md text-title-md text-primary">Expertise</h2>
              <MaterialIcon name="psychology" className="text-primary-fixed-dim" />
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-surface-container-low text-primary-container font-label-sm text-label-sm rounded-full border border-surface-variant"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-surface-container-lowest premium-shadow rounded-xl border border-outline-variant p-6">
            <h2 className="font-title-md text-title-md text-primary mb-6">Languages</h2>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="font-body-md text-body-md text-on-surface">{lang.name}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-2 py-1 rounded">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
