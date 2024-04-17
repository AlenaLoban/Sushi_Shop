import { forwardRef } from 'react';
import style from './scss/auth.module.scss';
import cn from 'classnames';
import { IPropsForInput } from './types';

const InputBox = forwardRef<HTMLInputElement, IPropsForInput>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div
        className={cn(
          style.boxInput,
          props.type === 'file' ? style.hidden : '',
        )}
      >
        <label>{label}</label>
        <input
          {...props}
          ref={ref}
          className={cn(
            style.boxInput__input,
            errorMessage ? style.boxInput__error : '',
          )}
        />
        <div className={style.error}>{errorMessage}</div>
      </div>
    );
  },
);
export default InputBox;
