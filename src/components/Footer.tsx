import { Zap } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">PulseNews</span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Your trusted source for breaking news, in-depth analysis, and trending stories from around the world.
            </p>
          </div>
          {[
            {
              title: "Categories",
              links: ["Technology", "Business", "Science", "Sports"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-hover)] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
          © 2026 PulseNews. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
