import React from 'react';
import { COMPANY_INFO } from '../data/imperData';
import { ScrollReveal } from './ui/ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-12 sm:py-24 bg-red-50/20 dark:bg-zinc-900/40 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="right" className="lg:col-span-5 relative">
            <div className="rounded-2xl border-2 border-red-200 dark:border-zinc-800 overflow-hidden shadow-xl bg-white dark:bg-zinc-900 p-4 sm:p-6">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mt-2">
                <img
                  src="/fotosessãosobre.jpeg"
                  alt="Equipe usando uniformes polo personalizados da Imper"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-red-50/70 dark:bg-zinc-800/80 border border-red-100 dark:border-zinc-700 rounded-lg mt-2 text-left">
                <div className="flex items-center justify-between text-xs text-zinc-900 dark:text-zinc-100 font-bold">
                  <span>Estrutura Própria de Confecção</span>
                  <span className="text-red-600 dark:text-red-400">Rio de Janeiro, RJ</span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                  Equipamentos computadorizados de bordado e estampagem para entrega em escala nacional.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60">
                <span>Sobre a Imper</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Muito além de produzir uniformes.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Na <strong className="text-zinc-900 dark:text-white">Imper Uniformes</strong>, entendemos que o uniforme corporativo é a extensão viva da marca que a sua empresa construiu com tanto esforço.
                </p>
                <p>
                  Quando um colaborador se apresenta perante clientes, fornecedores ou parceiros, sua vestimenta comunica imediatamente o nível de organização, seriedade e confiabilidade do seu negócio.
                </p>
                <p>
                  Por isso, não operamos como uma simples loja ou catálogo genérico. Somos parceiros estratégicos de compras e recursos humanos, oferecendo consultoria técnica na escolha de tecidos, cortes ergonômicos e processos de personalização que resistem à rotina operacional diária.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-zinc-900 border border-red-200 dark:border-zinc-800 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 shrink-0" />
                  <span>CNPJ Ativo: {COMPANY_INFO.cnpj}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-red-50/60 dark:bg-zinc-900 border border-red-200 dark:border-zinc-800 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 shrink-0" />
                  <span>Atendimento Direto com Especialistas</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
