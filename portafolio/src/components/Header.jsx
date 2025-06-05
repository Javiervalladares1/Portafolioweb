import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.content}>
        {/* logo */}
        <Link to="/" style={styles.logo}>E-Store</Link>

        {/* menú (puedes añadir más links) */}
        <nav style={styles.nav}>
          {['Inicio', 'Sobre Mi', 'Tareas', 'Laboratorios', 'Proyectos'].map((item) => (
            <Link key={item} to="#" style={styles.navItem}>
              {item}
            </Link>
          ))}
        </nav>

        {/* buscador + iconos */}
        <div style={styles.right}>
          <div style={styles.searchBox}>
            <Search size={16} color="#6b7280" />
            <input placeholder="Buscar" style={styles.input} />
          </div>
          <User size={20} style={styles.icon} />
          <ShoppingCart size={20} style={styles.icon} />
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    inset: 0,                    // top 0 ; left 0 ; right 0
    height: 64,
    zIndex: 50,
    background: 'var(--blue-dark)',
    color: 'var(--white)',
    boxShadow: '0 2px 6px rgba(0,0,0,.15)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',              // ⬅️ ocupa todo el ancho
    padding: '0 24px',
    height: '100%',
    boxSizing: 'border-box',
  },
  logo: { fontSize: 24, fontWeight: 700, color: 'var(--white)', textDecoration: 'none' },
  nav: { display: 'flex', gap: 24 },
  navItem: { fontSize: 14, color: 'var(--white)', opacity: 0.9, textDecoration: 'none' },
  right: { display: 'flex', alignItems: 'center', gap: 16 },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,.1)',
    borderRadius: 999,
    padding: '6px 12px',
  },
  input: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: '#f8fafc',
    fontSize: 14,
    width: 120,
  },
  icon: { color: '#e2e8f0', cursor: 'pointer' },
};
