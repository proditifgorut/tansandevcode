import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter Plan',
    price: 'Rp 1.5jt – 3jt',
    description: 'Cocok untuk individu, UMKM kecil, atau startup tahap awal.',
    features: [
      'Website sederhana (1–3 halaman)',
      'Desain responsif & mobile-first',
      'Form kontak & integrasi WhatsApp',
      'SEO dasar & Google Analytics',
      '1 revisi utama',
    ],
    duration: '5–7 hari kerja',
    color: 'green',
  },
  {
    name: 'Professional Plan',
    price: 'Rp 5jt – 10jt',
    description: 'Cocok untuk bisnis berkembang yang membutuhkan sistem kustom.',
    features: [
      'Web atau mobile app dinamis',
      'Dashboard admin + database',
      'Integrasi API & payment gateway',
      'Deployment ke Vercel / Firebase / VPS',
      '3 revisi & 1 bulan maintenance',
    ],
    duration: '10–21 hari kerja',
    color: 'blue',
    highlight: true,
  },
  {
    name: 'Enterprise Plan',
    price: 'Rp 15jt – 50jt+',
    description: 'Untuk proyek besar, sistem bisnis kompleks, atau integrasi AI/IoT.',
    features: [
      'Arsitektur scalable (microservices / AI-integrated)',
      'Cloud deployment (AWS / GCP / Azure)',
      'Fitur custom sesuai kebutuhan klien',
      'Performance optimization & load testing',
      '6 bulan maintenance premium',
    ],
    duration: '30–60 hari kerja',
    color: 'purple',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Kategori Harga</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Pilih paket yang paling sesuai dengan kebutuhan dan anggaran proyek Anda.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${plan.highlight ? 'ring-2 ring-primary dark:ring-primary-dark transform lg:scale-105' : 'bg-slate-50 dark:bg-slate-800/50'}`}
            >
              <div className={`p-8 ${plan.highlight ? 'bg-white dark:bg-slate-900' : ''}`}>
                <h3 className={`font-display text-2xl font-bold mb-2 text-${plan.color}-600 dark:text-${plan.color}-400`}>{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{plan.description}</p>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <p className="font-semibold text-slate-500 dark:text-slate-400">⏱️ Estimasi: {plan.duration}</p>
              </div>
              <div className={`p-8 flex-grow ${plan.highlight ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-900'}`}>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-3 mt-1 text-${plan.color}-500`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 font-semibold rounded-lg transition-colors ${plan.highlight ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
