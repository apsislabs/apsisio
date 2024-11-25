import clsx from "clsx";
import styles from "styles/components/PageHeader.module.scss";

export const PageHeader: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, className }) => {
  return (
    <header className={clsx(styles.page_header, className)}>
      <h1 className={styles.page_header__title}>{title}</h1>
      {subtitle && <h2 className={styles.page_header__subtitle}>{subtitle}</h2>}
      <hr className="divider" />
    </header>
  );
};
