import clsx from "clsx";
import styles from "styles/components/Button.module.scss";

export const Button = ({
  children,
  className,
  EndIcon,
  href,
  tag = "button",
  ...props
}) => {
  const Component = href ? "a" : tag;

  return (
    <Component
      href={href}
      className={clsx(styles.button, className)}
      {...props}
    >
      <span className={styles.button__content}>
        {children}
        {EndIcon && <EndIcon className={styles.button__end_icon} />}
      </span>
    </Component>
  );
};
