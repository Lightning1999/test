import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

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

const CultureSection = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
  position: relative;
  overflow: hidden;
`;

const CultureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CultureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CultureContent = styled(motion.div)``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const CultureText = styled.div`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const BenefitIcon = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background-color: rgba(var(--secondary-color-rgb), 0.1);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const BenefitContent = styled.div``;

const BenefitTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const CultureImage = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  height: 100%;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 991px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

const JobsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--background-light);
`;

const JobsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const JobsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const JobFilters = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)<{ $active: boolean }>`
  padding: 0.7rem 1.5rem;
  background: ${({ $active }) => $active ? 'var(--secondary-color)' : 'rgba(30, 41, 59, 0.6)'};
  color: var(--text-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $active }) => $active ? 'var(--secondary-color)' : 'rgba(30, 41, 59, 0.9)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const JobCard = styled(motion.div)`
  background: rgba(10, 25, 41, 0.5);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background: rgba(10, 25, 41, 0.8);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div``;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const JobType = styled.span`
  display: inline-flex;
  align-items: center;
  
  &:before {
    content: '•';
    margin-right: 0.5rem;
    color: var(--secondary-color);
  }
`;

const JobLocation = styled.span`
  display: inline-flex;
  align-items: center;
  
  &:before {
    content: '•';
    margin-right: 0.5rem;
    color: var(--secondary-color);
  }
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ApplySection = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
`;

const ApplyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const ApplyBox = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ApplyTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--secondary-color);
  }
