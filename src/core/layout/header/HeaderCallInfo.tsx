import React, { useState, useRef } from "react";
import style from "./css/header.module.scss";
import { SlCallIn } from "react-icons/sl";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useOnClickOutside } from "usehooks-ts";

const HeaderCallInfo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (): void => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div className={style.header__bottom__call} ref={ref}>
      <SlCallIn />
      <p>7845</p>
      {open ? (
        <IoIosArrowDown onClick={() => setOpen(!open)} />
      ) : (
        <IoIosArrowUp onClick={() => setOpen(!open)} />
      )}
      {open && (
        <div className={style.header__bottom__call__popup}>
          <div>
            <h4>Прием заказов:</h4>
            <p>пн-чт: 10.30-22.30</p>
            <p>пт-сб: 10.30-23.30</p>
            <p>вс: 10.30-22.30</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderCallInfo;
