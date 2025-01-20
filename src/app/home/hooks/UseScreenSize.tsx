import { useState, useEffect } from 'react';

export const useScreenSize = (width: number) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth >= width);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return isWideScreen;
};
