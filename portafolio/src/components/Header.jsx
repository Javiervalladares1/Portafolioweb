import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

/* ---------- enlaces ---------- */
const MAIN_PAGES = [
  { to: '/about', label: 'About' },
  { to: '/labs', label: 'Labs' },
  { to: '/tareas', label: 'Tareas' },
  { to: '/projects', label: 'Projects' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  /* Item con estado activo */
  const Item = ({ to, label }) => (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: '6px 14px',
        borderRadius: 8,
        fontSize: 14,
        color: 'var(--white)',
        textDecoration: 'none',
        background: isActive ? 'rgba(255,255,255,.18)' : 'transparent',
        whiteSpace: 'nowrap',
      })}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header style={sx.header}>
      {/* ---------- fila principal ---------- */}
      <div style={sx.topRow}>
        {/* Logo  */}
        <Link to="/" style={sx.logo}>
          Mi Portafolio
        </Link>

        {/* NAV desktop */}
        <nav style={sx.navDesktop}>
          {MAIN_PAGES.map((m) => (
            <Item key={m.to} {...m} />
          ))}
        </nav>

        {/* Search + icons */}
        <div style={sx.rightBox}>
          <div style={sx.search}>
            <Search size={16} color="#6b7280" />
            <input placeholder="Buscar" style={sx.input} />
          </div>
          <User size={20} style={sx.icon} />
          <ShoppingCart size={20} style={sx.icon} />

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            style={sx.burger}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ---------- menú Mobile desplegable ---------- */}
      {open && (
        <nav style={sx.navMobile}>
          {MAIN_PAGES.map((m) => (
            <Item key={m.to} {...m} />
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------- estilos ---------- */
const sx = {
  header: {
    position: 'fixed',
    inset: 0,
    height: 64,
    zIndex: 50,
    background: 'var(--blue-dark)',
    color: 'var(--white)',
    boxShadow: '0 2px 6px rgba(0,0,0,.15)',
    display: 'flex',
    flexDirection: 'column',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    padding: '0 20px',
    height: '100%',
    boxSizing: 'border-box',
  },
  logo: { fontSize: 24, fontWeight: 700, color: 'var(--white)', textDecoration: 'none' },

  /* NAV desktop */
  navDesktop: {
    display: 'flex',
    gap: 8,
  },

  /* derecha */
  rightBox: { display: 'flex', alignItems: 'center', gap: 16 },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,.12)',
    borderRadius: 999,
    padding: '6px 12px',
  },
  input: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: '#f8fafc',
    fontSize: 14,
    width: 140,
  },
  icon: { color: '#e2e8f0', cursor: 'pointer' },

  /* Burger, se esconde en desktop por CSS */
  burger: {
    background: 'transparent',
    border: 'none',
    color: 'var(--white)',
    display: 'none',
  },

  /* NAV mobile (overlay) */
  navMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: '12px 20px',
    background: 'var(--blue-dark)',
  },
};

/* ---------- inyecta media-query para responsive ---------- */
const sheet = document.styleSheets[document.styleSheets.length - 1];
sheet.insertRule(
  `
  @media (max-width: 768px) {
    /* oculta nav Desktop y buscador, muestra Burger */
    nav { overflow-x:auto; }
    [style*="navDesktop"] { display:none !important; }
    [style*="search"] { display:none !important; }
    button[aria-label="Menú"] { display:block !important; }
  }
`,
  sheet.cssRules.length
);
