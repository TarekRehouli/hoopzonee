import React from 'react';
import './Programs.css';
import court_1 from '../../assets/court_1.jpg';
import court_2 from '../../assets/court_2.jpg';
import court_3 from '../../assets/court_3.jpg';
import court_icon from '../../assets/court_icon.png';

const Programs = ({ language, searchQuery }) => {
  const programs = [
    { id: 1, title: language === 'en' ? 'Interior Court' : 'Court Intérieur', image: court_1 },
    { id: 2, title: language === 'en' ? 'Exterior Court' : 'Court Extérieur', image: court_2 },
    { id: 3, title: language === 'en' ? 'Other' : 'Autre', image: court_3 },
  ];

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="programs">
      {filteredPrograms.map(program => (
        <div key={program.id} className="program">
          <img src={program.image} alt="" />
          <div className="caption">
            <img src={court_icon} alt="" />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;

