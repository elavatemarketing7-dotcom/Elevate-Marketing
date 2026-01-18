
import React from 'react';
import { 
  EXPERT_NAME, 
  HERO_IMAGE, 
  GALLERY_IMAGES, 
  WHATSAPP_NATHAN,
  WHATSAPP_MISAEL,
  INSTAGRAM_URL,
  EXPERT_HANDLE
} from '../constants';
import Gallery from './Gallery';

const Landing: React.FC = () => {
  const handleCTA = (target: 'nathan' | 'misael') => {
    const baseUrl = target === 'nathan' ? WHATSAPP_NATHAN : WHATSAPP_MISAEL;
    const message = "Olá, gostaria de agendar minha consultoria gratuita com a Elavate Marketing.";
    const connector = baseUrl.includes('?') ? '&' : '?';
    window.open(`${baseUrl}${connector}text=${encodeURIComponent(message)}`, '_blank');
  };

  const DualCTA = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto ${className}`}>
      <button 
        onClick={() => handleCTA('misael')}
        className="flex-1 gold-bg text-black font-extrabold py-4.5 rounded-xl shadow-xl shadow-[#d4b67b]/10 hover:scale-105 transition-all text-base flex flex-col items-center leading-tight"
      >
        <span>Falar com Misael</span>
        <span className="text-[8px] uppercase tracking-widest opacity-60">Consultor</span>
      </button>
      <button 
        onClick={() => handleCTA('nathan')}
        className="flex-1 gold-bg text-black font-extrabold py-4.5 rounded-xl shadow-xl shadow-[#d4b67b]/10 hover:scale-105 transition-all text-base flex flex-col items-center leading-tight"
      >
        <span>Falar com Nathan</span>
        <span className="text-[8px] uppercase tracking-widest opacity-60">Consultor</span>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-[100vw] overflow-x-hidden pb-10">
      
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden px-6 sm:px-8 pb-12 sm:pb-20 pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover opacity-80 object-top scale-100 sm:scale-110 transition-transform duration-[5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-transparent hidden sm:block"></div>
        </div>

        <div className="relative z-10 space-y-6 sm:space-y-10 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-[1.5s]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4b67b]/10 border border-[#d4b67b]/20 text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4b67b] animate-pulse"></span>
            Estrategista de Leads | Orgânico
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-8xl font-serif font-bold leading-[0.95] tracking-tighter">
              Eu sou <span className="gold-gradient">{EXPERT_NAME}</span>.
            </h1>
            <p className="text-lg sm:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Faturamos <span className="text-white font-medium">até 30x mais</span> para clínicas usando apenas tráfego orgânico e inteligência de base.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.4em]">Agende sua consulta gratuita:</p>
            <DualCTA />
            <div className="flex flex-col pt-2">
               <p className="text-gray-500 text-[8px] font-bold uppercase tracking-[0.3em] opacity-80">Sem custos iniciais • Sua avaliação em 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="px-6 sm:px-8 py-20 sm:py-32 bg-[#050505]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-white/[0.03] premium-shadow">
                <img src={HERO_IMAGE} alt="Sobre Elavate Marketing" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
             </div>
             <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-[#d4b67b]/30 animate-float shadow-2xl">
                <p className="text-[#d4b67b] text-3xl sm:text-5xl font-serif font-bold tracking-tighter">2024</p>
                <p className="text-gray-500 text-[8px] uppercase font-bold tracking-[0.4em] mt-1">Elite Performance</p>
             </div>
          </div>
          
          <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.5em] block">O Método Exclusivo</span>
              <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1]">Autoridade Digital & <span className="gold-gradient italic">Faturamento</span></h2>
            </div>
            
            <div className="space-y-6 sm:space-y-8 text-gray-400 text-base sm:text-xl font-light leading-relaxed">
              <p>
                A Elavate Marketing não é uma agência comum. Somos estrategistas de crescimento focados em <span className="text-white font-medium">clínicas de alto padrão</span>.
              </p>
              <p>
                Extraímos o máximo potencial do seu maior ativo silencioso: o histórico de clientes que já conhecem seu trabalho.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {[
                "Faturamento 30x no Orgânico",
                "Sites Premium de Alta Conversão",
                "Estratégia Anti-Anúncios Pagos",
                "Acompanhamento Direto e Pessoal"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4b67b]/5 border border-[#d4b67b]/20 flex items-center justify-center group-hover:bg-[#d4b67b] transition-all duration-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4b67b] group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-lg text-white/80 font-medium tracking-tight group-hover:text-[#d4b67b] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-32 bg-[#070707]">
        <div className="px-6 sm:px-8 text-center space-y-4 mb-12 sm:mb-20">
          <span className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.5em]">Resultados Comprovados</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold gold-gradient tracking-tighter">Impacto em Números & Arte</h2>
          <div className="w-16 h-px bg-[#d4b67b]/30 mx-auto"></div>
        </div>
        
        <Gallery images={GALLERY_IMAGES} />
        
        <div className="mt-12 text-center px-6 sm:px-8">
          <p className="text-gray-600 text-[8px] font-bold italic uppercase tracking-[0.3em] opacity-40 max-w-lg mx-auto leading-loose">Transparência Elavate: Cada negócio possui uma base única, nossos resultados adaptam-se ao seu histórico.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:px-8 sm:py-36 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4b67b]/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-7xl font-serif font-bold leading-[1] tracking-tighter text-white">
              Sua clínica no <span className="gold-gradient italic underline decoration-[#d4b67b]/20">topo</span>.
            </h2>
            <p className="text-lg sm:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Escolha seu consultor e inicie sua transformação hoje mesmo.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <DualCTA />
            <div className="flex items-center gap-2.5 text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-[#d4b67b] animate-ping"></span>
              Atendimento Online Imediato
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 sm:px-8 sm:py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
          <div className="text-center space-y-3">
            <h3 className="font-signature text-5xl sm:text-7xl gold-gradient leading-none">{EXPERT_NAME}</h3>
            <p className="text-gray-600 text-[9px] font-bold tracking-[0.6em] uppercase">Estrategista de Marketing Premium</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-gray-500 text-xs font-medium">
            <p className="tracking-[0.3em] opacity-50 uppercase">SÃO PAULO — SÃO VICENTE</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-[#d4b67b] hover:text-[#ece0c8] transition-all border-b border-[#d4b67b]/20 pb-1 px-3">
              {EXPERT_HANDLE}
            </a>
          </div>

          <div className="pt-8 text-gray-700 text-[8px] font-bold uppercase tracking-[0.5em] opacity-30 text-center leading-loose">
            &copy; 2024 ELAVATE MARKETING. TRADEMARK EXCLUSIVITY.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
