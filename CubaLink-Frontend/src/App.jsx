import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ScrollToTop from './components/ScrollToTop'
import { ActivityProvider } from './context/ActivityContext'
import { FavoritesProvider } from './context/FavoritesContext'

import HomeNew from './pages/HomeNew'
import Jobs from './pages/Jobs'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Companies from './pages/Companies'
import Services from './pages/Services'
import Rentals from './pages/Rentals'
import Marketplace from './pages/Marketplace'
import Travel from './pages/Travel'
import Remittances from './pages/Remittances'
import Publicar from './pages/Publicar'
import Register from './pages/Register'
import Ranking from './pages/Ranking'
import Trust from './pages/Trust'
import TrustProfile from './pages/TrustProfile'
import SavedListings from './pages/SavedListings'

export default function App() {
  return (
    <FavoritesProvider>
      <ActivityProvider>
        <Router>
        <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
          <ScrollToTop />
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomeNew />} />
              <Route path="/empleos" element={<Jobs />} />
              <Route path="/comunidad" element={<Community />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/confiables" element={<Trust />} />
              <Route path="/confiables/:id" element={<TrustProfile />} />
              <Route path="/empresas" element={<Companies />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/rentas" element={<Rentals />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/viajes" element={<Travel />} />
              <Route path="/remesas" element={<Remittances />} />
              <Route path="/publicar/:tipo" element={<Publicar />} />
              <Route path="/guardados" element={<SavedListings />} />
              <Route
                path="*"
                element={
                  <div className="h-screen flex items-center justify-center text-center px-4">
                    <div>
                      <h1 className="text-display-lg text-primary font-bold mb-4">404</h1>
                      <p className="text-body-md text-on-surface-variant mb-8">
                        La página que buscas no existe en la red profesional de CubaLink.
                      </p>
                      <a href="/" className="bg-primary text-white px-6 py-3 rounded-lg font-bold">
                        Volver al Inicio
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>

          <Footer />
          <BottomNav />
        </div>
        </Router>
      </ActivityProvider>
    </FavoritesProvider>
  )
}