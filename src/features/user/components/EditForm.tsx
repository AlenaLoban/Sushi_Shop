import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Inputs } from '../../auth/components/types';
import style from '../../auth/components/scss/auth.module.scss';
import { IUser } from '../../../hooks/types/IUsersType';
import { schema } from '../../auth/components/Registration/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import BaseForm from '../../auth/components/Registration/BaseForm';
import Button from '../../../core/ui/Button';
import { useEdit } from '../hooks/useEdit';
import FormError from '../../auth/components/FormError';
import React, { useEffect } from 'react';
import cn from 'classnames';
import InputBox from '../../auth/components/InputBox';

type IProps = {
  user: IUser;
  setPreAvatar: (value: string) => void;
};

const EditForm: React.FC<IProps> = ({ user, setPreAvatar }) => {
  const { formState, watch, getValues, register } = useFormContext();
  const { onSubmit, error } = useEdit(user);

  const watchAvatar = watch('avatar');

  useEffect(() => {
    const prewAvatar = getValues('avatar');
    if (prewAvatar && prewAvatar[0])
      setPreAvatar(URL.createObjectURL(prewAvatar[0]));
  }, [watchAvatar]);

  return (
    <form className={style.registerForm} onSubmit={onSubmit}>
      <div className={cn(style.registerForm__avatar)}>
        <label htmlFor="avatar">Загрузить фото + </label>
        <InputBox
          id="avatar"
          {...register('avatar')}
          className={style.hidden}
          type="file"
          accept="image/*,.png,.jpg,.gif,.web"
        />
      </div>
      <BaseForm />
      {error && <FormError errorMessage={error} />}
      <Button
        className={style.submit}
        disabled={!formState.isValid}
        type="submit"
      >
        Сохранить
      </Button>
    </form>
  );
};
const WrapperEditForm: React.FC<IProps> = ({ user, setPreAvatar }) => {
  const methods = useForm<Inputs>({
    defaultValues: {
      name: user.name,
      email: user.email,
      tel: user.tel,
      password: user.password,
      conf_password: user.password,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <EditForm user={user} setPreAvatar={setPreAvatar} />
    </FormProvider>
  );
};

export default WrapperEditForm;
