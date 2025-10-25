import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: var(--dark-gray);
  color: var(--white);
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Stat = styled(motion.div)`
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(35,231,11,0.1));
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  h3 {
    font-size: 3rem;
    color: var(--primary-green);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1.1rem;
    color: var(--white);
  }
`;

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { number: 500, label: 'Clientes Satisfechos' },
    { number: 1000000, label: 'Conversaciones Automatizadas' },
    { number: 99, label: 'Tasa de Satisfacción (%)' },
    { number: 24, label: 'Horas de Soporte Diario' },
  ];

  useEffect(() => {
    if (isInView) {
      const timers = stats.map((stat, index) => {
        const increment = stat.number / 100;
        let current = 0;
        return setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timers[index]);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 20);
      });
      return () => timers.forEach(clearInterval);
    }
  }, [isInView]);

  return (
    <StatsSection ref={ref}>
      <Container>
        {stats.map((stat, index) => (
          <Stat
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{counts[index]}{stat.label.includes('%') ? '%' : stat.label.includes('Horas') ? '/7' : '+'}</h3>
            <p>{stat.label}</p>
          </Stat>
        ))}
      </Container>
    </StatsSection>
  );
};

export default Stats;