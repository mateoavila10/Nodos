import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  :root {
    --primary-green: #23e70b;
    --black: #000000;
    --white: #ffffff;
    --dark-gray: #242834;
    --light-green: #7afe6a;
    --gradient: linear-gradient(135deg, var(--dark-gray), var(--black));
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --border-radius: 15px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background: var(--gradient);
    color: var(--white);
    line-height: 1.6;
    padding-top: 80px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;