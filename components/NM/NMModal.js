import React from 'react';
import Image from 'next/image';

const NMModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-800 m-4 p-8 rounded-lg shadow-xl text-white">
      <div className="flex justify-end">
        <button onClick={onClose} className="bg-red-500 hover:bg-gray-600 rounded-full text-sm p-2">
          <span className="sr-only">Close</span>
          ✕
        </button>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-orange-400">Financial Advisor</h3>
      </div>
      <ul className="list-disc list-inside text-base space-y-2">
        <li>Successfully obtained New York Life and Heath Insurance license</li>
        <li>Graduated Northwestern Mutual’s renowned training program</li>
        <li>Developed comprehensive financial plans for clients</li>
      </ul>
    </div>
  );
};

export default NMModal;
