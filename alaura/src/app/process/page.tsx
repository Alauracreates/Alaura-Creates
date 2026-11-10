import type { Metadata } from "next"; import { PageHead, CtaBand } from "@/components/ui"; import { steps } from "@/data/content";
export const metadata: Metadata = { title: "Our Process", description: "How a project with Alaura Creates works, from discovery to delivery." };
export default function Process() {
  return (<><PageHead title="Our process" lead="A simple sequence so you always know what happens next." />
    <ol className="mx-auto max-w-3xl px-6 pb-20">{steps.map(([t, d], i) => <li key={t} className="flex gap-6 border-t border-purple/15 py-8"><span className="font-display text-4xl text-orange">{i + 1}</span><div><h2 className="text-2xl">{t}</h2><p className="mt-2 text-grey">{d}</p></div></li>)}</ol><CtaBand /></>);
}
