import React from 'react';
import { useFormContext } from 'react-hook-form';
import style from '../../scss/index.module.scss';

type IProps = {
  name: string;
  className?: string;
};
const InputError: React.FC<IProps> = ({ name }) => {
  const { formState } = useFormContext();
  return (
    <div className={style.inputError}>
      <>{formState.errors?.[name]?.message}</>
    </div>
  );
};
export default InputError;
