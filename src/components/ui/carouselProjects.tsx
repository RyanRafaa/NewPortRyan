import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

const MyCarousel = () => {
  const slides = [
    {
      content: 
      <img src="/public/proj1.png" alt="1" />
    },
    {
      content: 
      <img src="/public/proj2.png" alt="2" />
    },
    {
      content: 
      <img src="/public/proj3.png" alt="3" />
    },
    {
      content: 
      <img src="/public/proj4.png" alt="4" />
    },



  ];

  const settings = {
    slides,
    showNavigation: true, // Add this line
    offsetRadius: 2,
    slideWidth: 10,
    slideHeight: 10,
    radius: 0,
    
  };

  



  return (
    <div className='w-[80%] b h-[70%] flex flex-col'>
      <Carousel {...settings}  >
        {/* ... seus slides */}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
