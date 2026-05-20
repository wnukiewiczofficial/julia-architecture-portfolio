import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "park-komunikacyjny",
    title: "Układ komunikacyjny parku",
    titleItalic: "komunikacyjny",
    description:
      "Drogi piesze i rowerowe, parking oraz pochylnie dla osób z niepełnosprawnościami. Projekt ławki parkowej z betonu architektonicznego.",
    tags: ["Infrastruktura", "Dostępność", "Mała architektura"],
    pdf: null,
    bgColor: "#1a1916",
  },
  {
    id: "sauna-lesna",
    title: "Sauna leśna",
    titleItalic: "leśna",
    description:
      "Obiekt w formie półkuli wkomponowany w leśne otoczenie. Projekt uzupełniony o nasadzenia i zbiornik wodny.",
    tags: ["Obiekt kubaturowy", "Naturalne materiały"],
    pdf: null,
    bgColor: "#2a1f12",
  },
  {
    id: "ogrod-przydomowy",
    title: "Ogród przydomowy",
    titleItalic: "przydomowy",
    description:
      "Projekt koncepcyjny i wykonawczy. Taras, patio drewniane, strefa ziołowa, fontanna. 36 gatunków roślin.",
    tags: ["Projekt zieleni", "Nawierzchnie", "Mała architektura"],
    pdf: null,
    bgColor: "#121e2a",
  },
];
