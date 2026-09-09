import React, { useState } from "react";
import { Shield, GitBranch, Cpu, Lock, CheckCircle2 } from "lucide-react";

export const EditorialEdrEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "heuristics" | "mitre" | "containment">("pipeline");

  const executionStages = [
    { num: "01", name: "Telemetry Ingestion", desc: "Captures Windows ETW kernel events.", tag: "ETW STREAM" },
    { num: "02", name: "Schema Normalization", desc: "Parses into structured JSON schemas.", tag: "EVENT PARSER" },
    { num: "03", name: "Rule Engine", desc: "84+ MITRE ATT&CK rules.", tag: "RULE ENGINE" },
    { num: "04", name: "Process Tree Graph", desc: "Parent-child lineage correlation.", tag: "PROCESS GRAPH" },
    { num: "05", name: "Containment Hooks", desc: "Termination & SOC alerting.", tag: "ACTIVE RESPONSE" }
  ];

  return (
    <section id="edr-engine" className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#e5e3d8] dark:border-[#27272a] pb-2.5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              05
            </span>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              MODULAR THREAT DETECTION ENGINE (EDR / XDR)
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6e6d65] dark:text-[#a1a1aa] hidden sm:inline">
            [ FLAGSHIP CAPSTONE ]
          </span>
        </div>

        {/* Role & Core Demarcation Card */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#121215] border border-[#e5e3d8] dark:border-[#27272a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>ROLE: DETECTION ENGINE & RULE EVALUATION CORE</span>
            </div>
            <p className="text-xs text-[#6e6d65] dark:text-[#a1a1aa] font-sans leading-relaxed">
              Designed the in-memory rule engine, ETW event parser, parent-child process lineage graph, and MITRE ATT&CK attribution.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a] font-bold text-[#141413] dark:text-[#f4f4f5]">
              84+ ATT&CK Rules
            </span>
            <span className="px-2.5 py-1 rounded bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a] font-bold text-emerald-600 dark:text-emerald-400">
              Sub-Second Alerting
            </span>
          </div>
        </div>

        {/* 5-Stage Execution Pipeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {executionStages.map((stage) => (
            <div
              key={stage.num}
              className="p-3 rounded-xl bg-white dark:bg-[#121215] border border-[#e5e3d8] dark:border-[#27272a] space-y-1 hover:border-[#141413] dark:hover:border-white transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#141413] dark:text-[#f4f4f5]">{stage.num}</span>
                <span className="text-[9px] text-[#9e9d93] dark:text-[#71717a] px-1 py-0.5 rounded bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a]">
                  {stage.tag}
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5] font-mono leading-tight">
                {stage.name}
              </h4>
              <p className="text-[10px] text-[#6e6d65] dark:text-[#a1a1aa] leading-tight font-sans">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Tabs Display */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5 border-b border-[#e5e3d8] dark:border-[#27272a] pb-2">
            {[
              { id: "pipeline", label: "Rule Definition Format", icon: <Cpu className="w-3 h-3" /> },
              { id: "heuristics", label: "Process Lineage Graph", icon: <GitBranch className="w-3 h-3" /> },
              { id: "mitre", label: "MITRE ATT&CK Matrix", icon: <Shield className="w-3 h-3" /> },
              { id: "containment", label: "Containment Hooks", icon: <Lock className="w-3 h-3" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b] font-bold shadow-xs"
                    : "bg-white dark:bg-[#121215] text-[#6e6d65] dark:text-[#a1a1aa] hover:text-[#141413] dark:hover:text-[#f4f4f5] border border-[#e5e3d8] dark:border-[#27272a]"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#121215] border border-[#e5e3d8] dark:border-[#27272a] text-xs font-mono">
            {activeTab === "pipeline" && (
              <div className="space-y-1.5 text-[11px] text-[#141413] dark:text-[#f4f4f5]">
                <p><span className="text-[#6e6d65] dark:text-[#a1a1aa]">rule_id:</span> "WIN-LOLBIN-POWERSHELL-ENCODED" | <span className="text-[#6e6d65] dark:text-[#a1a1aa]">confidence:</span> 0.94</p>
                <p><span className="text-[#6e6d65] dark:text-[#a1a1aa]">mitre_technique:</span> "T1059.001 (PowerShell Execution)" | <span className="text-rose-500 font-bold">SEVERITY: HIGH</span></p>
                <p><span className="text-[#6e6d65] dark:text-[#a1a1aa]">condition:</span> process.name == "powershell.exe" &amp;&amp; process.cmdline.contains(["-enc", "-EncodedCommand"])</p>
                <p><span className="text-[#6e6d65] dark:text-[#a1a1aa]">action:</span> ["TERMINATE_TREE", "EXTRACT_VOLATILE_HANDLES", "DISPATCH_ALERT"]</p>
              </div>
            )}

            {activeTab === "heuristics" && (
              <div className="space-y-1 text-xs text-[#141413] dark:text-[#f4f4f5]">
                <div className="flex items-center gap-2">
                  <span className="text-[#6e6d65] dark:text-[#a1a1aa]">[PARENT APP]</span>
                  <span className="font-bold">WINWORD.EXE (PID: 4120)</span>
                </div>
                <div className="pl-4 flex items-center gap-2 text-amber-500">
                  <span>↳ [ANOMALOUS CHILD]</span>
                  <span className="font-bold">CMD.EXE (PID: 6280)</span>
                </div>
                <div className="pl-8 flex items-center gap-2 text-rose-500">
                  <span>↳ [MALICIOUS PAYLOAD]</span>
                  <span className="font-bold">POWERSHELL.EXE -EncodedCommand [TRIGGER &rarr; TERMINATED]</span>
                </div>
              </div>
            )}

            {activeTab === "mitre" && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans">
                {[
                  { tactic: "Execution", id: "T1059", desc: "PowerShell & interpreter abuse." },
                  { tactic: "Defense Evasion", id: "T1055", desc: "Process injection & DLL hijacking." },
                  { tactic: "Persistence", id: "T1543", desc: "Registry run keys & services." },
                  { tactic: "Discovery", id: "T1082", desc: "System info reconnaissance." }
                ].map((m) => (
                  <div key={m.id} className="p-2 rounded-lg bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a] space-y-0.5">
                    <span className="text-xs font-mono font-bold text-[#141413] dark:text-[#f4f4f5]">{m.id}</span>
                    <div className="text-xs font-bold text-[#141413] dark:text-[#f4f4f5]">{m.tactic}</div>
                    <p className="text-[10px] text-[#6e6d65] dark:text-[#a1a1aa] leading-snug">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "containment" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-sans text-xs">
                <div className="p-2 rounded-lg bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a]">
                  <span className="font-mono font-bold text-[#141413] dark:text-[#f4f4f5]">01. Tree Termination</span>
                  <p className="text-[#6e6d65] dark:text-[#a1a1aa] text-[10px]">Terminates process and child tree immediately.</p>
                </div>
                <div className="p-2 rounded-lg bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a]">
                  <span className="font-mono font-bold text-[#141413] dark:text-[#f4f4f5]">02. Forensic Memory Capture</span>
                  <p className="text-[#6e6d65] dark:text-[#a1a1aa] text-[10px]">Extracts open file handles and socket descriptors.</p>
                </div>
                <div className="p-2 rounded-lg bg-[#faf9f5] dark:bg-[#18181b] border border-[#e5e3d8] dark:border-[#27272a]">
                  <span className="font-mono font-bold text-[#141413] dark:text-[#f4f4f5]">03. JSON Alert Dispatch</span>
                  <p className="text-[#6e6d65] dark:text-[#a1a1aa] text-[10px]">Formats structured triage data for SOC teams.</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
