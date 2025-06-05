import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ projects }) {
  // 1. Función que, según el ancho, decide cuántas columnas mostrar
  const getColumnCount = (width) => {
    if (width < 640) return 1;    // < 640px  → 1 columna
    if (width < 768) return 2;    // 640–767px → 2 columnas
    if (width < 1024) return 3;   // 768–1023px → 3 columnas
    if (width < 1280) return 4;   // 1024–1279px → 4 columnas
    return 5;                     // ≥ 1280px → 5 columnas
  };

  // 2. Estado para saber cuántas columnas
  const [columns, setColumns] = useState(getColumnCount(window.innerWidth));

  useEffect(() => {
    // Handler que actualiza el número de columnas al redimensionar
    const handleResize = () => {
      setColumns(getColumnCount(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    // Ejecutamos al montar para corregir si el estado inicial difiere
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 3. Estilo del grid usando inline styles
  const gridStyle = {
    display: 'grid',
    gap: '20px',
    padding: '20px',
    width: '100%',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div style={gridStyle}>
      {projects.map((project) => (
        <Link
          to={`/portfolio/${project.slug}`}
          key={project.slug}
          style={styles.cardLink}
        >
          <div style={styles.card}>
            <div style={styles.imageWrapper}>
              <img
                src={project.portada}
                alt={project.nombre}
                style={styles.image}
              />
            </div>
            <div style={styles.text}>
              <h3 style={styles.title}>{project.nombre}</h3>
              {project.precio != null ? (
                <p style={styles.price}>Q{project.precio}</p>
              ) : project.descripcionCorta ? (
                <p style={styles.price}>{project.descripcionCorta}</p>
              ) : null}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const styles = {
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  imageWrapper: {
    width: '100%',
    paddingTop: '75%', // relación 4:3
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    padding: '10px 15px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111',
  },
  price: {
    margin: '6px 0 0',
    fontSize: '0.9rem',
    color: '#555',
  },
};
