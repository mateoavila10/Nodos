import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled(motion.section)`
  padding: 6rem 2rem 4rem;
  text-align: center;
  background: url('https://source.unsplash.com/featured/?business,technology') no-repeat center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(35,231,11,0.1));
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: var(--white);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(motion.button)`
  background: var(--primary-green);
  color: var(--black);
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  &:hover {
    background: var(--light-green);
    transform: translateY(-5px);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: var(--white);
  border: 2px solid var(--primary-green);
  &:hover {
    background: var(--primary-green);
    color: var(--black);
  }
`;

const Hero = () => (
  <HeroSection id="hero">
    <Content>
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Revoluciona tu Empresa con IA
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        En STRIVO, automatizamos procesos y creamos chatbots inteligentes para impulsar tu crecimiento. Únete a miles de empresas que ya confían en nosotros.
      </Subtitle>
      <ButtonGroup>
        <Button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Solicita Demo Gratuita
        </Button>
        <SecondaryButton
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          Ver Casos de Éxito
        </SecondaryButton>
      </ButtonGroup>
    </Content>
  </HeroSection>
);

export default Hero;