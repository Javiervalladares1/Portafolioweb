// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white drop-shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-black">
            {/* Puedes usar tu logo aquí */}
            iShop
          </Link>
        </div>

        {/* Menú de categorías - solo visible en md+ */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {[
            { label: 'Mac', to: '/categoria/mac' },
            { label: 'iPad', to: '/categoria/ipad' },
            { label: 'iPhone', to: '/categoria/iphone' },
            { label: 'Watch', to: '/categoria/watch' },
            { label: 'Música', to: '/categoria/musica' },
            { label: 'TV & Hogar', to: '/categoria/tv-hogar' },
            { label: 'Accesorios', to: '/categoria/accesorios' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Barra de búsqueda */}
        <div className="flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-black focus:bg-white focus:outline-none"
            />
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              aria-label="Buscar"
            />
          </div>
        </div>

        {/* Íconos de usuario y carrito */}
        <div className="flex items-center space-x-4">
          <Link to="/usuario" className="text-gray-600 hover:text-black">
            <User size={20} />
          </Link>
          <Link to="/carrito" className="relative text-gray-600 hover:text-black">
            <ShoppingCart size={20} />
            {/* Ejemplo de indicador de items (si tuvieras cantidad) */}
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
