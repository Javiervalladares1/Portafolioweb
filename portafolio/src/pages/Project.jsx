import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="p-8">Proyecto no encontrado.</p>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Link
        to="/portfolio"
        className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
      >
        <ChevronLeft size={16} />
        Volver
      </Link>

      <h1 className="mt-6 text-4xl font-bold">{project.nombre}</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {project.descripcionCorta}
      </p>

      {/* Galería */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {project.screenshots.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`${project.nombre} ${i + 1}`}
            className="rounded-lg object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Tags */}
      <ul className="mt-8 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}