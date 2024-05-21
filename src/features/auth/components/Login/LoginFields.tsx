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
        {err?.email?.message && (
          <InputError>{err.email.message as string}</InputError>
        )}
      </InputWrapper>

      <InputWrapper label="Пароль" name="password">
        <InputElement
          type="password"
          name="password"
          register={register}
          error={err?.password}
        />
        {err?.password?.message && (
          <InputError>{err.password.message as string}</InputError>
        )}
      </InputWrapper>
    </div>
  );
};

export default LoginFields;
