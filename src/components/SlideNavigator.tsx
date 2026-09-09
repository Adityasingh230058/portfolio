import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SlideNavigatorProps {
  slides: { id: string; title: string; num: string }[];
}

export const SlideNavigator: React.FC<SlideNavigatorProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Find current active slide
      const slideElements = slides.map((s) => document.getElementById(s.id));
      const scrollMiddle = scrollY + window.innerHeight / 2;

      for (let i = slideElements.length - 1; i >= 0; i--) {
        const el = slideElements[i];
        if (el && el.offsetTop <= scrollMiddle) {
          setActiveSlide(i);
          break;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (activeSlide < slides.length - 1) {
          e.preventDefault();
          scrollToSlide(activeSlide + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeSlide > 0) {
          e.preventDefault();
          scrollToSlide(activeSlide - 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlide, slides]);

  const scrollToSlide = (index: number) => {
    const target = document.getElementById(slides[index].id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#e5e3d8] z-50">
        <div
          className="h-full bg-[#141413] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Right Slide Dots Indicator (Desktop) */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => scrollToSlide(idx)}
            className="group flex items-center gap-2 text-right transition-all"
            title={s.title}
          >
            <span
              className={`text-[10px] font-mono transition-opacity duration-200 ${
                activeSlide === idx
                  ? "opacity-100 font-bold text-[#141413]"
                  : "opacity-0 group-hover:opacity-100 text-[#6e6d65]"
              }`}
            >
              {s.num} {s.title}
            </span>
            <span
              className={`transition-all duration-300 rounded-full ${
                activeSlide === idx
                  ? "w-2.5 h-6 bg-[#141413] rounded-md"
                  : "w-1.5 h-1.5 bg-[#c8c5b6] group-hover:bg-[#141413] group-hover:scale-125"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Floating Bottom-Right Slide Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 p-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#e5e3d8] shadow-md font-mono text-xs text-[#141413]">
        <button
          onClick={() => activeSlide > 0 && scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="p-1.5 rounded-lg hover:bg-[#faf9f5] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Previous Page / Slide (Arrow Up)"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <span className="px-2 font-bold text-[11px] tracking-wider">
          {slides[activeSlide]?.num || "01"} <span className="text-[#9e9d93]">/</span> 0{slides.length}
        </span>

        <button
          onClick={() => activeSlide < slides.length - 1 && scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === slides.length - 1}
          className="p-1.5 rounded-lg hover:bg-[#faf9f5] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Next Page / Slide (Arrow Down)"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
