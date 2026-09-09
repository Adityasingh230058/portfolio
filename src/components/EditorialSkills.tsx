import React from "react";

export const EditorialSkills: React.FC = () => {
  // Row 1: Cloud & Infrastructure (Real Brand SVGs)
  const cloudSkills = [
    {
      name: "Amazon Web Services",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Google Cloud Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Linux (Ubuntu / RHEL)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Docker Containers",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git & Version Control",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub Actions",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Bash & Shell Scripting",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
    {
      name: "Amazon S3 Lakehouse",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Nginx & Networking",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
  ];

  // Row 2: Languages & Core CS (Real Brand SVGs)
  const devSkills = [
    {
      name: "Python 3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++ (OOP & Systems)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "PostgreSQL & SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Java (Core & DSA)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Pandas Data Science",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy Computing",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Apache Spark / PySpark",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    },
  ];

  // Row 3: Security Tools & Frameworks
  const securitySkills = [
    {
      name: "Wireshark Packet Capture",
      logo: "https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg",
    },
    {
      name: "MITRE ATT&CK Matrix",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shield/shield-original.svg",
    },
    {
      name: "Windows ETW Telemetry",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "Splunk & SIEM Triage",
      logo: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg",
    },
    {
      name: "Postman API Security",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "MySQL & Database Security",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Node.js Automation",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Jupyter Notebooks",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
  ];

  // Duplicate arrays for continuous infinite looping
  const row1 = [...cloudSkills, ...cloudSkills];
  const row2 = [...devSkills, ...devSkills];
  const row3 = [...securitySkills, ...securitySkills];

  return (
    <section id="skills" className="w-full bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-[#141413] dark:bg-[#f4f4f5] text-[#faf9f5] dark:text-[#09090b]">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#141413] dark:text-[#f4f4f5] tracking-tight">
              TECHNICAL SKILLS & TOOLS
            </h2>
          </div>
        </div>

        {/* 100% Crisp, Sharp, Borderless & Blur-Free Brand Logos Stream */}
        <div className="space-y-6 py-2 w-full">

          {/* Row 1: Cloud & DevOps (Scrolling Left) */}
          <div className="overflow-hidden flex items-center w-full">
            <div className="animate-marquee gap-10 sm:gap-14 flex items-center py-2">
              {row1.map((item, idx) => (
                <div
                  key={`cloud-${idx}`}
                  className="flex items-center gap-3.5 group cursor-pointer shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="text-sm sm:text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5] tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Languages & Data Science (Scrolling Right) */}
          <div className="overflow-hidden flex items-center w-full">
            <div className="animate-marquee-reverse gap-10 sm:gap-14 flex items-center py-2">
              {row2.map((item, idx) => (
                <div
                  key={`dev-${idx}`}
                  className="flex items-center gap-3.5 group cursor-pointer shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="text-sm sm:text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5] tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Security & Forensics (Scrolling Left Fast) */}
          <div className="overflow-hidden flex items-center w-full">
            <div className="animate-marquee-fast gap-10 sm:gap-14 flex items-center py-2">
              {row3.map((item, idx) => (
                <div
                  key={`sec-${idx}`}
                  className="flex items-center gap-3.5 group cursor-pointer shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="text-sm sm:text-base font-display font-bold text-[#141413] dark:text-[#f4f4f5] tracking-tight whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
