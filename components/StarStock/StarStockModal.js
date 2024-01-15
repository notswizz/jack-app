// components/StarStock/StarStockModal.js
import React from 'react';
import Image from 'next/image';

const StarStockModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
      <div className="bg-gray-800 m-4 p-8 rounded-lg shadow-xl text-white">
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-red-500 hover:bg-gray-600 rounded-full text-sm p-2">
            <span className="sr-only">Close</span>
            ✕
          </button>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-blue-400">StarStock - Product Manager</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Managed the development and growth of the Live Breaks product at StarStock, an online marketplace for sportscards.</li>
          <li>Improved customer satisfaction and retention by implementing new features and processes.</li>
          <li>Collaborated with cross-functional teams to develop and execute product strategy.</li>
        </ul>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-blue-400">StarStock - Customer Service/Finance</h3>
        </div>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Provided customer support and handled finance-related tasks at StarStock.</li>
          <li>Assisted customers with inquiries, complaints, and returns.</li>
          <li>Processed payments, refunds, and other financial transactions.</li>
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <a href="https://starstock.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit StarStock</a>
        </div>
      </div>
    );
};

export default StarStockModal;
