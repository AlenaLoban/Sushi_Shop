import style from './scss/auth.module.scss';
import { BiSolidError } from 'react-icons/bi';

type IProps = {
  errorMessage: string;
};

const FormError: React.FC<IProps> = ({ errorMessage }) => {
  return (
    <div className={style.formError}>
      <BiSolidError size={35} />
      <p> {errorMessage}</p>
    </div>
  );
};
export default FormError;
