import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    title: "Licence en Développement Web",
    institution: "ESTI",
    period: "Mars 2025",
    description: "Formation approfondie en intégration et développement"
  },
  {
    title: "Diplôme C2 en anglais",
    institution: "ITTI",
    period: "2023",
    description: "Niveau avancé en anglais professionnel"
  },
  {
    title: "Baccalauréat série C",
    institution: "ESCA",
    period: "2021",
    description: "Mention assez-bien"
  }
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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

  const timelineVariants = {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2
      }
    }
  };

  const contentVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  });

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(45, 212, 191, 0)" 
    },
    glow: {
      boxShadow: [
        "0 0 0 rgba(45, 212, 191, 0)",
        "0 0 15px rgba(45, 212, 191, 0.3)",
        "0 0 0 rgba(45, 212, 191, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-[#0a1122] relative overflow-hidden">
      {/* Decorative gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-transparent to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white">
            Mes <span className="text-teal-400">Formations</span>
          </h2>
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/70 via-teal-500/30 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 ${index % 2 === 0 ? 'pr-[55%]' : 'pl-[55%]'}`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-1/2 -ml-3 h-6 w-6 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 border-2 border-white z-10"
                initial={{ scale: 0 }}
                animate={inView ? { 
                  scale: 1,
                  transition: { delay: 0.2 + index * 0.2, duration: 0.5 }
                } : { scale: 0 }}
                whileHover={{ 
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(45, 212, 191, 0.8)" 
                }}
              />

              <motion.div
                variants={contentVariants(index)}
                className="p-8 bg-[#111a2e] rounded-xl border border-[#1e2a47] relative overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent z-0"
                  variants={glowVariants}
                  initial="initial"
                  animate={inView ? "glow" : "initial"}
                />

                <h3 className="text-2xl font-bold text-teal-400 mb-2">{edu.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl text-white">{edu.institution}</p>
                  <motion.p 
                    className="text-gray-400 inline-block px-3 py-1 rounded-full bg-[#1e2a47] text-sm"
                    whileHover={{
                      backgroundColor: "rgba(45, 212, 191, 0.2)",
                      color: "rgba(255, 255, 255, 0.9)",
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {edu.period}
                  </motion.p>
                </div>
                <p className="text-gray-300 text-lg">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
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

export default Education;