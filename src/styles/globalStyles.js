import { css } from '@emotion/react';
import { COLORS } from './theme';

const globalStyles = css`
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
`;

export default globalStyles;
