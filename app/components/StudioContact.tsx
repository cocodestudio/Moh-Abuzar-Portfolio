"use client";

import { useState } from "react";
import { ArrowUpRight, MessageSquare, Mail, Phone, Copy, Check } from "lucide-react";

export default function StudioContact() {
  const [copiedStudioEmail, setCopiedStudioEmail] = useState(false);
  const [copiedPersonalEmail, setCopiedPersonalEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const studioEmail = "support@cocodestudio.com";
  const personalEmail = "mohabuzar.net@gmail.com";
  const phone = "+91 9045757272";
  const phoneRaw = "+919045757272";
  const whatsappUrl = "https://wa.me/919045757272?text=Hello%20Moh%20Abuzar,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.";

  const handleCopyStudioEmail = () => {
    navigator.clipboard.writeText(studioEmail);
    setCopiedStudioEmail(true);
    setTimeout(() => setCopiedStudioEmail(false), 2500);
  };

  const handleCopyPersonalEmail = () => {
    navigator.clipboard.writeText(personalEmail);
    setCopiedPersonalEmail(true);
    setTimeout(() => setCopiedPersonalEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex flex-col justify-start md:justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-22 md:pt-24 pb-24 sm:pb-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="my-auto w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 max-w-3xl">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">Ready to build something</span> <br />
              <span>that opens doors?</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-sm font-normal leading-relaxed">
            Whether you need a rapid 0-to-1 MVP, a modern web platform, or mobile app engineering — connect directly with Moh Abuzar. No middlemen, no sales pitches.
          </p>
        </div>

        {/* 3 Premium Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-4 lg:gap-5 pt-2 border-t border-[#e4e4e7]">
          
          {/* Card 1: WhatsApp Connect */}
          <div className="touch-card p-4 sm:p-5 lg:p-6 rounded-2xl md:rounded-3xl bg-white border border-[#e4e4e7] hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="relative w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping-slow" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available Now</span>
                </span>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#18181b] group-hover:text-emerald-600 transition-colors mb-1.5">
                Direct WhatsApp
              </h3>

              <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed mb-3">
                Fastest way to get in touch. Send an instant WhatsApp message to discuss your idea, project scope, timeline, or current sprint slots.
              </p>

              <div className="bg-[#f9f9f8] px-3 py-1.5 rounded-xl border border-[#e4e4e7] mb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-[#18181b] font-semibold">
                  {phone}
                </span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200/50">
                  Instant Reply
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#f4f4f5]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full btn-primary bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 text-xs font-semibold py-2.5 shadow-md shadow-emerald-600/20 no-underline"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Email Support (Studio & Personal) */}
          <div className="touch-card p-4 sm:p-5 lg:p-6 rounded-2xl md:rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#18181b] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] text-[#18181b] flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#f4f4f5] text-[#71717a] border border-[#e4e4e7]/70">
                  Sub-24h Reply
                </span>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1.5">
                Studio &amp; Personal Email
              </h3>

              <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed mb-3">
                Best for detailed product specifications, RFPs, design links, and long-term contract inquiries.
              </p>
            </div>

            <div className="pt-2 border-t border-[#f4f4f5] flex flex-col gap-2">
              {/* Studio Email */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase text-[#a1a1aa] font-medium tracking-wider">
                  Company / Studio:
                </span>
                <div className="flex items-center justify-between bg-[#f9f9f8] px-3 py-1.5 rounded-xl border border-[#e4e4e7]">
                  <a
                    href={`mailto:${studioEmail}?subject=Project%20Inquiry%20—%20CoCode%20Studio`}
                    className="text-xs font-mono text-[#18181b] hover:text-[#ff4502] truncate font-medium no-underline"
                    title="Send to support@cocodestudio.com"
                  >
                    {studioEmail}
                  </a>
                  <button
                    onClick={handleCopyStudioEmail}
                    className="text-xs font-mono text-[#71717a] hover:text-[#18181b] flex items-center gap-1 cursor-pointer ml-2 flex-shrink-0"
                    title="Copy studio email"
                  >
                    {copiedStudioEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Personal Email */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase text-[#a1a1aa] font-medium tracking-wider">
                  Personal / Founder:
                </span>
                <div className="flex items-center justify-between bg-[#f9f9f8] px-3 py-1.5 rounded-xl border border-[#e4e4e7]">
                  <a
                    href={`mailto:${personalEmail}?subject=Direct%20Inquiry%20for%20Moh%20Abuzar`}
                    className="text-xs font-mono text-[#18181b] hover:text-[#ff4502] truncate font-medium no-underline"
                    title="Send to mohabuzar.net@gmail.com"
                  >
                    {personalEmail}
                  </a>
                  <button
                    onClick={handleCopyPersonalEmail}
                    className="text-xs font-mono text-[#71717a] hover:text-[#18181b] flex items-center gap-1 cursor-pointer ml-2 flex-shrink-0"
                    title="Copy personal email"
                  >
                    {copiedPersonalEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Phone Support & Dialpad Book Call */}
          <div className="touch-card p-4 sm:p-5 lg:p-6 rounded-2xl md:rounded-3xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ff4502]/10 text-[#ff4502] flex items-center justify-center shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#ff4502]/10 text-[#ff4502] border border-[#ff4502]/20">
                  Direct Line
                </span>
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1.5">
                Book a Call / Dial
              </h3>

              <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed mb-3">
                Direct phone connection for priority projects, tech architecture reviews, and sprint kickoff planning. Clicking opens dialpad directly.
              </p>
            </div>

            <div className="pt-3.5 border-t border-[#f4f4f5] flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#f9f9f8] px-3 py-1.5 rounded-xl border border-[#e4e4e7]">
                <span className="text-xs font-mono text-[#18181b] font-semibold">
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
                      <span className="text-emerald-600 font-semibold text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${phoneRaw}`}
                className="w-full btn-primary text-center text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5 no-underline shadow-md shadow-[#ff4502]/20"
                title={`Open dialpad with ${phone}`}
              >
                <span>Book Call / Dial {phone}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
