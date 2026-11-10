"use client";
import { useState } from "react"; import Image from "next/image"; import Link from "next/link";
import { PageHead, Button } from "@/components/ui"; import { projects, projectCategories } from "@/data/projects"; import { site } from "@/data/site";
export default function Portfolio() {
  const [cat, setCat] = useState("All"); const list = cat === "All" ? projects : projects.filter(p => p.category === cat);
  const used = projectCategories.filter(c => projects.some(p => p.category === c));
  return (<><PageHead title="Our work" lead="Projects across writing, design and digital products." />
    <div className="mx-auto max-w-6xl px-6 pb-20">
      {projects.length === 0 ? <div className="rounded-3xl bg-tint p-10"><h2 className="text-3xl">Projects are being added</h2><p className="mt-3 max-w-xl text-grey">Only real work and clearly labelled concept projects will appear here. Check back soon, or tell me about your project.</p><div className="mt-6"><Button href="/contact">Start a Project</Button></div></div> : <>
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{["All", ...used].map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full border px-4 py-2 transition-colors ${cat === c ? "border-orange bg-orange text-white" : "border-purple/30 text-purple hover:border-orange"}`}>{c}</button>)}</div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{list.map(p => <li key={p.slug}><Link href={`/portfolio/${p.slug}`} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-tint">{p.cover ? <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <span className="flex h-full items-center justify-center text-grey">Cover image placeholder</span>}</div>
          <h2 className="mt-4 text-2xl group-hover:text-orange">{p.title}</h2><p className="text-sm text-grey">{p.category}{p.concept && " · Concept project"}</p><p className="mt-2 text-grey">{p.description}</p></Link></li>)}</ul></>}
      {site.behanceProfile ? <p className="mt-12"><a href={site.behanceProfile} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple underline decoration-orange underline-offset-4">Explore More on Behance</a></p>
        : <p className="mt-12 text-sm text-grey">Behance link will appear here once the profile URL is added in <code>src/data/site.ts</code>.</p>}
    </div></>);
}
