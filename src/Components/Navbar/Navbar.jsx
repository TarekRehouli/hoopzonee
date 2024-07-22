import React, { useEffect, useState } from 'react';
import './Navbar.css';
import dark_arrow from '../../assets/dark_arrow.png';

const translations = {
  en: {
    programs: 'Programs',
    about: 'About',
    courts: 'Courts',
    gym: 'Gym',
    connect: 'Connect',
    contact: 'Contact',
    book: 'BOOK',
    searchPlaceholder: 'Search...'
  },
  fr: {
    programs: 'Programmes',
    about: 'À propos',
    courts: 'Terrains',
    gym: 'Salle de sport',
    connect: 'Connecter',
    contact: 'Contact',
    book: 'RÉSERVER',
    searchPlaceholder: 'Rechercher...'
  }
};

const Navbar = ({ language, onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
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
      <a href="#" className="logo">HoopZone</a>
      <ul>
        <li><a href="#programs">{translations[language].programs}</a></li>
        <li><a href="#about">{translations[language].about}</a></li>
        <li><a href="#courts">{translations[language].courts}</a></li>
        <li><a href="#gym">{translations[language].gym}</a></li>
        <li><a href="#connect">{translations[language].connect}</a></li>
        <li>
          <a href="#contact" className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            {translations[language].book} <img src={dark_arrow} alt="" />
          </a>
        </li>
      </ul>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">🔍</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;


