import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Kontak & Pemesanan</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Siap memulai proyek Anda? Hubungi saya melalui form di bawah atau sosial media.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nama</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Pesan</label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                 <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-blue-700 transition-colors">
                    <Send size={20} />
                    Kirim Pesan
                </button>
                 <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors">
                    <MessageCircle size={20} />
                    Chat via WhatsApp
                </a>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center md:items-start"
          >
            <h3 className="text-2xl font-bold mb-4">Social Media</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-center md:text-left">Terhubung dengan saya di platform lain.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-primary dark:hover:text-primary-dark transition-colors"><Linkedin size={32} /></a>
              <a href="#" className="text-slate-500 hover:text-primary dark:hover:text-primary-dark transition-colors"><Github size={32} /></a>
              <a href="#" className="text-slate-500 hover:text-primary dark:hover:text-primary-dark transition-colors"><Instagram size={32} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
