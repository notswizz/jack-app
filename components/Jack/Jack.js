import React from 'react';
import Image from 'next/image';

const Jack = () => {
  return (
    <div className="text-center p-12">
    <h1 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-text hover:from-green-400 hover:to-blue-500 transition duration-500 ease-in-out">
  Hi, I'm Jack :)
</h1>

      <div className="flex justify-center items-center gap-8 p-4">
  <div className="shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 transform transition duration-500 hover:scale-105">
    <Image
      src="/jackonline.png"
      alt="Jack Online"
      width={500}
      height={500}
      className="object-cover object-center w-full h-full"
    />
  </div>
  <div className="shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 transform transition duration-500 hover:scale-105">
    <Image
      src="/jackselfie.png"
      alt="Jack Selfie"
      width={500}
      height={500}
      className="object-cover object-center w-full h-full"
    />
  </div>
</div>

    </div>
  );
};

export default Jack;
