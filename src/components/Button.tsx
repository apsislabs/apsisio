import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import styles from "styles/components/Button.module.scss";

type BaseButtonProps = {
  children: React.ReactNode;
  tag?: React.ComponentType | keyof JSX.IntrinsicElements;
  EndIcon?: React.ComponentType | keyof JSX.IntrinsicElements;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "lg" | "sm";
  disabled?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: undefined;
} & Omit<LinkProps, "size">;

type ButtonButtonProps = BaseButtonProps & {
  href?: undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

type ButtonProps = LinkButtonProps | ButtonButtonProps;

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
  const Component = href ? Link : tag;

  return (
    // @ts-ignore: this is fine
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
