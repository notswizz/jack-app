import React from 'react';

const Jackx = () => {
  // Updated data with new 'GambleFi' category
  const categories = {
    Chains: ['Base', 'Degen', 'Zora', 'Blast'],
    NFTs: ['NBA Top Shot', 'MLB Champions', 'Paragon', 'Vault'],
    DAOs: ['Aragon', 'Irene', 'Party', 'QPQ'],
    Airdrops: ['Uniswap', 'dYdX', 'ENS', 'Wormhole'],
    Games: ['Splinterlands', 'Wolf Game', 'Crypto - The Game', 'Upland', 'Farm Farmer'],
    SocialFi: ['Farcaster', 'DeSo (Bitclout)', 'Hive (Steem)', 'Friend Tech', 'Lens'],
    Followers: ['andy8052', '0xraceralt', 'mikerainbow', 'DylanAbruscato', 'jacksettleman'],
    GambleFi: ['Setoros', 'IKB', 'Rollbit', 'Proof of Weak Hands', 'Bracket Game'], // New category
  };

  // Render the categories and items
  const renderCategory = (categoryName, items) => {
    return (
      <div className="p-6 bg-gray-200 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{categoryName}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-gray-700 text-sm mb-2">{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl flex flex-wrap justify-center items-start gap-4">
      <h2 className="text-6xl md:text-7xl lg:text font-extrabold text-white w-full text-center mb-12 shadow-xl tracking-tight leading-none animate-pulse">
        My Favorite (decentralized) Things
      </h2>

      {Object.keys(categories).map((category, idx) => (
        <div key={category} className={`flex-auto min-w-80 bg-white rounded-2xl shadow-xl overflow-hidden mx-4 my-2 border-4 ${idx % 2 === 0 ? 'border-blue-500' : 'border-green-500'} transform hover:scale-105 transition duration-300 ease-in-out`}>
          <div className="px-6 py-4 bg-gray-100">
            <h3 className={`font-semibold text-xl mb-2 ${idx % 2 === 0 ? 'text-blue-700' : 'text-green-700'}`}>{category}</h3>
            <ul className="list-inside list-disc space-y-2">
              {categories[category].map((item, index) => (
                <li key={index} className="text-gray-700 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jackx;
