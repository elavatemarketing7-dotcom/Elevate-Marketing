
import React from 'react';
import { 
  EXPERT_NAME, 
  HERO_IMAGE, 
  GALLERY_IMAGES, 
  WHATSAPP_NATHAN,
  WHATSAPP_MISAEL,
  INSTAGRAM_URL,
  EXPERT_HANDLE,
  TESTIMONIAL_VIDEOS
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
        <span className="text-[8px] uppercase tracking-widest opacity-60">Sócio-Fundador</span>
      </button>
      <button 
        onClick={() => handleCTA('nathan')}
        className="flex-1 gold-bg text-black font-extrabold py-4.5 rounded-xl shadow-xl shadow-[#d4b67b]/10 hover:scale-105 transition-all text-base flex flex-col items-center leading-tight"
      >
        <span>Falar com Nathan</span>
        <span className="text-[8px] uppercase tracking-widest opacity-60">Sócio-Fundador</span>
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
            className="w-full h-full object-cover opacity-60 object-top scale-100 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent hidden sm:block"></div>
        </div>

        <div className="relative z-10 space-y-6 sm:space-y-10 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-[1.5s]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4b67b]/10 border border-[#d4b67b]/20 text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4b67b] animate-pulse"></span>
            Misael & Nathan — Inteligência Estratégica
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-8xl font-serif font-bold leading-[0.95] tracking-tighter">
              Somos a <br/><span className="gold-gradient">{EXPERT_NAME}</span>.
            </h1>
            <p className="text-lg sm:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl">
              A elite do marketing para clínicas de alto padrão. Faturamos <span className="text-white font-medium">até 30x mais</span> através de inteligência de base e tráfego orgânico.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.4em]">Inicie sua expansão empresarial:</p>
            <DualCTA />
            <div className="flex flex-col pt-2">
               <p className="text-gray-500 text-[8px] font-bold uppercase tracking-[0.3em] opacity-80">Consultoria Direta com os Sócios • Disponibilidade Limitada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Authority Section */}
      <section className="px-6 sm:px-8 py-20 sm:py-32 bg-[#050505]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-white/[0.03] premium-shadow">
                <img src={HERO_IMAGE} alt="Fundadores Elavate Marketing" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
             </div>
             <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-[#d4b67b]/30 animate-float shadow-2xl">
                <p className="text-[#d4b67b] text-3xl sm:text-5xl font-serif font-bold tracking-tighter">M&N</p>
                <p className="text-gray-500 text-[8px] uppercase font-bold tracking-[0.4em] mt-1">Sócios-Fundadores</p>
             </div>
          </div>
          
          <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.5em] block">Nossa Estrutura Corporativa</span>
              <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1]">Duas mentes, <span className="gold-gradient italic">um único propósito</span>.</h2>
            </div>
            
            <div className="space-y-6 sm:space-y-8 text-gray-400 text-base sm:text-xl font-light leading-relaxed">
              <p>
                A Elavate Marketing é liderada por <span className="text-white font-medium">Misael e Nathan</span>, estrategistas que uniram expertises para romper a barreira do tráfego pago convencional.
              </p>
              <p>
                Nossa abordagem empresarial foca no <span className="text-white font-medium">LTV (Lifetime Value)</span> e na extração de riqueza da sua própria base, transformando clínicas em máquinas de faturamento sustentável.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-[#d4b67b] font-bold text-xs uppercase tracking-widest">Misael</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Especialista em Conversão & Escala de Base Ativa.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-2">
                <h4 className="text-[#d4b67b] font-bold text-xs uppercase tracking-widest">Nathan</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Estrategista em Autoridade Digital & Branding de Alto Padrão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="px-6 sm:px-8 py-20 bg-[#080808] relative">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.5em]">Resultados Institucionais</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tighter">Provas de <span className="gold-gradient">Impacto</span></h2>
            <div className="w-16 h-px bg-[#d4b67b]/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-center max-w-4xl mx-auto">
            {TESTIMONIAL_VIDEOS.map((videoUrl, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-[#d4b67b]/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-[#d4b67b]/20 premium-shadow bg-black">
                  <video 
                    src={videoUrl} 
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    loop
                    muted
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-md border border-[#d4b67b]/30 rounded-full">
                  <span className="text-[#d4b67b] text-[8px] font-bold uppercase tracking-widest whitespace-nowrap">Clinical Case {index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 flex justify-center">
            <DualCTA className="max-w-md" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-32 bg-[#070707]">
        <div className="px-6 sm:px-8 text-center space-y-4 mb-12 sm:mb-20">
          <span className="text-[#d4b67b] text-[9px] font-bold uppercase tracking-[0.5em]">Inteligência em Dados</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold gold-gradient tracking-tighter">Métricas de Sucesso</h2>
          <div className="w-16 h-px bg-[#d4b67b]/30 mx-auto"></div>
        </div>
        
        <Gallery images={GALLERY_IMAGES} />
        
        <div className="mt-12 text-center px-6 sm:px-8">
          <p className="text-gray-600 text-[8px] font-bold italic uppercase tracking-[0.3em] opacity-40 max-w-lg mx-auto leading-loose">Compliance & Sigilo: Os dados apresentados são frutos de estratégias autorizadas e exclusivas para cada parceiro Elavate.</p>
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
              Consolide sua marca no digital com a consultoria dos fundadores.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <DualCTA />
            <div className="flex items-center gap-2.5 text-[#d4b67b] text-[8px] font-bold uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-[#d4b67b] animate-ping"></span>
              Board de Sócios Online
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 sm:px-8 sm:py-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
          <div className="text-center space-y-3">
            <h3 className="font-signature text-5xl sm:text-7xl gold-gradient leading-none">{EXPERT_NAME}</h3>
            <p className="text-gray-600 text-[9px] font-bold tracking-[0.6em] uppercase">Estratégia Empresarial & Performance</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-gray-500 text-xs font-medium">
            <p className="tracking-[0.3em] opacity-50 uppercase">SÃO PAULO — SÃO VICENTE — GLOBAL</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-[#d4b67b] hover:text-[#ece0c8] transition-all border-b border-[#d4b67b]/20 pb-1 px-3">
              {EXPERT_HANDLE}
            </a>
          </div>

          <div className="pt-8 text-gray-700 text-[8px] font-bold uppercase tracking-[0.5em] opacity-30 text-center leading-loose">
            &copy; 2024 ELAVATE MARKETING. TRADEMARK EXCLUSIVITY. CORPORATE IDENTITY.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
