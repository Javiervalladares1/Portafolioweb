import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutRoot from './layouts/LayoutRoot';
import Home from './pages/Home';
import About from './pages/About';
import Labs from './pages/Labs';
import Tareas from './pages/Tareas';
import Projects from './pages/Projects';

/* fallback muy simple */
function NotFound() {
  return (
    <div style={{ marginTop: 100, textAlign: 'center', color: 'red' }}>
      <h1>404 • Página no encontrada</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="tareas" element={<Tareas />} />
          <Route path="/projects" element={<Projects />} />
          {/* atrapa cualquier otra ruta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutRoot>
    </BrowserRouter>
  );
}
