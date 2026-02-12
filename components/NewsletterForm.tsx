"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterFormProps {
  variant?: "hero" | "compact";
}

export function NewsletterForm({ variant = "hero" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center justify-center gap-3 rounded-full border border-green-200 bg-green-50 px-6 py-4 dark:border-green-800 dark:bg-green-950"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            Check your inbox! We sent a confirmation email.
          </span>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {variant === "hero" ? (
            <>
              {/* Desktop: pill container */}
              <div className="hidden sm:flex items-center rounded-full border border-border bg-background p-1.5 shadow-sm">
                <div className="flex flex-1 items-center gap-3 pl-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22,7-8.97,5.7a1.94,1.94 0 0 1-2.06,0L2,7" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-transparent py-3 text-foreground outline-none placeholder:text-muted"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
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
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe — it's free"
                  )}
                </button>
              </div>

              {/* Mobile: stacked */}
              <div className="flex flex-col gap-3 sm:hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-foreground outline-none placeholder:text-muted focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-70"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe — it's free"}
                </button>
              </div>
            </>
          ) : (
            /* Compact variant for footer */
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent sm:w-72"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
