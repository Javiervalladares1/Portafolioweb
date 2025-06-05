// src/layouts/LayoutRoot.jsx
import React from 'react';
import Header from '../components/Header';

export default function LayoutRoot({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 1. HEADER fijo */}
      <Header />

      {/* 2. Aquí va el contenido de cada página (Home, Portfolio, etc.) */}
      <main>{children}</main>

      {/* 3. FOOTER sencillo */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-400">
        © {new Date().getFullYear()} MiPortafolio. Todos los derechos reservados.
      </footer>
    </div>
  );
}
