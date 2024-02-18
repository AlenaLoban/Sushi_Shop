import { useState, useEffect } from "react";

let isScrollDown = false;

export const useScrollDirection = () => {
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    const scrollY = window.scrollY;
    //  const scrollY = event.currentTarget?.scrollY;
    if (scrollY > prevOffset && scrollY > 50) isScrollDown = true;
    if (scrollY < prevOffset && scrollY > 50) isScrollDown = false;
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);

    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  });
  
  return isScrollDown;
};
