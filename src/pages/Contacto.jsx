import { useState } from 'react'
import Icon from '../components/Icon'
import { CONTACT } from '../data'

const info = [
  { icon: 'pin', title: 'Dirección', value: CONTACT.address },
  { icon: 'phone', title: 'Teléfono', value: CONTACT.phone },
  { icon: 'mail', title: 'Correo', value: CONTACT.email },
  { icon: 'clock', title: 'Horario', value: CONTACT.hours },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)

  return (
    <section className="grid min-h-screen lg:grid-cols-2">
      {/* Left info */}
      <div className="bg-navy-900 px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">Estamos aquí para ti</h1>
        <p className="mt-4 max-w-md text-white/60">
          Visítanos, escríbenos o llámanos. Estamos disponibles todos los días para ayudarte a
          planificar tu evento soñado.
        </p>

        <ul className="mt-10 space-y-6">
          {info.map((i) => (
            <li key={i.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Icon name={i.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-gold">{i.title}</p>
                <p className="text-sm text-white/70">{i.value}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 overflow-hidden rounded-xl border border-gold/30">
          <iframe
            title="Ubicación RAYMI"
            src="https://www.google.com/maps?q=San+Jer%C3%B3nimo+Andahuaylas+Apur%C3%ADmac+Per%C3%BA&output=embed"
            className="h-56 w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right form */}
      <div className="bg-white px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <h2 className="font-serif text-3xl font-bold text-navy">Envíanos un mensaje</h2>
        <p className="mt-2 text-sm text-navy-700/70">Te respondemos en menos de 24 horas</p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-gold/40 bg-cream p-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Icon name="check" className="h-7 w-7" />
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-navy">¡Mensaje enviado!</h3>
            <p className="mt-2 text-sm text-navy-700/70">Gracias por escribirnos. Te contactaremos pronto.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="field-label">Nombre completo</label>
              <input className="field-input" placeholder="Tu nombre y apellido" required />
            </div>
            <div>
              <label className="field-label">Correo electrónico</label>
              <input type="email" className="field-input" placeholder="tu@correo.com" required />
            </div>
            <div>
              <label className="field-label">Asunto</label>
              <select className="field-input">
                <option>Consulta sobre paquetes</option>
                <option>Disponibilidad de fechas</option>
                <option>Solicitar cotización</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="field-label">Mensaje adicional</label>
              <textarea rows="5" className="field-input" placeholder="Cuéntanos más sobre tu evento ...." required />
            </div>
            <button type="submit" className="btn-navy w-full">Enviar Mensaje</button>
          </form>
        )}

        <a
          href={`https://wa.me/${CONTACT.phoneRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-between rounded-xl border border-gray-200 bg-cream px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">Chat por WhatsApp</p>
              <p className="text-xs text-navy-700/60">Respuesta más rápida</p>
            </div>
          </div>
          <span className="rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white">
            Abrir chat
          </span>
        </a>
      </div>
    </section>
  )
}
