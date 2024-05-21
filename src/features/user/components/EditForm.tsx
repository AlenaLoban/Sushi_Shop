import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Inputs } from '../../auth/types';
import style from '../../auth/components/scss/auth.module.scss';
import { IUser } from '../../../hooks/types/IUsersType';
import { schema } from '../../auth/components/Registration/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../core/ui/Button';
import { useEdit } from '../hooks/useEdit';
import FormError from '../../auth/components/FormError';
import React, { useEffect } from 'react';
import EditFields from './EditFields';

type IProps = {
  user: IUser;
  setPreAvatar: (value: string) => void;
};

const EditForm: React.FC<IProps> = ({ user, setPreAvatar }) => {
  const { formState, watch, getValues } = useFormContext();
  const { onSubmit, error } = useEdit(user);

  const watchAvatar = watch('avatar');

  useEffect(() => {
    const prewAvatar = getValues('avatar');

    if (prewAvatar && prewAvatar[0] && prewAvatar[0].size < 5000000)
      setPreAvatar(URL.createObjectURL(prewAvatar[0]));
  }, [watchAvatar]);

  return (
    <form className={style.registerForm} onSubmit={onSubmit}>
      <EditFields/>
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
