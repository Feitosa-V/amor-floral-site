
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { weddingData } from '../data/weddingData';
import { toast } from 'sonner';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  productUrl?: string;
}

const QRCodeModal = ({ isOpen, onClose, productUrl }: QRCodeModalProps) => {
  const [copied, setCopied] = useState(false);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.gifts.pixKey);
      setCopied(true);
      toast.success('Chave PIX copiada!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Erro ao copiar chave PIX');
    }
  };
  const handleWhatsAppNotify = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de enviar um presente para o casamento de vocês!!! Felicidades ${weddingData.couple.bride} e ${weddingData.couple.groom}! 🎁`
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
          <DialogTitle className="text-center font-serif text-xl mb-4" style={{ color: '#8C5B4D' }}>
            Presentear
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="qrcode" className="w-full">
          <TabsList 
            className="grid w-full grid-cols-2 mb-6 h-12 rounded-full p-1"
            style={{ backgroundColor: '#F2E8E1' }}
          >
            <TabsTrigger 
              value="qrcode" 
              className="rounded-full transition-all font-medium data-[state=active]:bg-[#F2A3A9] data-[state=active]:text-white"
            >
              QR Code
            </TabsTrigger>
            <TabsTrigger 
              value="pix" 
              className="rounded-full transition-all font-medium data-[state=active]:bg-[#F2A3A9] data-[state=active]:text-white"
            >
              PIX
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="qrcode" className="text-center">
            <div className="bg-white rounded-lg p-6 mb-4 border" style={{ borderColor: '#F2A3A9' }}>
              <img 
                src={weddingData.gifts.qrCodeUrl} 
                alt="QR Code para pagamento"
                className="w-48 h-48 mx-auto"
              />
            </div>
            
            <p className="text-sm mb-4" style={{ color: '#5C4033' }}>
              Escaneie o código QR acima para fazer o pagamento do presente
            </p>
          </TabsContent>
          
          <TabsContent value="pix" className="text-center">
            <div className="bg-white rounded-lg p-6 mb-4 border" style={{ borderColor: '#F2A3A9' }}>
              <p className="text-sm mb-2 font-semibold" style={{ color: '#8C5B4D' }}>
                Chave PIX
              </p>
              <p className="text-lg font-mono mb-4" style={{ color: '#5C4033' }}>
                {weddingData.gifts.pixKey}
              </p>
              <Button 
                onClick={copyPixKey}
                className="w-full text-white rounded-full transition-colors hover:opacity-90"
                style={{ backgroundColor: '#A3B882' }}
              >
                {copied ? '✓ Copiado!' : '📋 Copiar Chave PIX'}
              </Button>
            </div>
            
            <p className="text-sm mb-4" style={{ color: '#5C4033' }}>
              Copie a chave PIX acima para fazer o pagamento do presente
            </p>
          </TabsContent>
        </Tabs>
        
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
            💬 Enviar Recado no WhatsApp
          </Button>
        </div>

        <div className="text-center">
          <div className="text-2xl" style={{ color: '#E0449C' }}>❀</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
