import React from 'react';
import Image from 'next/image';

const Imagewithdes = () => {
  // Dummy data
  const imageUrl = 'https://via.placeholder.com/500x300';
  const description = 'This is a sample image with a description.';

  return (
    <div className="flex flex-col items-center space-y-8 px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="max-w-md">
        <Image
          src={imageUrl}
          alt="Image with Description"
          className="w-full rounded-lg shadow-md"
          width="500"
          height="300"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Image Title</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Imagewithdes;