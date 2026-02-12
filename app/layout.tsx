import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
