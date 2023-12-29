// src/components/Modal.jsx
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal, formData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Form Submission Modal"
    >
      <h2 className='text-2xl'>Form Submitted Successfully!</h2>
      <p>Details:</p>
      <pre className='m-2'>{JSON.stringify(formData, null, 2)}</pre>
      <button className='bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-600' onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CustomModal;
