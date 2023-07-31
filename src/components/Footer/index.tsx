import KazaLogo from "../../assets/Logo/LOGO-noir.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={KazaLogo} alt="Logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
