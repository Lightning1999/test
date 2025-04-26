import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ClientsSection from '../components/sections/ClientsSection';
import TeamSection from '../components/sections/TeamSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage; 