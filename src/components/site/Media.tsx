import React from "react";
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
