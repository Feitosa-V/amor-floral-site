
import React from 'react';
import { weddingData } from '../data/weddingData';
import FloralDivider from './FloralDivider';

const GuestGuideSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <FloralDivider />
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4" style={{ color: '#8C5B4D' }}>
            {weddingData.guestGuide.title}
          </h2>
          <p className="font-light text-lg" style={{ color: '#5C4033' }}>
            Algumas informações importantes para nossos queridos convidados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingData.guestGuide.items.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 hover:shadow-md transition-shadow border hover-lift animate-fade-in"
              style={{ backgroundColor: '#FAF6F2', borderColor: '#F2A3A9' }}
            >
              <h3 className="font-serif text-xl mb-3" style={{ color: '#8C5B4D' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C4033' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestGuideSection;
