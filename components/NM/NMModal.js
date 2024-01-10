import React from 'react';
import Image from 'next/image';

const NMModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white">
      <div className="flex justify-end">
        <button onClick={onClose} className="bg-orange-700 hover:bg-gray-600 rounded-full text-sm p-2">
          <span className="sr-only">Close</span>
          ✕
        </button>
      </div>
      <div className="text-center mb-4">
        <Image src="/nmlogo.png" alt="NM Logo" width={200} height={100} className="mx-auto" />
        <h3 className="text-lg font-semibold text-orange-400">Northwestern Mutual - Financial Advisor</h3>
      </div>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Passed the New York Life and Health Insurance Exam.</li>
        <li>Completed Northwestern Mutual's training program.</li>
        <li>Assisted clients in achieving their financial dreams by providing tailored financial advice and strategies.</li>
      </ul>
      
    </div>
  );
};

export default NMModal;
