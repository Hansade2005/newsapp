"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors"
          >
            {active === cat && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-full bg-[var(--accent)] glow"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active === cat ? "text-white" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
