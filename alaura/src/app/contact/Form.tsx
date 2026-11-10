"use client";
import { useState } from "react";
const services = ["Writing & Publishing","Branding & Graphic Design","Website & E-commerce Design","Personal Branding & Content Strategy","Digital Products & Learning Materials","Video Creation & Editing","SEO & Digital Visibility","Not sure yet"];
const f = "mt-1 w-full rounded-xl border border-purple/25 px-4 py-3 focus:border-orange";
export default function Form() {
  const [state, setState] = useState<"idle"|"sending"|"ok"|"err"|"off">("idle"); const [err, setErr] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try { const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (r.status === 503) return setState("off"); const j = await r.json();
      if (!r.ok) { setErr(j.error || "Something went wrong."); return setState("err"); } setState("ok");
    } catch { setErr("Could not reach the server. Check your connection and try again."); setState("err"); }
  }
  if (state === "ok") return <p role="status" className="rounded-2xl bg-tint p-8 text-lg text-purple">Thank you. Your enquiry has been sent.</p>;
  return (<form onSubmit={submit} className="space-y-5" noValidate={false}>
    <label className="block">Full name<input name="name" required className={f} autoComplete="name" /></label>
    <label className="block">Email address<input name="email" type="email" required className={f} autoComplete="email" /></label>
    <label className="block">Company or brand name (optional)<input name="company" className={f} /></label>
    <label className="block">Service required<select name="service" required className={f}>{services.map(s => <option key={s}>{s}</option>)}</select></label>
    <label className="block">Budget range (optional)<input name="budget" className={f} /></label>
    <label className="block">Timeline<input name="timeline" className={f} /></label>
    <label className="block">Project description<textarea name="message" required minLength={20} rows={5} className={f} /></label>
    <label className="block">How did you hear about us? (optional)<input name="source" className={f} /></label>
    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
    <button disabled={state === "sending"} className="rounded-full bg-orange px-8 py-3.5 font-semibold text-white hover:bg-purple disabled:opacity-60">{state === "sending" ? "Sending…" : "Send enquiry"}</button>
    {state === "err" && <p role="alert" className="text-red-700">{err}</p>}
    {state === "off" && <p role="alert" className="text-red-700">This form is not connected to an email service yet, so nothing was sent.</p>}
  </form>);
}
