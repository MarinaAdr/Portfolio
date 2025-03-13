import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: "Refitany Géomètre Expert",
    position: "Développeur Web",
    period: "Sept 2024 - Mars 2025",
    description: "Conception & Backend d'une application de gestion de syndic",
    tasks: [
      "Développement d'une API REST avec Django",
      "Intégration avec PostgreSQL",
      "Mise en place de l'authentification et des autorisations",
    ]
  },
  {
    company: "SOA",
    position: "Testeur Logiciel",
    period: "2022 - 2024",
    description: "Tests manuels et automatisés avec CodeceptJS",
    tasks: [
      "Création et exécution de plans de test",
      "Automatisation des tests avec CodeceptJS",
      "Reporting et suivi des bugs",
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Expériences Professionnelles
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-2">
                {exp.company}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-2">
                {exp.position}
              </p>
              <p className="text-gray-500 dark:text-gray-300 mb-4">
                {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="mb-1">{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;