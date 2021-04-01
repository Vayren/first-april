import React from 'react';
import UserForm from '../UserForm';

import './CustomModal.css';

const CustomModal = ({ removeModal, onUserAdd }) => {
  return (
    <div className="modal-container">
      <div className="modal-row">
        <button className="close-btn" onClick={removeModal}>X</button>
      </div>
      <div className="modal-row">
        <UserForm removeModal={removeModal} onUserAdd={onUserAdd}/>
      </div>
    </div>
  );
};

export default CustomModal;