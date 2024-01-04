import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';

const MyCarousel = () => {
  const slides = [
    {
      content: 
      <img src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png" alt="1" />
    },
    {
      content: <div className='bg-blue-500 w-full h-full'>2</div>
      // <img src="https://picsum.photos/800/800/?random" alt="2" />
    },
    {
      content: <div className='bg-purple-500 w-30 h-30'>3</div>
      // <img src="https://picsum.photos/600/800/?random" alt="3" />
    },
    {
      content: <div className='bg-green-500 w-30 h-30'>4</div>
      // <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      content: <div className='bg-yellow-500 w-30 h-30'>5</div>
      // <img src="https://picsum.photos/800/800/?random" alt="5" />
    },
    {
      content: <div className='bg-cyan-500 w-30 h-30'>6</div>
      // <img src="https://picsum.photos/500/800/?random" alt="6" />
    }
  ];

  const settings = {
    slides,
    showNavigation: false, // Add this line
    offsetRadius: 2,
    slideWidth: 1,
    slideHeight: 1,
    radius: 2,
    
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='w-[80%] h-[90%] flex flex-col gap-8'>
      <Carousel {...settings} goToSlide={activeIndex}>
        {/* ... seus slides */}
      </Carousel>

      <div className='w-full flex justify-center' >
        <button  onClick={prevSlide}>
          Prev
        </button>
        <button onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
