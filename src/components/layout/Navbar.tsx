import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavbarContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background: rgba(10, 25, 41, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 40px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--background-light);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 0;
`;

const NavbarComponent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
        height: isScrolled ? '70px' : '80px'
      }}
    >
      <Logo>
        <img src="/images/clients/apide-512x512.png" alt="Apide Logo" />
        <span>APIDE</span>
      </Logo>
      
      <NavLinks>
        <NavLink 
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </NavLink>
        <NavLink 
          to="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </NavLink>
        <NavLink 
          to="/portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </NavLink>
        <NavLink 
          to="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>

      <MobileMenuButton onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default NavbarComponent; 