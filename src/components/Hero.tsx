import React from "react";
import { ArrowRight, Download, Github, Linkedin, Shield, Cloud, Terminal, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="space-y-6 max-w-3xl">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/90 border border-zinc-200 text-zinc-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>CYBERSECURITY & AWS CLOUD ENGINEER</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-zinc-600">
              {personalInfo.role}
            </p>
          </div>

          {/* Description / Summary */}
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Undergraduate in Cybersecurity at <span className="font-semibold text-zinc-900">NMIMS University (MPSTME)</span> with practical enterprise experience at <span className="font-semibold text-zinc-900">Vodafone Idea Ltd.</span> Specializing in MITRE ATT&CK threat detection engines, AWS serverless data pipelines, and security automation.
          </p>

          {/* Core Focus Tags */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-zinc-700">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80">
              <Shield className="w-3.5 h-3.5 text-zinc-600" />
              EDR / Detection Engineering
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80">
              <Cloud className="w-3.5 h-3.5 text-zinc-600" />
              AWS (S3, Glue, Athena, QuickSight)
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200/80">
              <Terminal className="w-3.5 h-3.5 text-zinc-600" />
              Python Automation & Compliance
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs font-mono transition-all shadow-xs"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-xs font-mono border border-zinc-300 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-zinc-600" />
              <span>Resume / CV</span>
            </button>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:bg-zinc-50 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-zinc-600 hover:text-[#0a66c2] border border-zinc-200 hover:bg-zinc-50 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
