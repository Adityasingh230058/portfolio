import React, { useEffect, useRef, useState } from "react";
import { person, projects, skillGroups, certifications, experience } from "../../data/resume";
import { useSite } from "../../site-context";

const CtfBanner: React.FC = () => {
  const { flags, flagCount } = useSite();
  return (
    <div className="ctf-banner">
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div className="eyebrow">Capture the flag</div>
        <div style={{ fontSize: 20, fontWeight: 700 }}>3 flags are hidden on this page. Find them all to unlock access.</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }} aria-label={`${flagCount} of 3 flags found`}>
        {(["terminal", "drift", "chain"] as const).map((k) => <span key={k} className={`ctf-dot${flags[k] ? " on" : ""}`} aria-hidden="true" />)}
        <span className="mono" style={{ fontSize: 14, marginLeft: 6 }} aria-hidden="true">{flagCount}/3</span>
      </div>
    </div>
  );
};

const RuleTile: React.FC = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="tile">
      <div className="tile-head"><b>Detection rule</b><small>Panopticon · example</small></div>
      <pre className="code">{`title: Office app spawns a shell
mitre: T1059
match: parent in [winword.exe]
       child in [powershell.exe]
severity: high`}</pre>
      <div className="mono muted" style={{ fontSize: 12 }}>event → winword.exe ⟶ powershell.exe -enc …</div>
      <button type="button" className="tile-btn solid" onClick={() => setOn(!on)}>{on ? "Reset" : "Send event"}</button>
      <div aria-live="polite">
        {on && <div className="ok">Rule matched · alert raised · severity high<br />Recommended: terminate powershell.exe (needs analyst approval)</div>}
      </div>
    </div>
  );
};

const CHECKS = ["IAM · root account MFA", "S3 · block public access", "RDS · encryption at rest", "Security groups · no open SSH"];

const DriftTile: React.FC = () => {
  const { award } = useSite();
  const [blocked, setBlocked] = useState(true);
  const [step, setStep] = useState(-1);
  const [scanning, setScanning] = useState(false);
  const [fixed, setFixed] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearInterval(timer.current), []);

  const scan = () => {
    if (scanning) return;
    setScanning(true); setStep(-1); setFixed(false);
    let i = -1;
    timer.current = window.setInterval(() => {
      i += 1; setStep(i);
      if (i >= CHECKS.length - 1) { window.clearInterval(timer.current); setScanning(false); }
    }, 450);
  };
  const fix = () => { setBlocked(true); setStep(-1); setFixed(true); award("drift"); };
  const drift = !blocked && step >= 1;

  return (
    <div className="tile">
      <div className="tile-head"><b>Drift check</b><small>Cloud Drift Sentinel · example</small></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: 14, borderRadius: 14, background: "var(--ink-deep)", border: "1px solid var(--ink-line)" }}>
        <div><div className="mono" style={{ fontSize: 13 }}>s3://reports-bucket</div><div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Block public access</div></div>
        <button type="button" role="switch" aria-checked={blocked} aria-label="Block public access on the bucket" className="switch"
          onClick={() => { setBlocked(!blocked); setStep(-1); setFixed(false); }}
          style={{ justifyContent: blocked ? "flex-end" : "flex-start", background: blocked ? "#10b981" : "#52525b" }}><span /></button>
      </div>
      <button type="button" className="tile-btn" onClick={scan}>{scanning ? "Scanning…" : "Run CIS scan"}</button>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {CHECKS.map((label, i) => {
          const fail = i === 1 && !blocked;
          const status = step < i ? (step === -1 ? "—" : "…") : fail ? "FAIL" : "PASS";
          const color = step < i ? "var(--ink-muted)" : fail ? "#fbbf24" : "#6ee7b7";
          return <div className="check-row" key={label}><span>{label}</span><span className="mono" style={{ color }}>{status}</span></div>;
        })}
      </div>
      <div aria-live="polite">
        {drift && (
          <div className="warn">Drift from IaC baseline: bucket is public.<br />Playbook: re-enable Block Public Access, then re-scan.<br />
            <button type="button" onClick={fix} style={{ marginTop: 10, height: 40, padding: "0 16px", borderRadius: 10, border: "none", background: "#fde68a", color: "#451a03", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Apply remediation</button>
          </div>
        )}
        {fixed && <div className="ok flag">Fixed. FLAG{"{fix_the_drift}"} · flag found</div>}
      </div>
    </div>
  );
};

const StatusTile: React.FC = () => (
  <div className="tile">
    <div className="tile-head"><b>Status</b><small style={{ color: "var(--ink-accent)", display: "inline-flex", alignItems: "center", gap: 6 }}><span className="dot" aria-hidden="true" />available</small></div>
    <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>Looking for a 4–6 month internship</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <span className="chip-ink">Cloud security</span><span className="chip-ink">Cybersecurity</span><span className="chip-ink">Data</span>
    </div>
    <div className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>Based in {person.location}. Cybersecurity intern at Vodafone Idea, May – Jul 2026.</div>
    <a href="#contact" style={{ marginTop: "auto", height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "#10b981", color: "#022c22", textDecoration: "none", fontWeight: 700, fontSize: 14 }}>Get in touch</a>
  </div>
);

type Line = { text: string; color: string };

