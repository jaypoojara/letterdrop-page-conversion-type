"use client";

import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const CONTACT_OPTIONS = [
  {
    label: "General inquiry",
    email: "hello@example.com",
    description: "Questions about the newsletter, feedback, or just saying hi.",
  },
  {
    label: "Sponsorship",
    email: "sponsor@example.com",
    description:
      "Interested in reaching 12,847+ engaged professionals? Let's talk.",
  },
  {
    label: "Press & media",
    email: "press@example.com",
    description: "Interview requests, quotes, or media inquiries.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || status === "loading") return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </p>
          <h1
            className="animate-fade-in-up mt-5 font-display text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            We&apos;d love to hear from you
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Whether it&apos;s a question, feedback, or a partnership idea — our
            inbox is always open.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTACT_OPTIONS.map((option, i) => (
              <ScrollReveal key={option.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-sm">
                  <h3 className="font-display text-lg font-semibold">
                    {option.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {option.description}
                  </p>
                  <a
                    href={`mailto:${option.email}`}
                    className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    {option.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Send a message
              </h2>
              <p className="mt-2 text-muted">
                We typically respond within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-6 py-5 dark:border-green-800 dark:bg-green-950"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-300">
                        Message sent!
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        We&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Your name"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="What's this about?"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted focus:border-accent"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-70 sm:w-auto"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-25"
                            />
                            <path
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              fill="currentColor"
                              className="opacity-75"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
