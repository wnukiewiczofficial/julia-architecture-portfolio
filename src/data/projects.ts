export interface ProjectData {
	id: string;
	bgColor: string;
	preview?: string;
	pdfs: { url: string }[];
}

export const projectsData: ProjectData[] = [
	{
		id: "park-komunikacyjny",
		bgColor: "#1a1916",
		preview: "/previews/park_preview.png",
		pdfs: [{ url: "/pdfs/projekt-ukladu-komunikacyjnego.pdf" }],
	},
	{
		id: "sauna-lesna",
		bgColor: "#2a1f12",
		preview: "/previews/sauna_preview.jpeg",
		pdfs: [{ url: "/pdfs/sauna-lesna.pdf" }],
	},
	{
		id: "ogrod-przydomowy",
		bgColor: "#121e2a",
		preview: "/previews/POAK_preview.png",
		pdfs: [{ url: "/pdfs/poak-czesc-graficzna.pdf" }, { url: "/pdfs/poak-czesc-opisowa.pdf" }],
	},
];
