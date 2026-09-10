import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/imperData';
import { useTheme } from '../context/ThemeContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  const navLinks = [
    { label: 'Início', to: '/#inicio' },
    { label: 'Uniformes', to: '/uniformes' },
    { label: 'Trabalhos', to: '/#trabalhos' },
    { label: 'Clientes', to: '/#clientes' },
    { label: 'Sobre a Imper', to: '/#sobre' },
    { label: 'Contato', to: '/#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/40' : ''}`}
    >
      <div className="hidden md:block border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2 text-[11px] font-medium capitalize tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-3 md:gap-5 overflow-hidden">
              <span className="hidden lg:inline-flex items-center rounded bg-red-600 px-2.5 py-0.5 text-white font-bold text-[10px] shadow-sm whitespace-nowrap">
                Envio para todo o Brasil
              </span>
              <span className="hidden xl:block whitespace-nowrap">
                Atendimento corporativo para empresas
              </span>
            </div>

            <div className="flex items-center gap-3 md:gap-5 text-zinc-500 dark:text-zinc-400 ml-auto">
              <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:inline hover:text-red-600 transition-colors whitespace-nowrap">
                {COMPANY_INFO.email}
              </a>
              <span className="hidden md:block text-zinc-300 dark:text-zinc-700">|</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-red-600 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span className="text-zinc-900 dark:text-white font-bold">{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <span className="hidden lg:inline-flex items-center gap-1.5 rounded bg-[#25D366]/10 px-2.5 py-0.5 text-[#15803d] dark:text-[#25D366] font-bold text-[10px] whitespace-nowrap">
                <WhatsAppIcon size={11} />
                Pedidos mínimos de 20 peças
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 shrink-0 min-w-0">
            <img
              src="/assets/logo-imper.jpeg"
              alt="Imper Uniformes - Logo"
              className="h-9 sm:h-10 lg:h-12 w-auto object-contain rounded-md"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-condensed text-lg lg:text-xl font-bold tracking-widest text-zinc-900 dark:text-white capitalize leading-none">
                Imper
              </span>
              <span className="text-[9px] lg:text-[10px] capitalize tracking-wider text-red-600 font-semibold leading-tight">
                Uniformes
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 flex-1" id="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="whitespace-nowrap text-[11px] xl:text-[12px] font-bold tracking-[0.18em] capitalize text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <button
              id="theme-toggle-btn-desktop"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
              className="w-10 h-10 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              id="nav-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[10px] xl:text-[11px] font-bold tracking-[0.18em] capitalize px-5 xl:px-6 py-3 rounded shadow-sm transition-colors duration-200"
            >
              <WhatsAppIcon size={14} />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Imper Uniformes"
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white flex items-center justify-center flex-shrink-0"
            >
              <WhatsAppIcon size={20} className="fill-white" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex items-center justify-center flex-shrink-0"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              {COMPANY_INFO.name}
            </span>
            <button
              id="theme-toggle-btn-mobile"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center gap-2 text-xs font-bold capitalize tracking-wider cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{isDark ? 'Claro' : 'Escuro'}</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-zinc-900 dark:text-zinc-100 py-2.5 px-3 rounded hover:bg-red-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-sm capitalize tracking-[0.12em] py-3.5 rounded shadow-md transition-colors"
            >
              <WhatsAppIcon size={18} className="fill-white" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-1.5">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
              {COMPANY_INFO.phoneDisplay} • {COMPANY_INFO.email}
            </p>
            <p>Atendimento corporativo a partir de 20 peças • Envio para todo o Brasil</p>
          </div>
        </div>
      )}
    </header>
  );
};