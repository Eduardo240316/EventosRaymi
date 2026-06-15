export const CONTACT = {
  brand: 'SALON DE EVENTOS',
  name: 'RAYMI',
  phone: '+51 986 251 635',
  phoneRaw: '51986251635',
  email: 'flor.gml@hotmail.com',
  address: 'Av. José María Arguedas Tercera cuadra (Totoral), San Jerónimo, Andahuaylas, Apurímac, Perú',
  hours: 'Lunes a Domingo: 9:00 AM – 10:00 PM',
  capacity: '300 personas',
}

export const packages = [
  {
    name: 'BÁSICO',
    price: 'S/ 1,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    features: [
      'Salón hasta 100 personas',
      'Sonido básico',
      'Decoración estándar',
      'Mesas y sillas',
    ],
  },
  {
    name: 'PREMIUM',
    price: 'S/ 2,800',
    featured: true,
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
    features: [
      'Salón hasta 200 personas',
      'Sonido profesional',
      'Decoración premium',
      'Mesas, sillas y mantelería',
      'Catering incluido',
    ],
  },
  {
    name: 'VIP',
    price: 'S/ 4,500',
    featured: false,
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    features: [
      'Salón hasta 300 personas',
      'Sonido e iluminación avanzada',
      'Decoración de lujo',
      'Catering gourmet',
      'Estacionamiento privado',
    ],
  },
]

export const services = [
  {
    icon: 'users',
    title: 'Salón Principal',
    text: 'Espacio amplio y elegante para hasta 300 personas con mobiliario de primera calidad y ambientación personalizada.',
  },
  {
    icon: 'sparkles',
    title: 'Decoración Temática',
    text: 'Diseñamos el ambiente perfecto según tu visión: bodas, quinceañeras, corporativos o celebraciones familiares.',
  },
  {
    icon: 'speaker',
    title: 'Sonido e Iluminación',
    text: 'Equipo de audio profesional, iluminación LED y efectos visuales para crear la atmósfera ideal en tu evento.',
  },
  {
    icon: 'food',
    title: 'Catering Gourmet',
    text: 'Menús personalizados con ingredientes frescos, variedad de opciones y servicio de mozos profesionales.',
  },
  {
    icon: 'camera',
    title: 'Fotografía y Video',
    text: 'Capturamos cada momento especial con equipos de alta resolución y edición profesional incluida.',
  },
  {
    icon: 'car',
    title: 'Estacionamiento',
    text: 'Área de estacionamiento privado y seguro con capacidad para más de 80 vehículos dentro del recinto.',
  },
]

export const heroFeatures = [
  { icon: 'users', title: 'Capacidad', text: 'Hasta 300 personas' },
  { icon: 'sparkles', title: 'Decoración', text: 'Ambientes elegantes' },
  { icon: 'speaker', title: 'Sonido e iluminacion', text: 'Equipo profesional' },
  { icon: 'food', title: 'Catering', text: 'Menús personalizados' },
  { icon: 'shield', title: 'Seguridad', text: 'Garantía y confianza' },
]

const g = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

export const gallery = [
  { src: g('1519167758481-83f550bb49b3'), cat: 'Boda' },
  { src: g('1530103862676-de8c9debad1d'), cat: 'Quinceañera' },
  { src: g('1464366400600-7168b8af9bc3'), cat: 'Boda' },
  { src: g('1511795409834-ef04bbd61622'), cat: 'Cumpleaños' },
  { src: g('1492684223066-81342ee5ff30'), cat: 'Corporativos' },
  { src: g('1519225421980-715cb0215aed'), cat: 'Boda' },
  { src: g('1467810563316-b5476525c0f9'), cat: 'Quinceañera' },
  { src: g('1505236858219-8359eb29e329'), cat: 'Cumpleaños' },
  { src: g('1470229722913-7c0e2dbbafd3'), cat: 'Corporativos' },
]

export const galleryCategories = ['Todos', 'Boda', 'Quinceañera', 'Cumpleaños', 'Corporativos']
