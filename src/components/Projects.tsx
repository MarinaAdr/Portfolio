import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, ArrowRight, Star } from 'lucide-react';
import ecommerce from "../assets/ecommerce.jpg";
import siteweb from "../assets/siteweb.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Application de gestion de syndic",
    description: "Application web complète pour la gestion de copropriétés avec Express et MySQL",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    tech: ["Express", "MySQL", "React"],
    github: "https://github.com/MarinaAdr/server_GS",
    featured: true
    // live: "https://syndic-app.demo"
  },
  {
    title: "Application de gestion des congés",
    description: "Solution MERN Stack pour la gestion des congés des employés",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    tech: ["MySQL", "Express", "React", "Node.js"],
    github: "https://github.com/MarinaAdr/gestion-des-conges",
    // live: "https://leave-app.demo"
  },
  {
    title: "Site e-commerce",
    description: "Solution MERN Stack pour un site e-commerce",
    image: ecommerce,
    tech: ["MySQL", "Express", "React", "Node.js"],
    github: "https://github.com/MarinaAdr/e-commerce",
    // live: "https://leave-app.demo"
  },
  {
    title: "Refonte site web Gepixbim",
    description: "Refonte du site Gepixbim en Reactjs qui etait en wordpress",
    image: siteweb,
    tech: ["MySQL", "Express", "React", "Node.js"],
    github: "https://github.com/MarinaAdr/rtgeo-refonte",
    featured: true
    // live: "https://leave-app.demo"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  // Variants d'animation
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

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: i * 0.1
      }
    })
  };

  const imageVariants = {
    rest: {
      scale: 1,
      filter: "brightness(0.8)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    rest: {
      opacity: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    hover: {
      opacity: 1,
      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1 + i * 0.05
      }
    })
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(94, 234, 212, 0)" },
    glow: {
      boxShadow: [
        "0 0 0 rgba(94, 234, 212, 0)",
        "0 0 10px rgba(94, 234, 212, 0.3)",
        "0 0 0 rgba(94, 234, 212, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(10).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-500/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={titleVariants}
            className="text-center mb-16"
          >
          

            <motion.h2
              className="text-5xl font-bold mb-4 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Mes <span className="text-teal-400">Projets</span> Récents
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 to-teal-400/0 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: "70%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>

            <motion.p
              className="text-slate-400 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Découvrez une sélection de mes projets de développement web les plus récents
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl ${
                  project.featured ? 'ring-1 ring-teal-500/20' : ''
                }`}
              >
                <motion.div
                  className="relative h-60 overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-end"
                    variants={overlayVariants}
                  >
                    <div className="p-6 w-full">
                      {project.featured && (
                        <div className="flex items-center mb-2 text-teal-400 text-sm font-medium">
                          <Star size={14} className="mr-1" />
                          Projet vedette
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <p className="text-slate-300 mb-6">
                    {project.description}
                  </p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        custom={techIndex}
                        variants={techBadgeVariants}
                        className="px-3 py-1 bg-slate-700 text-teal-400 rounded-full text-sm font-medium hover:bg-teal-400/20 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex justify-end ">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors duration-300 group"
                      whileHover={{ x: 3 }}
                      variants={glowVariants}
                      initial="initial"
                      animate={inView ? "glow" : "initial"}
                    >
                      <Github size={18} />
                      <span>Voir le code</span>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-400 group"
                        whileHover={{ x: 3 }}
                      >
                        <span>Demo</span>
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Corner decoration for featured projects */}
                {project.featured && (
                  <div className="absolute top-0 right-0">
                    <motion.div
                      className="w-16 h-16 bg-teal-400 rotate-45 translate-x-8 -translate-y-8 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/MarinaAdr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 py-3 px-6 rounded-full transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Voir plus sur GitHub</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;