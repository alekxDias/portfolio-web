import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser';
import { COLORS, PRIMARY_COLOR, BORDER_RADIUS, TRANSITION_SPEED } from '../../styles/theme';

const ContactSection = styled.section`
  min-height: 80vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: ${COLORS.background};
  padding: 5rem 2rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.text};
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: transparent;
    border-radius: 2px;
  }
  
  @media (max-width: 600px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  background: ${COLORS.cardBackground};
  border-radius: ${BORDER_RADIUS};
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  
  @media (max-width: 900px) {
    max-width: 500px;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  color: ${COLORS.text};
  padding: 1rem;
  border-radius: 12px;
  transition: all ${TRANSITION_SPEED};
  
  &:hover {
    background: ${PRIMARY_COLOR}11;
    transform: translateX(5px);
    color: ${PRIMARY_COLOR};
  }
  
  i {
    font-size: 1.8rem;
    color: ${PRIMARY_COLOR};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${PRIMARY_COLOR}11;
    border-radius: 50%;
  }
`;

const ContactLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.3rem;
`;

const ContactValue = styled.span`
  font-size: 0.95rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 500px;
  background: ${COLORS.cardBackground};
  padding: 2.5rem;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${COLORS.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform ${TRANSITION_SPEED}, box-shadow ${TRANSITION_SPEED};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px 0 rgba(37, 99, 235, 0.15);
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  background: ${COLORS.backgroundLighter};
  color: ${COLORS.text};
  font-size: 1rem;
  transition: border ${TRANSITION_SPEED};
  
  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  background: ${COLORS.backgroundLighter};
  color: ${COLORS.text};
  font-size: 1rem;
  min-height: 150px;
  transition: border ${TRANSITION_SPEED};
  
  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${PRIMARY_COLOR};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background ${TRANSITION_SPEED}, transform ${TRANSITION_SPEED};
  font-weight: 500;
  
  &:hover {
    background: #1e40af;
    transform: translateY(-2px);
  }
`;

const FormStatusMessage = styled.div`
  padding: 0.8rem;
  border-radius: 8px;
  background: ${props => props.success ? 'rgba(52, 211, 153, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  color: ${props => props.success ? '#10b981' : '#ef4444'};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ''
  });
  
  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_nf5s6lv';
    const templateId = 'template_ip16ldq';
    const publicKey = 'yNLYjMJqLTayq5lJY';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setLoading(false);
        setFormStatus({
          success: true,
          error: false,
          message: 'Mensagem enviada com sucesso!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            success: false,
            error: false,
            message: ''
          });
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        setFormStatus({
          success: false,
          error: true,
          message: 'Erro ao enviar mensagem. Tente novamente.'
        });
        console.error('Error sending email:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Title>Entre em Contato</Title>
      <ContactContainer>
        <ContactInfo>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Informações de Contato</h3>
          <ContactItem href="mailto:alekxdias@gmail.com">
            <i className="fas fa-envelope"></i>
            <div>
              <ContactLabel>E-mail</ContactLabel>
              <ContactValue>alekxdias@gmail.com</ContactValue>
            </div>
          </ContactItem>
          <ContactItem href="https://www.linkedin.com/in/alekxdias" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <div>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>linkedin.com/in/alekxdias</ContactValue>
            </div>
          </ContactItem>
          <ContactItem href="https://github.com/alekxDias" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <div>
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>github.com/alekxDias</ContactValue>
            </div>
          </ContactItem>
        </ContactInfo>
        
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Envie uma Mensagem</h3>
          <Input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {formStatus.message && (
            <FormStatusMessage success={formStatus.success}>
              {formStatus.message}
            </FormStatusMessage>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 