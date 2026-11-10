import Image from "next/image"; import { notFound } from "next/navigation"; import { projects } from "@/data/projects"; import { Button, CtaBand } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find(x => x.slug === slug); if (!p) notFound();
  return (<><article className="mx-auto max-w-4xl px-6 py-20"><p className="text-grey">{p.category}{p.concept && " · Concept project"}</p><h1 className="mt-2 text-5xl">{p.title}</h1><p className="mt-5 text-lg text-grey">{p.description}</p>
    {p.cover && <Image src={p.cover} alt={p.title} width={1600} height={1200} className="mt-10 rounded-2xl" />}
    {p.details && <ul className="mt-10 list-disc space-y-2 pl-5 text-grey">{p.details.map(d => <li key={d}>{d}</li>)}</ul>}
    {p.behanceUrl && <div className="mt-10"><a href={p.behanceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-orange px-7 py-3.5 font-semibold text-white hover:bg-purple">View full project on Behance</a></div>}
    <div className="mt-6"><Button href="/portfolio" variant="ghost">Back to portfolio</Button></div></article><CtaBand /></>);
}
