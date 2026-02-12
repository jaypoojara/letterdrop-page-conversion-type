import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Stay in the loop
        </h2>
        <p className="mt-3 text-muted">
          Join 12,847+ readers getting smarter every Wednesday.
        </p>
        <div className="mt-8">
          <NewsletterForm variant="compact" />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link
            href="/#archive"
            className="transition-colors hover:text-foreground"
          >
            Past Issues
          </Link>
          <span className="text-border">&middot;</span>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <span className="text-border">&middot;</span>
          <Link
            href="/sponsor"
            className="transition-colors hover:text-foreground"
          >
            Sponsor
          </Link>
          <span className="text-border">&middot;</span>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted/60">
          &copy; {new Date().getFullYear()} The Weekly Dispatch. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
