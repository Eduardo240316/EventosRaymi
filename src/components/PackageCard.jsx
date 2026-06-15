import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function PackageCard({ pkg }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 transition hover:shadow-lg ${
        pkg.featured ? 'ring-2 ring-gold' : 'ring-gray-200'
      }`}
    >
      <div className="relative h-40">
        <img src={pkg.img} alt={pkg.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/30" />
        <span
          className={`absolute left-1/2 top-3 -translate-x-1/2 rounded-md px-4 py-1 text-xs font-bold uppercase tracking-wide ${
            pkg.featured ? 'bg-gold text-navy-900' : 'bg-white/90 text-navy'
          }`}
        >
          {pkg.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="space-y-2 text-sm text-navy-700">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-2">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="font-serif text-3xl font-bold text-navy">{pkg.price}</span>
          <Link
            to="/reservas"
            className={`w-full text-center ${pkg.featured ? 'btn-gold' : 'btn-navy'}`}
          >
            Seleccionar
          </Link>
        </div>
      </div>
    </div>
  )
}
