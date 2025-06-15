import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaPencilRuler } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiPython } from 'react-icons/si';
import { DiJava } from 'react-icons/di';


const SkillsSection = styled.section `
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

const SkillsGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)
`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div `
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const SkillName = styled.h3 `
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProgressBar = styled(motion.div)
`
  width: 100%;
  height: 10px;
  background: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1rem;
`;

const Progress = styled(motion.div)
`
  height: 100%;
  background: #007bff;
  border-radius: 5px;
`;

const skillsData = [
    { name: 'Java', icon: < DiJava / > , level: 85 },
    { name: 'HTML5', icon: < FaHtml5 / > , level: 95 },
    { name: 'CSS3', icon: < FaCss3Alt / > , level: 90 },
    { name: 'JavaScript', icon: < SiJavascript / > , level: 90 },
    { name: 'React.js', icon: < FaReact / > , level: 90 },
    { name: 'Node.js', icon: < FaNodeJs / > , level: 85 },
    { name: 'MongoDB', icon: < SiMongodb / > , level: 80 },
    { name: 'MySQL', icon: < SiMysql / > , level: 85 },
    { name: 'Database Design', icon: < FaDatabase / > , level: 85 },
    { name: 'UI/UX Design', icon: < FaPencilRuler / > , level: 85 },
    { name: 'Python', icon: < SiPython / > , level: 85 },

];

const Skills = () => {
    return ( <
        SkillsSection id = "skills" >
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
        Technical Skills <
        /Title> <
        SkillsGrid > {
            skillsData.map((skill, index) => ( <
                SkillCard key = { skill.name }
                initial = {
                    { opacity: 0, y: 20 }
                }
                whileInView = {
                    { opacity: 1, y: 0 }
                }
                viewport = {
                    { once: true }
                }
                transition = {
                    { duration: 0.8, delay: index * 0.1 }
                } >
                <
                SkillIcon > { skill.icon } < /SkillIcon> <
                SkillName > { skill.name } < /SkillName> <
                ProgressBar >
                <
                Progress initial = {
                    { width: 0 }
                }
                whileInView = {
                    { width: `${skill.level}%` }
                }
                viewport = {
                    { once: true }
                }
                transition = {
                    { duration: 1, delay: 0.5 + index * 0.1 }
                }
                /> < /
                ProgressBar > <
                /SkillCard>
            ))
        } <
        /SkillsGrid> < /
        Container > <
        /SkillsSection>
    );
};

export default Skills;