import clsx from "clsx";
import styles from "styles/components/Row.module.scss";

export const Row = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.row, className)} {...props}>
      {children}
    </div>
  );
};
