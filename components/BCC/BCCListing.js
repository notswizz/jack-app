import React from 'react';
import Image from 'next/image';

const BitCreatorCapitalListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-cyan-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/bcc/bitcreatorcapital.png" alt="BCC Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-cyan-400">BitCreator Capital</h2>
        <p className="text-lg text-white">Strategic Analyst</p>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* If you have start date and other details, add them here similar to the StarStock component */}
        {/* Example Start Date */}
        <div className="text-sm text-white-500">Jan 2021</div>
        <div className="text-xs text-gray-500">Start Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Example End Date */}
        <div className="text-sm text-white-500">Dec 2021</div>
        <div className="text-xs text-gray-500">End Date</div>
      </div>

      <div className="flex-none text-right space-y-2">
        <div className="text-sm text-white-500">New York, NY</div>
        <div className="text-xs text-gray-500">Location</div>
      </div>
      {/* Additional details can be placed here if necessary */}
    </div>
  );
};

export default BitCreatorCapitalListing;
