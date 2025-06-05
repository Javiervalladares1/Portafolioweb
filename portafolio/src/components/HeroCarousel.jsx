// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    image: "/img/banner1.jpg",
    headline: "Descubre la nueva MacBook Air",
    subheadline: "Diseñada para Apple Intelligence",
    cta: "Ver más",
  },
  {
    id: 2,
    image: "/img/banner2.jpg",
    headline: "iPhone 15 Pro Max",
    subheadline: "Innovación sin límites",
    cta: "Comprar ahora",
  },
  {
    id: 3,
    image: "/img/banner3.jpg",
    headline: "iPad Pro M4",
    subheadline: "Potencia y portabilidad en uno",
    cta: "Conoce más",
  },
];

const variants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage]) => [(prevPage + 1) % banners.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + banners.length) % banners.length,
      newDirection,
    ]);
  };

  const banner = banners[page];

  return (
    <div className="relative w-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={banner.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="relative h-[60vh] w-full bg-gray-100 sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
        >
          <img
            src={banner.image}
            alt={banner.headline}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center px-4 text-white sm:px-6 md:px-8">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              {banner.headline}
            </h2>
            <p className="mb-4 text-lg sm:text-xl md:text-2xl">
              {banner.subheadline}
            </p>
            <button className="w-max rounded-full border border-white bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white hover:text-black sm:px-6 sm:py-3 sm:text-base">
              {banner.cta}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black sm:left-8"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black sm:right-8"
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === page ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
