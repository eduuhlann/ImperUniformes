import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/imperData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FinalCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <section
      id="contato"
      className="py-12 sm:py-24 bg-red-600 dark:bg-red-800 text-white relative overflow-hidden text-center scroll-mt-20 transition-colors"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-500/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-red-700/40 dark:bg-red-950/50 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-red-700 text-xs font-bold capitalize tracking-wider mb-6 shadow-md">
            <span>Pronto para vestir a Imper?</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Sua equipe está pronta para vestir Imper?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-4 text-base sm:text-xl text-red-100 dark:text-white max-w-2xl mx-auto leading-relaxed">
            Fale com nossa equipe e solicite seu orçamento personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            id="final-cta-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-red-700 hover:bg-red-50 font-extrabold text-base sm:text-lg capitalize tracking-wider px-8 py-5 rounded-xl shadow-2xl hover:shadow-red-950/20 transition-colors duration-200 w-full sm:w-auto"
          >
            <WhatsAppIcon size={24} className="text-[#25D366]" />
            <span>Solicitar Orçamento</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-red-500/60 dark:border-red-700/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-red-100 dark:text-white"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <span className="font-bold text-white">{COMPANY_INFO.phoneDisplay}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white" />
            <span>Resposta rápida no horário comercial</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Mínimo 20 peças - Envio Nacional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
