import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: var(--background-light);
  padding: 4rem 0 2rem;
  color: var(--text-primary);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--accent-color);
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-5px);
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 40px;
    height: auto;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Logo>
            <img src="/images/clients/apide-512x512.png" alt="Apide Logo" />
            <span>APIDE</span>
          </Logo>
          <FooterText>
            We build custom software solutions that help businesses transform their operations
            and achieve their goals with cutting-edge technology.
          </FooterText>
          <SocialIconsContainer>
            <SocialIcon 
              href="https://linkedin.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>in</span>
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>𝕏</span>
            </SocialIcon>
            <SocialIcon 
              href="https://facebook.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>f</span>
            </SocialIcon>
          </SocialIconsContainer>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Our Services</FooterTitle>
          <FooterLink to="/services/custom-software">Custom Software Development</FooterLink>
          <FooterLink to="/services/web-development">Web Development</FooterLink>
          <FooterLink to="/services/mobile-apps">Mobile App Development</FooterLink>
          <FooterLink to="/services/cloud-solutions">Cloud Solutions</FooterLink>
          <FooterLink to="/services/consulting">IT Consulting</FooterLink>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/portfolio">Our Work</FooterLink>
          <FooterLink to="/team">Our Team</FooterLink>
          <FooterLink to="/career">Careers</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Contact</FooterTitle>
          <FooterText>123 Tech Street,</FooterText>
          <FooterText>Copenhagen, Denmark</FooterText>
          <FooterText>info@apide.com</FooterText>
          <FooterText>+45 123 456 789</FooterText>
        </FooterColumn>
      </FooterContent>

      <BottomBar>
        <Copyright>&copy; {new Date().getFullYear()} APIDE. All rights reserved.</Copyright>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 