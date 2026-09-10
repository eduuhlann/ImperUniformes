import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, MapPin, Truck, Shield, X, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/imperData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/assets/logo-imper.jpeg"
                  alt="Logo Imper Uniformes"
                  className="h-14 w-auto object-contain rounded-lg"
                />
              </Link>
              <div className="flex flex-col">
                <span className="font-condensed text-xl font-bold tracking-widest text-white capitalize leading-none">
                  UNIFORMES
                </span>
                <span className="text-[10px] capitalize tracking-wider text-red-400 font-semibold leading-tight">
                  Corporativos & Profissionais
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Especialistas em uniformização empresarial personalizada. Qualidade de acabamento, tecidos de alto padrão e pontualidade no prazo de entrega.
            </p>

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <p><strong className="text-zinc-200">Razão Social:</strong> {COMPANY_INFO.legalName}</p>
              <p><strong className="text-zinc-200">CNPJ:</strong> {COMPANY_INFO.cnpj}</p>
              <p className="flex items-center gap-1.5 pt-0.5 text-zinc-400">
                <Truck className="w-3.5 h-3.5 text-red-500" />
                Envio para todo o Brasil
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white capitalize tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link to="/#inicio" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/uniformes" className="hover:text-white transition-colors">Uniformes</Link>
              </li>
              <li>
                <Link to="/#trabalhos" className="hover:text-white transition-colors">Trabalhos</Link>
              </li>
              <li>
                <Link to="/#clientes" className="hover:text-white transition-colors">Clientes</Link>
              </li>
              <li>
                <Link to="/#personalizacao" className="hover:text-white transition-colors">Personalização</Link>
              </li>
              <li>
                <Link to="/#diferenciais" className="hover:text-white transition-colors">Nossos Diferenciais</Link>
              </li>
              <li>
                <Link to="/#sobre" className="hover:text-white transition-colors">Sobre a Imper</Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link to="/#contato" className="hover:text-white transition-colors">Solicitar Orçamento</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white capitalize tracking-wider mb-4 border-b border-zinc-800 pb-2">
              Contato Comercial
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
<a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#25D366] transition-colors font-bold"
              >
                <WhatsAppIcon size={16} className="text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{COMPANY_INFO.instagram}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full text-center bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-xs capitalize tracking-wider py-2.5 rounded shadow transition-colors"
              >
                <WhatsAppIcon size={14} className="fill-white" />
                Pedir Orçamento Agora
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos os direitos reservados.</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              CNPJ: {COMPANY_INFO.cnpj} • Rio de Janeiro, Brasil
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="underline hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade & LGPD
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl max-w-xl w-full p-6 max-h-[85vh] overflow-y-auto shadow-2xl text-left border-2 border-red-300 dark:border-zinc-700">
            <div className="flex items-center justify-between border-b border-red-100 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2 text-red-700 dark:text-white font-bold">
                <Shield className="w-5 h-5" />
                <span>Política de Privacidade e Conformidade LGPD</span>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-red-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 space-y-3 leading-relaxed">
              <p>
                A <strong>Imper Uniformes</strong> (CNPJ: 55.707.752/0001-89) respeita a privacidade dos visitantes e preza pela total segurança dos dados corporativos fornecidos.
              </p>
              <p>
                <strong>1. Dados Coletados:</strong> Coletamos exclusivamente informações fornecidas espontaneamente para elaboração de orçamentos comerciais (como nome da empresa, telefone/WhatsApp de contato, e-mail e especificações do pedido).
              </p>
              <p>
                <strong>2. Finalidade:</strong> Todos os dados são utilizados estritamente para envio de propostas comerciais, esclarecimento de dúvidas técnicas e cumprimento de obrigações fiscais e de entrega. Não vendemos nem compartilhamos dados com terceiros para fins de marketing.
              </p>
              <p>
                <strong>3. Direitos do Titular (LGPD):</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), o titular pode a qualquer momento solicitar a confirmação, retificação ou exclusão de seus dados através do nosso e-mail: <em>impe.riounif@gmail.com</em>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-red-100 dark:border-zinc-800 flex justify-end">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold text-xs capitalize tracking-wider transition-colors cursor-pointer"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};