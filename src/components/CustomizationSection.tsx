import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { CUSTOMIZATION_TYPES, COMPANY_INFO } from '../data/imperData';
import { ScrollReveal, StaggerItem } from './ui/ScrollReveal';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CustomizationSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <section
      id="personalizacao"
      className="py-12 sm:py-24 bg-red-50/30 dark:bg-zinc-900/40 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Personalização Profissional</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Sua marca, aplicada do jeito certo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Bordado, silk screen, DTF e sublimação — quatro técnicas para cada necessidade, volume e tipo de tecido. A Imper orienta a melhor escolha para o seu caso.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CUSTOMIZATION_TYPES.map((item, idx) => (
            <StaggerItem key={item.name} index={idx}>
              <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-100 dark:border-zinc-800 hover:border-red-600 dark:hover:border-red-600 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col">
                <div className="mb-5">
                  <div className="inline-block bg-red-600 text-white text-[11px] font-bold capitalize tracking-wider px-3 py-1 rounded-md mb-3 shadow-sm">
                    Técnica 0{idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-red-700 dark:text-red-400">
                    {item.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {item.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      <BadgeCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-700 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white font-bold text-xs sm:text-sm capitalize tracking-wider px-5 py-3 rounded-lg transition-colors"
                >
                  <WhatsAppIcon size={15} />
                  <span>Solicitar orçamento</span>
                </a>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
};