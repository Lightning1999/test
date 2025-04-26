import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ClientsContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--background-light);
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
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
`;

const LogosWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogosContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const LogoItem = styled(motion.div)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(10, 25, 41, 0.5);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: rgba(10, 25, 41, 0.8);
  }
  
  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
    filter: grayscale(100%) brightness(1.5);
    transition: filter 0.3s ease;
  }
  
  &:hover img {
    filter: grayscale(0%) brightness(1);
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.05
    }
  }
};

// Client logos
const clients = [
  { id: 1, name: 'Telia', logo: '/images/clients/telia.png' },
  { id: 2, name: 'Falck', logo: '/images/clients/falck.png' },
  { id: 3, name: 'TDC', logo: '/images/clients/tdc.png' },
  { id: 4, name: 'Danske Spil', logo: '/images/clients/danskespil.png' },
  { id: 5, name: 'Nokia', logo: '/images/clients/nokia.png' },
  { id: 6, name: 'Nassau', logo: '/images/clients/nassau.png' },
  { id: 7, name: 'DTU', logo: '/images/clients/dtu.png' },
  { id: 8, name: 'Alphaomega', logo: '/images/clients/alphaomega.png' },
  { id: 9, name: 'Amway', logo: '/images/clients/amway.png' },
  { id: 10, name: 'Bispebjerg', logo: '/images/clients/bispebjerg.png' },
  { id: 11, name: 'Cryptera', logo: '/images/clients/cryptera.png' },
  { id: 12, name: 'Tivoli', logo: '/images/clients/tivoli.png' },
];

const ClientsSection: React.FC = () => {
  return (
    <ClientsContainer id="clients">
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our <span>Trusted Clients</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We've had the pleasure of working with amazing organizations across various industries
        </SectionSubtitle>
      </SectionHeader>
      
      <LogosWrapper>
        <LogosContainer
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <LogoItem 
              key={client.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
            >
              <img src={client.logo} alt={client.name} />
            </LogoItem>
          ))}
        </LogosContainer>
      </LogosWrapper>
    </ClientsContainer>
  );
};

export default ClientsSection; 