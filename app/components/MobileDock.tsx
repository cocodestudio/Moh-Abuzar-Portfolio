"use client";

import React from "react";
import { Briefcase, Layers, Cpu, Milestone, Mail, FileText, MessageSquare } from "lucide-react";

interface MobileDockProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export default function MobileDock({
  activeSection,
  onNavigate,
  onOpenResume,
}: MobileDockProps) {
  const navItems = [
    { id: "work", label: "Work", icon: Briefcase },
    { id: "services", label: "Services", icon: Layers },
    { id: "tech", label: "Stack", icon: Cpu },
    { id: "journey", label: "Journey", icon: Milestone },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="md:hidden fixed bottom-4 inset-x-3 sm:inset-x-6 z-50 pointer-events-auto"
    >
      <div className="mobile-dock-glass rounded-full p-1.5 flex items-center justify-between gap-1 max-w-md mx-auto">
        
        {/* Section Jump Pills */}
        <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar py-0.5 px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-white text-[#18181b] shadow-sm font-semibold"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#ff4502]" : "text-[#a1a1aa]"}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#ff4502] ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/15 mx-0.5 flex-shrink-0" />

        {/* Action Buttons: CV & WhatsApp */}
        <div className="flex items-center gap-1 flex-shrink-0 pr-1">
          {/* Quick Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1 transition-colors cursor-pointer"
            title="View Full Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-[#ff4502]" />
            <span>CV</span>
          </button>

          {/* Quick WhatsApp Direct */}
          <a
            href="https://wa.me/919999999999?text=Hello%20Moh%20Abuzar,%20I%20saw%20your%20studio%20portfolio%20and%20would%20love%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center transition-all shadow-sm shadow-emerald-500/30 cursor-pointer relative"
            title="Instant WhatsApp Chat"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow" />
          </a>
        </div>

      </div>
    </nav>
  );
}
