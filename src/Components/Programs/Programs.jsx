import React, { useState } from 'react';
import './Programs.css';
import court_1 from '../../assets/court_1.jpg';
import court_2 from '../../assets/court_2.jpg';
import court_3 from '../../assets/court_3.jpg';
import court_icon from '../../assets/court_icon.png';

const translations = {
  en: {
    programs: [
      { id: 1, title: 'Interior Court', description: 'An indoor court with all facilities', type: 'Indoor', availability: 'Available', image: court_1 },
      { id: 2, title: 'Exterior Court', description: 'An outdoor court for sunny days', type: 'Outdoor', availability: 'Occupied', image: court_2 },
      { id: 3, title: 'Other', description: 'Other facilities available', type: 'Other', availability: 'Available', image: court_3 },
    ],
  },
  fr: {
    programs: [
      { id: 1, title: 'Court Intérieur', description: 'Un court intérieur avec toutes les installations', type: 'Intérieur', availability: 'Disponible', image: court_1 },
      { id: 2, title: 'Court Extérieur', description: 'Un court extérieur pour les journées ensoleillées', type: 'Extérieur', availability: 'Occupé', image: court_2 },
      { id: 3, title: 'Autre', description: 'Autres installations disponibles', type: 'Autre', availability: 'Disponible', image: court_3 },
    ],
  }
};

const highlightText = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

const Programs = ({ language, searchQuery, selectedFacets }) => {
  const programs = translations[language].programs;

  const filteredPrograms = programs.filter(program => {
    const matchesQuery = !searchQuery || program.title.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFacets = Object.keys(selectedFacets).every(facet => !selectedFacets[facet].length || selectedFacets[facet].includes(program[facet]));

    return matchesQuery && matchesFacets;
  });

  return (
    <div className="programs">
      {filteredPrograms.map(program => (
        <div key={program.id} className="program">
          <img src={program.image} alt={program.title} />
          <div className="caption">
            <img src={court_icon} alt="court icon" />
            <p>{highlightText(program.title, searchQuery)}</p>
            <p>{highlightText(program.description, searchQuery)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;




