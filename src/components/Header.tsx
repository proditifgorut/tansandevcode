import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Tentang', to: 'about' },
  { name: 'Layanan', to: 'services' },
  { name: 'Harga', to: 'pricing' },
  { name: 'Portofolio', to: 'portfolio' },
  { name: 'Kontak', to: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-xl font-bold font-display text-primary dark:text-primary-dark">Tansan Devcode</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-dark transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="contact" smooth={true} duration={500} offset={-80} className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500 transition-colors cursor-pointer">
              Kontak Saya
            </Link>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="z-50">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-dark transition-colors cursor-pointer text-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)} className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500 transition-colors cursor-pointer">
              Kontak Saya
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
