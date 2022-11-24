import { LogoType } from "components/LogoType";
import { Row } from "components/Row";
import Link from "next/link";
import styles from "styles/components/Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <Row>
      <div>
        <Link href="/" className={styles.footer__logo}>
          <LogoType />
        </Link>

        <ul className="inline_list">
          <li>Copyright 2022 Apsis Labs, LLP</li>

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
      </div>
      <div className={styles.footer__tagline_container}>
        <h4 className={styles.footer__tagline}>
          Distributed & Horizontally Scalable
        </h4>

        <ul className="inline_list">
          <li>Seattle</li>
          <li>Boulder</li>
          <li>Boston</li>
          <li>Portland</li>
          <li>Hartford</li>
        </ul>
      </div>
    </Row>
  </footer>
);
