import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "soc";
export type FlagId = "terminal" | "drift" | "chain";

const THEMES: Theme[] = ["light", "dark", "soc"];
const THEME_KEY = "aditya_portfolio_theme";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function safeGet(key: string): string | null {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, value: string) {
  try { window.localStorage.setItem(key, value); } catch { /* storage unavailable */ }
}

interface SiteState {
  theme: Theme;
  cycleTheme: () => void;
  flags: Record<FlagId, boolean>;
  award: (id: FlagId) => void;
  flagCount: number;
}

const SiteContext = createContext<SiteState | null>(null);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = safeGet(THEME_KEY) as Theme | null;
    if (saved && THEMES.includes(saved)) return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [flags, setFlags] = useState<Record<FlagId, boolean>>({ terminal: false, drift: false, chain: false });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    safeSet(THEME_KEY, theme);
  }, [theme]);

  const cycleTheme = useCallback(() => setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]), []);
  const award = useCallback((id: FlagId) => setFlags((f) => (f[id] ? f : { ...f, [id]: true })), []);
  const flagCount = Object.values(flags).filter(Boolean).length;

  return <SiteContext.Provider value={{ theme, cycleTheme, flags, award, flagCount }}>{children}</SiteContext.Provider>;
};

export function useSite(): SiteState {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}

export function copyText(text: string) {
  try {
    if (navigator.clipboard) { navigator.clipboard.writeText(text); return; }
  } catch { /* fall through */ }
  const ta = document.createElement("textarea");
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch { /* ignore */ }
  document.body.removeChild(ta);
}

export const GridLines: React.FC = () => (
  <div className="gridlines" aria-hidden="true"><div><span /><span /><span /><span /></div></div>
);
