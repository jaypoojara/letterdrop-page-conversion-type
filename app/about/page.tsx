import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — The Weekly Dispatch",
  description:
    "The story behind The Weekly Dispatch — why we started, what we believe, and the people who make it happen.",
};

const VALUES = [
  {
    title: "Clarity over noise",
    description:
      "We cut through hundreds of sources each week to surface the ideas that actually matter. No filler, no hype — just clear thinking.",
  },
  {
    title: "Respect your time",
    description:
      "Every issue is designed to be read in 5 minutes. We believe your attention is valuable and we treat it that way.",
  },
  {
    title: "Stay independent",
    description:
      "No paywalls, no algorithmic feeds, no sponsored content disguised as editorial. Just honest recommendations from people who care.",
  },
];

const MILESTONES = [
  { year: "2021", event: "First issue sent to 47 friends and colleagues" },
  { year: "2022", event: "Crossed 1,000 subscribers organically" },
  { year: "2023", event: "Featured by Google and Stripe as a top industry read" },
  { year: "2024", event: "Reached 10,000 subscribers — still just one person writing" },
  { year: "2025", event: "12,847 subscribers and counting" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-accent">
            Our Story
          </p>
          <h1
            className="animate-fade-in-up mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Built for the curious
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            The Weekly Dispatch started as a simple email to friends. It grew
            because people wanted a single place to understand what&apos;s
            happening — without spending hours scrolling.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted">
                In 2021, I was spending 3–4 hours every morning reading tech
                news, design blogs, startup threads, and industry reports.
                Friends kept asking: &ldquo;What should I be paying attention
                to?&rdquo; So I started writing a weekly email summarizing the
                most important ideas.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                That email went to 47 people. Within a year, it was 1,000. Not
                because of any growth hack — people just forwarded it to their
                colleagues. Turns out, a lot of us want to stay informed but
                don&apos;t have hours to spend reading every morning.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Today, The Weekly Dispatch reaches over 12,000 professionals
                across tech, design, and business. The mission hasn&apos;t
                changed: read everything so you don&apos;t have to, and deliver
                the best ideas in a format that respects your time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our principles
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-background p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 font-display text-lg font-bold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              The journey
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From 47 to 12,847
            </h2>
          </ScrollReveal>
          <div className="mt-14 space-y-0">
            {MILESTONES.map((milestone, i) => (
              <ScrollReveal key={milestone.year} delay={i * 0.08}>
                <div className="flex gap-6 py-6 border-b border-border last:border-0">
                  <span className="shrink-0 font-display text-2xl font-bold text-accent">
                    {milestone.year}
                  </span>
                  <p className="text-lg text-muted pt-1">{milestone.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
