import React from 'react';
import Image from 'next/image';

const SplintXModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-700 p-4 shadow">
      {/* Link to read more about The Splinterns */}
      <div className="mt-4">
        <a href="https://peakd.com/@splintern" target="_blank" rel="noopener noreferrer" className="text-indigo-500">Read about The Splinterns</a>
      </div>
      {/* SplintX Images */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <Image src="/splintx/splintxlogin.png" alt="SplintX Login" width={200} height={150} />
          <p className="mt-2 text-sm text-gray-500">Login Screen</p>
        </div>
        <div>
          <Image src="/splintx/splintxmarket.png" alt="SplintX Market" width={200} height={150} />
          <p className="mt-2 text-sm text-gray-500">Marketplace</p>
        </div>
        <div>
          <Image src="/splintx/splintxprice.png" alt="SplintX Price" width={200} height={150} />
          <p className="mt-2 text-sm text-gray-500">Price Chart</p>
        </div>
      </div>
      {/* Close button */}
      <div className="flex justify-end mt-4">
        <button onClick={onClose} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default SplintXModal;
