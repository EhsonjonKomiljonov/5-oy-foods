import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding-left: 104px;
    padding-right: 410px;
    font-family: 'Barlow', 'Arial', sans-serif;
    background-color: #252836;
  }
  
  main {
    flex-grow: 1;
  }
  
  img {
    vertical-align: middle;
    object-fit: cover;
  }
  
  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  } 
`;
