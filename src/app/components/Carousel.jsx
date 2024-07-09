"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Carousel=() =>{

const [currentIndex, setCurrentIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(false);

const handleNextClick = () => {
  setIsTransitioning(true);
  setTimeout(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsTransitioning(false);
  }, 500);
};

const handlePrevClick = () => {
  setIsTransitioning(true);
  setTimeout(() => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsTransitioning(false);
  }, 500);
};

const images = [
    {
      src: 'https://via.placeholder.com/150',
      alt: 'Image 1',
      caption: 'This is the first image',
    },
    {
      src: 'https://via.placeholder.com/150',
      alt: 'Image 2',
      caption: 'This is the second image',
    },
    {
      src: 'https://via.placeholder.com/150',
      alt: 'Image 3',
      caption: 'This is the third image',
    },
  ];

return (
  <div className="carousel">
    <div className="carousel-inner">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        height={500}
        width={300}
        className={`rounded-lg carousel-image ${isTransitioning ? 'fade' : ''}`}
      />
      <div className="carousel-caption">
        {images[currentIndex].caption}
      </div>
    </div>
    <div className="carousel-controls">
      <button className="carousel-prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="carousel-next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  </div>
);}

export default Carousel