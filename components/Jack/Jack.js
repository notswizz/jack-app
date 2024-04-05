import React from 'react';
import Image from 'next/image';

const Jack = () => {
  return (
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold mb-8">Hi, I'm Jack :) </h1>
      <div className="flex justify-center items-center gap-8">
        <Image
          src="/jackonline.png"
          alt="Jack Online"
          width={700}
          height={300}
        />
        <Image
          src="/jackselfie.png"
          alt="Jack Selfie"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Jack;
