import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { COLORS, PRIMARY_COLOR, TRANSITION_SPEED } from '../../styles/theme';

const FooterWrapper = styled.footer`
  background: #0a0a0a;
  color: ${COLORS.text};
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border-top: 1px solid ${COLORS.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

const FooterLogo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  
  span {
    color: ${PRIMARY_COLOR};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color ${TRANSITION_SPEED};
  
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.8rem;
  margin: 1rem 0;
`;

const SocialIcon = styled.a`
  color: #f8f9fa;
  font-size: 1.5rem;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    color: ${PRIMARY_COLOR};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>
          Álex<span>Dias</span>
        </FooterLogo>
        <FooterLinks>
          <FooterLink to="home" smooth={true} duration={500}>Home</FooterLink>
          <FooterLink to="about" smooth={true} duration={500} offset={-70}>Habilidades</FooterLink>
          <FooterLink to="courses" smooth={true} duration={500} offset={-70}>Cursos</FooterLink>
          <FooterLink to="projects" smooth={true} duration={500} offset={-70}>Projetos</FooterLink>
          <FooterLink to="contact" smooth={true} duration={500} offset={-70}>Contato</FooterLink>
        </FooterLinks>
        <FooterSocial>
          <SocialIcon href="mailto:alekxdias@gmail.com">
            <i className="fas fa-envelope"></i>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/alekxdias" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="https://github.com/alekxDias" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialIcon>
        </FooterSocial>
        <Copyright>&copy; {new Date().getFullYear()} Álex Dias. Todos os direitos reservados.</Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; 