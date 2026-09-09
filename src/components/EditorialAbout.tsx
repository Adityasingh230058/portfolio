import React from "react";
import { personalInfo } from "../data/portfolioData";

export const EditorialAbout: React.FC = () => {
  return (
    <section id="about" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              ABOUT ME
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ ACADEMIC FOUNDATION & FOCUS ]
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          
          {/* Column 1: Narrative & Details */}
          <div className="lg:col-span-7 space-y-3 text-sm leading-relaxed font-sans">
            <p className="text-base sm:text-lg font-serif italic text-[#141413] dark:text-white leading-snug">
              "Focused on building practical, deterministic defensive security systems and reliable cloud architectures."
            </p>
            <p className="text-xs sm:text-sm text-[#6e6d65] dark:text-[#a1a1aa]">
              I am a Cybersecurity and Cloud Engineering undergraduate student at <strong className="text-[#141413] dark:text-white font-semibold">NMIMS University (MPSTME)</strong> in Mumbai, graduating in 2027. My technical interests revolve around kernel telemetry analysis (ETW), MITRE ATT&CK detection engines, AWS serverless pipelines, and network traffic classification.
            </p>

            {/* Academic Details Box */}
            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#121215]/80 space-y-2 text-xs font-mono">
              <div className="text-[10px] text-[#9e9d93] dark:text-[#71717a] uppercase tracking-wider font-bold">
                [ ACADEMIC RECORD ]
              </div>
              <div className="grid grid-cols-2 gap-2 text-[#141413] dark:text-[#f4f4f5]">
                <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-[#6e6d65] dark:text-[#a1a1aa] block text-[10px]">UNIVERSITY</span>
                  <span className="font-bold text-[11px]">NMIMS (MPSTME)</span>
                </div>
                <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-[#6e6d65] dark:text-[#a1a1aa] block text-[10px]">DEGREE</span>
                  <span className="font-bold text-[11px]">B.Tech Cybersecurity</span>
                </div>
                <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-[#6e6d65] dark:text-[#a1a1aa] block text-[10px]">CGPA</span>
                  <span className="font-bold text-[11px]">3.08 / 4.0</span>
                </div>
                <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-[#6e6d65] dark:text-[#a1a1aa] block text-[10px]">GRADUATION</span>
                  <span className="font-bold text-[11px]">Class of 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Core Areas */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] uppercase tracking-wider font-bold">
              [ CORE SPECIALIZATIONS ]
            </div>

            <div className="space-y-1.5">
              {[
                {
                  id: "01",
                  title: "Threat Detection & EDR",
                  desc: "Evaluating multi-stage MITRE ATT&CK attack patterns and parent-child process chains over kernel ETW events."
                },
                {
                  id: "02",
                  title: "AWS Cloud Infrastructure",
                  desc: "Serverless ETL workflows with AWS Glue, Amazon S3 Parquet data lake, Athena SQL, and QuickSight."
                },
                {
                  id: "03",
                  title: "Security Automation",
                  desc: "Python scripts for automated configuration validation and compliance workflows at Vodafone Idea."
                },
                {
                  id: "04",
                  title: "Machine Learning Security",
                  desc: "Random Forest models achieving 99.7% validation accuracy for real-time network botnet traffic detection."
                }
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-2xl bg-white/80 dark:bg-[#121215]/80 space-y-0.5"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#141413] dark:text-[#f4f4f5]">{item.title}</span>
                    <span className="text-[#9e9d93] dark:text-[#71717a]">[{item.id}]</span>
                  </div>
                  <p className="text-[11px] text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
