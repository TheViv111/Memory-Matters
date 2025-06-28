
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import CredentialsSection from '@/components/about/CredentialsSection';
import PhilosophySection from '@/components/about/PhilosophySection';
import ScrollReveal from '@/components/animations/ScrollReveal';

const About = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <HeroSection />
      <ScrollReveal direction="up" delay={0.1}>
        <CredentialsSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <PhilosophySection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default About;
