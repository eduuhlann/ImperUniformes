import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { UNIFORM_CATEGORIES } from '../data/imperData';
import { ScrollReveal } from './ui/ScrollReveal';

export const ProductsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? UNIFORM_CATEGORIES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === UNIFORM_CATEGORIES.length - 1 ? 0 : prev + 1));
  };

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
      id="uniformes"
      className="py-12 sm:py-24 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Tipos de Uniformes</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Do operacional ao social. A Imper veste sua empresa
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Especialistas em uniformes corporativos personalizados
            </p>
          </ScrollReveal>
        </div>

        <div className="relative mx-auto max-w-sm">
          <ScrollReveal key={UNIFORM_CATEGORIES[currentIndex].name}>
            <div className="group rounded-2xl overflow-hidden border-2 border-red-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl hover:border-red-600 dark:hover:border-red-600 transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden bg-red-100 dark:bg-zinc-800">
                <img
                  src={UNIFORM_CATEGORIES[currentIndex].image}
                  alt={`Uniforme ${UNIFORM_CATEGORIES[currentIndex].name} Imper`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: UNIFORM_CATEGORIES[currentIndex].image, name: UNIFORM_CATEGORIES[currentIndex].name })}
                  className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-red-700 shadow-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-600 hover:text-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
                  aria-label={`Ampliar imagem de ${UNIFORM_CATEGORIES[currentIndex].name}`}
                  title="Ver imagem completa"
                >
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                  {UNIFORM_CATEGORIES[currentIndex].name}
                </h3>
              </div>
            </div>
          </ScrollReveal>

          {/* Previous Button */}
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute -left-3 top-1/2 -translate-y-1/2 sm:-left-6 p-3 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Modelo anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={goToNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 sm:-right-6 p-3 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próximo modelo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-1.5">
          {UNIFORM_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-red-600 w-8 h-2'
                  : 'bg-red-200 dark:bg-zinc-600 w-2 h-2 hover:bg-red-400 dark:hover:bg-zinc-500'
              }`}
              aria-label={`Ir para ${cat.name}`}
            />
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 text-center">
            <Link
              to="/uniformes"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm capitalize tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all"
            >
              <span>Ver Todos Os Modelos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem completa: ${selectedImage.name}`}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={`Uniforme ${selectedImage.name} Imper — imagem completa`}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-2 -top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg hover:bg-red-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fechar imagem ampliada"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
