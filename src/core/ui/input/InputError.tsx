import React from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import style from '../../scss/index.module.scss';
import { Inputs } from '../../../features/auth/types';

type IProps = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<Inputs>> | undefined;
};
const InputError: React.FC<IProps> = ({ error }) => {
  return (
    <div className={style.inputError}>
      {error?.message}
    </div>
  );
};
export default InputError;
