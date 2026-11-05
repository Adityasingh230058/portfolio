import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { person, projects, experience, skillGroups, certifications, education, qa, resumeMarkdown } from "../../data/resume";
import { useSite, copyText, GridLines } from "../../site-context";

export const Projects: React.FC = () => (
  <div className="lined">
    <GridLines />
    <section id="work" className="wrap stack" aria-labelledby="work-title" style={{ padding: "96px 24px", gap: 28 }}>
      <div className="eyebrow">02 · Selected work</div>
      <h2 id="work-title" className="mega">PROJECTS</h2>

      <article className="work-card">
        <div className="work-visual dark">
          <div className="bubble">How do you turn 4 alerts into 1 incident?</div>
          <pre className="mono" style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: "var(--ink-muted)", whiteSpace: "pre-wrap" }}>
{`winword.exe
 └─ powershell.exe        `}<span style={{ color: "var(--ink-accent)" }}>T1059</span>{`
     ├─ beacon → c2:443    `}<span style={{ color: "var(--ink-accent)" }}>T1071</span>{`
     └─ reg Run key        `}<span style={{ color: "var(--ink-accent)" }}>T1547.001</span>{`
`}<span style={{ color: "var(--ink-fg)" }}>⟶ 1 incident · process-provenance graph</span>
          </pre>
        </div>
        <div className="meta">
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>{projects.panopticon.name}</div><div className="muted" style={{ fontSize: 14 }}>{projects.panopticon.subtitle}</div></div>
          <div><small>Built</small><div style={{ fontSize: 14, fontWeight: 600 }}>69 YAML rules · 48 techniques</div></div>
          <div><small>Stack</small><div style={{ fontSize: 14, fontWeight: 600 }}>Python · ETW · YAML · pytest</div></div>
          <a href={projects.panopticon.github} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: 15 }}>View on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </article>

      <div className="two">
        <article className="work-card">
          <div className="work-visual soft">
            <div className="bubble">Who changed my AWS config by hand?</div>
            <pre className="mono muted" style={{ margin: 0, fontSize: 13, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
{`baseline  sha256:9f2c…  (IaC)
live      sha256:41aa…
`}<span style={{ color: "#b91c1c" }}>- block_public_access: true</span>{`
`}<span style={{ color: "var(--accent)" }}>+ block_public_access: false</span>
            </pre>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            <h3 style={{ margin: 0, fontSize: 22 }}>{projects.drift.name}</h3>
            <p className="muted" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>{projects.drift.text}</p>
          </div>
        </article>
        <article className="work-card">
          <div className="work-visual soft">
            <div className="bubble">How do you make CSV data fast to query?</div>
            <div className="flow">
              {["CSV", "S3", "Glue ETL", "Parquet", "Athena", "QuickSight"].map((s, i, a) => (
                <React.Fragment key={s}><span className="box">{s}</span>{i < a.length - 1 && <span aria-hidden="true">→</span>}</React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            <h3 style={{ margin: 0, fontSize: 22 }}>{projects.pipeline.name}</h3>
            <p className="muted" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>{projects.pipeline.text}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
);

const NODES: [string, string][] = [["Macro document", "T1566.001"], ["Payload executes", "T1059"], ["C2 beaconing", "T1071"], ["Persistence set", "T1547.001"]];

export const CaseStudy: React.FC = () => {
  const { award } = useSite();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number>();
  const stop = () => { window.clearInterval(timer.current); setPlaying(false); };
  useEffect(() => () => window.clearInterval(timer.current), []);
  useEffect(() => { if (step >= NODES.length) { award("chain"); stop(); } }, [step, award]);

  const play = () => {
    if (playing) { stop(); return; }
    if (step >= NODES.length) setStep(0);
    setPlaying(true);
    timer.current = window.setInterval(() => setStep((s) => Math.min(s + 1, NODES.length)), 900);
  };

  return (
    <section id="case" className="ink" aria-labelledby="case-title">
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="eyebrow">03 · Case study · {projects.panopticon.name}</div>
        <h2 id="case-title" className="mega">Case study</h2>
        <div className="three">
          <div><div className="mono muted" style={{ fontSize: 12, marginBottom: 10 }}>Problem</div><p>An attack is many small steps. Seen one by one, each alert looks minor and analysts miss the full chain.</p></div>
          <div><div className="mono muted" style={{ fontSize: 12, marginBottom: 10 }}>Approach</div><p>A Python engine over Windows ETW and Linux telemetry, with single-event, sequence, threshold and statistical (C2 beaconing) rules, correlated on a temporal process-provenance graph.</p></div>
          <div><div className="mono muted" style={{ fontSize: 12, marginBottom: 10 }}>Result</div><p>The full chain surfaces as one incident, with explainable alerts and recommended containment. Validated with 409 automated tests and attack replays.</p></div>
        </div>
        <div className="tile" style={{ gap: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Watch one chain become one incident</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" className="btn btn-solid" style={{ height: 44 }} onClick={play}>{playing ? "Pause" : "Play"}</button>
              <button type="button" className="btn" style={{ height: 44 }} onClick={() => { stop(); setStep((s) => Math.min(s + 1, NODES.length)); }}>Step</button>
              <button type="button" className="btn" style={{ height: 44 }} onClick={() => { stop(); setStep(0); }}>Reset</button>
            </div>
          </div>
          <ol className="chain" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NODES.map(([label, tech], i) => {
              const hit = i < step;
              return (
                <li key={label} className={`node${hit ? " hit" : ""}`}>
                  <div className="mono" style={{ fontSize: 12 }}>Step {i + 1} · {tech}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>{label}</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>{hit ? "Detected and linked" : "Waiting"}</div>
                </li>
              );
            })}
          </ol>
          <div aria-live="polite">
            {step >= NODES.length && (
              <div className="ok" style={{ fontSize: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Incident raised: 1 chain, 4 linked detections</div>
                <div style={{ marginTop: 4 }}>Recommended containment: terminate the payload process, pending analyst approval.</div>
                <div className="flag" style={{ marginTop: 10, color: "#6ee7b7" }}>FLAG{"{one_incident}"} · flag found</div>
              </div>
            )}
          </div>
          <div className="muted" style={{ fontSize: 12 }}>Example chain. Technique IDs are standard MITRE ATT&amp;CK examples.</div>
        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  const groups = ["All", ...Object.keys(skillGroups)];
  const [filter, setFilter] = useState("All");
  const skills = filter === "All" ? Object.values(skillGroups).flat() : skillGroups[filter];
  const [ask, setAsk] = useState(-1);
  return (
    <div className="lined">
      <GridLines />
      <div id="about" className="wrap rows">
        <section aria-labelledby="exp-title" className="stack" style={{ gap: 20 }}>
          <div className="eyebrow">04 · Experience</div>
          <h2 id="exp-title" className="h2">Experience</h2>
          {experience.map((e) => (
            <div className="ruled" key={e.company}>
              <div><h3 style={{ margin: 0, fontSize: 22 }}>{e.company}</h3><div className="muted" style={{ fontSize: 15 }}>{e.role} · {e.mode}</div><div className="mono muted" style={{ fontSize: 13, marginTop: 8 }}>{e.period}</div></div>
              <ul className="span2" style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8, fontSize: 16, lineHeight: 1.6 }}>
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="skills-title" className="stack" style={{ gap: 20 }}>
          <div className="eyebrow">05 · Stack</div>
          <h2 id="skills-title" className="h2">Skills</h2>
          <div className="chips" role="group" aria-label="Filter skills">
            {groups.map((g) => <button key={g} type="button" className="filter" aria-pressed={g === filter} onClick={() => setFilter(g)}>{g}</button>)}
          </div>
          <div className="chips" key={filter}>{skills.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        </section>

        <section aria-labelledby="cert-title" className="stack" style={{ gap: 20 }}>
          <div className="eyebrow">06 · Credentials</div>
          <h2 id="cert-title" className="h2">Certifications</h2>
          {Object.entries(certifications).map(([issuer, list], i) => (
            <div className="ruled" key={issuer} style={i ? { borderTopColor: "var(--line)" } : undefined}>
              <h3 style={{ margin: 0, fontSize: 22 }}>{issuer}</h3>
              <div className="chips span2">{list.map((c) => <span className="chip" key={c} style={{ animation: "none" }}>{c}</span>)}</div>
            </div>
          ))}
        </section>

        <section aria-labelledby="edu-title" className="stack" style={{ gap: 20 }}>
          <div className="eyebrow">07 · Education</div>
          <h2 id="edu-title" className="h2">Education</h2>
          <div style={{ borderTop: "1px solid var(--fg)" }}>
            {education.map((e) => (
              <div className="edu-row" key={e.title}>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{e.title}</div>
                <div className="muted" style={{ fontSize: 15 }}>{e.place} · {e.score}</div>
                <div className="mono muted" style={{ fontSize: 13 }}>{e.period}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="ask" aria-labelledby="ask-title" className="stack" style={{ gap: 20 }}>
          <div className="eyebrow">08 · Ask me anything</div>
          <h2 id="ask-title" className="h2">Ask about me</h2>
          <div className="ask-box">
            <div className="chips">
              {qa.map(([q], i) => <button key={q} type="button" className="q" aria-pressed={i === ask} onClick={() => setAsk(i)}>{q}</button>)}
            </div>
            <div aria-live="polite" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {ask >= 0 && (
                <React.Fragment key={ask}>
                  <div className="msg-me" style={{ animation: "rise .3s ease-out" }}>{qa[ask][0]}</div>
                  <div className="msg-ai" style={{ animation: "rise .3s ease-out" }}>{qa[ask][1]}</div>
                </React.Fragment>
              )}
            </div>
            <div className="muted" style={{ fontSize: 12 }}>Answers come straight from my resume.</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Contact: React.FC<{ onReplay: () => void }> = ({ onReplay }) => {
  const { flagCount } = useSite();
  const [copied, setCopied] = useState(false);
  const [md, setMd] = useState(false);
  return (
    <section id="contact" className="ink" aria-labelledby="contact-title" style={{ padding: "112px 0 48px" }}>
      <div className="wrap stack">
        <div aria-live="polite">
          {flagCount === 3 && (
            <div className="granted">
              <div className="mono" style={{ fontSize: 14, color: "#6ee7b7" }}>ACCESS GRANTED · 3/3 flags</div>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>You just read a terminal, fixed cloud drift and traced an attack chain. That's my job. Let's do it together.</div>
            </div>
          )}
        </div>
        <h2 id="contact-title" className="giant">LET'S<br />TALK</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <button type="button" className="btn btn-solid mono" style={{ height: 56 }} onClick={() => { copyText(person.email); setCopied(true); window.setTimeout(() => setCopied(false), 2000); }}>
            {copied ? "Copied to clipboard" : person.email}
          </button>
          <a className="btn" style={{ height: 56 }} href={`mailto:${person.email}?subject=Internship%20opportunity`}>Email me</a>
          <a className="btn" style={{ height: 56 }} href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" style={{ height: 56 }} href={person.github} target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" className="btn" style={{ height: 56 }} onClick={() => { copyText(resumeMarkdown); setMd(true); window.setTimeout(() => setMd(false), 2000); }}>
            {md ? "Resume copied as Markdown" : "Copy resume as Markdown"}
          </button>
        </div>
        <div className="footer-row">
          <span>{person.name} · {person.location}</span>
          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <span className="mono">Every fact on this page is from my resume</span>
            <button type="button" className="btn mono" style={{ height: 40, fontSize: 12 }} onClick={onReplay}>Replay intro</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export const Floating: React.FC = () => {
  const { flags, flagCount } = useSite();
  const [open, setOpen] = useState(false);
  const hints: [boolean, string][] = [
    [flags.terminal, "1. The terminal has a file you can read."],
    [flags.drift, "2. Break the S3 bucket, scan it, then fix it."],
    [flags.chain, "3. Let the attack chain play to the end."],
  ];
  return (
    <>
      <div className="float-left">
        {open && (
          <div className="hud-panel" id="ctf-hints">
            <div className="mono" style={{ color: "#6ee7b7" }}>Hints</div>
            {hints.map(([done, text]) => <div key={text} style={{ color: done ? "#6ee7b7" : "#d4d4d8" }}>{done ? "✓ " : "○ "}{text}</div>)}
          </div>
        )}
        <button type="button" className="hud-btn" aria-expanded={open} aria-controls="ctf-hints" onClick={() => setOpen(!open)}>CTF {flagCount}/3</button>
      </div>
      <div className="float-right">
        <a href="#ask" className="ask-float" aria-label="Ask about me"><MessageCircle size={18} aria-hidden="true" /><span>Ask about me</span></a>
      </div>
    </>
  );
};
