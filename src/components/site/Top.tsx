import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { person, fillSentence, stats } from "../../data/resume";
import { useSite, prefersReducedMotion, GridLines } from "../../site-context";

const BOOT_LINES = [
  "> boot portfolio.aditya-singh",
  "> loading detection rules ............ 69",
  "> mapping MITRE ATT&CK techniques .... 48",
  "> running test suite ................. 409 passed",
  "> checking CIS controls on AWS ....... 18",
  "> scanning visitor .................. clearance granted",
  "> welcome.",
];
const BOOT_KEY = "aditya_portfolio_booted";

export function useBoot() {
  const [booting, setBooting] = useState(() => {
    if (prefersReducedMotion()) return false;
    try { return window.sessionStorage.getItem(BOOT_KEY) !== "1"; } catch { return true; }
  });
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(0);

  const end = useCallback(() => {
    setBooting(false);
    try { window.sessionStorage.setItem(BOOT_KEY, "1"); } catch { /* ignore */ }
  }, []);
  const replay = useCallback(() => {
    if (prefersReducedMotion()) return;
    setCount(0); setBooting(true); setRun((r) => r + 1); window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (!booting) return;
    let n = 0;
    const id = window.setInterval(() => {
      n += 1; setCount(n);
      if (n >= BOOT_LINES.length) { window.clearInterval(id); window.setTimeout(end, 550); }
    }, 280);
    return () => window.clearInterval(id);
  }, [booting, run, end]);

  return { booting, count, end, replay };
}

export const BootIntro: React.FC<{ count: number; onSkip: () => void }> = ({ count, onSkip }) => {
  const skipRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    skipRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" || e.key === "Enter") onSkip(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onSkip]);
  return (
    <div className="boot" role="dialog" aria-modal="true" aria-label="Intro">
      <div className="boot-lines" aria-live="polite">
        {BOOT_LINES.slice(0, count).map((l) => <div key={l}>{l}</div>)}
        <div className="blink" aria-hidden="true">_</div>
      </div>
      <button ref={skipRef} type="button" className="boot-skip" onClick={onSkip}>Skip intro (Esc)</button>
    </div>
  );
};

export const Header: React.FC = () => {
  const { theme, cycleTheme } = useSite();
  const label = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "SOC mode";
  return (
    <header className="header">
      <div className="wrap">
        <a href="#top" className="brand">ADITYA SINGH</a>
        <div className="status">
          <span className="dot" aria-hidden="true" />
          <span className="muted">Open to internships</span>
          <a href="#contact" style={{ fontWeight: 600, textUnderlineOffset: 3 }}>Hire me</a>
        </div>
        <nav className="nav" aria-label="Sections">
          <a href="#lab">Lab</a>
          <a href="#work">Work</a>
          <a href="#case">Case study</a>
          <a href="#about">About</a>
          <a href="#ask">Ask</a>
          <button type="button" className="pill-btn" onClick={cycleTheme} aria-label={`Theme: ${label}. Switch theme`} style={{ marginLeft: 6 }}>{label}</button>
        </nav>
      </div>
    </header>
  );
};

const GLYPHS = "!<>-_/[]{}=+*^?#01ABCDEFX";

