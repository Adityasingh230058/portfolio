import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-500 text-sm">
            Available for Cybersecurity Engineering, Cloud Security, and Detection Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Primary Email */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Direct Email
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-mono font-bold text-zinc-900 hover:underline block break-all"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-zinc-100 text-xs font-mono text-zinc-700 border border-zinc-200 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* University Email */}
            <div className="p-4 rounded-xl bg-zinc-50/60 border border-zinc-200/70 text-xs font-mono space-y-1">
              <span className="text-zinc-400 text-[10px] uppercase font-bold block">Academic Email (NMIMS)</span>
              <span className="text-zinc-700 font-semibold">{personalInfo.academicEmail}</span>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/60 transition-all text-center space-y-1 group"
              >
                <Linkedin className="w-5 h-5 text-zinc-600 group-hover:text-[#0a66c2] mx-auto transition-colors" />
                <div className="text-xs font-bold text-zinc-900">LinkedIn</div>
                <div className="text-[10px] text-zinc-400 font-mono">Connect</div>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/60 transition-all text-center space-y-1 group"
              >
                <Github className="w-5 h-5 text-zinc-600 group-hover:text-zinc-950 mx-auto transition-colors" />
                <div className="text-xs font-bold text-zinc-900">GitHub</div>
                <div className="text-[10px] text-zinc-400 font-mono">Repositories</div>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50/60 border border-zinc-200/70 text-xs font-mono text-zinc-600 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>Location: {personalInfo.location}</span>
            </div>

          </div>

          {/* Right: Clean Message Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50/70 border border-zinc-200/90 space-y-5">
              <h3 className="text-sm font-bold text-zinc-900 font-mono">
                Send a Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                  <Check className="w-6 h-6 text-emerald-600 mx-auto" />
                  <div className="text-xs font-bold text-zinc-900">Opening Email Application...</div>
                  <p className="text-[11px] text-zinc-600">
                    Your message has been formatted to send directly to {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-600 block">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-zinc-600 block">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-600 block">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Cybersecurity / AWS Role / Project Inquiry"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-600 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details about the opportunity or inquiry..."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs font-mono transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
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
