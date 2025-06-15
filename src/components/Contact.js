import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section `
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

const ContactGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div ``;

const ContactText = styled.p `
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div `
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)
`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ContactForm = styled(motion.form)
`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label `
  font-size: 0.9rem;
  color: #666;
`;

const Input = styled.input `
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea `
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled(motion.button)
`
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return ( <
        ContactSection id = "contact" >
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
        Get In Touch <
        /Title> <
        ContactGrid >
        <
        ContactInfo >
        <
        ContactText >
        I 'm always interested in hearing about new projects and opportunities.
        Whether you have a question or just want to say hi, feel free to reach out!
        <
        /ContactText> <
        SocialLinks >
        <
        SocialLink href = "https://github.com/Mr-aj33t"
        target = "_blank"
        rel = "noopener noreferrer"
        whileHover = {
            { scale: 1.1 }
        }
        whileTap = {
            { scale: 0.9 }
        } >
        <
        FaGithub / >
        <
        /SocialLink> <
        SocialLink href = "https://www.linkedin.com/in/aj33t-aj/"
        target = "_blank"
        rel = "noopener noreferrer"
        whileHover = {
            { scale: 1.1 }
        }
        whileTap = {
            { scale: 0.9 }
        } >
        <
        FaLinkedin / >
        <
        /SocialLink> <
        SocialLink href = "mailto:ak144817@gmail.com"
        whileHover = {
            { scale: 1.1 }
        }
        whileTap = {
            { scale: 0.9 }
        } >
        <
        FaEnvelope / >
        <
        /SocialLink> < /
        SocialLinks > <
        /ContactInfo> <
        ContactForm onSubmit = { handleSubmit }
        initial = {
            { opacity: 0, x: 50 }
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
        FormGroup >
        <
        Label htmlFor = "name" > Name < /Label> <
        Input type = "text"
        id = "name"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >
        <
        /FormGroup> <
        FormGroup >
        <
        Label htmlFor = "email" > Email < /Label> <
        Input type = "email"
        id = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        /FormGroup> <
        FormGroup >
        <
        Label htmlFor = "message" > Message < /Label> <
        TextArea id = "message"
        name = "message"
        value = { formData.message }
        onChange = { handleChange }
        required /
        >
        <
        /FormGroup> <
        SubmitButton type = "submit"
        disabled = { isSubmitting }
        whileHover = {
            { scale: 1.05 }
        }
        whileTap = {
            { scale: 0.95 }
        } > { isSubmitting ? 'Sending...' : 'Send Message' } <
        /SubmitButton> < /
        ContactForm > <
        /ContactGrid> < /
        Container > <
        /ContactSection>
    );
};

export default Contact;