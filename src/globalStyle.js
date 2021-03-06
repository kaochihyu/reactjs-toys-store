import { createGlobalStyle } from 'styled-components';
import './index.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    line-height: 1.18;
    background: #FFFFFF;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6,
  p {
    white-space: pre-line;
    word-break: break-word;
    line-height: 1.18;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }

  label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 700;
    white-space: nowrap;
  }

  input {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background-color: transparent;
    border-style: initial;
    padding: 0.25rem;

    &:focus-visible {
      outline: none;
    }
  }
`;

export default GlobalStyle;