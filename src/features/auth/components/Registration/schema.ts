import * as yup from 'yup';
import 'yup-phone-lite';

export const schema = yup
  .object({
    name: yup
      .string()
      .required('Поле обязательно для заполнения')
      .trim()
      .min(3, 'Имя должно быть не менее 3 символов')
      .max(15, 'Максимальное количество символов - 15')
      .matches(
        /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
        'Можно использовать только латинские буквы',
      ),
    email: yup
      .string()
      .required('Поле обязательно для заполнения')
      .trim()
      .email('Введите валидный email')
      .max(30, 'Максимальное количество символов - 30'),

    tel: yup
      .string()
      .trim()
      .phone('BY', 'Пожалуйста введите валидный номер телефона')
      .required('Поле обязательно для заполнения'),

    password: yup
      .string()
      .trim()
      .required('Поле обязательно для заполнения')
      .min(8, 'Пароль должен содержать не менее 8 символов')
      .max(30, 'Максимальное количество символов - 30')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Пароль должен содержать хотя бы одну латинскую букву и одну цифру, без пробелов',
      ),
    conf_password: yup
      .string()
      .required('Поле обязательно для заполнения')
      .oneOf([yup.ref('password')], 'Пароль должен совпадать'),
    avatar: yup
      .mixed<FileList>()
      .test(
        'fileSize',
        'Невозможно загрузить фото. Превышен размер 5 MB',
        file => {
          if (!file || !file.length) return true;
          return file[0].size <= 5000000;
        },
      ),
  })
  .required();
