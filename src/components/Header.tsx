"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, Zap, Bookmark, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({
  onSearch,
  searchQuery,
}: {
  onSearch: (q: string) => void;
  searchQuery: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              PulseNews
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#trending" className="text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Trending
            </Link>
            <Link href="/#categories" className="text-[var(--text-secondary)] hover:text-white transition-colors">
              Categories
            </Link>
            <Link href="/#bookmarks" className="text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5" /> Saved
            </Link>
          </nav>

          {/* Search & Menu */}
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-sm text-white placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)]"
                  autoFocus
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (searchOpen) onSearch("");
              }}
              className="p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-secondary)] hover:text-white"
            >
              {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--text-secondary)]"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-[var(--border)]"
            >
              <div className="py-3 flex flex-col gap-2">
                {["Home", "Trending", "Categories", "Saved"].map((item) => (
                  <Link
                    key={item}
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-tertiary)] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
