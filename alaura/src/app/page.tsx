import Image from "next/image"; import Link from "next/link";
import { Button, CtaBand } from "@/components/ui"; import { services, steps, faqs } from "@/data/content"; import { projects } from "@/data/projects"; import { site } from "@/data/site";
export default function Home() {
  const featured = projects.slice(0, 3);
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
      <div className="hero-in"><h1 className="text-5xl leading-[1.05] md:text-7xl">Build a brand that speaks, connects and stands out.</h1>
        <p className="mt-6 max-w-xl text-lg text-grey">Strategic writing, thoughtful design and digital solutions that help founders and businesses communicate with confidence and stand out online.</p>
        <div className="mt-9 flex flex-wrap gap-4"><Button href="/contact">Start a Project</Button><Button href="/portfolio" variant="ghost">Explore Our Work</Button></div></div>
      <div className="hero-in flex aspect-square items-center justify-center rounded-[2.5rem] bg-tint" style={{ animationDelay: ".15s" }}>
        <Image src="/monogram.png" alt="Alaura Creates ribbon monogram" width={420} height={420} priority className="w-3/4" /></div>
    </section>
    <section className="bg-warm px-6 py-20"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
      <h2 className="text-4xl">Words and visuals, made to work together.</h2>
      <p className="text-lg text-grey">Alaura Creates is the creative studio of {site.founder}, a ghostwriter and graphic designer. I help founders, creators and growing businesses turn ideas into influence through clear content and consistent design.</p></div></section>
    <section className="mx-auto max-w-6xl px-6 py-20"><h2 className="text-4xl">What we do</h2>
      <ul className="mt-10 grid gap-x-10 md:grid-cols-2">{services.map(s => <li key={s.title} className="border-t border-purple/15 py-6"><h3 className="text-2xl">{s.title}</h3><p className="mt-2 text-grey">{s.text}</p></li>)}</ul>
      <div className="mt-8"><Button href="/services" variant="ghost">Discover Our Services</Button></div></section>
    <section className="bg-tint px-6 py-20"><div className="mx-auto max-w-6xl"><h2 className="text-4xl">Selected work</h2>
      {featured.length ? <p className="mt-4 text-grey">A few recent projects.</p> : <p className="mt-4 max-w-xl text-grey">New projects are being added. Visit the portfolio to see what is available.</p>}
      <div className="mt-8"><Button href="/portfolio">View portfolio</Button></div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-20"><h2 className="text-4xl">How a project works</h2>
      <ol className="mt-10 grid gap-8 md:grid-cols-3">{steps.map(([t, d], i) => <li key={t}><span className="font-display text-3xl text-orange">{i + 1}</span><h3 className="mt-1 text-xl">{t}</h3><p className="mt-2 text-grey">{d}</p></li>)}</ol>
      <div className="mt-8"><Link href="/process" className="font-semibold text-purple underline decoration-orange underline-offset-4">See the full process</Link></div></section>
    <section className="bg-warm px-6 py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_1.4fr]">
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border-2 border-dashed border-purple/30 p-6 text-center text-grey">Founder portrait placeholder. Add a photo of {site.founder}.</div>
      <div><h2 className="text-4xl">Meet {site.founder}</h2><p className="mt-5 text-lg text-grey">I believe the strongest brands are built through powerful words and unforgettable visuals. I create content and design that build authority and leave a lasting impression.</p></div></div></section>
    <section className="mx-auto max-w-3xl px-6 py-20"><h2 className="text-4xl">Questions</h2>
      <div className="mt-8">{faqs.map(([q, a]) => <details key={q} className="group border-t border-purple/15 py-5"><summary className="cursor-pointer font-display text-xl text-purple">{q}</summary><p className="mt-3 text-grey">{a}</p></details>)}</div></section>
    <CtaBand />
  </>);
}
