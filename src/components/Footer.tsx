
import React from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${weddingData.contact.whatsapp}?text=${encodeURIComponent(weddingData.contact.message)}`;

  return (
    <footer className="text-white py-16 px-4" style={{ backgroundColor: '#5C4033' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl mb-6" style={{ color: '#F2A3A9' }}>❀</div>
          <h3 className="font-serif text-3xl text-white mb-4">
            {weddingData.couple.fullNames}
          </h3>
          <p className="font-light text-lg mb-8" style={{ color: '#F2A3A9' }}>
            {weddingData.ceremony.date}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button 
            asChild
            className="text-white px-8 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: '#25D366' }}
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

        <div className="border-t pt-8" style={{ borderColor: '#8C5B4D' }}>
          <div className="flex justify-center items-center space-x-4" style={{ color: '#F2A3A9' }}>
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#8C5B4D' }}></div>
            <div className="text-sm">❀ ❀ ❀</div>
            <div className="w-12 h-[1px]" style={{ backgroundColor: '#8C5B4D' }}></div>
          </div>
          <p className="text-center text-sm mt-4" style={{ color: '#F2A3A9' }}>
            Feito com amor para nosso grande dia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
