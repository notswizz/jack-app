// components/StarStock/StarStockListing.js
import React from 'react';
import Image from 'next/image';

const NMListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-orange-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/NM.png" alt="NM Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-orange-400">Northwestern Mutual</h2>
        <p className="text-lg text-white">Financial Advisor</p>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Example Start Date Ring Badge */}
        <div className="ring-2 ring-orange-500 text-orange-400 py-1 px-3 rounded-full text-sm">Dec 2022</div>
        <div className="text-xs text-gray-500">Start Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Example End Date Ring Badge */}
        <div className="ring-2 ring-orange-500 text-orange-400 py-1 px-3 rounded-full text-sm">Feb 2024</div>
        <div className="text-xs text-gray-500">End Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Location Filled Badge */}
        <div className="bg-orange-500 text-black py-1 px-3 rounded-full text-sm">New York, NY</div>
        <div className="text-xs text-gray-500">Location</div>
      </div>
    </div>
  );
  
};

export default NMListing;
