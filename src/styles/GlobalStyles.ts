import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2C3E50;
    --secondary-color: #3498DB;
    --accent-color: #E74C3C;
    --background-dark: #0A1929;
    --background-light: #1E293B;
    --text-primary: #ECF0F1;
    --text-secondary: #B2BABB;
    --text-muted: #7F8C8D;
    --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    /* RGB Values for colors to use in rgba */
    --primary-color-rgb: 44, 62, 80;
    --secondary-color-rgb: 52, 152, 219;
    --accent-color-rgb: 231, 76, 60;
    --background-dark-rgb: 10, 25, 41;
    --background-light-rgb: 30, 41, 59;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-main);
    background-color: var(--background-dark);
    color: var(--text-primary);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: var(--font-main);
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyles; 