import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import styles from './button-primary.module.scss';

type IProps = {
  children: ReactNode;
  icon?: string;
  iconPosition?: 'left' | 'right';
  link: string;
  size?: 'sm' | 'xl';
};

const ButtonPrimary = ({children, link, size, icon, iconPosition = 'left'}: IProps) => {
  return (
    <Link className={`${styles.button} ${styles[`button--${size}`]}`} to={`/${link}`}>
      {icon && iconPosition === 'left' && <i className={styles.icon}>{icon}</i>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === 'right' && <i className={styles.icon}>{icon}</i>}
    </Link>
  );
};

export default ButtonPrimary;
