import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoot from "./layouts/LayoutRoot";
import Home from "./pages/Home";
/* Si tienes otras páginas, agrégalas aquí:
   import Portfolio from "./pages/Portfolio";
   import About from "./pages/About";
   import Contact from "./pages/Contact";
*/

export default function App() {
  return (
    <BrowserRouter>
      <LayoutRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rutas adicionales:
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          */}
        </Routes>
      </LayoutRoot>
    </BrowserRouter>
  );
}
