import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-scroll'
import minhaFoto from './assets/img/minhafoto.jpg'
import { Global, css } from '@emotion/react'
import emailjs from '@emailjs/browser'

// Constantes de design para padronização
const PRIMARY_COLOR = '#2a55b1';
const SECTION_PADDING = '5rem 2rem';
const SECTION_GAP = '4.5rem';
const BORDER_RADIUS = '16px';
const TRANSITION_SPEED = '0.3s';
const CARD_SHADOW = '0 2px 16px 0 rgba(34,34,34,0.04)';
const CARD_SHADOW_HOVER = '0 12px 28px 0 rgba(37, 99, 235, 0.15)';
const CONTENT_MAX_WIDTH = '1200px';

// Paleta para tema escuro
const COLORS = {
  primary: '#2a55b1',
  primaryLight: '#3a65c1',
  primaryDark: '#1a4091',
  background: '#121212',
  backgroundLight: '#1e1e1e',
  backgroundLighter: '#2d2d2d',
  text: '#e6e6e6',
  textSecondary: '#b0b0b0',
  border: '#333333',
  cardBackground: '#1e1e1e',
  sectionDivider: '#2d2d2d'
};

const GlobalStyles = () => (
  <Global
    styles={css`
      html, body {
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        font-family: 'Poppins', sans-serif;
        color: ${COLORS.text};
        background-color: ${COLORS.background};
      }
      
      body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
      
      * {
        -ms-overflow-style: none;
        scrollbar-width: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      *::-webkit-scrollbar {
        display: none;
      }
    `}
  />
);

const AppContainer = styled.div`
  background: ${COLORS.background};
  color: ${COLORS.text};
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`

const Section = styled.section`
  min-height: 80vh;
  padding: ${SECTION_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.sectionDivider};
  margin: 0 auto;
  max-width: ${CONTENT_MAX_WIDTH};
`;

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
`

const Navbar = styled.nav`
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
`

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
`

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
`

const HeroSection = styled(Section)`
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
`

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
`

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
`

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  max-width: ${CONTENT_MAX_WIDTH};
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
`

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
`

const HeroText = styled.div`
  flex: 1;
  max-width: 700px;
`

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
`

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${COLORS.text};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const AboutText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${COLORS.textSecondary};
  margin-bottom: 2rem;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const AboutSection = styled(Section)`
  background: ${COLORS.backgroundLight};
  padding: ${SECTION_PADDING};
  min-height: 100vh;
`

const ProjectsSection = styled(Section)`
  background: ${COLORS.backgroundLight};
  padding: ${SECTION_PADDING};
`

const ContactSection = styled(Section)`
  background: ${COLORS.background};
  padding: ${SECTION_PADDING};
  position: relative;
`

const CoursesSection = styled(Section)`
  background: ${COLORS.background};
  padding: ${SECTION_PADDING};
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  max-width: 800px;
  margin: 2.5rem 0;
`

const SkillTag = styled.span`
  background: #f3f4f6;
  color: #222;
  padding: 0.7rem 1.3rem;
  border-radius: 30px;
  font-size: 0.95rem;
  border: 1px solid #e5e7eb;
  font-weight: 500;
  transition: all ${TRANSITION_SPEED};
  &:hover {
    background: ${PRIMARY_COLOR};
    color: #fff;
    border-color: ${PRIMARY_COLOR};
  }
`

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin: 0 auto;
  padding: 0;
`

const ProjectsGrid = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 3rem auto 0;
  overflow: hidden;
  position: relative;
  padding: 0 5px;
`

const ProjectCard = styled.div`
  background: ${COLORS.cardBackground};
  border-radius: ${BORDER_RADIUS};
  padding: 2rem;
  margin: 0 10px;
  width: 340px;
  height: 430px;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform ${TRANSITION_SPEED}, box-shadow ${TRANSITION_SPEED};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
  flex-shrink: 0;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: ${COLORS.primary};
    z-index: 2;
  }
`

const ProjectTitle = styled.h3`
  color: ${COLORS.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: ${COLORS.textSecondary};
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${COLORS.backgroundLighter};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.border};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.primaryDark};
  }
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${PRIMARY_COLOR};
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  transition: color ${TRANSITION_SPEED};
  
  &:hover {
    color: #1e40af;
    text-decoration: underline;
  }
  
  i {
    font-size: 1.2rem;
  }
`

const ProjectTechTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  color: #444;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    border-color: ${PRIMARY_COLOR};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(37, 99, 235, 0.1);
  }
  
  i {
    font-size: 1rem;
    color: ${props => props.color || PRIMARY_COLOR};
  }
`

const ProjectTechContainer = styled.div`
  margin: 1.2rem 0;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  border-top: 1px solid #f0f0f0;
`

const ProjectCardsContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: fit-content;
  padding: 10px 0 20px;
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    background: ${PRIMARY_COLOR};
    border-color: ${PRIMARY_COLOR};
    color: white;
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f8f9fa;
    color: #aaa;
  }
  
  &.prev {
    left: -25px;
  }
  
  &.next {
    right: -25px;
  }
  
  i {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 0.7rem;
`

const CarouselDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? PRIMARY_COLOR : '#e5e7eb'};
  border: none;
  cursor: pointer;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    background: ${props => props.active ? PRIMARY_COLOR : '#d1d5db'};
  }
`

const CourseCard = styled.div`
  background: ${COLORS.cardBackground};
  border-radius: ${BORDER_RADIUS};
  padding: 1.8rem;
  margin: 1rem;
  width: 100%;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform ${TRANSITION_SPEED}, box-shadow ${TRANSITION_SPEED};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: ${COLORS.primary};
  }
`

const CourseTitle = styled.h3`
  color: ${COLORS.text};
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`

const CourseProvider = styled.h4`
  color: ${PRIMARY_COLOR};
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`

const CourseDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: ${COLORS.textSecondary};
`

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #666;
  font-size: 0.9rem;
`

const CourseType = styled.span`
  background: ${PRIMARY_COLOR}22;
  color: ${PRIMARY_COLOR};
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  padding: 0 1rem;
  margin-top: 3rem;
`

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${COLORS.cardBackground};
  border: 1px solid ${COLORS.border};
  border-radius: ${BORDER_RADIUS};
  padding: 1.1rem 1.3rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${COLORS.text};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: border ${TRANSITION_SPEED}, box-shadow ${TRANSITION_SPEED}, transform ${TRANSITION_SPEED};
  
  &:hover {
    border-color: ${COLORS.primary};
    box-shadow: 0 6px 24px 0 rgba(42, 85, 177, 0.2);
    transform: translateY(-3px) scale(1.03);
    background: ${COLORS.backgroundLighter};
  }
  
  i {
    font-size: 1.5rem;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin: 3rem auto 0 auto;
`;

// Mapeamento de tecnologias para ícones do Font Awesome com cores
const techIcons = {
  'Java': { icon: 'fab fa-java', color: '#007396' },
  'Spring Boot': { icon: 'fas fa-leaf', color: '#6DB33F' },
  'Bootstrap 5': { icon: 'fab fa-bootstrap', color: '#7952B3' },
  'MySQL': { icon: 'fas fa-database', color: '#4479A1' },
  'Spring Security': { icon: 'fas fa-shield-alt', color: '#6DB33F' },
  'JPA': { icon: 'fas fa-database', color: '#59666C' },
  'Python': { icon: 'fab fa-python', color: '#3776AB' },
  'NLP': { icon: 'fas fa-language', color: '#3F51B5' },
  'Machine Learning': { icon: 'fas fa-brain', color: '#FF5722' },
  'HTML5': { icon: 'fab fa-html5', color: '#E34F26' },
  'CSS3': { icon: 'fab fa-css3-alt', color: '#1572B6' },
  'CSS': { icon: 'fab fa-css3-alt', color: '#1572B6' },
  'UI/UX': { icon: 'fas fa-paint-brush', color: '#FF9800' },
  'React': { icon: 'fab fa-react', color: '#61DAFB' },
  'JavaScript': { icon: 'fab fa-js', color: '#F7DF1E' },
  'Engenharia Mecânica': { icon: 'fas fa-cogs', color: '#607D8B' },
  'Design de Produto': { icon: 'fas fa-drafting-compass', color: '#F44336' },
  'API Integration': { icon: 'fas fa-plug', color: '#4CAF50' },
  'Manutenção de Hardware': { icon: 'fas fa-screwdriver-wrench', color: '#4CAF50' },
  'Suporte Técnico': { icon: 'fas fa-headset', color: '#03A9F4' },
  'Word': { icon: 'fas fa-file-word', color: '#2B579A' },
  'Excel': { icon: 'fas fa-file-excel', color: '#217346' },
};

