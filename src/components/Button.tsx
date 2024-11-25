import clsx from "clsx";
import styles from "styles/components/Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  tag?: React.ComponentType | keyof JSX.IntrinsicElements;
  EndIcon?: React.ComponentType | keyof JSX.IntrinsicElements;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "lg" | "sm";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  EndIcon,
  href,
  tag = "button",
  variant = "primary",
  size,
  ...props
}) => {
  const Component = href ? "a" : tag;

  return (
    <Component
      href={href}
      className={clsx(
        styles.button,
        variant == "primary" && styles["button--primary"],
        variant == "secondary" && styles["button--secondary"],
        variant == "tertiary" && styles["button--tertiary"],
        size == "lg" && styles["button--lg"],
        size == "sm" && styles["button--sm"],
        className,
      )}
      {...props}
    >
      {children}
      {EndIcon && <EndIcon size={18} className={styles.button__end_icon} />}
    </Component>
  );
};
