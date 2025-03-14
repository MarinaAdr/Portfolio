import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  // Expanded list of icons for background decoration
  const backgroundIcons = [
    { icon: "💻", x: "10%", y: "10%", rotate: -15, delay: 0, floatY: [0, -15], floatX: [0, 10] },
    { icon: "⚡", x: "85%", y: "20%", rotate: 10, delay: 0.2, floatY: [0, 20], floatX: [0, -15] },
    { icon: "🔍", x: "20%", y: "80%", rotate: 5, delay: 0.4, floatY: [0, -20], floatX: [0, 15] },
    { icon: "⚙️", x: "75%", y: "75%", rotate: -10, delay: 0.6, floatY: [0, 15], floatX: [0, -10] },
    { icon: "📱", x: "45%", y: "25%", rotate: 15, delay: 0.8, floatY: [0, -15], floatX: [0, 8] },
    // Additional icons
    { icon: "🚀", x: "65%", y: "15%", rotate: 20, delay: 1.0, floatY: [0, 25], floatX: [0, -12] },
    { icon: "🔧", x: "15%", y: "45%", rotate: -5, delay: 1.2, floatY: [0, -18], floatX: [0, 14] },
    { icon: "📊", x: "80%", y: "50%", rotate: 8, delay: 1.4, floatY: [0, 12], floatX: [0, -15] },
    { icon: "🔮", x: "30%", y: "15%", rotate: -12, delay: 1.6, floatY: [0, -22], floatX: [0, 10] },
    { icon: "🌐", x: "55%", y: "85%", rotate: 18, delay: 1.8, floatY: [0, 15], floatX: [0, -8] },
    { icon: "📈", x: "5%", y: "60%", rotate: -20, delay: 2.0, floatY: [0, -10], floatX: [0, 12] },
    { icon: "🔗", x: "90%", y: "85%", rotate: 5, delay: 2.2, floatY: [0, 18], floatX: [0, -10] },
    { icon: "🧩", x: "40%", y: "70%", rotate: -15, delay: 2.4, floatY: [0, -15], floatX: [0, 15] },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        {backgroundIcons.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? {
              opacity: 0.2,
              scale: 1,
              y: item.floatY,
              x: item.floatX,
              rotate: [item.rotate, item.rotate + (index % 2 === 0 ? 10 : -10)]
            } : { opacity: 0, scale: 0 }}
            transition={{
              opacity: { 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              },
              scale: { 
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut"
              },
              y: {
                repeat: Infinity,
                duration: 3 + (index % 2),
                ease: "easeInOut",
                repeatType: "reverse"
              },
              x: {
                repeat: Infinity,
                duration: 4 + (index % 3),
                ease: "easeInOut",
                repeatType: "reverse"
              },
              rotate: {
                repeat: Infinity,
                duration: 5 + (index % 2),
                ease: "easeInOut",
                repeatType: "reverse"
              }
            }}
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

      {/* Decorative curved line */}
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
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center">
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
        </div>
      </div>
    </section>
  );
};

export default About;