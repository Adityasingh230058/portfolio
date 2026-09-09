import React from "react";
import { skillCategories } from "../data/portfolioData";
import { Check } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-zinc-500 text-sm">
            Core technologies verified across academic labs, certifications, and project implementations.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 space-y-3"
            >
              <div className="pb-2 border-b border-zinc-200/60">
                <h3 className="text-sm font-bold text-zinc-950">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-mono text-zinc-800 shadow-2xs"
                  >
                    <Check className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
