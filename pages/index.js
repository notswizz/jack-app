// pages/index.js
import React, { useState } from 'react';
import Header from '../components/Header'
import StarStockListing from '../components/StarStock/StarStockListing';
import StarStockModal from '../components/StarStock/StarStockModal';
import BitCreatorCapitalListing from '../components/BCC/BCCListing';
import BitCreatorCapitalModal from '../components/BCC/BCCModal';
import FlickAppListing from '../components/Flick/FlickListing';
import FlickAppModal from '../components/Flick/FlickModal';
import SplintXListing from '../components/SplintX/SplintXListing';
import SplintXModal from '../components/SplintX/SplintXModal';
import CloutIDListing from '../components/CloutID/CloutIDListing';
import CloutIDModal from '../components/CloutID/CloutIDModal';

const Home = () => {
  const [isStarStockModalOpen, setStarStockModalOpen] = useState(false);
  const [isBitCreatorCapitalModalOpen, setBitCreatorCapitalModalOpen] = useState(false);
  const [isFlickAppModalOpen, setFlickAppModalOpen] = useState(false);
  const [isSplintXModalOpen, setSplintXModalOpen] = useState(false);
  const [isCloutIDModalOpen, setCloutIDModalOpen] = useState(false);

  return (

    <div className="min-h-screen bg-gray-900 text-white">
      <Header/>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">My Experiences</h1>

         {/* SplintX Listing and Modal */}
      <div className="mb-5">
          <SplintXListing onClick={() => setSplintXModalOpen(true)} />
          <SplintXModal isOpen={isSplintXModalOpen} onClose={() => setSplintXModalOpen(false)} />
        </div>
        
        {/* StarStock Experience Listing and Modal */}
        <div className="mb-5">
          <StarStockListing onClick={() => setStarStockModalOpen(true)} />
          <StarStockModal isOpen={isStarStockModalOpen} onClose={() => setStarStockModalOpen(false)} />
        </div>

         {/* BitCreator Capital Listing and Modal */}
         <div className="mb-5">
          <BitCreatorCapitalListing onClick={() => setBitCreatorCapitalModalOpen(true)} />
          <BitCreatorCapitalModal isOpen={isBitCreatorCapitalModalOpen} onClose={() => setBitCreatorCapitalModalOpen(false)} />
        </div>

         {/* Flick App Components */}
      <div className="mb-5">
        <FlickAppListing onClick={() => setFlickAppModalOpen(true)} />
        <FlickAppModal isOpen={isFlickAppModalOpen} onClose={() => setFlickAppModalOpen(false)} />
      </div>

     
        
         {/* CloutID Listing and Modal */}
      <div className="mb-5">
        <CloutIDListing onClick={() => setCloutIDModalOpen(true)} />
        <CloutIDModal isOpen={isCloutIDModalOpen} onClose={() => setCloutIDModalOpen(false)} />
      </div>
        {/* ... You can add more experience listings and modals here ... */}

      </div>
    </div>
  );
};

export default Home;
