import styles from "styles/components/Navbar.module.scss";
import Link from "next/link";
import { LogoType } from "components/LogoType";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
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
              className={styles.navbar__nav_item}
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
            href="/blog/2015/04/23/work-sustainably"
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
