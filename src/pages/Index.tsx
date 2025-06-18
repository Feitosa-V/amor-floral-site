
import React from 'react';
import HeroSection from '../components/HeroSection';
import CeremonySection from '../components/CeremonySection';
import GiftsSection from '../components/GiftsSection';
import GuestGuideSection from '../components/GuestGuideSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CeremonySection />
      <GiftsSection />
      <GuestGuideSection />
      <Footer />
    </div>
  );
};

export default Index;
