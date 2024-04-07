import React from 'react';
import Image from 'next/image';

const SplintXModal = ({ isOpen, onClose }) => {
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
          <h3 className="text-lg font-semibold text-yellow-400">Project Lead</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Built SplintX, an NFT marketplace for the #1 most popular blockchain game in the world, Splinterlands</li>
          <li>Led a team of 5 college-age developers from around the world</li>
          <li>Implemented marketing strategy to become profitable and maintain attention</li>
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <a href="https://peakd.com/splinterlands/@splintern/the-splintern-story-how-5-college-students-built-an-nft-marketplace-for-the-1-blockchain-game-in-the-world-or-splintx-com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read about The Splinterns</a>
        </div>
      </div>
    );
};

export default SplintXModal;
