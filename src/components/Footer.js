import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterSection = styled.footer `
  background: #1a1a1a;
  color: white;
  padding: 50px 0 20px;
`;

const Container = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection1 = styled.div ``;

const Logo = styled.h3 `
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p `
  color: #999;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const FooterSection2 = styled.div ``;

const FooterTitle = styled.h4 `
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const NavLinks = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavLink = styled(Link)
`
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const FooterSection3 = styled.div ``;

const SocialLinks = styled.div `
  display: flex;
  gap: 1rem;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a `
  color: #999;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.div `
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
  font-size: 0.9rem;
`;

const Footer = () => {
    return ( <
        FooterSection >
        <
        Container >
        <
        FooterContent >
        <
        FooterSection1 >
        <
        Logo > Ajeet Kumar < /Logo> <
        FooterText >
        Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences. <
        /FooterText> < /
        FooterSection1 > <
        FooterSection2 >
        <
        FooterTitle > Quick Links < /FooterTitle> <
        NavLinks >
        <
        NavLink to = "home"
        smooth = { true }
        duration = { 500 } > Home < /NavLink> <
        NavLink to = "about"
        smooth = { true }
        duration = { 500 } > About < /NavLink> <
        NavLink to = "skills"
        smooth = { true }
        duration = { 500 } > Skills < /NavLink> <
        NavLink to = "portfolio"
        smooth = { true }
        duration = { 500 } > Portfolio < /NavLink> <
        NavLink to = "certificate"
        smooth = { true }
        duration = { 500 } > Certificates < /NavLink> <
        NavLink to = "contact"
        smooth = { true }
        duration = { 500 } > Contact < /NavLink> < /
        NavLinks > <
        /FooterSection2> <
        FooterSection3 >
        <
        FooterTitle > Connect With Me < /FooterTitle> <
        SocialLinks >
        <
        SocialLink href = "https://github.com/Mr-aj33t"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaGithub / >
        <
        /SocialLink> <
        SocialLink href = "https://www.linkedin.com/in/aj33t-aj/"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        FaLinkedin / >
        <
        /SocialLink> <
        SocialLink href = "mailto:ak144817@gmail.com" >
        <
        FaEnvelope / >
        <
        /SocialLink> < /
        SocialLinks > <
        /FooterSection3> < /
        FooterContent > <
        Copyright > ©{ new Date().getFullYear() }
        Ajeet Kumar.All rights reserved. <
        /Copyright> < /
        Container > <
        /FooterSection>
    );
};

export default Footer;