
import React, { useState, useEffect } from 'react';
import { AppState, QuizResult } from './types';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('INITIAL');
  const [quizAnswers, setQuizAnswers] = useState<QuizResult>({});

  const startQuiz = () => setView('QUIZ');
  const skipToLanding = () => setView('LANDING');
  
  const handleQuizComplete = (answers: QuizResult) => {
    setQuizAnswers(answers);
    setView('RESULT');
  };

  const goToLanding = () => setView('LANDING');

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden text-white flex flex-col">
      {view === 'INITIAL' && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-5 sm:p-8 bg-[#050505]">
          {/* Luz de Fundo Sutil */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#d4b67b]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            
            {/* Foto dos Heróis Compactada e Premium */}
            <div className="relative w-full aspect-[4/5] max-h-[40vh] sm:max-h-[45vh] group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4b67b]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 premium-shadow">
                <img 
                  src="https://i.imgur.com/Yfzrk50.jpeg" 
                  alt="Elavate Heroes" 
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-[10s] hover:scale-105"
                />
                {/* Overlay Interno sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Badge Flutuante na Foto */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b67b] animate-pulse"></span>
                  <span className="text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Estrategistas de Elite</span>
                </div>
              </div>
            </div>

            {/* Conteúdo de Texto */}
            <div className="text-center space-y-3 px-2">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold gold-gradient leading-tight tracking-tighter">
                Elavate Marketing
              </h1>
              <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-[280px] mx-auto opacity-90">
                Transformamos o faturamento da sua clínica através do <span className="text-white font-medium italic">tráfego orgânico</span>.
              </p>
            </div>
            
            {/* Ações CTAs */}
            <div className="flex flex-col gap-3 w-full max-w-[280px] sm:max-w-xs">
              <button 
                onClick={startQuiz}
                className="gold-bg hover:brightness-110 active:scale-95 transition-all duration-300 text-black font-extrabold py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(212,182,123,0.3)] text-base sm:text-lg tracking-tight"
              >
                Avaliação Gratuita
              </button>
              <button 
                onClick={skipToLanding}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 py-3.5 rounded-2xl transition-all text-white/70 text-xs sm:text-sm font-semibold tracking-wide"
              >
                Acessar Site Principal
              </button>
            </div>
            
            {/* Rodapé da Intro */}
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

      {/* Landing Page no fundo (sempre presente mas oculta se não for a view ativa) */}
      <div className={view !== 'LANDING' ? 'hidden' : 'block animate-in fade-in duration-700'}>
        <Landing />
      </div>
    </main>
  );
};

export default App;
