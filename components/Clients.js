import styles from "styles/components/Clients.module.scss";

export const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className="container">
        <figure className={styles.clients__logo_frame}>
          <img
            className={styles.clients__logo}
            alt="Logo Ipsum"
            src="https://logoipsum.com/logo/logo-10.svg"
          />
        </figure>
        <figure className={styles.clients__logo_frame}>
          <img
            className={styles.clients__logo}
            alt="Logo Ipsum"
            src="https://logoipsum.com/logo/logo-10.svg"
          />
        </figure>
        <figure className={styles.clients__logo_frame}>
          <img
            className={styles.clients__logo}
            alt="Logo Ipsum"
            src="https://logoipsum.com/logo/logo-10.svg"
          />
        </figure>
        <figure className={styles.clients__logo_frame}>
          <img
            className={styles.clients__logo}
            alt="Logo Ipsum"
            src="https://logoipsum.com/logo/logo-10.svg"
          />
        </figure>
      </div>
    </section>
  );
};
