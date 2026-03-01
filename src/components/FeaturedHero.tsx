"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/lib/data";

export default function FeaturedHero({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  const main = articles[0];
  const side = articles.slice(1, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[var(--red)] pulse-dot" />
        <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
          Featured Stories
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative group rounded-2xl overflow-hidden"
        >
          <Link href={`/article/${main.id}`}>
            <div className="relative aspect-[16/9] lg:aspect-[2/1]">
              <img
                src={main.image}
                alt={main.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent)] text-white mb-3">
                  {main.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  {main.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2 max-w-2xl">
                  {main.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{main.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {main.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--accent-hover)] font-medium group-hover:underline">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Side featured */}
        <div className="flex flex-col gap-6">
          {side.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="group relative rounded-2xl overflow-hidden flex-1"
            >
              <Link href={`/article/${article.id}`}>
                <div className="relative h-full min-h-[200px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-[var(--accent)] text-white mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                      <span>{article.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
