import styles from "./page-not-fount.module.css"
import {Link} from "react-router-dom";

const PageNotFount = () => {
  return (
    <div className={styles.error}>
      <p className={styles.number}>404</p>
      <h1 className={styles.title}>Страница не найдена</h1>
      <Link className={styles.link} to='/'>Назад</Link>
    </div>
  );
};

export default PageNotFount;