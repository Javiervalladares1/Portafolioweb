// src/data/projects.js
export const projects = [
  {
    slug: 'tareas',
    nombre: 'Tareas',
    descripcionCorta: 'Estas son las tareas que hice en web este semestre',
    portada: '/img/react.png', // asegúrate de que esta ruta exista en public/img
    
  },
  {
    slug: 'Labs',
    nombre: 'Laboratorios',
    descripcionCorta: 'Carrito + pasarela Stripe (sandbox)',
    portada: '/img/html.png',
  
  },
  {
    slug: 'Projects',
    nombre: 'Proyectos',
    descripcionCorta: 'Plataforma de publicaciones dinámicas.',
    portada: '/img/css.png',
    // sin precio, mostrará la descripción en vez del precio
  },
  // …otros elementos del array
];
