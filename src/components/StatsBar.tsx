import React from "react";
import { statsMetrics } from "../data/portfolioData";

export const StatsBar: React.FC = () => {
  return (
    <div className="border-b border-zinc-100 bg-zinc-50/50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsMetrics.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
