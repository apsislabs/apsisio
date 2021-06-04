import clsx from "clsx";
import { CheckCircle } from "react-feather";
import styles from "styles/components/CheckList.module.scss";

export const CheckList = ({ listItems = [], className, ...props }) => {
  return (
    <ul className={clsx(styles.check_list, className)} {...props}>
      {listItems.map((item, i) => (
        <li key={i}>
          <CheckCircle className={styles.check_list__marker} size={14} />
          {item}
        </li>
      ))}
    </ul>
  );
};
