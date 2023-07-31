import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.notFoundContainer}>
        <div className={styles.notFound}>
          <h1>404</h1>
          <span>Oups! La page que vous demandez n'existe pas.</span>
        </div>
        <NavLink to={"/"}>
          <button>Retourner sur la page d’accueil</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
