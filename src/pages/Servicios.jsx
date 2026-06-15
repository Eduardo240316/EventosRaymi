import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Icon from '../components/Icon'
import { services } from '../data'

export default function Servicios() {
  return (
    <>
      <PageBanner
        eyebrow="Lo que ofrecemos"
        title="Nuestros Servicios"
        subtitle="Cada detalle pensado para que tu evento sea perfecto e inolvidable"
      />

      <section className="bg-white py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-4 rounded-xl border border-gray-100 bg-cream/60 p-6 transition hover:border-gold/40 hover:shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy-900">¿Listo para reservar?</h3>
            <p className="text-navy-900/80">Contacta con nosotros y te asesoramos sin compromiso</p>
          </div>
          <Link to="/reservas" className="btn-navy">
            Reservar Ahora
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
