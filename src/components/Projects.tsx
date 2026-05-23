import { useTranslations } from "next-intl";
import { buildProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
	const t = useTranslations("Projects");
	const tProjects = useTranslations("projects");

	const projects = buildProjects((id) => ({
		title: tProjects(`${id}.title`),
		description: tProjects(`${id}.description`),
		tags: tProjects.raw(`${id}.tags`) as string[],
		pdfs: tProjects.raw(`${id}.pdfs`) as { label: string }[],
	}));

	return (
		<section id="projekty" className={styles.section}>
			<p className={styles.label}>{t("label")}</p>
			{projects.map((project, index) => (
				<ProjectCard key={project.id} project={project} index={index} />
			))}
		</section>
	);
}
