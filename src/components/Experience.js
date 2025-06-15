import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section `
  padding: 100px 0;
  background: #f8f9fa;
`;

const Container = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(motion.h2)
`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

const Timeline = styled.div `
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #007bff;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)
`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    left: 0;
  }
`;

const TimelineContent = styled.div `
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #007bff;
    border: 4px solid white;
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -60px' : 'left: -60px'};
    transform: translateY(-50%);

    @media (max-width: 768px) {
      left: -50px;
    }
  }
`;

const Date = styled.div `
  font-size: 0.9rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3 `
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Company = styled.h4 `
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p `
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const TechStack = styled.div `
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span `
  background: #e9ecef;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #666;
`;

const experienceData = [{
        date: '6 June 2025 - Present',
        role: 'Web Design & Development ',
        company: 'Skill India',
        description: 'Successfully completed the Web Design & Development certification under the Skill India initiative. Gained hands-on experience in HTML, CSS, JavaScript, responsive web design, and basic UI/UX principles. The program focused on building dynamic websites, understanding client requirements, and implementing front-end best practices. ',
        technologies: ['HTML', 'CSS', 'Photoshop', 'UI/UX']
    },
    {
        date: '6 Jan 2025',
        role: 'AWS Certified Advanced Networking',
        company: 'Udemy',
        description: 'Completed a certification course focused on advanced AWS networking concepts, including VPC design, hybrid connectivity, routing, and network security.',
        technologies: ['Amazon Web Services', 'Networking ']
    },
    {
        date: '5 Jan 2025',
        role: 'Python Programming',
        company: 'Udemy.',
        description: 'Completed a practical Python course focused on hands-on projects, covering core programming concepts, problem-solving, and real-world coding applications.',
        technologies: ['Python Programming', 'Flask', 'Data Structures']
    },
    {
        date: '9 Dec 2024 - 20 Dec 2024',
        role: 'Cyber Securty',
        company: 'Indian Space Research Organisation (ISRO).',
        description: 'Completed a certified Cyber Security training program from ISRO, where I gained in-depth knowledge of network security, threat detection, cryptography, ethical hacking, and secure communication, enabling me to build safer and more resilient web applications.',
        technologies: ['Cyber Securty']
    },
    {
        date: '2022 - 2023',
        role: 'Full Stack Developer',
        company: 'Coding Ninjas.',
        description: 'Successfully completed a comprehensive Full Stack Web Development course, gaining hands-on experience in building dynamic web applications. Learned and applied front-end technologies like HTML, CSS, JavaScript, React.js, and mastered back-end development using Node.js, Express.js, and databases like MongoDB and SQL. Also strengthened core programming concepts with Java.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    },

];

const Experience = () => {
    return ( <
        ExperienceSection id = "Certifications" >
        <
        Container >
        <
        Title initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8 }
        } >
        Certifications <
        /Title> <
        Timeline > {
            experienceData.map((experience, index) => ( <
                TimelineItem key = { index }
                position = { index % 2 === 0 ? 'left' : 'right' }
                initial = {
                    { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                whileInView = {
                    { opacity: 1, x: 0 }
                }
                viewport = {
                    { once: true }
                }
                transition = {
                    { duration: 0.8, delay: index * 0.2 }
                } >
                <
                TimelineContent position = { index % 2 === 0 ? 'left' : 'right' } >
                <
                Date > { experience.date } < /Date> <
                Role > { experience.role } < /Role> <
                Company > { experience.company } < /Company> <
                Description > { experience.description } < /Description> <
                TechStack > {
                    experience.technologies.map(tech => ( <
                        Tech key = { tech } > { tech } < /Tech>
                    ))
                } <
                /TechStack> < /
                TimelineContent > <
                /TimelineItem>
            ))
        } <
        /Timeline> < /
        Container > <
        /ExperienceSection>
    );
};

export default Experience;