import clsx from "clsx";
import { ColorVariant } from "lib/types";
import styles from "styles/components/FeatureCard.module.scss";

export interface FeatureItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  content: string;
}

interface FeatureCardProps extends FeatureItem {
  variant: ColorVariant;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  content,
  variant,
}) => (
  <div
    className={clsx(styles.feature_card, styles[`feature_card--${variant}`])}
  >
    <div className={styles.feature_card__media}>
      <Icon size={24} className={styles.feature_card__icon} />
    </div>
    <div className={styles.feature_card__content}>
      <h5 className={styles.feature_card__title}>{title}</h5>
      <p className={styles.feature_card__description}>{content}</p>
    </div>
  </div>
);
