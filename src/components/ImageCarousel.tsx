import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="relative group h-full"
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-red-200 dark:border-zinc-700 bg-red-50/40 dark:bg-zinc-800/50 shadow-md hover:shadow-2xl transition-all duration-300 h-full">
        <img
          src={images[currentIndex]}
          alt={`${title} - foto ${currentIndex + 1}`}
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
          loading="lazy"
        />

        {/* Hover zoom brightness effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        
        {/* Title */}
        <div className="absolute bottom-0 inset-x-0 px-4 pb-4">
          <span className="text-white text-xs font-bold capitalize tracking-wider line-clamp-2 group-hover:text-red-100 transition-colors">{title}</span>
        </div>

        {/* Navigation Buttons - Only show if multiple images */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-red-700 hover:bg-red-600 hover:text-white shadow-lg transition-all duration-300 hover:scale-125"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 text-red-700 hover:bg-red-600 hover:text-white shadow-lg transition-all duration-300 hover:scale-125"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </>
        )}
      </div>

      {/* Image Counter - Only show if multiple images */}
      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-3 px-1">
          <div className="flex gap-1.5 flex-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-red-600 w-8 h-2'
                    : 'bg-red-200 dark:bg-zinc-600 w-2 h-2 hover:bg-red-400 dark:hover:bg-zinc-500'
                }`}
                aria-label={`Ir para foto ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      )}
    </div>
  );
};
