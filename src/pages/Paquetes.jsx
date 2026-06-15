import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PackageCard from '../components/PackageCard'
import { packages } from '../data'

export default function Paquetes() {
  return (
    <>
      <PageBanner
        eyebrow="Elige el paquete ideal"
        title="Nuestros Paquetes"
        subtitle="Opciones para cada tipo de celebración y presupuesto"
      />

      <section className="bg-white py-16">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.name} pkg={p} />
          ))}
        </div>

        <div className="container-x mt-12">
          <div className="rounded-xl bg-cream px-6 py-6 text-center text-navy-700">
            ¿Necesitas algo personalizado?{' '}
            <Link to="/contacto" className="font-semibold text-gold hover:underline">
              Contáctanos para un paquete a medida →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
