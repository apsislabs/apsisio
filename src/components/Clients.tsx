import clsx from "clsx";
import type { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";
import { Client } from "lib/types";
import styles from "styles/components/Clients.module.scss";

export type HomeClient = Omit<Client, "logo"> & {
  logo: StaticImageData;
};

type ClientsProps = {
  clients: HomeClient[];
};

const delays = ["delay-0", "delay-1", "delay-2", "delay-3"];

export const Clients = ({ clients }: ClientsProps) => {
  return (
    <ul className={styles.clients}>
      {clients.map((client, index) => (
        <li key={client.name} className={styles.clients__item}>
          <a
            href={client.url}
            target="_blank"
            rel="noreferrer"
            aria-label={client.name}
            className={styles.clients__link}
          >
            <span
              className={styles.clients__logo_wrap}
              style={{ "--logo-scale": client.scale ?? 1 } as CSSProperties}
            >
              <Image
                className={clsx(
                  styles.clients__logo,
                  "animate slide",
                  delays[index % delays.length]
                )}
                alt={client.name}
                src={client.logo}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
