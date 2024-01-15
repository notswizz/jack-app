import React from 'react';
import Image from 'next/image';

const SplinterlandsModal = ({ isOpen, onClose }) => {
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
          <h3 className="text-lg font-semibold text-yellow-400">Splinterlands - Executive Assistant</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Worked as an executive assistant, reaching out to potential investors and scheduling meetings.</li>
          <li>Led the Splinterlands tournaments on the platform.</li>
          <li>Reformed the idea to turn the entire platform into more than just a single game.</li>
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <a href="https://splinterlands.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Splinterlands</a>
        </div>
      </div>
    );
};

export default SplinterlandsModal;
