import React, { useState } from 'react';
import Image from 'next/image';

const About = () => {
  // Use state to track whether the image is hovered
 

  return (
    <section id="about" className="text-gray-600 body-font">
      <div
        className={`container mx-auto flex px-5 py-24 items-center justify-center flex-col `}
      
      >
       

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Jack Smith</h1>
          <p className="mb-8 leading-relaxed">[Brief intro or professional summary]</p>
        </div>
      </div>
    </section>
  );
};

export default About;
