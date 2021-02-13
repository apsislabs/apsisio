import styles from "styles/components/Navbar.module.scss";
import { LogoType } from "components/LogoType";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <LogoType />
      <h2 className={styles.navbar__tagline}>A Code Company</h2>
    </nav>
  );
};
