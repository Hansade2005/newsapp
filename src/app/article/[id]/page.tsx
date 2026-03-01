"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Bookmark,
  Share2,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import { getArticleById, articles } from "@/lib/data";
import { useState } from "react";
import { format } from "date-fns";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const article = getArticleById(id);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(142);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-[var(--text-muted)] mb-6">Article not found</p>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium text-sm"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSaved(!saved);
              }}
              className={`p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors ${
                saved ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
              }`}
            >
              <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-secondary)]"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />
      </div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 -mt-32 relative z-10"
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent)] text-white mb-4">
          {article.category}
        </span>

        <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-8 pb-6 border-b border-[var(--border)]">
          <span className="text-[var(--text-secondary)] font-medium">
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {format(new Date(article.date), "MMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <div className="prose-custom text-[var(--text-secondary)] leading-relaxed text-base space-y-4 mb-8">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Engagement */}
        <div className="flex items-center gap-4 py-6 border-t border-b border-[var(--border)] mb-12">
          <button
            onClick={() => {
              setLiked(!liked);
              setLikes((l) => (liked ? l - 1 : l + 1));
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              liked
                ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-white"
            }`}
          >
            <ThumbsUp className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
            {likes}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-white transition-colors">
            <MessageSquare className="w-4 h-4" /> 24 Comments
          </button>
        </div>
      </motion.article>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-xl font-bold text-white mb-6">Related Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
