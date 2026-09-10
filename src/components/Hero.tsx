import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/imperData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 lg:pb-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors scroll-mt-20"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 dark:from-zinc-900 to-transparent -z-10 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-red-100/40 dark:bg-zinc-900/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
              Ser Imper é{' '}
              <span className="text-red-600 decoration-red-200 dark:decoration-red-900/60 decoration-4 underline-offset-4">
                vestir excelência!
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed font-normal">
              Uniformes profissionais personalizados para empresas e instituições que valorizam a apresentação da sua equipe.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-base capitalize tracking-wider px-7 py-4 rounded shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/40 transition-colors duration-200 text-center"
              >
                <WhatsAppIcon size={20} className="fill-white" />
                <span>Solicitar Orçamento</span>
              </a>

              <a
                id="hero-secondary-cta"
                href="#clientes"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 hover:bg-red-50 dark:hover:bg-zinc-800 text-red-700 dark:text-white font-bold text-base capitalize tracking-wider px-6 py-4 rounded border-2 border-red-600 transition-colors text-center"
              >
                <span>Conheça Quem Veste Imper</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-red-100 dark:border-zinc-800 grid grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <BadgeCheck className="w-4 h-4 text-red-600 hidden sm:inline-block" />
                <span className="font-bold text-zinc-900 dark:text-white">A partir de 20 un</span>
                <span className="text-[11px] hidden sm:inline">por modelo</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600 hidden sm:inline-block" />
                <span className="font-bold text-zinc-900 dark:text-white">Entrega ágil</span>
                <span className="text-[11px] hidden sm:inline">prazo rigoroso</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <Truck className="w-4 h-4 text-red-600 hidden sm:inline-block" />
                <span className="font-bold text-zinc-900 dark:text-white">Envio para todo o Brasil</span>
                <span className="text-[11px] hidden sm:inline">todo o Brasil</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2 shadow-2xl shadow-red-900/10 dark:shadow-black/60">
                <img
                  src="/equipe-imper.jpeg"
                  alt="Equipe usando uniformes polo personalizados da Imper"
                  className="w-full h-44 sm:h-[400px] lg:h-[480px] object-cover object-center rounded-xl"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
