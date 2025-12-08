export interface IProject {
  id: string;
  title: string;
  status: string;
  thumbnail: string;
  shortDescription: string;
  seoDescription: string;
  description: string;
  contributions: string[];
  tech: string[];
  screenshots: string[];
  link?: null | string;
  demo?: null | string;
}
