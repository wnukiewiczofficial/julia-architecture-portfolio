export interface Project {
  id: string;
  title: string;
  titleItalic: string;
  description: string;
  tags: string[];
  pdf: string | null;
  bgColor: string;
}
