
import React, { useState, useEffect } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicamos as imagens para criar o efeito de loop infinito sem saltos
  const extendedImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradientes laterais para efeito de suavização (Premium look) */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-[#070707] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-[#070707] to-transparent pointer-events-none"></div>

      {/* Container da Animação */}
      <div className="flex w-full overflow-hidden py-4">
        <div 
          className="flex gap-4 sm:gap-6 animate-marquee hover:pause whitespace-nowrap"
          style={{
            animation: 'marquee 60s linear infinite',
          }}
        >
          {extendedImages.map((src, index) => (
            <div 
              key={index} 
              className="relative inline-block w-[220px] sm:w-[320px] aspect-[3/4] rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 hover:border-[#d4b67b]/40 transition-all duration-700 shadow-2xl flex-shrink-0"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Métrica de Sucesso ${index + 1}`} 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 sm:pb-10">
                <span className="text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] border border-[#d4b67b]/40 px-4 py-2 rounded-full backdrop-blur-md bg-[#d4b67b]/10">
                  Expandir Métrica
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * ${images.length} - 1.5rem * ${images.length})); }
        }
        
        /* Ajuste para mobile se necessário */
        @media (max-width: 640px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-220px * ${images.length} - 1rem * ${images.length})); }
          }
        }

        .hover\\:pause:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#050505]/98 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Métrica ampliada" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(212,182,123,0.2)] border border-white/10"
            />
            <button 
              className="absolute top-4 right-4 sm:-top-8 sm:-right-8 text-white/50 hover:text-[#d4b67b] p-4 transition-all hover:rotate-90"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
