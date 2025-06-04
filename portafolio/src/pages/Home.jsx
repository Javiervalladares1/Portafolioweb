import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Banner from "../components/Banner";

export default function Home() {
  return (
    /* ─── El contenedor más externo siempre “w-full” para no restringir la escala ─── */
    <div className="w-full px-4 pt-4">
      {/* ─── Centro el contenido, pero con ancho muy amplio para que no limite ─── */}
      <div className="mx-auto w-full lg:w-[90%] xl:w-[80%]">
        <Banner />

        <h2 className="my-8 text-2xl font-semibold">Proyectos disponibles</h2>

        {/*
          ─── Grid 2 columnas en <768px, 3 columnas en ≥768px. ───
          Cada celda ocupa 1fr, y la tarjeta INTERNAMENTE es w-full, 
          así la imagen siempre llena ese ancho y escala.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} portada="/img/hero.jpg" />
          ))}
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}