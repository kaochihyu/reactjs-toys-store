import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
  *,
  *::before, 
  *::aftet {
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
  }
`;

export default GlobalStyle;