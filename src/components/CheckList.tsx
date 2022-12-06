import clsx from "clsx";
import { Check } from "lucide-react";
import styles from "styles/components/CheckList.module.scss";

export const CheckList: React.FC<{
  listItems: string[];
  className?: string;
}> = ({ listItems = [], className, ...props }) => {
  return (
    <ul className={clsx(styles.check_list, className)} {...props}>
      {listItems.map((item, i) => (
        <li key={i}>
          <Check className={styles.check_list__marker} size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
};
