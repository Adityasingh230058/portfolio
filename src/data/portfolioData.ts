import { Project, Experience, Certification, Education, SkillCategory, StatMetric } from "../types";

export const personalInfo = {
  name: "Aditya Singh",
  role: "Cloud Engineer and CyberSecurity",
  tagline: "Building secure cloud infrastructure, MITRE ATT&CK detection engines, and automated security engineering solutions.",
  bio: "Cybersecurity and Cloud Engineering student at MPSTME, NMIMS University with enterprise hands-on experience at Vodafone Idea Ltd. Focused on architecting resilient AWS cloud environments, building modular threat detection (EDR/XDR) rule engines, and developing high-accuracy ML security classifiers. Dedicated to bridging the gap between rigorous defensive security and scalable cloud architecture.",
  email: "adityasingh120444@gmail.com",
  academicEmail: "aditya.singh58@nmims.in",
  githubUrl: "https://github.com/Adityasingh230058",
  linkedinUrl: "https://www.linkedin.com/in/aditya-singh-083510379/",
  location: "Mumbai, India",
  university: "MPSTME, NMIMS University",
  degree: "B.Tech Computer Science & Engineering (Cybersecurity)",
  graduationYear: "2027",
  cgpa: "2.70/ 4.0",
};

export const statsMetrics: StatMetric[] = [
  {
    label: "Detection Accuracy",
    value: "99.7%",
    subtext: "Random Forest Network Bot Detection",
  },
  {
    label: "Cloud & Security Certs",
    value: "6+",
    subtext: "AWS & Google Cloud Credentials",
  },
  {
    label: "Enterprise Experience",
    value: "Vodafone Idea",
    subtext: "Telecom Cybersecurity Automation",
  },
  {
    label: "Specialization",
    value: "EDR & AWS",
    subtext: "Detection Engineering & Serverless",
  },
];

