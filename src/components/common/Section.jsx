import React from 'react';
import styled from '@emotion/styled';
import { SECTION_PADDING, CONTENT_MAX_WIDTH, COLORS } from '../../styles/theme';

export const StyledSection = styled.section`
  min-height: 80vh;
  padding: ${SECTION_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.sectionDivider};
  margin: 0 auto;
  max-width: ${CONTENT_MAX_WIDTH};
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${COLORS.text};
  position: relative;
  display: flex;
  align-items: center;
  
  &::before {
    content: '${props => props.number}';
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.primary};
    margin-right: 0.8rem;
  }
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: ${COLORS.primary};
    margin-left: 1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    
    &::before {
      font-size: 1.3rem;
    }
    
    &::after {
      width: 40px;
    }
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto;
`;

const Section = ({ id, title, number, children, ...props }) => {
  return (
    <StyledSection id={id} {...props}>
      {title && <SectionTitle number={number}>{title}</SectionTitle>}
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section; 