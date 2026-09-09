import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Copy, Check, Send, ArrowUpRight, Github, Linkedin } from "lucide-react";

export const EditorialContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const url = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || `Inquiry from ${form.name}`)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              09
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              GET IN TOUCH
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ CONTACT & OPPORTUNITIES ]
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="space-y-1">
              <h3 className="text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5]">
                Available for Cybersecurity & Cloud Roles
              </h3>
              <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
                Reach out directly regarding cybersecurity engineering, AWS cloud roles, detection engineering, or internships.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 font-mono text-xs">
              <div className="text-[10px] text-[#9e9d93] dark:text-[#71717a] uppercase font-bold tracking-wider">
                [ DIRECT EMAIL ]
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs sm:text-sm font-bold text-[#141413] dark:text-emerald-400 hover:underline block break-all"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs text-[#141413] dark:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="font-bold text-emerald-500 text-[11px]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#6e6d65] dark:text-[#a1a1aa]" />
                    <span className="text-[11px]">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* External Links */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#141413] dark:text-[#f4f4f5]" />
                  <span className="font-bold text-[#141413] dark:text-[#f4f4f5] text-[11px]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#6e6d65] dark:text-[#a1a1aa]" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#141413] dark:text-[#f4f4f5]" />
                  <span className="font-bold text-[#141413] dark:text-[#f4f4f5] text-[11px]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#6e6d65] dark:text-[#a1a1aa]" />
              </a>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-3">
              <h4 className="text-sm font-display font-bold text-[#141413] dark:text-[#f4f4f5]">
                Send a Direct Message
              </h4>

              {sent ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-center space-y-1 font-mono text-xs">
                  <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                  <div className="font-bold text-[#141413] dark:text-emerald-300">Opening Mail App...</div>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-2 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="space-y-0.5">
                      <label className="text-[#6e6d65] dark:text-[#a1a1aa] uppercase text-[9px] font-bold block">NAME</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[#141413] dark:text-[#f4f4f5] focus:outline-none focus:ring-1 focus:ring-[#141413] dark:focus:ring-white text-xs"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <label className="text-[#6e6d65] dark:text-[#a1a1aa] uppercase text-[9px] font-bold block">EMAIL</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[#141413] dark:text-[#f4f4f5] focus:outline-none focus:ring-1 focus:ring-[#141413] dark:focus:ring-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <label className="text-[#6e6d65] dark:text-[#a1a1aa] uppercase text-[9px] font-bold block">MESSAGE</label>
                    <textarea
                      rows={3}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Opportunity details or inquiry..."
                      className="w-full px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[#141413] dark:text-[#f4f4f5] focus:outline-none focus:ring-1 focus:ring-[#141413] dark:focus:ring-white resize-none text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#141413] dark:bg-[#f4f4f5] hover:bg-[#2a2a28] dark:hover:bg-white text-[#faf9f5] dark:text-[#09090b] font-bold text-xs tracking-wider transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-3 h-3" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
