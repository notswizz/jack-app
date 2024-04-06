import React from 'react';
import Image from 'next/image';

const Jack = () => {
  return (
    <div className="text-center py-12 px-4 md:px-12 bg-gradient-to-r from-blue-500 to-blue-700 animate-gradient-x rounded-b-xl">
    <h1 className="animate-text-wiggle text-6xl md:text-8xl font-extrabold mb-12 tracking-tight text-white">
  Hi, I'm Jack :)
</h1>


      <div className="flex justify-center items-center gap-8 p-4">
        <div className="shadow-xl rounded-3xl overflow-hidden border-4 border-black transform transition duration-500 hover:scale-110">
          <Image
            src="/socialjack.png"
            alt="Jack Online"
            width={400}
            height={400}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="shadow-xl rounded-3xl overflow-hidden border-4 border-black transform transition duration-500 hover:scale-110">
          <Image
            src="/jackselfie.png"
            alt="Jack Selfie"
            width={400}
            height={400}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Jack;
