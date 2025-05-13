import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { COLORS, TRANSITION_SPEED } from '../../styles/theme';

const NavbarWrapper = styled.div`
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  background: transparent;
  transition: background ${TRANSITION_SPEED};
  
  @media (max-width: 768px) {
    background: rgba(30, 30, 30, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  padding: 2rem 3rem 1rem 0;
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${COLORS.text};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  position: relative;
  transition: color ${TRANSITION_SPEED};

  &.active, &:hover {
    color: ${COLORS.primary};
    font-weight: 600;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: ${COLORS.primary};
    border-radius: 2px;
    transition: width ${TRANSITION_SPEED};
    position: absolute;
    left: 0;
    bottom: -6px;
  }

  &.active::after, &:hover::after {
    width: 70%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 0.85rem;
    
    &::after {
      bottom: -3px;
      height: 2px;
    }
  }
`;

const NavNumber = styled.span`
  font-weight: 700;
  margin-right: 0.3em;
  font-size: 1.05rem;
  color: ${COLORS.primaryLight};
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-right: 0.2em;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Nav>
        <NavLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <NavNumber>01</NavNumber>Home
        </NavLink>
        <NavLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          <NavNumber>02</NavNumber>Habilidades
        </NavLink>
        <NavLink
          to="courses"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          <NavNumber>03</NavNumber>Cursos
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          <NavNumber>04</NavNumber>Projetos
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={-70}
        >
          <NavNumber>05</NavNumber>Contato
        </NavLink>
      </Nav>
    </NavbarWrapper>
  );
};

export default Navbar; 