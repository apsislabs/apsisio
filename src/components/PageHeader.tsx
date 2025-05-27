import clsx from "clsx";
import styles from "styles/components/PageHeader.module.scss";

export const PageHeader: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  prefix?: React.ReactNode;
  center?: boolean;
  className?: string;
}> = ({ title, prefix, subtitle, center, className }) => {
  return (
    <header
      className={clsx(
        styles.page_header,
        center && styles["page_header--center"],
        className
      )}
    >
      {prefix}
      <h1 className={styles.page_header__title}>{title}</h1>
      {subtitle && <h2 className={styles.page_header__subtitle}>{subtitle}</h2>}
      <hr className="divider" />
    </header>
  );
};
