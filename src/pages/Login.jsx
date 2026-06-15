import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Login() {
  return (
    <div className="min-h-screen bg-navy-900 text-white lg:grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link to="/" className="text-white hover:text-gold">Inicio</Link>
            <Link to="/servicios" className="text-white hover:text-gold">Servicios</Link>
          </nav>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 lg:max-w-md">
          <div className="mb-5 h-0.5 w-16 bg-gold" />
          <p className="text-lg text-gold">Bienvenido de vuelta</p>
          <h1 className="mt-3 font-serif text-4xl font-bold">Accede a tu cuenta RAYMI</h1>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            Gestiona tus reservas, revisa el historial de eventos y accede a beneficios exclusivos
            para clientes frecuentes.
          </p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-gold">¿Nuevo cliente?</p>
            <p className="mt-1 text-sm text-white/60">
              Crea tu cuenta y obtén un 10% de descuento en tu primera reserva.
            </p>
            <Link to="/login" className="mt-3 inline-block text-sm font-semibold text-gold hover:underline">
              Crear cuenta →
            </Link>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center bg-white px-6 py-12 text-navy sm:px-12">
        <div className="w-full max-w-md">
          <h2 className="font-serif text-4xl font-bold">Iniciar sesión</h2>
          <p className="mt-2 text-sm text-navy-700/70">Ingresa tus credenciales para continuar</p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="field-label">Correo electrónico</label>
              <input type="email" className="field-input" placeholder="tu@correo.com" required />
            </div>
            <div>
              <label className="field-label">Contraseña</label>
              <input type="password" className="field-input" placeholder="••••••••" required />
              <div className="mt-2 text-right">
                <a href="#" className="text-sm text-gold hover:underline">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <button type="submit" className="btn-navy w-full">INGRESAR</button>
          </form>

          <div className="my-6 text-center text-sm text-navy-700/50">O</div>

          <p className="text-center text-sm text-navy-700/70">
            ¿No tienes cuenta?{' '}
            <Link to="/login" className="font-semibold text-gold hover:underline">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