// Mapeamento das habilidades para os ícones do Font Awesome com cores
const skillIcons = {
  'Git': { icon: 'fab fa-git-alt', color: '#F05032' },
  'GitHub': { icon: 'fab fa-github', color: '#181717' },
  'HTML5': { icon: 'fab fa-html5', color: '#E34F26' },
  'CSS3': { icon: 'fab fa-css3-alt', color: '#1572B6' },
  'React': { icon: 'fab fa-react', color: '#61DAFB' },
  'Java': { icon: 'fab fa-java', color: '#007396' },
  'Python': { icon: 'fab fa-python', color: '#3776AB' },
  'SQL': { icon: 'fas fa-database', color: '#336791' },
  'Spring Boot': { icon: 'fas fa-leaf', color: '#6DB33F' },
  'JavaScript': { icon: 'fab fa-js', color: '#F7DF1E' },
  'Metodologias Ágeis': { icon: 'fas fa-list-check', color: '#2563eb' },
  'Lógica de Programação': { icon: 'fas fa-code', color: '#FF3E00' },
  'Resolução de Problemas': { icon: 'fas fa-puzzle-piece', color: '#FF9800' },
  'Trabalho em Equipe': { icon: 'fas fa-users', color: '#2563eb' },
  'Pacote Office': { icon: 'fas fa-file-word', color: '#2B579A' },
  'Manutenção de Hardware': { icon: 'fas fa-screwdriver-wrench', color: '#4CAF50' },
};

const skills = [
  'Git', 'GitHub', 'HTML5', 'CSS3', 'React', 'Java', 'Python', 'SQL', 'Spring Boot', 'JavaScript',
  'Metodologias Ágeis', 'Lógica de Programação', 'Resolução de Problemas', 'Trabalho em Equipe', 'Pacote Office', 'Manutenção de Hardware'
];

const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin-top: 2rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`

const ContactInfo = styled.div`
  background: ${COLORS.cardBackground};
  border-radius: ${BORDER_RADIUS};
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  
  @media (max-width: 900px) {
    max-width: 500px;
  }
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  color: ${COLORS.text};
  padding: 1rem;
  border-radius: 12px;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    background: ${PRIMARY_COLOR}11;
    transform: translateX(5px);
    color: ${PRIMARY_COLOR};
  }
  
  i {
    font-size: 1.8rem;
    color: ${PRIMARY_COLOR};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${PRIMARY_COLOR}11;
    border-radius: 50%;
  }
`

const ContactLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.3rem;
`

const ContactValue = styled.span`
  font-size: 0.95rem;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 500px;
  background: ${COLORS.cardBackground};
  padding: 2.5rem;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform ${TRANSITION_SPEED}, box-shadow ${TRANSITION_SPEED};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${CARD_SHADOW_HOVER};
  }
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  background: ${COLORS.backgroundLighter};
  color: ${COLORS.text};
  font-size: 1rem;
  transition: border ${TRANSITION_SPEED};
  
  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  background: ${COLORS.backgroundLighter};
  color: ${COLORS.text};
  font-size: 1rem;
  min-height: 150px;
  transition: border ${TRANSITION_SPEED};
  
  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${PRIMARY_COLOR};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background ${TRANSITION_SPEED}, transform ${TRANSITION_SPEED};
  font-weight: 500;
  
  &:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
`

const Footer = styled.footer`
  background: #0a0a0a;
  color: ${COLORS.text};
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  border-top: 1px solid ${COLORS.border};
`

const FooterContent = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`

const FooterLogo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  
  span {
    color: ${PRIMARY_COLOR};
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`

const FooterLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color ${TRANSITION_SPEED};
  
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`

const FooterSocial = styled.div`
  display: flex;
  gap: 1.8rem;
  margin: 1rem 0;
`

const SocialIcon = styled.a`
  color: #f8f9fa;
  font-size: 1.5rem;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    color: ${PRIMARY_COLOR};
    transform: translateY(-3px);
  }
`

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 0.8rem;
`

