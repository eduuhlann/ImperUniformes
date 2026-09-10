import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/imperData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3.5 py-2 rounded-xl shadow-xl border-2 border-red-200 dark:border-zinc-700 text-xs font-bold">
          <span>Solicitar Orçamento</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-red-400 dark:text-zinc-400 hover:text-red-700 dark:hover:text-zinc-100 ml-1 text-sm font-bold cursor-pointer"
            aria-label="Fechar dica"
          >
            ×
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Imper Uniformes no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white flex items-center justify-center shadow-2xl shadow-black/30 transition-colors duration-200 border-2 border-white dark:border-zinc-800 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <WhatsAppIcon size={30} className="fill-white" />
      </a>
    </div>
  );
};