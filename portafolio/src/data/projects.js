// src/data/projects.js
export const projects = [
  {
    slug: 'landing-agencia',
    nombre: 'Landing Agencia Creativa',
    descripcionCorta: 'Sitio corporativo responsivo para pymes.',
    portada: '/img/hero.jpg', // asegúrate de que esta ruta exista en public/img
    precio: 1200, // opcional
  },
  {
    slug: 'tienda-muebles',
    nombre: 'E-commerce de Muebles',
    descripcionCorta: 'Carrito + pasarela Stripe (sandbox)',
    portada: '/img/hero.jpg',
    precio: 950,
  },
  {
    slug: 'blog-tecnologia',
    nombre: 'Blog de Tecnología',
    descripcionCorta: 'Plataforma de publicaciones dinámicas.',
    portada: '/img/hero.jpg',
    // sin precio, mostrará la descripción en vez del precio
  },
  // …otros elementos del array
];
