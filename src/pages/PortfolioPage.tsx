import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import ClientsSection from '../components/sections/ClientsSection';

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

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-dark);
`;

const ProjectFilters = styled(motion.div)`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ClientBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(10, 25, 41, 0.8);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const TechBadges = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const TechBadge = styled.span`
  background: var(--secondary-color);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  color: white;
  font-weight: 500;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.span`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Enterprise Resource Planning System',
    description: 'Custom ERP solution for streamlining business operations, including inventory management, HR, and finance modules.',
    image: '/images/clients/apide-512x512.png',
    client: 'TDC',
    year: '2023',
    category: 'custom-software',
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Mobile Banking Application',
    description: 'Secure and user-friendly mobile banking app with biometric authentication and real-time transaction tracking.',
    image: '/images/clients/apide-512x512.png',
    client: 'CryptEra',
    year: '2022',
    category: 'mobile-app',
    technologies: ['React Native', 'Spring Boot', 'MongoDB']
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with product management, payment processing, and customer analytics.',
    image: '/images/clients/apide-512x512.png',
    client: 'Nassau',
    year: '2022',
    category: 'web-development',
    technologies: ['Vue.js', 'Laravel', 'MySQL']
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'Integrated healthcare management system for patient records, appointment scheduling, and billing management.',
    image: '/images/clients/apide-512x512.png',
    client: 'Bispebjerg',
    year: '2021',
    category: 'custom-software',
    technologies: ['Angular', '.NET Core', 'SQL Server']
  },
  {
    id: 5,
    title: 'Fleet Management Solution',
    description: 'Real-time fleet tracking and management system with route optimization and maintenance scheduling.',
    image: '/images/clients/apide-512x512.png',
    client: 'Falck',
    year: '2021',
    category: 'web-development',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 6,
    title: 'Gaming Platform',
    description: 'Interactive gaming platform with user profiles, achievements, and in-game purchases.',
    image: '/images/clients/apide-512x512.png',
    client: 'Danske Spil',
    year: '2020',
    category: 'web-development',
    technologies: ['Unity', 'C#', 'Firebase']
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
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

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
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
              Our <span>Portfolio</span>
            </PageTitle>
            <PageDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our successful projects and see how we've helped businesses across various industries
              achieve their digital transformation goals.
            </PageDescription>
          </HeroContent>
        </HeroSection>
        
        <ProjectsSection>
          <ProjectFilters
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FilterButton
              $active={activeFilter === 'all'}
              onClick={() => handleFilterChange('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Projects
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'custom-software'}
              onClick={() => handleFilterChange('custom-software')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Custom Software
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'web-development'}
              onClick={() => handleFilterChange('web-development')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Web Development
            </FilterButton>
            <FilterButton
              $active={activeFilter === 'mobile-app'}
              onClick={() => handleFilterChange('mobile-app')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mobile Apps
            </FilterButton>
          </ProjectFilters>
          
          <ProjectsGrid
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ClientBadge>{project.client}</ClientBadge>
                  <TechBadges>
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <TechBadge key={index}>{tech}</TechBadge>
                    ))}
                  </TechBadges>
                </ProjectImage>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectFooter>
                    <Year>{project.year}</Year>
                    <Button to={`/portfolio/${project.id}`} variant="text" size="small">
                      View Details →
                    </Button>
                  </ProjectFooter>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>
        
        <ClientsSection />
      </PageContainer>
    </Layout>
  );
};

export default PortfolioPage; 