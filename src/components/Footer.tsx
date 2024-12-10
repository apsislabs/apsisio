import { Row } from "components/Row";
import Link from "next/link";
import styles from "styles/components/Footer.module.scss";
import { LogoType } from "./LogoType";

const now = new Date();

export const Footer = () => (
  <footer className={styles.footer}>
    <Row>
      <div className="stack gap-md">
        <Link href="/" className={styles.footer__logo}>
          <LogoType className={styles.footer__logotype} />
        </Link>

        <small>
          <ul role="list" className={styles.footer__nav}>
            <li>Copyright {now.getFullYear()} Apsis Labs, LLP</li>

            <li>
              <Link
                className="link"
                target="_blank"
                href="https://github.com/apsislabs"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                className="link"
                target="_blank"
                href="https://www.linkedin.com/company/apsislabs/"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="link" href="mailto:contact@apsis.io">
                contact@apsis.io
              </Link>
            </li>
          </ul>
        </small>

        <small>
          <ul role="list" className={styles.footer__nav}>
            <li>
              <Link className="link" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="link" href="/conduct">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link className="link" href="/mdbn">
                Data Breach Notification Policy
              </Link>
            </li>
          </ul>
        </small>
      </div>

      <div className={styles.footer__tagline_container}>
        <h4 className={styles.footer__tagline}>
          Distributed &amp; Horizontally Scalable
        </h4>

        <small>
          <ul className="inline_list">
            <li>Seattle <span className="text-muted">→</span></li>
            <li>Boulder <span className="text-muted">→</span></li>
            <li>Boston <span className="text-muted">→</span></li>
            <li>Portland <span className="text-muted">→</span></li>
            <li>Hartford</li>
          </ul>
        </small>
      </div>
    </Row>
  </footer>
);
