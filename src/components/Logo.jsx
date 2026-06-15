import { Link } from 'react-router-dom'
import { CONTACT } from '../data'

export default function Logo({ to = '/', dark = false }) {
  return (
    <Link to={to} className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#0d1b2e" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#0d1b2e" />
          <path d="M12 5l1.8 3.7 4 .6-2.9 2.8.7 4L12 14.2 8.4 16.1l.7-4L6.2 9.3l4-.6z" fill="#d4a017" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
          {CONTACT.brand}
        </span>
        <span className={`block text-xl font-bold tracking-wide ${dark ? 'text-navy' : 'text-white'}`}>
          {CONTACT.name}
        </span>
      </span>
    </Link>
  )
}
