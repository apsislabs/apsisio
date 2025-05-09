import clsx from "clsx";
import { HTMLProps } from "react";
import styles from "styles/components/VideoBackground.module.scss";

export const VideoBackground: React.FC<{
  className?: string;
  src: string;
  type: string;
  variant?: "primary" | "secondary" | "tertiary";
  videoProps?: HTMLProps<HTMLVideoElement>;
}> = ({ className, variant = "secondary", src, type, videoProps = {} }) => {
  return (
    <div
      className={clsx(
        className,
        styles.video,
        variant === "primary" && styles["video--primary"],
        variant === "secondary" && styles["video--secondary"],
        variant === "tertiary" && styles["video---tertiary"]
      )}
    >
      <video muted autoPlay loop {...videoProps}>
        <source src={src} type={type} />
      </video>
    </div>
  );
};
