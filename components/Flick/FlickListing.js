import React from 'react';
import Image from 'next/image';

const FlickAppListing = ({ onClick }) => {
  return (
    <div className="cursor-pointer bg-black p-6 flex items-center space-x-6 shadow-2xl hover:shadow-green-600/50 transition-shadow duration-300 ease-in-out rounded-xl" onClick={onClick}>
      <div className="flex-none">
        <Image src="/bcc/flickapp.png" alt="Flick Logo" width={64} height={64} className="rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-green-400">Flick App</h2>
        <p className="text-lg text-white">Product Manager/Socials</p>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Example Start Date Ring Badge */}
        <div className="ring-2 ring-green-500 text-green-400 py-1 px-3 rounded-full text-sm">Jan 2022</div>
        <div className="text-xs text-gray-500">Start Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Example End Date Ring Badge */}
        <div className="ring-2 ring-green-500 text-green-400 py-1 px-3 rounded-full text-sm">Present</div>
        <div className="text-xs text-gray-500">End Date</div>
      </div>
      <div className="flex-none text-right space-y-2">
        {/* Location Filled Badge */}
        <div className="bg-green-500 text-black py-1 px-3 rounded-full text-sm">New York, NY</div>
        <div className="text-xs text-gray-500">Location</div>
      </div>
    </div>
  );
  
};

export default FlickAppListing;
