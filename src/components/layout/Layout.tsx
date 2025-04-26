import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // To account for the fixed navbar
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 