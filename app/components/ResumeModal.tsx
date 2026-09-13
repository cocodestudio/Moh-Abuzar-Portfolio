"use client";

import { X, Download, Briefcase, GraduationCap, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#e4e4e7] relative my-8 modal-scroll max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-[#e4e4e7] mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4502] font-semibold">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18181b] tracking-tight">
              Moh Abuzar
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a]">
              Founder @ CoCode Studio • Senior Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1.5 px-4"
              title="Print / Save PDF"
            >
              <Download className="w-4 h-4 text-[#ff4502]" />
              <span className="hidden sm:inline">Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#f9f9f8] border border-[#e4e4e7] text-xs font-mono text-[#71717a] mb-8">
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">EMAIL</span>
            <a href="mailto:support@cocodestudio.com" className="text-[#18181b] font-semibold hover:text-[#ff4502] truncate block no-underline">support@cocodestudio.com</a>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">DIRECT PHONE</span>
            <a href="tel:+919045757272" className="text-[#18181b] font-semibold hover:text-[#ff4502] no-underline">+91 9045757272</a>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">COMPANY</span>
            <span className="text-[#18181b] font-semibold">CoCode Studio</span>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">STATUS</span>
            <span className="text-emerald-600 font-semibold">Open for Clients</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-2">
            Executive Profile
          </h3>
          <p className="text-sm text-[#71717a] leading-relaxed">
            Senior Full-Stack Software Engineer and Founder of CoCode Studio with 6+ years of active development experience architecting high-velocity web platforms, modern digital products, and robust cloud systems. Specialized in Next.js, React, Node.js, Laravel, Flutter, and clean UI/UX with a verified track record of shipping 10+ production-deployed projects across commercial client contracts, collegiate systems, and independent platforms.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-4 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#ff4502]" />
            <span>Leadership &amp; Work Experience</span>
          </h3>

          <div className="space-y-6 border-l-2 border-[#e4e4e7] pl-4 sm:pl-6 ml-2">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Founder &amp; Principal Architect</h4>
                <span className="text-xs font-mono text-[#ff4502] bg-[#ff4502]/10 px-2.5 py-0.5 rounded-full font-semibold">
                  2025 — Present
                </span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">CoCode Studio • Global</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Founded CoCode Studio, leading end-to-end full-stack engineering and product design sprints for high-growth tech startups.</li>
                <li>Shipped production platforms with sub-second latency, zero downtime, and high conversion UX.</li>
                <li>Direct senior founder partnership with 100% on-time milestone delivery.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Independent Full-Stack Freelancer</h4>
                <span className="text-xs font-mono text-[#71717a]">2023 — 2024</span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">Global Online Freelancing</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Collaborated directly with clients and founders worldwide to engineer commercial web apps, custom platforms, and business solutions.</li>
                <li>Handled complete engineering lifecycle: UI design, backend APIs, database architecture, and deployment.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Self-Taught Developer &amp; Tech Explorer</h4>
                <span className="text-xs font-mono text-[#71717a]">2018 — 2023</span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">Early Foundations (8th Standard)</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Started coding in 8th standard purely driven by curiosity, mastering programming logic, web stacks, and system fundamentals.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Mastery */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-3 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#ff4502]" />
            <span>Technical Mastery</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#f9f9f8] border border-[#e4e4e7]">
              <span className="font-bold text-[#18181b] block mb-1">Frontend &amp; Mobile</span>
              <span className="text-[#71717a]">Next.js, React, Flutter, Dart, TypeScript, Modern UI/UX, Design Systems</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9f8] border border-[#e4e4e7]">
              <span className="font-bold text-[#18181b] block mb-1">Backend &amp; Cloud Infrastructure</span>
              <span className="text-[#71717a]">PHP, Laravel, Node.js, PostgreSQL, MongoDB, Firebase, AWS (EC2, Route 53, S3), Vercel</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#ff4502]" />
            <span>Education</span>
          </h3>
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-[#18181b]">Bachelor of Computer Applications (BCA)</span>
              <span className="text-[#71717a] block">Shobhit University, Gangoh</span>
            </div>
            <span className="text-xs font-mono text-[#71717a]">2024 — 2027</span>
          </div>
        </div>

      </div>
    </div>
  );
}
