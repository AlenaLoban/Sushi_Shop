import { useState } from 'react';
import style from './scss/auth.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';
import { IPropsForInput } from './types';
import { LuEye, LuEyeOff } from 'react-icons/lu';

const InputPassword = forwardRef<HTMLInputElement, IPropsForInput>(
  ({ label, errorMessage, ...props }, ref) => {
    const [showPass, setShowPass] = useState(false);
    return (
      <div className={cn(style.boxInput)}>
        {}
        <label>{label}</label>
        <input
          {...props}
          ref={ref}
          type={showPass ? 'text' : 'password'}
          className={cn(
            style.boxInput__input,
            errorMessage ? style.boxInput__error : '',
          )}
        />
        <div
          className={style.boxInput__eye}
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <LuEye size={20} /> : <LuEyeOff size={20} />}
        </div>

        <div className={style.error}>{errorMessage}</div>
      </div>
    );
  },
);
export default InputPassword;
