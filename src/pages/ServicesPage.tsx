import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/ServicesSection';
import Button from '../components/common/Button';

const PageContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const DetailedServicesSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-dark);
`;

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ImageBlock = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (max-width: 991px) {
    order: 1;
  }
`;

const ContentBlock = styled(motion.div)`
  @media (max-width: 991px) {
    order: 2;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  margin-bottom: 2rem;
  list-style: none;
`;

const FeatureItem = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: '✓';
    color: var(--secondary-color);
    margin-right: 0.8rem;
    font-weight: bold;
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <HeroContent>
            <PageTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span>Services</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide end-to-end software development services to help businesses
              transform their ideas into powerful digital solutions.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <ServicesSection />
        
        <DetailedServicesSection>
          <DetailContainer>
            <ContentBlock
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>Custom Software Development</ServiceTitle>
              <ServiceDescription>
                We build tailored software solutions that align with your unique business 
                requirements, workflows, and objectives. Our custom development approach 
                ensures you get exactly what your business needs, without unnecessary 
                features or limitations.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Requirement analysis and planning</FeatureItem>
                <FeatureItem>Custom architecture design</FeatureItem>
                <FeatureItem>Agile development methodology</FeatureItem>
                <FeatureItem>Quality assurance and testing</FeatureItem>
                <FeatureItem>Deployment and maintenance</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Start Your Project
              </Button>
            </ContentBlock>
            <ImageBlock
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/clients/apide-512x512.png" alt="Custom Software Development" />
            </ImageBlock>
          </DetailContainer>
          
          <DetailContainer>
            <ImageBlock
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/clients/apide-512x512.png" alt="Web Development" />
            </ImageBlock>
            <ContentBlock
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                Our web development services focus on creating responsive, intuitive, 
                and high-performance web applications that provide exceptional user 
                experiences. We use modern frameworks and technologies to ensure your 
                web presence stands out.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Responsive front-end development</FeatureItem>
                <FeatureItem>Scalable back-end architecture</FeatureItem>
                <FeatureItem>Progressive Web Applications (PWA)</FeatureItem>
                <FeatureItem>E-commerce solutions</FeatureItem>
                <FeatureItem>Content Management Systems</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Discuss Your Web Project
              </Button>
            </ContentBlock>
          </DetailContainer>
          
          <DetailContainer>
            <ContentBlock
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceTitle>Mobile App Development</ServiceTitle>
              <ServiceDescription>
                Transform your business with custom mobile applications designed to 
                engage users and deliver value. We develop native and cross-platform 
                mobile apps that work seamlessly across devices, providing an optimal 
                user experience.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>iOS and Android development</FeatureItem>
                <FeatureItem>Cross-platform development with React Native</FeatureItem>
                <FeatureItem>UI/UX design for mobile</FeatureItem>
                <FeatureItem>API integration and backend services</FeatureItem>
                <FeatureItem>App Store optimization and deployment</FeatureItem>
              </FeatureList>
              <Button to="/contact" variant="primary">
                Build Your Mobile App
              </Button>
            </ContentBlock>
            <ImageBlock
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/clients/apide-512x512.png" alt="Mobile App Development" />
            </ImageBlock>
          </DetailContainer>
        </DetailedServicesSection>
      </PageContainer>
    </Layout>
  );
};

export default ServicesPage; 