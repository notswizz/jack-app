import React from 'react';

const BitCreatorCapitalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-700 p-4 shadow">
      {/* Modal content */}
      <h3 className="font-semibold text-gray-300">Analyst</h3>
      <ul className="list-disc pl-5">
        <li>Analyzed potential investment opportunities for BitCreator Capital, a VC fund that invested in projects and creators on the DeSo blockchain.</li>
        <li>Conducted market research and financial analysis to evaluate the feasibility of investments.</li>
        <li>Participated in pitch meetings and presentations to potential investors.</li>
      </ul>
      {/* Modal footer */}
      <div className="mt-4 flex justify-between items-center">
        <a href="https://bitcreatorcapital.medium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read on Medium</a>
        <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default BitCreatorCapitalModal;
