import clsx from "clsx";
import { Button } from "components/Button";
import { ChevronRight } from "react-feather";
import styles from "styles/components/Hero.module.scss";
import { TypeEffect } from "./TypeEffect";

const PEOPLE = ["people", "wyatt", "eric", "henry", "chris", "noah", "apsis"];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__headline}>
        <h3 className={styles.hero__title}>
          Your app
          <br />
          built by{" "}
          <TypeEffect className={styles.hero__highlight} strings={PEOPLE} />
        </h3>

        <div className={clsx(styles.hero__copy, "typography")}>
          <p>
            Experienced developers ready to transform your idea into a
            successful product.
          </p>
        </div>

        <input
          type="email"
          className={styles.hero__input}
          placeholder="you@example.com"
        />
        <Button EndIcon={ChevronRight}>Let's get to work</Button>
      </div>

      <div className={styles.hero__image_container}>
        <img src="/img/coder.svg" className={styles.hero__image} />
      </div>
    </div>
  );
};