`;

const ApplyDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    location: 'Copenhagen, Denmark',
    department: 'Engineering',
    description: 'We\'re looking for an experienced Full Stack Developer proficient in React, Node.js, and database technologies to join our development team. You\'ll be working on challenging projects for our enterprise clients, designing and implementing scalable software solutions.',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'Copenhagen, Denmark',
    department: 'Design',
    description: 'Join our design team to create captivating user experiences for web and mobile applications. The ideal candidate will have a strong portfolio demonstrating expertise in user-centered design principles, interaction design, and visual design.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'We\'re seeking a DevOps Engineer with experience in cloud infrastructure, CI/CD pipelines, and container orchestration. You\'ll be responsible for building and maintaining our infrastructure, automating deployment processes, and ensuring system reliability.',
  },
  {
    id: 4,
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Copenhagen, Denmark',
    department: 'Management',
    description: 'Experienced Project Manager needed to lead software development projects from conception to delivery. You\'ll collaborate with cross-functional teams, manage client relationships, and ensure projects are delivered on time and within budget.',
  },
  {
    id: 5,
    title: 'Mobile Developer (iOS/Android)',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Looking for a talented Mobile Developer with experience in native iOS (Swift) and/or Android (Kotlin) development. Experience with React Native is a plus. You\'ll be working on developing cutting-edge mobile applications for our clients.',
  },
  {
    id: 6,
    title: 'QA Specialist',
    type: 'Full-time',
    location: 'Copenhagen, Denmark',
    department: 'Engineering',
    description: 'Join our Quality Assurance team to ensure our software solutions meet the highest standards. The ideal candidate will have experience in manual and automated testing, with knowledge of testing methodologies and tools.',
  },
];

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
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
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
      staggerChildren: 0.1
    }
  }
};

const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  
  const handleFilterChange = (department: string) => {
    setActiveFilter(department);
    
    if (department === 'all') {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => job.department.toLowerCase() === department));
    }
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
              Join Our <span>Team</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're always looking for talented individuals to join our growing team. Explore our open
              positions and find your next career opportunity with APIDE.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <CultureSection>
          <CultureContainer>
            <CultureGrid>
              <CultureContent
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SectionTitle>Our <span>Culture</span></SectionTitle>
                <CultureText>
                  <p>
                    At APIDE, we believe that great products are built by great teams. We've fostered a culture that 
                    values collaboration, innovation, and professional growth. Our team members are passionate about 
                    technology and committed to delivering exceptional solutions for our clients.
                  </p>
                  <p>
                    We provide a supportive environment where each team member can thrive, contribute their unique 
                    perspectives, and grow professionally. Working at APIDE means being part of a team that challenges 
                    you, supports you, and celebrates your achievements.
                  </p>
                </CultureText>
                
                <BenefitsList>
                  <BenefitItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <BenefitIcon><Icon name="laptop" variant="rounded" /></BenefitIcon>
                    <BenefitContent>
                      <BenefitTitle>Flexible Work Environment</BenefitTitle>
                      <BenefitDescription>
                        We offer flexible working hours and remote work options to help you maintain a healthy work-life balance.
                      </BenefitDescription>
                    </BenefitContent>
                  </BenefitItem>
                  
                  <BenefitItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BenefitIcon><Icon name="rocket_launch" variant="rounded" /></BenefitIcon>
                    <BenefitContent>
                      <BenefitTitle>Professional Development</BenefitTitle>
                      <BenefitDescription>
                        We invest in your growth with learning resources, conference attendance, and opportunities to work on challenging projects.
                      </BenefitDescription>
                    </BenefitContent>
                  </BenefitItem>
                  
                  <BenefitItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <BenefitIcon><Icon name="groups" variant="rounded" /></BenefitIcon>
                    <BenefitContent>
                      <BenefitTitle>Collaborative Team</BenefitTitle>
                      <BenefitDescription>
                        Work alongside talented professionals who are passionate about creating innovative software solutions.
                      </BenefitDescription>
                    </BenefitContent>
                  </BenefitItem>
                  
                  <BenefitItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <BenefitIcon><Icon name="card_giftcard" variant="rounded" /></BenefitIcon>
                    <BenefitContent>
                      <BenefitTitle>Comprehensive Benefits</BenefitTitle>
                      <BenefitDescription>
                        Enjoy competitive compensation, health insurance, retirement plans, and regular team events.
                      </BenefitDescription>
                    </BenefitContent>
                  </BenefitItem>
                </BenefitsList>
              </CultureContent>
              
              <CultureImage
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/images/clients/apide-512x512.png" alt="APIDE Team Culture" />
              </CultureImage>
            </CultureGrid>
          </CultureContainer>
        </CultureSection>
        
        <JobsSection>
          <JobsContainer>
            <JobsHeader>
              <SectionTitle>Open <span>Positions</span></SectionTitle>
              <PageDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Explore our current openings and find a role that matches your skills and career goals.
              </PageDescription>
            </JobsHeader>
            
            <JobFilters
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FilterButton
                $active={activeFilter === 'all'}
                onClick={() => handleFilterChange('all')}
              >
                All Departments
              </FilterButton>
              <FilterButton
                $active={activeFilter === 'engineering'}
                onClick={() => handleFilterChange('engineering')}
              >
                Engineering
              </FilterButton>
              <FilterButton
                $active={activeFilter === 'design'}
                onClick={() => handleFilterChange('design')}
              >
                Design
              </FilterButton>
              <FilterButton
                $active={activeFilter === 'management'}
                onClick={() => handleFilterChange('management')}
              >
                Management
              </FilterButton>
            </JobFilters>
            
            <JobsList>
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <JobHeader>
                    <JobInfo>
                      <JobTitle>{job.title}</JobTitle>
                      <JobMeta>
                        <JobType>{job.type}</JobType>
                        <JobLocation>{job.location}</JobLocation>
                        <JobType>{job.department}</JobType>
                      </JobMeta>
                    </JobInfo>
                    <Button to={`/careers/${job.id}`} variant="secondary" size="small">
                      View Details
                    </Button>
                  </JobHeader>
                  <JobDescription>{job.description}</JobDescription>
                </JobCard>
              ))}
              
              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}
                >
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>No positions found</h3>
                  <p>There are currently no open positions in this department.</p>
                </motion.div>
              )}
            </JobsList>
          </JobsContainer>
        </JobsSection>
        
        <ApplySection>
          <ApplyContainer>
            <ApplyBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ApplyTitle>Don't See a <span>Fit?</span></ApplyTitle>
              <ApplyDescription>
                We're always interested in meeting talented individuals, even if we don't have a specific role open that matches your skills. Submit your resume, and we'll keep it on file for future opportunities.
              </ApplyDescription>
              <Button 
                to="/contact" 
                variant="primary" 
                size="large"
              >
                Send Speculative Application
              </Button>
            </ApplyBox>
          </ApplyContainer>
        </ApplySection>
      </PageContainer>
    </Layout>
  );
};

export default CareersPage; 