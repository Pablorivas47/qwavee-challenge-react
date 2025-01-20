import { useState, useEffect } from 'react';

export const useCarousel = (images: string[], intervalTime: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return currentIndex;
};
