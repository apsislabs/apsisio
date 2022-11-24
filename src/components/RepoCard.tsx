import clsx from "clsx";
import styles from "styles/components/RepoCard.module.scss";

export const RepoCard = ({ title, description, href, Icon, direction = 'ne' }) => {
  return (
    <a href={href} target="_blank" className={clsx(styles.repo_card, styles[`repo_card--${direction}`])}>
      {Icon && (
        <div className={styles.repo_card__media}>
          <Icon size={22} className={styles.repo_card__icon} />
        </div>
      )}

      <div className={styles.repo_card__content}>
        <h5 className={styles.repo_card__title}>{title}</h5>
        <p>{description}</p>
      </div>
    </a>
  );
};
