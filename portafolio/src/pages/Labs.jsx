// src/pages/Labs.jsx
import React, { useState, useEffect } from 'react';

/* --- Lista de laboratorios --- */
const labs = [
  {
    id: 1,
    title: 'Navegación HTML',
   
    url: 'https://23045.nrywhite.lat/lab3/',
  },
  {
    id: 2,
    title: 'Creación iPhone 16 con css',
   
    url: 'https://23045.nrywhite.lat/lab4css/',
  },
  {
    id: 3,
    title: 'Conexión con API de chat',
   
    url: 'https://23045.nrywhite.lat/lab5/lab5/',
  },

];

export default function Labs() {
  /* breakpoints → columnas (igual que ProductList) */
  const cols = (w) =>
    w < 640 ? 1 : w < 768 ? 2 : w < 1024 ? 3 : w < 1280 ? 4 : 5;
  const [columns, setColumns] = useState(cols(window.innerWidth));

  useEffect(() => {
    const onResize = () => setColumns(cols(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const gridStyle = {
    display: 'grid',
    gap: 24,
    padding: '24px 20px',
    width: '100vw',
    boxSizing: 'border-box',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <section style={{ marginTop: 96 }}>
      <h1 style={sx.h1}>Laboratorios</h1>

      <div style={gridStyle}>
        {labs.map((l) => (
          <article key={l.id} style={sx.card}>
            <h3 style={sx.title}>{l.title}</h3>
            <p style={sx.desc}>{l.desc}</p>
            {l.url && (
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={sx.button}
              >
                Ver&nbsp;laboratorio →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- estilos ---------- */
const sx = {
  h1: {
    textAlign: 'center',
    fontSize: '2rem',
    color: 'var(--blue-dark)',
    marginBottom: 24,
  },
  card: {
    background: 'var(--white)',
    border: '1px solid rgba(13,110,253,.12)',
    borderRadius: 12,
    padding: 20,
    minHeight: 180,
    boxShadow: '0 4px 12px rgba(13,110,253,.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: { margin: 0, fontSize: 18, color: 'var(--black)' },
  desc: { margin: '12px 0 20px', fontSize: 14, color: '#555', flexGrow: 1 },
  button: {
    alignSelf: 'flex-start',
    padding: '8px 14px',
    borderRadius: 8,
    background: 'var(--blue)',
    color: 'var(--white)',
    fontSize: 14,
    textDecoration: 'none',
  },
};
