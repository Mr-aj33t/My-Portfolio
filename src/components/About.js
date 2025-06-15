import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const AboutSection = styled.section `
  padding: 100px 0;
  background: #ffffff;
`;

const Container = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)
`
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const Content = styled.div ``;

const Title = styled(motion.h2)
`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled(motion.p)
`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div `
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

const Skill = styled(motion.div)
`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 2.5rem;
    color: #007bff;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const ContactInfo = styled(motion.div)
`
  margin-bottom: 2rem;

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
    color: #444;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ResumeButton = styled(motion.a)
`
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
`;

const About = () => {
    return ( <
        AboutSection id = "about" >
        <
        Container >
        <
        ImageContainer initial = {
            { opacity: 0, x: -50 }
        }
        whileInView = {
            { opacity: 1, x: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8 }
        } >
        <
        img src = "/profile.jpg"
        alt = "Ajeet Kumar" / >
        <
        /ImageContainer>

        <
        Content >
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
        About Me <
        /Title>

        <
        Description initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8, delay: 0.2 }
        } >
        I 'm a passionate Full Stack Developer with expertise in building modern web applications.
        With a strong foundation in both frontend and backend technologies, I create efficient,
        scalable, and user - friendly solutions that solve real - world problems. <
        /Description>

        <
        SkillsContainer >
        <
        Skill initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8, delay: 0.4 }
        } >
        <
        FaReact / >
        <
        span > React < /span> < /
        Skill >

        <
        Skill initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8, delay: 0.5 }
        } >
        <
        FaNodeJs / >
        <
        span > Node.js < /span> < /
        Skill >

        <
        Skill initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8, delay: 0.6 }
        } >
        <
        FaDatabase / >
        <
        span > Databases < /span> < /
        Skill > <
        /SkillsContainer>

        <
        ContactInfo initial = {
            { opacity: 0, y: 20 }
        }
        whileInView = {
            { opacity: 1, y: 0 }
        }
        viewport = {
            { once: true }
        }
        transition = {
            { duration: 0.8, delay: 0.7 }
        } >
        <
        p > 📞Contact: +91 8429040188 < /p> <
        p > ✉️Email: < a href = "mailto:ajeet11011@gmail.com" > ajeet11011 @gmail.com < /a></p >
        <
        /ContactInfo>

        <
        ResumeButton href = "https://www.overleaf.com/project/6752b2c6b00f8943750cedbd"
        target = "_blank"
        rel = "noopener noreferrer"
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
            { duration: 0.8, delay: 0.8 }
        }
        whileHover = {
            { scale: 1.05 }
        }
        whileTap = {
            { scale: 0.95 }
        } >
        Download Resume <
        /ResumeButton> < /
        Content > <
        /Container> < /
        AboutSection >
    );
};

export default About;