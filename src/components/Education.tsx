import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    title: "Licence en Développement Web",
    institution: "ESTI",
    period: "Mars 2025",
    description: "Formation approfondie en développement web et mobile"
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

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Formation & Certifications
        </h2>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {edu.title}
              </h3>
              <p className="text-primary dark:text-primary-light font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {edu.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;