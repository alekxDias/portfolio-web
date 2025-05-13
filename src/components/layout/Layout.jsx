import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import Navbar from './Navbar';
import { COLORS } from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';

const AppContainer = styled.div`
  background: ${COLORS.background};
  color: ${COLORS.text};
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  position: relative;
`;

const MainContent = styled.main`
  position: relative;
`;

const Footer = styled.footer`
  background: ${COLORS.backgroundLight};
  color: ${COLORS.textSecondary};
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${COLORS.textSecondary};
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Global styles={globalStyles} />
      <AppContainer>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
        <Footer>
          <FooterText>
            © {currentYear} Álex Dias. Todos os direitos reservados.
          </FooterText>
          <FooterLinks>
            <FooterLink href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </FooterLink>
            <FooterLink href="mailto:seu-email@example.com">
              Email
            </FooterLink>
          </FooterLinks>
        </Footer>
      </AppContainer>
    </>
  );
};

export default Layout; 