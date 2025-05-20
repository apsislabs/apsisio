import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "styles/components/Callout.module.scss";
import { Button } from "./Button";
import { ArrowRightCircleIcon } from "lucide-react";

export const Callout: React.FC<
  PropsWithChildren & { className?: string; actionLabel?: React.ReactNode }
> = ({ children, className, actionLabel }) => {
  return (
    <span className={clsx(styles.callout, className)}>
      {children}
      <Button variant="secondary" size="sm" className={styles.callout__action} EndIcon={ArrowRightCircleIcon}>{actionLabel}</Button>
    </span>
  );
};
