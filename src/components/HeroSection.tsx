
import React from 'react';
import { weddingData } from '../data/weddingData';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: '#FAF6F2' }}>
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float" style={{ color: '#F2A3A9' }}>❀</div>
        <div className="absolute top-40 right-16 text-3xl opacity-20 animate-float" style={{ color: '#E0449C', animationDelay: '2s' }}>❀</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-20 animate-float" style={{ color: '#F2A3A9', animationDelay: '1s' }}>❀</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float" style={{ color: '#E0449C', animationDelay: '3s' }}>❀</div>
        <div className="absolute top-1/2 left-5 text-2xl opacity-20 animate-float" style={{ color: '#F2A3A9', animationDelay: '1.5s' }}>❀</div>
        <div className="absolute top-1/3 right-5 text-2xl opacity-20 animate-float" style={{ color: '#E0449C', animationDelay: '2.5s' }}>❀</div>
      </div>

      <div className="text-center max-w-3xl mx-auto animate-fade-in relative z-10">
        {/* Ornamento superior */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-6 mb-6" style={{ color: '#F2A3A9' }}>
            <div className="w-20 h-[2px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            <div className="text-3xl">❀</div>
            <div className="w-20 h-[2px]" style={{ backgroundColor: '#F2A3A9' }}></div>
          </div>
          
          <p className="text-lg font-light mb-8" style={{ color: '#8C5B4D' }}>
            Com muito amor, convidamos você para celebrar
          </p>
        </div>

        {/* Nomes dos noivos */}
        <div className="mb-8">
          <div className="text-6xl mb-6 animate-float" style={{ color: '#E0449C' }}>❀</div>
          <h1 className="font-serif text-5xl md:text-7xl mb-3 hover-lift" style={{ color: '#000000' }}>
            {weddingData.couple.bride}
          </h1>
          <div className="flex justify-center items-center space-x-4 my-6">
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#8C5B4D' }}></div>
            <div className="text-3xl font-light" style={{ color: '#8C5B4D' }}>&</div>
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#8C5B4D' }}></div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 hover-lift" style={{ color: '#000000' }}>
            {weddingData.couple.groom}
          </h1>
        </div>
        
        <CountdownTimer />
        
        {/* Informações da cerimônia */}
        <div className="space-y-6" style={{ color: '#8C5B4D' }}>
          <p className="text-xl font-light">Nosso grande dia chegou!</p>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border-2 py-8 px-6 my-12 hover-lift shadow-lg" style={{ borderColor: '#F2A3A9' }}>
            <div className="text-3xl mb-4" style={{ color: '#E0449C' }}>💒</div>
            <p className="text-3xl font-serif mb-3" style={{ color: '#8C5B4D' }}>
              {weddingData.ceremony.date}
            </p>
            <p className="text-xl mb-4" style={{ color: '#8C5B4D' }}>
              às {weddingData.ceremony.time}
            </p>
            <div className="flex justify-center items-center space-x-3 mb-2">
              <div className="w-8 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
              <div className="text-sm" style={{ color: '#F2A3A9' }}>❀</div>
              <div className="w-8 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            </div>
            <p className="text-lg font-medium" style={{ color: '#5C4033' }}>
              {weddingData.ceremony.venue.name}
            </p>
          </div>
          
          <p className="text-xl font-light">Venha celebrar este momento único conosco</p>
        </div>
        
        {/* Ornamento inferior */}
        <div className="mt-16">
          <div className="flex justify-center items-center space-x-6" style={{ color: '#F2A3A9' }}>
            <div className="w-20 h-[2px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            <div className="text-2xl">❀ ❀ ❀</div>
            <div className="w-20 h-[2px]" style={{ backgroundColor: '#F2A3A9' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
