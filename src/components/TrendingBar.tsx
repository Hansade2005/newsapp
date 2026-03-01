"use client";

import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Article } from "@/lib/data";

export default function TrendingBar({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[var(--red)]" />
          <h2 className="font-bold text-white text-sm uppercase tracking-wider">
            Trending Now
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/article/${article.id}`}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors group"
              >
                <span className="text-2xl font-black text-[var(--accent)] opacity-50 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-[var(--accent-hover)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {article.category} · {article.readTime}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
