import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Github, ExternalLink } from "lucide-react";

export const GitHubActivitySection: React.FC = () => {
  return (
    <section className="py-16 border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-zinc-950 font-mono">
                  github.com/Adityasingh230058
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                  Public Profile
                </span>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5 font-sans">
                Explore engineering repositories, detection rule sets, and serverless data pipeline implementations.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs font-mono transition-all shrink-0"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
