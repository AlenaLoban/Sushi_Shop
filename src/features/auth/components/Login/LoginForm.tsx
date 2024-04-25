import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Button from '../../../../core/ui/Button';
import style from '../scss/auth.module.scss';
import InputBox from '../InputBox';
import InputPassword from '../InputPassword';
import FormError from '../FormError';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '../../hooks/useLogin';

export type InputsLog = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required('Поле обязательно для заполнения').trim(),
    password: yup.string().trim().required('Поле обязательно для заполнения'),
  })
  .required();

const LoginForm = () => {
  const { register, formState } = useFormContext();
  const { onSubmit, error } = useLogin();

  return (
    <form className={style.loginForm} onSubmit={onSubmit}>
      <InputBox label="Почта" {...register('email')} />
      <InputPassword label="Пароль" {...register('password')} />
      {error && <FormError errorMessage={error} />}

      <Button
        className={style.submit}
        type="submit"
        disabled={!formState.isValid}
      >
        Войти
      </Button>
    </form>
  );
};
const Wrapper = () => {
  const methods = useForm<InputsLog>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <LoginForm />
    </FormProvider>
  );
};

export default Wrapper;
