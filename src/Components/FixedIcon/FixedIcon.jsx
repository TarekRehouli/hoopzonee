import React, { useState } from 'react';
import court_img from '../../assets/support-icon.png';
import './FixedIcon.css'; // Ensure you have this import for styling

const FixedIcon = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const imageContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px', // Adjust the size as needed
    height: '60px', // Adjust the size as needed
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: "red",
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: add a shadow
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div>
      <div style={imageContainerStyle} onClick={handleClick}>
        <img
          src={court_img}
          alt="Fixed Icon"
          style={imageStyle}
        />
      </div>
      {showPhoneNumber && (
        <div className="phone-number">
          <a href="tel:+123456789">📞 +123456789</a>
        </div>
      )}
    </div>
  );
};

export default FixedIcon;

