import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projekty" className={styles.section}>
      <p className={styles.label}>Projekty</p>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
