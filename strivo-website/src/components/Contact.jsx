import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import './css/Contact.css';

// Íconos SVG
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const formRef = useRef();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setFormStatus('sending');
    
    try {
      // EmailJS - Reemplazá estos valores con los tuyos
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_abc123', // Reemplazar
          template_id: 'template_xyz789', // Reemplazar
          user_id: 'N9FDGQWkWqtEQnZPP', // Reemplazar
          template_params: {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'No proporcionado',
            company: data.company || 'No proporcionado',
            service: data.service,
            message: data.message,
            to_email: 'strivo.ar@gmail.com'
          }
        })
      });

      if (response.ok) {
        setFormStatus('success');
        reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      {/* Background Effects */}
      <div className="contact-background">
        <div className="contact-gradient-1"></div>
        <div className="contact-gradient-2"></div>
        <div className="contact-grid-pattern"></div>
      </div>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="contact-header" variants={itemVariants}>
          <span className="contact-badge">
            <MailIcon />
            Contacto
          </span>
          <h2 className="contact-title">
            ¿Listo para <span className="gradient-text">Automatizar</span>?
          </h2>
          <p className="contact-subtitle">
            Contanos sobre tu proyecto y te respondemos en menos de 24 horas. 
            También podés agendar una llamada directamente.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Formulario */}
          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className={errors.name ? 'error' : ''}
                    {...register('name', { required: 'El nombre es requerido' })}
                  />
                  {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    className={errors.email ? 'error' : ''}
                    {...register('email', { 
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                  />
                  {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+54 11 1234-5678"
                    {...register('phone')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Nombre de tu empresa"
                    {...register('company')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">¿Qué servicio te interesa? *</label>
                <select 
                  id="service"
                  className={errors.service ? 'error' : ''}
                  {...register('service', { required: 'Seleccioná un servicio' })}
                >
                  <option value="">Seleccioná una opción</option>
                  <option value="whatsapp">Automatización de WhatsApp</option>
                  <option value="crm">Integración CRM</option>
                  <option value="chatbot">Chatbots con IA</option>
                  <option value="ecommerce">Automatización E-commerce</option>
                  <option value="custom">Solución Personalizada</option>
                  <option value="consulta">Consulta General</option>
                </select>
                {errors.service && <span className="error-message">{errors.service.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Contanos sobre tu proyecto, qué procesos querés automatizar, volumen de operaciones, etc."
                  className={errors.message ? 'error' : ''}
                  {...register('message', { 
                    required: 'El mensaje es requerido',
                    minLength: { value: 20, message: 'El mensaje debe tener al menos 20 caracteres' }
                  })}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'idle' && (
                  <>
                    <SendIcon />
                    Enviar Mensaje
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckIcon />
                    ¡Mensaje Enviado!
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    Error - Intentá de nuevo
                  </>
                )}
              </button>
            </form>

            {/* WhatsApp alternativo */}
            <div className="whatsapp-alternative">
              <span>¿Preferís hablar directo?</span>
              <a 
                href="https://wa.me/5493813538897?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20automatización" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <WhatsAppIcon />
                Escribinos por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Info + Calendario */}
          <motion.div className="contact-info-wrapper" variants={itemVariants}>
            {/* Info de contacto */}
            <div className="contact-info-card">
              <h3>Información de Contacto</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon">
                    <MailIcon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Email</span>
                    <a href="mailto:strivo.ar@gmail.com">strivo.ar@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="info-icon">
                    <PhoneIcon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">WhatsApp</span>
                    <a href="https://wa.me/5493813538897" target="_blank" rel="noopener noreferrer">
                      +54 9 381 353-8897
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="info-icon">
                    <LocationIcon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">Ubicación</span>
                    <span>Tucumán, Argentina</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendario */}
            <div className="calendar-card">
              <div className="calendar-header">
                <CalendarIcon />
                <h3>Agendá una Reunión</h3>
              </div>
              <p>Reservá 30 minutos para una consulta gratuita donde analizamos tus procesos.</p>
              <a 
                href="https://calendly.com/strivo-ar/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="calendar-btn"
              >
                <CalendarIcon />
                Ver Horarios Disponibles
              </a>
              
            </div>

            {/* Respuesta rápida */}
            <div className="response-time-card">
              <div className="response-icon">⚡</div>
              <div className="response-content">
                <span className="response-title">Respuesta Rápida</span>
                <span className="response-text">Te respondemos en menos de 24 horas hábiles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;