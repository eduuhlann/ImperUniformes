import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const VideoProductionSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-zinc-950 border-b border-red-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Texto */}
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Da produção à entrega, cada detalhe importa.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                Acompanhe as etapas de confecção que garantem que o uniforme da sua empresa seja entregue com acabamento impecável e máxima durabilidade.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg sm:text-xl">Seleção Premium de Tecidos</h4>
                    <p className="text-base text-zinc-400 mt-1">Fios nobres de algodão e poliéster de alta gramatura</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg sm:text-xl">Produção Computadorizada</h4>
                    <p className="text-base text-zinc-400 mt-1">Precisão milimétrica em corte, bordado e confecção</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg sm:text-xl">Controle de Qualidade Rigoroso</h4>
                    <p className="text-base text-zinc-400 mt-1">Inspeção peça a peça antes da embalagem</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito - Vídeo */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border-2 border-red-300 dark:border-zinc-700 shadow-xl overflow-hidden">
              <div className="relative aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                <video
                  src="/videos/videoapresentação.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};