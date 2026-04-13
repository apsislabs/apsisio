import {
  SiBluesky,
  SiGithub,
  SiRss,
  SiX,
} from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { SocialLink } from "lib/types";
import _ from "lodash-es";
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

const SiLinkedin: React.FC<{ size?: number; title?: string }> = ({
  size = 24,
  title,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    <title>{title}</title>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.31 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.09 20.45H3.53V9h3.56v11.45Z" />
  </svg>
);

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
