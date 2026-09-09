import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { FileText, Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";

interface EditorialHeaderProps {
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  currentSlide,
  onSelectSlide,
  onOpenResume,
  isDark,
  onToggleTheme,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { name: "Intro", slideIndex: 0 },
    { name: "Highlights", slideIndex: 1 },
    { name: "Skills", slideIndex: 2 },
    { name: "About", slideIndex: 3 },
    { name: "Experience", slideIndex: 4 },
    { name: "Projects", slideIndex: 5 },
    { name: "Certs", slideIndex: 6 },
    { name: "Education", slideIndex: 7 },
    { name: "Contact", slideIndex: 8 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#faf9f5]/90 dark:bg-[#09090b]/90 backdrop-blur-md transition-all duration-500 ease-out ${
        currentSlide === 0
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* Top Student Ribbon */}
      <div className="hidden sm:flex items-center justify-between px-6 py-1 text-[11px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-semibold text-[#141413] dark:text-[#f4f4f5]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            B.Tech Cybersecurity Student
          </span>
          <span>•</span>
          <span>NMIMS University (MPSTME)</span>
          <span>•</span>
          <span>Class of 2027</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Former Intern @ Vodafone Idea Ltd.</span>
          <span>•</span>
          <span>Mumbai, India</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand - Clean Single Line Layout */}
        <button
          onClick={() => onSelectSlide(0)}
          className="group flex items-center gap-2 text-left cursor-pointer whitespace-nowrap"
        >
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-[#141413] dark:text-[#f4f4f5]">
            Aditya Singh
          </span>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden md:inline">
            / Cybersecurity & Cloud
          </span>
        </button>

        {/* Horizontal Section Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-mono">
          {sections.map((sec, idx) => (
            <button
              key={sec.name}
              onClick={() => onSelectSlide(idx)}
              className={`relative py-1 transition-all cursor-pointer font-medium ${
                currentSlide === idx
                  ? "text-[#141413] dark:text-[#f4f4f5] font-bold"
                  : "text-[#6e6d65] dark:text-[#a1a1aa] hover:text-[#141413] dark:hover:text-[#f4f4f5]"
              }`}
            >
              <span>{sec.name}</span>
              {currentSlide === idx && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#141413] dark:bg-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Night Mode Icon-Only Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-white/80 dark:bg-[#18181b] text-[#141413] dark:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer shadow-xs flex items-center justify-center"
            title={isDark ? "Switch to Light Paper Mode" : "Switch to Night Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#141413]" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#141413] dark:bg-[#f4f4f5] hover:bg-[#2a2a28] dark:hover:bg-white text-[#faf9f5] dark:text-[#09090b] text-xs font-mono font-medium transition-all shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/80 dark:bg-[#18181b] text-[#141413] dark:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-xs"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/80 dark:bg-[#18181b] text-[#141413] dark:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-xs"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/80 dark:bg-[#18181b] text-[#141413] dark:text-[#f4f4f5]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf9f5] dark:bg-[#09090b] px-4 py-3 space-y-1 font-mono text-xs shadow-md">
          <div className="grid grid-cols-3 gap-2">
            {sections.map((sec, idx) => (
              <button
                key={sec.name}
                onClick={() => {
                  onSelectSlide(idx);
                  setMobileOpen(false);
                }}
                className={`py-2 px-1 text-center transition-colors ${
                  currentSlide === idx
                    ? "font-bold text-[#141413] dark:text-emerald-400 underline"
                    : "text-[#6e6d65] dark:text-[#a1a1aa]"
                }`}
              >
                <span>{sec.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
