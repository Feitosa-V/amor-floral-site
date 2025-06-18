
import React from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';
import FloralDivider from './FloralDivider';

const CeremonySection = () => {
  return (
    <section className="py-20 px-4 bg-white">
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cerimônia */}
          <div className="text-center">
            <div className="rounded-lg p-8 mb-6" style={{ backgroundColor: '#FAF6F2' }}>
              <h3 className="font-serif text-2xl mb-4" style={{ color: '#8C5B4D' }}>
                Cerimônia Religiosa
              </h3>
              <div className="space-y-3" style={{ color: '#5C4033' }}>
                <p className="text-lg font-medium">{weddingData.ceremony.time}</p>
                <p className="font-medium">{weddingData.ceremony.venue.name}</p>
                <p className="text-sm">{weddingData.ceremony.venue.address}</p>
              </div>
            </div>
            <Button 
              asChild
              className="text-white px-6 py-2 rounded-full transition-colors hover:opacity-90"
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

          {/* Recepção */}
          <div className="text-center">
            <div className="rounded-lg p-8 mb-6" style={{ backgroundColor: '#F2A3A9', opacity: 0.1 }}>
              <div style={{ opacity: 10 }}>
                <h3 className="font-serif text-2xl mb-4" style={{ color: '#D85A67' }}>
                  Recepção
                </h3>
                <div className="space-y-3" style={{ color: '#A54C4C' }}>
                  <p className="text-lg font-medium">{weddingData.reception.time}</p>
                  <p className="font-medium">{weddingData.reception.venue.name}</p>
                  <p className="text-sm">{weddingData.reception.venue.address}</p>
                </div>
              </div>
            </div>
            <Button 
              asChild
              className="text-white px-6 py-2 rounded-full transition-colors hover:opacity-90"
              style={{ backgroundColor: '#E0449C' }}
            >
              <a 
                href={weddingData.reception.venue.mapsUrl} 
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
