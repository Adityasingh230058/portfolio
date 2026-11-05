import React from "react";
import { SiteProvider } from "./site-context";
import { BootIntro, Header, TopSection, Feed, useBoot } from "./components/site/Top";
import { Lab } from "./components/site/Lab";
import { Projects, CaseStudy, About, Contact, Floating } from "./components/site/Rest";

const Site: React.FC = () => {
  const boot = useBoot();
  return (
    <>
      <a href="#top" className="sr-only">Skip to content</a>
      {boot.booting && <BootIntro count={boot.count} onSkip={boot.end} />}
      <Header />
      <main id="top">
        <TopSection ready={!boot.booting} />
        <Feed />
        <Lab />
        <Projects />
        <CaseStudy />
        <About />
        <Contact onReplay={boot.replay} />
      </main>
      <Floating />
    </>
  );
};

export const App: React.FC = () => (
  <SiteProvider>
    <Site />
  </SiteProvider>
);

export default App;
