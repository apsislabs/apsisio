import clsx from "clsx";
import { Loader2Icon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import styles from "styles/components/Button.module.scss";

type BaseButtonProps = {
  children: React.ReactNode;
  tag?: React.ComponentType;
  EndIcon?: React.ComponentType<any>;
  StartIcon?: React.ComponentType<any>;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "lg" | "sm";
  loading?: boolean;
  disabled?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: undefined;
} & Omit<LinkProps, "size">;

type ButtonButtonProps = BaseButtonProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

type ButtonProps = LinkButtonProps | ButtonButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  EndIcon,
  StartIcon,
  href,
  tag = "button",
  variant = "primary",
  size,
  loading = false,
  ...props
}) => {
  const Component = href ? Link : tag;
  const iconSize = size === "lg" ? 32 : size === "sm" ? 18 : 24;

  return (
    // @ts-ignore: this is fine
    <Component
      href={href}
      className={clsx(
        styles.button,
        loading && styles["button--loading"],
        variant == "primary" && styles["button--primary"],
        variant == "secondary" && styles["button--secondary"],
        variant == "tertiary" && styles["button--tertiary"],
        variant == "ghost" && styles["button--ghost"],
        size == "lg" && styles["button--lg"],
        size == "sm" && styles["button--sm"],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Loader2Icon size={iconSize} className="animate spin-around loop" />
        </>
      ) : (
        <>
          {StartIcon && (
            <StartIcon size={iconSize} className={styles.button__start_icon} />
          )}
          {children}
          {EndIcon && (
            <EndIcon size={iconSize} className={styles.button__end_icon} />
          )}
        </>
      )}
    </Component>
  );
};
