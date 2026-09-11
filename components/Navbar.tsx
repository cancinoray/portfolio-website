"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/90 backdrop-blur-md shadow-sm border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-lg tracking-tight text-ink hover:text-signal transition-colors"
          >
            ray<span className="text-signal">.</span>cancino
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.name === "Connect" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavClick(item.href);
                  }}
                  className="px-4 py-2 bg-ink text-paper text-[11px] font-mono uppercase tracking-widest rounded-sm hover:bg-signal transition-colors"
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
                  className="text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink hover:text-signal transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-rule pt-4 space-y-3">
            {navItems.map((item) =>
              item.type === "section" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNavClick(item.href);
                  }}
                  className="block text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors py-1"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[11px] font-mono uppercase tracking-widest text-muted hover:text-signal transition-colors py-1"
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
