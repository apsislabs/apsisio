import clsx from "clsx";
import { ColorVariant } from "lib/types";
import { variantToColorVar } from "lib/utils";
import { Check, LucideIcon } from "lucide-react";
import styles from "styles/components/CheckList.module.scss";
import { useDarkMode } from "usehooks-ts";

export const CheckList: React.FC<{
  listItems: React.ReactNode[];
  className?: string;
  variant?: ColorVariant;
  icon?: LucideIcon;
}> = ({ listItems = [], className, variant, icon: Icon = Check, ...props }) => {
  return (
    <ul className={clsx(styles.check_list, className)} {...props}>
      {listItems.map((item, i) => (
        <li key={i}>
          <Icon
            className={styles.check_list__marker}
            size={18}
            color={variantToColorVar(variant)}
          />
          {item}
        </li>
      ))}
    </ul>
  );
};
