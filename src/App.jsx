import { useState, useEffect, useRef } from "react";
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Reviews } from "./components/sections/Reviews";
import { Experience } from "./components/sections/Experience";
import { ReviewsAndContact } from "./components/sections/ReviewsAndContact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const sections = useRef([]);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const scrollToSection = (index) => {
    if (isScrolling.current || !sections.current[index]) return;
    
    isScrolling.current = true;
    setCurrentSection(index);
    
    sections.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // Matches the scroll duration
  };

  const handleWheel = (e) => {
    if (isScrolling.current) {
      e.preventDefault();
      return;
    }

    // Only respond to vertical scrolling
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

    e.preventDefault();
    
    if (e.deltaY > 5) {
      // Scroll down
      scrollToSection(Math.min(currentSection + 1, sections.current.length - 1));
    } else if (e.deltaY < -5) {
      // Scroll up
      scrollToSection(Math.max(currentSection - 1, 0));
    }
  };

  const handleKeyDown = (e) => {
    if (isScrolling.current) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      scrollToSection(Math.min(currentSection + 1, sections.current.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      scrollToSection(Math.max(currentSection - 1, 0));
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isScrolling.current) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 10) {
      // Swipe down
      scrollToSection(Math.min(currentSection + 1, sections.current.length - 1));
    } else if (diff < -10) {
      // Swipe up
      scrollToSection(Math.max(currentSection - 1, 0));
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isLoaded, currentSection]);

  return (
    <>
      {/* Main App Content */}
      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } relative z-10`}
          ref={containerRef}
        >
          <Navbar />
          <div className="scroll-section" ref={el => sections.current[0] = el}>
            <Home isLoaded={isLoaded} />
          </div>
          <div className="scroll-section" ref={el => sections.current[1] = el}>
            <About />
          </div>
          <div className="scroll-section" ref={el => sections.current[2] = el}>
            <Experience isLoaded={isLoaded}/>
          </div>
          <div className="scroll-section" ref={el => sections.current[3] = el}>
            <Projects />
          </div>
          <div className="scroll-section" ref={el => sections.current[4] = el}>
            <ReviewsAndContact />
          </div>


          {/* Navigation Dots */}
          <div className="nav-dots">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className={`nav-dot ${currentSection === index ? 'active' : ''}`}
                onClick={() => scrollToSection(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;