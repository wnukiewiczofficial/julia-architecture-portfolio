export interface Project {
	id: string;
	title: string;
	titleItalic?: string;
	description: string;
	tags: string[];
	pdfs: { label: string; url: string }[];
	bgColor: string;
}
