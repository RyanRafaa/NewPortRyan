// InfiniteCarousel.tsx
import React, { useEffect, useState } from 'react';
import './InfiniteCarousel.css';

interface InfiniteCarouselProps {
  logos: string[];
  autoplayInterval?: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ logos, autoplayInterval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length - 4);
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [logos, autoplayInterval]);

  return (
    <div className="infinite-carousel-container">
      <div className="infinite-carousel-track" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
        {logos.map((logo, index) => (
          <div key={index} className="infinite-carousel-logo">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
