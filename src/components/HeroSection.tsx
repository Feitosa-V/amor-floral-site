
import React from 'react';
import { weddingData } from '../data/weddingData';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#FAF6F2' }}>
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="text-floral-pink text-6xl mb-4">❀</div>
          <h1 className="font-serif text-5xl md:text-6xl mb-2" style={{ color: '#000000' }}>
            {weddingData.couple.bride}
          </h1>
          <div className="text-primary-brown text-2xl font-light mb-2">&</div>
          <h1 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: '#000000' }}>
            {weddingData.couple.groom}
          </h1>
        </div>
        
        <CountdownTimer />
        
        <div className="space-y-4" style={{ color: '#8C5B4D' }}>
          <p className="text-lg font-light">Convidamos você para celebrar conosco</p>
          <div className="border-t border-b py-6 my-8" style={{ borderColor: '#F2A3A9' }}>
            <p className="text-2xl font-serif mb-2" style={{ color: '#8C5B4D' }}>
              {weddingData.ceremony.date}
            </p>
            <p className="text-lg" style={{ color: '#8C5B4D' }}>
              às {weddingData.ceremony.time}
            </p>
          </div>
          <p className="text-lg font-light">nosso grande dia</p>
        </div>
        
        <div className="mt-12">
          <div className="flex justify-center items-center space-x-4" style={{ color: '#F2A3A9' }}>
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            <div className="text-xl">❀ ❀ ❀</div>
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
