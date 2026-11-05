import React, { useEffect, useState } from "react";
import { skillGroups } from "../../data/resume";

import aws from "../../assets/logos/amazonwebservices.svg";
import azure from "../../assets/logos/azure.svg";
import gcp from "../../assets/logos/googlecloud.svg";
import python from "../../assets/logos/python.svg";
import mysql from "../../assets/logos/mysql.svg";
import cpp from "../../assets/logos/cplusplus.svg";
import java from "../../assets/logos/java.svg";
import linux from "../../assets/logos/linux.svg";
import git from "../../assets/logos/git.svg";
import gha from "../../assets/logos/githubactions.svg";
import pytest from "../../assets/logos/pytest.svg";
import yaml from "../../assets/logos/yaml.svg";
import html from "../../assets/logos/html5.svg";
import css from "../../assets/logos/css3.svg";
import js from "../../assets/logos/javascript.svg";
import kali from "../../assets/logos/kalilinux.svg";

import archImg from "../../assets/panopticon/architecture.webp";
import flowImg from "../../assets/panopticon/data-flow.webp";
import consoleImg from "../../assets/panopticon/console-incidents.webp";

function logoFor(skill: string): string | undefined {
  if (/^(AWS|Amazon) /.test(skill)) return aws;
  const map: Record<string, string> = {
    "Microsoft Azure": azure, "Google Cloud": gcp, Python: python, MySQL: mysql, "C++": cpp, "Java (OOP)": java,
    Linux: linux, Git: git, "GitHub Actions (CI)": gha, pytest, YAML: yaml, HTML: html, CSS: css, JavaScript: js, "Kali Linux": kali,
  };
  return map[skill];
}

const Row: React.FC<{ label: string; items: string[]; reverse?: boolean; speed: number }> = ({ label, items, reverse, speed }) => (
  <div className="mq-row">
    <div className="mq-label mono">{label}</div>
    <div className="mq-viewport">
      <div className={`mq-track${reverse ? " rev" : ""}`} style={{ animationDuration: `${speed}s` }}>
        {[0, 1].map((copy) => (
          <div className={`mq-set${copy ? " dup" : ""}`} key={copy} aria-hidden={copy ? true : undefined}>
            {items.map((s) => {
              const logo = logoFor(s);
              return (
                <span className="mq-item" key={s}>
                  {logo ? <span className="mq-logo"><img src={logo} alt="" width={22} height={22} loading="lazy" /></span> : <span className="mq-dot" aria-hidden="true" />}
                  {s}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SkillsMarquee: React.FC = () => {
  const entries = Object.entries(skillGroups);
  return (
    <section aria-labelledby="skills-title" className="stack" style={{ gap: 20 }}>
      <div className="eyebrow">05 · Stack</div>
      <h2 id="skills-title" className="h2">Skills</h2>
      <p className="muted" style={{ margin: 0, fontSize: 15 }}>Hover a row to pause it.</p>
      <div className="mq">
        {entries.map(([group, items], i) => <Row key={group} label={group} items={items} reverse={i % 2 === 1} speed={28 + i * 4} />)}
      </div>
    </section>
  );
};

const SHOTS = [
  { id: "arch", tab: "Architecture", src: archImg, alt: "Panopticon architecture: the Officer agent on a Windows endpoint sends ETW and Sysmon events over HTTPS to the manager's ingest API; a detection worker runs DetectionRun (the eyedetect engine), which writes alerts to the database and alerts.ndjson for the console.", w: 1600, h: 1029 },
  { id: "flow", tab: "Data flow", src: flowImg, alt: "Panopticon data flow: collect and normalize, ingest and validate, detect and correlate, then serve the console to the SOC analyst, with events and alerts stores in between.", w: 1600, h: 1166 },
  { id: "console", tab: "Analyst console", src: consoleImg, alt: "Panopticon analyst console showing correlated incidents with severity, score, MITRE tactics, stages and root process, plus response actions awaiting analyst approval.", w: 1440, h: 1000 },
];

export const DiagramViewer: React.FC = () => {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const shot = SHOTS[active];
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoom(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [zoom]);
  return (
    <div className="tile" style={{ gap: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>How Panopticon fits together</div>
        <div className="seg" role="tablist" aria-label="Panopticon diagrams">
          {SHOTS.map((s, i) => (
            <button key={s.id} type="button" role="tab" aria-selected={i === active} aria-controls="diagram-panel" id={`tab-${s.id}`} onClick={() => setActive(i)}>{s.tab}</button>
          ))}
        </div>
      </div>
      <div id="diagram-panel" role="tabpanel" aria-labelledby={`tab-${shot.id}`} className="diagram-frame">
        <button type="button" className="diagram-btn" onClick={() => setZoom(true)} aria-label={`Enlarge: ${shot.tab}`}>
          <img key={shot.id} src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading="lazy" />
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, fontSize: 12 }} className="muted">
        <span>From the Panopticon project docs. Click the image to enlarge.</span>
        <span className="mono">{active + 1} / {SHOTS.length}</span>
      </div>
      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.tab} onClick={() => setZoom(false)}>
          <img src={shot.src} alt={shot.alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="boot-skip" style={{ color: "#fafafa", borderColor: "#3f3f46" }} onClick={() => setZoom(false)} autoFocus>Close (Esc)</button>
        </div>
      )}
    </div>
  );
};
