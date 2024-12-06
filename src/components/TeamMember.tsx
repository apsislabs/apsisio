import {
  SiBluesky,
  SiGithub,
  SiLinkedin,
  SiRss,
  SiX,
} from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { SocialLink } from "lib/types";
import _ from "lodash";
import Link from "next/link";
import styles from "styles/components/TeamMember.module.scss";

type TeamMemberProps = {
  name: React.ReactNode;
  title: React.ReactNode;
  image: string;
  bio: React.ReactNode;
  slug?: string;
  social?: SocialLink[];
  className?: string;
  size?: number;
  small?: boolean;
};

const iconForNetwork = (
  network: "twitter" | "bluesky" | "linkedin" | "github" | "blog",
) => {
  switch (network) {
    case "twitter":
      return SiX;
    case "bluesky":
      return SiBluesky;
    case "linkedin":
      return SiLinkedin;
    case "github":
      return SiGithub;
    case "blog":
      return SiRss;
  }
};

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  slug,
  title,
  image,
  bio,
  social = [],
  className,
  size = 120,
  small = false,
}) => {
  return (
    <aside
      className={clsx(styles.bio, small && styles["bio--small"], className)}
    >
      <img
        src={image}
        alt="Avatar"
        width={size}
        height={size}
        className={styles.bio__image}
      />

      <div className={clsx(styles.bio__content)}>
        <header className={styles.bio__header}>
          <h2 className={styles.bio__title}>{name}</h2>
          <h3 className={styles.bio__subtitle}>{title}</h3>
        </header>

        {social && (
          <ul className={styles.bio__social}>
            {_.sortBy(social, "network").map((s) => {
              const Icon = iconForNetwork(s.network);

              return (
                <li className={styles.bio__social_link} key={s.network}>
                  <Link
                    href={s.link}
                    target={s.link.startsWith("/") ? undefined : "_blank"}
                    title={`${name} on ${s.network}`}
                  >
                    <Icon
                      size={small ? 14 : 18}
                      title={`${name} on ${s.network}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        <div className="typography">{bio}</div>

        {slug && <Link href={`/blog/people/${slug}`}>Read more by {name}</Link>}
      </div>
    </aside>
  );
};
