import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import style from "./css/catalog.module.scss";
import cn from "classnames";

const ButtonUp: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      type="button"
      className={cn(style.catalog__button, scroll > 700 ? style.show : "")}
      onClick={handleUpButton}
    >
      <FaArrowUp /> Вверх
    </button>
  );
};
export default ButtonUp;
