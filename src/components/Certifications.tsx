import React from "react";
import { certificationsData } from "../data/portfolioData";
import { Award, CheckCircle2 } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-zinc-100 bg-zinc-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Verified Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-zinc-500 text-sm">
            AWS and Google Cloud certifications focusing on cloud security architecture, IAM, and networking.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.name}
              className="p-5 rounded-xl bg-white border border-zinc-200/90 shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <h3 className="text-xs font-bold text-zinc-950 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  {cert.domain}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>Verified Curriculum</span>
                <span className="text-zinc-700 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
