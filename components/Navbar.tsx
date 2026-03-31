"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type NavItem = {
  name: string;
  href: string;
  type: "section" | "page";
};

const navItems: NavItem[] = [
  { name: "About", href: "#about", type: "section" },
  { name: "Projects", href: "#projects", type: "section" },
  { name: "Experience", href: "#experience", type: "section" },
  { name: "Blog", href: "/blog", type: "page" },
  { name: "Connect", href: "#contact", type: "section" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian/80 backdrop-blur-xl border-b border-ash/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-neon group-hover:shadow-[0_0_12px_rgba(0,229,159,0.6)] transition-shadow duration-300" />
            <span className="font-mono text-sm tracking-tight text-cloud hover:text-snow transition-colors">
              ray.cancino
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.name === "Connect" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavClick(item.href);
                  }}
                  className="ml-4 px-5 py-2 bg-neon/10 text-neon text-[11px] font-mono uppercase tracking-widest rounded-full border border-neon/20 hover:bg-neon/20 hover:border-neon/40 hover:shadow-[0_0_20px_rgba(0,229,159,0.15)] transition-all duration-300"
                >
                  {item.name}
                </a>
              ) : item.type === "section" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavClick(item.href);
                  }}
                  className="px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-fog hover:text-neon transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-fog hover:text-neon transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-fog hover:text-neon transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-ash/50 pt-6 space-y-1">
            {navItems.map((item) =>
              item.type === "section" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavClick(item.href);
                  }}
                  className="block text-[11px] font-mono uppercase tracking-widest text-fog hover:text-neon transition-colors py-3 px-2 hover:bg-neon/5 rounded-lg"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[11px] font-mono uppercase tracking-widest text-fog hover:text-neon transition-colors py-3 px-2 hover:bg-neon/5 rounded-lg"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
