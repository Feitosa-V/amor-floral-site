
import React from 'react';
import { weddingData } from '../data/weddingData';

const CouplePhotoSection = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-8" style={{ color: '#F2A3A9' }}>
            <div className="w-16 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            <div className="text-2xl">❀</div>
            <div className="w-16 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: '#8C5B4D' }}>
            Nossa História
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#5C4033' }}>
            Dois corações que se encontraram e decidiram caminhar juntos para sempre
          </p>
        </div>

        <div className="relative mb-12 animate-fade-in hover-lift">
          <div className="aspect-[4/3] md:aspect-[3/2] max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border-4" style={{ borderColor: '#F2A3A9' }}>
            <img 
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=faces"
              alt={`${weddingData.couple.bride} e ${weddingData.couple.groom}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute -top-4 -left-4 text-3xl animate-float" style={{ color: '#E0449C' }}>❀</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{ color: '#E0449C', animationDelay: '1s' }}>❀</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border animate-fade-in" style={{ borderColor: '#F2A3A9' }}>
          <p className="font-serif text-xl md:text-2xl mb-4" style={{ color: '#8C5B4D' }}>
            "{weddingData.couple.bride} & {weddingData.couple.groom}"
          </p>
          <p className="font-light text-lg" style={{ color: '#5C4033' }}>
            Juntos construindo um futuro cheio de amor, cumplicidade e sonhos realizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouplePhotoSection;
