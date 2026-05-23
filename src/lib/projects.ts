import { projectsData } from "@/data/projects";
import { Project } from "@/types/project";

type ProjectMessages = {
	title: string;
	description: string;
	tags: string[];
	pdfs: { label: string }[];
};

export function buildProjects(getProject: (id: string) => ProjectMessages): Project[] {
	return projectsData.map((data) => {
		const messages = getProject(data.id);
		return {
			id: data.id,
			title: messages.title,
			description: messages.description,
			tags: messages.tags,
			pdfs: data.pdfs.map((pdf, index) => ({
				url: pdf.url,
				label: messages.pdfs[index]?.label ?? "",
			})),
			bgColor: data.bgColor,
			preview: data.preview,
		};
	});
}
