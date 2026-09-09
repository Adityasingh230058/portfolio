import React, { useEffect, useRef } from "react";

interface SlideDeckProps {
  children: React.ReactNode[];
  slideTitles: string[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({
  children,
  slideTitles,
  currentSlide,
  onSlideChange,
}) => {
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    // Ultra-smooth kinetic wheel transition (Feels like butter / fluid water)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      if (e.deltaY > 15) {
        // Scroll Down -> Glide to Next Slide
        if (currentSlide < children.length - 1) {
          isScrollingRef.current = true;
          onSlideChange(currentSlide + 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 950);
        }
      } else if (e.deltaY < -15) {
        // Scroll Up -> Glide to Prev Slide
        if (currentSlide > 0) {
          isScrollingRef.current = true;
          onSlideChange(currentSlide - 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 950);
        }
      }
    };

    // Keyboard navigation with smooth kinetic duration
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        if (currentSlide < children.length - 1) {
          e.preventDefault();
          isScrollingRef.current = true;
          onSlideChange(currentSlide + 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 950);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentSlide > 0) {
          e.preventDefault();
          isScrollingRef.current = true;
          onSlideChange(currentSlide - 1);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 950);
        }
      }
    };

    // Touch gesture support for mobile & trackpads
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrollingRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;

      if (deltaY > 30 && currentSlide < children.length - 1) {
        isScrollingRef.current = true;
        onSlideChange(currentSlide + 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 950);
      } else if (deltaY < -30 && currentSlide > 0) {
        isScrollingRef.current = true;
        onSlideChange(currentSlide - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 950);
      }
    };

    const container = document.getElementById("slide-deck-viewport");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, children.length, onSlideChange]);

  const progressPercent = ((currentSlide + 1) / children.length) * 100;

  return (
    <div
      id="slide-deck-viewport"
      className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#faf9f5] dark:bg-[#09090b] select-none transition-colors duration-700 relative"
    >
      {/* Top Clean Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] z-50">
        <div
          className="h-full bg-[#141413] dark:bg-emerald-500 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Butter-Smooth Pure Minimalist Kinetic Viewport */}
      <div
        className="w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {children.map((slide, idx) => {
          const isActive = currentSlide === idx;
          const isPast = idx < currentSlide;
          return (
            <div
              key={idx}
              className="h-screen w-screen max-h-screen overflow-hidden px-4 sm:px-8 pt-16 pb-6 flex flex-col justify-center items-center relative"
            >
              <div
                className={`max-w-7xl mx-auto w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                  isActive
                    ? "opacity-100 scale-100 translate-y-0 filter-none"
                    : isPast
                    ? "opacity-0 scale-95 -translate-y-16 pointer-events-none"
                    : "opacity-0 scale-95 translate-y-16 pointer-events-none"
                }`}
              >
                {slide}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
