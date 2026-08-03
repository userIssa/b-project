"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home",     href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll → white bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver → highlight active section
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const transparent = !scrolled && !mobileMenuOpen;

  const handleAnchorClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleAnchorClick("#home"); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/B-PROJECTS VENTURES LIMITED.png"
              alt="B-Projects Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${transparent ? "text-white" : "text-[#0B192C]"}`}>
              B-PROJECTS
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`text-[9px] uppercase tracking-[0.2em] font-sans font-medium transition-colors ${transparent ? "text-white/70" : "text-neutral-500"}`}>
                Ventures Limited
              </span>
              <span className={`text-[8px] font-sans font-semibold transition-colors ${transparent ? "text-[#C59A3F]" : "text-[#C59A3F]"}`}>
                (RC: 9646602)
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleAnchorClick(item.href); }}
                className={`text-sm font-sans font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  transparent
                    ? isActive ? "text-white underline underline-offset-4 decoration-[#C59A3F]" : "text-white/80 hover:text-white"
                    : isActive ? "text-[#0B192C] underline underline-offset-4 decoration-[#C59A3F]" : "text-neutral-500 hover:text-[#0B192C]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${transparent ? "text-white hover:text-white/70" : "text-neutral-700 hover:text-[#0B192C]"}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-1 shadow-md">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleAnchorClick(item.href); }}
                className={`block py-3 border-b border-neutral-100 text-sm font-sans font-medium tracking-wide transition-colors cursor-pointer ${
                  activeSection === id ? "text-[#C59A3F] font-bold" : "text-neutral-600 hover:text-[#0B192C]"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
