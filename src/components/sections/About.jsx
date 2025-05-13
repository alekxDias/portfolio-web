import React from 'react';
import styled from '@emotion/styled';
import { COLORS, PRIMARY_COLOR } from '../../styles/theme';

const AboutSection = styled.section`
  min-height: 80vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${COLORS.backgroundLight};
  padding: 5rem 2rem;
  min-height: 100vh;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin: 3rem auto 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${COLORS.cardBackground};
  border: 1px solid ${COLORS.border};
  border-radius: 16px;
  padding: 1.1rem 1.3rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${COLORS.text};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: border 0.3s, box-shadow 0.3s, transform 0.3s;
  
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
`;

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

const About = () => {
  return (
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
  );
};

export default About; 