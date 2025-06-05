// src/pages/Labs.jsx
import React from 'react';

export default function Labs() {
  return (
    <div style={styles.wrapper}>
      {/* Pon tu banner en public/img/labs-banner.jpg
         o cambia la ruta debajo */}
      <img
        src="../img/calculador.png"
        alt="Laboratorios de programación"
        style={styles.img}
      />
    </div>
  );
}

/* ---------- estilos ---------- */
const NAV_HEIGHT = 64; // alto del Header fijo

const styles = {
  wrapper: {
    marginTop: NAV_HEIGHT,              // evita que el Header tape la imagen
    width: '100vw',
    height: `calc(100vh - ${NAV_HEIGHT}px)`,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',                 // rellena sin deformar
  },
};
