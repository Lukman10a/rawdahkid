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
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppProviders } from "@/components/providers/AppProviders";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${playfair.variable} ${cinzel.variable} ${dmSans.variable} ${amiri.variable} ${cormorant.variable} antialiased bg-ivory dark:bg-midnight text-midnight dark:text-cream min-h-screen flex flex-col transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <Navbar />
              <main className="grow w-full min-w-0 overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
