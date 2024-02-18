import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import style from "./css/catalog.module.scss";
import cn from "classnames";
import Button from "../../core/ui/Button";

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
    <Button
      type="button"
      onClick={handleUpButton}
      className={cn(
        style.catalog__button,
        scroll > 700 ? style.show : style.hide
      )}
    >
      <FaArrowUp /> Вверх
    </Button>
  );
};
export default ButtonUp;
