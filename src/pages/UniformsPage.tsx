import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { UNIFORM_SECTIONS, COMPANY_INFO } from '../data/imperData';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ImageCarousel } from '../components/ImageCarousel';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

export function UniformsPage() {
  return (
    <>
      <section
        id="uniformes"
        className="pt-36 lg:pt-44 pb-16 sm:pb-20 bg-red-50/30 dark:bg-zinc-900/40 border-b border-red-100 dark:border-zinc-800 scroll-mt-20 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-1.5 text-xs font-bold capitalize tracking-wider text-zinc-500 dark:text-zinc-400 mb-6" aria-label="breadcrumb">
              <Link to="/" className="inline-flex items-center gap-1.5 hover:text-red-600 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Início</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-red-600 dark:text-red-400">Uniformes</span>
            </nav>
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 text-xs font-bold capitalize tracking-wider border border-red-200 dark:border-red-900/60 mb-4">
                <span>Catálogo de Modelos</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Nossos <span className="text-red-600 dark:text-red-500">uniformes</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Confira os modelos produzidos pela Imper. Cada fotografia abaixo representa um tipo de uniforme
                desenvolvido com tecidos de alto padrão, acabamento de qualidade e personalização com a identidade da sua marca.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-xs sm:text-sm capitalize tracking-widest px-7 py-4 rounded shadow-md hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon size={16} className="fill-white" />
                  <span>Solicitar orçamento</span>
                </a>
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 font-bold text-xs sm:text-sm capitalize tracking-widest px-7 py-4 rounded transition-all"
                >
                  <span>Ver catálogo completo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="catalogo" className="py-14 sm:py-20 bg-white dark:bg-zinc-950 border-b border-red-100 dark:border-zinc-800 scroll-mt-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                Catálogo de modelos
              </h2>
              <span className="hidden sm:block text-sm font-bold text-red-600 dark:text-red-400 capitalize tracking-wider whitespace-nowrap">
                {UNIFORM_SECTIONS.length} modelos disponíveis
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {UNIFORM_SECTIONS.map((section, index) => (
              <ScrollReveal key={section.title} delay={index % 3 * 0.1}>
                <ImageCarousel images={section.images} title={section.title} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-red-600 text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Quer um modelo sob medida para a sua equipe?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-base sm:text-lg text-red-100 leading-relaxed">
              Envie sua identidade visual e receba uma proposta com os modelos, tecidos e quantidades ideais para a sua empresa.
              Atendemos pedidos corporativos a partir de 20 peças, com envio para todo o Brasil.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 font-bold text-xs sm:text-sm capitalize tracking-widest px-8 py-4 rounded shadow-md transition-all"
              >
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                <span>Falar com a Imper</span>
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white/10 font-bold text-xs sm:text-sm capitalize tracking-widest px-8 py-4 rounded transition-all"
              >
                <span>Voltar ao início</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}