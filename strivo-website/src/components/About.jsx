import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: var(--white);
  color: var(--black);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  h2 {
    color: var(--primary-green);
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feature = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--light-green), var(--white));
  border-radius: var(--border-radius);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Icon = styled.div`
  font-size: 2rem;
  color: var(--primary-green);
`;

const About = () => (
  <AboutSection id="about">
    <Container>
      <TextContent>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Sobre STRIVO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Somos líderes en automatización de procesos y desarrollo de chatbots con IA. Nuestra misión es empoderar a las empresas con tecnología innovadora para aumentar la eficiencia y la satisfacción del cliente.
        </motion.p>
      </TextContent>
      <Features>
        <Feature
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Icon><FaUsers /></Icon>
          <div>
            <h4>Equipo Experto</h4>
            <p>Profesionales con años de experiencia en IA y automatización.</p>
          </div>
        </Feature>
        <Feature
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Icon><FaLightbulb /></Icon>
          <div>
            <h4>Innovación Constante</h4>
            <p>Utilizamos las últimas tecnologías para soluciones de vanguardia.</p>
          </div>
        </Feature>
        <Feature
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Icon><FaRocket /></Icon>
          <div>
            <h4>Resultados Rápidos</h4>
            <p>Implementaciones eficientes que generan impacto inmediato.</p>
          </div>
        </Feature>
      </Features>
    </Container>
  </AboutSection>
);

export default About;