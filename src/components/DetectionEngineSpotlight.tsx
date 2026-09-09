import React, { useState } from "react";
import { Shield, GitBranch, Cpu, Lock, Terminal, Layers, CheckCircle2 } from "lucide-react";

export const DetectionEngineSpotlight: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"architecture" | "rules" | "correlation" | "containment">("architecture");

  const pipelineStages = [
    {
      step: "01",
      title: "Telemetry Ingestion",
      desc: "Receives raw kernel ETW event streams from endpoint collector.",
      badge: "ETW Stream"
    },
    {
      step: "02",
      title: "Schema Normalization",
      desc: "Parses raw events into structured JSON schemas (Panopticon 0.2).",
      badge: "Parser"
    },
    {
      step: "03",
      title: "Rule Evaluation",
      desc: "Evaluates 84+ declarative heuristic rules mapped to MITRE ATT&CK.",
      badge: "Rule Engine"
    },
    {
      step: "04",
      title: "Stateful Correlation",
      desc: "Tracks process tree parent-child lineages and temporal anomalies.",
      badge: "Process Lineage"
    },
    {
      step: "05",
      title: "Alert & Containment",
      desc: "Calculates confidence scores, extracts memory artifacts, and triggers kill hooks.",
      badge: "Active Response"
    }
  ];

  return (
    <section id="detection-engine" className="py-20 border-b border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Flagship Engineering Capstone
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Modular Threat Detection Engine (EDR / XDR)
          </h2>
          <p className="text-zinc-500 text-sm">
            Architecture and technical implementation of the <strong className="text-zinc-900 font-semibold">Detection Engine & Rule Evaluator</strong>.
          </p>
        </div>

        {/* Role Demarcation Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 border border-zinc-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-zinc-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ROLE: DETECTION ENGINE & CORRELATION ARCHITECT</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-2xl font-sans">
              Responsible for the detection engine core: in-memory rule evaluation, schema normalization, multi-stage stateful correlation, confidence scoring, and MITRE ATT&CK mapping (independent of the endpoint telemetry collector).
            </p>
          </div>
          <span className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-xs font-mono text-zinc-700 font-semibold shrink-0">
            84+ ATT&CK Rules
          </span>
        </div>

        {/* Execution Flowchart */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-zinc-500" />
            <span>Detection Pipeline Execution Stages</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {pipelineStages.map((stage) => (
              <div
                key={stage.step}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-zinc-900">{stage.step}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-zinc-600 border border-zinc-200">
                    {stage.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-zinc-900">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5 border-b border-zinc-200 pb-2">
            {[
              { id: "architecture", label: "Rule Evaluation Engine", icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: "rules", label: "MITRE ATT&CK Matrix", icon: <Shield className="w-3.5 h-3.5" /> },
              { id: "correlation", label: "Process Lineage Graphing", icon: <GitBranch className="w-3.5 h-3.5" /> },
              { id: "containment", label: "Active Response Hooks", icon: <Lock className="w-3.5 h-3.5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? "bg-zinc-900 text-white font-semibold shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Panels */}
          <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono">
            {activeTab === "architecture" && (
              <div className="space-y-3">
                <div className="text-zinc-900 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-600" />
                  <span>Declarative Heuristic Evaluation Architecture</span>
                </div>
                <p className="text-zinc-600 font-sans text-xs leading-relaxed">
                  The rule engine parses normalized ETW events against structured signature files. It evaluates boolean compound conditions with sub-millisecond execution time:
                </p>
                <div className="bg-white p-4 rounded-lg border border-zinc-200 text-[11px] text-zinc-800 space-y-1 overflow-x-auto">
                  <p className="text-zinc-400">// Sample Detection Rule Definition</p>
                  <p><span className="font-semibold text-zinc-900">rule_id:</span> "WIN-LOLBIN-POWERSHELL-ENCODED"</p>
                  <p><span className="font-semibold text-zinc-900">mitre_technique:</span> "T1059.001 (PowerShell Command Execution)"</p>
                  <p><span className="font-semibold text-zinc-900">severity:</span> "HIGH" | <span className="font-semibold text-zinc-900">confidence_score:</span> 0.94</p>
                  <p><span className="font-semibold text-zinc-900">condition:</span> process.name == "powershell.exe" &amp;&amp; process.command_line.contains(["-EncodedCommand", "-enc"])</p>
                  <p><span className="font-semibold text-zinc-900">action:</span> ["DISPATCH_ALERT", "EXTRACT_MEMORY_ARTIFACTS", "TRIGGER_CONTAINMENT"]</p>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div className="space-y-3 font-sans">
                <div className="text-zinc-900 font-bold font-mono flex items-center gap-2">
                  <Shield className="w-4 h-4 text-zinc-600" />
                  <span>MITRE ATT&CK Matrix Coverage</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                  {[
                    { tactic: "Execution", id: "T1059", desc: "PowerShell, CMD, and script interpreter abuse." },
                    { tactic: "Defense Evasion", id: "T1055", desc: "Process injection and DLL search hijacking." },
                    { tactic: "Persistence", id: "T1543", desc: "Registry run keys and anomalous service creation." },
                    { tactic: "Discovery", id: "T1082", desc: "System info reconnaissance and network enumeration." }
                  ].map((item) => (
                    <div key={item.id} className="p-3 rounded-lg bg-white border border-zinc-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-zinc-900">{item.id}</div>
                      <div className="text-xs font-semibold text-zinc-800">{item.tactic}</div>
                      <div className="text-[11px] text-zinc-500 leading-snug">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "correlation" && (
              <div className="space-y-3 font-sans">
                <div className="text-zinc-900 font-bold font-mono flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-zinc-600" />
                  <span>Stateful Parent-Child Lineage Analysis</span>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Reconstructs process ancestry trees in real-time to uncover living-off-the-land attacks where individual events appear benign in isolation:
                </p>
                <div className="p-3.5 rounded-lg bg-white border border-zinc-200 text-xs font-mono text-zinc-800 space-y-1">
                  <div>WINWORD.EXE (PID: 4120) [Parent Application]</div>
                  <div className="pl-4 text-amber-700">&rarr; CMD.EXE (PID: 6280) [Anomalous Child Process]</div>
                  <div className="pl-8 text-rose-700">&rarr; POWERSHELL.EXE -EncodedCommand [Malicious Payload Trigger &rarr; ALERT GENERATED]</div>
                </div>
              </div>
            )}

            {activeTab === "containment" && (
              <div className="space-y-3 font-sans">
                <div className="text-zinc-900 font-bold font-mono flex items-center gap-2">
                  <Lock className="w-4 h-4 text-zinc-600" />
                  <span>Automated Active Containment Hooks</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-600 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                    <span><strong>Process Tree Termination:</strong> Terminates the entire malicious process sub-tree.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                    <span><strong>Forensic Artifact Capture:</strong> Records open file handles, memory hashes, and parent lineages.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                    <span><strong>Structured Alert Forwarding:</strong> Formats alerts for SIEM / SOC consumption.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
