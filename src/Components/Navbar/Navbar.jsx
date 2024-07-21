import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png'

const translations = {
  en: {
    programs: 'Programs',
    about: 'About',
    courts: 'Courts',
    gym: 'Gym',
    connect: 'Connect',
    contact: 'Contact'
  },
  fr: {
    programs: 'Programmes',
    about: 'À propos',
    courts: 'Terrains',
    gym: 'Salle de sport',
    connect: 'Connecter',
    contact: 'Contact'
  }
};

const Navbar = ({ language }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <img src={logo} alt='' className='logo'/>a>
      <ul>
        <li><a href="#programs">{translations[language].programs}</a></li>
        <li><a href="#about">{translations[language].about}</a></li>
        <li><a href="#courts">{translations[language].courts}</a></li>
        <li><a href="#gym">{translations[language].gym}</a></li>
        <li><a href="#connect">{translations[language].connect}</a></li>
        <li><a href="#contact">{translations[language].contact}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

