import React from 'react';
import style from '../../scss/index.module.scss';

type IProps = {
  children: React.ReactNode;
};
const InputError: React.FC<IProps> = ({ children }) => {
  return <div className={style.inputError}>{children}</div>;
};
export default InputError;
