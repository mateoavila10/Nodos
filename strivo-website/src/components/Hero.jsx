import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './css/Hero.css';

// Componente de partículas/líneas de velocidad
const SpeedLines = () => {
  const lines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 2,
    height: 50 + Math.random() * 150,
  }));

  return (
    <div className="speed-lines">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="speed-line"
          style={{ left: line.left, height: line.height }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '200vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Componente de grid animado
const AnimatedGrid = () => {
  return (
    <div className="animated-grid">
      <div className="grid-horizontal">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="grid-line-h"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ))}
      </div>
      <div className="grid-vertical">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="grid-line-v"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ))}
      </div>
    </div>
  );
};

// Texto con efecto de reveal cinematográfico
const CinematicText = ({ children, delay = 0, className = '' }) => {
  return (
    <div className={`cinematic-text-wrapper ${className}`}>
      <motion.div
        className="cinematic-text"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Cursor glow effect
const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="cursor-glow"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

// Componente de estadísticas con contador
const StatCounter = ({ value, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <motion.div 
      ref={ref}
      className="hero-stat"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <span className="stat-value">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      {/* Cursor Glow Effect */}
      <CursorGlow />
      
      {/* Background Layers */}
      <div className="hero-bg-layers">
        {/* Animated Grid */}
        <AnimatedGrid />
        
        {/* Speed Lines */}
        <SpeedLines />
        
        {/* Gradient Orbs */}
        <motion.div 
          className="gradient-orb orb-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ y: y1 }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ y: y2 }}
        />
        
        {/* Noise Texture Overlay */}
        <div className="noise-overlay"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="hero-content"
        style={{ opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-dot"></span>
          <span>Automatizaciones con IA</span>
          <span className="badge-arrow">→</span>
        </motion.div>

        {/* Main Heading */}
        <div className="hero-heading">
          <CinematicText delay={0.4} className="heading-line-1">
            <h1>
              <span className="text-outline">Automatizamos</span>
            </h1>
          </CinematicText>
          <CinematicText delay={0.5} className="heading-line-2">
            <h1>
              tu negocio con <span className="text-gradient">IA</span>
            </h1>
          </CinematicText>
          <CinematicText delay={0.6} className="heading-line-3">
            <h1>
              en <span className="text-highlight">14 días</span>
            </h1>
          </CinematicText>
        </div>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Eliminamos las tareas repetitivas que te roban tiempo.
          <br />
          <span className="subtitle-highlight">PyMEs y E-commerce</span> confían en nosotros.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.a
            href="#contact"
            className="cta-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="cta-text">Agendar Consulta</span>
            <span className="cta-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
            <span className="cta-shine"></span>
          </motion.a>
          
          <motion.a
            href="#services"
            className="cta-secondary"
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver Servicios</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <StatCounter value="50" suffix="+" label="Clientes" delay={1500} />
          <div className="stat-divider"></div>
          <StatCounter value="200" suffix="+" label="Automatizaciones" delay={1700} />
          <div className="stat-divider"></div>
          <StatCounter value="20" suffix="hrs" label="Ahorro semanal" delay={1900} />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span>Scroll</span>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;