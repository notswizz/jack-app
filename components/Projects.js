import React, { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [openProjectsTab, setOpenProjectsTab] = useState(null);

  const toggleProjectsTab = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (openProjectsTab === index) {
      setOpenProjectsTab(null);
    } else {
      setOpenProjectsTab(index);
    }
  };

  return (
    <section id="projects" className="text-gray-300 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PROJECTS</h2>
          <h1 className="sm:text-3xl text-2xl font-mono title-font text-gray-300">My Portfolio</h1>
        </div>
        <div className="accordion">
          {/* SplintX */}
          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleProjectsTab(4, e)}>
              <div className="flex items-center">
                <Image src="/splintx/splintx.png" alt="SplintX Logo" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">SplintX</h2>
              </div>
            </div>
            {openProjectsTab === 4 && (
              <div className="bg-gray-700 p-4 shadow">
                {/* Accordion content for SplintX */}
                <div className="mt-4">
                  <a href="https://peakd.com/@splintern" target="_blank" rel="noopener noreferrer" className="text-indigo-500">Read about The Splinterns</a>
                </div>
                {/* SplintX Images */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Image src="/splintx/splintxlogin.png" alt="SplintX Login" width={200} height={150} />
                    <p className="mt-2 text-sm text-gray-500">Login Screen</p>
                  </div>
                  <div>
                    <Image src="/splintx/splintxmarket.png" alt="SplintX Market" width={200} height={150} />
                    <p className="mt-2 text-sm text-gray-500">Marketplace</p>
                  </div>
                  <div>
                    <Image src="/splintx/splintxprice.png" alt="SplintX Price" width={200} height={150} />
                    <p className="mt-2 text-sm text-gray-500">Price Chart</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CloutID */}
          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleProjectsTab(5, e)}>
              <div className="flex items-center">
                <Image src="/cloutid/cloutid.png" alt="CloutID Logo" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">cloutIDx</h2>
              </div>
            </div>
            {openProjectsTab === 5 && (
              <div className="bg-gray-700 p-4 shadow">
                {/* Accordion content for CloutID */}
                <Image src="/cloutid/cloutidtiers.png" alt="CloutID Tiers" width={200} height={200} />
                <Image src="/cloutid/cloutidprocess.png" alt="CloutID Process" width={200} height={200} />
                <Image src="/cloutid/cloutidcard.png" alt="CloutID Card" width={200} height={200} />
                <Image src="/cloutid/cloutidchart.png" alt="CloutID Chart" width={200} height={200} />
                <Image src="/cloutid/cloutidlogo.png" alt="CloutID Logo" width={200} height={200} />
                <ul>
                  <li>Description of your position at CloutID.</li>
                  <li>Additional details about your role and contributions.</li>
                  <li>Any achievements or key responsibilities.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleProjectsTab(6, e)}>
              <div className="flex items-center">
                <Image src="/tsa/tsalogo.png" alt="TSA Logo" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">The Smith Agency</h2>
              </div>
            </div>
            {openProjectsTab === 6 && (
              <div className="bg-gray-700 p-4 shadow">
                
              </div>
            )}
          </div>
          {/* Additional project sections can be added here with similar structure and styling */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
