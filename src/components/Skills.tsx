import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactLogo from "../assets/react.png";
import TsLogo from "../assets/typescript-logo.png";
import node from "../assets/nodejs-logo.png";
import postgresql from "../assets/postgresql-logo.png";
import git from "../assets/git-logo.png";
import php from "../assets/php-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import mongo from "../assets/mongodb-logo.png";
import express from "../assets/express-logo.png";

// Technology logos data with image imports
const skills = [
  { name: "React", logo: ReactLogo },
  { name: "TypeScript", logo: TsLogo },
  { name: "Node.js", logo: node },
  { name: "PostgreSQL", logo: postgresql },
  { name: "Git", logo: git },
  { name: "PHP", logo: php },
  { name: "TailwindCSS", logo: tailwind },
  { name: "MongoDB", logo: mongo },
  { name: "Express", logo: express },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-4">My <span className="text-teal-400">Skills</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Voici les technologies avec lesquelles je travaille régulièrement pour créer des applications web performantes et modernes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-3xl"
          >
            <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-8 relative z-10">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                {/* Background decorative icons */}
                <div className="grid grid-cols-5 gap-6 w-full h-full">
                  {Array(20).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      {i % 4 === 0 && <span className="text-teal-500">💻</span>}
                      {i % 4 === 1 && <span className="text-teal-500">📱</span>}
                      {i % 4 === 2 && <span className="text-teal-500">⌨️</span>}
                      {i % 4 === 3 && <span className="text-teal-500">✉️</span>}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                ref={skillsRef}
                variants={containerVariants}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-slate-800 hover:bg-slate-700 rounded-md p-3 text-center shadow-lg border border-slate-700 hover:border-teal-500 transition-all duration-300 flex flex-col items-center"
                  >
                    <div className="h-16 w-16 mb-2 flex items-center justify-center">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`} 
                        className="object-contain h-full w-full" 
                      />
                    </div>
                    <p className="text-white font-medium text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;