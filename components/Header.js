import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-900">About</a>
          <a href="#experience" className="mr-5 hover:text-gray-900">Experience</a>
          <a href="#projects" className="mr-5 hover:text-gray-900">Projects</a>
          <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
