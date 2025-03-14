import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { ChevronDown } from 'lucide-react';
import Home from "../assets/home.png";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home 2.png";
import CV from "../assets/pdf/cv.pdf"; 


const Header = () => {
  // State pour suivre l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Tableau des images
  const images = [Home, Home1, Home2];

  // Effet pour changer l'image toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  // Animation variants for the title letters
  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        delay: i * 0.05,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }),
  };

  // Text for animated title
  const creativeText = "CREATIVE";
  const designerText = "DEVELOPER & TESTER";

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create an anchor element and set properties
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'cv.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-900 min-h-screen relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-white text-xl font-bold">Hello world!</div>
        <div className="flex gap-6">
          <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-primary transition-colors">About Me</a>
          <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-[calc(100vh-80px)] flex items-center justify-center"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left content - Text and buttons */}
          <div className="relative z-10 text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 overflow-hidden">
              <div className="flex flex-wrap">
                {creativeText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={titleAnimation}
                    initial="hidden"
                    animate="visible"
                    className="text-white inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block", marginRight: char === " " ? "0.5rem" : "0" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap space-y-9">
                {designerText.split("  ").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index + creativeText.length}
                    variants={titleAnimation}
                    initial="hidden"
                    animate="visible"
                    className="text-teal-400 inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </h1>
            
            {/* Added typed text with changing content */}
            <div className="text-lg md:text-xl text-gray-300 mb-6">
              <ReactTyped
                strings={[
                  "Développeuse fullstack JS",
                  "Passionnée par le web",
                  "Passionnée de React",
                  
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                cursorChar="|"
                className="text-gray-300"
              />
            </div>
            
            <div className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-teal-400 text-slate-900 font-medium hover:bg-teal-300 rounded-full transition-colors duration-300"
              >
                Hire me
              </a>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-slate-800 text-white flex items-center gap-2 rounded-full transition-all duration-300 hover:bg-slate-700"
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right content - Illustration */}
          <div className="mt-10 md:mt-0 relative">
            <div className="relative z-10">
              {/* Affiche uniquement l'image actuelle avec une transition en fondu */}
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="developer illustration" 
                className="w-full h-full bg-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="absolute inset-0 -z-0">
              <svg width="300" height="300" viewBox="0 0 300 300" className="text-teal-900 opacity-20">
                <g>
                  {/* Design doodles */}
                  <text x="220" y="60" className="text-xs fill-current">Design</text>
                  <text x="150" y="120" className="text-xs fill-current">UI/UX</text>
                  <text x="80" y="50" className="text-xs fill-current">Web</text>
                  <text x="240" y="180" className="text-xs fill-current">Code</text>
                  <text x="60" y="150" className="text-xs fill-current">Figma</text>
                  <text x="180" y="220" className="text-xs fill-current">React</text>
                  <path d="M50,150 C100,50 200,100 250,50" stroke="currentColor" fill="none" strokeWidth="1"/>
                  <path d="M80,80 C120,180 220,120 260,200" stroke="currentColor" fill="none" strokeWidth="1"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-slate-800 p-4 rounded-md">
            <ChevronDown className="w-6 h-6 text-teal-400" />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Header;