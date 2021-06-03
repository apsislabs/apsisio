import clsx from "clsx";
import styles from "styles/components/Row.module.scss";

export const Row = ({
  children,
  className,
  verticalAlign = "top",
  reverse = false,
  narrow = false,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.row,
        (reverse && styles["row--reverse"]),
        (narrow && styles["row--narrow"]),
        (verticalAlign === "top" && styles["row--top"]),
        (verticalAlign === "middle" && styles["row--middle"]),
        (verticalAlign === "bottom" && styles["row--bottom"]),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
