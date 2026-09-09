import React from "react";
import { educationData } from "../data/portfolioData";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Education
          </h2>
        </div>

        {/* Education List - Timeline Removed */}
        <div className="space-y-4">
          {educationData.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200/60">
                <div>
                  <h3 className="text-base font-bold text-zinc-950">
                    {edu.institution}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 font-mono mt-0.5">
                    {edu.degree}
                    {edu.specialization && <span className="text-zinc-500 font-normal"> — {edu.specialization}</span>}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-white text-zinc-800 text-xs font-mono font-semibold border border-zinc-200">
                    {edu.gpaOrScore}
                  </span>
                </div>
              </div>

              {edu.relevantCoursework && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-700">
                    {edu.relevantCoursework.map((course) => (
                      <span key={course} className="px-2 py-0.5 rounded bg-white border border-zinc-200/80">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
