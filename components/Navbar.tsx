"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Past Issues", href: "/#archive" },
  { label: "Sponsor", href: "/sponsor" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
        >
          The Weekly Dispatch
        </Link>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden text-sm transition-colors hover:text-foreground sm:block ${
                pathname === link.href
                  ? "font-semibold text-foreground"
                  : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#subscribe"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
