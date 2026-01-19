import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      ),
      title: "Chatbots con IA",
      description: "Atención al cliente 24/7 por WhatsApp, Instagram y tu web. Respondemos automáticamente y derivamos solo lo necesario.",
      features: ["WhatsApp Business", "Instagram DM", "Web Chat", "Integración con CRM"],
      color: "#23E70B"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Integración de Sistemas",
      description: "Conectamos todas tus herramientas sin código. CRM, emails, pagos, inventario - todo sincronizado automáticamente.",
      features: ["n8n & Make", "APIs personalizadas", "Sincronización en tiempo real", "Sin programación"],
      color: "#7FE66A"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Automatización de Marketing",
      description: "Campañas automatizadas, seguimiento de leads y nurturing. Convierte más sin esfuerzo manual.",
      features: ["Email automation", "Segmentación inteligente", "Follow-up automático", "Analytics en vivo"],
      color: "#23E70B"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      title: "Gestión de E-commerce",
      description: "Automatiza inventario, pedidos y logística. Desde la venta hasta la entrega, todo en piloto automático.",
      features: ["Control de stock", "Procesamiento de pedidos", "Facturación automática", "Notificaciones"],
      color: "#7FE66A"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Procesos Internos",
      description: "Optimizamos reportes, aprobaciones, tareas repetitivas. Tu equipo se enfoca en crecer, no en copiar y pegar.",
      features: ["Reportes automáticos", "Workflows personalizados", "Gestión documental", "Recordatorios inteligentes"],
      color: "#23E70B"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Soluciones a Medida",
      description: "¿Tenés un proceso único? Diseñamos automatizaciones personalizadas para tu negocio específico.",
      features: ["Análisis de procesos", "Desarrollo custom", "Soporte dedicado", "Escalable"],
      color: "#7FE66A"
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
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="services-badge">Nuestros Servicios</span>
          <h2 className="services-title">
            Automatizamos <span className="gradient-text">Todo lo que te Quita Tiempo</span>
          </h2>
          <p className="services-subtitle">
            Desde atención al cliente hasta procesos internos. Si se repite, se puede automatizar.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-card-glow" style={{ background: `radial-gradient(circle at center, ${service.color}15, transparent)` }}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="services-cta-content">
            <h3>¿No encontrás lo que buscás?</h3>
            <p>Contanos tu proceso y diseñamos la automatización perfecta para vos</p>
          </div>
          <motion.a 
            href="#contact" 
            className="services-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hablemos de tu Proyecto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;