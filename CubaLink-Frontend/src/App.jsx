import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Companies from './pages/Companies'
import Services from './pages/Services'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <ScrollToTop />
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empleos" element={<Jobs />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/empresas" element={<Companies />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="*" element={
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
            } />
          </Routes>
        </div>

        <Footer />
        <BottomNav />
      </div>
    </Router>
  )
}
