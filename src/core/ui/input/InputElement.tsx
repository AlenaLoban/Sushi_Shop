import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import style from '../../scss/index.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { Inputs } from '../../../features/auth/types';

type IProps = {
  type: 'password' | 'tel' | 'text' | 'radio' | 'email' | 'file';
  name: 'password' | 'email' | 'name' | 'tel' | 'avatar' | 'conf_password';
  className?: string;
  accept?: string;
  placeholder?: string;
  hiddenInputRef?: React.MutableRefObject<HTMLElement | null>;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<Inputs> | undefined;
};

const InputElement: React.FC<IProps> = ({
  error,
  register,
  name,
  type,
  hiddenInputRef,
  ...props
}) => {
  const { ref: registerRef, ...rest } = register(name);
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <input
        ref={e => {
          registerRef(e);
          if (type === 'file' && hiddenInputRef) hiddenInputRef.current = e;
        }}
        {...rest}
        {...props}
        type={showPass && type === 'password' ? 'text' : type}
        className={cn(
          style.inputElem,
          error ? style.inputElem__error : '',
          type === 'file' ? style.hidden : '',
        )}
      />
      {type === 'password' && (
        <div
          className={style.inputElem__eye}
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <LuEye size={20} /> : <LuEyeOff size={20} />}
        </div>
      )}
    </>
  );
};
export default InputElement;
