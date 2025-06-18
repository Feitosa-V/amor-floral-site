
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
    <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm border border-floral-coral/20 mb-8">
      <p className="text-primary-brown font-light text-lg text-center">
        <span className="text-floral-pink font-medium">Faltam</span>{' '}
        <span className="font-medium text-primary">{timeLeft.days} dias</span>, {' '}
        <span className="font-medium text-primary">{timeLeft.hours} horas</span>, {' '}
        <span className="font-medium text-primary">{timeLeft.minutes} minutos</span> e {' '}
        <span className="font-medium text-primary">{timeLeft.seconds} segundos</span>
        <br />
        <span className="text-floral-pink font-medium">para o grande dia!</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
