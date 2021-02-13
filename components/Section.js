import clsx from "clsx";
import styles from "styles/components/Section.module.scss";

export const Section = ({
  children,
  className,
  guides = true,
  bordered = false,
  spaced = false,
  kebabed = false,
  narrow = false,
  label,
  ...props
}) => {
  return (
    <section
      className={clsx(className, styles.section, {
        [styles["section--bordered"]]: bordered,
        [styles["section--spaced"]]: spaced,
        [styles["section--kebabed"]]: kebabed,
        [styles["section--narrow"]]: narrow,
      })}
      {...props}
    >
      <div className={styles.section__mask}>
        {guides && <div className={styles.section__guides}></div>}
      </div>

      <div className={styles.section__container}>
        {label && <h4 className={styles.section__label}>{label}</h4>}
        <div className={styles.section__content}>{children}</div>
      </div>
    </section>
  );
};
