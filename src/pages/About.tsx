
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import { CredentialsList } from '@/components/ui/Credentials';
import PhilosophySection from '@/components/about/PhilosophySection';
import { Reveal } from '@/components/animations/Reveal';

const About = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <HeroSection />

      <Reveal width="100%">
        <CredentialsList />
      </Reveal>

      <Reveal width="100%">
        <PhilosophySection />
      </Reveal>

      <Footer />
    </div>
  );
};

export default About;
