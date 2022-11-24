import clsx from "clsx";
import { Button } from "components/Button";
import { ChevronRight } from "lucide-react";
import styles from "styles/components/Hero.module.scss";
import { TypeEffect } from "./TypeEffect";

const PEOPLE = ["wyatt", "eric", "henry", "chris", "noah", "apsis"];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__headline}>
        <h3 className={styles.hero__title}>
          Your app &mdash;
          <br />
          built by{" "}
          <TypeEffect className={styles.hero__highlight} strings={PEOPLE} />
        </h3>

        <div className={clsx(styles.hero__copy, "typography")}>
          <p>
            Experienced developers ready to bring your ideas to life.
          </p>
        </div>

        <Button href="mailto:contact@apsis.io" EndIcon={ChevronRight}>Let's get to work</Button>
      </div>

      <div className={styles.hero__image_container}>
        <img src="/img/coder.svg" className={styles.hero__image} />
      </div>
    </div>
  );
};
