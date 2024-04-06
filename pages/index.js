import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
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
import Jack from '../components/Jack/Jack';
import Jackx from '../components/Jack/0xJack';

import Projects from '../components/Projects/Projects';
import Letter from '../components/Jack/Letter';

const Home = () => {
  const [isStarStockModalOpen, setStarStockModalOpen] = useState(false);
  const [isBitCreatorCapitalModalOpen, setBitCreatorCapitalModalOpen] = useState(false);
  const [isFlickAppModalOpen, setFlickAppModalOpen] = useState(false);
  const [isSplintXModalOpen, setSplintXModalOpen] = useState(false);
  const [isNMModalOpen, setNMModalOpen] = useState(false);
  const [isSplinterlandsModalOpen, setSplinterlandsModalOpen] = useState(false);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold p-5 bg-red-600 rounded-md shadow-lg">
            Please view on desktop :)
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="container mx-auto py-2">
  
        <Jack />
  
        <h1 className="mt-12 text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:from-pink-500 hover:to-orange-500 transition duration-500 ease-in-out shadow-2xl">
  Experiences
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div>
            <NMListing onClick={() => setNMModalOpen(true)} />
            <NMModal isOpen={isNMModalOpen} onClose={() => setNMModalOpen(false)} />
          </div>
          <div>
            <BitCreatorCapitalListing onClick={() => setBitCreatorCapitalModalOpen(true)} />
            <BitCreatorCapitalModal isOpen={isBitCreatorCapitalModalOpen} onClose={() => setBitCreatorCapitalModalOpen(false)} />
          </div>
          <div>
            <StarStockListing onClick={() => setStarStockModalOpen(true)} />
            <StarStockModal isOpen={isStarStockModalOpen} onClose={() => setStarStockModalOpen(false)} />
          </div>
          <div>
            <FlickAppListing onClick={() => setFlickAppModalOpen(true)} />
            <FlickAppModal isOpen={isFlickAppModalOpen} onClose={() => setFlickAppModalOpen(false)} />
          </div>
          <div>
            <SplintXListing onClick={() => setSplintXModalOpen(true)} />
            <SplintXModal isOpen={isSplintXModalOpen} onClose={() => setSplintXModalOpen(false)} />
          </div>
          <div>
            <SplinterlandsListing onClick={() => setSplinterlandsModalOpen(true)} />
            <SplinterlandsModal isOpen={isSplinterlandsModalOpen} onClose={() => setSplinterlandsModalOpen(false)} />
          </div>
          {/* ... More experience listings and modals can be added here ... */}
        </div>
        <Letter/>
        <Jackx/>
        <Projects/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
