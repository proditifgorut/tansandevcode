import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800"
        style={{ backgroundSize: '200% 200%' }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]"></div>
      <div className="relative z-10 p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Bangun Website Impianmu, Bersama Tansan Devcode
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-8"
        >
          Wujudkan ide-ide kreatifmu menjadi sebuah website yang fungsional dan menarik. Dengan fokus pada desain yang modern dan user experience yang baik, saya siap membantumu membangun website impianmu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link to="portfolio" smooth={true} duration={500} offset={-80} className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-primary transition-colors transform hover:scale-105 cursor-pointer">
            Lihat Portofolio
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-80} className="bg-white text-primary dark:text-primary-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 cursor-pointer">
            Konsultasi Gratis
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
