import React from 'react';
import { CLIENT_LOGOS } from '../data/imperData';
import { ScrollReveal } from './ui/ScrollReveal';

const getMonogram = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const LogoRow = () => (
  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
    {CLIENT_LOGOS.map((client) => (
      <div
        key={client.name}
        className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white dark:bg-zinc-900 px-6 py-6 shadow-sm min-w-[220px] sm:min-w-[280px] min-h-[140px] hover:border-white hover:ring-2 hover:ring-white/40 transition-all duration-300"
      >
        {client.logo ? (
          <img
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="h-14 sm:h-20 w-auto object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-zinc-800 border border-red-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
            <span className="font-condensed text-lg font-extrabold text-red-700 dark:text-white tracking-wider">
              {getMonogram(client.name)}
            </span>
          </div>
        )}
        <div className="text-center">
          <span className="block text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap text-center w-full">
            {client.name}
          </span>
          <span className="block text-[10px] capitalize tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
            {client.segment}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="clientes"
      className="py-12 sm:py-16 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-4">
            <span>Prova social</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Empresas que confiam na Imper
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Marcas de diferentes segmentos já confiaram à Imper a produção dos uniformes de suas equipes.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="relative mt-10 sm:mt-14 border-y border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-8 sm:py-12 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-4 sm:gap-6">
            <LogoRow />
            <LogoRow />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};