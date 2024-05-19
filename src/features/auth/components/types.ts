import { UseFormRegister} from 'react-hook-form';

export type Inputs = {
  name: string;
  email: string;
  tel: string;
  password: string;
  conf_password: string;
  avatar?: any;
};
export type InputsLog = {
  email: string;
  password: string;
};

export type IPropsForInput = {
  className?: string;
  accept?: string;
  id?: string;
  type?: 'password' | 'tel' | 'text' | 'radio' | 'email' | 'file';
  ref?: HTMLInputElement;
  placeholder?: string;
  label?: string;
  errorMessage?: any;
  register?: UseFormRegister<Inputs>;
};
