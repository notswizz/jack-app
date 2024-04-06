import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
  <button
  className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
  onClick={() => setIsOpen(true)}
>
  Cover Letter
</button>


      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl rounded-lg bg-white p-8 text-gray-900 shadow-xl">
  <Dialog.Title className="text-2xl font-bold mb-4">Cover Letter</Dialog.Title>
  <Dialog.Description className="space-y-4 text-lg">
    <p>Dear Hiring Manager,</p>
    <p>I am eager to express my enthusiasm for the Crypto Intelligence & Growth Associate position at Coinbase. My extensive background in DeFi, NFTs, DAOs, and Web3, coupled with my insatiable curiosity and passion for innovation, positions me as an exemplary candidate. I am deeply committed to staying at the cutting edge of this transformative paradigm, and I am confident that my unique blend of expertise and dedication will make a significant contribution to the Coinbase team.</p>
    <p>My fascination with cryptocurrency can be traced back to my days immersed in Runescape, where the thrill of purchasing items at a low price and selling them for a profit first captured my imagination. This early exposure to virtual economies sparked a relentless pursuit of online financial opportunities. The concept of a permissionless, frictionless system resonated with me profoundly, even before I fully grasped its significance.</p>
    <p>Joining Coinbase would be a dream come true and a pinnacle opportunity for me to fully realize my potential. At this point in my career, I cannot envision a more fitting role. I have long admired Brian Armstrong for his leadership in building and maintaining Coinbase, and I resonate with the same energy and vision under Jesse's leadership as Base moves on-chain. I appreciate your consideration and look forward to hearing back from you.</p>
  </Dialog.Description>
  <button
    className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-300"
    onClick={() => setIsOpen(false)}
  >
    Close
  </button>
</Dialog.Panel>

        </div>
      </Dialog>
    </>
  );
};

export default Letter;
