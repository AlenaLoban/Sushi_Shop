import React from 'react';
import style from '../scss/auth.module.scss';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Button from '../../../../core/ui/Button';
import { Inputs } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import 'yup-phone-lite';
import FormError from '../FormError';
import { schema } from './schema';
import BaseFields from '../../../../core/ui/BaseFields';
import { useRegistration } from '../../hooks/useRegistration';

const RegisterForm: React.FC = () => {
  const { formState } = useFormContext();
  const { onSubmit, error } = useRegistration();

  return (
    <form className={style.registerForm} onSubmit={onSubmit}>
      <BaseFields />
      {error && <FormError errorMessage={error} />}
      <Button
        className={style.submit}
        disabled={!formState.isValid}
        type="submit"
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
const WrapperEditForm: React.FC = () => {
  const methods = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <RegisterForm />
    </FormProvider>
  );
};

export default WrapperEditForm;
