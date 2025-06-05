import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCarousel({ categories }) {
  return (
    <div style={styles.wrap}>
      <div style={styles.row}>
        {categories.map((cat) => (
          <Link key={cat.id} to={`/categoria/${cat.id}`} style={styles.link}>
            <div style={styles.card}>
              <div style={styles.imgBox}>
                <img src={cat.image} alt={cat.name} style={styles.img} />
              </div>
              <span style={styles.name}>{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: '100vw',              // ⬅️ toda la pantalla
    overflowX: 'auto',
    padding: '16px 0',
    background: 'var(--white)',
  },
  row: {
    display: 'flex',
    gap: 24,
    padding: '0 20px',
    width: 'max-content',
  },
  link: { flexShrink: 0, textDecoration: 'none' },
  card: {
    width: 120,
    textAlign: 'center',
    borderRadius: 10,
    border: '1px solid rgba(13,110,253,.15)',
    padding: 12,
    background: '#fff',
    boxShadow: '0 2px 6px rgba(13,110,253,.1)',
    transition: 'transform .2s',
  },
  imgBox: { width: '100%', height: 72, marginBottom: 8 },
  img: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
  name: { fontSize: 14, fontWeight: 500, color: 'var(--black)' },
};
