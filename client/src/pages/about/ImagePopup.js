import React from 'react';
import Modal from 'react-modal';
import './ImagePopup.css';

Modal.setAppElement('#root'); // Ini perlu dilakukan agar modal diakses dengan aksesibilitas yang tepat.

const ImagePopup = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Popup"
      className="popup-modal"
      overlayClassName="popup-overlay"
    >
      <div className="popup-content">
        <img src={imageUrl} alt="Popup" className="popup-image" />
        <div className="popup-close" onClick={onClose}>
          Close
        </div>
      </div>
    </Modal>
  );
};

export default ImagePopup;
