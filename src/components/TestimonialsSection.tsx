import React from 'react';
import { Quote, BadgeCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/imperData';
import { ScrollReveal, StaggerItem } from './ui/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-red-50/30 dark:bg-zinc-900/40 border-b border-red-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Depoimentos Reais</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              A experiência de quem escolheu a Imper
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Gestores de compras, operações e RH que confiam a apresentação de suas equipes à Imper.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <StaggerItem key={testimonial.id} index={idx}>
              <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left relative">
                <div className="absolute top-6 right-6 text-red-200 dark:text-zinc-800 pointer-events-none">
                  <Quote className="w-8 h-8 opacity-40" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-white capitalize tracking-wider mb-4">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Cliente Corporativo Verificado</span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-100 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-red-100 dark:border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm font-condensed">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-red-700 dark:text-red-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
};