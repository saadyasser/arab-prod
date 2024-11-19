import React from "react";
import styles from "./ArrowButton.module.css";

type ArrowButtonProps = {
  direction: "left" | "right"; // Direction of the arrow
  onClick: () => void; // Click handler
  size?: number; // Optional size for the SVG (default 70)
  color?: string; // Optional color for the arrow and circle
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  size = 70,
  color = "#713488",
}) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`${styles["arrow-button"]} ${
        isLeft ? styles["arrow-left"] : styles["arrow-right"]
      }`}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(.8)" }}
      >
        <path
          d={
            isLeft
              ? "M23.6842 35.5343L37.8454 50.5283C38.5284 51.2514 39.6356 51.2514 40.3185 50.5283L41.9702 48.7795C42.652 48.0575 42.6533 46.8875 41.9731 46.1639L30.7502 34.225L41.9731 22.2861C42.6533 21.5625 42.652 20.3925 41.9702 19.6706L40.3185 17.9218C39.6356 17.1986 38.5283 17.1986 37.8454 17.9218L23.6843 32.9157C23.0013 33.6388 23.0013 34.8112 23.6842 35.5343Z"
              : "M46.3158 35.5343L32.1546 50.5283C31.4716 51.2514 30.3644 51.2514 29.6815 50.5283L28.0298 48.7795C27.348 48.0575 27.3467 46.8875 28.0269 46.1639L39.2498 34.225L28.0269 22.2861C27.3467 21.5625 27.348 20.3925 28.0298 19.6706L29.6815 17.9218C30.3644 17.1986 31.4717 17.1986 32.1546 17.9218L46.3157 32.9157C46.9987 33.6388 46.9987 34.8112 46.3158 35.5343Z"
          }
          fill={color}
        />
        <circle cx="35" cy="35" r="32" stroke={color} strokeWidth="6" />
      </svg>
    </button>
  );
};

export default ArrowButton;
