import React from 'react';

const Projects = () => {
  const projectImages = [
    'degenlogo1.png',
    'Zone6.png',
    'flicknyc.png',
    'BCLTjack.png',
    'niftybball.png',
    'ihatedeso.png'
    
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={`/${image}`} alt={`Project ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
