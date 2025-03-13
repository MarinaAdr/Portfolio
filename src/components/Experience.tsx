import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: "Refitany Géomètre Expert",
    position: "Développeur Web",
    period: "Sept 2024 - Mars 2025",
    description: "Conception & Backend d'une application de gestion de syndic",
    tasks: [
      "Conception et modélisation de la BDD",
      "Développement d'une API REST avec Express et Node",
      "Intégration avec MySQL",
      "Mise en place de l'authentification et des autorisations",
    ]
  },
  {
    company: "SOA",
    position: "Testeur Logiciel et TMA",
    period: "2022 - 2024",
    description: "Tests manuels et automatisés avec CodeceptJS",
    tasks: [
      "Création et exécution de plans de test",
      "Automatisation des tests avec CodeceptJS",
      "Correction des pipelines",
      "Reporting et suivi des bugs",
      "Intégration CSS d'une application web",
      "Maintenance des sites web en Drupal",
      "Maintenance et ajout de fonctionnalité sur une application web en Symfony",
    ]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [titleRef, titleInView] = useInView({
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const taskVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Decorative elements
  const decorativeElements = [
    { x: "10%", y: "15%", size: 8, delay: 0.1 },
    { x: "85%", y: "30%", size: 10, delay: 0.2 },
    { x: "20%", y: "75%", size: 12, delay: 0.3 },
    { x: "75%", y: "80%", size: 6, delay: 0.4 },
    { x: "45%", y: "10%", size: 9, delay: 0.5 },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a1122] relative overflow-hidden">
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

      {/* Decorative vertical line */}
      <motion.div
        className="absolute left-1/2 top-32 bottom-20 w-0.5 bg-gradient-to-b from-teal-500/70 via-teal-500/30 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Decorative gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <motion.div
            ref={titleRef}
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <h2 className="text-5xl font-bold text-white">
              Mes <span className="text-teal-400">Expériences</span>
            </h2>
          </motion.div>

          {/* Experiences */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-w-4xl mx-auto space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 -ml-3 h-6 w-6 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 border-2 border-white z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                />

                {/* Card */}
                <motion.div
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="bg-[#111a2e] rounded-xl shadow-xl p-8 border border-[#1e2a47] hover:border-teal-400 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    {/* Left side */}
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-bold text-teal-400 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-xl text-white mb-1">
                        {exp.position}
                      </p>
                      <p className="text-gray-400 mb-4 inline-block px-3 py-1 rounded-full bg-[#1e2a47] text-sm">
                        {exp.period}
                      </p>
                    </div>

                    {/* Right side */}
                    <div className="md:w-2/3">
                      <p className="text-gray-300 mb-4 text-lg">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                          <motion.li 
                            key={taskIndex}
                            custom={taskIndex}
                            variants={taskVariants}
                            initial="hidden"
                            animate={activeIndex === index || inView ? "visible" : "hidden"}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <div className="flex-shrink-0 pt-1">
                              <motion.div 
                                className="h-2 w-2 rounded-full bg-teal-400"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                            <span>{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated dotted background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
        <div className="grid grid-cols-12 gap-8 w-full h-full">
          {Array(120).fill(0).map((_, i) => (
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

export default Experience;