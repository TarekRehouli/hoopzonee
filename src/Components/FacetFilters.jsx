import React from 'react';

const FacetFilters = ({ facets, selectedFacets, onFacetChange }) => {
  const handleChange = (facet, value) => {
    const newSelectedFacets = { ...selectedFacets };
    if (newSelectedFacets[facet].includes(value)) {
      newSelectedFacets[facet] = newSelectedFacets[facet].filter(item => item !== value);
    } else {
      newSelectedFacets[facet].push(value);
    }
    onFacetChange(newSelectedFacets);
  };

  return (
    <div className="facets">
      {Object.keys(facets).map(facet => (
        <div key={facet} className="facet">
          <h4>{facet}</h4>
          {facets[facet].map(value => (
            <label key={value}>
              <input
                type="checkbox"
                checked={selectedFacets[facet].includes(value)}
                onChange={() => handleChange(facet, value)}
              />
              {value}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FacetFilters;

