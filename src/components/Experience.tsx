import React from "react";
import { experienceData } from "../data/portfolioData";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-xs space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 mb-1.5 inline-block">
                    {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-zinc-700 flex items-center gap-2 mt-0.5">
                    <span>{exp.company}</span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-zinc-500 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100/80 text-zinc-600 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs sm:text-sm text-zinc-600">
                <span className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider block">
                  Key Responsibilities:
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-zinc-400 font-mono mt-0.5">—</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Outcomes */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-2">
                <span className="text-[11px] font-mono font-bold text-zinc-700 uppercase tracking-wider block">
                  Verified Operational Impact:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-zinc-700 font-mono">
                  {exp.verifiedOutcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="p-2 rounded bg-white border border-zinc-200 text-[11px] leading-snug flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-mono text-zinc-400 mr-1.5">Tools:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-xs font-mono border border-zinc-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
