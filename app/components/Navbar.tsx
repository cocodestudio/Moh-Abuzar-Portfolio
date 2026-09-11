"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Send } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy to detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          isScrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-cyan-950/20"
            : "bg-slate-950/40 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-400">
              MA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              MOH ABUZAR
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Portfolio 3D
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[0.5px]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all group overflow-hidden"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Let&apos;s Connect</span>
            <Send className="w-3 h-3 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white bg-white/[0.04] border border-white/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[#030712]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl shadow-black z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                      : "text-gray-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />}
                </a>
              );
            })}

            <div className="pt-2 border-t border-white/10 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hire / Collaborate</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
