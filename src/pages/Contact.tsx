
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactOfficeHours from '@/components/contact/ContactOfficeHours';
import ContactLocationInfo from '@/components/contact/ContactLocationInfo';
import ContactInsuranceInfo from '@/components/contact/ContactInsuranceInfo';
import ContactHelpSection from '@/components/contact/ContactHelpSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import ContactPrivacyNotice from '@/components/contact/ContactPrivacyNotice';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5">
      <Navigation />
      <ContactHero />
      <ScrollReveal direction="up" delay={0.1}>
        <ContactInfo />
      </ScrollReveal>

      {/* Enhanced Contact Form & Office Information */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-medical-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left" delay={0.2}>
              <ContactForm />
            </ScrollReveal>

            {/* Enhanced Office Information */}
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.3}>
                <ContactOfficeHours />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.4}>
                <ContactLocationInfo />
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.5}>
                <ContactInsuranceInfo />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={0.6}>
        <ContactMapSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.7}>
        <ContactHelpSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.8}>
        <ContactPrivacyNotice />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Contact;
