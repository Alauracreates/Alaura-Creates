import type { Metadata } from "next"; import { PageHead } from "@/components/ui"; import Form from "./Form"; import { site } from "@/data/site";
export const metadata: Metadata = { title: "Start a Project", description: "Tell Alaura Creates about your project." };
export default function Contact() {
  return (<><PageHead title="Start a project" lead="Share a few details and I will get back to you to discuss next steps." />
    <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-[1.4fr_1fr]"><Form />
      <aside className="space-y-3 text-grey"><p>{site.email ? <a className="text-purple underline" href={`mailto:${site.email}`}>{site.email}</a> : "Email address to be added."}</p>
        <p>{site.whatsapp ? <a className="text-purple underline" href={site.whatsapp}>WhatsApp</a> : "WhatsApp contact to be added."}</p></aside></div></>);
}
