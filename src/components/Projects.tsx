import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "../types";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Detection & EDR", "Cloud & AWS", "AI & ML Security", "Web Engineering"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Systems & Code
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-sm">
            Technical engineering projects across Threat Detection, AWS Data Pipelines, and Applied Machine Learning.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {project.category}
                  </span>
                  {project.tier === 1 && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-white">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500">
                    Role: {project.role}
                  </div>
                </div>

                {/* Problem */}
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-600 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-800 uppercase block">Problem:</span>
                  <p>{project.problemSolved}</p>
                </div>

                {/* Architecture Points */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider block">
                    Architecture Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {project.architectureHighlights.slice(0, 3).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-zinc-400 font-mono mt-0.5">&rsaquo;</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metric */}
                {project.metrics && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-md border border-emerald-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

              </div>

              {/* Footer / Links */}
              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[11px] font-mono border border-zinc-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-900 hover:underline"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
