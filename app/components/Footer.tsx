"use client";

import { ArrowUp, MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02050c] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Tier: Logo & Navigation */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  MA
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-wide">
                MOH ABUZAR
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              Creative Technologist & Full-Stack Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-gray-400">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919045757272"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
              aria-label="WhatsApp (+91 9045757272)"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="mailto:support@cocodestudio.com"
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
              aria-label="Email support@cocodestudio.com"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-400 font-mono">
          <p>
            © {new Date().getFullYear()} Moh Abuzar. Crafted with Next.js 16, React 19 & 3D WebGL.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 text-gray-300 transition-all group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
