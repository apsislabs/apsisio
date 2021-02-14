import { Arrow } from "components/Arrow";
import styles from "styles/components/Hero.module.scss";
import { Button } from "components/Button";
import { TypeEffect } from "./TypeEffect";
import { ChevronRight, ChevronsDown } from "react-feather";
import clsx from "clsx";
import Particles from "react-particles-js";
import { useEffect } from "react";

const PEOPLE = ["people", "wyatt", "eric", "henry", "chris", "noah", "apsis"];

const PARTICLE_CONFIG = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#2173aa",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#2173aa",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#2173aa",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export const Hero = () => {
  // useEffect(() => {
  //   particleJS("particles", PARTICLE_CONFIG);
  // }, []);
  return (
    <div className={styles.hero}>
      <Particles params={PARTICLE_CONFIG} className={styles.hero__particles} />

      <div className={styles.hero__headline}>
        <h3 className={styles.hero__title}>
          Simple software built by{" "}
          <TypeEffect className={styles.hero__highlight} strings={PEOPLE} />
        </h3>
      </div>

      <div className={clsx(styles.hero__copy, "typography")}>
        <p>
          Born and raised in the Pacific North West, we have worked with
          everyone from startups to enterprise, and we’re looking forward to
          discovering what we can do working with you.
        </p>

        <Button EndIcon={ChevronRight}>Let's get to work</Button>
      </div>
    </div>
  );
};
