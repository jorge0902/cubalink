import { Link } from 'react-router-dom'
import MaterialIcon from '../components/MaterialIcon'
import JobCard from '../components/JobCard'
import { jobs } from '../data/jobs'

// Nota: Estas imágenes se sustituirán pronto por fotografía real de nuestra comunidad en Rusia
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAdCL8RYAEXUrL3msh7RHoUxoEnuBNVgCuELtd_VmeKiffMIELVINW7o4K3nRUtpL0VuFOZrj95d6D4sF1QkK0y2UCdfHkNEwa0PwKejaE8imK8_YRdSpDxohz6tMvOeD4GO_af5F9QsCV079jPrUMU7yG4OITFmDQUhnkWLa_JrNE_toLo63zdpAm7jLW7_EZUInvh26YSLHcmSFGeJhPoswP3DZKAlyfVM9XkyKbq2E9dJQMHI6CQDQ'
const SUCCESS_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC48OZxttJwl6AvSNFXkZ6cb4wnvamF3QQIRgJSRB-3OlWI0AC0DqoRY9z_1PExPdE-M-fnRMgK1qxCZvi03Ux-vJd0hyA5zjf5xOIPrBljdjwXcDAPTHI2XIRDgm41AUURdFRejSpT-NqqCBmJyJ3ADVaS6-OisFjzpUy_hViL86eDVQU9eiPlIuPEMyNp8TH7Zej2752s8fV26XQG-YS0_-gJpkjQQkcNhiGNmBrm2P1ISzzGKtHMig'
const SUCCESS_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHbn1TheVxOEH_bw5sGaklWKAPg9jv92utel-7rbLzFwy5QpOIZ7MRQlxTMmivevjgeSb7t-rGEzoPHh_iUB3K4PdPRYPIUS5DVADVFBR9fonSgQIErt2PtrYKWKdUTl7NaOnMkC293LMe7W-EukyEpkXVDeqBT56xbZuU7XZaExtDr-rjYJlvNVq5nLyFFr0hShAZUDRDTFr3ygjaazp_i5gmyH5DP8JaZDg-wxozdDm9HkiTcxW9Ow'
const SUCCESS_3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDCAx5lqPlHybzJRQWRigJExoB6TfF2CJbCxga7lr0DFMV9WdT9S-HdCJvklvSpvgPws9b-4mzGblhoC1Lu59z6VzUUnJzMe_lv1g1t8q7gvAVR3nPofzCpzOzz4V0gB_mAwxGGsRMdhTWVof5W8VgOQ4ndFkc9rvaSHB-WXVQbGZudyIP4XV_N3A9DW1jr8qdKPZ94llEfz9uevCae1Mfv3ojrBfaYpC1p_fBIY7omqdnDjRZUDaHqTg'
const SUCCESS_4 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAO4nyTJlOKlUzAc8IptJ5uZa9-AqD0yR709kXJ-QwWkCyffcgLLfQTI9KT7RSMJqOq4Cp24xn2vzt_BpZBJ_zGWfKOGxqmmibsqrwY1FaWp1YIUtF-pZkhVeD8GFMEV_zLXwSX1VqPirUFQ5A72uR8xfppq9DsLAy6B4ie92KOwkmMt5RTyLKKlhLyyP1-uQZYK-n-rMaxEqWqkO6ucVvgHubZfieVPfO0lSiDrmp2D61rnRxGXDOORQ'

