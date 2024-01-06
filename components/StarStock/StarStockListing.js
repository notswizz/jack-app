// components/StarStock/StarStockListing.js
import React from 'react';
import Image from 'next/image';

const StarStockListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-blue-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/starstock/starstock.png" alt="StarStock Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-blue-400">StarStock</h2>
        <p className="text-lg text-white">Product Manager</p>
      </div>
      <div className="flex-none text-right space-y-2">
        <div className="text-sm text-white-500">Jan 2021</div>
        <div className="text-xs text-gray-500">Start Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        <div className="text-sm text-white-500">May 2022</div>
        <div className="text-xs text-gray-500">End Date</div>
      </div>
     
      <div className="flex-none text-right space-y-2">
        <div className="text-sm text-gray-500">Mamaroneck, NY</div>
        <div className="text-xs text-gray-500">Location</div>
      </div>
    </div>
  );
};

export default StarStockListing;
