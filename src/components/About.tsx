import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Shield, Cloud, Terminal, Binary, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      icon: <Shield className="w-4 h-4 text-zinc-700" />,
      title: "Threat Detection & EDR Engineering",
      desc: "Deterministic rule evaluation systems that ingest Windows ETW telemetry, parse normalized event schemas, and correlate multi-stage MITRE ATT&CK attack patterns."
    },
    {
      icon: <Cloud className="w-4 h-4 text-zinc-700" />,
      title: "AWS Cloud Infrastructure & Serverless",
      desc: "Resilient serverless data pipelines (AWS Glue, S3, Athena, QuickSight), structured Parquet partitioning, and IAM least-privilege policy governance."
    },
    {
      icon: <Terminal className="w-4 h-4 text-zinc-700" />,
      title: "Security Automation & Compliance",
      desc: "Python automation scripts for network configuration validation and compliance workflows, eliminating manual inspection overhead in telecom enterprise environments."
    },
    {
      icon: <Binary className="w-4 h-4 text-zinc-700" />,
      title: "Applied Machine Learning Security",
      desc: "High-precision Random Forest classifiers (achieving 99.7% validation accuracy) for real-time network traffic flow anomaly and botnet detection."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Title */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Background & Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Text */}
          <div className="lg:col-span-6 space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Cybersecurity and Cloud Engineering undergraduate at <strong className="text-zinc-900 font-semibold">NMIMS University (MPSTME)</strong>, graduating in 2027. My work focuses on building practical security systems with minimal external overhead, deterministic logic, and measurable accuracy.
            </p>
            <p>
              During my cybersecurity internship at <strong className="text-zinc-900 font-semibold">Vodafone Idea Ltd.</strong>, I built Python-based automation tools for network and cloud configuration validation, standardizing compliance checks across telecom enterprise systems.
            </p>
            <p>
              My technical interests include kernel telemetry parsing (ETW), MITRE ATT&CK rule evaluation engines, AWS serverless ETL architectures, and network traffic classification.
            </p>

            {/* Quick Details Box */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-xs font-mono text-zinc-700 mt-6">
              <div className="flex justify-between py-1 border-b border-zinc-200/60">
                <span className="text-zinc-500">Degree</span>
                <span className="text-zinc-900 font-sans font-medium">B.Tech CSE (Cybersecurity)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60">
                <span className="text-zinc-500">University</span>
                <span className="text-zinc-900">MPSTME, NMIMS University</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-200/60">
                <span className="text-zinc-500">CGPA</span>
                <span className="text-zinc-900 font-semibold">{personalInfo.cgpa}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Location</span>
                <span className="text-zinc-900 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Specializations Grid */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Core Technical Focus
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {engineeringPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs transition-all space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xs font-bold text-zinc-900">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Tooling */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1.5 mt-3">
              <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
                Primary Tooling & Protocols
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-700">
                {["AWS S3 & Glue", "Amazon Athena", "Amazon QuickSight", "ETW Telemetry", "MITRE ATT&CK", "Python", "C++", "SQL", "Wireshark", "Linux"].map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded bg-white border border-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
