import clsx from "clsx";
import styles from "styles/components/SectionHeader.module.scss";

export const SectionHeader: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  prefix?: React.ReactNode;
  className?: string;
}> = ({ title, prefix, subtitle, className }) => {
  return (
    <header className={clsx(styles.section_header, className)}>
      {prefix}
      <h2 className={styles.section_header__title}>{title}</h2>
      {subtitle && <h3 className={styles.section_header__subtitle}>{subtitle}</h3>}
    </header>
  );
};
