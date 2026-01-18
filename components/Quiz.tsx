
import React, { useState } from 'react';
import { EXPERT_NAME, HERO_IMAGE, QUIZ_QUESTIONS } from '../constants';
import { QuizResult } from '../types';

interface QuizProps {
  onComplete: (answers: QuizResult) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizResult>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].text]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-0 overflow-hidden bg-black/70 backdrop-blur-md">
      {/* Quiz Container */}
      <div className="glass-card w-full max-w-md rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex flex-col relative animate-in slide-in-from-bottom-8 duration-700 premium-shadow max-h-[90vh]">
        
        {/* Header with Floating Hero */}
        <div className="p-6 pb-2 flex flex-col items-center text-center space-y-3">
          <div className="relative">
             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#d4b67b]/40 p-1 bg-black overflow-hidden animate-float">
                <img src={HERO_IMAGE} alt={EXPERT_NAME} className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0.5 right-0.5 bg-[#d4b67b] w-3 h-3 rounded-full border-2 border-black"></div>
          </div>
          
          <div className="space-y-1">
            <span className="text-[#d4b67b] font-bold tracking-[0.3em] text-[7px] uppercase">Avaliação Personalizada</span>
            <h2 className="text-lg sm:text-2xl font-serif font-bold gold-gradient tracking-tight">{EXPERT_NAME}</h2>
          </div>

          <div className="w-12 h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
            <div 
              className="h-full gold-bg transition-all duration-1000 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Area */}
        <div className="flex-1 px-6 py-4 flex flex-col justify-center overflow-y-auto min-h-[300px]">
          <div key={currentStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-lg sm:text-xl font-medium text-white/95 mb-6 text-center leading-relaxed">
              {QUIZ_QUESTIONS[currentStep].text}
            </h3>

            <div className="grid gap-2 sm:gap-3">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-center py-3.5 sm:py-4.5 px-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-[#d4b67b]/50 transition-all text-gray-300 font-medium active:scale-[0.96] text-sm sm:text-base"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-gray-500 text-[8px] uppercase font-bold tracking-[0.2em]">{currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
          <button 
            onClick={onSkip}
            className="text-gray-400 text-[10px] hover:text-[#d4b67b] transition-colors underline underline-offset-4 decoration-[#d4b67b]/20"
          >
            Pular para o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
