import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import minhaFoto from '../../assets/img/minhafoto.jpg';
import { COLORS, PRIMARY_COLOR } from '../../styles/theme';

const HeroSection = styled.section`
  min-height: 80vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  padding-top: 6rem;
  @media (max-width: 900px) {
    min-height: 90vh;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 50;
  
  @media (max-width: 768px) {
    bottom: 40px;
  }
  
  @media (max-width: 480px) {
    bottom: 30px;
  }
`;

const ScrollArrow = styled.div`
  width: 30px;
  height: 30px;
  border-right: 3px solid ${PRIMARY_COLOR};
  border-bottom: 3px solid ${PRIMARY_COLOR};
  transform: rotate(45deg);
  margin-bottom: 15px;
  animation: bounce 2s infinite;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-15px) rotate(45deg);
    }
    60% {
      transform: translateY(-7px) rotate(45deg);
    }
  }
  
  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    border-right-width: 2px;
    border-bottom-width: 2px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  background: none;
  border-radius: 0;
  box-shadow: none;
  @media (max-width: 1200px) {
    gap: 2.5rem;
    max-width: 98vw;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${PRIMARY_COLOR};
  box-shadow: none;
  background: #f8f9fa;
  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 700px;
`;

const Greeting = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${PRIMARY_COLOR};
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.text};
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: transparent;
    border-radius: 2px;
  }
  
  @media (max-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${COLORS.text};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${COLORS.textSecondary};
  margin-bottom: 2rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <ProfileImage src={minhaFoto} alt="Álex Dias" />
        <HeroText>
          <Greeting>Olá, eu sou</Greeting>
          <Title>Álex Dias</Title>
          <Subtitle>Estudante de Engenharia de Computação</Subtitle>
          <AboutText>
            Atualmente estou cursando o 8º período de Engenharia de Computação na Universidade Estadual do Maranhão, 
            sou apaixonado por desenvolvimento de software e inteligência artificial. Buscando sempre aprender novas tecnologias e contribuir com projetos desafiadores.
          </AboutText>
        </HeroText>
      </HeroContent>
      <ScrollIndicator>
        <Link to="about" smooth={true} duration={800} offset={-70}>
          <ScrollArrow />
        </Link>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 