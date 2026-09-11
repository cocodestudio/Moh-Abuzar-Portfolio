"use client";

import { useState } from "react";
import { ArrowUpRight, MessageSquare, Mail, Phone, Copy, Check } from "lucide-react";

export default function StudioContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "mohabuzar.dev@gmail.com";
  const phone = "+91 99999 99999";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="flex-shrink-0 w-full md:w-[1200px] lg:w-[1350px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-36 md:pb-28"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-3xl">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
              {"// DIRECT SUPPORT & CHANNELS"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">Ready to move faster?</span> <br />
              <span>Direct founder access.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-sm font-normal leading-relaxed">
            No bloated agency hierarchies or junior account reps. Connect directly with Moh Abuzar to discuss scope, timelines, and technical architecture.
          </p>
        </div>

        {/* 3 Premium Support Cards (Zero Form Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-3 border-t border-[#e4e4e7]">
          
          {/* Card 1: WhatsApp Connect */}
          <div className="touch-card p-7 rounded-3xl bg-white border border-[#e4e4e7] hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="relative w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-6 h-6" />
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping-slow" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available Now</span>
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#18181b] group-hover:text-emerald-600 transition-colors mb-2">
                Instant WhatsApp Chat
              </h3>

              <p className="text-sm text-[#71717a] leading-relaxed mb-6">
                Fastest way to start a conversation. Send a message directly to Abuzar for quick questions, project scope, or availability.
              </p>
            </div>

            <div className="pt-6 border-t border-[#f4f4f5]">
              <a
                href="https://wa.me/919999999999?text=Hello%20Moh%20Abuzar,%20I%20saw%20your%20studio%20portfolio%20and%20would%20love%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full btn-primary bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 text-xs font-semibold py-3 shadow-md shadow-emerald-600/20"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Email Support */}
          <div className="touch-card p-7 rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#18181b] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f4f5] text-[#18181b] flex items-center justify-center shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f4f4f5] text-[#71717a] border border-[#e4e4e7]/70">
                  Sub-24h Reply
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-2">
                Direct Studio Email
              </h3>

              <p className="text-sm text-[#71717a] leading-relaxed mb-6">
                Ideal for detailed specifications, RFPs, design systems, and enterprise contract proposals.
              </p>
            </div>

            <div className="pt-6 border-t border-[#f4f4f5] flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#f9f9f8] px-3.5 py-2 rounded-xl border border-[#e4e4e7]">
                <span className="text-xs font-mono text-[#18181b] truncate font-medium">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-[#71717a] hover:text-[#18181b] flex items-center gap-1 cursor-pointer ml-2 flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20—%20CoCode%20Studio`}
                className="w-full btn-secondary text-center text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Phone Support */}
          <div className="touch-card p-7 rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ff4502]/10 text-[#ff4502] flex items-center justify-center shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#ff4502]/10 text-[#ff4502] border border-[#ff4502]/20">
                  Direct Line
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-2">
                Phone &amp; Call Line
              </h3>

              <p className="text-sm text-[#71717a] leading-relaxed mb-6">
                Direct voice connection for high-priority projects, architecture consultations, and sprint alignment.
              </p>
            </div>

            <div className="pt-6 border-t border-[#f4f4f5] flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#f9f9f8] px-3.5 py-2 rounded-xl border border-[#e4e4e7]">
                <span className="text-xs font-mono text-[#18181b] font-medium">
                  {phone}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono text-[#71717a] hover:text-[#18181b] flex items-center gap-1 cursor-pointer ml-2 flex-shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="w-full btn-primary text-center text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4502]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
