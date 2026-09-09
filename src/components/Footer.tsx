import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white border-t border-zinc-100 text-zinc-500 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="font-bold text-zinc-900">Aditya Singh</span> — Cybersecurity & Cloud Engineer
          </div>

          <div className="flex items-center gap-4 text-zinc-600">
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              GitHub
            </a>
            <span>•</span>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">
              LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-zinc-900">
              Email
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-400 text-[11px]">
              © {new Date().getFullYear()} Aditya Singh
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
