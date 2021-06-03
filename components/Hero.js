import clsx from "clsx";
import { Button } from "components/Button";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "react-feather";
import useInterval from "src/hooks/useInterval";
import styles from "styles/components/Hero.module.scss";
import { TypeEffect } from "./TypeEffect";

const PEOPLE = ["people", "wyatt", "eric", "henry", "chris", "noah", "apsis"];

export const Hero = () => {
  const particles = useRef({});

  useInterval(() => {
    const key = +new Date();
    particles.current = { ...particles.current, [key]: "tap" };

    // setTimeout(() => {
    //   let newParticles = Object.assign({}, particles.current);
    //   delete newParticles[key];
    //   particles.current = newParticles;
    // }, 5000);
  }, 1200);

  console.log(particles.current);

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
        <div>
          {Object.entries(particles.current).map(([key, p]) => (
            <span key={key} className={styles.hero__particle}>
              {p}
            </span>
          ))}
        </div>

        <img src="/img/coder.svg" className={styles.hero__image} />
      </div>
    </div>
  );
};
