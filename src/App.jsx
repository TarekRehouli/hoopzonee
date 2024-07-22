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
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    scrollToSection(query);
  };

  const scrollToSection = (query) => {
    const sections = {
      programs: 'programs',
      about: 'about',
      courts: 'courts',
      gym: 'gym',
      connect: 'connect',
      contact: 'contact'
    };

    const section = sections[query.toLowerCase()];
    if (section) {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '1000', display: 'flex', gap: '5px' }}>
        <button style={{ padding: '2px 5px', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '3px', fontSize: '10px' }} onClick={() => handleLanguageChange('en')}>EN</button>
        <button style={{ padding: '2px 5px', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '3px', fontSize: '10px' }} onClick={() => handleLanguageChange('fr')}>FR</button>
      </div>
      <Navbar language={language} onSearch={handleSearch} />
      <div id="home">
          <Hero language={language} searchQuery={searchQuery} />
        </div>
      <div className="container">
        <FixedIcon />
        <Title subtitle={translations[language].subtitle1} title={translations[language].title1} />
        <div id="programs">
          <Programs language={language} searchQuery={searchQuery} />
        </div>
        <div id="about">
          <About language={language} searchQuery={searchQuery} />
        </div>
        <div id="courts">
          <Courtex language={language} searchQuery={searchQuery} />
        </div>
        <div id="gym">
          <Gym language={language} searchQuery={searchQuery} />
        </div>
        <Title subtitle={translations[language].subtitle2} title={translations[language].title2} />
        <div id="connect">
          <Connect language={language} searchQuery={searchQuery} />
        </div>
        <Title subtitle={translations[language].subtitle3} title={translations[language].title3} />
        <div id="contact">
          <Contact language={language} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;


