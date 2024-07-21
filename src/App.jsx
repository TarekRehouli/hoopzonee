import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Courtex from './Components/Courtex/Courtex';
import Gym from './Components/Gym/Gym';
import Connect from './Components/Connect/Connect';
import Title from './Components/Title/Title';
import FixedIcon from './Components/FixedIcon/FixedIcon';
import Contact from './Components/Contact/Contact';

const translations = {
  en: {
    subtitle1: 'Our Facilities',
    title1: 'What We Offer',
    subtitle2: 'Connect',
    title2: 'Join A Team',
    subtitle3: 'Contact us',
    title3: 'Book A Reservation'
  },
  fr: {
    subtitle1: 'Nos Installations',
    title1: 'Ce Que Nous Offrons',
    subtitle2: 'Connecter',
    title2: 'Rejoindre Une Équipe',
    subtitle3: 'Contactez nous',
    title3: 'Réserver Une Réservation'
  }
};

const App = () => {
  const [language, setLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLa


