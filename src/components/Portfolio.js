import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioSection = styled.section `
  padding: 100px 0;
  background: #ffffff;
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

const ProjectsGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)
`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div `
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div `
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3 `
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p `
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div `
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const projectsData = [{
        title: 'E-commerce Platform',
        description: 'EverShop is a full-stack e-commerce platform built using React, Node.js, and MongoDB. It features secure authentication, product browsing, cart management, and Stripe-based payments. Designed with a responsive UI and admin dashboard for managing products, users, and orders.',
        image: '/projects/ecommerce.jpg',
        github: 'https://github.com/Mr-aj33t/Evershop.git',
        demo: 'https://evershop-86oc.onrender.com/'

    },
    {
        title: 'Task Management App',
        description: 'A Task Management App using MYSQL and SQLAlchemy database. Techonology I Use: python, flask freamwork, html, css, js this task management application with real-time updates.',
        image: '/projects/task-manager.jpg',
        github: 'https://github.com/Mr-aj33t/Python_todo_list.git',
        demo: 'https://github.com/Mr-aj33t/Python_todo_list.git'
    },
    {
        title: 'BookStore Platform',
        description: 'A comprehensive web-based bookstore platform developed as a college project. Features include user authentication, book browsing, shopping cart management, and order processing. Built with HTML, Bootstrap, Thymeleaf, Spring Boot, JPA, and MySQL.',
        image: '/projects/bookstore1.png',
        github: 'https://github.com/Mr-aj33t/BookStore_Application.git',
        demo: 'https://github.com/Mr-aj33t/BookStore_Application.git'
    },

    {
        title: 'Dropdown Menu',
        description: 'a dropdown menu using React.js along with HTML, CSS, and JavaScript. The dropdown menu is a common UI component that allows users to choose one option from a list. ',
        image: '/projects/dashboard.jpg',
        github: 'https://github.com/Mr-aj33t/React-Dropdown-menu.git',
        demo: 'https://todo-task-4q4m.onrender.com/'
    },

    {
        title: 'Marvel API Project',
        description: 'SuperHero Hunter is a web application that allows users to search for and learn about different superheroes. It provides detailed information and images for each superhero retrieved from an API. ',
        image: '/projects/1m.png',
        github: 'https://github.com/Mr-aj33t/SuperHero-Hunter.git',
        demo: 'https://superhero-hunter-0d22.onrender.com/'
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return ( <
        PortfolioSection id = "portfolio" >
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
        My Projects <
        /Title> <
        ProjectsGrid > {
            projectsData.map((project, index) => ( <
                ProjectCard key = { project.title }
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
                ProjectImage >
                <
                img src = { project.image }
                alt = { project.title }
                /> < /
                ProjectImage > <
                ProjectContent >
                <
                ProjectTitle > { project.title } < /ProjectTitle> <
                ProjectDescription > { project.description } < /ProjectDescription> <
                ProjectLinks >
                <
                ProjectLink href = { project.github }
                target = "_blank"
                rel = "noopener noreferrer" >
                <
                FaGithub / > GitHub <
                /ProjectLink> <
                ProjectLink href = { project.demo }
                target = "_blank"
                rel = "noopener noreferrer" >
                <
                FaExternalLinkAlt / > Live Demo <
                /ProjectLink> < /
                ProjectLinks > <
                /ProjectContent> < /
                ProjectCard >
            ))
        } <
        /ProjectsGrid> < /
        Container > <
        /PortfolioSection>
    );
};

export default Portfolio;
