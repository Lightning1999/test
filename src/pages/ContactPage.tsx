import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const PageContainer = styled.div`
  padding-top: 2rem;
`;

const HeroSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-light) 100%);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const MapSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-dark);
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
  
  span {
    color: var(--secondary-color);
  }
`;

const MapWrapper = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  height: 450px;
  margin-bottom: 3rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const FAQSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-light);
`;

const FAQContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled(motion.div)`
  background: rgba(10, 25, 41, 0.5);
  border-radius: 12px;
  overflow: hidden;
`;

const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ $isOpen }) => $isOpen ? 'rgba(52, 152, 219, 0.1)' : 'transparent'};
  border-bottom: ${({ $isOpen }) => $isOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const AccordionTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-primary);
`;

const AccordionIcon = styled.span<{ $isOpen: boolean }>`
  color: var(--secondary-color);
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

const AccordionContent = styled(motion.div)`
  padding: 0 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
  
  &.expanded {
    padding: 1.5rem;
  }
`;

// Sample FAQ data
const faqs = [
  {
    id: 1,
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes and across various industries, including finance, healthcare, retail, logistics, and more. Our solutions can be tailored to meet the specific needs of startups, mid-sized companies, and large enterprises alike.'
  },
  {
    id: 2,
    question: 'How long does it typically take to develop a custom software solution?',
    answer: 'The timeline for developing a custom software solution varies depending on the complexity and scope of the project. A simple web application might take 2-3 months, while a complex enterprise system could take 6-12 months or more. During our initial consultation, we\'ll provide a more accurate timeline based on your specific requirements.'
  },
  {
    id: 3,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance services to ensure your software continues to perform optimally. We provide different support packages tailored to your needs, including bug fixes, updates, security patches, and feature enhancements.'
  },
  {
    id: 4,
    question: 'What is your development methodology?',
    answer: 'We primarily follow an Agile development methodology, which allows for flexible planning, evolutionary development, early delivery, and continuous improvement. This approach enables us to adapt to changes quickly and deliver working software in iterative cycles, providing you with visibility and control throughout the development process.'
  },
  {
    id: 5,
    question: 'How do you handle data security and privacy?',
    answer: 'Data security and privacy are our top priorities. We implement robust security measures at every stage of development, following industry best practices and compliance standards like GDPR, HIPAA, or ISO 27001, depending on your industry requirements. We use secure coding practices, encryption, and regular security audits to protect your data.'
  }
];

const ContactPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  
  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <HeroContent>
            <PageTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In <span>Touch</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or ready to start your project? Contact us today and let's discuss
              how we can help bring your ideas to life.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <ContactSection />
        
        <MapSection>
          <MapContainer>
            <SectionTitle>Find <span>Us</span></SectionTitle>
            <MapWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.8557759727213!2d12.56918317687307!3d55.67565997307399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533f6d170e7b%3A0xf0112130063ea9de!2sK%C3%B8benhavn%20K%2C%20Denmark!5e0!3m2!1sen!2sus!4v1682344813146!5m2!1sen!2sus" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="APIDE Office Location"
              ></iframe>
            </MapWrapper>
          </MapContainer>
        </MapSection>
        
        <FAQSection>
          <FAQContainer>
            <FAQHeader>
              <SectionTitle>Frequently Asked <span>Questions</span></SectionTitle>
              <PageDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Find answers to some of the most common questions about our services and processes.
              </PageDescription>
            </FAQHeader>
            
            <AccordionContainer>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionHeader
                    $isOpen={openFAQ === faq.id}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <AccordionTitle>{faq.question}</AccordionTitle>
                    <AccordionIcon $isOpen={openFAQ === faq.id}>+</AccordionIcon>
                  </AccordionHeader>
                  
                  <AccordionContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFAQ === faq.id ? 'auto' : 0,
                      opacity: openFAQ === faq.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={openFAQ === faq.id ? 'expanded' : ''}
                  >
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </AccordionContainer>
          </FAQContainer>
        </FAQSection>
      </PageContainer>
    </Layout>
  );
};

export default ContactPage; 