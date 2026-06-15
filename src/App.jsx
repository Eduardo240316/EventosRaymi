import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Paquetes from './pages/Paquetes'
import Reservas from './pages/Reservas'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import Login from './pages/Login'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/paquetes" element={<Paquetes />} />
              <Route path="/reservas" element={<Reservas />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <WhatsAppButton />
          </Layout>
        }
      />
    </Routes>
  )
}
