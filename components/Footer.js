import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Jack Smith</p>
        <div className="sm:ml-auto sm:mt-0 mt-4 flex justify-center sm:justify-start">
          <a href="https://warpcast.com/notswizz.eth" target="_blank" rel="noopener noreferrer">
            <Image src="/warpcast.png" alt="Warpcast" width={40} height={40} />
          </a>
          <a href="https://github.com/notswizz/jack-app" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Image src="/github.png" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://twitter.com/jackswizz7" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Image src="/x.png" alt="X" width={40} height={40} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
