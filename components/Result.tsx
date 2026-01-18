
import React, { useState } from 'react';
import { EXPERT_NAME, HERO_IMAGE, WHATSAPP_NATHAN, WHATSAPP_MISAEL } from '../constants';
import { QuizResult } from '../types';

interface ResultProps {
  answers: QuizResult;
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, onContinue }) => {
  const [showSelector, setShowSelector] = useState<'assessment' | 'direct' | null>(null);

  const handleWhatsApp = (target: 'nathan' | 'misael', type: 'assessment' | 'direct') => {
    let baseUrl = target === 'nathan' ? WHATSAPP_NATHAN : WHATSAPP_MISAEL;
    let message = `Olá, vim do site e finalizei minha avaliação!\n\n`;
    
    if (type === 'assessment') {
      Object.entries(answers).forEach(([q, a]) => {
        message += `*${q}*\nResp: ${a}\n\n`;
      });
      message += `Gostaria de agendar minha consultoria gratuita.`;
    } else {
      message = "Olá, gostaria de saber mais sobre como a Elavate Marketing pode ajudar minha clínica.";
    }
    
    const connector = baseUrl.includes('?') ? '&' : '?';
    const finalUrl = `${baseUrl}${connector}text=${encodeURIComponent(message)}`;
    window.open(finalUrl, '_blank');
    setShowSelector(null);
  };

  return (
    <div className="fixed inset-0 z-[120] bg-[#050505] flex flex-col items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-md w-full animate-in zoom-in-95 fade-in duration-1000 space-y-4 sm:space-y-6 flex flex-col items-center">
        
        <div className="text-center space-y-2">
          <div className="inline-block bg-[#d4b67b]/10 text-[#d4b67b] px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.4em] border border-[#d4b67b]/20">
            Perfil Compatível
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">Você é a Paciente ideal.</h2>
        </div>

        <div className="relative w-full max-w-[280px] sm:max-w-md group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4b67b] to-[#9b7e46] rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
          <div className="relative bg-[#070707] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-white/5 w-full aspect-[4/5] max-h-[260px] sm:max-h-[420px] premium-shadow mx-auto">
             <img 
               src={HERO_IMAGE} 
               alt={EXPERT_NAME} 
               className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent p-4 sm:p-8 flex flex-col justify-end">
                <p className="text-white font-medium text-sm sm:text-xl leading-relaxed text-center italic opacity-95">
                  "O Método da <span className="text-[#d4b67b] font-bold underline decoration-[#d4b67b]/30">{EXPERT_NAME}</span> entrega exatamente a segurança que seu negócio precisa."
                </p>
             </div>
          </div>
        </div>

        <div className="w-full space-y-3 px-2">
          {!showSelector ? (
            <>
              <button 
                onClick={() => setShowSelector('assessment')}
                className="w-full gold-bg text-black font-extrabold py-4 sm:py-5 rounded-2xl shadow-xl shadow-[#d4b67b]/20 hover:scale-[1.02] active:scale-95 transition-all text-base sm:text-lg flex items-center justify-center gap-3"
              >
                <span>1. Enviar minha avaliação</span>
              </button>
              
              <button 
                onClick={() => setShowSelector('direct')}
                className="w-full bg-white/[0.05] border border-white/10 text-white font-semibold py-4 sm:py-5 rounded-2xl hover:bg-white/[0.08] hover:border-[#d4b67b]/40 transition-all text-sm sm:text-lg"
              >
                2. WhatsApp sem compromisso
              </button>

              <button 
                onClick={onContinue}
                className="w-full bg-transparent text-gray-500 font-bold py-2 rounded-2xl hover:text-white transition-all text-[8px] uppercase tracking-[0.4em] text-center"
              >
                3. Continuar no site
              </button>
            </>
          ) : (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
              <p className="text-center text-[#d4b67b] text-[10px] font-bold uppercase tracking-widest mb-2">Selecione seu consultor:</p>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleWhatsApp('misael', showSelector)}
                  className="gold-bg text-black font-bold py-5 rounded-2xl flex flex-col items-center gap-0.5 shadow-xl"
                >
                  <span className="text-base">Misael</span>
                  <span className="text-[8px] uppercase tracking-tighter opacity-70">Disponível</span>
                </button>
                <button 
                  onClick={() => handleWhatsApp('nathan', showSelector)}
                  className="gold-bg text-black font-bold py-5 rounded-2xl flex flex-col items-center gap-0.5 shadow-xl"
                >
                  <span className="text-base">Nathan</span>
                  <span className="text-[8px] uppercase tracking-tighter opacity-70">Disponível</span>
                </button>
              </div>
              <button 
                onClick={() => setShowSelector(null)}
                className="w-full text-gray-500 text-[9px] uppercase font-bold pt-1"
              >
                Voltar
              </button>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-[8px] text-center font-bold tracking-[0.5em] uppercase opacity-40 pb-2">Exclusividade Elavate</p>
      </div>
    </div>
  );
};

export default Result;
