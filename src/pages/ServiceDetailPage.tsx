import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

// Define service data types
interface ServiceData {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

interface ServicesDataMap {
  [key: string]: ServiceData;
}

// Service data with detailed information
const servicesData: ServicesDataMap = {
  'custom-software-development': {
    icon: 'computer',
    title: 'Custom Software Development',
    description: 'We build tailored software solutions that align with your unique business requirements, workflows, and objectives. Our custom development approach ensures you get exactly what your business needs, without unnecessary features or limitations.',
    features: [
      'Requirement analysis and planning',
      'Custom architecture design',
      'Agile development methodology',
      'Quality assurance and testing',
      'Deployment and maintenance'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Start Your Project'
  },
  'web-development': {
    icon: 'language',
    title: 'Web Development',
    description: 'Our web development services focus on creating responsive, intuitive, and high-performance web applications that provide exceptional user experiences. We use modern frameworks and technologies to ensure your web presence stands out.',
    features: [
      'Responsive front-end development',
      'Scalable back-end architecture',
      'Progressive Web Applications (PWA)',
      'E-commerce solutions',
      'Content Management Systems'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Discuss Your Web Project'
  },
  'mobile-app-development': {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Transform your business with custom mobile applications designed to engage users and deliver value. We develop native and cross-platform mobile apps that work seamlessly across devices, providing an optimal user experience.',
    features: [
      'iOS and Android development',
      'Cross-platform development with React Native',
      'UI/UX design for mobile',
      'API integration and backend services',
      'App Store optimization and deployment'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Build Your Mobile App'
  },
  'cloud-solutions': {
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing to scale your business operations and reduce infrastructure costs. Our cloud solutions provide the flexibility, security, and performance your business needs to thrive in the digital economy.',
    features: [
      'Cloud migration strategy',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Managed cloud services'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Explore Cloud Options'
  },
  'cybersecurity-services': {
    icon: 'security',
    title: 'Cybersecurity Services',
    description: 'Protect your business and data with our comprehensive cybersecurity services. We help identify vulnerabilities, implement security measures, and provide ongoing monitoring to keep your systems and data safe from threats.',
    features: [
      'Security assessments and audits',
      'Vulnerability management',
      'Identity and access management',
      'Security incident response',
      'Compliance and regulatory support'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Secure Your Business'
  },
  'data-analytics': {
    icon: 'analytics',
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our data analytics services. We help you collect, process, and analyze data to make informed business decisions and gain a competitive edge in your market.',
    features: [
      'Data collection and integration',
      'Data visualization and reporting',
      'Predictive analytics',
      'Business intelligence solutions',
      'Big data processing'
    ],
    image: '/images/clients/apide-512x512.png',
    ctaText: 'Unlock Your Data Potential'
  }
};

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

const DetailedServiceSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-dark);
`;

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceIconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: var(--secondary-color);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: var(--background-dark);
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
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

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId && servicesData[serviceId] ? servicesData[serviceId] : null;
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  
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
              <span>{service.title}</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.description.split('.')[0]}.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <DetailedServiceSection>
          <DetailContainer>
            <ServiceHeader>
              <ServiceIconContainer>
                <Icon name={service.icon} size="large" />
              </ServiceIconContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceHeader>
            
            <ContentWrapper>
              <ContentBlock
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
                <FeatureList>
                  {service.features.map((feature: string, index: number) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
                <Button to="/contact" variant="primary">
                  {service.ctaText}
                </Button>
              </ContentBlock>
              <ImageBlock
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={service.image} alt={service.title} />
              </ImageBlock>
            </ContentWrapper>
          </DetailContainer>
        </DetailedServiceSection>
      </PageContainer>
    </Layout>
  );
};

export default ServiceDetailPage; 