const features = [
  {
    icon: 'account_circle',
    title: 'Pon tus datos al kilo',
    text: 'Mientras más completo esté tu perfil, más fácil le pones a los empleadores encontrarte. No cojas lucha, es rápido.',
    link: 'Comenzar',
    to: '/perfil',
  },
  {
    icon: 'hub',
    title: 'Conecta con la gente',
    text: 'Asere, aquí estamos para ayudarnos. Conecta con otros cubanos que ya saben cómo funciona el trámite en Rusia.',
    link: 'Explorar red',
    to: '/comunidad',
  },
  {
    icon: 'rocket_launch',
    title: 'Busca brete sin cuento',
    text: 'Ofertas frescas todos los días. Sin rodeos y de gente de confianza para que no te pase nada raro.',
    link: 'Ver empleos',
    to: '/empleos',
  },
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter items-center">
          <div className="z-10">
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
              CubaLink: Pa' que los cubanos en Rusia echen pa'lante.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Aquí nos ayudamos entre todos. Trámites, brete y esa mano que hace falta cuando estás lejos de casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/perfil"
                className="bg-brand-blue-deep text-white px-8 py-4 rounded shadow-md hover:shadow-lg transition-all active:scale-95 font-title-md text-center"
              >
                Súmate a la familia
              </Link>
              <Link
                to="/empleos"
                className="bg-white border border-outline text-brand-blue-deep px-8 py-4 rounded hover:bg-surface-container-low transition-all active:scale-95 font-title-md text-center"
              >
                Ver qué hay hoy
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">+10k profesionales ya se han unido</p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src={HERO_IMG} alt="CubaLink profesional" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== How it Works (Bento Layout) ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Metodología</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">¿Cómo funciona CubaLink?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-xl border border-outline-variant hover:shadow-xl transition-shadow bg-surface-bright flex flex-col justify-between h-full"
              >
                <div>
                  <MaterialIcon name={f.icon} className="text-brand-blue-deep text-4xl mb-6" />
                  <h3 className="font-title-md text-title-md text-primary mb-4">{f.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{f.text}</p>
                </div>
                <Link to={f.to} className="mt-6 text-brand-gold font-bold flex items-center gap-2 cursor-pointer">
                  {f.link}
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Nuevas secciones de la red ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/30">
        <div className="max-w-container-max mx-auto">
          <div className="mb-12 text-center">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">La red completa</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Todo lo que necesitas, en un solo lugar</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto">
              Cuarto, chamba, paquete o remesa: la comunidad cubana en Rusia resuelve aquí, entre nosotros.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                to: '/rentas',
                icon: 'home_work',
                title: 'Rentas Moscú',
                text: 'Cuartos, estudios y apartamentos con todo claro: precio, depósito y metro.',
                cta: 'Buscar alquiler',
                emoji: '🏠',
              },
              {
                to: '/marketplace',
                icon: 'storefront',
                title: 'Marketplace',
                text: 'Compra y vende entre cubanos: teléfonos, ropa, vehículos y más.',
                cta: 'Ver anuncios',
                emoji: '🛒',
              },
              {
                to: '/viajes',
                icon: 'flight_takeoff',
                title: 'Viajes',
                text: 'Paquetes y encargos entre Cuba y Rusia. Gente de confianza que viaja.',
                cta: 'Conectar viajeros',
                emoji: '✈️',
              },
              {
                to: '/remesas',
                icon: 'currency_exchange',
                title: 'Remesas',
                text: 'Envía dinero a tu familia con tasas claras y gente verificada.',
                cta: 'Comparar tasas',
                emoji: '💸',
              },
            ].map((sec) => (
              <Link
                key={sec.to}
                to={sec.to}
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant premium-shadow hover:border-brand-blue-deep hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-brand-blue-deep/10 flex items-center justify-center text-brand-blue-deep group-hover:bg-brand-blue-deep group-hover:text-white transition-colors">
                    <MaterialIcon name={sec.icon} className="text-2xl" />
                  </span>
                  <span className="text-2xl">{sec.emoji}</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary mb-2 group-hover:text-brand-blue-deep transition-colors">
                  {sec.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{sec.text}</p>
                <span className="text-brand-gold font-bold flex items-center gap-2 text-label-sm">
                  {sec.cta}
                  <MaterialIcon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Jobs (Grid Cards) ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low/30">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Tendencias</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">Empleos Destacados</h2>
            </div>
            <Link
              to="/empleos"
              className="hidden md:block border-b-2 border-primary text-primary font-bold hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Ver todas las vacantes
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Community Highlights (Asymmetric Layout) ===== */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="grid md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 mb-12 md:mb-0">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-label-sm">Comunidad</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2 mb-6">Casos de Éxito</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Nuestra misión es empoderar al profesional cubano dondequiera que se encuentre. Descubre cómo nuestra
                red ha transformado carreras reales.
              </p>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-brand-gold pl-6 py-2">
                  <p className="font-body-md italic text-primary mb-4">
                    &ldquo;Gracias a CubaLink, logré conectar con una empresa en Rusia que buscaba talento cubano confiable. Hoy estoy trabajando y adaptado.&rdquo;
                  </p>
                  <footer className="font-label-sm text-label-sm font-bold">
                    — Carlos Rodríguez, Profesional en Moscú
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                  <img className="w-full h-full object-cover" src={SUCCESS_1} alt="Empresaria cubana exitosa" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                  <img className="w-full h-full object-cover" src={SUCCESS_2} alt="Acuerdo profesional" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                  <img className="w-full h-full object-cover" src={SUCCESS_3} alt="Joven profesional en coworking" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                  <img className="w-full h-full object-cover" src={SUCCESS_4} alt="Reunión colaborativa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-[0.02] pointer-events-none"></div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Lleva tu carrera al siguiente nivel</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Únete a la red más exclusiva de profesionales cubanos y accede a un mundo de posibilidades sin límites
            geográficos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/perfil"
              className="bg-brand-blue-deep text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:bg-opacity-90 transition-all"
            >
              Crear cuenta gratis
            </Link>
            <Link
              to="/comunidad"
              className="border border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-surface-container-low transition-all"
            >
              Saber más
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
