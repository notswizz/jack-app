// pages/index.js
import React, { useState } from 'react';
import Header from '../components/Header'
import StarStockListing from '../components/StarStock/StarStockListing';
import StarStockModal from '../components/StarStock/StarStockModal';

const Home = () => {
  const [isStarStockModalOpen, setStarStockModalOpen] = useState(false);

  return (

    <div className="min-h-screen bg-gray-900 text-white">
      <Header/>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">My Experiences</h1>
        {/* StarStock Experience Listing and Modal */}
        <div className="mb-5">
          <StarStockListing onClick={() => setStarStockModalOpen(true)} />
          <StarStockModal isOpen={isStarStockModalOpen} onClose={() => setStarStockModalOpen(false)} />
        </div>
        
        {/* ... You can add more experience listings and modals here ... */}

      </div>
    </div>
  );
};

export default Home;
