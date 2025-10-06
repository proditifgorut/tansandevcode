import { motion } from 'framer-motion';
import { services } from '../data/content';
import { ArrowRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Layanan</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Berbagai solusi digital untuk memenuhi kebutuhan bisnis Anda, dari skala kecil hingga enterprise.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <div className="mb-4 text-primary dark:text-primary-dark">
                  <service.icon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{service.description}</p>
              </div>
              <a href="#" className="mt-auto font-semibold text-primary dark:text-primary-dark flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lihat Detail <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
