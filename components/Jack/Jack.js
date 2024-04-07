import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

const Jack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center py-14 px-2 md:px-12 bg-gradient-to-r from-blue-500 to-blue-700 animate-gradient-x rounded-b-xl">
        <h1 className="animate-text-wiggle text-2xl md:text-6xl font-extrabold mb-12 tracking-tight text-white">
          Hi, I'm Jack :)
        </h1>
        <div className="flex justify-center items-center gap-8 p-4">
          <div className="flex flex-col items-center">
            <div className="shadow-xl rounded-3xl overflow-hidden border-4 border-black transform transition duration-500 ">
              <Image
                src="/socialjack.png"
                alt="Jack Online"
                width={500}
                height={300}
                className="object-cover object-center "
              />
            </div>
            <button
  className="mt-4 px-6 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border border-blue-700"
  onClick={() => setIsOpen(true)}
>
  Read Cover Letter
</button>

          </div>
          <div className="shadow-xl rounded-3xl overflow-hidden border-4 border-black transform transition duration-500 hover:scale-110">
            <Image
              src="/jackselfie.png"
              alt="Jack Selfie"
              width={300}
              height={300}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-gray-900 shadow-2xl border border-gray-200">
      <Dialog.Title className="text-3xl font-bold mb-6">Jack Smith Coinbase Cover Letter</Dialog.Title>
      <Dialog.Description className="space-y-4 text-lg leading-relaxed">
        <p>Dear Hiring Manager,</p>
        <p>I am eager to express my enthusiasm for the Crypto Intelligence & Growth Associate position at Coinbase. My extensive background in DeFi, NFTs, DAOs, and Web3, coupled with my insatiable curiosity and passion for innovation, positions me as an exemplary candidate. I am deeply committed to staying at the cutting edge of this transformative paradigm, and I am confident that my unique blend of expertise and dedication will make a significant contribution to the Coinbase team.</p>
        <p>My fascination with cryptocurrency can be traced back to my days immersed in Runescape, where the thrill of purchasing items at a low price and selling them for a profit first captured my imagination. This early exposure to virtual economies sparked a relentless pursuit of online financial opportunities. The concept of a permissionless, frictionless system resonated with me profoundly, even before I fully grasped its significance.</p>
        <p>Joining Coinbase would be a dream come true and a pinnacle opportunity for me to fully realize my potential. At this point in my career, I cannot envision a more fitting role. I have long admired Brian Armstrong for his leadership in building and maintaining Coinbase, and I resonate with the same energy and vision under Jesse's leadership as Base moves on-chain. I appreciate your consideration and look forward to hearing back from you.</p>
      </Dialog.Description>
      <button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
    </Dialog.Panel>
  </div>
</Dialog>

    </div>
  );
};

export default Jack;
