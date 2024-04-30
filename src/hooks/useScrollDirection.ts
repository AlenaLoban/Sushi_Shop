import { useState, useEffect } from 'react';

let isScrollDown = false;

export const useScrollDirection = (currentPath: string) => {
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    const scrollY = window.scrollY;
    if (currentPath === '/catalog') {
      if (scrollY > prevOffset && scrollY > 30) isScrollDown = true;
      if (scrollY < prevOffset && scrollY > 30) isScrollDown = false;
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection);

    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  });

  return isScrollDown;
};
