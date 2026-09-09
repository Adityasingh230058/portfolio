import React from "react";
import { educationData } from "../data/portfolioData";

export const EditorialEducation: React.FC = () => {
  return (
    <section id="education" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              08
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              EDUCATION & ACADEMICS
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ ACADEMIC RECORD ]
          </span>
        </div>

        {/* Compact Education List */}
        <div className="space-y-3">
          {educationData.map((edu, idx) => (
            <div
              key={edu.institution}
              className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                <div>
                  <h3 className="text-sm sm:text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5]">
                    {edu.institution}
                  </h3>
                  <div className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa]">
                    {edu.degree} {edu.specialization && `— ${edu.specialization}`}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[#6e6d65] dark:text-[#a1a1aa]">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-xl bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b] font-bold">
                    {edu.gpaOrScore}
                  </span>
                </div>
              </div>

              {edu.relevantCoursework && (
                <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                  {edu.relevantCoursework.slice(0, 6).map((course) => (
                    <span key={course} className="px-2.5 py-0.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-[#141413] dark:text-[#f4f4f5]">
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
