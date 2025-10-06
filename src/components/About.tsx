import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8">
            Saya adalah Full Stack Software Engineer berpengalaman dalam membangun solusi digital berbasis web dan mobile menggunakan teknologi modern seperti React, Next.js, Node.js, dan Python.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500 transition-colors">
              <Download size={20} />
              Download CV
            </a>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="flex items-center gap-2 px-6 py-3 font-semibold text-primary dark:text-primary-dark border-2 border-primary dark:border-primary-dark rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <Send size={20} />
              Hubungi Saya
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
