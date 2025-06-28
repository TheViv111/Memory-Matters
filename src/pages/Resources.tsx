
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

const Resources = () => {
  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      <ResourcesHero />
      <EducationalVideos />
      <EducationalArticles />
      <DownloadableResources />
      <SupportGroups />
      <ResourcesFAQ />
      <EmergencyResources />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Resources;
