import React from 'react';
import Image from 'next/image';

const SplintXListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-yellow-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/splintx/splintx.png" alt="SplintX Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-yellow-400">SplintX</h2>
        <p className="text-lg text-white">Founder</p>
        {/* Additional text can be added here */}
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Adjust with the actual start date */}
        <div className="text-sm text-white-500">Feb 2021</div>
        <div className="text-xs text-gray-500">Start Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Adjust with the actual end date */}
        <div className="text-sm text-white-500">Dec 2022</div>
        <div className="text-xs text-gray-500">End Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Include the location here */}
        <div className="text-sm text-white-500">New York, NY</div>
        <div className="text-xs text-gray-500">Location</div>
      </div>
    </div>
  );
};

export default SplintXListing;