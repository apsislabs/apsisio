'use client';

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useTransitionState } from "react-transition-state";
import { useInterval } from "usehooks-ts";

type TextRotateProps = {
  words: React.ReactNode[];
  className?: string;
  interval?: number;
  delay?: number;
};

export const TextRotate: React.FC<TextRotateProps> = ({
  words,
  className,
  interval = 3000,
  delay = 0,
}) => {
  const [index, setIndex] = useState(0);
  const [visibleWord, setVisibleWord] = useState(words[0]);
  const [state, toggle] = useTransitionState({
    timeout: 500,
    preEnter: true,
    preExit: true,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  useInterval(
    () => {
      toggle();
    },
    start ? interval : null
  );

  useEffect(() => {
    if (state.status === "exited") {
      const nextIndex = (index + 1) % words.length;
      setVisibleWord(words[nextIndex]);
      setIndex(nextIndex);
      toggle();
    }
  }, [state.status, index, words, toggle]);

  return (
    <span className={clsx(className, `word-swap-item ${state.status}`)}>
      {visibleWord}
    </span>
  );
};
