import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TeamCard = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: var(--background-light);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, var(--background-light), transparent);
  }
  
  ${TeamCard}:hover & img {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  position: relative;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const MemberRole = styled.p`
  color: var(--secondary-color);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Jacob',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in software development and IT consultancy, Jacob leads our team with vision and expertise.',
    image: '/images/team/jacob.png',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    name: 'Morten',
    role: 'CTO',
    bio: 'Morten brings deep technical expertise and innovative thinking to every project, ensuring our solutions are cutting-edge and robust.',
    image: '/images/team/morten.png',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <TeamContainer id="team">
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our <span>Expert Team</span>
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team of passionate professionals is dedicated to delivering excellence in every project
        </SectionSubtitle>
      </SectionHeader>
      
      <TeamGrid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={member.id}
            variants={fadeInUp}
            custom={index}
          >
            <MemberImage>
              <img src={member.image} alt={member.name} />
            </MemberImage>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
              <SocialLinks>
                <SocialLink 
                  href={member.social.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>in</span>
                </SocialLink>
                <SocialLink 
                  href={member.social.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>𝕏</span>
                </SocialLink>
                <SocialLink 
                  href={member.social.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>GH</span>
                </SocialLink>
              </SocialLinks>
            </MemberInfo>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default TeamSection; 