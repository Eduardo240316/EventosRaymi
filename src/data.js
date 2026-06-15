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
    img: '/images/paquete-basico.jpg',
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
    img: '/images/paquete-premium.jpg',
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
    img: '/images/paquete-vip.jpg',
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

export const gallery = [
  { src: '/images/g01.jpg', cat: 'Corporativos' },
  { src: '/images/g02.jpg', cat: 'Boda' },
  { src: '/images/g03.jpg', cat: 'Boda' },
  { src: '/images/g04.jpg', cat: 'Boda' },
  { src: '/images/g05.jpg', cat: 'Quinceañera' },
  { src: '/images/g06.jpg', cat: 'Quinceañera' },
  { src: '/images/g07.jpg', cat: 'Quinceañera' },
  { src: '/images/g08.jpg', cat: 'Cumpleaños' },
  { src: '/images/g09.jpg', cat: 'Cumpleaños' },
  { src: '/images/g10.jpg', cat: 'Cumpleaños' },
  { src: '/images/g11.jpg', cat: 'Corporativos' },
  { src: '/images/g12.jpg', cat: 'Corporativos' },
]

export const galleryCategories = ['Todos', 'Boda', 'Quinceañera', 'Cumpleaños', 'Corporativos']
