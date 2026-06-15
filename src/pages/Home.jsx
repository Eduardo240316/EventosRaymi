import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PackageCard from '../components/PackageCard'
import { CONTACT, heroFeatures, packages } from '../data'

const HERO_IMG = '/images/hero.jpg'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[640px] overflow-hidden">
        <img src={HERO_IMG} alt="Salón decorado" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
        <div className="container-x relative flex min-h-[640px] flex-col justify-center">
          <p className="eyebrow">Vive momentos inolvidables</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl font-bold leading-tight text-white sm:text-6xl">
            Salón de Eventos <span className="block text-gold">RAYMI</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/70">
            El lugar perfecto para celebrar tus momentos más importantes con elegancia y excelencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/reservas" className="btn-gold">Reservar Ahora</Link>
            <Link to="/galeria" className="btn-outline">Ver Galería</Link>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {heroFeatures.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <Icon name={f.icon} className="h-8 w-8 shrink-0 text-gold" stroke={1.5} />
              <div>
                <p className="text-sm font-semibold text-navy">{f.title}</p>
                <p className="text-xs text-navy-700/70">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="eyebrow">Elige el paquete ideal</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-navy">Nuestros Paquetes</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <PackageCard key={p.name} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-serif text-3xl font-bold text-white">¿Listo para reservar?</h3>
            <p className="mt-2 text-white/60">
              Contacta con nosotros y te asesoramos sin compromiso.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/reservas" className="btn-gold">Reservar Ahora</Link>
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn-outline">{CONTACT.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
