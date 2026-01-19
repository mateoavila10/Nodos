import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* ============================================
     GOOGLE FONTS IMPORT
     ============================================ */
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');

  /* ============================================
     CSS VARIABLES - DESIGN TOKENS
     ============================================ */
  :root {
    /* === COLORS - PALETA ORIGINAL STRIVO === */
    --color-accent: #23e70b;
    --color-accent-rgb: 35, 231, 11;
    --color-accent-light: #7fff00;
    --color-accent-dark: #1bc309;
    
    /* Backgrounds */
    --color-bg-primary: #0A0A0B;
    --color-bg-secondary: #111113;
    --color-bg-tertiary: #18181B;
    --color-bg-elevated: #1F1F23;
    
    /* Text */
    --color-text-primary: #FAFAFA;
    --color-text-secondary: rgba(250, 250, 250, 0.7);
    --color-text-tertiary: rgba(250, 250, 250, 0.5);
    --color-text-muted: rgba(250, 250, 250, 0.3);
    
    /* Borders */
    --color-border-subtle: rgba(255, 255, 255, 0.06);
    --color-border-default: rgba(255, 255, 255, 0.1);
    --color-border-strong: rgba(255, 255, 255, 0.15);
    
    /* Legacy variables (para compatibilidad) */
    --primary-green: #23e70b;
    --light-green: #7fff00;
    --dark-green: #1bc309;
    --black: #0A0A0B;
    --white: #FAFAFA;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --border-radius: 12px;
    
    /* === TYPOGRAPHY === */
    --font-display: 'Syne', sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --font-accent: 'Playfair Display', serif;
    
    /* Font Sizes */
    --text-xs: clamp(0.7rem, 0.8vw, 0.75rem);
    --text-sm: clamp(0.8rem, 0.9vw, 0.875rem);
    --text-base: clamp(0.9rem, 1vw, 1rem);
    --text-lg: clamp(1rem, 1.2vw, 1.125rem);
    --text-xl: clamp(1.1rem, 1.5vw, 1.25rem);
    --text-2xl: clamp(1.25rem, 2vw, 1.5rem);
    --text-3xl: clamp(1.5rem, 2.5vw, 1.875rem);
    --text-4xl: clamp(1.875rem, 3vw, 2.25rem);
    --text-5xl: clamp(2.25rem, 4vw, 3rem);
    --text-6xl: clamp(3rem, 6vw, 4rem);
    
    /* === SPACING === */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    
    /* === EFFECTS === */
    --shadow-glow: 0 0 40px rgba(35, 231, 11, 0.3);
    
    /* === BORDERS === */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* === TRANSITIONS === */
    --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
    --transition-fast: 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-base: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-slow: 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* ============================================
     RESET & BASE STYLES
     ============================================ */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    overflow-x: hidden;
  }

  /* Selection */
  ::selection {
    background: rgba(35, 231, 11, 0.3);
    color: var(--color-text-primary);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border-strong);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
  }

  /* ============================================
     TYPOGRAPHY
     ============================================ */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--color-text-primary);
  }

  h1 { font-size: var(--text-6xl); }
  h2 { font-size: var(--text-5xl); }
  h3 { font-size: var(--text-4xl); }
  h4 { font-size: var(--text-3xl); }
  h5 { font-size: var(--text-2xl); }
  h6 { font-size: var(--text-xl); }

  p {
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* ============================================
     UTILITY CLASSES
     ============================================ */
  .text-gradient {
    background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-accent {
    color: var(--color-accent);
  }

  .glow {
    box-shadow: var(--shadow-glow);
  }

  /* ============================================
     ANIMATIONS
     ============================================ */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(35, 231, 11, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(35, 231, 11, 0.6);
    }
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ============================================
     SECTIONS
     ============================================ */
  section {
    position: relative;
    overflow: hidden;
  }

  /* ============================================
     RESPONSIVE
     ============================================ */
  @media (max-width: 768px) {
    :root {
      --space-12: 2.5rem;
      --space-16: 2.5rem;
      --space-20: 3rem;
      --space-24: 4rem;
    }
  }

  @media (max-width: 480px) {
    :root {
      --space-8: 1.5rem;
      --space-12: 2rem;
      --space-16: 2rem;
    }
  }
`;

export default GlobalStyles;