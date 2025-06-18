
import React from 'react';
import { weddingData } from '../data/weddingData';
import FloralDivider from './FloralDivider';

const GuestGuideSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <FloralDivider />
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-sage-800 mb-4">
            {weddingData.guestGuide.title}
          </h2>
          <p className="text-sage-600 font-light text-lg">
            Algumas informações importantes para nossos queridos convidados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingData.guestGuide.items.map((item, index) => (
            <div 
              key={index}
              className="bg-cream-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl text-sage-700 mb-3">
                {item.title}
              </h3>
              <p className="text-sage-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-rose-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-rose-700 font-light text-lg">
              "A alegria de vocês é o que mais desejamos. 
              Venham celebrar conosco este momento único!"
            </p>
            <div className="text-rose-400 text-xl mt-4">❀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestGuideSection;
