import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Nav = styled(motion.nav)
`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${props => props.scrolled ? '#ffffff' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)
`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  cursor: pointer;
  text-decoration: none;
`;

const NavLinks = styled.div `
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)
`
  color: ${props => props.scrolled ? '#333' : '#fff'};
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
  }
`;

const MobileMenuButton = styled.button `
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)
`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavLink = styled(Link)
`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
  }
`;

const ThemeToggle = styled.button `
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Navigation = ({ isDarkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Portfolio', to: 'portfolio' },
        { name: 'Certificate', to: 'Certificate' },
        { name: 'Contact', to: 'contact' },
    ];

    return ( <
        >
        <
        Nav scrolled = { isScrolled }
        initial = {
            { y: -100 }
        }
        animate = {
            { y: 0 }
        }
        transition = {
            { duration: 0.5 }
        } >
        <
        Logo to = "home"
        smooth = { true }
        duration = { 500 }
        scrolled = { isScrolled } >
        Ajeet Kumar <
        /Logo> <
        NavLinks > {
            navItems.map(item => ( <
                NavLink key = { item.to }
                to = { item.to }
                smooth = { true }
                duration = { 500 }
                spy = { true }
                activeClass = "active"
                scrolled = { isScrolled } > { item.name } <
                /NavLink>
            ))
        } <
        ThemeToggle onClick = { toggleTheme }
        scrolled = { isScrolled } > { isDarkMode ? < FaSun / > : < FaMoon / > } <
        /ThemeToggle> < /
        NavLinks > <
        MobileMenuButton onClick = {
            () => setIsMobileMenuOpen(!isMobileMenuOpen)
        }
        scrolled = { isScrolled } > { isMobileMenuOpen ? < FaTimes / > : < FaBars / > } <
        /MobileMenuButton> < /
        Nav > <
        AnimatePresence > {
            isMobileMenuOpen && ( <
                MobileMenu initial = {
                    { opacity: 0, y: -20 }
                }
                animate = {
                    { opacity: 1, y: 0 }
                }
                exit = {
                    { opacity: 0, y: -20 }
                }
                transition = {
                    { duration: 0.3 }
                } >
                <
                MobileNavLinks > {
                    navItems.map(item => ( <
                        MobileNavLink key = { item.to }
                        to = { item.to }
                        smooth = { true }
                        duration = { 500 }
                        spy = { true }
                        activeClass = "active"
                        onClick = {
                            () => setIsMobileMenuOpen(false)
                        } > { item.name } <
                        /MobileNavLink>
                    ))
                } <
                ThemeToggle onClick = { toggleTheme }
                scrolled = { true } > { isDarkMode ? < FaSun / > : < FaMoon / > } <
                /ThemeToggle> < /
                MobileNavLinks > <
                /MobileMenu>
            )
        } <
        /AnimatePresence> < / >
    );
};

export default Navigation;