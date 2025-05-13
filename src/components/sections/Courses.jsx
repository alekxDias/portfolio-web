import React from 'react';
import styled from '@emotion/styled';
import { COLORS, PRIMARY_COLOR } from '../../styles/theme';

const CoursesSection = styled.section`
  min-height: 80vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${COLORS.background};
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

const CourseCard = styled.div`
  background: ${COLORS.cardBackground};
  border-radius: 16px;
  padding: 1.8rem;
  margin: 1rem;
  width: 100%;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    border-color: ${COLORS.primary};
  }
`;

const CourseTitle = styled.h3`
  color: ${COLORS.text};
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

const CourseProvider = styled.h4`
  color: ${PRIMARY_COLOR};
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

const CourseDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: ${COLORS.textSecondary};
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #666;
  font-size: 0.9rem;
`;

const CourseType = styled.span`
  background: ${PRIMARY_COLOR}22;
  color: ${PRIMARY_COLOR};
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin-top: 3rem;
`;

const Courses = () => {
  return (
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
  );
};

export default Courses; 