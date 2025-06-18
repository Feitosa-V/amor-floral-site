
import React from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${weddingData.contact.whatsapp}?text=${encodeURIComponent(weddingData.contact.message)}`;

  return (
    <footer className="bg-sage-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sage-300 text-4xl mb-6">❀</div>
          <h3 className="font-serif text-3xl text-white mb-4">
            {weddingData.couple.fullNames}
          </h3>
          <p className="text-sage-300 font-light text-lg mb-8">
            {weddingData.ceremony.date}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button 
            asChild
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Fale Conosco via WhatsApp</span>
            </a>
          </Button>
        </div>

        <div className="border-t border-sage-700 pt-8">
          <div className="flex justify-center items-center space-x-4 text-sage-400">
            <div className="w-12 h-[1px] bg-sage-600"></div>
            <div className="text-sm">❀ ❀ ❀</div>
            <div className="w-12 h-[1px] bg-sage-600"></div>
          </div>
          <p className="text-center text-sage-400 text-sm mt-4">
            Feito com amor para nosso grande dia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
