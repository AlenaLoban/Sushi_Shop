import React from 'react';
import style from '../../scss/index.module.scss';

type IProps = {
  children: React.ReactNode;
  label: string;
  name: 'password' | 'email' | 'name' | 'tel' | 'avatar' | 'conf_password';
};
const InputWrapper: React.FC<IProps> = ({ children, label, name }) => {
  return (
    <div className={style.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
};
export default InputWrapper;
