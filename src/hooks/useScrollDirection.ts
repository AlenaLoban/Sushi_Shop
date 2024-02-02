import { useState, useEffect } from "react";
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    let scrollY = window.scrollY;
    if (scrollY > prevOffset && scrollY > 50) {
      setScrollDirection("down");
    } else if (scrollY < prevOffset && scrollY > 50) {
      setScrollDirection("up");
    } else {
      setScrollDirection("");
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  });
  return scrollDirection;
};
