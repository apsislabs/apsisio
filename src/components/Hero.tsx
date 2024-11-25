import clsx from "clsx";
import { Button } from "components/Button";
import _ from "lodash";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "styles/components/Hero.module.scss";
import { TypeEffect } from "./TypeEffect";

const PEOPLE = ["wyatt", "eric", "henry", "chris", "noah", "joey", "matt"];

export const Hero = () => {
  const [finalPeople, setFinalPeople] = useState([]);

  // Use effect only runs in the browser,
  // which is necessary to make this dynamic
  // at render time, rather than at page generation
  useEffect(() => {
    setFinalPeople([..._.sampleSize(PEOPLE, 3), "apsis"]);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__headline}>
        <h3 className={styles.hero__title}>
          Your app &mdash;
          <br />
          built by{" "}
          <TypeEffect
            className={styles.hero__highlight}
            strings={finalPeople}
          />
        </h3>

        <div className={clsx(styles.hero__copy, "typography")}>
          <p>Experienced developers ready to bring your ideas to life.</p>
        </div>

        <div className={styles.hero__actions}>
          <Button href="mailto:contact@apsis.io?subject=Apsis Project Inquiry" EndIcon={ChevronRight}>
            Let's get to work
          </Button>

          <Button variant="tertiary" href="/team">
            Meet our team
          </Button>
        </div>
      </div>

      <div className={styles.hero__image_container}>
        <img src="/img/coder.svg" className={styles.hero__image} />
      </div>
    </div>
  );
};
