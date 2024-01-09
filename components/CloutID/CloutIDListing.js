import React from 'react';
import Image from 'next/image';

const CloutIDListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-purple-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/cloutid/cloutid.png" alt="CloutID Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-purple-400">CloutID</h2>
        {/* Include the role or position here */}
        <p className="text-lg text-white">Your Role/Position</p>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Adjust with the actual start date */}
        <div className="text-sm text-white-500">Start Date</div>
        <div className="text-xs text-gray-500">e.g., Feb 2022</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Adjust with the actual end date */}
        <div className="text-sm text-white-500">End Date</div>
        <div className="text-xs text-gray-500">e.g., Present</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Include the location here */}
        <div className="text-sm text-white-500">Location</div>
        <div className="text-xs text-gray-500">e.g., New York, NY</div>
      </div>
    </div>
  );
};

export default CloutIDListing;
