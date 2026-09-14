"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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

  const navItems = [
    { label: "Overview", id: "hero" },
    { label: "What I Do", id: "services" },
    { label: "Stack", id: "tech" },
    { label: "Work", id: "work" },
    { label: "Journey", id: "journey" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#f9f9f8]/95 backdrop-blur-md border-b border-[#e4e4e7] shadow-2xs md:bg-transparent md:backdrop-blur-none md:border-b-0 md:shadow-none md:pointer-events-none transition-all">
      {/* Brand Logo & Company Title (CoCode Studio with User Logo) */}
      <div
        onClick={() => handleLinkClick("hero")}
        className="pointer-events-auto flex items-center gap-3 sm:gap-3.5 cursor-pointer group select-none"
      >
        {/* Transparent, Standalone Logo without Box or White Background */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
          {/* Subtle Ambient Backlight Glow on Hover */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#ff4502]/25 via-[#fbbf24]/15 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <Image
            src="/images/cocode-logo-black.png"
            alt="CoCode Studio Logo"
            fill
            priority
            className="object-contain animate-logo-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out"
            sizes="(max-width: 768px) 40px, 48px"
          />
        </div>

        {/* Distinct Design Typography with Continuous Shimmer Effect */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="brand-shimmer-text font-sans font-black text-base sm:text-lg tracking-[-0.035em] leading-none uppercase">
              CoCode<span className="font-semibold text-[#18181b] opacity-80 tracking-tight ml-1 lowercase text-sm sm:text-base font-mono">.studio</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4502] animate-ping-slow hidden sm:inline-block" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.22em] text-[#71717a] font-semibold leading-none mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Senior Architect</span>
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

      {/* Right CTA Action */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="tel:+919045757272"
          className="btn-primary text-xs flex items-center gap-1.5 cursor-pointer no-underline py-1.5 px-3.5 sm:px-4"
          title="Call +91 9045757272"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
