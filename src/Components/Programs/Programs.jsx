import React from 'react';
import './Programs.css';
import court_1 from '../../assets/court_1.jpg';
import court_2 from '../../assets/court_2.jpg';
import court_3 from '../../assets/court_3.jpg';
import court_icon from '../../assets/court_icon.png';

const translations = {
  en: {
    programs: [
      { id: 1, title: 'Interior Court', description: 'An indoor court with all facilities', image: court_1 },
      { id: 2, title: 'Exterior Court', description: 'An outdoor court for sunny days', image: court_2 },
      { id: 3, title: 'Other', description: 'Other facilities available', image: court_3 },
    ],
  },
  fr: {
    programs: [
      { id: 1, title: 'Court Intérieur', description: 'Un court intérieur avec toutes les installations', image: court_1 },
      { id: 2, title: 'Court Extérieur', description: 'Un court extérieur pour les journées ensoleillées', image: court_2 },
      { id: 3, title: 'Autre', description: 'Autres installations disponibles', image: court_3 },
    ],
  }
};

const Programs = ({ language, searchQuery }) => {
  const programs = translations[language].programs;

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="programs">
      {filteredPrograms.map(program => (
        <div key={program.id} className="program">
          <img src={program.image} alt={program.title} />
          <div className="caption">
            <img src={court_icon} alt="court icon" />
            <p>{program.title}</p>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;



