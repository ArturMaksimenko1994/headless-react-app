import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './button-outline.module.scss';

type IProps = {
  children: ReactNode;
};

const ButtonOutline = ({ children }: IProps ) => {
  return (
    <Link className={styles.button} to='/login'>
      <span>{children}</span>
      <i>&#128379;</i>
    </Link>
  );
};

export default ButtonOutline;
