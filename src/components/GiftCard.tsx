
import React from 'react';
import { Button } from './ui/button';

interface GiftCardProps {
  id: string;
  image: string;
  onGiveGift: (giftId: string) => void;
}

const GiftCard = ({ id, image, onGiveGift }: GiftCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover-lift animate-fade-in overflow-hidden" style={{ borderColor: '#F2A3A9' }}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt="Presente"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3">
        <Button 
          onClick={() => onGiveGift(id)}
          className="w-full text-white rounded-full transition-colors hover:opacity-90"
          style={{ backgroundColor: '#A3B882' }}
        >
          🎁 Dar Presente
        </Button>
      </div>
    </div>
  );
};

export default GiftCard;
