import { useState } from 'react'
import Icon from '../components/Icon'
import { CONTACT } from '../data'

const steps = [
  { n: '1', title: 'Envías tu solicitud', text: 'Completa el formulario con los detalles' },
  { n: '2', title: 'Te contactamos', text: 'En menos de 24 horas coordinamos' },
  { n: '3', title: 'Confirmación', text: 'Pago de adelanto para asegurar fecha' },
  { n: '4', title: '¡Tu evento listo!', text: 'Nos encargamos de todo' },
]

export default function Reservas() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="grid min-h-screen lg:grid-cols-2">
      {/* Form */}
      <div className="bg-cream px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <h1 className="font-serif text-4xl font-bold text-navy">Solicitar Reserva</h1>
        <p className="mt-2 text-sm text-navy-700/70">
          Completa el formulario y nos contactaremos contigo en menos de 24 horas
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-gold/40 bg-white p-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Icon name="check" className="h-7 w-7" />
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-navy">¡Solicitud enviada!</h3>
            <p className="mt-2 text-sm text-navy-700/70">
              Gracias por tu interés. Nos pondremos en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label className="field-label">Nombre completo</label>
              <input className="field-input" placeholder="Tu nombre y apellido" required />
            </div>
            <div>
              <label className="field-label">Correo electrónico</label>
              <input type="email" className="field-input" placeholder="tu@correo.com" required />
            </div>
            <div>
              <label className="field-label">Teléfono / WhatsApp</label>
              <input className="field-input" placeholder="+51 ...." required />
            </div>
            <div>
              <label className="field-label">Tipo de evento</label>
              <input className="field-input" placeholder="BODA / MATRIMONIO" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="field-label">Fecha del evento</label>
                <input type="date" className="field-input" />
              </div>
              <div>
                <label className="field-label">Número de invitados</label>
                <input type="number" min="1" className="field-input" placeholder="150" />
              </div>
            </div>
            <div>
              <label className="field-label">Paquete de interés</label>
              <select className="field-input">
                <option value="">BÁSICO / PREMIUM / VIP</option>
                <option>Básico</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
            </div>
            <div>
              <label className="field-label">Mensaje adicional</label>
              <textarea rows="4" className="field-input" placeholder="Cuéntanos más sobre tu evento ...." />
            </div>
            <button type="submit" className="btn-gold w-full">Enviar Solicitud</button>
          </form>
        )}
      </div>

      {/* Info */}
      <div className="bg-navy-900 px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16">
        <p className="eyebrow">¿Por qué elegirnos?</p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Tu evento en manos expertas</h2>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Información del Salón
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-white/60">Capacidad máxima</dt>
              <dd className="font-semibold">{CONTACT.capacity}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/60">Disponibilidad</dt>
              <dd className="font-semibold">Lun - Dom</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/60">Horario</dt>
              <dd className="font-semibold">9:00 AM – 10:00 PM</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Proceso de reserva</h3>
          <ol className="mt-4 space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-900">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="text-xs text-white/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 rounded-xl border border-gold/40 bg-white/5 p-6 text-center">
          <Icon name="phone" className="mx-auto h-7 w-7 text-gold" />
          <p className="mt-2 font-semibold">WhatsApp directo</p>
          <p className="text-sm text-white/60">{CONTACT.phone}</p>
          <a
            href={`https://wa.me/${CONTACT.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
          >
            Chatear ahora
          </a>
        </div>
      </div>
    </section>
  )
}
