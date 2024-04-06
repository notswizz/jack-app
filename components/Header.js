import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src="/coinbase.png" // Assuming your logo is in the public directory
            alt="Coinbase Logo"
            width={50} // Set the width as needed
            height={50} // Set the height as needed
          />
        </div>
        <span className="ml-3 title-font font-medium text-white mb-4 md:mb-0">
          Coinbase Crypto Intelligence & Growth Associate 
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-neon hover:text-gray-300">404-536-7803</a>
          <a className="mr-5 text-white hover:text-neon">Jack Smith</a>
          <a className="mr-5 text-neon hover:text-gray-300">7jackdsmith@gmail.com</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
