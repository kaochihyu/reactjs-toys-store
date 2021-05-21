import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#494949',
  },

  fontSizes: {
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2.25rem',
    xxl: '3rem',
  },

  space: {
    xs: '0.625rem',
    sm: '1.25rem',
    md: '2.5rem',
    lg: '5rem',
    xl: '6.25rem',
  },

  media: {
    sm: '@media(max-width: 40rem)',
    md: '@media (max-width: 48rem)',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;