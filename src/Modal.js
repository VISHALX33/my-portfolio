// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg mx-4 sm:mx-8">
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{certificate.title}</h3>
        <p className="text-gray-600">{certificate.description}</p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
