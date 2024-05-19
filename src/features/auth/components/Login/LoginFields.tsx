import InputWrapper from '../../../../core/ui/input/InputWrapper';
import InputElement from '../../../../core/ui/input/InputElement';
import InputError from '../../../../core/ui/input/InputError';
import style from '../scss/auth.module.scss';

const LoginFields = () => {
  return (
    <div className={style.loginFields}>
      <InputWrapper label="Почта" name="email">
        <InputElement type="text" name="email" />
        <InputError name="email" />
      </InputWrapper>
      <InputWrapper label="Пароль" name="password">
        <InputElement type="password" name="password" />
        <InputError name="password" />
      </InputWrapper>
    </div>
  );
};

export default LoginFields;
