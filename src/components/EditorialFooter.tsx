import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";

export const EditorialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#faf9f5] border-t border-[#e5e3d8] text-xs font-mono text-[#6e6d65]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-bold text-[#141413]">
              Aditya Singh — Cybersecurity & Cloud Engineering Student
            </div>
            <div className="text-[11px] text-[#9e9d93]">
              MPSTME, NMIMS University • Class of 2027 • Mumbai, India
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#141413]">
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <span>•</span>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
              Email
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#9e9d93]">
              © {new Date().getFullYear()} Aditya Singh
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white hover:bg-[#f3f1e9] border border-[#e5e3d8] text-[#141413] transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
