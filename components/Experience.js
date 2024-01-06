import React, { useState } from 'react';
import Image from 'next/image';

const Experience = () => {
  const [openExperienceTab, setOpenExperienceTab] = useState(null);

  const toggleExperienceTab = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (openExperienceTab === index) {
      setOpenExperienceTab(null);
    } else {
      setOpenExperienceTab(index);
    }
  };

  return (
    <section id="experience" className="text-gray-300 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">EXPERIENCE</h2>
          <h1 className="sm:text-3xl text-2xl font-mono title-font text-gray-300">Where I've Worked</h1>
        </div>
        <div className="accordion">
          {/* StarStock */}
          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleExperienceTab(1, e)}>
              <div className="flex items-center">
                <Image src="/starstock/starstock.png" alt="StarStock" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">StarStock - Mamaroneck, NY</h2>
              </div>
            </div>
            {openExperienceTab === 1 && (
              <div className="bg-gray-700 p-4 shadow">
                {/* Accordion content for StarStock */}
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
                <div className="mt-4">
                  <a href="https://starstock.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit StarStock</a>
                </div>
              </div>
            )}
          </div>

          {/* BitCreator Capital */}
          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleExperienceTab(2, e)}>
              <div className="flex items-center">
                <Image src="/bcc/bitcreatorcapital.png" alt="BCC" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">BitCreator Capital - New York, NY</h2>
              </div>
            </div>
            {openExperienceTab === 2 && (
              <div className="bg-gray-700 p-4 shadow">
                {/* Accordion content for BitCreator Capital */}
                <h3 className="font-semibold text-gray-300">Analyst</h3>
                <ul className="list-disc pl-5">
                  <li>Analyzed potential investment opportunities for BitCreator Capital, a VC fund that invested in projects and creators on the DeSo blockchain.</li>
                  <li>Conducted market research and financial analysis to evaluate the feasibility of investments.</li>
                  <li>Participated in pitch meetings and presentations to potential investors.</li>
                </ul>
                <div className="mt-4">
                  <a href="https://bitcreatorcapital.medium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read on Medium</a>
                </div>
              </div>
            )}
          </div>

          {/* Flick App */}
          <div className="mb-2">
            <div className="cursor-pointer bg-gray-800 p-4 flex justify-between items-center shadow-lg" onClick={(e) => toggleExperienceTab(3, e)}>
              <div className="flex items-center">
                <Image src="/bcc/flickapp.png" alt="Flick" width={100} height={100} />
                <h2 className="ml-4 font-semibold text-gray-300">Flick App - New York, NY</h2>
              </div>
            </div>
            {openExperienceTab === 3 && (
              <div className="bg-gray-700 p-4 shadow">
                {/* Accordion content for Flick App */}
                <h3 className="font-semibold text-gray-300">Product Manager/Socials</h3>
                <ul className="list-disc pl-5">
                  <li>Managed the development and growth of Flick, a mobile social media app built on the DeSo blockchain.</li>
                  <li>Improved user engagement and retention by implementing new features and processes.</li>
                  <li>Collaborated with cross-functional teams to develop and execute product strategy.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
