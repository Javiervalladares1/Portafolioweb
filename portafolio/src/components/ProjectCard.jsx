import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({
  slug,
  nombre,
  descripcionCorta,
  portada = "/img/hero.jpg",
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="
        /* ─── Cada tarjeta ocupa el 100 % de la columna ─── */
        w-full flex flex-col overflow-hidden rounded-lg
        border border-zinc-200 bg-white shadow-sm
        transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* 
        ─── La imagen ocupa toda la anchura de la tarjeta, y 
          al tener aspect-[4/3], su altura se ajusta proporcionalmente. ─── 
      */}
      <Link to={`/portfolio/${slug}`} className="aspect-[4/3] overflow-hidden">
        <img
          src={portada}
          alt={nombre}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1 px-3 py-2">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">
          {nombre}
        </h3>
        <p className="line-clamp-3 text-xs text-zinc-600 dark:text-zinc-400">
          {descripcionCorta}
        </p>
      </div>
    </motion.article>
  );
}