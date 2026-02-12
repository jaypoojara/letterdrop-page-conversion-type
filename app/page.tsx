import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { NewsletterForm } from "@/components/NewsletterForm";
import { IssueArchive } from "@/components/IssueArchive";

// ============================================
// TEMPLATE CONFIGURATION
// Edit these values to customize your newsletter
// ============================================

const NEWSLETTER = {
  name: "The Weekly Dispatch",
  tagline: "Ideas Worth Your Inbox",
  description:
    "Every Wednesday, get a 5-minute briefing on the ideas, trends, and tools shaping the next decade. Read by forward-thinking professionals.",
  subscriberCount: 12847,
};

const NAV_LINKS = [
  { label: "Past Issues", href: "#archive" },
  { label: "Sponsor", href: "#sponsor" },
];

const COMPANIES = ["Google", "Stripe", "Figma", "Netflix", "Shopify"];

const BENEFITS = [
  {
    title: "Curated Analysis",
    description:
      "We read 200+ sources weekly so you don't have to. Each issue distills the most important ideas into clear, actionable insights.",
  },
  {
    title: "Practical Takeaways",
    description:
      "No fluff, no filler. Every issue includes concrete steps you can apply to your work the same day.",
  },
  {
    title: "Expert Perspectives",
    description:
      "Exclusive interviews and commentary from the founders, designers, and technologists shaping the industry.",
  },
];

const FEATURED_ISSUE = {
  title: "The Rise of AI-Native Companies",
  date: "January 15, 2025",
  category: "Technology",
  readTime: "5 min read",
  excerpt:
    "A new generation of startups isn't just using AI — they're built entirely around it. We spoke to 12 founders about what makes an AI-native company different, and why traditional companies can't just bolt AI onto existing processes. The implications for hiring, product development, and competitive strategy are profound...",
};

const TESTIMONIALS = [
  {
    quote:
      "The only newsletter I read start to finish every single week. The analysis is sharp and the recommendations are always spot-on.",
    name: "Sarah Chen",
    title: "VP of Product",
  },
  {
    quote:
      "Required reading for our entire product team. It surfaces trends months before they hit the mainstream.",
    name: "Marcus Rivera",
    title: "Engineering Lead",
  },
  {
    quote:
      "In a sea of AI-generated newsletter content, this is a breath of fresh air. You can tell a human wrote this.",
    name: "Aisha Patel",
    title: "Design Director",
  },
];

const FORMAT_DETAILS = [
  { label: "Every Wednesday", description: "Consistent delivery" },
  { label: "5-Minute Read", description: "Respect your time" },
  { label: "Hand-Picked", description: "Quality over quantity" },
  { label: "Always Free", description: "No paywalls, ever" },
];

const SPONSOR_STATS = [
  { value: "12,847", label: "Subscribers" },
  { value: "48%", label: "Open Rate" },
  { value: "12%", label: "Click Rate" },
];

// ============================================
// SVG ICONS
// ============================================

function BookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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
  );
}

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.2">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

const BENEFIT_ICONS = [BookIcon, CheckCircleIcon, GlobeIcon];
const FORMAT_ICONS = [CalendarIcon, ClockIcon, StarIcon, HeartIcon];

// ============================================
// PAGE
// ============================================

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight"
          >
            {NEWSLETTER.name}
          </a>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#subscribe"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="subscribe"
        className="bg-gradient-to-b from-surface to-background"
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 lg:py-36">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-accent">
            Weekly Newsletter
          </p>
          <h1
            className="animate-fade-in-up mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            {NEWSLETTER.tagline}
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            {NEWSLETTER.description}
          </p>
          <div
            className="animate-fade-in-up mt-10"
            style={{ animationDelay: "300ms" }}
          >
            <NewsletterForm variant="hero" />
          </div>
          <div
            className="animate-fade-in-up mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted"
            style={{ animationDelay: "400ms" }}
          >
            <span>Join</span>
            <span className="font-semibold text-foreground">
              <AnimatedCounter target={NEWSLETTER.subscriberCount} />+
            </span>
            <span>readers</span>
            <span className="text-border">&middot;</span>
            <span>Free forever</span>
            <span className="text-border">&middot;</span>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="border-y border-border py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-sm text-muted">
            Read by professionals from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {COMPANIES.map((company) => (
              <span
                key={company}
                className="font-display text-lg font-semibold text-foreground/30"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What you&apos;ll get
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Every issue is packed with value
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {BENEFITS.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <ScrollReveal key={benefit.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-sm">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ISSUE ===== */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Latest Issue
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {FEATURED_ISSUE.category}
                  </span>
                  <span>{FEATURED_ISSUE.readTime}</span>
                  <span>&middot;</span>
                  <span>{FEATURED_ISSUE.date}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {FEATURED_ISSUE.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {FEATURED_ISSUE.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Read this issue
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ISSUE ARCHIVE ===== */}
      <section id="archive" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Archive
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Past Issues
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <IssueArchive />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What readers say
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by thousands
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-background p-8">
                  <QuoteIcon />
                  <p className="mt-4 leading-relaxed">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMAT DETAILS ===== */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                How it works
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, consistent, free
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FORMAT_DETAILS.map((detail, i) => {
              const Icon = FORMAT_ICONS[i];
              return (
                <ScrollReveal key={detail.label} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                      <Icon />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {detail.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {detail.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SPONSOR ===== */}
      <section id="sponsor" className="bg-foreground py-20 text-background sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Partner with us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Reach {NEWSLETTER.subscriberCount.toLocaleString()}+ engaged
              professionals
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-background/60">
              Put your brand in front of decision-makers in tech, design, and
              business. Our readers are senior professionals who trust our
              recommendations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex items-center justify-center gap-8 sm:gap-14">
              {SPONSOR_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-background/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="mailto:sponsor@example.com"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Become a Sponsor
              <ArrowRightIcon />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mt-3 text-muted">
            Join {NEWSLETTER.subscriberCount.toLocaleString()}+ readers getting
            smarter every Wednesday.
          </p>
          <div className="mt-8">
            <NewsletterForm variant="compact" />
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <a
              href="#archive"
              className="transition-colors hover:text-foreground"
            >
              Past Issues
            </a>
            <span className="text-border">&middot;</span>
            <a
              href="#about"
              className="transition-colors hover:text-foreground"
            >
              About
            </a>
            <span className="text-border">&middot;</span>
            <a
              href="#sponsor"
              className="transition-colors hover:text-foreground"
            >
              Sponsor
            </a>
            <span className="text-border">&middot;</span>
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <p className="mt-8 text-sm text-muted/60">
            &copy; {new Date().getFullYear()} {NEWSLETTER.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
