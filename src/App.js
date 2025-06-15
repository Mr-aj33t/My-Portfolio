import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  primary: '#007bff',
  secondary: '#6c757d',
  accent: '#17a2b8',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#007bff',
  secondary: '#6c757d',
  accent: '#17a2b8',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#343a40',
  dark: '#f8f9fa',
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
