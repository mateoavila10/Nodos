import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterSection = styled.footer`
  background: #111;
  color: var(--white);
  text-align: center;
  padding: 3rem 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  color: var(--light-green);
  margin-bottom: 1rem;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  a {
    color: var(--white);
    &:hover {
      color: var(--primary-green);
    }
  }
`;

const Footer = () => (
  <FooterSection>
    <Grid>
      <div>
        <Title>STRIVO</Title>
        <p>Automatización y chatbots con IA para tu negocio.</p>
      </div>
      <div>
        <Title>Enlaces</Title>
        <p><a href="#hero">Inicio</a></p>
        <p><a href="#services">Servicios</a></p>
        <p><a href="#testimonials">Testimonios</a></p>
        <p><a href="#contact">Contacto</a></p>
      </div>
      <div>
        <Title>Contacto</Title>
        <p>Email: info@strivo.com</p>
        <p>Tel: +1 (123) 456-7890</p>
        <Social>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </Social>
      </div>
    </Grid>
    <p style={{ marginTop: "2rem", color: "var(--light-green)" }}>
      © 2025 STRIVO. Todos los derechos reservados.
    </p>
  </FooterSection>
);

export default Footer;
