import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('imper_lgpd_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('imper_lgpd_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-white dark:bg-zinc-900 border-2 border-red-300 dark:border-zinc-700 p-4 rounded-xl shadow-2xl text-left transition-colors">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-red-600 dark:text-white flex-shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-900 dark:text-zinc-100 space-y-1">
          <p className="font-bold">Privacidade & Cookies (LGPD)</p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Utilizamos cookies essenciais para otimizar sua navegação e medir a conversão de orçamentos. Ao continuar, você concorda com nossos termos.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] capitalize tracking-wider px-3.5 py-1.5 rounded transition-colors cursor-pointer"
            >
              Concordar e Fechar
            </button>
          </div>
        </div>
        <button
          onClick={handleAccept}
          className="text-red-400 dark:text-zinc-400 hover:text-red-700 dark:hover:text-zinc-100 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};