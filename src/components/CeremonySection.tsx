
import React from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';
import FloralDivider from './FloralDivider';

const CeremonySection = () => {
  return (
    <section className="py-20 px-4 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <FloralDivider />
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4" style={{ color: '#8C5B4D' }}>
            Nossa Cerimônia
          </h2>
          <p className="font-light text-lg" style={{ color: '#5C4033' }}>
            Será uma honra tê-los conosco neste momento especial
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Cerimônia */}
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="rounded-lg p-8 mb-6 shadow-sm" style={{ backgroundColor: '#FAF6F2' }}>
              <h3 className="font-serif text-2xl mb-4" style={{ color: '#8C5B4D' }}>
                Cerimônia
              </h3>
              <div className="space-y-3" style={{ color: '#5C4033' }}>
                <p className="text-lg font-medium">{weddingData.ceremony.time}</p>
                <p className="font-medium">{weddingData.ceremony.venue.name}</p>
                <p className="text-sm">{weddingData.ceremony.venue.address}</p>
              </div>
            </div>
            <Button 
              asChild
              className="text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#A3B882' }}
            >
              <a 
                href={weddingData.ceremony.venue.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2"
              >
                <span>📍</span>
                <span>Ver no Mapa</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeremonySection;
