import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const TestimonialsSection = styled.section`
  background: var(--mid-gray);
  color: var(--white);
  text-align: center;
`;

const Title = styled.h2`
  color: var(--primary-green);
  margin-bottom: 3rem;
`;

const TestimonialCard = styled.div`
  background: var(--light-green);
  color: var(--black);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const Author = styled.h4`
  color: var(--white);
`;

const Testimonials = () => {
  const testimonials = [
    { quote: "STRIVO transformó nuestros procesos, ahorrándonos horas diarias.", author: "Juan Pérez, CEO de TechCorp" },
    { quote: "La IA de STRIVO es increíblemente intuitiva.", author: "María López, Directora de Operaciones" },
    { quote: "Recomiendo STRIVO a cualquier empresa.", author: "Carlos García, Gerente de Ventas" },
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Title>Testimonios</Title>
      <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard>
              <Quote>"{testimonial.quote}"</Quote>
              <Author>- {testimonial.author}</Author>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsSection>
  );
};

export default Testimonials;
