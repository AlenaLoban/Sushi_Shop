import React, { useState, useRef } from 'react';
import style from '../scss/header.module.scss';
import { SlCallIn } from 'react-icons/sl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useClickOutSide } from '../../../../hooks/useClickOutside';

const HeaderCallInfo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (): void => setOpen(false);
  useClickOutSide(handleClickOutside, ref);

  return (
    <div className={style.header__bottom__call} ref={ref}>
      <SlCallIn />
      <a href="tel:#7845">7845</a>
      <p
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </p>

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
