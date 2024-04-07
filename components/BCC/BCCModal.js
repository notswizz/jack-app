import React from 'react';
import Image from 'next/image';

const BitCreatorCapitalModal = ({ isOpen, onClose }) => {
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
          <h3 className="text-lg font-semibold text-purple-400">Analyst</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
        <li>I was the lead analyst for a 7 figure fund led by Nigel Eccles (Fanduel co-founder)</li>
          <li>Connected with 30+ founders building on the DesO blockchain to evaluate their agenda for potential investment</li>
          <li>Built and presented pitch decks of potential investments up to $100,000</li>
     
        </ul>
        
        <div className="mt-4 flex justify-between items-center">
          <a href="https://bitcreatorcapital.medium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read Investment Analysis</a>
        </div>
       
       



      </div>
    );
};

export default BitCreatorCapitalModal;
