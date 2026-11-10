// EDIT ME: central site settings. Empty strings = not provided yet; the UI hides or marks them.
export const site = {
  name: "Alaura Creates", founder: "Lauretta Akinyele", tagline: "CREATE | DESIGN | INSPIRE",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alauracreates.example", // set on Vercel
  email: "",        // TODO professional email
  whatsapp: "",     // TODO e.g. https://wa.me/<number>
  behanceProfile: "", // TODO https://www.behance.net/<your-handle>
  socials: [] as { label: string; href: string }[], // TODO e.g. { label: "LinkedIn", href: "..." }
};
export const nav = [
  { href: "/", label: "Home" }, { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" }, { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];
