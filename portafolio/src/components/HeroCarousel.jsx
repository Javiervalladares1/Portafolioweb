import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    id: 1,
    image: '/img/hero.jpg',
    headline: 'Descubre la nueva MacBook Air',
    subheadline: 'Diseñada para Apple Intelligence',
    cta: 'Ver más',
  },
  {
    id: 2,
    image: '/img/Competenciatec.png',
    headline: 'La gran competencia tecnológica',
    subheadline: 'Innovación sin límites',
    cta: 'Ver ahora',
  },
  {
    id: 3,
    image: '/img/calculadora.png',
    headline: 'iPad Pro M4',
    subheadline: 'Potencia y portabilidad en uno',
    cta: 'Conoce más',
  },
];

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -100 : 100 }),
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([p]) => [(p + 1) % banners.length, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (dir) =>
    setPage(([p]) => [(p + dir + banners.length) % banners.length, dir]);

  const banner = banners[page];

  return (
    <div style={styles.wrapper}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={banner.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          style={styles.slide}
        >
          <img src={banner.image} alt={banner.headline} style={styles.img} />

          <div style={styles.content}>
            <h2 style={styles.h1}>{banner.headline}</h2>
            <p style={styles.sub}>{banner.subheadline}</p>
            <button style={styles.btn}>{banner.cta}</button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flechas */}
      <button onClick={() => paginate(-1)} style={{ ...styles.arrow, left: 16 }}>
        ‹
      </button>
      <button onClick={() => paginate(1)} style={{ ...styles.arrow, right: 16 }}>
        ›
      </button>

      {/* Puntos */}
      <div style={styles.dots}>
        {banners.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              opacity: i === page ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  /* contenedor fijo: NO varía el alto → no empuja el layout */
  wrapper: {
    position: 'relative',
    width: '100vw',
    height: '60vh',         // fijo (ajusta al gusto)
    minHeight: 300,
    overflow: 'hidden',
  },
  /* cada slide ocupa todo el wrapper y se superpone */
  slide: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
  img: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 500,
    marginLeft: 32,
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--white)',
  },
  h1: { margin: 0, fontSize: '2rem', fontWeight: 700 },
  sub: { margin: '8px 0 24px', fontSize: '1.1rem' },
  btn: {
    padding: '10px 24px',
    borderRadius: 999,
    border: '2px solid var(--white)',
    background: 'transparent',
    color: 'var(--white)',
    fontWeight: 600,
    cursor: 'pointer',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    background: 'rgba(0,0,0,.35)',
    color: '#fff',
    border: 'none',
    width: 36,
    height: 36,
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: 24,
    lineHeight: '34px',
  },
  dots: {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#fff',
  },
};
