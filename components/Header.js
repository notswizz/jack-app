import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 body-font border-b-4 border-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/coinbase.png" // Replace with the actual logo path
              alt="Coinbase Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <span className="ml-3 text-xl">
            Coinbase Crypto Intelligence & Growth Associate
          </span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <span className="mx-3 py-1 px-2 text-white rounded">
            404-536-7803
          </span>
          <span className="mx-3 py-1 px-2 text-white rounded">
            Jack Smith
          </span>
          <span className="mx-3 py-1 px-2 text-white rounded">
            7jackdsmith@gmail.com
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
