import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroContainer = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  max-width: 600px;
  
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(to right, var(--text-primary) 0%, var(--secondary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 991px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
    opacity: 0.1;
    filter: blur(60px);
    z-index: -1;
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

const Shape = styled(motion.div)<{ $size: string; $color: string; $top: string; $left: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  opacity: 0.05;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
`;

const CodeBlock = styled(motion.div)`
  position: absolute;
  background-color: rgba(24, 44, 74, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  padding: 1rem;
  width: 220px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: var(--text-primary);
  z-index: 2;
  
  pre {
    margin: 0;
    color: var(--text-secondary);
  }
  
  span.highlight {
    color: var(--accent-color);
  }
  
  span.string {
    color: #98C379;
  }
  
  span.keyword {
    color: #C678DD;
  }
  
  span.function {
    color: #61AFEF;
  }
`;

const CodeBlock1 = styled(CodeBlock)`
  top: 15%;
  right: -30px;
  transform: rotate(5deg);
  z-index: 3;
  
  @media (max-width: 991px) {
    display: none;
  }
`;

const CodeBlock2 = styled(CodeBlock)`
  bottom: 15%;
  left: 0;
  transform: rotate(-8deg);
  
  @media (max-width: 991px) {
    display: none;
  }
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
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

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <FloatingShapes>
        <Shape 
          $size="300px" 
          $color="var(--secondary-color)" 
          $top="-5%" 
          $left="5%"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <Shape 
          $size="200px" 
          $color="var(--accent-color)" 
          $top="60%" 
          $left="80%"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <Shape 
          $size="150px" 
          $color="var(--primary-color)" 
          $top="80%" 
          $left="20%"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 18,
            ease: "easeInOut"
          }}
        />
      </FloatingShapes>
      
      <HeroContent>
        <HeroText
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <HeroTitle variants={fadeIn}>
            Custom Software Solutions<br />for Modern Businesses
          </HeroTitle>
          <HeroSubtitle variants={fadeIn}>
            We build innovative, scalable, and secure software solutions tailored to your business needs, 
            helping you stay ahead in the digital transformation journey.
          </HeroSubtitle>
          <ButtonGroup variants={fadeIn}>
            <Button to="/contact" size="large">
              Get Started
            </Button>
            <Button to="/portfolio" variant="outline" size="large">
              View Our Work
            </Button>
          </ButtonGroup>
        </HeroText>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/images/clients/apide-512x512.png" alt="Software Development" />
          
          <CodeBlock1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <pre>
              <span className="keyword">function</span> <span className="function">createSolution</span>() {'{'}
              {'  '}<span className="keyword">const</span> client = <span className="string">'YourBusiness'</span>;
              {'  '}<span className="keyword">return</span> <span className="highlight">innovation</span>;
              {'}'}
            </pre>
          </CodeBlock1>
          
          <CodeBlock2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <pre>
              <span className="comment">// Delivering excellence</span>
              <span className="keyword">import</span> {'{'}quality, security{'}'} <span className="keyword">from</span> <span className="string">'apide'</span>;
            </pre>
          </CodeBlock2>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 