import style from '../../auth/components/scss/auth.module.scss';
import React, { useRef } from 'react';
import BaseFields from '../../../core/ui/BaseFields';
import InputWrapper from '../../../core/ui/input/InputWrapper';
import InputElement from '../../../core/ui/input/InputElement';
import InputError from '../../../core/ui/input/InputError';
import { useFormContext } from 'react-hook-form';

const EditFields: React.FC = () => {
  const { register, formState } = useFormContext();
  const err = formState.errors?.avatar;

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const onUpload = () => {
    hiddenInputRef?.current?.click();
  };

  return (
    <div className={style.editFields}>
      <InputWrapper label="" name="avatar">
        <p onClick={onUpload}>Загрузить фото + </p>
        <InputElement
          register={register}
          error={err}
          type="file"
          name="avatar"
          accept="image/*,.png,.jpg,.gif,.web"
          hiddenInputRef={hiddenInputRef}
        />
        {err?.message && <InputError>{err.message as string}</InputError>}
      </InputWrapper>

      <BaseFields />
    </div>
  );
};
export default EditFields;
