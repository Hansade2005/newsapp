"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Bookmark, Share2 } from "lucide-react";
import { Article } from "@/lib/data";
import { useState } from "react";

export default function ArticleCard({
  article,
  index = 0,
}: {
  article: Article;
  index?: number;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col"
    >
      <Link href={`/article/${article.id}`} className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-[var(--accent)] text-white">
          {article.category}
        </span>
        {article.trending && (
          <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-[var(--red)] text-white">
            Trending
          </span>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={`/article/${article.id}`}>
          <h3 className="font-bold text-white text-base leading-snug mb-2 line-clamp-2 group-hover:text-[var(--accent-hover)] transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-secondary)] font-medium">{article.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSaved(!saved);
              }}
              className={`p-1.5 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors ${
                saved ? "text-[var(--accent)]" : ""
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard?.writeText(
                  `${window.location.origin}/article/${article.id}`
                );
              }}
              className="p-1.5 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
