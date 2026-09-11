import React, { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const clientUniforms = [
  { image: '/uniformes/camisademalhapersonalizada.jpeg', alt: 'Camisa de Malha Personalizada' },
  { image: '/uniformes/camisademalha.jpeg', alt: 'Camisa de Malha Gola Careca' },
  { image: '/uniformes/camisapolomasculina.jpeg', alt: 'Camisa Polo Masculina' },
  { image: '/uniformes/camisauvmangalonga.jpeg', alt: 'Camisa UV Manga Longa' },
  { image: '/uniformes/conjuntobrim1.jpeg', alt: 'Conjunto de Brim' },
  { image: '/clientes/cris-eventos.jpeg', alt: 'Uniforme personalizado Cris Eventos E Turismo' },
  { image: '/clientes/cgn-brazil-energy.jpeg', alt: 'Uniforme personalizado CGN Brazil Energy' },
  { image: '/clientes/mps-projetos.jpeg', alt: 'Uniforme personalizado MPS Projetos E Serviços Elétricos' },
  { image: '/clientes/sobras-aluminio-rio.jpeg', alt: 'Uniforme personalizado Sobras Alumínio Rio' },
  { image: '/clientes/emporio-da-limpeza.jpeg', alt: 'Uniforme personalizado Empório Da Limpeza' },
  { image: '/uniformes/camisauvmangalongapersonalizada1.jpeg', alt: 'Camisa UV personalizada Construtora Trindade Lopes' },
  { image: '/uniformes/conjuntobrim4.jpeg', alt: 'Conjunto de brim personalizado Trammax' },
  { image: '/uniformes/camisademalhapersonalizada1.jpeg', alt: 'Costas da camiseta personalizada Construtora Trindade Lopes' },
  { image: '/uniformes/camisademalha2.jpeg', alt: 'Camiseta personalizada Guerreiros do Trecho' },
  { image: '/uniformes/camisapolomasculina4.jpeg', alt: 'Camisa polo personalizada Sobras Alumínio Rio' },
  { image: '/uniformes/camisademalha3.jpeg', alt: 'Camiseta personalizada Rio Sul' },
  { image: '/uniformes/camisapolomasculina2.jpeg', alt: 'Camisa polo personalizada Attemppt Solar' },
  { image: '/uniformes/camisauvmangalonga2.jpeg', alt: 'Camisa UV personalizada Construtora Trindade Lopes' },
  { image: '/uniformes/camisapolomasculina3.jpeg', alt: 'Camisa polo personalizada MPS Projetos Elétricos' },
];

export const PortfolioSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof clientUniforms)[number] | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="trabalhos"
      className="py-12 sm:py-24 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Trabalhos Realizados</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Uniformes que já ganharam vida por aqui
            </h2>
          </ScrollReveal>
        </div>

        <div className="overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6">
          <div className="portfolio-marquee flex w-max animate-marquee gap-4 sm:gap-6 py-2">
            {[0, 1].map((copy) => (
              <div className="flex gap-4 sm:gap-6" key={copy}>
                {clientUniforms.map((uniform) => (
                  <div key={`${copy}-${uniform.image}`} className="w-[230px] sm:w-[300px] shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(uniform)}
                      className="group relative block w-full aspect-[3/4] overflow-hidden rounded-2xl border-2 border-red-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:border-red-600 dark:hover:border-red-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-all"
                      aria-label={`Ampliar ${uniform.alt}`}
                    >
                      <img
                        src={uniform.image}
                        alt={uniform.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-red-700 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 group-focus-visible:opacity-100 transition-all">
                          <Search className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização De Imagem Completa"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-2 -top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fechar Imagem Ampliada"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
