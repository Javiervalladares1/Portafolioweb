import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ projects }) {
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
    width: '100vw',              // ⬅️ ocupa 100 % del viewport
    boxSizing: 'border-box',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div style={gridStyle}>
      {projects.map((p) => (
        <Link key={p.slug} to={`/portfolio/${p.slug}`} style={s.link}>
          <div style={s.card}>
            <div style={s.imgWrap}>
              <img src={p.portada} alt={p.nombre} style={s.img} />
            </div>
            <div style={s.body}>
              <h3 style={s.title}>{p.nombre}</h3>
              <p style={s.price}>
                {p.precio ? `Q${p.precio}` : p.descripcionCorta}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const s = {
  link: { textDecoration: 'none', color: 'inherit' },
  card: {
    background: 'var(--white)',
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid rgba(13,110,253,.12)',
    boxShadow: '0 4px 12px rgba(13,110,253,.15)',
    transition: 'transform .2s',
  },
  imgWrap: { width: '100%', paddingTop: '75%', position: 'relative' },
  img: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' },
  body: { padding: '12px 14px', textAlign: 'center' },
  title: { margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--black)' },
  price: { marginTop: 4, fontSize: 14, color: 'var(--blue)' },
};
