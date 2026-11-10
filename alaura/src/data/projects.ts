// EDIT ME: add a project by adding an object. Nothing is shown until you do.
export type Project = {
  slug: string; title: string; category: string; description: string;
  cover?: string;            // path in /public, e.g. "/work/my-cover.jpg"
  concept?: boolean;         // true = self-initiated, shows a "Concept project" badge
  behanceUrl?: string;       // full Behance project link (optional)
  details?: string[];        // bullet points of work completed
};
export const projectCategories = ["Writing & Publishing","Branding & Graphic Design","Websites & E-commerce","Personal Branding","Digital Products","Video & Multimedia","Content Strategy"];
export const projects: Project[] = [];
