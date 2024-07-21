import React from 'react';
import './LiveChatModal.css';

const LiveChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Live Chat Support</h2>
        <textarea placeholder="Type your message here..." rows="5"></textarea>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default LiveChatModal;
