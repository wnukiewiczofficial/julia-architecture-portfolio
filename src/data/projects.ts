import { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: "park-komunikacyjny",
		title: "Układ komunikacyjny parku",
		description:
			"Drogi piesze i rowerowe, parking oraz pochylnie dla osób z niepełnosprawnościami. Projekt ławki parkowej z betonu architektonicznego.",
		tags: ["Infrastruktura", "Układ urbanistyczny", "Mała architektura"],
		pdfs: [{ label: "Pobierz PDF", url: "/pdfs/projekt-ukladu-komunikacyjnego.pdf" }],
		bgColor: "#1a1916",
		preview: "/previews/park_preview.png",
	},
	{
		id: "sauna-lesna",
		title: "Sauna leśna",
		description: "Obiekt w formie półkuli wkomponowany w leśne otoczenie. Projekt uzupełniony o nasadzenia i zbiornik wodny.",
		tags: ["Obiekt kubaturowy", "Naturalne materiały"],
		pdfs: [{ label: "Pobierz PDF", url: "/pdfs/sauna-lesna.pdf" }],
		bgColor: "#2a1f12",
		preview: "/previews/sauna_preview.png",
	},
	{
		id: "ogrod-przydomowy",
		title: "Ogród przydomowy",
		description: "Projekt koncepcyjny i wykonawczy. Taras, patio drewniane, strefa ziołowa, fontanna. 36 gatunków roślin.",
		tags: ["Projekt zieleni", "Nawierzchnie", "Mała architektura"],
		pdfs: [
			{ label: "Część graficzna", url: "/pdfs/poak-czesc-graficzna.pdf" },
			{ label: "Część opisowa", url: "/pdfs/poak-czesc-opisowa.pdf" },
		],
		bgColor: "#121e2a",
		preview: "/previews/POAK_preview.png",
	},
];
