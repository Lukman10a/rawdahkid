import type { Metadata } from "next";
import {
  Playfair_Display,
  Cinzel,
  DM_Sans,
  Amiri,
  Cormorant_Garamond,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic"],
});
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rawdatul Atfaal | The Garden of Children",
  description:
    "Where the roots of faith and the wings of knowledge grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${dmSans.variable} ${amiri.variable} ${cormorant.variable} antialiased bg-midnight text-cream min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
