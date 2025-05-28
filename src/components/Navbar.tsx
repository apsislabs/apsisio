import clsx from "clsx";
import { LogoType } from "components/LogoType";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/components/Navbar.module.scss";

const NAV_ITEMS = [
  { href: "/", label: "Home", hideMobile: true },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/mission", label: "Mission" },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const Navbar: React.FC<{
  showTagline?: boolean;
  actions?: React.ReactNode;
}> = ({ showTagline = true, actions }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__header}>
        <Link href="/" className={styles.navbar__logo}>
          <LogoType />
        </Link>

        <span
          className={clsx(styles.navbar__toggle, "text-primary text-muted")}
        >
          <Hamburger size={24} toggled={expanded} toggle={setExpanded} />
        </span>
      </div>

      <div
        className={clsx(
          styles.navbar__body,
          expanded && styles["navbar__body--expanded"]
        )}
      >
        <nav className={clsx(styles.navbar__nav)}>
          {NAV_ITEMS.map((n) => {
            return (
              <Link
                key={n.href}
                href={n.href}
                className={clsx(
                  styles.navbar__nav_item,
                  n.hideMobile && styles["navbar__nav_item--hide_mobile"]
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navbar__right}>
          {actions && <div className={styles.navbar__actions}>{actions}</div>}
        </div>
      </div>

      {showTagline && (
        <a href="/team" className={styles.navbar__tagline}>
          <span className={styles.navbar__attention}>
            small but <span className={styles.navbar__highlight}>mighty</span>
          </span>
        </a>
      )}
    </nav>
  );
};
