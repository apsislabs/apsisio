import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "styles/components/TypeEffect.module.scss";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const TypeEffect = ({
  className,
  strings = [],
  typeDelay = 167,
  deleteDelay = 100,
  wordDelay = 2500,
}) => {
  const [text, setText] = useState(strings[0]);
  const [blinking, setBlinking] = useState(false);

  const typeDelayMin = typeDelay * 0.95;
  const typeDelayMax = typeDelay * 1.05;

  const wordDelayMin = wordDelay * 0.95;
  const wordDelayMax = wordDelay * 1.05;

  const deleteDelayMin = deleteDelay * 0.95;
  const deleteDelayMax = deleteDelay * 1.05;

  useEffect(() => {
    let isMounted = true;

    const updateString = (v) => {
      if (isMounted) {
        setText(v);
      }
    };

    const updateBlinking = (v) => {
      if (isMounted) {
        setBlinking(v);
      }
    };

    const doTyping = async () => {
      for (let i = 0; i < strings.length; i++) {
        const string = strings[i];

        for (let j = 0; j <= string.length; j++) {
          updateString(string.slice(0, j));
          await sleep(randInt(typeDelayMin, typeDelayMax));
        }

        updateBlinking(true);

        if (i !== strings.length - 1) {
          // If we're not in the last iteration,
          // delete the characters and pause
          await sleep(randInt(wordDelayMin, wordDelayMax));

          updateBlinking(false);

          for (let j = string.length; j >= 0; j--) {
            updateString(string.slice(0, j));
            await sleep(randInt(deleteDelayMin, deleteDelayMax));
          }

          updateBlinking(true);
          await sleep(randInt(typeDelayMin, typeDelayMax));
        } else {
          // If we are in the final iteration, set the string
          // with a terminal character
          await sleep(randInt(typeDelayMin, typeDelayMax));
          updateString(`${string}.`);
        }
      }
    };

    doTyping();
    return () => (isMounted = false);
  }, []);

  return (
    <span className={clsx(styles.typing, className)}>
      {text}
      <span
        className={clsx(styles.typing__cursor, {
          [styles["typing__cursor--blinking"]]: blinking,
        })}
      />
    </span>
  );
};
