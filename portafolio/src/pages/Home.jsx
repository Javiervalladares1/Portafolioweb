// src/pages/Home.jsx
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import ProductList from '../components/ProductList';
import { projects } from '../data/projects';
import { categories } from '../data/categories';

export default function Home() {
  return (
    <div>
      {/* 1. Carrusel de banners (ocupa todo el ancho) */}
      <HeroCarousel />

      {/* 2. Carrusel de categorías (horizontal) */}
      <CategoryCarousel categories={categories} />

      {/* 3. Título */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111' }}>
          Proyectos disponibles
        </h2>
      </div>

      {/* 4. Grid responsivo de productos */}
      <ProductList projects={projects} />
    </div>
  );
}
