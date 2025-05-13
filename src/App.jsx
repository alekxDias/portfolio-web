import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Courses from './components/sections/Courses';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import globalStyles from './styles/globalStyles';
import { COLORS } from './styles/theme';

const AppContainer = styled.div`
  background: ${COLORS.background};
  color: ${COLORS.text};
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.sectionDivider};
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <AppContainer>
      <Global styles={globalStyles} />
      <Navbar />
      <Hero />
      <div style={{ height: "70px" }} />
      <About />
      <Courses />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App; 