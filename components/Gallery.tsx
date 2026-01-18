
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="px-4 sm:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-[3/4] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5 hover:border-[#d4b67b]/40 transition-all duration-1000 shadow-2xl"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Case de Sucesso ${index + 1}`} 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-8">
              <span className="text-white text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.3em] border border-[#d4b67b]/40 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md bg-[#d4b67b]/5">Ver Detalhes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#050505]/98 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-700"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Case ampliado" 
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(212,182,123,0.15)] border border-white/10"
            />
            <button 
              className="absolute top-4 right-4 sm:-top-4 sm:-right-16 text-white/50 hover:text-[#d4b67b] p-3 transition-all hover:rotate-90"
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
