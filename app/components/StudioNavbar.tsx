"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

interface StudioNavbarProps {
  onNavigate?: (sectionId: string) => void;
  onOpenResume?: () => void;
  activeSection?: string;
}

export default function StudioNavbar({
  onNavigate,
  onOpenResume,
  activeSection = "hero",
}: StudioNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Overview", id: "hero" },
    { label: "Capabilities", id: "services" },
    { label: "Tech Arsenal", id: "tech" },
    { label: "Selected Work", id: "work" },
    { label: "Success Journey", id: "journey" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-10 md:py-6 pointer-events-none">
      {/* Brand Logo & Company Title (CoCode Studio with User Logo) */}
      <div
        onClick={() => handleLinkClick("hero")}
        className="pointer-events-auto flex items-center gap-3 cursor-pointer group select-none"
      >
        {/* User-Provided CoCode Studio Geometric Logo */}
        <div className="relative w-9 h-9 rounded-xl bg-white border border-[#e4e4e7] flex items-center justify-center p-1.5 shadow-xs group-hover:border-[#ff4502] group-hover:shadow-md transition-all duration-300">
          <Image
            src="/images/cocode-logo-black.png"
            alt="CoCode Studio Logo"
            width={24}
            height={24}
            priority
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="font-bold text-sm tracking-tight text-[#18181b] leading-tight group-hover:text-[#ff4502] transition-colors">
            CoCode Studio
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] leading-none mt-0.5">
            Founder
          </span>
        </div>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="pointer-events-auto hidden lg:flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#e4e4e7] px-3 py-1.5 rounded-full shadow-xs">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#18181b] text-white shadow-sm"
                  : "text-[#71717a] hover:text-[#18181b] hover:bg-[#f4f4f5]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Right CTA Actions (Desktop) */}
      <div className="pointer-events-auto hidden md:flex items-center gap-2.5">
        {/* Book Call Button */}
        <button
          onClick={() => handleLinkClick("contact")}
          className="btn-primary text-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="pointer-events-auto flex md:hidden items-center gap-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-full bg-white border border-[#e4e4e7] text-[#18181b] shadow-xs cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="pointer-events-auto md:hidden fixed inset-0 bg-black/25 backdrop-blur-xs z-40 animate-in fade-in duration-150"
          />
          <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-[#e4e4e7] rounded-3xl p-6 shadow-xl z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-left font-medium text-sm text-[#18181b] hover:bg-[#f4f4f5] flex items-center justify-between cursor-pointer"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#71717a]">→</span>
                </button>
              ))}
              <div className="pt-4 border-t border-[#e4e4e7] mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="w-full btn-secondary py-2.5 text-center text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#ff4502]" />
                  <span>View Full Resume</span>
                </button>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="w-full btn-accent py-3 text-center text-sm cursor-pointer"
                >
                  Book a Call / Hire
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
