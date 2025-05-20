import clsx from "clsx";
import { Button } from "components/Button";
import _ from "lodash";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "styles/components/Hero.module.scss";
import { useWindowSize } from "usehooks-ts";

const PEOPLE = ["wyatt", "eric", "henry", "chris", "noah", "joey"];

const PAINS = [
  "tech debt",
  "big ideas",
  "deadlines",
  "compliance problems",
  "bandwidth issues",
  "investor demands",
];

const MOBILE_PAINS = ["tech debt", "big ideas", "deadlines"];

const SvgPattern = ({ className }) => (
  <svg
    className={className}
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
);

export const Hero = () => {
  const [person, setPerson] = useState(PEOPLE[0]);
  const [pain, setPain] = useState(PAINS[0]);
  const [rendered, setRendered] = useState(false);
  const { width: windowWidth = 0 } = useWindowSize();

  // Use effect only runs in the browser,
  // which is necessary to make this dynamic
  // at render time, rather than at page generation
  useEffect(() => {
    setPerson(() => _.sample(PEOPLE));
    setPain(() =>
      windowWidth < 600 ? _.sample(MOBILE_PAINS) : _.sample(PAINS)
    );
    setRendered(true);
  }, [windowWidth]);

  return (
    <>
      <div className={styles.hero}>
        {/* <Callout
          actionLabel="Read the Case Study"
          className={styles.hero__callout}
        >
          🎉 We helped launch the #1 baseball education app in the world.
        </Callout> */}

        <SvgPattern
          className={clsx(styles.hero__pattern, styles.hero__pattern_left)}
        />

        <SvgPattern
          className={clsx(styles.hero__pattern, styles.hero__pattern_right)}
        />

        {rendered && (
          <div className={styles.hero__headline}>
            <h3 className={clsx(styles.hero__title, "animate slide")}>
              You've got{" "}
              <span className="highlight highlight--primary">{pain}</span>
              <br />
              We've got{" "}
              <span className="highlight highlight--accent">{person}</span>
            </h3>

            <div
              className={clsx(
                styles.hero__copy,
                "typography animate fade delay-1"
              )}
            >
              <p>Apsis Labs offers exceptional developers ready to build.</p>
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
        )}
      </div>
    </>
  );
};
