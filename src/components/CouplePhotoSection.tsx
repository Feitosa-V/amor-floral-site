
import React from 'react';
import { weddingData } from '../data/weddingData';

const CouplePhotoSection = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-8" style={{ color: '#F2A3A9' }}>
            <div className="w-16 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
            <div className="text-2xl">❀</div>
            <div className="w-16 h-[1px]" style={{ backgroundColor: '#F2A3A9' }}></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: '#8C5B4D' }}>
            Nossa História
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#5C4033' }}>
            Dois corações que se encontraram e decidiram caminhar juntos para sempre...
          </p>
        </div>

        <div className="relative mb-12 animate-fade-in hover-lift">
          <div className="aspect-[4/3] md:aspect-[3/2] max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border-4" style={{ borderColor: '#F2A3A9' }}>
            <img 
              src="/images/foto_rannielly_caio.png"
              alt={`${weddingData.couple.bride} e ${weddingData.couple.groom}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute -top-4 -left-4 text-3xl animate-float" style={{ color: '#E0449C' }}>❀</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{ color: '#E0449C', animationDelay: '1s' }}>❀</div>
          </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border animate-fade-in" style={{ borderColor: '#F2A3A9' }}>
          <p className="font-serif text-xl md:text-2xl mb-4" style={{ color: '#8C5B4D' }}>
            "{weddingData.couple.bride} & {weddingData.couple.groom}"
          </p>
          <p className="font-light text-lg mb-4" style={{ color: '#5C4033' }}>
            É uma alegria imensa ter você aqui, fazendo parte desse momento tão especial das nossas vidas. E olha… se você chegou até aqui, pode ter certeza: tem um espaço guardado no nosso coração.
          </p>

          <p className="font-light text-lg mb-4" style={{ color: '#5C4033' }}>
            A nossa história começou do jeitinho mais a nossa cara: numa festa, é claro! Quem conhece a gente sabe que barzinho, música boa e uma boa companhia sempre fizeram parte do nosso roteiro. Foi através da Mayara que nos aproximamos e não demorou muito até rolar o primeiro beijo. Mas calma, a história não para por aí!
          </p>
 
          <p className="font-light text-lg mb-4" style={{ color: '#5C4033' }}>
            Depois disso, viramos amigos, parceiros de rolê, confidentes… e, sem nem perceber, a gente foi ficando. Ficando mais próximos, mais conectados, mais certos de que tinha algo diferente ali. Até que não dava mais pra negar: a gente se encontrou de verdade.
          </p>
            
          <p className="font-light text-lg mb-4" style={{ color: '#5C4033' }}>
            A nossa conexão sempre foi leve, verdadeira e daquelas que a gente sente que foi escrita por alguém lá de cima. E foi mesmo. Deus caprichou nos detalhes e preparou tudo com perfeição.
          </p>
            
          <p className="font-light text-lg mb-4" style={{ color: '#5C4033' }}>
            Agora, depois de tantos momentos vividos juntos, chegou a hora de dar um novo passo: vamos casar! E claro, essa comemoração só faz sentido com vocês ao nosso lado! Vocês que riram, dançaram, vibraram (e talvez até deram uma forcinha no começo… rs) com a gente.
          </p>
            
          <p className="font-light text-lg" style={{ color: '#5C4033' }}>
            Sintam-se em casa. Esse espaço é nosso, mas é feito com muito carinho para vocês.
          </p>
        </div>

      {/* Vídeo */}
       <div className="mt-16 animate-fade-in">
          <div
            className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg border-4 relative"
            style={{ borderColor: '#F2A3A9' }}
          >
            {/* Proporção fixa sem corte */}
            <div className="aspect-[16/9] w-full bg-black">
              <video
                controls
                playsInline
                className="w-full h-full object-contain"
                poster="/images/foto_rannielly_caio.png"
                preload="metadata"
              >
                <source src="/video/video_casamento.MP4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
      </div>

      </div>
    </section>
  );
};

export default CouplePhotoSection;
