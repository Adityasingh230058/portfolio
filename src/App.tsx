import React, { useState, useEffect } from "react";
import { EditorialHeader } from "./components/EditorialHeader";
import { EditorialHero } from "./components/EditorialHero";
import { EditorialStats } from "./components/EditorialStats";
import { EditorialSkills } from "./components/EditorialSkills";
import { EditorialAbout } from "./components/EditorialAbout";
import { EditorialExperience } from "./components/EditorialExperience";
import { EditorialProjects } from "./components/EditorialProjects";
import { EditorialCertifications } from "./components/EditorialCertifications";
import { EditorialEducation } from "./components/EditorialEducation";
import { EditorialContact } from "./components/EditorialContact";
import { EditorialDossierModal } from "./components/EditorialDossierModal";
import { SocStatusPill } from "./components/SocStatusPill";
import { SlideDeck } from "./components/SlideDeck";

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("aditya_portfolio_theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("aditya_portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("aditya_portfolio_theme", "paper");
    }
  }, [isDark]);

  const slideTitles = [
    "Introduction",
    "Key Highlights",
    "Technical Skills",
    "About Me",
    "Vodafone Idea Work",
    "Featured Projects",
    "Certifications",
    "Academic Education",
    "Get In Touch",
  ];

  return (
    <div className={`h-screen w-screen overflow-hidden ${isDark ? "dark bg-[#09090b] text-[#f4f4f5]" : "bg-[#faf9f5] text-[#141413]"} font-sans selection:bg-[#141413] selection:text-[#faf9f5] dark:selection:bg-emerald-500 dark:selection:text-black transition-colors duration-500`}>
      {/* Top Header Navigation with Theme Toggle */}
      <EditorialHeader
        currentSlide={currentSlide}
        onSelectSlide={(idx) => setCurrentSlide(idx)}
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* 9-Page Smooth Slide Deck */}
      <SlideDeck
        slideTitles={slideTitles}
        currentSlide={currentSlide}
        onSlideChange={(idx) => setCurrentSlide(idx)}
      >
        {/* Page 01: Hero Introduction */}
        <EditorialHero onOpenResume={() => setResumeOpen(true)} />

        {/* Page 02: Key Highlights & Metrics */}
        <EditorialStats />

        {/* Page 03: Technical Skills & Tools (Moving Vector Logos) */}
        <EditorialSkills />

        {/* Page 04: About Me & Foundation */}
        <EditorialAbout />

        {/* Page 05: Vodafone Idea Work Experience */}
        <EditorialExperience />

        {/* Page 06: Featured Projects */}
        <EditorialProjects />

        {/* Page 07: Certifications & Training */}
        <EditorialCertifications />

        {/* Page 08: Education History */}
        <EditorialEducation />

        {/* Page 09: Get In Touch */}
        <EditorialContact />
      </SlideDeck>

      {/* Floating Interactive Live SOC Status Indicator */}
      <SocStatusPill onOpenResume={() => setResumeOpen(true)} />

      {/* Full Resume Modal */}
      <EditorialDossierModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
