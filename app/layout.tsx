import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "Sahitya Interiors – Best Interior Designers in Hyderabad",
    template: "%s | Sahitya Interiors",
  },
  description:
    "Sahitya Interiors – Hyderabad's trusted interior design firm. Residential interiors, office interiors, modular kitchens, false ceilings, aluminium works & wardrobe furniture. Get a free estimate today!",
  keywords: [
    "interior designers hyderabad",
    "modular kitchen hyderabad",
    "office interior hyderabad",
    "aluminium works hyderabad",
    "false ceiling hyderabad",
    "wardrobe design hyderabad",
    "residential interior hyderabad",
    "sahitya interiors",
  ],
  authors: [{ name: "Sahitya Interiors" }],
  robots: "index, follow",
  openGraph: {
    title: "Sahitya Interiors – Interior Designers in Hyderabad",
    description: "Transform your space with Sahitya Interiors. Office, residential, modular kitchen, aluminium works & more in Hyderabad.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#fff9f2] dark:bg-[#1a1410] text-[#3d3530] dark:text-[#e8d5b0]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
