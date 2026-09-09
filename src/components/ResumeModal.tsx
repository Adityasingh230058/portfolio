import React from "react";
import { personalInfo } from "../data/portfolioData";
import { X, Printer, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-50 border-b border-zinc-200 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-700" />
            <span className="font-bold text-zinc-900 text-xs font-mono">Aditya Singh — Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-100 text-xs font-mono text-zinc-800 border border-zinc-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-white text-zinc-800 text-xs sm:text-sm font-sans leading-relaxed">
          
          {/* Header */}
          <div className="text-center space-y-1 pb-4 border-b border-zinc-200">
            <h1 className="text-2xl font-extrabold text-zinc-950 font-mono tracking-tight">
              ADITYA SINGH
            </h1>
            <p className="text-xs font-semibold text-zinc-600 font-mono">
              B.Tech Computer Science & Engineering (Cybersecurity) • Class of 2027
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 text-xs text-zinc-500 font-mono pt-1">
              <span>Mumbai, India</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-zinc-900 underline">{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline">LinkedIn</a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider pb-1 border-b border-zinc-200">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-bold text-zinc-950 text-xs sm:text-sm">
                  <span>MPSTME, NMIMS University</span>
                  <span>2023 – 2027</span>
                </div>
                <div className="text-zinc-600 text-xs">B.Tech Computer Science and Engineering (Cybersecurity) | CGPA: 3.08 / 4.0</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-zinc-950 text-xs sm:text-sm">
                  <span>Ramniranjan Jhunjhunwala College</span>
                  <span>2019 – 2021</span>
                </div>
                <div className="text-zinc-600 text-xs">HSC (Science) | 74.00%</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-zinc-950 text-xs sm:text-sm">
                  <span>Don Bosco High School & Junior College</span>
                  <span>2019</span>
                </div>
                <div className="text-zinc-600 text-xs">Secondary School Certificate (SSC) | 70.20%</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider pb-1 border-b border-zinc-200">
              Experience
            </h2>
            <div>
              <div className="flex justify-between font-bold text-zinc-950 text-xs sm:text-sm">
                <span>Cybersecurity Intern — Vodafone Idea Ltd.</span>
                <span>25 May 2026 – 10 Jul 2026</span>
              </div>
              <div className="text-zinc-500 text-xs font-mono">On-site • Telecom Enterprise Security</div>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 mt-1.5 pl-1">
                <li>Built Python-based automation tools for configuration validation and compliance workflows.</li>
                <li>Supported cloud orchestration and cloud infrastructure automation.</li>
                <li>Performed testing, debugging, and documentation in a telecom enterprise environment.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider pb-1 border-b border-zinc-200">
              Engineering Projects
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="font-bold text-zinc-900 text-xs sm:text-sm">
                  Modular Threat Detection Engine (EDR / XDR) — Detection Core
                </div>
                <p className="text-xs text-zinc-600">
                  Engineered the detection engine core ingesting Windows ETW telemetry, evaluating 84+ declarative MITRE ATT&CK rules, reconstructing process trees, and executing active containment.
                </p>
              </div>

              <div>
                <div className="font-bold text-zinc-900 text-xs sm:text-sm">
                  AWS Serverless Data Pipeline for Analytics
                </div>
                <p className="text-xs text-zinc-600">
                  Engineered a serverless ETL pipeline using AWS Glue and S3, enabling SQL-based analysis via Amazon Athena and interactive dashboards with Amazon QuickSight.
                </p>
              </div>

              <div>
                <div className="font-bold text-zinc-900 text-xs sm:text-sm">
                  AI-Based Network Bot Detection System
                </div>
                <p className="text-xs text-zinc-600">
                  Developed a Random Forest–based classifier achieving 99.7% accuracy in real-time network traffic classification and anomaly detection.
                </p>
              </div>

              <div>
                <div className="font-bold text-zinc-900 text-xs sm:text-sm">
                  Formula 1 Fan Website & Telemetry Platform
                </div>
                <p className="text-xs text-zinc-600">
                  Multi-page Formula 1 statistics and team profiles web application deployed on Render for global high availability.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider pb-1 border-b border-zinc-200">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-600">
              <div>• AWS: Practitioner Knowledge</div>
              <div>• AWS: Well-Architected Proficient</div>
              <div>• AWS: Network Firewall AWS</div>
              <div>• AWS: Identity & Access Management (IAM) Foundations</div>
              <div>• Google Cloud: Network and Security Fundamentals</div>
              <div>• Google Cloud: Cloud Computing Fundamental</div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider pb-1 border-b border-zinc-200">
              Skills
            </h2>
            <div className="space-y-1 text-xs text-zinc-600">
              <p><strong className="text-zinc-900">Languages:</strong> Python, C++, SQL, Java (OOP), JavaScript.</p>
              <p><strong className="text-zinc-900">Cybersecurity:</strong> Threat Modelling, MITRE ATT&CK, Kali Linux, Wireshark, Digital Forensics, VAPT, Cryptography, Firewalls, InfoSec.</p>
              <p><strong className="text-zinc-900">Cloud & Data:</strong> AWS (S3, Glue, Athena, QuickSight, IAM, Network Firewall), Microsoft Azure, MySQL.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
