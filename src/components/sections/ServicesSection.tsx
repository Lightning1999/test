import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Icon from '../common/Icon';

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    border-color: var(--secondary-color);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
    border-radius: 16px 16px 0 0;
    transition: height 0.3s ease;
  }

  &:hover:before {
    height: 8px;
  }
`;

const ServiceIcon = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: rgba(var(--secondary-color-rgb), 0.1);
  color: var(--secondary-color);
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  margin-top: auto;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Service data
const services = [
  {
    id: 1,
    icon: 'computer',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
    path: 'custom-software-development'
  },
  {
    id: 2,
    icon: 'language',
    title: 'Web Development',
    description: 'Modern and responsive web applications built with the latest technologies and frameworks.',
    path: 'web-development'
  },
  {
    id: 3,
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    path: 'mobile-app-development'
  },
  {
    id: 4,
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that optimize performance and reduce operational costs.',
    path: 'cloud-solutions'
  },
  {
    id: 5,
    icon: 'security',
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your data and applications from threats.',
    path: 'cybersecurity-services'
  },
  {
    id: 6,
    icon: 'analytics',
    title: 'Data Analytics',
    description: 'Advanced analytics solutions that transform your data into valuable business insights.',
    path: 'data-analytics'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <ServicesContainer id="services">
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our <span>Services</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We offer a comprehensive range of software development services to help your business thrive in the digital age.
        </SectionSubtitle>
      </SectionHeader>
      
      <ServicesGrid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id}
            variants={fadeInUp}
            custom={index}
          >
            <ServiceIcon
              whileHover={{ 
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Icon name={service.icon} />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <CardFooter>
              <Button to={`/services/${service.path}`} variant="text" size="small">
                Learn More →
              </Button>
            </CardFooter>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesSection; 