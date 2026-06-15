# Salón de Eventos RAYMI

Sitio web para el **Salón de Eventos RAYMI** (San Jerónimo, Cusco - Perú). Construido con React + Vite + Tailwind CSS.

## Páginas

- **Inicio** — hero, características, paquetes destacados y llamada a la acción.
- **Servicios** — salón principal, decoración, sonido, catering, fotografía y estacionamiento.
- **Paquetes** — Básico, Premium y VIP.
- **Reservas** — formulario de solicitud + información del salón y proceso de reserva.
- **Galería** — galería de momentos con filtros por categoría.
- **Contacto** — datos de contacto, mapa y formulario.
- **Iniciar sesión** — acceso de clientes.

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
npm run lint     # ejecutar ESLint
```

## Stack

- React 18 + React Router
- Vite 5
- Tailwind CSS 3

## Personalización

Los datos de contacto, paquetes, servicios y galería están centralizados en [`src/data.js`](src/data.js).
