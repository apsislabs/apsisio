import { ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { MarkdownContent } from "./MarkdownContent";

import styles from "styles/components/Cta.module.scss";

export type CtaProps = {
  title?: string;
  subtitle?: string;
  button?: React.ReactNode;
};

export const Cta: React.FC<CtaProps> = ({ title, subtitle, button }) => {
  return (
    <div className={styles.cta}>
      <header className={styles.cta__header}>
        <MarkdownContent className={styles.cta__title} content={title} />
        <MarkdownContent className={styles.cta__subtitle} content={subtitle} />
      </header>

      <div className={styles.cta__actions}>
        <Button href="/hire" size="lg" EndIcon={ChevronRight}>{button}</Button>
      </div>
    </div>
  );
};
