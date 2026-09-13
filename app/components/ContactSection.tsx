"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  MapPin,
  Clock,
  Check,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "support@cocodestudio.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{"// 05. INITIATE CONNECTION"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-gradient-cyan">Extraordinary</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-4">
            Have a project in mind, an exciting role, or just want to connect? Reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Current Availability
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Open for full-time senior engineering opportunities, high-impact contract roles, and innovative freelance collaborations worldwide.
              </p>

              <div className="space-y-3 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Available Globally (Remote Friendly)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Response Time: Typically under 12 hours</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <a
              href="https://wa.me/919999999999?text=Hello%20Moh%20Abuzar,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noreferrer"
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border border-emerald-500/30 flex items-center justify-between group cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Instant WhatsApp Chat
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Direct conversation on mobile/desktop
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Connect →
              </span>
            </a>

            {/* Email Quick Copy Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct Email</h4>
                  <p className="text-xs text-gray-400 font-mono">{emailAddress}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/[0.05] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-gray-300 max-w-md text-sm mb-6 leading-relaxed">
                    Thank you for reaching out, <span className="text-cyan-400 font-semibold">{formData.name}</span>. I have received your request and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", projectType: "Full-Stack Web App", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/80 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Inquiry Subject / Domain
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      <option value="Full-Stack Web App" className="bg-slate-900 text-white">Full-Stack Web Application</option>
                      <option value="3D Web & Interactive Motion" className="bg-slate-900 text-white">3D WebGL & Creative Interactive Experience</option>
                      <option value="UI/UX Architecture" className="bg-slate-900 text-white">Modern UI/UX & Design Systems</option>
                      <option value="Cloud Engineering & API" className="bg-slate-900 text-white">Cloud Engineering & Scalable APIs</option>
                      <option value="Full-Time Role / Hiring" className="bg-slate-900 text-white">Full-Time Engineering Role / Hiring</option>
                      <option value="Other Consultation" className="bg-slate-900 text-white">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timelines, or role details..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-gray-400">
                    Your details are securely kept and never shared.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
