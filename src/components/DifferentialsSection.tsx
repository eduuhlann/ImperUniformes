import React from 'react';
import { DIFFERENTIALS } from '../data/imperData';
import { ScrollReveal, StaggerItem } from './ui/ScrollReveal';

export const DifferentialsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="py-12 sm:py-24 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Diferenciais concretos</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Por que empresas escolhem a Imper?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Atendimento ágil, segurança em cada escolha e compromisso com o prazo — vantagens práticas de trabalhar com a Imper.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((item, idx) => (
            <StaggerItem key={item.title} index={idx}>
              <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-100 dark:border-zinc-800 hover:border-red-600 dark:hover:border-red-600 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all text-left group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-red-600 text-white font-condensed text-xl font-bold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-red-600 dark:text-white bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 px-2.5 py-1 rounded-full capitalize tracking-wider">
                      Diferencial
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-red-600 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-red-100 dark:border-zinc-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Garantia Imper de Conformidade
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
};