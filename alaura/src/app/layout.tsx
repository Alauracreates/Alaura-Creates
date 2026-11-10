import type { Metadata } from "next"; import "./globals.css"; import Header from "@/components/Header"; import Footer from "@/components/Footer"; import { site } from "@/data/site";
export const metadata: Metadata = { metadataBase: new URL(site.url),
  title: { default: "Alaura Creates | Ghostwriting, Graphic Design & Personal Branding", template: "%s | Alaura Creates" },
  description: "Alaura Creates helps founders and businesses build authority online through strategic writing, distinctive design and creative digital solutions.",
  openGraph: { siteName: "Alaura Creates", type: "website", images: ["/opengraph-image.png"] } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