const COMMANDS: Record<string, string> = {
  help: "commands: whoami · projects · skills · certs · experience · contact · ls · cat <file> · clear",
  whoami: `${person.name} — final-year B.Tech Cybersecurity, MPSTME NMIMS, Mumbai.\nSeeking ${person.seeking}.`,
  projects: `panopticon            EDR · 69 rules · 48 MITRE techniques · 409 tests\ncloud-drift-sentinel  CSPM · 18 CIS controls · IaC drift detection\naws-data-pipeline     Glue · S3 · Athena · QuickSight · Parquet`,
  skills: Object.entries(skillGroups).map(([k, v]) => `${k.toLowerCase().padEnd(22)}${v.slice(0, 7).join(", ")}${v.length > 7 ? ", …" : ""}`).join("\n"),
  certs: `AWS: ${certifications.AWS.length} trainings incl. Well-Architected Proficient, IAM, Security Incident Response\nGoogle Cloud: ${certifications["Google Cloud"].join(", ")}`,
  experience: `${experience[0].role} · ${experience[0].company} · ${experience[0].period}\n${experience[0].points[0]}`,
  contact: `${person.email} · ${person.linkedinLabel}`,
  ls: "flag.txt  resume.md",
  "cat resume.md": `${person.name} · ${person.headline}\nUse "Copy resume as Markdown" at the bottom of the page for the full file.`,
  sudo: "nice try. permission denied.",
  "sudo su": "nice try. permission denied.",
};

const Terminal: React.FC = () => {
  const { award } = useSite();
  const [lines, setLines] = useState<Line[]>([{ text: "Welcome. Type help to see what you can ask. Psst: try ls.", color: "var(--ink-muted)" }]);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);
  const [hist, setHist] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const b = bodyRef.current; if (b) b.scrollTop = b.scrollHeight; }, [lines]);

  const run = () => {
    const cmd = input.trim().toLowerCase().replace(/\s+/g, " ");
    if (!cmd) { setErr(true); return; }
    setHist((h) => [cmd, ...h].slice(0, 20)); setHIdx(-1); setInput(""); setErr(false);
    if (cmd === "clear") { setLines([]); return; }
    let out = COMMANDS[cmd];
    let color = "var(--ink-fg)";
    if (cmd === "cat flag.txt") { award("terminal"); out = "FLAG{read_the_logs} · flag found. Two more are hidden on this page."; color = "#4ade80"; }
    if (!out) { out = `command not found: ${cmd} — try help`; color = "#fca5a5"; }
    setLines((l) => l.concat([{ text: `$ ${cmd}`, color: "var(--ink-accent)" }, { text: out, color }]).slice(-16));
  };
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); run(); }
    else if (e.key === "ArrowUp" && hist.length) { e.preventDefault(); const i = Math.min(hIdx + 1, hist.length - 1); setHIdx(i); setInput(hist[i]); }
    else if (e.key === "ArrowDown" && hIdx >= 0) { e.preventDefault(); const i = hIdx - 1; setHIdx(i); setInput(i >= 0 ? hist[i] : ""); }
    else if (e.key === "Tab" && input.trim()) {
      const match = Object.keys(COMMANDS).concat(["cat flag.txt", "clear"]).find((c) => c.startsWith(input.trim().toLowerCase()));
      if (match) { e.preventDefault(); setInput(match); }
    }
  };

  return (
    <div className="terminal">
      <div className="term-bar" aria-hidden="true"><i /><i /><i /><span className="mono muted" style={{ marginLeft: 8, fontSize: 12 }}>aditya@portfolio: ~</span></div>
      <div className="term-body" ref={bodyRef} style={{ maxHeight: 420, overflowY: "auto" }}>
        <div role="log" aria-live="polite">
          {lines.map((l, i) => <pre key={i} style={{ color: l.color }}>{l.text}</pre>)}
        </div>
        <div className="term-input">
          <label htmlFor="term-in" style={{ color: "var(--ink-accent)" }}>$<span className="sr-only">Terminal command</span></label>
          <input id="term-in" value={input} onChange={(e) => { setInput(e.target.value); setErr(false); }} onKeyDown={onKey}
            placeholder="type help, whoami or projects" autoComplete="off" spellCheck={false} />
          <button type="button" className="tile-btn" style={{ height: 40, padding: "0 14px", fontFamily: "inherit" }} onClick={run}>Run</button>
        </div>
        {err && <div style={{ fontSize: 13, color: "#fca5a5" }}>Type a command first, for example help.</div>}
      </div>
    </div>
  );
};

export const Lab: React.FC = () => (
  <section id="lab" className="ink" aria-labelledby="lab-title">
    <div className="wrap stack">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>01 · Security lab</div>
          <h2 id="lab-title" className="section-title">Don't read it.<br />Try it.</h2>
        </div>
        <p className="muted" style={{ margin: 0, maxWidth: 380, fontSize: 16, lineHeight: 1.6 }}>Small working demos of what my projects do. Examples for illustration, built from the ideas behind {projects.panopticon.name} and {projects.drift.name}.</p>
      </div>
      <CtfBanner />
      <div className="bento">
        <RuleTile />
        <DriftTile />
        <StatusTile />
        <Terminal />
      </div>
    </div>
  </section>
);
