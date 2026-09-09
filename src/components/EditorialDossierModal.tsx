import React from "react";
import { personalInfo, experienceData, projectsData, educationData, certificationsData, skillCategories } from "../data/portfolioData";
import { X, Printer, FileText } from "lucide-react";

interface EditorialDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditorialDossierModal: React.FC<EditorialDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141413]/70 dark:bg-black/80 backdrop-blur-sm overflow-y-auto font-sans">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#121215] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Toolbar (Borderless) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-black/[0.02] dark:bg-white/[0.02] shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#141413] dark:text-[#f4f4f5]" />
            <span className="font-bold text-[#141413] dark:text-[#f4f4f5]">ADITYA SINGH — RESUME / CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] hover:bg-black/10 text-xs text-[#141413] dark:text-[#f4f4f5] font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#6e6d65] dark:text-[#a1a1aa] hover:text-[#141413] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-6 bg-white dark:bg-[#121215] text-[#141413] dark:text-[#f4f4f5] text-xs sm:text-sm leading-relaxed">
          
          {/* Header */}
          <div className="text-center space-y-1.5 pb-4">
            <h1 className="text-3xl font-display font-extrabold tracking-tight text-[#141413] dark:text-[#f4f4f5]">
              ADITYA SINGH
            </h1>
            <p className="text-xs font-mono font-bold text-[#6e6d65] dark:text-[#a1a1aa]">
              B.Tech Computer Science and Engineering (Cybersecurity) • Class of 2027
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] pt-1">
              <span>Mumbai, India</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-[#141413] dark:text-emerald-400 underline">{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#141413] dark:text-emerald-400 underline">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#141413] dark:text-emerald-400 underline">LinkedIn</a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5] uppercase tracking-wider">
              [ EDUCATION ]
            </h2>
            <div className="space-y-2.5 font-sans">
              <div>
                <div className="flex justify-between font-bold text-[#141413] dark:text-[#f4f4f5]">
                  <span>Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS University</span>
                  <span className="font-mono text-xs">2023 – 2027</span>
                </div>
                <div className="text-[#6e6d65] dark:text-[#a1a1aa] text-xs">B.Tech Computer Science and Engineering (Cybersecurity) | CGPA: 3.08 / 4.0</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#141413] dark:text-[#f4f4f5]">
                  <span>Ramniranjan Jhunjhunwala College of Arts, Science & Commerce</span>
                  <span className="font-mono text-xs">2019 – 2021</span>
                </div>
                <div className="text-[#6e6d65] dark:text-[#a1a1aa] text-xs">Higher Secondary Certificate (HSC) — Science | 74.00%</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#141413] dark:text-[#f4f4f5]">
                  <span>Don Bosco High School & Junior College</span>
                  <span className="font-mono text-xs">2019</span>
                </div>
                <div className="text-[#6e6d65] dark:text-[#a1a1aa] text-xs">Secondary School Certificate (SSC) | 70.20%</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5] uppercase tracking-wider">
              [ EXPERIENCE ]
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.company} className="space-y-1 font-sans">
                <div className="flex justify-between font-bold text-[#141413] dark:text-[#f4f4f5]">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-xs">{exp.period}</span>
                </div>
                <div className="text-[#6e6d65] dark:text-[#a1a1aa] text-xs font-mono">On-site Enterprise Telecom Security • {exp.location}</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#2a2a28] dark:text-[#d4d4d8] pt-1 pl-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5] uppercase tracking-wider">
              [ PROJECTS ]
            </h2>
            <div className="space-y-2.5 font-sans">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="font-bold text-[#141413] dark:text-[#f4f4f5] flex items-center justify-between">
                    <span>{p.title} ({p.category})</span>
                    <span className="font-mono text-xs text-[#6e6d65] dark:text-[#a1a1aa]">Role: {p.role}</span>
                  </div>
                  <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa]">{p.problemSolved}</p>
                  <p className="text-xs text-[#2a2a28] dark:text-[#d4d4d8] font-mono"><strong className="text-[#141413] dark:text-white">Tech:</strong> {p.techStack.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5] uppercase tracking-wider">
              [ CERTIFICATIONS ]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs font-sans text-[#2a2a28] dark:text-[#d4d4d8]">
              {certificationsData.map((c) => (
                <div key={c.name}>• <strong className="text-[#141413] dark:text-white">{c.issuer}:</strong> {c.name}</div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5] uppercase tracking-wider">
              [ SKILLS ]
            </h2>
            <div className="space-y-1 text-xs text-[#2a2a28] dark:text-[#d4d4d8] font-sans">
              <p><strong className="text-[#141413] dark:text-white font-mono">Languages:</strong> Python, C++, SQL, Java (OOP), JavaScript.</p>
              <p><strong className="text-[#141413] dark:text-white font-mono">Cybersecurity:</strong> Threat Modelling, MITRE ATT&CK, EDR Rule Evaluation, ETW Parsing, VAPT, Wireshark, Digital Forensics, Linux.</p>
              <p><strong className="text-[#141413] dark:text-white font-mono">Cloud & Data:</strong> AWS (S3, Glue, Athena, QuickSight, IAM, Network Firewall), Azure, Serverless ETL.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