export const projectsData: Project[] = [
  {
    id: "eyedetect-edr",
    title: "Modular Threat Detection Engine (EDR / XDR)",
    category: "Detection & EDR",
    tier: 1,
    role: "Detection Engine Architect & Rule Evaluation Specialist",
    tagline: "High-performance threat detection engine with MITRE ATT&CK correlation and automated response orchestration.",
    problemSolved: "Traditional signature-based AV fails against living-off-the-land binaries (LOLBins) and memory injection attacks. Modern SOC teams require deterministic, low-latency evaluation of high-volume kernel telemetry with precise MITRE technique attribution.",
    architectureHighlights: [
      "Engineered the core Detection Engine component, ingesting normalized ETW (Event Tracing for Windows) kernel telemetry.",
      "Implemented an in-memory Rule Evaluation engine mapping 80+ detection heuristics to MITRE ATT&CK techniques.",
      "Architected multi-event stateful correlation to detect suspicious parent-child process chains and privilege escalations.",
      "Constructed confidence and severity scoring algorithms to suppress false positives before dispatching actionable alerts.",
      "Built automated active-response containment hooks for process termination and evidence artifact extraction."
    ],
    keyTechnicalImplementation: [
      "Normalized telemetry parser compliant with structured event schemas",
      "Dynamic rule evaluation engine with declarative condition matching",
      "Process tree graph reconstructor for lineage tracking and anomaly detection",
      "MITRE ATT&CK Matrix mapping (Execution, Persistence, Defense Evasion, Discovery)",
      "Automated evidence extraction preserving volatile artifacts for forensic triage"
    ],
    metrics: "Evaluates complex multi-stage attack patterns with sub-second alert generation",
    techStack: ["Python", "Detection Engineering", "MITRE ATT&CK", "Rule Evaluation", "ETW Telemetry", "Process Lineage", "Forensic Triage"],
    githubUrl: "https://github.com/Adityasingh230058",
    mitreMapping: ["T1059 (Command & Scripting)", "T1055 (Process Injection)", "T1078 (Valid Accounts)", "T1543 (Persistence)"],
    featured: true,
  },
  {
    id: "aws-data-pipeline",
    title: "AWS Serverless Data Pipeline for Analytics",
    category: "Cloud & AWS",
    tier: 1,
    role: "Cloud Data & Infrastructure Engineer",
    tagline: "Automated end-to-end serverless ETL pipeline on AWS with Amazon Athena and QuickSight BI.",
    problemSolved: "Manual ingestion and querying of distributed datasets causes severe processing bottlenecks and escalating cloud operational costs without structured partitioning.",
    architectureHighlights: [
      "Engineered an automated serverless ETL ingestion and transformation workflow leveraging AWS Glue and Amazon S3.",
      "Designed an optimized S3 data lake structure utilizing columnar Parquet formatting and hive-style date partitioning.",
      "Configured AWS Glue Data Catalog and crawlers for automated schema inference and metadata governance.",
      "Enabled interactive serverless SQL querying across terabytes of data via Amazon Athena with minimized scan cost.",
      "Built interactive executive analytical dashboards in Amazon QuickSight for real-time visualization and metric tracking."
    ],
    keyTechnicalImplementation: [
      "AWS Glue Python/PySpark serverless transformation scripts",
      "Amazon S3 bucket lifecycle policies, IAM least-privilege roles, and encryption",
      "Amazon Athena SQL workgroups for query performance optimization",
      "Amazon QuickSight visual datasets and automated refresh schedules"
    ],
    metrics: "Fully automated zero-server ETL lifecycle with cost-optimized SQL querying",
    techStack: ["AWS S3", "AWS Glue", "Amazon Athena", "Amazon QuickSight", "IAM", "Python", "SQL", "Serverless ETL"],
    githubUrl: "https://github.com/Adityasingh230058",
    featured: true,
  },
  {
    id: "ai-bot-detection",
    title: "AI-Based Network Bot Detection System",
    category: "AI & ML Security",
    tier: 1,
    role: "Machine Learning & Security Engineer",
    tagline: "Machine learning classifier for high-accuracy real-time network traffic anomaly and botnet detection.",
    problemSolved: "Volumetric and evasive network botnets bypass standard rule-based firewall filters by mimicking legitimate human traffic patterns and rapidly altering packet payloads.",
    architectureHighlights: [
      "Developed a robust Random Forest-based classification pipeline achieving 99.7% validation accuracy on network traffic flows.",
      "Engineered domain-specific network features including packet arrival intervals, byte entropy, flow duration, and protocol flags.",
      "Applied statistical normalization and feature selection techniques to eliminate multicollinearity and reduce inference latency.",
      "Integrated real-time decision boundaries to classify benign network traffic vs. malicious automated bot activity."
    ],
    keyTechnicalImplementation: [
      "Network flow feature extraction pipeline (flow duration, inter-arrival time, packet length variance)",
      "Random Forest ensemble model tuned via cross-validation and hyperparameter optimization",
      "Confusion matrix and ROC-AUC evaluation showing 99.7% detection precision",
      "Modular Python inference engine capable of live socket packet analysis"
    ],
    metrics: "99.7% Classification Accuracy in real-time network traffic validation",
    techStack: ["Python", "Machine Learning", "Random Forest", "Network Security", "Traffic Flow Analysis", "Feature Engineering", "Anomaly Detection"],
    githubUrl: "https://github.com/Adityasingh230058",
    featured: true,
  },
  {
    id: "f1-fan-platform",
    title: "Formula 1 Global Telemetry & Fan Platform",
    category: "Web Engineering",
    tier: 2,
    role: "Frontend Developer & Cloud Deployment",
    tagline: "High-availability multi-page motorsport platform with dynamic team profiles and driver analytics.",
    problemSolved: "Providing motorsport fans with an intuitive, highly responsive, and globally accessible web portal showcasing comprehensive constructor standings, driver statistics, and circuit profiles.",
    architectureHighlights: [
      "Designed a clean multi-page web application featuring responsive grid layouts and custom typography.",
      "Integrated structured data representations for Formula 1 racing teams, driver career statistics, and Grand Prix schedules.",
      "Configured automated continuous deployment and hosting on Render ensuring 99.9% uptime and global CDN distribution."
    ],
    keyTechnicalImplementation: [
      "Semantic HTML5, custom CSS styling, and vanilla JavaScript DOM manipulation",
      "Responsive layout engineering with mobile-first media query breakpoints",
      "Render cloud deployment configuration with automated branch tracking"
    ],
    metrics: "Deployed on Render with global edge availability",
    techStack: ["HTML5", "CSS3", "JavaScript", "Render Cloud", "Responsive UI", "Web Architecture"],
    githubUrl: "https://github.com/Adityasingh230058",
    liveUrl: "https://render.com",
    featured: false,
  }
];

