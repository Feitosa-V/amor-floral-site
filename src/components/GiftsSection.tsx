
import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';
import FloralDivider from './FloralDivider';

const GiftsSection = () => {
  const [copied, setCopied] = useState(false);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.gifts.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar PIX:', err);
    }
  };

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <FloralDivider />
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-sage-800 mb-4">
            Lista de Presentes
          </h2>
          <p className="text-sage-600 font-light text-lg max-w-2xl mx-auto">
            {weddingData.gifts.message}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-sage-100">
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-serif text-2xl text-sage-700 mb-6">
                Chave PIX
              </h3>
              
              <div className="bg-sage-50 rounded-lg p-4 mb-6">
                <p className="text-sage-700 font-mono text-sm break-all">
                  {weddingData.gifts.pixKey}
                </p>
              </div>
              
              <Button 
                onClick={copyPixKey}
                className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-2 rounded-full transition-colors w-full"
              >
                {copied ? '✓ Copiado!' : '📋 Copiar Chave PIX'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
