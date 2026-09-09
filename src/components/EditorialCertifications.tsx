import React from "react";
import { certificationsData } from "../data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export const EditorialCertifications: React.FC = () => {
  return (
    <section id="certifications" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              07
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              CERTIFICATIONS & CREDENTIALS
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ AWS & GOOGLE CLOUD ]
          </span>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.name}
              className="p-4 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] font-bold text-[#141413] dark:text-[#f4f4f5] text-[10px]">
                    {cert.issuer}
                  </span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-display font-bold text-[#141413] dark:text-[#f4f4f5] leading-snug">
                  {cert.name}
                </h3>

                <p className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] font-sans">
                  {cert.domain}
                </p>
              </div>

              <div className="pt-2 text-[9px] font-mono text-[#9e9d93] dark:text-[#71717a] flex justify-between">
                <span>Verified Credential</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
