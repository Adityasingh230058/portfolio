import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "../types";

export const EditorialProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Detection & EDR", "Cloud & AWS", "AI & ML Security", "Web Engineering"];

  const filtered = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              06
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b] font-bold shadow-xs"
                    : "bg-white/80 dark:bg-[#121215]/80 text-[#6e6d65] dark:text-[#a1a1aa] hover:text-[#141413] dark:hover:text-[#f4f4f5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.slice(0, 3).map((proj: Project, pIdx) => (
            <div
              key={proj.id}
              className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#121215]/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.03] text-[#141413] dark:text-[#f4f4f5] font-bold text-[10px]">
                    0{pIdx + 1} // {proj.category}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5] leading-tight">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans line-clamp-2 leading-relaxed">
                  {proj.problemSolved}
                </p>

                {proj.metrics && (
                  <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[11px] font-mono text-[#141413] dark:text-[#f4f4f5] flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">●</span>
                    <span className="font-semibold">{proj.metrics}</span>
                  </div>
                )}
              </div>

              {/* Stack & Link */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#6e6d65] dark:text-[#a1a1aa] truncate max-w-[150px]">
                  {proj.techStack.slice(0, 3).join(", ")}
                </span>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#141413] dark:text-[#f4f4f5] hover:underline"
                  >
                    <Github className="w-3 h-3" />
                    <span>Code</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
