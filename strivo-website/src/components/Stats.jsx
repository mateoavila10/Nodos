import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './css/Stats.css';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [inView, value, duration, count]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      value: 50,
      suffix: '+',
      label: 'Clientes Activos',
      description: 'PyMEs y e-commerce confiando en nosotros'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      value: 200,
      suffix: '+',
      label: 'Automatizaciones',
      description: 'Procesos optimizados y funcionando'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      value: 14,
      suffix: '',
      label: 'Días Promedio',
      description: 'Desde consulta hasta implementación'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      value: 100,
      suffix: '%',
      label: 'Satisfacción',
      description: 'Clientes que recomiendan nuestro servicio'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="stats-section" id="stats" ref={ref}>
      <div className="stats-background">
        <div className="stats-gradient-1"></div>
        <div className="stats-gradient-2"></div>
      </div>

      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="stats-badge">Resultados que Hablan</span>
          <h2 className="stats-title">
            <span className="gradient-text">Números Reales</span> de Impacto Real
          </h2>
        </motion.div>

        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2 + index * 0.2}
                />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
              <div className="stat-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="stats-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="stats-bottom-content">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <div>
              <h3>Resultados Garantizados en Cada Proyecto</h3>
              <p>Nuestro compromiso es transformar tu operación con automatizaciones que realmente funcionan. Si no ves mejoras tangibles, trabajamos hasta lograrlo.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;