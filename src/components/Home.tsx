import { useState, useEffect, lazy, Suspense } from 'react'
import { Github, Linkedin, Instagram } from "lucide-react";

// Lazy load Spline to improve initial load time
const Spline = lazy(() => import("@splinetool/react-spline"));

interface HomeProps {
  highPerformanceMode?: boolean;
}

const Home = ({ highPerformanceMode = false }: HomeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile and handle window resize
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkDevice();

    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);

    // Decide whether to show Spline based on device and performance mode
    // If highPerformanceMode is true, don't show Spline regardless of device
    setShowSpline(!isMobile && !highPerformanceMode);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [highPerformanceMode, isMobile]);

  // Handle Spline load event
  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  // Fallback image for mobile or when Spline is loading
  const renderFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg shadow-md shadow-emerald-400 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Developer Workspace"
        className="w-full h-full object-cover rounded-lg opacity-70"
      />
    </div>
  );

  return (
    <div className="min-h-screen container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Crafting digital experiences with modern web technologies.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/D15102"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/surti-dharmik-359a03349/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/surtidharmik/"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[35rem] flex items-center justify-center">
          {showSpline ? (
            <Suspense fallback={renderFallback()}>
              <div className={`w-full h-full relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-full h-full rounded-lg shadow-md shadow-emerald-400 overflow-hidden">
                  <Spline
                    scene="https://prod.spline.design/djvZoiUTX2iPDWbc/scene.splinecode"
                    onLoad={handleSplineLoad}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
              {isLoading && renderFallback()}
            </Suspense>
          ) : (
            renderFallback()
          )}
        </div>
      </div>
    </div>
  )
}

export default Home