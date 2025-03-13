import React, { useState } from 'react';
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
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [descRef, descInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.2,
        ease: "easeOut" 
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.8
      }
    }
  };

  // Decorative elements
  const decorativeElements = [
    { x: "5%", y: "10%", size: 6, delay: 0.1 },
    { x: "92%", y: "25%", size: 8, delay: 0.2 },
    { x: "15%", y: "85%", size: 10, delay: 0.3 },
    { x: "80%", y: "80%", size: 5, delay: 0.4 },
    { x: "40%", y: "5%", size: 7, delay: 0.5 },
    { x: "60%", y: "95%", size: 9, delay: 0.6 },
  ];

  // Restructure skills array into rows of 3
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillRows.push(skills.slice(i, i + 3));
  }

  return (
    <section id="skills" className="py-20 bg-[#0a1122] relative overflow-hidden">
      {/* Decorative elements */}
      {decorativeElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-teal-500/10"
          style={{
            left: element.x,
            top: element.y,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { 
            opacity: 0.6, 
            scale: 1,
            transition: { 
              delay: element.delay,
              duration: 0.8,
              ease: "easeOut"
            }
          } : { opacity: 0, scale: 0 }}
        />
      ))}

      {/* Decorative gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center" ref={ref}>
          {/* Title */}
          <motion.div
            ref={titleRef}
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            className="text-center mb-8"
          >
            <h2 className="text-5xl font-bold text-white">
              My <span className="text-teal-400">Skills</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            ref={descRef}
            variants={descriptionVariants}
            initial="hidden"
            animate={descInView ? "visible" : "hidden"}
            className="max-w-2xl text-center mb-12"
          >
            <p className="text-gray-300 leading-relaxed">
              Voici les technologies avec lesquelles je travaille régulièrement pour créer des applications 
              web performantes et modernes.
            </p>
          </motion.div>

          {/* Skills grid - organized in rows of 3 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-w-5xl mx-auto space-y-6"
          >
            {skillRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col sm:flex-row justify-center gap-6">
                {row.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={gridItemVariants}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 } 
                    }}
                    className="bg-[#111a2e] rounded-lg p-6 flex flex-col items-center justify-center shadow-lg border border-[#1e2a47] hover:border-teal-400 transition-all duration-300 relative w-full sm:w-1/3"
                  >
                    {/* Skill highlight glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-teal-500/5 rounded-lg z-0"
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        scale: hoveredSkill === skill.name ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Logo container - enlarged */}
                      <motion.div 
                        className="h-24 w-24 mb-4 flex items-center justify-center"
                        animate={{
                          y: hoveredSkill === skill.name ? -5 : 0,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`} 
                          className="object-contain h-full w-full" 
                        />
                      </motion.div>
                      
                      {/* Skill name - enlarged */}
                      <motion.p 
                        className="text-center font-medium text-lg text-white"
                        animate={{
                          color: hoveredSkill === skill.name ? '#2dd4bf' : '#ffffff',
                          transition: { duration: 0.3 }
                        }}
                      >
                        {skill.name}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated dotted background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <div className="grid grid-cols-10 gap-6 w-full h-full">
          {Array(100).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="w-1 h-1 rounded-full bg-teal-500"
              initial={{ opacity: 0.1, scale: 0 }}
              animate={{ 
                opacity: Math.random() * 0.5 + 0.2, 
                scale: Math.random() * 0.6 + 0.4,
                transition: { 
                  delay: Math.random() * 2,
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                } 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;