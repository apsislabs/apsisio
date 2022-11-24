import clsx from "clsx";
import styles from "styles/components/Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  tag: any;
  EndIcon?: any;
  className?: string;
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({
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
        {EndIcon && <EndIcon size={18} className={styles.button__end_icon} />}
      </span>
    </Component>
  );
};
