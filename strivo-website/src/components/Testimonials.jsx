import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "María González",
      role: "Dueña",
      company: "Tienda de Ropa Online",
      image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=23E70B&color=000&size=128",
      text: "Strivo automatizó toda nuestra atención por WhatsApp. Ahora respondemos 24/7 y nuestras ventas aumentaron un 40%. Lo mejor es que no necesitamos contratar más gente.",
      rating: 5,
      result: "+40% ventas",
      metric: "Ahorro de 15hs semanales"
    },
    {
      name: "Carlos Méndez",
      role: "Gerente de Operaciones",
      company: "E-commerce de Electrónica",
      image: "https://ui-avatars.com/api/?name=Carlos+Mendez&background=7FE66A&color=000&size=128",
      text: "Antes perdíamos horas actualizando inventarios y procesando pedidos. Con Strivo todo está sincronizado automáticamente. Fue como contratar 3 empleados más.",
      rating: 5,
      result: "3x más eficiencia",
      metric: "ROI en 2 meses"
    },
    {
      name: "Laura Fernández",
      role: "CEO",
      company: "Agencia de Marketing",
      image: "https://ui-avatars.com/api/?name=Laura+Fernandez&background=23E70B&color=000&size=128",
      text: "Implementamos chatbots con IA para calificar leads automáticamente. Nuestro equipo de ventas ahora solo habla con clientes realmente interesados. Game changer total.",
      rating: 5,
      result: "60% menos tiempo en leads fríos",
      metric: "Conversión +25%"
    },
    {
      name: "Roberto Silva",
      role: "Fundador",
      company: "Consultora Tech",
      image: "https://ui-avatars.com/api/?name=Roberto+Silva&background=7FE66A&color=000&size=128",
      text: "El equipo de Strivo es increíble. Entendieron nuestros procesos y diseñaron automatizaciones a medida. En 2 semanas ya estábamos viendo resultados concretos.",
      rating: 5,
      result: "Implementación en 14 días",
      metric: "Soporte excepcional"
    },
    {
      name: "Ana Martínez",
      role: "Directora Comercial",
      company: "Distribuidora B2B",
      image: "https://ui-avatars.com/api/?name=Ana+Martinez&background=23E70B&color=000&size=128",
      text: "Strivo integró nuestro CRM con WhatsApp y el sistema de facturación. Los seguimientos son automáticos y nunca más perdimos una oportunidad de venta por olvido.",
      rating: 5,
      result: "0 oportunidades perdidas",
      metric: "100% seguimiento automático"
    },
    {
      name: "Diego Romero",
      role: "Owner",
      company: "Restaurante Delivery",
      image: "https://ui-avatars.com/api/?name=Diego+Romero&background=7FE66A&color=000&size=128",
      text: "Automatizamos los pedidos por WhatsApp y la gestión de delivery. Pasamos de atender 50 pedidos diarios a 200, con el mismo equipo. Increíble lo que logramos.",
      rating: 5,
      result: "4x más pedidos",
      metric: "Mismo equipo"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="testimonials-section" id="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-badge">Casos de Éxito</span>
          <h2 className="testimonials-title">
            Lo que Dicen <span className="gradient-text">Nuestros Clientes</span>
          </h2>
          <p className="testimonials-subtitle">
            Empresas reales que transformaron sus operaciones con automatizaciones inteligentes
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
            >
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>

              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-metrics">
                <div className="testimonial-metric">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                  <span>{testimonial.result}</span>
                </div>
                <div className="testimonial-metric">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{testimonial.metric}</span>
                </div>
              </div>

              <div className="testimonial-quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>¿Listo para ser el próximo caso de éxito?</h3>
          <motion.a 
            href="#contact" 
            className="testimonials-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Empezar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;