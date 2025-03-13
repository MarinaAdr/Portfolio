import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Type pour les informations d'éducation
interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const education: EducationItem[] = [
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
  // Utiliser un threshold plus bas pour déclencher l'animation plus tôt
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
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
        staggerChildren: 0.3,
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

  // Nouvelle animation pour un effet parallaxe sur l'arrière-plan
  const parallaxVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  // Nouvelle animation pour les éléments qui apparaissent au scroll
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="education" className="py-20 bg-[#0a1122] relative overflow-hidden">
      {/* Decorative gradient backdrop avec effet parallaxe */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-transparent to-transparent opacity-30"
        variants={parallaxVariants}
        initial="initial"
        animate="animate"
      />
      
      {/* Animated stars/particles in background with parallax effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
        <motion.div 
          className="grid grid-cols-12 gap-8 w-full h-full"
          animate={{ 
            y: [0, -5, 0], 
            transition: { 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse" 
            } 
          }}
        >
          {Array(120).fill(0).map((_, i) => (
            <motion.div 
              key={i} 
              className="w-1 h-1 rounded-full bg-teal-500"
              initial={{ opacity: 0.1, scale: 0 }}
              animate={{ 
                opacity: Math.random() * 0.5 + 0.2, 
                scale: Math.random() * 0.6 + 0.4,
                x: [0, Math.random() * 10 - 5, 0],
                transition: { 
                  delay: Math.random() * 2,
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                } 
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl font-bold text-white"
            whileInView={{ 
              textShadow: [
                "0 0 0px rgba(45, 212, 191, 0)",
                "0 0 10px rgba(45, 212, 191, 0.5)",
                "0 0 0px rgba(45, 212, 191, 0)"
              ],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
          >
            Mes <span className="text-teal-400">Formations</span>
          </motion.h2>
          
          {/* Sous-titre avec animation */}
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Mon parcours académique qui m'a permis de développer mes compétences
          </motion.p>
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line avec animation améliorée */}
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
              {/* Timeline dot avec animation améliorée */}
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
              
              {/* Petite ligne qui connecte le point à la carte */}
              <motion.div 
                className={`absolute top-3 h-0.5 bg-teal-400/60 z-5 ${
                  index % 2 === 0 ? 'right-[45%] w-[5%]' : 'left-[45%] w-[5%]'
                }`}
                initial={{ scaleX: 0 }}
                animate={inView ? { 
                  scaleX: 1,
                  transition: { delay: 0.3 + index * 0.2, duration: 0.4 }
                } : { scaleX: 0 }}
                style={{ 
                  transformOrigin: index % 2 === 0 ? "right center" : "left center"
                }}
              />

              <motion.div
                variants={contentVariants(index)}
                className="p-8 bg-[#111a2e] rounded-xl border border-[#1e2a47] relative overflow-hidden group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Glow effect amélioré */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent z-0"
                  variants={glowVariants}
                  initial="initial"
                  animate={inView ? "glow" : "initial"}
                />
                
                {/* Background gradient qui réagit au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-transparent z-0 opacity-0"
                  whileHover={{ 
                    opacity: 0.15,
                    transition: { duration: 0.3 }
                  }}
                />

                <h3 className="text-2xl font-bold text-teal-400 mb-2 relative z-10">{edu.title}</h3>
                <div className="flex justify-between items-center mb-4 relative z-10">
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
                <p className="text-gray-300 text-lg relative z-10">{edu.description}</p>
                
                {/* Icône decorative qui apparaît au hover */}
                <motion.div
                  className="absolute bottom-4 right-4 text-teal-400/20 text-6xl font-bold opacity-0 z-0"
                  initial={{ rotate: -10, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;