import clsx from "clsx";
import { Button } from "components/Button";
import { shuffle } from "lodash-es";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "styles/components/Hero.module.scss";
import { useWindowSize } from "usehooks-ts";
import { TextRotate } from "./TextRotate";

const PEOPLE = ["wyatt", "eric", "henry", "chris", "noah", "joey"];

const PAINS = [
  "compliance by default",
  "a dependable partner",
  "quick time to value",
  "to harness AI",
  "measurable ROI",
  "a clean dev pipeline",
  "to eliminate tech debt",
  "a world-class app",
  "to secure funding",
  "scalable devops"
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
  const [person, setPerson] = useState(PEOPLE);
  const [pain, setPain] = useState(PAINS);
  const [rendered, setRendered] = useState(false);
  const { width: windowWidth = 0 } = useWindowSize({ debounceDelay: 500 });

  // Use effect only runs in the browser,
  // which is necessary to make this dynamic
  // at render time, rather than at page generation
  useEffect(() => {
    setPerson(() => shuffle(PEOPLE));
    setPain(() => (windowWidth < 600 ? shuffle(MOBILE_PAINS) : shuffle(PAINS)));
    setRendered(true);
  }, []);

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
              You need{" "}
              <TextRotate
                interval={5000}
                className="highlight highlight--primary"
                words={pain}
              />
              <br />
              We've got{" "}
              <TextRotate
                className="highlight highlight--accent"
                interval={5000}
                words={person}
                delay={1500}
              />
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
              <Button
                href="/hire"
                variant="primary"
                size="lg"
                EndIcon={ChevronRight}
              >
                Let's get to work
              </Button>

              <Button size="lg" variant="tertiary" href="/team">
                Meet our team
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
