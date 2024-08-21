import styles from "./header.module.scss"

import logoSvg from "./../../assets/img/icons/logo.svg"
import {Link, NavLink} from "react-router-dom";
import ButtonPrimary from "../../ui-kit/buttons/button-primary/button-primary";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>

          <img className={styles.logo} src={logoSvg} alt="logo"/>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <NavLink
                  to='/news'
                  className={({isActive}) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link} text text_type_main-default `
                  }
                >
                  Новости
                </NavLink>
              </li>
              <li className={styles.list__item}>
                <NavLink
                  to='/gallery'
                  className={({isActive}) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link} text text_type_main-default `
                  }
                >
                  Галерея
                </NavLink>
              </li>
              <li className={styles.list__item}>
                <NavLink
                  to='/files'
                  className={({isActive}) =>
                    isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link} text text_type_main-default `
                  }
                >
                  Файлы
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.aut}>
            <Link className={styles.link} to='/register'>Регистрация</Link>
            <ButtonPrimary
              link={"login"}
              icon="&#128104;"
              iconPosition="left"
            >
              Войти
            </ButtonPrimary>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;