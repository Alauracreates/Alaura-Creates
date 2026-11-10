import Link from "next/link"; import { nav, site } from "@/data/site";
export default function Footer() {
  return <footer className="bg-ink px-6 py-14 text-white/80"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
    <div><p className="font-display text-2xl text-white">{site.name}</p><p className="mt-2">{site.tagline}</p></div>
    <nav aria-label="Footer" className="flex flex-col gap-2">{nav.map(n => <Link key={n.href} href={n.href} className="hover:text-orange">{n.label}</Link>)}</nav>
    <div className="flex flex-col gap-2">
      {site.email ? <a href={`mailto:${site.email}`} className="hover:text-orange">{site.email}</a> : <span>Email to be added</span>}
      {site.behanceProfile && <a href={site.behanceProfile} className="hover:text-orange" rel="noopener noreferrer" target="_blank">Behance</a>}
      {site.socials.map(s => <a key={s.href} href={s.href} className="hover:text-orange" rel="noopener noreferrer" target="_blank">{s.label}</a>)}</div>
  </div><p className="mx-auto mt-10 max-w-6xl text-sm text-white/50">© {new Date().getFullYear()} {site.name}</p></footer>;
}
