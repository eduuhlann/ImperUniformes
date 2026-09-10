import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { CLIENT_FEEDBACK_VIDEOS } from '../data/imperData';
import { ScrollReveal, StaggerItem } from './ui/ScrollReveal';

export const ClientFeedbackVideosSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-24 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-3">
              <span>Vídeos de Clientes</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Assista a quem já vestiu a Imper
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
              Feedback real, em vídeo, de clientes que confiaram seus uniformes à Imper.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CLIENT_FEEDBACK_VIDEOS.map((video, idx) => (
            <StaggerItem key={video.id} index={idx}>
              <div
                className="group relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden cursor-pointer aspect-video shadow-sm hover:shadow-lg transition-all duration-300 border border-red-100 dark:border-zinc-800"
                onClick={() => setSelectedVideo(video.videoPath)}
              >
                <video
                  src={video.videoPath}
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>

      {/* Modal para vídeo em tela cheia */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <video
              src={selectedVideo}
              autoPlay
              controls
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors duration-200 shadow-lg"
              aria-label="Fechar vídeo"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
