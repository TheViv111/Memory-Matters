
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResourcesHero from '@/components/resources/ResourcesHero';
import EducationalVideos from '@/components/resources/EducationalVideos';
import EducationalArticles from '@/components/resources/EducationalArticles';
import DownloadableResources from '@/components/resources/DownloadableResources';
import SupportGroups from '@/components/resources/SupportGroups';
import ResourcesFAQ from '@/components/resources/ResourcesFAQ';
import EmergencyResources from '@/components/resources/EmergencyResources';
import NewsletterSignup from '@/components/resources/NewsletterSignup';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Resources = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ResourcesHero />
      <ScrollReveal direction="up" delay={0.1}>
        <EducationalVideos />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <EducationalArticles />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.3}>
        <DownloadableResources />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.4}>
        <SupportGroups />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.5}>
        <ResourcesFAQ />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.6}>
        <EmergencyResources />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.7}>
        <NewsletterSignup />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Resources;
