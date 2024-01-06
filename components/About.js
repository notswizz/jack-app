import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center text-center md:text-left md:mr-8">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-neon">Jack Smith</h1>
            <Image src="/jack.png" alt="Jack Smith" width={250} height={250} className="rounded-lg mb-4" />
            <p className="leading-relaxed text-neon">young savage, trapping hard</p>
          </div>
          <Image src="/jackselfie.png" alt="Jack Selfie" width={300} height={500} className="rounded-lg mb-4 md:mb-0" />
        </div>
    
       
      </div>
    </section>
  );
};

export default About;
