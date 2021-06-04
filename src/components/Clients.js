import styles from "styles/components/Clients.module.scss";

export const Clients = () => {
  return (
    <div className={styles.clients}>
      <figure className={styles.clients__logo_frame}>
        <img
          className={styles.clients__logo}
          alt="Logo Ipsum"
          src="https://logoipsum.com/logo/logo-8.svg"
        />
      </figure>
      <figure className={styles.clients__logo_frame}>
        <img
          className={styles.clients__logo}
          alt="Logo Ipsum"
          src="https://logoipsum.com/logo/logo-9.svg"
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
          src="https://logoipsum.com/logo/logo-11.svg"
        />
      </figure>
    </div>
  );
};
