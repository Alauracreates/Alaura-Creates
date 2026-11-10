import { NextResponse } from "next/server";
// Uses Resend's REST API. Needs RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (see .env.example).
export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  const d = await req.json().catch(() => null) as Record<string, string> | null;
  if (!d || d.website) return NextResponse.json({ ok: true });
  if (!d.name?.trim() || !/^\S+@\S+\.\S+$/.test(d.email || "") || (d.message || "").trim().length < 20) return NextResponse.json({ error: "Please fill in your name, a valid email and a project description of at least 20 characters." }, { status: 400 });
  const text = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join("\n");
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to, reply_to: d.email, subject: `New enquiry from ${d.name}`, text }) });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "The message could not be sent. Please try again later." }, { status: 502 });
}
