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
          <li>Analyzed potential investment opportunities for BitCreator Capital, a VC fund that invested in projects and creators on the DeSo blockchain.</li>
          <li>Conducted market research and financial analysis to evaluate the feasibility of investments.</li>
          <li>Participated in pitch meetings and presentations to potential investors.</li>
        </ul>
        
        <div className="mt-4 flex justify-between items-center">
          <a href="https://bitcreatorcapital.medium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read Investment Analysis</a>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-purple-400">cloutIDx</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
  <li>Developed domain marketplace to buy and sell usernames on the DeSo (BitClout) blockchain</li>

    <div className="flex justify-center items-center gap-4">  {/* Adjust the gap value as needed */}
      <Image
        src="/cloutid/cloutid.png"
        alt="CloutID"
        width={200}  // Adjust the width as needed
        height={200} // Adjust the height as needed
      />

      <Image
        src="/cloutid/cloutidchart.png"
        alt="CloutID Chart"
        width={300}  // Adjust the width as needed
        height={300} // Adjust the height as needed
      />
    </div>
 
</ul>



      </div>
    );
};

export default BitCreatorCapitalModal;
