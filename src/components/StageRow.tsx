import React from "react";
import { Section } from "./Section";
import styles from "styles/components/StageRow.module.scss";
import { CheckList } from "./CheckList";
import { ArrowRightIcon } from "lucide-react";
import { ColorVariant } from "lib/types";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { StylizedSvg } from "./StylizedSvg";
// import Link from "next/link";

const ScaleUpSvg = dynamic(() => import("/public/img/home/scaleup.svg"), { ssr: false });
const StartUpSvg = dynamic(() => import("/public/img/home/startup.svg"), { ssr: false });
const StepUpSvg = dynamic(() => import("/public/img/home/stepup.svg"), { ssr: false });

export const StageRow: React.FC<{
  image?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  explainer: React.ReactNode;
  services: React.ReactNode[];
  whyUs: React.ReactNode[];
  footer?: React.ReactNode;
  variant: ColorVariant;
}> = ({ image, title, subtitle, variant, explainer, services, whyUs, footer }) => {
  return <>
    {image && (
      <div className={styles.stage_row__image_container}>
        {image}
      </div>
    )}
    <Section spaced narrow guides={false}>
      <div className={styles[`stage_row--${variant}`]}>
        <h3 className={styles.stage_row__title}>{title}</h3>
        <h4 className={styles.stage_row__subtitle}>{subtitle}</h4>
        <div className="typography">
          <p className="lead">
            {explainer}
          </p>
        </div>
        <div className={styles.stage_row__lists}>
          <div>
            <h4 className={styles.stage_row__list_heading}>Core services</h4>
            <CheckList
              columns={false}
              listItems={services}
              icon={ArrowRightIcon}
              variant={variant}
            />
          </div>
          <div>
            <h4 className={styles.stage_row__list_heading}>Why Apsis?</h4>
            <CheckList
              columns={false}
              listItems={whyUs}
              icon={ArrowRightIcon}
              variant={variant}
            />
          </div>
        </div>
        {footer && (
          <div className={clsx(styles.stage_row__footer, "typography")}>
            <p>
              {footer}
            </p>
          </div>
        )}
      </div>
    </Section>
  </>;
}
