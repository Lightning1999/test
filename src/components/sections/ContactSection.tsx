import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ContactContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
  position: relative;
  overflow: hidden;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ContactCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ContactCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactDetail = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ContactLink = styled.a`
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(30, 41, 59, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const FormInput = styled(motion.input)`
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: rgba(10, 25, 41, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const FormTextarea = styled(FormInput).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const FormSubmitWrapper = styled.div`
  margin-top: 2rem;
`;

const ThankYouMessage = styled(motion.div)`
  color: var(--secondary-color);
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to a server
    
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactInfo
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={fadeInLeft}>
            Get In <span>Touch</span>
          </SectionTitle>
          <SectionSubtitle variants={fadeInLeft}>
            Have a project in mind or want to know more about our services? We'd love to hear from you.
          </SectionSubtitle>
          
          <ContactCard
            variants={fadeInLeft}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <ContactCardTitle>📍 Visit Us</ContactCardTitle>
            <ContactDetail>123 Tech Street</ContactDetail>
            <ContactDetail>Copenhagen, Denmark</ContactDetail>
          </ContactCard>
          
          <ContactCard
            variants={fadeInLeft}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <ContactCardTitle>✉️ Email Us</ContactCardTitle>
            <ContactDetail>
              <ContactLink href="mailto:info@apide.com">info@apide.com</ContactLink>
            </ContactDetail>
            <ContactDetail>
              <ContactLink href="mailto:support@apide.com">support@apide.com</ContactLink>
            </ContactDetail>
          </ContactCard>
          
          <ContactCard
            variants={fadeInLeft}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <ContactCardTitle>📞 Call Us</ContactCardTitle>
            <ContactDetail>
              <ContactLink href="tel:+4512345678">+45 123 456 78</ContactLink>
            </ContactDetail>
            <ContactDetail>Mon-Fri, 9:00-17:00 CET</ContactDetail>
          </ContactCard>
        </ContactInfo>
        
        {isSubmitted ? (
          <ThankYouMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Thank You!</h3>
            <p>Your message has been sent. We'll get back to you soon!</p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="primary"
              style={{ marginTop: '2rem' }}
            >
              Send Another Message
            </Button>
          </ThankYouMessage>
        ) : (
          <ContactForm
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                required
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </FormGroup>
            
            <FormSubmitWrapper>
              <Button 
                type="submit" 
                size="large" 
                fullWidth
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </Button>
            </FormSubmitWrapper>
          </ContactForm>
        )}
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection; 