function useScramble(text: string, active: boolean) {
  const [frame, setFrame] = useState(99);
  const [run, setRun] = useState(0);
  const running = useRef(false);
  const start = useCallback(() => {
    if (prefersReducedMotion() || running.current) return;
    setRun((r) => r + 1);
  }, []);
  useEffect(() => { if (active) start(); }, [active, start]);
  useEffect(() => {
    if (run === 0) return;
    running.current = true;
    let f = 0; setFrame(0);
    const id = window.setInterval(() => {
      f += 1; setFrame(f);
      if (f >= text.length * 2 + 6) { window.clearInterval(id); running.current = false; }
    }, 40);
    return () => { window.clearInterval(id); running.current = false; };
  }, [run, text.length]);
  const out = text.split("").map((ch, i) => (ch === " " || frame >= i * 2 + 4 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join("");
  return { out, start };
}

export const Hero: React.FC<{ ready: boolean }> = ({ ready }) => {
  const { out, start } = useScramble("ADITYA SINGH", ready);
  const [first, second] = out.split(" ");
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setRoleIdx((i) => (i + 1) % person.roles.length), 2400);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="hero" aria-labelledby="hero-name">
      <h1 id="hero-name" onMouseEnter={start} onFocus={start} tabIndex={-1}>
        <span className="sr-only">Aditya Singh</span>
        <span aria-hidden="true">{first}<br />{second}</span>
      </h1>
      <div className="mono muted" style={{ fontSize: 12, marginTop: 14 }} aria-hidden="true">hover the name to re-decrypt <span className="blink">_</span></div>
      <div className="hero-meta">
        <div className="mono muted" style={{ fontSize: 13, lineHeight: 1.7 }}>B.Tech CSE (Cybersecurity)<br />MPSTME, NMIMS University · Mumbai</div>
        <div>
          <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>Focus</div>
          <div className="role" aria-live="polite">{person.roles[roleIdx]}</div>
        </div>
        <div><div className="big-year">2027</div><div className="muted" style={{ fontSize: 13 }}>graduating class</div></div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a href="#work" className="btn btn-solid">See my work <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href={person.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export const FillText: React.FC = () => {
  const words = fillSentence.split(" ");
  const ref = useRef<HTMLParagraphElement>(null);
  const [n, setN] = useState(() => (prefersReducedMotion() ? words.length : 0));
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setN(Math.round(Math.max(0, Math.min(1, p)) * words.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [words.length]);
  return (
    <section aria-label="Summary" style={{ padding: "96px 0" }}>
      <p ref={ref} className="fill">
        <span className="sr-only">{fillSentence}</span>
        <span aria-hidden="true">{words.map((w, i) => <span key={i} style={{ color: i < n ? "var(--fg)" : "var(--word-off)" }}>{w} </span>)}</span>
      </p>
    </section>
  );
};

export const Stats: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(() => (prefersReducedMotion() ? 1 : 0));
  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const k = Math.min((now - t0) / 1400, 1);
        setP(1 - Math.pow(1 - k, 3));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section ref={ref} className="stats" aria-label="Highlights">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="dots" aria-hidden="true"><i /><i /></div>
          <div className="num"><span className="sr-only">{s.value}</span><span aria-hidden="true">{Math.round(s.value * p)}</span></div>
          <div className="muted" style={{ fontSize: 15, marginTop: 8 }}>{s.label}</div>
        </div>
      ))}
    </section>
  );
};

const FEED: [string, string, string, string, string][] = [
  ["14:02:11", "etw", "process_create winword.exe → powershell.exe", "RULE MATCH T1059", "#6ee7b7"],
  ["14:02:12", "net", "outbound 443 every 60s ±2s", "BEACONING T1071", "#6ee7b7"],
  ["14:02:14", "reg", "HKCU Run key written", "PERSISTENCE T1547.001", "#6ee7b7"],
  ["14:02:15", "correlator", "4 detections on one provenance graph", "1 INCIDENT", "var(--ink-fg)"],
  ["14:02:16", "aws", "s3 block_public_access → false", "DRIFT", "#fbbf24"],
  ["14:02:17", "cis", "S3 public access check", "FAIL", "#fbbf24"],
  ["14:02:18", "playbook", "re-enable Block Public Access", "REMEDIATION READY", "var(--ink-fg)"],
  ["14:02:20", "response", "terminate payload process", "AWAITING APPROVAL", "var(--ink-muted)"],
];

export const Feed: React.FC = () => (
  <div className="feed" role="region" aria-label="Simulated security telemetry">
    <span className="sr-only">Simulated security events scrolling by, for illustration.</span>
    <div className="feed-track" aria-hidden="true">
      {FEED.concat(FEED).map(([time, src, msg, tag, color], i) => (
        <span className="feed-item" key={i}>
          <span style={{ opacity: 0.7 }}>{time}</span>  {src} · {msg}  <b style={{ color }}>{tag}</b>
        </span>
      ))}
    </div>
  </div>
);

export const TopSection: React.FC<{ ready: boolean }> = ({ ready }) => (
  <div className="lined">
    <GridLines />
    <div className="wrap">
      <Hero ready={ready} />
      <FillText />
      <Stats />
    </div>
  </div>
);
