export type Inputs = {
  name: string;
  email: string;
  tel: string;
  password: string;
  conf_password: string;
  avatar?: FileList | undefined;
};
export type InputsLog = {
  email: string;
  password: string;
};
