
import React, { useState } from 'react';
import { AppState, QuizResult } from './types';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { WHATSAPP_NATHAN, WHATSAPP_MISAEL } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('INITIAL');
  const [quizAnswers, setQuizAnswers] = useState<QuizResult>({});
  const [showDirectContact, setShowDirectContact] = useState(false);

  const startQuiz = () => setView('QUIZ');
  const skipToLanding = () => setView('LANDING');
  
  const handleQuizComplete = (answers: QuizResult) => {
    setQuizAnswers(answers);
    setView('RESULT');
  };

  const goToLanding = () => setView('LANDING');

  const openWhatsApp = (target: 'nathan' | 'misael') => {
    const baseUrl = target === 'nathan' ? WHATSAPP_NATHAN : WHATSAPP_MISAEL;
    const message = "Olá, gostaria de falar com um especialista da Elavate Marketing.";
    const connector = baseUrl.includes('?') ? '&' : '?';
    window.open(`${baseUrl}${connector}text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden text-white flex flex-col">
      {view === 'INITIAL' && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-5 sm:p-8 bg-[#050505]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#d4b67b]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            
            <div className="relative w-full aspect-[4/5] max-h-[40vh] sm:max-h-[45vh] group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4b67b]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 premium-shadow">
                <img 
                  src="https://i.imgur.com/Yfzrk50.jpeg" 
                  alt="Elavate Heroes" 
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-[10s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b67b] animate-pulse"></span>
                  <span className="text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Estrategistas de Elite</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-3 px-2">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold gold-gradient leading-tight tracking-tighter">
                Elavate Marketing
              </h1>
              <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-[280px] mx-auto opacity-90">
                Transformamos o faturamento da sua clínica através do <span className="text-white font-medium italic">tráfego orgânico</span>.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full max-w-[280px] sm:max-w-xs">
              {!showDirectContact ? (
                <>
                  <button 
                    onClick={startQuiz}
                    className="gold-bg hover:brightness-110 active:scale-95 transition-all duration-300 text-black font-extrabold py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(212,182,123,0.3)] text-base sm:text-lg tracking-tight"
                  >
                    Avaliação Gratuita
                  </button>
                  <button 
                    onClick={() => setShowDirectContact(true)}
                    className="bg-transparent border border-[#d4b67b]/30 hover:border-[#d4b67b] py-3.5 rounded-2xl transition-all text-[#d4b67b] text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Falar com Especialista
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
                  <p className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.4em] text-center mb-1">Selecione seu consultor:</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => openWhatsApp('misael')}
                      className="flex-1 gold-bg text-black font-extrabold py-4 rounded-xl shadow-xl transition-transform active:scale-95 flex flex-col items-center"
                    >
                      <span className="text-sm">Misael</span>
                      <span className="text-[7px] uppercase tracking-tighter opacity-70">Disponível</span>
                    </button>
                    <button 
                      onClick={() => openWhatsApp('nathan')}
                      className="flex-1 gold-bg text-black font-extrabold py-4 rounded-xl shadow-xl transition-transform active:scale-95 flex flex-col items-center"
                    >
                      <span className="text-sm">Nathan</span>
                      <span className="text-[7px] uppercase tracking-tighter opacity-70">Disponível</span>
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowDirectContact(false)}
                    className="text-gray-500 text-[8px] uppercase font-bold tracking-widest mt-1 hover:text-white transition-colors"
                  >
                    Voltar para avaliação
                  </button>
                </div>
              )}
              
              <button 
                onClick={skipToLanding}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 py-3 rounded-2xl transition-all text-white/50 text-[10px] font-semibold tracking-widest uppercase mt-2"
              >
                Acessar Site Principal
              </button>
            </div>
            
            <div className="pt-2">
              <p className="text-[#d4b67b]/50 text-[7px] font-bold uppercase tracking-[0.5em]">Join the 1% club</p>
            </div>
          </div>
        </div>
      )}

      {view === 'QUIZ' && (
        <Quiz 
          onComplete={handleQuizComplete} 
          onSkip={skipToLanding}
        />
      )}

      {view === 'RESULT' && (
        <Result 
          answers={quizAnswers}
          onContinue={goToLanding}
        />
      )}

      <div className={view !== 'LANDING' ? 'hidden' : 'block animate-in fade-in duration-700'}>
        <Landing />
      </div>
    </main>
  );
};

export default App;
