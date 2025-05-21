import { Row } from "./Row";
import styles from "styles/components/ServiceRow.module.scss";
import { CheckList } from "./CheckList";
import clsx from "clsx";
import { ColorVariant } from "lib/types";

export const ServiceRow: React.FC<{
  imgSrc?: string;
  img?: React.ReactNode;
  title: React.ReactNode;
  alt?: string;
  content: React.ReactNode;
  listItems: string[];
  variant: ColorVariant;
  className?: string;
  reverse?: boolean;
}> = ({ img, imgSrc, alt, title, content, listItems, variant, className, ...props }) => {
  return (
    <Row
      className={clsx(
        className,
        styles.service_row__row,
        variant && styles[`service_row--${variant}`]
      )}
      verticalAlign="middle"
      narrow
      {...props}
    >
      <div className={styles.service_row__image_container}>
        {img ?
          <div className={clsx('animate slide', styles.service_row__image)}>
            {img}
          </div>
          : <img src={imgSrc} alt={alt} className={styles.service_row__image} />
        }
      </div>

      <div className="typography">
        <h3 className={styles.service_row__title}>{title}</h3>

        {content && (
          <>
            {content}
            <br />
          </>
        )}

        <CheckList listItems={listItems} variant={variant} />
      </div>
    </Row>
  );
};
