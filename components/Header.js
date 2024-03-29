import React from 'react';
import { FaStar, FaSearch, FaUser } from 'react-icons/fa'; // Assuming you're using react-icons

const Header = () => {
  return (
    <header className="bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#experience" className="mr-5 text-neon hover:text-gray-300">404-536-7803</a>
          <a href="#about" className="mr-5 text-neon hover:text-gray-300">Jack Smith</a>
       
       
        
          <FaStar className="text-neon mr-3" />
          <FaSearch className="text-neon mr-3" />
          <FaUser className="text-neon" />
        </nav>
      </div>
    </header>
  );
};

export default Header;