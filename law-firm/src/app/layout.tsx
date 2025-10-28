import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harbor & Wells Law | Business Litigation & Counsel",
  description:
    "Harbor & Wells is a boutique law firm delivering business litigation, corporate counsel, and estate planning services with precision and care.",
  metadataBase: new URL("https://agentic-b6d46602.vercel.app"),
  openGraph: {
    title: "Harbor & Wells Law",
    description:
      "Trusted counsel for business litigation, corporate governance, and estate planning.",
    url: "https://agentic-b6d46602.vercel.app",
    siteName: "Harbor & Wells Law",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbor & Wells Law",
    description:
      "Boutique law firm providing business litigation, corporate counsel, and estate planning services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
