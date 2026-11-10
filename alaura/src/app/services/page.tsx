import type { Metadata } from "next"; import { PageHead, Button, CtaBand } from "@/components/ui"; import { services } from "@/data/content";
export const metadata: Metadata = { title: "Services", description: "Ghostwriting, graphic design, websites, personal branding, digital products, video and SEO support from Alaura Creates." };
export default function Services() {
  return (<><PageHead title="Services" lead="Seven areas of work, from writing and design to websites, video and search visibility." />
    <div className="mx-auto max-w-6xl px-6 pb-20">{services.map(s => <section key={s.title} className="grid gap-6 border-t border-purple/15 py-10 md:grid-cols-[1fr_1.2fr]">
      <div><h2 className="text-3xl">{s.title}</h2><p className="mt-3 text-grey">{s.text}</p><div className="mt-5"><Button href="/contact" variant="ghost">Discuss your project</Button></div></div>
      <ul className="grid gap-2 sm:grid-cols-2">{s.items.map(i => <li key={i} className="rounded-xl bg-tint px-4 py-3 text-purple">{i}</li>)}</ul></section>)}</div><CtaBand /></>);
}
