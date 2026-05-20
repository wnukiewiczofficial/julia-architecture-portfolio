import { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: "park-komunikacyjny",
		title: "Układ komunikacyjny parku",
		description:
			"Drogi piesze i rowerowe, parking oraz pochylnie dla osób z niepełnosprawnościami. Projekt ławki parkowej z betonu architektonicznego.",
		tags: ["Infrastruktura", "Układ urbanistyczny", "Mała architektura"],
		pdfs: [{ label: "Pobierz PDF", url: "/pdfs/PROJEKT%20UK%C5%81ADU%20KOMUNIKACYJNEGO.pdf" }],
		bgColor: "#1a1916",
	},
	{
		id: "sauna-lesna",
		title: "Sauna leśna",
		description: "Obiekt w formie półkuli wkomponowany w leśne otoczenie. Projekt uzupełniony o nasadzenia i zbiornik wodny.",
		tags: ["Obiekt kubaturowy", "Naturalne materiały"],
		pdfs: [{ label: "Pobierz PDF", url: "/pdfs/Walczak_Julia_BOAKII_AK_2024_25.pdf" }],
		bgColor: "#2a1f12",
	},
	{
		id: "ogrod-przydomowy",
		title: "Ogród przydomowy",
		description: "Projekt koncepcyjny i wykonawczy. Taras, patio drewniane, strefa ziołowa, fontanna. 36 gatunków roślin.",
		tags: ["Projekt zieleni", "Nawierzchnie", "Mała architektura"],
		pdfs: [
			{ label: "Część graficzna", url: "/pdfs/POAK%20-%20cz%C4%99%C5%9B%C4%87%20graficzna.pdf" },
			{ label: "Część opisowa", url: "/pdfs/POAK%20-%20cz%C4%99%C5%9B%C4%87%20opisowa.pdf" },
		],
		bgColor: "#121e2a",
	},
];
