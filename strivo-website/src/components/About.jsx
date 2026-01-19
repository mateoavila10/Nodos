import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem, 
  Parallax,
  WordReveal,
  LineReveal,
  BlurFadeIn,
  AnimatedCounter
} from './ScrollEffects';
import './css/About.css';

// Íconos SVG minimalistas
const Icons = {
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  const values = [
    {
      icon: <Icons.Target />,
      title: "Resultados Medibles",
      description: "Métricas claras de ROI y eficiencia en cada automatización."
    },
    {
      icon: <Icons.Zap />,
      title: "14 Días",
      description: "Implementación rápida sin proyectos eternos."
    },
    {
      icon: <Icons.Shield />,
      title: "Soporte Continuo",
      description: "Acompañamos tu crecimiento post-implementación."
    },
    {
      icon: <Icons.Users />,
      title: "Equipo Experto",
      description: "Especialistas en n8n, ManyChat y APIs."
    }
  ];

  const benefits = [
    "Reducción de hasta 80% en tareas manuales",
    "Atención al cliente 24/7 automatizada",
    "Integración con tus sistemas actuales",
    "Escalabilidad sin límites"
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Background Elements */}
      <div className="about-bg">
        <motion.div className="about-gradient-orb" style={{ y: backgroundY }} />
        <div className="about-grid" />
        <motion.div className="about-line-accent" style={{ opacity }} />
      </div>

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <ScrollReveal delay={0.1}>
            <span className="about-badge">
              <span className="badge-line" />
              Sobre Nosotros
            </span>
          </ScrollReveal>

          <LineReveal delay={0.2}>
            <h2 className="about-title">
              De procesos <span className="text-outline">manuales</span>
            </h2>
          </LineReveal>
          <LineReveal delay={0.3}>
            <h2 className="about-title">
              a flujos <span className="text-gradient">automáticos</span>
            </h2>
          </LineReveal>

          <ScrollReveal delay={0.5}>
            <p className="about-subtitle">
              Somos especialistas en automatización e inteligencia artificial. 
              Ayudamos a PyMEs y e-commerce a escalar sin escalar costos.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid-content">
          {/* Story Card */}
          <BlurFadeIn delay={0.3} className="about-story">
            <div className="story-label">
              <span>01</span>
              Nuestra Historia
            </div>
            <div className="story-content">
              <p className="story-lead">
                Empezamos como vos: perdiendo horas en tareas repetitivas.
              </p>
              <p>
                Respondiendo los mismos mensajes, copiando datos entre sistemas, 
                haciendo trabajo que una máquina podría hacer mejor. 
                Un día dijimos <em>"basta"</em> y creamos Strivo.
              </p>
            </div>
            
            {/* Stats */}
            <div className="story-stats">
              <div className="stat">
                <span className="stat-number">
                  <AnimatedCounter value={50} suffix="+" delay={0.5} />
                </span>
                <span className="stat-label">Clientes</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  <AnimatedCounter value={200} suffix="+" delay={0.7} />
                </span>
                <span className="stat-label">Automatizaciones</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  <AnimatedCounter value={14} delay={0.9} />
                </span>
                <span className="stat-label">Días promedio</span>
              </div>
            </div>
          </BlurFadeIn>

          {/* Benefits Card */}
          <BlurFadeIn delay={0.4} className="about-benefits">
            <div className="benefits-label">
              <span>02</span>
              Qué lográs
            </div>
            
            <StaggerContainer staggerDelay={0.1} delay={0.5} className="benefits-list">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index} direction="left">
                  <div className="benefit-item">
                    <span className="benefit-icon">
                      <Icons.Check />
                    </span>
                    <span>{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.8}>
              <a 
                href="#services" 
                className="benefits-cta"
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
              >
                <span>Ver servicios</span>
                <Icons.ArrowRight />
              </a>
            </ScrollReveal>
          </BlurFadeIn>
        </div>

        {/* Values Grid */}
        <StaggerContainer staggerDelay={0.1} delay={0.2} className="about-values">
          {values.map((value, index) => (
            <StaggerItem key={index} direction="scale">
              <div className="value-card">
                <div className="value-number">0{index + 1}</div>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Banner */}
        <ScrollReveal delay={0.3}>
          <div className="about-cta">
            <Parallax speed={0.1}>
              <div className="cta-content">
                <span className="cta-eyebrow">¿Listo para empezar?</span>
                <h3>Dejá de perder tiempo en tareas manuales</h3>
              </div>
            </Parallax>
            <a 
              href="#contact" 
              className="cta-button"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              <span>Agendar consulta</span>
              <Icons.ArrowRight />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;