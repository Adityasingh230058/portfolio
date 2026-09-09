import React from "react";
import { experienceData } from "../data/portfolioData";
import { Calendar, MapPin } from "lucide-react";

export const EditorialExperience: React.FC = () => {
  return (
    <section id="experience" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              05
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              WORK EXPERIENCE
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ INTERNSHIP // VODAFONE IDEA LTD. ]
          </span>
        </div>

        {/* Experience Card */}
        {experienceData.map((exp) => (
          <div
            key={exp.company}
            className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-4"
          >
            {/* Metadata Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div>
                <div className="text-[10px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] uppercase mb-0.5">
                  TELECOM CYBERSECURITY INTERNSHIP
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#141413] dark:text-[#f4f4f5]">
                  {exp.role} — {exp.company}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa]">
                <span className="px-2.5 py-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] flex items-center gap-1 text-[#141413] dark:text-[#f4f4f5]">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Narrative & Responsibilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7 space-y-2 font-sans">
                <div className="text-[11px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] uppercase font-bold tracking-wider">
                  [ KEY RESPONSIBILITIES ]
                </div>
                <ul className="space-y-1.5 text-xs text-[#2a2a28] dark:text-[#d4d4d8]">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-xs font-mono text-[#9e9d93] dark:text-[#71717a] mt-0.5">0{idx + 1}.</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Impact Box */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-[11px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] uppercase font-bold tracking-wider">
                  [ KEY OUTCOMES ]
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  {exp.verifiedOutcomes.map((out, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span className="text-[#141413] dark:text-[#f4f4f5] text-[11px] leading-snug">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] mr-1.5">STACK:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-[11px] font-mono text-[#141413] dark:text-[#f4f4f5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
