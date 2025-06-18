
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
          <h2 className="font-serif text-4xl text-sage-800 mb-4">
            Nossa Cerimônia
          </h2>
          <p className="text-sage-600 font-light text-lg">
            Será uma honra tê-los conosco neste momento especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cerimônia */}
          <div className="text-center">
            <div className="bg-cream-50 rounded-lg p-8 mb-6">
              <h3 className="font-serif text-2xl text-sage-700 mb-4">
                Cerimônia Religiosa
              </h3>
              <div className="space-y-3 text-sage-600">
                <p className="text-lg font-medium">{weddingData.ceremony.time}</p>
                <p className="font-medium">{weddingData.ceremony.venue.name}</p>
                <p className="text-sm">{weddingData.ceremony.venue.address}</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-2 rounded-full transition-colors"
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
            <div className="bg-rose-50 rounded-lg p-8 mb-6">
              <h3 className="font-serif text-2xl text-rose-700 mb-4">
                Recepção
              </h3>
              <div className="space-y-3 text-rose-600">
                <p className="text-lg font-medium">{weddingData.reception.time}</p>
                <p className="font-medium">{weddingData.reception.venue.name}</p>
                <p className="text-sm">{weddingData.reception.venue.address}</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-colors"
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
