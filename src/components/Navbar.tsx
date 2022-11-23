import styles from "styles/components/Navbar.module.scss";
import Link from "next/link";
import { LogoType } from "components/LogoType";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const Navbar: React.FC<{ showTagline?: boolean }> = ({
  showTagline = true,
}) => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbar__logo}>
        <LogoType />
      </Link>

      <nav className={styles.navbar__nav}>
        {NAV_ITEMS.map((n) => {
          return (
            <Link key={n.href} href={n.href} className={styles.navbar__nav_item}>
              {n.label}
            </Link>
          );
        })}
      </nav>

      {showTagline && (
        <h2 className={styles.navbar__tagline}>
          A <del>code</del>{" "}
          <span className={styles.navbar__highlight}>people</span> company
        </h2>
      )}
    </nav>
  );
};
