import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  "React", "TypeScript", "Node.js", "Django",
  "PostgreSQL", "Git", "Docker", "AWS",
  "TailwindCSS", "MongoDB", "Express", "Python"
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          À Propos
        </h2>

        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12">
          <p className="mb-6">
            Passionnée par le développement web et les nouvelles technologies, je suis une développeuse fullstack créative et déterminée. Mon objectif est de créer des applications web performantes et innovantes qui répondent aux besoins des utilisateurs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-center font-medium text-primary dark:text-primary-light">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;