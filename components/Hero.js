import { Arrow } from "components/Arrow";
import styles from "styles/components/Hero.module.scss";
import { Button } from "components/Button";
import { TypeEffect } from "./TypeEffect";
import { ChevronRight, ChevronsDown } from "react-feather";
import clsx from "clsx";

const PEOPLE = ["people", "wyatt", "eric", "henry", "chris", "noah", "apsis"];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__headline}>
        <h3 className={styles.hero__title}>
          Simple software built by{" "}
          <TypeEffect className={styles.hero__highlight} strings={PEOPLE} />
        </h3>
      </div>

      <div className={clsx(styles.hero__copy, 'typography')}>
        <p>
          We believe the right software isn’t just innovative: it’s inspiring.
          At Apsis, our team of dedicated engineers works hard to provide
          solutions that will work today without sacrificing tomorrow.
        </p>

        <p>
          Born and raised in the Pacific North West, we have worked with
          everyone from startups to enterprise, anpm i typewriter-effectnd we’re
          looking forward to discovering what we can do working with you.
        </p>

        <Button EndIcon={ChevronRight}>Let's get to work</Button>
      </div>
    </div>
  );
};
