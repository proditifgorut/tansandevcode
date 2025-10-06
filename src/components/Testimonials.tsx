import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const currentTestimonial = testimonials[index];

  return (
    <section id="testimonials" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Testimoni Klien</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Apa kata mereka yang sudah bekerja sama dengan saya.
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow-md"
            >
              <img src={currentTestimonial.avatarUrl} alt={currentTestimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary dark:border-primary-dark" />
              <p className="text-lg italic text-slate-600 dark:text-slate-400 mb-4">{currentTestimonial.comment}</p>
              <h4 className="font-bold text-xl">{currentTestimonial.name}</h4>
              <p className="text-primary dark:text-primary-dark font-semibold">{currentTestimonial.project}</p>
            </motion.div>
          </AnimatePresence>
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-slate-700 p-2 rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-slate-600">
            <ChevronLeft />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-slate-700 p-2 rounded-full shadow-md hover:bg-slate-100 dark:hover:bg-slate-600">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
