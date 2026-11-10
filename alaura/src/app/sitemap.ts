import { site, nav } from "@/data/site"; import { projects } from "@/data/projects";
export default function sitemap() { return [...nav.map(n => n.href), ...projects.map(p => `/portfolio/${p.slug}`)].map(p => ({ url: `${site.url}${p}` })); }
