import React from 'react';

const FlickAppModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-700 p-4 shadow">
      <h3 className="font-semibold text-gray-300">Product Manager/Socials</h3>
      <ul className="list-disc pl-5">
        <li>Managed the development and growth of Flick, a mobile social media app built on the DeSo blockchain.</li>
        <li>Improved user engagement and retention by implementing new features and processes.</li>
        <li>Collaborated with cross-functional teams to develop and execute product strategy.</li>
      </ul>
      <div className="mt-4 flex justify-between items-center">
        {/* Link to the app or more information */}
        <a href="https://flickapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Flick App</a>
        {/* Close button */}
        <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default FlickAppModal;
