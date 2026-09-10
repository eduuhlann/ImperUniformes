import React from 'react';
import { motion } from 'framer-motion';
import { CREDIBILITY_PILLARS } from '../data/imperData';

export const CredibilityStrip: React.FC = () => {
  return (
    <section
      id="faixa-credibilidade"
      className="bg-red-600 dark:bg-red-700 text-white border-y-2 border-red-700 dark:border-red-800 py-8 sm:py-10 shadow-inner transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-red-500/50 dark:divide-red-600/60">
          {CREDIBILITY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-start gap-4 ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center font-condensed font-bold text-lg text-red-600 dark:text-white shadow-sm shrink-0">
                0{idx + 1}
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-white tracking-wide capitalize">
                  {pillar.title}
                </span>
                <span className="block text-xs sm:text-sm text-red-100 dark:text-white font-normal leading-relaxed mt-1">
                  {pillar.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};