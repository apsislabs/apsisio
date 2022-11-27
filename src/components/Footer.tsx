import { Row } from "components/Row";
import Link from "next/link";
import styles from "styles/components/Footer.module.scss";
import { LogoType } from "./LogoType";

const now = new Date();

export const Footer = () => (
  <footer className={styles.footer}>
    <Row>
      <div>
        <Link href="/" className={styles.footer__logo}>
          <LogoType size={18} className={styles.footer__logotype} />
        </Link>

        <small>
          <ul className="inline_list">
            <li>Copyright {now.getFullYear()} Apsis Labs, LLP</li>

            <li>
              <a
                className="link"
                target="_blank"
                href="https://github.com/apsislabs"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://linkedin.com/apsislabs"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </small>
      </div>
      <div className={styles.footer__tagline_container}>
        <h4 className={styles.footer__tagline}>
          Distributed & Horizontally Scalable
        </h4>

        <small>
          <ul className="inline_list">
            <li>❤️ from:</li>
            <li>Seattle</li>
            <li>Boulder</li>
            <li>Boston</li>
            <li>Portland</li>
            <li>Hartford</li>
          </ul>
        </small>
      </div>
    </Row>
  </footer>
);
