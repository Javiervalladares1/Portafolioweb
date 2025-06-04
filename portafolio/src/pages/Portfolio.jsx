import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} {...p} />
      ))}
    </section>
  );
}