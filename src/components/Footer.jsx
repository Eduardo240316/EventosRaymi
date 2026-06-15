import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { CONTACT } from '../data'

const quick = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/paquetes', label: 'Paquetes' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Más que un salón, creamos experiencias inolvidables para ti y tus invitados.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quick.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="transition hover:text-gold">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-2">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-gold">{CONTACT.phone}</a>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
            </li>
            <li className="flex gap-2">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Lun - Dom: 9:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            Horario de Atención
          </h4>
          <p className="text-sm text-white/70">Lunes a Domingo</p>
          <p className="mt-1 text-lg font-semibold text-gold">9:00 AM – 10:00 PM</p>
          <p className="mt-1 text-sm text-white/60">Atención personalizada</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Salón de Eventos RAYMI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
