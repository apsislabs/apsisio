import clsx from "clsx";
import { SocialLink } from "lib/types";
import styles from "styles/components/TeamMember.module.scss";

type TeamMemberProps = {
  name: React.ReactNode;
  title: React.ReactNode;
  image: string;
  bio: React.ReactNode;
  social?: SocialLink[];
  className?: string;
  size?: number;
  small?: boolean;
};

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
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

        <div className="typography">{bio}</div>

        {social && (
          <ul className={styles.bio__social}>
            {social.map((s) => (
              <li className={styles.bio__social_link} key={s.network}>
                {s.network}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};
