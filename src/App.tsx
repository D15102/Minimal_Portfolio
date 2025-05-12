import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Settings } from "lucide-react";

function App() {
  const [highPerformanceMode, setHighPerformanceMode] = useState(false);

  const togglePerformanceMode = () => {
    setHighPerformanceMode(!highPerformanceMode);
    // Save preference to localStorage
    localStorage.setItem('highPerformanceMode', (!highPerformanceMode).toString());
  };

  // Load preference from localStorage on initial render
  React.useEffect(() => {
    const savedMode = localStorage.getItem('highPerformanceMode');
    if (savedMode !== null) {
      setHighPerformanceMode(savedMode === 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      <Navbar />

      {/* Performance Mode Toggle */}
      <div className="fixed top-24 right-6 z-40">
        <button
          onClick={togglePerformanceMode}
          className={`p-3 rounded-full shadow-lg transition duration-300 cursor-pointer flex items-center gap-2 ${
            highPerformanceMode ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          title={highPerformanceMode ? "High Performance Mode: ON" : "High Performance Mode: OFF"}
        >
          <Settings size={20} />
          <span className="text-xs font-medium">{highPerformanceMode ? "High Perf" : "Normal"}</span>
        </button>
      </div>

      {/* Hero Section */}
      <div id="home" className="scroll-mt-20">
      <Home highPerformanceMode={highPerformanceMode} />
      </div>

      {/* Skills Section */}
      <div id="technicalSkills" className="scroll-mt-20">
      <TechnicalSkills />
      </div>

      {/* Projects Section */}
      <div id="projects" className="scroll-mt-20">
      <Projects />
      </div>

      {/* Tools Section */}
      <div id="tools" className="scroll-mt-20">
      <Tools />
      </div>

      {/* Footer */}
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
