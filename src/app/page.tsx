"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import FeaturedHero from "@/components/FeaturedHero";
import TrendingBar from "@/components/TrendingBar";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import {
  getFeaturedArticles,
  getTrendingArticles,
  getArticlesByCategory,
  searchArticles,
} from "@/lib/data";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = getFeaturedArticles();
  const trending = getTrendingArticles();

  const displayedArticles = useMemo(() => {
    if (searchQuery) return searchArticles(searchQuery);
    return getArticlesByCategory(category);
  }, [category, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />

      {!searchQuery && (
        <>
          <FeaturedHero articles={featured} />
          <TrendingBar articles={trending} />
        </>
      )}

      <CategoryFilter
        active={category}
        onChange={(cat) => {
          setCategory(cat);
          setSearchQuery("");
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1">
        {searchQuery && (
          <p className="text-sm text-[var(--text-muted)] mb-4">
            {displayedArticles.length} result{displayedArticles.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {displayedArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)] text-lg">No articles found</p>
            <p className="text-[var(--text-muted)] text-sm mt-2">Try a different search or category</p>
          </div>
        )}
      </main>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