export const experienceData: Experience[] = [
  {
    role: "Cybersecurity Intern",
    company: "Vodafone Idea Ltd.",
    location: "On-site (Enterprise Telecom Environment)",
    period: "25 May 2026 – 10 Jul 2026",
    type: "Internship",
    responsibilities: [
      "Built Python-based automation tools for network and cloud configuration validation, enforcing security baseline compliance.",
      "Streamlined compliance checking workflows, substantially reducing repetitive manual review cycles across telecom systems.",
      "Supported cloud orchestration and cloud infrastructure automation while assisting senior engineers with operational maintenance tasks.",
      "Conducted thorough testing, debugging, and technical documentation of security automation solutions in an enterprise telecom production environment."
    ],
    technologies: ["Python", "Cloud Orchestration", "Configuration Validation", "Compliance Workflows", "Telecom Enterprise Security", "Linux"],
    securityRelevance: "Enterprise-grade defensive security engineering, compliance validation, and infrastructure automation for critical telecom systems.",
    verifiedOutcomes: [
      "Automated configuration validation scripts reducing manual inspection overhead",
      "Standardized compliance reporting workflows for enterprise infrastructure",
      "Delivered robust technical documentation for internal automation tools"
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    name: "AWS: Practitioner Knowledge",
    issuer: "AWS",
    status: "Completed",
    domain: "Cloud Fundamentals, Core Services & Shared Responsibility Model",
    highlight: true
  },
  {
    name: "AWS: Well-Architected Proficient – Training & Certification",
    issuer: "AWS",
    status: "Completed",
    domain: "Security, Reliability, Operational Excellence & Cost Optimization Pillars",
    highlight: true
  },
  {
    name: "AWS: Network Firewall AWS",
    issuer: "AWS",
    status: "Completed",
    domain: "VPC Ingress/Egress Inspection, Stateful Filtering & Threat Prevention",
    highlight: true
  },
  {
    name: "AWS: Identity and Access Management (IAM) Foundations",
    issuer: "AWS",
    status: "Completed",
    domain: "Least-Privilege Policy Design, Role Delegation & Access Governance",
    highlight: true
  },
  {
    name: "Google Cloud: Network and Security Fundamentals",
    issuer: "Google Cloud",
    status: "Completed",
    domain: "VPC Architecture, Cloud Armor, IAM & Security Command Center",
    highlight: false
  },
  {
    name: "Google Cloud: Cloud Computing Fundamental",
    issuer: "Google Cloud",
    status: "Completed",
    domain: "Compute Engine, Cloud Storage, Infrastructure Architecture",
    highlight: false
  }
];

export const educationData: Education[] = [
  {
    institution: "Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS University",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science and Engineering (Cybersecurity)",
    period: "2023 – 2027",
    gpaOrScore: "CGPA: 3.08 / 4.0",
    highlights: [
      "Specialized curriculum in Threat Modelling, Detection Engineering, Cryptography, Digital Forensics, and Cloud Infrastructure.",
      "Hands-on lab work in Penetration Testing (VAPT), Network Packet Inspection (Wireshark), and Secure System Design."
    ],
    relevantCoursework: [
      "Threat Modelling & VAPT",
      "Cloud Computing & AWS Architecture",
      "Digital Forensics & Incident Response",
      "Network Security & Cryptography",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems & SQL"
    ]
  },
  {
    institution: "Ramniranjan Jhunjhunwala College of Arts, Science & Commerce",
    degree: "Higher Secondary Certificate (HSC) — Science",
    period: "2019 – 2021",
    gpaOrScore: "HSC: 74.00%",
    highlights: ["Mathematics, Physics, Chemistry, and Computer Science foundation."]
  },
  {
    institution: "Don Bosco High School & Junior College",
    degree: "Secondary School Certificate (SSC)",
    period: "2019",
    gpaOrScore: "Score: 70.20%",
    highlights: ["Foundational STEM and computer science curriculum."]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    description: "Architecting secure, cost-optimized, and resilient cloud architectures.",
    skills: [
      { name: "AWS S3" },
      { name: "AWS Glue" },
      { name: "Amazon Athena" },
      { name: "Amazon QuickSight" },
      { name: "AWS IAM (Least Privilege)" },
      { name: "AWS Network Firewall" },
      { name: "AWS Lambda" },
      { name: "Microsoft Azure" },
      { name: "Cloud Orchestration" },
      { name: "Serverless ETL" }
    ]
  },
  {
    title: "Cybersecurity & Defense",
    description: "Practical threat detection, vulnerability analysis, and network defense.",
    skills: [
      { name: "Threat Modelling" },
      { name: "MITRE ATT&CK Mapping" },
      { name: "Vulnerability Assessment & Penetration Testing (VAPT)" },
      { name: "Digital Forensics" },
      { name: "Wireshark Packet Analysis" },
      { name: "Kali Linux" },
      { name: "Cryptography" },
      { name: "Firewalls & Network Security" },
      { name: "Information Security" },
      { name: "Blockchain Security Concepts" }
    ]
  },
  {
    title: "Security Engineering & EDR",
    description: "Designing deterministic threat evaluation and endpoint detection logic.",
    skills: [
      { name: "Detection Engineering" },
      { name: "EDR / XDR Architecture" },
      { name: "Rule Evaluation Engines" },
      { name: "Event Correlation" },
      { name: "ETW Kernel Telemetry" },
      { name: "Process Tree Lineage Analysis" },
      { name: "Active Response Containment" },
      { name: "Alert Severity Scoring" }
    ]
  },
  {
    title: "Programming Languages",
    description: "Developing automation tools, security scripts, and algorithmic models.",
    skills: [
      { name: "Python (Automation, ML, SecTools)" },
      { name: "C++ (Systems Programming)" },
      { name: "SQL (Complex Analytical Queries)" },
      { name: "Java (Object-Oriented Programming)" },
      { name: "JavaScript / HTML / CSS" }
    ]
  },
  {
    title: "DevSecOps & Automation",
    description: "Automating compliance validations and secure engineering pipelines.",
    skills: [
      { name: "Configuration Validation Scripts" },
      { name: "Compliance Automation" },
      { name: "Git & GitHub Workflows" },
      { name: "CI/CD Pipeline Integration" },
      { name: "Enterprise System Debugging" },
      { name: "Technical Documentation" }
    ]
  },
  {
    title: "Data & Machine Learning",
    description: "Statistical modeling and real-time security data processing.",
    skills: [
      { name: "Random Forest Classifiers" },
      { name: "Network Traffic Flow Analysis" },
      { name: "MySQL Database Administration" },
      { name: "Data Lake Partitioning (Parquet)" },
      { name: "Feature Engineering for SecOps" }
    ]
  }
];
