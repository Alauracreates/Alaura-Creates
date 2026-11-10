import Link from "next/link";
export function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "light" }) {
  const v = { primary: "bg-orange text-white hover:bg-purple", ghost: "border border-purple text-purple hover:bg-purple hover:text-white", light: "bg-white text-purple hover:bg-orange hover:text-white" }[variant];
  return <Link href={href} className={`inline-flex items-center rounded-full px-7 py-3.5 font-semibold transition-colors ${v}`}>{children}</Link>;
}
export function PageHead({ title, lead }: { title: string; lead: string }) {
  return <header className="mx-auto max-w-6xl px-6 pb-12 pt-20"><h1 className="max-w-3xl text-5xl md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg text-grey">{lead}</p></header>;
}
export function CtaBand({ text = "Tell me what you want to create." }: { text?: string }) {
  return <section className="bg-purple px-6 py-20 text-center text-white"><h2 className="mx-auto max-w-2xl text-4xl !text-white">{text}</h2><div className="mt-8"><Button href="/contact" variant="light">Start a Project</Button></div></section>;
}
