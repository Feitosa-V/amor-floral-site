
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { weddingData } from '../data/weddingData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeUrl?: string;
  productUrl?: string;
}

const QRCodeModal = ({ isOpen, onClose, qrCodeUrl, productUrl }: QRCodeModalProps) => {
  const handleWhatsAppNotify = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de escolher um presente para o casamento de ${weddingData.couple.bride} e ${weddingData.couple.groom}! 🎁`
    );
    const whatsappUrl = `https://wa.me/${weddingData.contact.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewProduct = () => {
    if (productUrl) {
      window.open(productUrl, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center" style={{ color: '#8C5B4D' }}>
            Presentear
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-4">
          {qrCodeUrl ? (
            <div className="w-full max-w-sm">
              <img 
                src={qrCodeUrl} 
                alt="QR Code para pagamento"
                className="w-full h-auto rounded-lg border-2"
                style={{ borderColor: '#F2A3A9' }}
              />
              <p className="text-center text-sm mt-4" style={{ color: '#5C4033' }}>
                Escaneie o QR Code para realizar o pagamento
              </p>
            </div>
          ) : (
            <div className="w-full p-8 text-center rounded-lg" style={{ backgroundColor: '#FAF6F2' }}>
              <p className="text-sm" style={{ color: '#5C4033' }}>
                QR Code não disponível. Use os botões abaixo para ver o presente ou nos avisar.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 w-full">
            {productUrl && (
              <Button 
                onClick={handleViewProduct}
                className="w-full text-white rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#A3B882' }}
              >
                🔗 Ver Presente
              </Button>
            )}
            
            <Button 
              onClick={handleWhatsAppNotify}
              className="w-full text-white rounded-full transition-colors hover:opacity-90"
              style={{ backgroundColor: '#F2A3A9' }}
            >
              💬 Avisar no WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
