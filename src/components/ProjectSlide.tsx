import clsx from "clsx";
import styles from "styles/components/ProjectSlide.module.scss";
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

type ProjectSlideProps = {
  title: string;
  image: string;
  link: string;
  button: string;
  content: React.ReactNode;
  className?: string;
};

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  title,
  content,
  image,
  button,
  link,
  className,
}) => {
  return (
    <div className={clsx(styles.project_slide, className)}>
      <img src={image} alt={title} className={styles.project_slide__image} />

      <div className={clsx(styles.project_slide__content)}>
        <header className={styles.project_slide__header}>
          <h2 className={styles.project_slide__title}>{title}</h2>
        </header>

        <div className="typography">{content}</div>

        {button && link && (
          <footer>
            <Button EndIcon={ChevronRight} target="_blank" href={link}>
              {button}
            </Button>
          </footer>
        )}
      </div>
    </div>
  );
};
