import clsx from "clsx";
import { PlusSquare } from "lucide-react";
import styles from "styles/components/CheckList.module.scss";

export const CheckList: React.FC<{
  listItems: string[];
  className?: string;
}> = ({ listItems = [], className, ...props }) => {
  return (
    <ul className={clsx(styles.check_list, className)} {...props}>
      {listItems.map((item, i) => (
        <li key={i}>
          <PlusSquare className={styles.check_list__marker} size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
};
