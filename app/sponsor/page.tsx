import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sponsor — The Weekly Dispatch",
  description:
    "Put your brand in front of 12,847+ engaged professionals in tech, design, and business.",
};

const AUDIENCE_STATS = [
  { value: "12,847+", label: "Subscribers" },
  { value: "48%", label: "Open rate" },
  { value: "12%", label: "Click rate" },
  { value: "82%", label: "Senior-level readers" },
];

const AUDIENCE_BREAKDOWN = [
  { label: "Engineering & Development", percentage: 35 },
  { label: "Product & Design", percentage: 28 },
  { label: "Founders & Executives", percentage: 22 },
  { label: "Marketing & Growth", percentage: 15 },
];

const PACKAGES = [
  {
    name: "Single Issue",
    price: "$500",
    period: "per issue",
    description: "Perfect for testing the waters with our audience.",
    features: [
      "Logo placement in one issue",
      "150-word sponsored blurb",
      "One tracked link",
      "Performance report within 48 hours",
    ],
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "$1,600",
    period: "4 issues",
    description: "Build sustained awareness over a full month.",
    features: [
      "Logo placement in 4 consecutive issues",
      "150-word sponsored blurb each issue",
      "Up to 2 tracked links per issue",
      "Dedicated performance dashboard",
      "20% discount vs. single issue",
    ],
    highlighted: true,
  },
  {
    name: "Quarterly",
    price: "$4,000",
    period: "12 issues",
    description: "Become a recognized name in our community.",
    features: [
      "Logo placement in 12 issues",
      "200-word sponsored blurb each issue",
      "Up to 3 tracked links per issue",
      "Dedicated performance dashboard",
      "One featured deep-dive article",
      "35% discount vs. single issue",
    ],
    highlighted: false,
  },
];

const PAST_SPONSORS = [
  "Linear",
  "Notion",
  "Vercel",
  "Raycast",
  "Framer",
  "Arc",
];

export default function SponsorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-accent">
            Sponsorship
          </p>
          <h1
            className="animate-fade-in-up mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Reach the people building the future
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Our readers are senior professionals in tech, design, and business.
            They trust our recommendations and act on them.
          </p>
          <div
            className="animate-fade-in-up mt-10"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="mailto:sponsor@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get in touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Audience Stats */}
      <section className="border-y border-border py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {AUDIENCE_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Breakdown */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Who reads us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our audience
            </h2>
            <p className="mt-4 text-lg text-muted">
              Decision-makers who discover products through trusted
              recommendations, not ads.
            </p>
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {AUDIENCE_BREAKDOWN.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-semibold text-accent">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-accent/80 transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Packages
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent pricing
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                    pkg.highlighted
                      ? "border-accent bg-background shadow-lg"
                      : "border-border bg-background hover:border-accent/30 hover:shadow-sm"
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted">/ {pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{pkg.description}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 shrink-0"
                        >
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:sponsor@example.com"
                    className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      pkg.highlighted
                        ? "bg-accent text-white hover:bg-accent-hover"
                        : "border border-border bg-background text-foreground hover:border-accent/30"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Trusted by
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Past sponsors
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {PAST_SPONSORS.map((sponsor) => (
                <span
                  key={sponsor}
                  className="font-display text-xl font-semibold text-foreground/25"
                >
                  {sponsor}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <h3 className="font-display text-xl font-semibold">
                Custom packages available
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-muted">
                Need something different? We&apos;re happy to create a custom
                sponsorship package tailored to your goals. Reach out and
                let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Contact us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
