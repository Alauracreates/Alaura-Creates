"use client";
import Link from "next/link"; import Image from "next/image"; import { useState } from "react"; import { usePathname } from "next/navigation"; import { Menu, X } from "lucide-react";
import { nav } from "@/data/site"; import { Button } from "./ui";
export default function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return (<header className="sticky top-0 z-40 border-b border-purple/10 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <Link href="/" aria-label="Alaura Creates home"><Image src="/logo.png" alt="Alaura Creates" width={150} height={43} priority /></Link>
      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {nav.map(n => <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={`font-medium transition-colors hover:text-orange ${path === n.href ? "text-orange" : "text-purple"}`}>{n.label}</Link>)}
      </nav>
      <div className="hidden md:block"><Button href="/contact">Start a Project</Button></div>
      <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-purple/10 px-6 pb-6 md:hidden">
      {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-lg font-medium text-purple">{n.label}</Link>)}
      <div className="pt-2"><Button href="/contact">Start a Project</Button></div></nav>}
  </header>);
}
