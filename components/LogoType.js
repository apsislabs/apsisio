import styles from "styles/components/LogoType.module.scss";
import { ApsisLogo } from "./ApsisLogo";

export const LogoType = ({ size = 32, ...props }) => {
  return (
    <h1 className={styles.logotype} {...props}>
      <ApsisLogo className={styles.logotype__planet} width={size} height={size} />
      Apsis Labs
    </h1>
  );
};
