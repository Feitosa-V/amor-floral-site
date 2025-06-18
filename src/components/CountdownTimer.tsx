
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-29T16:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm border mb-8 animate-fade-in" style={{ borderColor: '#F2A3A9' }}>
      <p className="font-light text-lg text-center" style={{ color: '#8C5B4D' }}>
        <span className="font-medium" style={{ color: '#E0449C' }}>Faltam</span>{' '}
        <span className="font-medium" style={{ color: '#000000' }}>{timeLeft.days} dias</span>, {' '}
        <span className="font-medium" style={{ color: '#000000' }}>{timeLeft.hours} horas</span>, {' '}
        <span className="font-medium" style={{ color: '#000000' }}>{timeLeft.minutes} minutos</span> e {' '}
        <span className="font-medium" style={{ color: '#000000' }}>{timeLeft.seconds} segundos</span>
        <br />
        <span className="font-medium" style={{ color: '#E0449C' }}>para o grande dia!</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
