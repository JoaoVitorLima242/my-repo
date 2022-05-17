import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
  }

  html, 
  body {
    height: 100%;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: -0.03em;
  }
  
  html {
    scroll-behavior: smooth;
  }

`;