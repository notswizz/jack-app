import React from 'react';

const FlickAppModal = ({ isOpen, onClose }) => {
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
          <h3 className="text-lg font-semibold text-green-400">Product Manager/Socials</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Managed the development and growth of Flick, a mobile social media app built on the DeSo blockchain</li>
          <li>Improved user engagement and retention by implementing new features and processes</li>
          <li>Hosted 'lit'' networking events to connect with users, builders and investors on DeSo </li>
        </ul>
      
      </div>
    );
};

export default FlickAppModal;
