import InputWrapper from '../../../../core/ui/input/InputWrapper';
import InputElement from '../../../../core/ui/input/InputElement';
import InputError from '../../../../core/ui/input/InputError';
import style from '../scss/auth.module.scss';
import { useFormContext } from 'react-hook-form';

const LoginFields = () => {
  const { register, formState } = useFormContext();
  const err = formState.errors;

  return (
    <div className={style.loginFields}>
      <InputWrapper label="Почта" name="email">
        <InputElement
          type="text"
          name="email"
          register={register}
          error={err?.email}
        />
        <InputError error={err?.email} />
      </InputWrapper>

      <InputWrapper label="Пароль" name="password">
        <InputElement
          type="password"
          name="password"
          register={register}
          error={err?.password}
        />
        <InputError error={err?.password} />
      </InputWrapper>
    </div>
  );
};

export default LoginFields;
