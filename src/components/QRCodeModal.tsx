
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
      <DialogContent className="max-w-md mx-auto" style={{ backgroundColor: '#FAF6F2', borderColor: '#F2A3A9' }}>
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-xl" style={{ color: '#8C5B4D' }}>
            Presentear
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-6">
          <div className="bg-white rounded-lg p-6 mb-4 border" style={{ borderColor: '#F2A3A9' }}>
            {qrCodeUrl ? (
              <img 
                src={qrCodeUrl} 
                alt="QR Code para pagamento"
                className="w-48 h-48 mx-auto"
              />
            ) : (
              <div 
                className="w-48 h-48 mx-auto flex items-center justify-center rounded-lg border-2 border-dashed"
                style={{ borderColor: '#F2A3A9', backgroundColor: '#FAF6F2' }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-sm" style={{ color: '#5C4033' }}>
                    QR Code será<br />adicionado em breve
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm mb-4" style={{ color: '#5C4033' }}>
            Escaneie o código QR acima para fazer o pagamento do presente
          </p>
          
          <div className="flex flex-col gap-3 mb-4">
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

          <div className="text-center">
            <div className="text-2xl" style={{ color: '#E0449C' }}>❀</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
