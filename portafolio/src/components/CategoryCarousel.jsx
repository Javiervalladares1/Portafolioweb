// src/components/CategoryCarousel.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCarousel = ({ categories }) => {
  return (
    <div style={styles.flexContainer}>
      {categories.map((cat) => (
        <Link
          to={`/categoria/${cat.id}`}
          key={cat.id}
          style={styles.cardLink}
        >
          <div style={styles.card}>
            <div style={styles.imageWrapper}>
              <img
                src={cat.image}
                alt={cat.name}
                style={styles.image}
              />
            </div>
            <div style={styles.text}>
              <h3 style={styles.title}>{cat.name}</h3>
              <p style={styles.subtitle}>{cat.tagline}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  flexContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '20px',
    padding: '20px',
    // Evita que los items se envuelvan verticalmente:
    whiteSpace: 'nowrap',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    flexShrink: 0,
  },
  card: {
    width: 160,               // ancho fijo de cada tarjeta (px)
    backgroundColor: '#fff',
    borderRadius: 10,         // px
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  imageWrapper: {
    width: '100%',
    paddingTop: '75%',        // ratio 4:3
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  text: {
    padding: '10px 15px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#111',
  },
  subtitle: {
    margin: '6px 0 0',
    fontSize: '0.8rem',
    color: '#555',
  },
};

export default CategoryCarousel;
