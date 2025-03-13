import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  "React", "TypeScript", "Node.js", 
  "PostgreSQL", "Git", "PHP",
  "TailwindCSS", "MongoDB", "Express",
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [nameRef, nameInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
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

  const expandVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: index => ({ 
      opacity: 0.2, 
      scale: 1,
      transition: { 
        delay: index * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Icons for background decoration
  const backgroundIcons = [
    { icon: "💻", x: "10%", y: "10%", rotate: -15, delay: 0 },
    { icon: "⚡", x: "85%", y: "20%", rotate: 10, delay: 0.2 },
    { icon: "🔍", x: "20%", y: "80%", rotate: 5, delay: 0.4 },
    { icon: "⚙️", x: "75%", y: "75%", rotate: -10, delay: 0.6 },
    { icon: "📱", x: "45%", y: "25%", rotate: 15, delay: 0.8 },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements inspired by the image */}
      <div className="absolute inset-0 z-0 opacity-20">
        {backgroundIcons.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={iconVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute text-3xl"
            style={{ 
              left: item.x, 
              top: item.y, 
              transform: `rotate(${item.rotate}deg)` 
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Decorative curved line like in the image */}
      <motion.div 
        className="absolute bottom-10 left-20 text-teal-500 opacity-30"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={inView ? { opacity: 0.3, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
          <path 
            d="M10,50 Q60,10 100,50 Q140,90 190,50" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* Left side with title and text */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <motion.div
                className="flex items-baseline gap-4"
                variants={titleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <h2 className="text-5xl font-bold text-white">About</h2>
                <span className="text-5xl font-bold text-teal-400">me</span>
              </motion.div>
              
              <motion.div
                ref={nameRef}
                variants={nameVariants}
                initial="hidden"
                animate={nameInView ? "visible" : "hidden"}
                className="text-2xl font-semibold text-teal-300"
              >
                ANDRIANAMBININTSOA Marina Claudia
              </motion.div>

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-gray-300"
              >
                <p className="mb-4">
                  Passionnée par le développement web et les nouvelles technologies, je suis une développeuse fullstack créative et déterminée. Mon objectif est de créer des applications web performantes et innovantes qui répondent aux besoins des utilisateurs.
                </p>
                
                {/* Animated expandable content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-4 space-y-4 overflow-hidden"
                    >
                      <p>
                        Avec 2 ans d'expérience dans le <strong> développement web et test</strong> (manuel et automatise), j'ai eu l'opportunité de travailler sur divers projets allant des applications e-commerce aux plateformes de gestion complexes. Ma spécialité est de combiner des interfaces utilisateur élégantes avec des architectures backend robustes.
                      </p>
                      <p>
                        Je suis constamment à l'affût des dernières tendances technologiques et j'aime relever de nouveaux défis. Mon approche du développement est centrée sur l'utilisateur, avec une attention particulière à l'accessibilité et aux performances.
                      </p>
                      <p className="font-medium text-teal-400">
                        N'hésitez pas à me contacter pour discuter de projets passionnants ou pour explorer de nouvelles opportunités de collaboration !
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  onClick={toggleExpand} 
                  className="text-teal-400 flex items-center gap-2 hover:text-teal-300 transition-colors"
                >
                  {isExpanded ? "Read less" : "Read more"}
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </motion.div>
            </div>
          </div>
          
          {/* Right side with illustration and skills */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Illustration can be added here to match the sleeping developer from the image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-10"
              >
                <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-8 relative z-10">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    {/* Background decorative icons like in the image */}
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

                  <h3 className="text-xl font-semibold text-teal-400 mb-4">My Skills</h3>
                  
                  <motion.div
                    ref={skillsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    className="grid grid-cols-3 gap-3"
                  >
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        className="bg-slate-800 hover:bg-slate-700 rounded-md p-3 text-center shadow-lg border border-slate-700 hover:border-teal-500 transition-all duration-300"
                      >
                        <p className="text-white font-medium">
                          {skill}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;