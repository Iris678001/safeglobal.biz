import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safeglobal — Connecting Markets. Delivering Quality.",
  description:
    "Safeglobal is a global trading and distribution company specializing in petrochemicals, refined sugar, cream rice, edible oils and gas products. A trusted B2B supplier connecting manufacturers, suppliers and businesses across international markets.",
  keywords: [
    "Safeglobal",
    "global trading",
    "B2B supplier",
    "petrochemical products",
    "refined sugar",
    "cream rice",
    "edible oils",
    "gas products",
    "international distribution",
    "supply chain",
  ],
  authors: [{ name: "Safeglobal" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Safeglobal — Connecting Markets. Delivering Quality.",
    description:
      "A trusted global B2B supplier connecting manufacturers, suppliers and businesses across international markets.",
    siteName: "Safeglobal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safeglobal — Connecting Markets. Delivering Quality.",
    description:
      "A trusted global B2B supplier connecting manufacturers, suppliers and businesses across international markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
