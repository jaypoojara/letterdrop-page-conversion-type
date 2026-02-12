import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Weekly Dispatch — Ideas Worth Your Inbox",
  description:
    "Every Wednesday, get a 5-minute briefing on the ideas, trends, and tools shaping the next decade. Read by 12,000+ forward-thinking professionals.",
  openGraph: {
    title: "The Weekly Dispatch — Ideas Worth Your Inbox",
    description:
      "Every Wednesday, get a 5-minute briefing on the ideas, trends, and tools shaping the next decade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
