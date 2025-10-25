import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaCog, FaHandshake } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: var(--white);
  color: var(--black);
  max-width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: var(--primary-green);
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const ServiceList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const ServiceItem = styled(motion.div)`
  background: linear-gradient(135deg, var(--light-green), var(--white));
  padding: 2.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--primary-green);
  }
`;

const Badge = styled.span`
  background: var(--primary-green);
  color: var(--black);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
`;

const Services = () => {
  const services = [
    {
      icon: <FaRobot />,
      badge: 'IA Avanzada',
      title: 'Chatbots con IA',
      desc: 'Desarrollamos chatbots inteligentes que ofrecen interacciones naturales y personalizadas 24/7, integrados con tus sistemas existentes para mejorar la experiencia del cliente y reducir costos operativos.'
    },
    {
      icon: <FaCog />,
      badge: 'Automatización Eficiente',
      title: 'Automatización de Procesos',
      desc: 'Optimizamos flujos de trabajo repetitivos con soluciones de automatización basadas en IA, permitiendo a tu equipo enfocarse en tareas estratégicas y aumentando la productividad en un 40%.'
    },
    {
      icon: <FaHandshake />,
      badge: 'Integración Personalizada',
      title: 'Integraciones a Medida',
      desc: 'Adaptamos nuestras soluciones a tus necesidades específicas, conectando con APIs, CRM y herramientas empresariales para una implementación seamless y escalable.'
    },
  ];

  return (
    <ServicesSection id="services">
      <Title>Nuestros Servicios</Title>
      <ServiceList
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Badge>{service.badge}</Badge>
            <Icon>{service.icon}</Icon>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServicesSection>
  );
};

export default Services;