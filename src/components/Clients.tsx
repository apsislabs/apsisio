import clsx from "clsx";
import styles from "styles/components/Clients.module.scss";

export const Clients = () => {
  return (
    <div className={styles.clients}>
      <figure className={styles.clients__logo_frame}>
        <img
          width="auto"
          height="auto"
          className={clsx(styles.clients__logo, "animate slide delay-1")}
          alt="careviso"
          src="/img/logos/careviso.png"
        />
      </figure>
      <figure className={styles.clients__logo_frame}>
        <img
          width="auto"
          height="auto"
          className={clsx(styles.clients__logo, "animate slide delay-3")}
          alt="Community Boss"
          src="/img/logos/communityboss.png"
        />
      </figure>
      <figure className={styles.clients__logo_frame}>
        <img
          width="auto"
          height="auto"
          className={clsx(styles.clients__logo, "animate slide delay-0")}
          alt="2nd Chair"
          src="/img/logos/chair.png"
        />
      </figure>
      <figure className={styles.clients__logo_frame}>
        <img
          width="auto"
          height="auto"
          className={clsx(styles.clients__logo, "animate slide delay-2")}
          alt="WelliQ"
          src="/img/logos/welliq.png"
        />
      </figure>
    </div>
  );
};
