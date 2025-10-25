import styled from "styled-components";
import { useForm } from "react-hook-form";

const ContactSection = styled.section`
  background: #242834;
  color: #111;
  text-align: center;
  margin-top: 100px;
`;

const Title = styled.h2`
  color: var(--primary-green);
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  background: var(--primary-green);
  color: var(--black);
  font-weight: 600;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: var(--light-green);
  }
  margin-bottom:100px;
`;

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(`Gracias por contactarte, ${data.name}!`);
    reset();
  };

  return (
    <ContactSection id="contact">
      <Title>Contáctanos</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Tu Nombre" {...register("name")} required />
        <Input placeholder="Tu Email" {...register("email")} type="email" required />
        <Textarea placeholder="Tu Mensaje" rows="5" {...register("message")} required />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;
