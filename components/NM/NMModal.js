// components/StarStock/StarStockModal.js
import React from 'react';
import Image from 'next/image';

const NMModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-700 p-4 shadow">
      <Image src="/starstock/starstockhome.png" alt="StarStock" width={500} height={500} />
      <h3 className="font-semibold text-gray-300">Product Manager</h3>
      <ul className="list-disc pl-5">
        <li>Managed the development and growth of the Live Breaks product at StarStock, an online marketplace for sportscards.</li>
        <li>Improved customer satisfaction and retention by implementing new features and processes.</li>
        <li>Collaborated with cross-functional teams to develop and execute product strategy.</li>
      </ul>
      <Image src="/starstock/starstockbreaks.gif" alt="StarStock" width={500} height={500} />
      <h3 className="font-semibold text-gray-300">Customer Service/Finance</h3>
      <ul className="list-disc pl-5">
        <li>Provided customer support and handled finance-related tasks at StarStock.</li>
        <li>Assisted customers with inquiries, complaints, and returns.</li>
        <li>Processed payments, refunds, and other financial transactions.</li>
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <a href="https://starstock.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit StarStock</a>
        <button onClick={onClose} className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
};

export default NMModal;
