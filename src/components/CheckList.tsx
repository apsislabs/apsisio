import clsx from "clsx";
import { ColorVariant } from "lib/types";
import { variantToColorVar } from "lib/utils";
import { Check } from "lucide-react";
import styles from "styles/components/CheckList.module.scss";
import { useDarkMode } from "usehooks-ts";

export const CheckList: React.FC<{
  listItems: string[];
  className?: string;
  variant?: ColorVariant;
}> = ({ listItems = [], className, variant, ...props }) => {
  return (
    <ul className={clsx(styles.check_list, className)} {...props}>
      {listItems.map((item, i) => (
        <li key={i}>
          <Check className={styles.check_list__marker} size={18} color={variantToColorVar(variant)} />
          {item}
        </li>
      ))}
    </ul>
  );
};
