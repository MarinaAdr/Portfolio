import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Download } from 'lucide-react';
import CV from "../assets/pdf/cv.pdf"; 

const Contact = () => {
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
    <section id="contact" className="py-20 bg-slate-900  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-white">
          Contact & Réseaux
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >

            <a
              href="https://github.com/MarinaAdr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#333] text-white rounded-full hover:bg-[#222] transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:marinaclaudia003@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Email</span>
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.05, 1],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              delay: 0.4, 
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror"
            }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration !
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;