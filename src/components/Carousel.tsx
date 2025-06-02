import clsx from "clsx";
import { EmblaCarouselType } from "embla-carousel";
import styles from "styles/components/Carousel.module.scss";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Button } from "./Button";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const Carousel: React.FC<PropType> = ({ slides = [], options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.carousel}>
      <div className={clsx(styles.carousel__viewport)} ref={emblaRef}>
        <div className={clsx(styles.carousel__container)}>
          {slides.map((slide, idx) => (
            <div className={clsx(styles.carousel__slide)} key={idx}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={clsx(styles.carousel__controls)}>
        <div className={clsx(styles.carousel__buttons)}>
          <Button
            variant="tertiary"
            StartIcon={ChevronLeftIcon}
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            Prev
          </Button>
          <Button
            variant="tertiary"
            EndIcon={ChevronRightIcon}
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};
