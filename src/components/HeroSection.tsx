
import React from 'react';
import { weddingData } from '../data/weddingData';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream-50 to-white px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="text-sage-500 text-6xl mb-4">❀</div>
          <h1 className="font-serif text-5xl md:text-6xl text-sage-800 mb-2">
            {weddingData.couple.bride}
          </h1>
          <div className="text-sage-400 text-2xl font-light mb-2">&</div>
          <h1 className="font-serif text-5xl md:text-6xl text-sage-800 mb-8">
            {weddingData.couple.groom}
          </h1>
        </div>
        
        <div className="space-y-4 text-sage-600">
          <p className="text-lg font-light">Convidamos você para celebrar conosco</p>
          <div className="border-t border-b border-sage-200 py-6 my-8">
            <p className="text-2xl font-serif text-sage-700 mb-2">
              {weddingData.ceremony.date}
            </p>
            <p className="text-lg text-sage-600">
              às {weddingData.ceremony.time}
            </p>
          </div>
          <p className="text-lg font-light">nosso grande dia</p>
        </div>
        
        <div className="mt-12">
          <div className="flex justify-center items-center space-x-4 text-sage-300">
            <div className="w-12 h-[1px] bg-sage-300"></div>
            <div className="text-xl">❀ ❀ ❀</div>
            <div className="w-12 h-[1px] bg-sage-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
