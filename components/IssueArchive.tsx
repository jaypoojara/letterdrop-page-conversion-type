"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// SAMPLE ISSUES — Replace with your own content
// ============================================
const ISSUES = [
  {
    id: 1,
    title: "The Rise of AI-Native Companies",
    date: "Jan 15, 2025",
    category: "Technology",
    excerpt:
      "How a new generation of startups is building with AI at the core, and why traditional companies can't just bolt it on.",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Why Great Design is a Business Multiplier",
    date: "Jan 8, 2025",
    category: "Design",
    excerpt:
      "The ROI of investing in design quality, backed by data from 100 companies that made the switch.",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Remote Work 3.0: What Actually Works",
    date: "Jan 1, 2025",
    category: "Business",
    excerpt:
      "After five years of remote work experiments, the data is finally clear on what drives productivity.",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "The Creator Economy's Next Chapter",
    date: "Dec 25, 2024",
    category: "Culture",
    excerpt:
      "Why individual creators are outperforming traditional media companies and what comes next.",
    readTime: "5 min",
  },
  {
    id: 5,
    title: "What 100 Startup Failures Taught Me",
    date: "Dec 18, 2024",
    category: "Startups",
    excerpt:
      "Patterns from a decade of watching startups rise and fall — and the three mistakes they all make.",
    readTime: "7 min",
  },
  {
    id: 6,
    title: "The Typography Renaissance",
    date: "Dec 11, 2024",
    category: "Design",
    excerpt:
      "How variable fonts and better tooling are quietly transforming digital design across the web.",
    readTime: "4 min",
  },
  {
    id: 7,
    title: "Building Products People Actually Want",
    date: "Dec 4, 2024",
    category: "Startups",
    excerpt:
      "A framework for customer discovery that goes beyond surveys and focus groups.",
    readTime: "6 min",
  },
  {
    id: 8,
    title: "The Quiet Revolution in Developer Tools",
    date: "Nov 27, 2024",
    category: "Technology",
    excerpt:
      "From AI pair programming to instant deployments — the tools reshaping how software gets built.",
    readTime: "5 min",
  },
];

const CATEGORIES = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Culture",
  "Startups",
];

export function IssueArchive() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return ISSUES.filter((issue) => {
      const matchesSearch =
        issue.title.toLowerCase().includes(search.toLowerCase()) ||
        issue.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || issue.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search past issues..."
          className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-4 text-foreground outline-none placeholder:text-muted transition-colors focus:border-accent"
        />
      </div>

      {/* Category Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-accent text-white"
                : "border border-border text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Issues Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((issue) => (
            <motion.a
              key={issue.id}
              href="#"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="group block rounded-xl border border-border p-6 transition-colors hover:border-accent/30 hover:bg-surface/50"
            >
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {issue.category}
                </span>
                <span>{issue.readTime}</span>
                <span>·</span>
                <span>{issue.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                {issue.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {issue.excerpt}
              </p>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-muted">
            No issues found. Try a different search or category.
          </p>
        </div>
      )}
    </div>
  );
}
