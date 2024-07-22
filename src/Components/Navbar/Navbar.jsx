import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png'

const translations = {
  en: {
    about: 'Home',
    programs: 'Courts',
    connect: 'Connect',
    contact: 'Book',
    searchPlaceholder: 'Search...'
  },
  fr: {
    about: 'Acceuil',
    programs: 'Terrains',
    connect: 'Connecter',
    contact: 'Reserver',
    searchPlaceholder: 'Rechercher...'
  }
};

const Navbar = ({ language }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 75) {
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
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li><a href="#home">{translations[language].about}</a></li>
        <li><a href="#courts">{translations[language].programs}</a></li>
        <li><a href="#connect">{translations[language].connect}</a></li>
       <li><button href="#contact" className='btn' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>{translations[language].contact}</button></li>
      </ul>
      <div className="search-container">
        <form className="search-form" }>
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
          />
          <button type="submit">🔍</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

