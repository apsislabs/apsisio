import clsx from "clsx";
import { useMemo } from "react";
import styles from "styles/components/Section.module.scss";

type SectionProps = {
  label?: string;
  className?: string;
  guides?: boolean;
  bordered?: boolean;
  spaced?: boolean;
  kebabed?: boolean;
  narrow?: boolean;
  centerLabel?: boolean;
  theme?: "default" | "blue" | "gray";
  Icon?: React.ComponentType | keyof JSX.IntrinsicElements;
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  guides = true,
  bordered = false,
  spaced = false,
  kebabed = false,
  narrow = false,
  label,
  centerLabel = false,
  theme = "default",
  Icon,
  ...props
}) => {
  const sectionClasses = useMemo(
    () =>
      clsx(
        className,
        styles.section,
        theme !== "default" && styles[`section--${theme}`],
        bordered && styles["section--bordered"],
        spaced && styles["section--spaced"],
        kebabed && styles["section--kebabed"],
        narrow && styles["section--narrow"]
      ),
    [className, bordered, spaced, kebabed, narrow, theme]
  );

  return (
    <section className={sectionClasses} {...props}>
      <div className={styles.section__mask}>
        {guides && <div className={styles.section__guides}></div>}
      </div>

      <div className={styles.section__container}>
        {label && (
          <div
            className={clsx(
              styles.section__label_container,
              centerLabel && styles["section__label_container--centered"]
            )}
          >
            <h4 className={styles.section__label}>
              {Icon && <Icon size={18} className={styles.section__icon} />}
              {label}
            </h4>
          </div>
        )}

        <div className={styles.section__content}>{children}</div>
      </div>
    </section>
  );
};
