// src/CustomModal.js
import React, { useEffect } from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, title, children, buttonText }) => {
  Modal.setAppElement('#root'); // Assure-toi que #root est bien l'élément parent dans le projet utilisateur
  useEffect(() => {
    if (!buttonText){
      setButtonText('Close')
    }
    else{
      setButtonText(buttonText)
    }
  },[buttonText])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
      <button onClick={onRequestClose}>{buttonText}</button>
    </Modal>
  );
};

export default CustomModal;
