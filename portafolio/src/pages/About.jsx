// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <section style={styles.section}>
      {/* ───── Foto de perfil ───── */}
      <div style={styles.photoWrap}>
        {/* Coloca tu archivo en public/img/profile.jpg
           o cambia la ruta del src si usas otro nombre/carpeta */}
        <img
          src="/img/profile.jpg"
          alt="Javier Valladares"
          style={styles.photo}
        />
      </div>

      <h1 style={styles.h1}>Sobre mí</h1>

      <p style={styles.p}>
        Soy <strong>Javier Valladares</strong>, estudiante de Ingeniería en Ciencias de la Computación en la
        Universidad del Valle de Guatemala. La tecnología siempre ha sido uno de mis principales temas de interés;
        escogí mi carrera con la esperanza de poder trabajar con cualquier tipo de tecnología. Me gusta tanto la
        tecnología que hace alrededor de un año empecé a crear lo que hoy viene siendo mi empresa de ventas de
        productos Apple. Para esto ya había intentado crear una página web pero se me complicó al no saber los principios.  
        Después del curso de Sistemas y Tecnologías Web espero poder terminar esa página: este portafolio es la base
        y por eso tiene estructura de e-commerce. ¡Los invito a darse una vuelta por <strong>secondbite.com.gt</strong>
        cuando esté terminada!
      </p>

      <h2 style={styles.h2}>Habilidades principales</h2>
      <ul style={styles.ul}>
        <li>JavaScript / React / Vite</li>
        <li>Node.js + Express / REST APIs</li>
        <li>CSS-in-JS, Tailwind CSS, diseño responsivo</li>
        <li>SQL (PostgreSQL) y MongoDB / Modelado de datos</li>
        <li>Docker / Docker Compose / Containerización</li>
        <li>Python / pandas / matplotlib / Análisis de datos</li>
        <li>C / C++ / OpenMP / Programación concurrente</li>
        <li>Android / Jetpack Compose / Kotlin</li>
        <li>LaTeX / Documentación técnica / Escritura científica</li>
        <li>Investigación UX / HCI / Evaluación de accesibilidad</li>
        <li>Diseño de bases de datos / Normalización / Vistas / Triggers</li>
        <li>Marketing digital / Estrategia en TikTok e Instagram</li>
        <li>Análisis financiero / Gestión de ventas e inventario</li>
        <li>Modelado estadístico / Probabilidad / Ecuaciones diferenciales</li>
        <li>Elaboración de Business Model Canvas y planes de negocio</li>
        <li>Comunicación técnica / Explicaciones paso a paso</li>
        <li>Español e Inglés fluidos / Redacción formal e informal</li>
        <li>Conocimientos de régimen fiscal e impuestos en Guatemala</li>
      </ul>

      <h2 style={styles.h2}>Contacto</h2>
      <p style={styles.p}>
        ➜ Email: <a href="mailto:javivalladares10@icloud.com">javivalladares10@icloud.com</a>
        <br />
        ➜ Teléfono: <a href="tel:+50246232441">+502&nbsp;4623-2441</a>
      </p>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: 800,
    margin: '96px auto 40px',       // deja espacio para el header fijo
    padding: '0 20px',
    textAlign: 'center',
  },

  /* ───── Foto ───── */
  photoWrap: { marginBottom: 24 },
  photo: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    borderRadius: '50%',            // redonda
    boxShadow: '0 4px 12px rgba(0,0,0,.15)',
  },

  /* ───── Tipografía ───── */
  h1: { fontSize: '2rem', color: 'var(--blue-dark)', marginBottom: 12 },
  h2: { fontSize: '1.25rem', color: 'var(--blue)', marginTop: 32 },
  p: { lineHeight: 1.6, fontSize: 16 },
  ul: {
    lineHeight: 1.8,
    fontSize: 16,
    paddingLeft: 20,
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: 600,
  },
};