// Adicionando um componente para exibir a duração do projeto/experiência
const ProjectDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  margin-top: auto;
  font-size: 0.9rem;
  
  i {
    color: ${PRIMARY_COLOR};
    font-size: 1rem;
  }
`;

// Add this styled component for form status messages
const FormStatusMessage = styled.div`
  padding: 0.8rem;
  border-radius: 8px;
  background: ${props => props.success ? 'rgba(52, 211, 153, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  color: ${props => props.success ? '#10b981' : '#ef4444'};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ''
  })
  
  const form = useRef()
  
  const [currentProject, setCurrentProject] = useState(0);
  const projectsPerView = window.innerWidth < 768 ? 1 : 3;
  
  // Calcular o deslocamento exato para cada card
  const getTranslateValue = (index) => {
    // Largura total de cada card incluindo margem (340px + 20px de margem)
    const cardTotalWidth = 360;
    return `translateX(-${index * cardTotalWidth}px)`;
  };
  
  const projects = [
    {
      title: "Estagiário na Spervisão Tecnica do SENAI",
      description: "Estagiário no setor de suporte técnico, realizando manutenção de hardware e software, além de atendimento ao cliente e criação de planilhas e realtorios aumentando a produtividade e a eficiência do setor.",
      tech: ["Manutenção de Hardware", "Suporte Técnico"],
      features: "Manutenção de computadores, instalação de softwares, atendimento ao usuário",
      duration: "06/2024 - Atual"
    },
    {
      title: "Pesquisador em Processamento de Linguagem Natural",
      description: "Avaliação de modelos de linguagem para a identificação e descoberta de palavras fora do vocabulário, focando em aprimorar a precisão e eficácia dos sistemas de processamento de linguagem natural.",
      tech: ["Python", "NLP", "Machine Learning"],
      features: "Prêmio Destaque na área de Engenharia de Computação na Semana de Iniciação Científica (SEMIC)",
      duration: "09/2023 a 09/2024"
    },
    {
      title: "Voluntário em Projeto para Beneficiamento do Coco Babaçu",
      description: "Iniciativa voltada para a construção de um alicate para maior segurança de quebradeiras de coco, contribuindo para melhor qualidade e eficiência no processo.",
      tech: ["Design de Produto"],
      features: "Patente: Ferramenta de auxílio para quebra e descascamento de Coco Babaçu (BR 10 2024 014022 2)",
      duration: "09/2023 a 09/2024"
    },
    {
      title: "Sistema de Gerenciamento de Vagas para Condomínios",
      description: "Sistema back-end desenvolvido em equipe para gerenciar vagas e otimizar o controle de estacionamento em condomínios, substituindo processos manuais e reduzindo conflitos entre moradores.",
      tech: ["Java", "Spring Boot", "Spring Security", "JPA"],
      link: "https://github.com/alekxDias/poo",
      features: "Cadastro de vagas, aluguel e controle de entrada/saída de veículos"
    },
    {
      title: "GitFind - Buscador de Perfis GitHub",
      description: "Aplicação web desenvolvida em React que permite buscar informações sobre usuários do GitHub e visualizar seus repositórios. Utiliza a API do GitHub para acessar e exibir dados de perfis públicos.",
      tech: ["React", "JavaScript", "CSS", "API Integration"],
      link: "https://github.com/alekxDias/GitFind",
      features: "Busca de usuários por username, exibição de perfil e repositórios, interface responsiva"
    },
    {
      title: "Página de Login",
      description: "Uma interface de login simples e elegante, desenvolvida com princípios modernos de HTML5 e CSS3, demonstrando boas práticas de design de interfaces e experiência do usuário.",
      tech: ["HTML5", "CSS3", "UI/UX"],
      link: "https://github.com/alekxDias/pagina.Login",
      features: "Layout responsivo, animações suaves, validação de formulário"
    },
    {
      title: "Calculadora React",
      description: "Calculadora interativa desenvolvida com React durante curso da DIO, aplicando conceitos fundamentais de componentes, estado e eventos em aplicações React.",
      tech: ["React", "JavaScript", "CSS3"],
      link: "https://github.com/alekxDias/trilha-react-desafio01-calculadora",
      features: "Operações matemáticas básicas, interface responsiva, tratamento de erros"
    },
    {
      title: "Plataforma de Gerenciamento de Eventos Acadêmicos",
      description: "Desenvolvida durante a disciplina de Análise e Desenvolvimento de Sistemas, esta plataforma oferece praticidade e rapidez no cadastro de eventos, envio de avisos por e-mail e geração de certificados de participação.",
      tech: ["Java", "Spring Boot", "Bootstrap 5", "MySQL"],
      link: "https://github.com/lucasA51/PlataformaDeEventos",
      features: "Cadastro de eventos, envio de avisos via e-mail, geração de certificados de participação"
    }
  ];
  
  const maxProjectIndex = Math.max(0, projects.length - projectsPerView);
  
  const nextProject = () => {
    setCurrentProject(prev => Math.min(prev + 1, maxProjectIndex));
  };
  
  const prevProject = () => {
    setCurrentProject(prev => Math.max(prev - 1, 0));
  };
  
  const goToProject = (index) => {
    setCurrentProject(Math.min(Math.max(0, index), maxProjectIndex));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_nf5s6lv'
    const templateId = 'template_ip16ldq'
    const publicKey = 'yNLYjMJqLTayq5lJY'
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setLoading(false)
        setFormStatus({
          success: true,
          error: false,
          message: 'Mensagem enviada com sucesso!'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            success: false,
            error: false,
            message: ''
          })
        }, 5000)
      })
      .catch((error) => {
        setLoading(false)
        setFormStatus({
          success: false,
          error: true,
          message: 'Erro ao enviar mensagem. Tente novamente.'
        })
        console.error('Error sending email:', error)
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <NavbarWrapper>
        <Navbar>
          <NavLink to="home" smooth={true} duration={500} spy={true} activeClass="active"><NavNumber>01</NavNumber>Home</NavLink>
          <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}><NavNumber>02</NavNumber>Habilidades</NavLink>
          <NavLink to="courses" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}><NavNumber>03</NavNumber>Cursos</NavLink>
          <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}><NavNumber>04</NavNumber>Projetos</NavLink>
          <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}><NavNumber>05</NavNumber>Contato</NavLink>
        </Navbar>
      </NavbarWrapper>

      <HeroSection id="home">
        <HeroContent>
          <ProfileImage src={minhaFoto} alt="Álex Dias" />
          <HeroText>
            <Title>Álex Dias</Title>
            <Subtitle>Estudante de Engenharia de Computação</Subtitle>
            <AboutText>
              Olá! atualmente estou cursando o 8º período de Engenharia de Computação na Universidade Estadual do Maranhão, 
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

      <div style={{ height: "70px" }} />
      
      <AboutSection id="about">
        <Title>Habilidades</Title>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillCard key={skill}>
              <i className={skillIcons[skill].icon} style={{ color: skillIcons[skill].color }}></i>
              {skill}
            </SkillCard>
          ))}
        </SkillsGrid>
      </AboutSection>

      <CoursesSection id="courses">
        <Title>Cursos Realizados</Title>
        <CoursesGrid>
          <CourseCard>
            <CourseTitle>Trilha Digital | Coders 24 | Back End</CourseTitle>
            <CourseProvider>Ada Tech</CourseProvider>
            <CourseDescription>
              Curso completo de desenvolvimento back-end com foco em Java, Spring Boot e APIs RESTful.
              Abrange programação orientada a objetos, banco de dados e boas práticas de desenvolvimento.
            </CourseDescription>
            <CourseMeta>
              <span>19 horas</span>
              <CourseType>Online</CourseType>
            </CourseMeta>
          </CourseCard>
          
          <CourseCard>
            <CourseTitle>Excel na Prática</CourseTitle>
            <CourseProvider>Fundação Bradesco</CourseProvider>
            <CourseDescription>
              Curso prático focado na elaboração de planilhas, inserção de funções e criação de gráficos no Excel.
              Incluiu o desenvolvimento de projetos como orçamento doméstico personalizado com fórmulas avançadas.
            </CourseDescription>
            <CourseMeta>
              <span>16 horas</span>
              <CourseType>Online</CourseType>
            </CourseMeta>
          </CourseCard>
          
          <CourseCard>
            <CourseTitle>Natural Language Processing for Text Summarization</CourseTitle>
            <CourseProvider>AI Expert Academy</CourseProvider>
            <CourseDescription>
              Implementação de algoritmos para sumarização automática de textos utilizando Python, NLTK e spaCy.
              Desenvolvimento de soluções para extração de notícias e geração de resumos com técnicas avançadas de NLP.
            </CourseDescription>
            <CourseMeta>
              <span>5 horas</span>
              <CourseType>Online</CourseType>
            </CourseMeta>
          </CourseCard>
          
          <CourseCard>
            <CourseTitle>CCNA: Switching, Routing, and Wireless Essentials</CourseTitle>
            <CourseProvider>Cisco Networking Academy</CourseProvider>
            <CourseDescription>
              Estudo aprofundado de tecnologias de switching, operações de roteadores e redes sem fio para pequenas e médias empresas.
              Configuração de VLANs, roteamento entre VLANs e implementação de protocolos de redundância.
            </CourseDescription>
            <CourseMeta>
              <span>60 horas</span>
              <CourseType>Online</CourseType>
            </CourseMeta>
          </CourseCard>
          
          <CourseCard>
            <CourseTitle>Fundamentos de TI - Hardware e Software</CourseTitle>
            <CourseProvider>Fundação Bradesco</CourseProvider>
            <CourseDescription>
              Apresentação dos conceitos básicos de informática, componentes de computadores e sistemas lógicos.
              Estudo de hardware, software, sistemas operacionais e princípios de segurança da informação.
            </CourseDescription>
            <CourseMeta>
              <span>16 horas</span>
              <CourseType>Online</CourseType>
            </CourseMeta>
          </CourseCard>
        </CoursesGrid>
      </CoursesSection>

      <ProjectsSection id="projects">
        <Title>Experiências e Projetos</Title>
        <ProjectsContainer>
          <CarouselButton 
            className="prev" 
            onClick={prevProject} 
            disabled={currentProject === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </CarouselButton>
          
          <ProjectsGrid>
            <ProjectCardsContainer style={{ transform: getTranslateValue(currentProject) }}>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTechContainer>
                    {project.tech.map((tech, techIndex) => (
                      <ProjectTechTag key={techIndex} color={techIcons[tech]?.color}>
                        <i className={techIcons[tech]?.icon || 'fas fa-code'}></i>
                        {tech}
                      </ProjectTechTag>
                    ))}
                  </ProjectTechContainer>
                  
                  {project.duration && (
                    <ProjectDuration>
                      <i className="far fa-calendar-alt"></i>
                      {project.duration}
                    </ProjectDuration>
                  )}
                  
                  {project.link && (
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> Ver no GitHub
                    </ProjectLink>
                  )}
                </ProjectCard>
              ))}
            </ProjectCardsContainer>
          </ProjectsGrid>
          
          <CarouselButton 
            className="next" 
            onClick={nextProject} 
            disabled={currentProject === maxProjectIndex}
          >
            <i className="fas fa-chevron-right"></i>
          </CarouselButton>
        </ProjectsContainer>
        
        <CarouselDots>
          {Array.from({ length: Math.min(maxProjectIndex + 1, 5) }).map((_, index) => (
            <CarouselDot 
              key={index} 
              active={currentProject === index} 
              onClick={() => goToProject(index)}
            />
          ))}
        </CarouselDots>
      </ProjectsSection>

      <ContactSection id="contact">
        <Title>Entre em Contato</Title>
        <ContactContainer>
          <ContactInfo>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Informações de Contato</h3>
            <ContactItem href="mailto:alekxdias@gmail.com">
              <i className="fas fa-envelope"></i>
              <div>
                <ContactLabel>E-mail</ContactLabel>
                <ContactValue>alekxdias@gmail.com</ContactValue>
              </div>
            </ContactItem>
            <ContactItem href="https://www.linkedin.com/in/alekxdias" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <div>
                <ContactLabel>LinkedIn</ContactLabel>
                <ContactValue>linkedin.com/in/alekxdias</ContactValue>
              </div>
            </ContactItem>
            <ContactItem href="https://github.com/alekxDias" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <div>
                <ContactLabel>GitHub</ContactLabel>
                <ContactValue>github.com/alekxDias</ContactValue>
              </div>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Envie uma Mensagem</h3>
            <Input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formStatus.message && (
              <FormStatusMessage success={formStatus.success}>
                {formStatus.message}
              </FormStatusMessage>
            )}
            <Button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
      
      <Footer>
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
      </Footer>
    </AppContainer>
  )
}

export default App
