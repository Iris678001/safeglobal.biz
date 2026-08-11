import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
