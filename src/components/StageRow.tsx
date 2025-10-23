import React from "react";
import { Section } from "./Section";
import styles from "styles/components/StageRow.module.scss";
import { FeatureCard, FeatureItem } from "./FeatureCard";
import { ColorVariant } from "lib/types";
import clsx from "clsx";

export const StageRow: React.FC<{
  image?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  explainer: React.ReactNode;
  services: FeatureItem[];
  whyUs: FeatureItem[];
  footer?: React.ReactNode;
  variant: ColorVariant;
}> = ({
  image,
  title,
  subtitle,
  variant,
  explainer,
  services,
  whyUs,
  footer,
}) => {
  return (
    <>
      {image && (
        <div className={styles.stage_row__image_container}>{image}</div>
      )}
      <Section spaced narrow guides={false}>
        <div className={styles[`stage_row--${variant}`]}>
          <header className={styles.stage_row__header}>
            <h3 className={styles.stage_row__title}>{title}</h3>
            <h4 className={styles.stage_row__subtitle}>{subtitle}</h4>
          </header>

          <div className="typography">
            <p className="lead">{explainer}</p>
          </div>

          <div className={styles.stage_row__features}>
            <div className={styles.stage_row__grid}>
              {services.map((service, i) => (
                <FeatureCard key={i} {...service} variant={variant} />
              ))}
            </div>
            <div className={styles.stage_row__grid}>
              {whyUs.map((item, i) => (
                <FeatureCard key={i} {...item} variant={variant} />
              ))}
            </div>
          </div>
          {footer && (
            <div className={clsx(styles.stage_row__footer, "typography")}>
              <p>{footer}</p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};
