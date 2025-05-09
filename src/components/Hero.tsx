import clsx from "clsx";
import { Button } from "components/Button";
import _ from "lodash";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "styles/components/Hero.module.scss";
import { Callout } from "./Callout";

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
    <>
      <div className={styles.hero}>
        <Callout actionLabel="Read the Case Study" className={styles.hero__callout}>
          🎉 We helped launch the #1 baseball education app in the world.
        </Callout>

        {/* <svg
          className={clsx(styles.hero__pattern, styles.hero__pattern_left)}
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>{" "}
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          ></rect>
        </svg>

        <svg
          className={clsx(styles.hero__pattern, styles.hero__pattern_right)}
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>{" "}
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          ></rect>
        </svg> */}

        <div className={styles.hero__headline}>
          <h3 className={clsx(styles.hero__title, "animate slide")}>
            <span className="">apsis</span> for{" "}
            <span className="handwritten highlight">tight deadlines</span>
            {/* Your <span className="text-primary highlight">deadlines</span> */}
            {/* You've got <span className="text-primary highlight">deadlines</span> */}
            {/* You've got <span className="text-primary highlight">deadlines</span> */}
            <br />
            {/* crushed by <span className="highlight text-accent">apsis</span>. */}
            {/* <span className="highlight text-accent">joey</span> can help. */}
            {/* we've got <span className="highlight text-accent">eric</span>. */}
            {/* Your <span className="text-primary">app</span> &mdash;
            <br />
            built by{" "}
            <TypeEffect
              className={styles.hero__highlight}
              strings={finalPeople}
            /> */}
          </h3>

          <div
            className={clsx(
              styles.hero__copy,
              "typography animate fade delay-1"
            )}
          >
            <p>Experienced developers ready to bring your ideas to life.</p>
          </div>

          <div className={clsx(styles.hero__actions, "animate fade delay-1")}>
            <Button href="/hire" variant="primary" EndIcon={ChevronRight}>
              Let's get to work
            </Button>

            <Button variant="tertiary" href="/team">
              Meet our team
            </Button>
          </div>
        </div>

        {/* <div className={styles.hero__image_container}>
          <img src="/img/coder.svg" className={styles.hero__image} />
        </div> */}
      </div>
    </>
  );
};
