import React, { useState } from 'react';
import court_img from '../../assets/support-icon.png';


const FixedIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px', // Adjust the size as needed
    height: '60px', // Adjust the size as needed
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'red',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: add a shadow
    cursor: 'pointer',
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={imageContainerStyle} onClick={handleClick}>
        <img
          src={court_img} // Replace with your image path
          alt="Fixed Icon"
          style={imageStyle}
        />
      </div>
      <LiveChatModal isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
};

export default FixedIcon;

