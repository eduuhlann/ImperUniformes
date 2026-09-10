import React from 'react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/imperData';
import { ScrollReveal, StaggerItem } from './ui/ScrollReveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HowItWorksSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <section className="py-12 sm:py-24 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Processo Simples & Transparente</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Como fazer seu pedido
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Da primeira conversa à entrega, um caminho simples e sem burocracia para uniformizar sua equipe.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <StaggerItem key={step.number} index={idx}>
              <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-200 dark:border-zinc-800 p-6 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white font-condensed text-2xl font-bold flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    {step.number}
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-red-100 dark:border-zinc-800 flex items-center gap-1.5 text-[11px] font-bold text-red-700 dark:text-white capitalize tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
                  <span>Etapa {step.number}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="how-it-works-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base capitalize tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-colors duration-200 cursor-pointer w-full sm:w-auto"
            >
              <WhatsAppIcon size={18} className="fill-white" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
