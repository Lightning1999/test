import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TeamSection from '../components/sections/TeamSection';
import ClientsSection from '../components/sections/ClientsSection';
import Icon from '../components/common/Icon';

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

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-dark);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 152, 219, 0.1);
  }
  
  @media (max-width: 991px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

const AboutTextContainer = styled(motion.div)``;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const AboutText = styled.div`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 41, 59, 0.9);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: var(--text-primary);
  font-weight: 500;
`;

const ValueSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-light);
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ValuesHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: rgba(10, 25, 41, 0.5);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(10, 25, 41, 0.8);
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--background-dark);
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ValueDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
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

const AboutPage: React.FC = () => {
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
              About <span>APIDE</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A privately owned global consulting and software development company with extensive experience in the mobile/telecommunication industry.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <AboutSection>
          <AboutContainer>
            <AboutContent>
              <AboutImageContainer
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/images/clients/apide-512x512.png" alt="About APIDE" />
              </AboutImageContainer>
              
              <AboutTextContainer
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionTitle>Our <span>Story</span></SectionTitle>
                <AboutText>
                  <p>
                    Apide is a privately owned global consulting and software development company with extensive experience in the mobile/telecommunication industry. This has lead us to a top choice in delivering app, websites and complex coding products.
                  </p>
                  <p>
                    Apide was founded in 2005 by Morten Bruun and Jacob Eiler, and is today lead by a strong group of people with extensive knowledge and experience. Today Apide has highly qualified employees both locally in Denmark and in our modern techcenter in Vietnam. Further to that we have access to a vast network of freelance specialists.
                  </p>
                  <p>
                    Apide has contributed to projects for both large and small companies in the mobile industry, e.g. TDC Mobile, TeliaSonera Denmark, and Nokia. As of today our customer portfolio, consist of a wide and diverse group of companies, ranging from Top tier companies in Europe to the entrepreneur.
                  </p>
                </AboutText>
                
                <StatsContainer>
                  <StatItem
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <StatNumber>18+</StatNumber>
                    <StatLabel>Years of Experience</StatLabel>
                  </StatItem>
                  <StatItem
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StatNumber>100+</StatNumber>
                    <StatLabel>Completed Projects</StatLabel>
                  </StatItem>
                  <StatItem
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <StatNumber>50+</StatNumber>
                    <StatLabel>Happy Clients</StatLabel>
                  </StatItem>
                </StatsContainer>
              </AboutTextContainer>
            </AboutContent>
          </AboutContainer>
        </AboutSection>
        
        <ValueSection>
          <ValuesContainer>
            <ValuesHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <SectionTitle>
                  Our <span>Values</span>
                </SectionTitle>
              </motion.div>
              <PageDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Teaming up with Apide ensures consistent quality and excellent results.
              </PageDescription>
            </ValuesHeader>
            
            <ValuesGrid>
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="person" />
                </ValueIcon>
                <ValueTitle>Focused Experience</ValueTitle>
                <ValueDescription>
                  Focused and experienced programmers and project-managers who understand your business needs
                  and deliver solutions that drive real results.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="payments" />
                </ValueIcon>
                <ValueTitle>Reasonable Pricing</ValueTitle>
                <ValueDescription>
                  We offer competitive and transparent pricing that provides excellent value for the quality
                  of work delivered, helping you maximize your technology investment.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="handshake" />
                </ValueIcon>
                <ValueTitle>Fair Business Model</ValueTitle>
                <ValueDescription>
                  Our business model is built on fairness and transparency, ensuring that our 
                  partnerships are mutually beneficial and sustainable for the long term.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="verified" />
                </ValueIcon>
                <ValueTitle>High Quality</ValueTitle>
                <ValueDescription>
                  We never compromise on quality. Our rigorous development process and attention to detail 
                  ensure that our solutions meet the highest standards of performance and reliability.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="insert_chart" />
                </ValueIcon>
                <ValueTitle>Clear Status</ValueTitle>
                <ValueDescription>
                  We maintain clear and visible status updates throughout the project lifecycle,
                  ensuring you always know exactly where your project stands.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <ValueIcon>
                  <Icon name="security" />
                </ValueIcon>
                <ValueTitle>Minimal Risk</ValueTitle>
                <ValueDescription>
                  Our careful planning and experienced team minimize the risk of schedule
                  or resource overrun, ensuring your projects are delivered on time and on budget.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </ValuesContainer>
        </ValueSection>
        
        <TeamSection />
        <ClientsSection />
      </PageContainer>
    </Layout>
  );
};

export default AboutPage; 