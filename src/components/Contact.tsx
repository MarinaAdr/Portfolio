import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact & Réseaux
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-full hover:bg-[#006396] transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#333] text-white rounded-full hover:bg-[#222] transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:marina@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300"
            >
              <Download size={20} />
              <span>Télécharger CV</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration !
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;