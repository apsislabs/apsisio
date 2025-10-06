import clsx from "clsx";
import { NewsletterForm } from "components/forms/NewsletterForm";
import Link from "next/link";
import styles from "styles/components/NewsletterCTA.module.scss";

export const NewsletterCTA = () => {
  return (
    <div className={styles.newsletter_signup__root}>
      <header className={styles.newsletter_signup__header}>
        <h2 className={styles.newsletter_signup__title}>Want to stay up to date with apsis?</h2>
        <h3 className={styles.newsletter_signup__subtitle}>You're in luck, we have a newsletter.</h3>
      </header>

      <NewsletterForm />

      <small className={styles.newsletter_signup__disclaimer}>
        👌 Your data is safe with us:{" "}
        <Link href="privacy">we will never sell your information</Link>.
      </small>
    </div>
  );
};
