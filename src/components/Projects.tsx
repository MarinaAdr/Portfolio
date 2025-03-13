import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import ecommerce from "../assets/ecommerce.jpg";
import siteweb from "../assets/siteweb.jpg"

const projects = [
  {
    title: "Application de gestion de syndic",
    description: "Application web complète pour la gestion de copropriétés avec Express et MySQL",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    tech: ["Express", "MySQL", "React"],
    github: "https://github.com/MarinaAdr/server_GS",
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
    description: "Refonte du site en Reactjs qui etait en wordpress",
    image: siteweb,
    tech: ["MySQL", "Express", "React", "Node.js"],
    github: "https://github.com/MarinaAdr/rtgeo-refonte",
    // live: "https://leave-app.demo"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="" ref={ref}>
      <div className="container mx-auto bg-slate-900 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Recent <span className="text-primary">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-card rounded-lg overflow-hidden hover:ring-2 hover:ring-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;