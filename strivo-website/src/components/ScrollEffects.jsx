import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

/* ============================================
   SCROLL REVEAL COMPONENT
   Revela elementos con animación al entrar en viewport
   ============================================ */
export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 50,
  once = true,
  className = '',
  threshold = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================
   STAGGER CONTAINER
   Anima children con efecto escalonado
   ============================================ */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = '',
  direction = 'up',
  distance = 30
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    scale: { scale: 0.9, y: 0, x: 0 }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

/* ============================================
   PARALLAX COMPONENT
   Efecto parallax basado en scroll
   ============================================ */
export const Parallax = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'y' 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const range = 100 * speed;
  
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const x = useTransform(scrollYProgress, [0, 1], [-range, range]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const xSpring = useSpring(x, springConfig);

  return (
    <motion.div 
      ref={ref} 
      className={className}
      style={{ 
        y: direction === 'y' ? ySpring : 0,
        x: direction === 'x' ? xSpring : 0
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================
   PARALLAX SECTION
   Sección completa con fondo parallax
   ============================================ */
export const ParallaxSection = ({
  children,
  className = '',
  bgSpeed = 0.3
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', `${bgSpeed * 100}%`]);

  return (
    <section ref={ref} className={`parallax-section ${className}`}>
      <motion.div 
        className="parallax-bg"
        style={{ y: bgY }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
};

/* ============================================
   TEXT REVEAL (Character by Character)
   ============================================ */
export const TextReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 0.03
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const characters = text.split('');

  return (
    <span ref={ref} className={`text-reveal ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ============================================
   WORD REVEAL (Word by Word)
   ============================================ */
export const WordReveal = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.08
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`word-reveal ${className}`}>
      {words.map((word, index) => (
        <span key={index} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
          <motion.span
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ============================================
   LINE REVEAL (Line by Line with mask)
   ============================================ */
export const LineReveal = ({
  children,
  delay = 0,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`line-reveal ${className}`} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ============================================
   SCALE REVEAL
   ============================================ */
export const ScaleReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================
   MAGNETIC HOVER EFFECT
   Elemento que sigue al cursor en hover
   ============================================ */
export const MagneticHover = ({ 
  children, 
  strength = 0.3,
  className = '' 
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================
   SCROLL PROGRESS INDICATOR
   ============================================ */
export const ScrollProgress = ({ color = 'var(--color-accent)' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: color,
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999
      }}
    />
  );
};

/* ============================================
   COUNTER ANIMATION
   ============================================ */
export const AnimatedCounter = ({ 
  value, 
  duration = 2, 
  delay = 0,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const timeout = setTimeout(() => {
        let start = 0;
        const end = parseInt(value);
        const incrementTime = (duration * 1000) / end;
        
        const counter = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) {
            clearInterval(counter);
          }
        }, incrementTime);
        
        return () => clearInterval(counter);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, duration, delay]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

/* ============================================
   BLUR FADE IN
   ============================================ */
export const BlurFadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  blur = 10,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: `blur(${blur}px)` }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================
   ROTATE REVEAL
   ============================================ */
export const RotateReveal = ({
  children,
  delay = 0,
  rotation = 5,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, rotateX: rotation, y: 30 }}
      animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  Parallax,
  ParallaxSection,
  TextReveal,
  WordReveal,
  LineReveal,
  ScaleReveal,
  MagneticHover,
  ScrollProgress,
  AnimatedCounter,
  BlurFadeIn,
  RotateReveal
};