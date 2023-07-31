import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}></figure>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(nav) =>
                nav.isActive
                  ? `${styles["nav"]} ${styles["nav-active"]}`
                  : styles["nav"]
              }
            >
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/a-propos"}
              className={(nav) =>
                nav.isActive
                  ? `${styles["nav"]} ${styles["nav-active"]}`
                  : styles["nav"]
              }
            >
              À PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
