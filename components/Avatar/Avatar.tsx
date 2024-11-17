import React from "react";
import styles from "./Avatar.module.css";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "medium";
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
}) => {
  return (
    <div
      className={`${styles.avatar} ${styles[size]}`}
      style={{ backgroundImage: src ? `url(${src})` : undefined }}
      role="img"
      aria-label={alt}
    >
      {!src && <span className={styles.placeholder}>{alt[0]}</span>}
    </div>
  );
};

export default Avatar;
