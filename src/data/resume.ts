// Single source of truth. Everything on the site comes from Aditya's resume.

export const person = {
  name: "Aditya Singh",
  headline: "Cloud Security | Cybersecurity | B.Tech CSE (Cybersecurity), NMIMS University, 2027",
  location: "Mumbai, India",
  email: "adityasingh120444@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-singh-083510379/",
  linkedinLabel: "linkedin.com/in/aditya-singh-083510379",
  github: "https://github.com/Adityasingh230058",
  githubLabel: "github.com/Adityasingh230058",
  summary:
    "Final-year B.Tech Cybersecurity student targeting cloud security roles. Hands-on with AWS security (IAM, S3, RDS, CIS benchmarks), Python automation, threat detection with MITRE ATT&CK, and serverless data pipelines. Completed a cybersecurity internship at Vodafone Idea building compliance automation tools.",
  seeking: "a 4–6 month internship in cloud security, cybersecurity or data",
  roles: ["Cloud security", "Detection engineering", "Security automation"],
};

export const fillSentence =
  "I build detection engines mapped to MITRE ATT&CK, AWS posture checks against CIS benchmarks, and serverless pipelines that turn raw data into answers.";

export const stats = [
  { value: 69, label: "YAML detection rules" },
  { value: 48, label: "MITRE ATT&CK techniques" },
  { value: 409, label: "automated tests" },
  { value: 18, label: "CIS controls on AWS" },
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    company: "Vodafone Idea Ltd.",
    mode: "On-site",
    period: "May 2026 – Jul 2026",
    points: [
      "Built Python automation tools for configuration validation and compliance workflows, reducing manual effort.",
      "Supported cloud orchestration and cloud infrastructure automation alongside day-to-day operational tasks.",
      "Tested, debugged and documented automation solutions in a telecom enterprise environment.",
    ],
  },
];

export const projects = {
  panopticon: {
    name: "Panopticon",
    subtitle: "Distributed Endpoint Detection and Response (EDR) platform",
    github: "https://github.com/Adityasingh230058/eyedetect",
    points: [
      "Built the Python detection and correlation engine of an EDR platform that ingests Windows ETW and Linux endpoint telemetry.",
      "Wrote 69 YAML detection rules covering 48 MITRE ATT&CK techniques, including single-event, sequence, threshold and statistical (C2 beaconing) detections.",
      "Correlated detections over a temporal process-provenance graph so a full attack chain (macro → payload → C2 → persistence) surfaces as one incident.",
      "Produced explainable alerts with recommended containment actions for an analyst-approved response engine; validated with 409 automated tests and attack replay scenarios.",
    ],
  },
  drift: {
    name: "Cloud Drift Sentinel",
    subtitle: "AWS security posture management and drift engine",
    text: "Checks AWS assets (IAM, S3, RDS, Security Groups) against 18 CIS benchmark controls, detects manual configuration drift by hashing an Infrastructure-as-Code baseline and comparing it with live state, and auto-generates a remediation playbook for each failed check.",
  },
  pipeline: {
    name: "AWS serverless data pipeline",
    subtitle: "AWS Glue, S3, Athena, QuickSight",
    text: "Serverless ETL pipeline that ingests, validates and processes employee metadata CSV datasets. Converting data to columnar Parquet with partitioning reduced query latency and storage footprint.",
  },
};

export const skillGroups: Record<string, string[]> = {
  Cloud: ["AWS S3", "AWS IAM", "AWS RDS", "AWS Glue", "Amazon Athena", "Amazon QuickSight", "Microsoft Azure", "Google Cloud", "Infrastructure as Code", "Serverless", "ETL", "Cloud automation"],
  Security: ["CSPM", "EDR", "Threat detection", "Threat modelling", "VAPT", "Compliance automation", "CIS Benchmarks", "MITRE ATT&CK", "Digital forensics", "Cryptography", "Firewalls", "Kali Linux", "Wireshark"],
  "Programming and data": ["Python", "SQL", "MySQL", "C++", "Java (OOP)", "Linux", "Git", "GitHub Actions (CI)", "pytest", "YAML"],
  "Web and other": ["HTML", "CSS", "JavaScript", "Blockchain fundamentals"],
};

export const certifications = {
  AWS: ["Well-Architected Proficient", "Cloud Practitioner Knowledge", "Well-Architected Foundations", "Network Firewall", "Firewall Manager", "IAM Foundations", "IAM Identity Center", "Cognito", "Security Incident Response", "Amazon Inspector", "Secrets Manager", "AWS Educate Introduction to Cloud 101"],
  "Google Cloud": ["Network and Security Fundamentals", "Cloud Computing Fundamentals"],
};

export const education = [
  { title: "B.Tech, Computer Science and Engineering (Cybersecurity)", place: "MPSTME, NMIMS University, Mumbai", score: "CGPA 3.08 / 4", period: "2023 – 2027" },
  { title: "HSC", place: "Ramniranjan Jhunjhunwala College of Arts, Science and Commerce", score: "74.00%", period: "2021" },
  { title: "SSC", place: "Don Bosco High School", score: "70.20%", period: "2019" },
];

export const qa: [string, string][] = [
  ["What are you looking for?", `${person.seeking.charAt(0).toUpperCase()}${person.seeking.slice(1)}. I'm a final-year B.Tech Cybersecurity student at NMIMS, graduating in 2027, based in Mumbai.`],
  ["What's your strongest project?", "Panopticon, a distributed EDR platform. I built its Python detection and correlation engine, wrote 69 YAML rules covering 48 MITRE ATT&CK techniques, and validated it with 409 automated tests."],
  ["What did you do at Vodafone Idea?", "As a Cybersecurity Intern (May – Jul 2026) I built Python automation for configuration validation and compliance workflows, and supported cloud orchestration and infrastructure automation."],
  ["How deep is your AWS experience?", "Hands-on with IAM, S3, RDS, Glue, Athena and QuickSight. I built a CSPM engine checking 18 CIS controls and a serverless ETL pipeline, and I've completed 12 AWS trainings including Well-Architected Proficient."],
];

export const resumeMarkdown = `# ${person.name}
${person.headline}
${person.location} · ${person.email} · ${person.linkedinLabel} · ${person.githubLabel}

${person.summary} Seeking ${person.seeking}.

## Experience
- ${experience[0].role}, ${experience[0].company} (${experience[0].mode}, ${experience[0].period})
${experience[0].points.map((p) => `  - ${p}`).join("\n")}

## Projects
- ${projects.panopticon.name}: ${projects.panopticon.subtitle} (${projects.panopticon.github})
${projects.panopticon.points.map((p) => `  - ${p}`).join("\n")}
- ${projects.drift.name}: ${projects.drift.subtitle}. ${projects.drift.text}
- ${projects.pipeline.name} (${projects.pipeline.subtitle}). ${projects.pipeline.text}

## Skills
${Object.entries(skillGroups).map(([k, v]) => `- ${k}: ${v.join(", ")}`).join("\n")}

## Certifications and training
${Object.entries(certifications).map(([k, v]) => `- ${k}: ${v.join(", ")}`).join("\n")}

## Education
${education.map((e) => `- ${e.title} — ${e.place} | ${e.period} | ${e.score}`).join("\n")}
`;
