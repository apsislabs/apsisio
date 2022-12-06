import clsx from "clsx";
import styles from "styles/components/ServicesList.module.scss";

export const ServicesList = ({
  title,
  Icon,
  listItems = [],
  className,
  variant = "blue",
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.services_list,
        className,
        styles[`services_list--${variant}`]
      )}
      {...props}
    >
      <h4 className={styles.services_list__title}>
        {Icon && <Icon size={18} className={styles.services_list__icon} />}
        {title}
      </h4>
      <ul className={styles.services_list__list}>
        {listItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
