import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../assets/Strivvo.ar.jpg"; 

const Nav = styled(motion.nav)`
  background: rgba(0, 0, 0, 0.95);
  padding: ${({ scrolled }) => (scrolled ? "0.5rem 2rem" : "1rem 2rem")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(15px);
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 15px rgba(0, 0, 0, 0.4)" : "none"};
  transition: all 0.3s ease-in-out;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  img {
    height: ${({ scrolled }) => (scrolled ? "38px" : "50px")};
    width: auto;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
  }
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--black);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    z-index: 999;
  }

  li a {
    color: var(--white);
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: var(--primary-green);
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: var(--white);
    font-size: 1.5rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🧠 Detecta el scroll y cambia el tamaño del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo href="#hero" scrolled={scrolled}>
        <img src={logo} alt="STRIVO Logo" />
      </Logo>

      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavLinks isOpen={isOpen}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Servicios</a></li>
        <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonios</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </NavLinks>
    </Nav>
  );
};

export default Header;
