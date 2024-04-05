import React from 'react';


const Header = () => {
  return (
    <header className="bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 text-neon hover:text-gray-300">404-536-7803</a>
          <a  className="mr-5 text-white hover:text-neon">Jack Smith</a>
          <a className="mr-5 text-neon hover:text-gray-300">7jackdsmith@gmail.com</a>
       
        
       
        </nav>
      </div>
    </header>
  );
};

export default Header;