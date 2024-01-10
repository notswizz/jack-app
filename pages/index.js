// pages/index.js
import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '@/components/Footer';
import StarStockListing from '../components/StarStock/StarStockListing';
import StarStockModal from '../components/StarStock/StarStockModal';
import BitCreatorCapitalListing from '../components/BCC/BCCListing';
import BitCreatorCapitalModal from '../components/BCC/BCCModal';
import FlickAppListing from '../components/Flick/FlickListing';
import FlickAppModal from '../components/Flick/FlickModal';
import SplintXListing from '../components/SplintX/SplintXListing';
import SplintXModal from '../components/SplintX/SplintXModal';
import NMListing from '../components/NM/NMListing';
import NMModal from '../components/NM/NMModal';
import SplinterlandsListing from '../components/Splinterlands/SplinterlandsListing';
import SplinterlandsModal from '../components/Splinterlands/SplinterlandsModal';



const Home = () => {
  const [isStarStockModalOpen, setStarStockModalOpen] = useState(false);
  const [isBitCreatorCapitalModalOpen, setBitCreatorCapitalModalOpen] = useState(false);
  const [isFlickAppModalOpen, setFlickAppModalOpen] = useState(false);
  const [isSplintXModalOpen, setSplintXModalOpen] = useState(false);
  const [isNMModalOpen, setNMModalOpen] = useState(false);
  const [isSplinterlandsModalOpen, setSplinterlandsModalOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto py-4"> {/* Reduced vertical padding of container */}
      <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out shadow-lg">
  My Experiences
</h1>

        {/* Use a grid layout to display listings more compactly */}
        <div className="grid grid-cols-1 gap-4"> {/* Reduced gap between grid items */}

         {/* NM  Components */}
         <div>
            <NMListing onClick={() => setNMModalOpen(true)} />
            <NMModal isOpen={isNMModalOpen} onClose={() => setNMModalOpen(false)} />
          </div>

        {/* BitCreator Capital Listing and Modal */}
        <div>
            <BitCreatorCapitalListing onClick={() => setBitCreatorCapitalModalOpen(true)} />
            <BitCreatorCapitalModal isOpen={isBitCreatorCapitalModalOpen} onClose={() => setBitCreatorCapitalModalOpen(false)} />
          </div>
          
          
          {/* StarStock Experience Listing and Modal */}
          <div>
            <StarStockListing onClick={() => setStarStockModalOpen(true)} />
            <StarStockModal isOpen={isStarStockModalOpen} onClose={() => setStarStockModalOpen(false)} />
          </div>
  
        
  
          {/* Flick App Components */}
          <div>
            <FlickAppListing onClick={() => setFlickAppModalOpen(true)} />
            <FlickAppModal isOpen={isFlickAppModalOpen} onClose={() => setFlickAppModalOpen(false)} />
          </div>
  
      {/* SplintX Listing and Modal */}
      <div>
            <SplintXListing onClick={() => setSplintXModalOpen(true)} />
            <SplintXModal isOpen={isSplintXModalOpen} onClose={() => setSplintXModalOpen(false)} />
          </div>

           {/* Splinterlands Listing and Modal */}
      <div>
            <SplinterlandsListing onClick={() => setSplinterlandsModalOpen(true)} />
            <SplinterlandsModal isOpen={isSplinterlandsModalOpen} onClose={() => setSplinterlandsModalOpen(false)} />
          </div>



          {/* ... More experience listings and modals can be added here ... */}
        </div>
      </div>
      <Footer/>
    </div>
  );
  
  
};

export default Home;
