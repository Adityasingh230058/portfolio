import React, { useState, useRef, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { X, Copy, Check, Send, FileText, MapPin, Calendar, Briefcase } from "lucide-react";

interface SocStatusPillProps {
  onOpenResume: () => void;
}

export const SocStatusPill: React.FC<SocStatusPillProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 font-mono select-none" ref={cardRef}>
      {/* Expanded Monochrome SOC Telemetry Card with Emerald Green Dot */}
      {isOpen ? (
        <div className="w-[320px] sm:w-[360px] p-5 rounded-3xl bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 text-xs">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
                SOC STATUS TELEMETRY
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#6e6d65] dark:text-[#a1a1aa] hover:text-[#141413] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Status Badge */}
          <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] space-y-2 text-[#141413] dark:text-[#f4f4f5]">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#6e6d65] dark:text-[#a1a1aa]">STATUS:</span>
              <span className="font-bold uppercase text-[#141413] dark:text-[#f4f4f5]">AVAILABLE FOR ROLES</span>
            </div>

            <div className="space-y-1.5 pt-1 text-[11px] font-sans text-[#2a2a28] dark:text-[#d4d4d8]">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#141413] dark:text-[#f4f4f5] shrink-0" />
                <span>Cybersecurity & Cloud Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#141413] dark:text-[#f4f4f5] shrink-0" />
                <span>Mumbai, India • On-site / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#141413] dark:text-[#f4f4f5] shrink-0" />
                <span>Class of 2027 • Internships & Full-Time</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/10 text-[#141413] dark:text-[#f4f4f5] font-bold text-[11px] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onOpenResume();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b] font-bold text-[11px] hover:bg-[#2a2a28] dark:hover:bg-white transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>
            </div>

            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20for%20Aditya%20Singh`}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/10 text-[#141413] dark:text-[#f4f4f5] font-bold text-[11px] transition-colors cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Send Direct Email</span>
            </a>
          </div>

        </div>
      ) : (
        /* Floating Minimal Pill with Emerald Green Dot */
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-[#121215]/90 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer text-xs"
          title="Click to view Status & Quick Contact"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
            SOC STATUS: <span className="font-extrabold uppercase">AVAILABLE</span>
          </span>
        </button>
      )}
    </div>
  );
};
