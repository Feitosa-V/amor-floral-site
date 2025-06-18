
import React from 'react';
import { Button } from './ui/button';

interface GiftCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  onGiveGift: (giftId: string) => void;
}

const GiftCard = ({ id, name, image, price, onGiveGift }: GiftCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover-lift animate-fade-in" style={{ borderColor: '#F2A3A9' }}>
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg mb-2" style={{ color: '#8C5B4D' }}>
          {name}
        </h3>
        {price && (
          <p className="text-sm mb-3" style={{ color: '#5C4033' }}>
            {price}
          </p>
        )}
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
