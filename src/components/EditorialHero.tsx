import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Shield, Cloud, Terminal, Cpu, FileText } from "lucide-react";

interface EditorialHeroProps {
  onOpenResume: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="w-full bg-transparent relative">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-7 w-full">
        
        {/* Top Student Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="font-semibold text-[#141413] dark:text-[#f4f4f5] tracking-wide">
            CYBERSECURITY & CLOUD ENGINEERING STUDENT • CLASS OF 2027
          </span>
        </div>

        {/* Main Headline - Clean Modern Sans Proportions */}
        <div className="space-y-3 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black text-[#141413] dark:text-[#f4f4f5] tracking-tight leading-[1.05]">
            Aditya Singh
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[#2a2a28] dark:text-[#d4d4d8] font-normal leading-snug max-w-4xl pt-1">
            "Building practical threat detection engines, AWS serverless pipelines, and security automation tools."
          </p>

          <p className="text-xs sm:text-sm text-[#6e6d65] dark:text-[#a1a1aa] leading-relaxed max-w-3xl font-sans pt-1">
            Undergraduate student in Cybersecurity at <strong className="text-[#141413] dark:text-white font-semibold">NMIMS University (MPSTME)</strong> with real-world internship experience at <strong className="text-[#141413] dark:text-white font-semibold">Vodafone Idea Ltd.</strong> Focused on MITRE ATT&CK threat detection, AWS cloud data engineering, and automated Python compliance tools.
          </p>
        </div>

        {/* 4 Focus Pillars (Horizontal 4-Column Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:bg-white dark:hover:bg-[#18181b] transition-all">
            <div className="flex items-center justify-between">
              <Shield className="w-4 h-4 text-[#141413] dark:text-emerald-400" />
              <span className="text-[10px] font-mono text-[#9e9d93] dark:text-[#71717a]">[01]</span>
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">EDR & Threat Detection</div>
            <div className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] leading-snug font-sans">Rule Evaluation, ETW, MITRE ATT&CK</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:bg-white dark:hover:bg-[#18181b] transition-all">
            <div className="flex items-center justify-between">
              <Cloud className="w-4 h-4 text-[#141413] dark:text-sky-400" />
              <span className="text-[10px] font-mono text-[#9e9d93] dark:text-[#71717a]">[02]</span>
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">AWS Cloud Engineering</div>
            <div className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] leading-snug font-sans">Glue, S3, Athena, QuickSight, IAM</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:bg-white dark:hover:bg-[#18181b] transition-all">
            <div className="flex items-center justify-between">
              <Terminal className="w-4 h-4 text-[#141413] dark:text-amber-400" />
              <span className="text-[10px] font-mono text-[#9e9d93] dark:text-[#71717a]">[03]</span>
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">Security Automation</div>
            <div className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] leading-snug font-sans">Python Automation at Vodafone Idea</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:bg-white dark:hover:bg-[#18181b] transition-all">
            <div className="flex items-center justify-between">
              <Cpu className="w-4 h-4 text-[#141413] dark:text-purple-400" />
              <span className="text-[10px] font-mono text-[#9e9d93] dark:text-[#71717a]">[04]</span>
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">Applied ML Security</div>
            <div className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] leading-snug font-sans">99.7% Bot Detection Classifier</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141413] dark:bg-[#f4f4f5] hover:bg-[#2a2a28] dark:hover:bg-white text-[#faf9f5] dark:text-[#09090b] font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
        </div>

      </div>
    </section>
  );
};