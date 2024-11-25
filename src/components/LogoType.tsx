import clsx from "clsx";
import styles from "styles/components/LogoType.module.scss";
import { ApsisLogo } from "./ApsisLogo";

export const LogoType: React.FC<
  {
    size?: number;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
> = ({ size = 24, className, ...props }) => {
  return (
    <h1 className={clsx(styles.logotype, className)} {...props}>
      <ApsisLogo
        className={styles.logotype__planet}
        width={size}
        height={size}
      />

      <span className={styles.logotype__wordmark}>Apsis Labs</span>
    </h1>
  );
};
