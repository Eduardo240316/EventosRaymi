import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/paquetes', label: 'Paquetes' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="btn-outline">
            Iniciar sesión
          </Link>
          <Link to="/reservas" className="btn-gold">
            Reservar Ahora
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900/95 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-gold' : 'text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-3">
              <Link to="/login" onClick={() => setOpen(false)} className="btn-outline flex-1">
                Iniciar sesión
              </Link>
              <Link to="/reservas" onClick={() => setOpen(false)} className="btn-gold flex-1">
                Reservar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
