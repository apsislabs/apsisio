import styles from "styles/components/Navbar.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { LogoType } from "components/LogoType";

const NAV_ITEMS = [
  { href: "/", label: "Home", hideMobile: true },
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
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <LogoType />
      </Link>

      <nav className={styles.navbar__nav}>
        {NAV_ITEMS.map((n) => {
          return (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                styles.navbar__nav_item,
                n.hideMobile && styles["navbar__nav_item--hide_mobile"],
              )}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.navbar__right}>
        {actions && <div className={styles.navbar__actions}>{actions}</div>}

        {showTagline && (
          <a
            href="/mission"
            className={styles.navbar__tagline}
          >
            <span className={styles.navbar__attention}>
              A <del>code</del>{" "}
              <span className={styles.navbar__highlight}>people</span> company
            </span>
          </a>
        )}
      </div>
    </nav>
  );
};
