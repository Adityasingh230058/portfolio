import React from "react";
import { statsMetrics } from "../data/portfolioData";

export const EditorialStats: React.FC = () => {
  return (
    <section id="stats" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:shadow-md transition-all">
            <div className="text-xs font-mono text-[#9e9d93] dark:text-[#71717a] uppercase">[METRIC 01]</div>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              99.7%
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">
              Detection Accuracy
            </div>
            <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
              Random Forest real-time network traffic classifier for automated bot detection.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:shadow-md transition-all">
            <div className="text-xs font-mono text-[#9e9d93] dark:text-[#71717a] uppercase">[METRIC 02]</div>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              84+
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">
              MITRE ATT&CK Rules
            </div>
            <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
              Heuristic detection rules evaluated over Windows ETW kernel event streams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:shadow-md transition-all">
            <div className="text-xs font-mono text-[#9e9d93] dark:text-[#71717a] uppercase">[METRIC 03]</div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              6+
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">
              Cloud Certifications
            </div>
            <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
              AWS Well-Architected, AWS Network Firewall, IAM & Google Cloud credentials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2 hover:shadow-md transition-all">
            <div className="text-xs font-mono text-[#9e9d93] dark:text-[#71717a] uppercase">[METRIC 04]</div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              Vodafone
            </div>
            <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono">
              Cybersecurity Intern
            </div>
            <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
              Built Python configuration validation tools and automated compliance workflows.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
