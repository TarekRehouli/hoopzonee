import React from 'react';
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
  return (
    <nav className="navbar">
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li><a href="#programs">{translations[language].programs}</a></li>
        <li><a href="#about">{translations[language].about}</a></li>
        <li><a href="#courtex">{translations[language].courts}</a></li>
        <li><a href="#gym">{translations[language].gym}</a></li>
        <li><a href="#connect">{translations[language].connect}</a></li>
        <li><a href="#contact">{translations[language].contact}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
