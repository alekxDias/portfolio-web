import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS, PRIMARY_COLOR, BORDER_RADIUS, CARD_SHADOW, CARD_SHADOW_HOVER, TRANSITION_SPEED } from '../../styles/theme';

const ProjectsSection = styled.section`
  min-height: 80vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${COLORS.backgroundLight};
  padding: 5rem 2rem;
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

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin: 0 auto;
  padding: 0;
`;

const ProjectsGrid = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 3rem auto 0;
  overflow: hidden;
  position: relative;
  padding: 0 5px;
`;

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
`;

const ProjectTitle = styled.h3`
  color: ${COLORS.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

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
`;

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
`;

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
`;

const ProjectTechContainer = styled.div`
  margin: 1.2rem 0;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  border-top: 1px solid #f0f0f0;
`;

const ProjectCardsContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: fit-content;
  padding: 10px 0 20px;
`;

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
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 0.7rem;
`;

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
`;

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

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projectsPerView = window.innerWidth < 768 ? 1 : 3;
  
  const projects = [
    {
      title: "Estagiário na Supervisão Técnica do SENAI",
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
  
  // Calcular o deslocamento exato para cada card
  const getTranslateValue = (index) => {
    // Largura total de cada card incluindo margem (340px + 20px de margem)
    const cardTotalWidth = 360;
    return `translateX(-${index * cardTotalWidth}px)`;
  };
  
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
  
  return (
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
  );
};

export default Projects; 