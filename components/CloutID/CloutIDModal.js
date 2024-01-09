import React from 'react';
import Image from 'next/image';

const CloutIDModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-700 p-4 shadow">
      {/* Images and description */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Image src="/cloutid/cloutidtiers.png" alt="CloutID Tiers" width={200} height={200} />
        <Image src="/cloutid/cloutidprocess.png" alt="CloutID Process" width={200} height={200} />
        {/* Add more images if needed */}
      </div>
      {/* Close button */}
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
      <ul className="list-disc pl-5 mt-4">
        <li>Description of your position at CloutID.</li>
        <li>Additional details about your role and contributions.</li>
        <li>Any achievements or key responsibilities.</li>
      </ul>
    </div>
  );
};

export default CloutIDModal;
