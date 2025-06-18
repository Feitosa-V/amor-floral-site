
import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import FloralDivider from './FloralDivider';
import GiftCard from './GiftCard';
import QRCodeModal from './QRCodeModal';

const GiftsSection = () => {
  const [copied, setCopied] = useState(false);
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.gifts.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar PIX:', err);
    }
  };

  const handleGiveGift = (giftId: string) => {
    setSelectedGift(giftId);
    setIsModalOpen(true);
  };

  const selectedGiftData = selectedGift 
    ? weddingData.gifts.giftList.find(gift => gift.id === selectedGift)
    : null;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FAF6F2' }}>
      <div className="max-w-6xl mx-auto">
        <FloralDivider />
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4" style={{ color: '#8C5B4D' }}>
            Lista de Presentes
          </h2>
          <p className="font-light text-lg max-w-2xl mx-auto" style={{ color: '#5C4033' }}>
            {weddingData.gifts.message}
          </p>
        </div>

        <Tabs defaultValue="gifts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8" style={{ backgroundColor: '#F2A3A9' }}>
            <TabsTrigger 
              value="gifts" 
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
              style={{ color: '#5C4033' }}
            >
              Presentes
            </TabsTrigger>
            <TabsTrigger 
              value="pix" 
              className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
              style={{ color: '#5C4033' }}
            >
              PIX
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gifts" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingData.gifts.giftList.map((gift) => (
                <GiftCard
                  key={gift.id}
                  id={gift.id}
                  name={gift.name}
                  image={gift.image}
                  price={gift.price}
                  onGiveGift={handleGiveGift}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pix" className="mt-8">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm border" style={{ borderColor: '#F2A3A9' }}>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎁</div>
                  <h3 className="font-serif text-2xl mb-6" style={{ color: '#8C5B4D' }}>
                    Chave PIX
                  </h3>
                  
                  <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: '#FAF6F2' }}>
                    <p className="font-mono text-sm break-all" style={{ color: '#5C4033' }}>
                      {weddingData.gifts.pixKey}
                    </p>
                  </div>
                  
                  <Button 
                    onClick={copyPixKey}
                    className="text-white px-8 py-2 rounded-full transition-colors w-full hover:opacity-90"
                    style={{ backgroundColor: '#A3B882' }}
                  >
                    {copied ? '✓ Copiado!' : '📋 Copiar Chave PIX'}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <QRCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          giftName={selectedGiftData?.name || ''}
          qrCodeUrl={selectedGiftData?.qrCodeUrl}
        />
      </div>
    </section>
  );
};

export default GiftsSection;
