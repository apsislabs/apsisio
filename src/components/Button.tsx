import clsx from "clsx";
import styles from "styles/components/Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  tag?: React.ComponentType | keyof JSX.IntrinsicElements;
  EndIcon?: React.ComponentType | keyof JSX.IntrinsicElements;
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
      {children}
      {EndIcon && <EndIcon size={18} className={styles.button__end_icon} />}
    </Component>
  );
};
