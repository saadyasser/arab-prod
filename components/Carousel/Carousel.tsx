"use client";

import { useRef, useCallback, ReactNode } from "react";
import styles from "./Carousel.module.css";

type CarouselProps = {
  children: ReactNode[]; // Accepts any type of ReactNode (text, elements, etc.)
  columns?: number; // Number of visible columns
};

const Carousel = ({ children, columns = 4 }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Left by 100% of the container's width
  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollBy({
        left: -offsetWidth - 30,
        behavior: "smooth",
      });
    }
  }, []);

  // Scroll Right by 100% of the container's width
  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollBy({
        left: offsetWidth + 30,
        behavior: "smooth",
      });
    }
  }, []);

  const totalGap = (columns - 1) * 30;

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-wrapper"]}>
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`${styles["arrow-button"]} ${styles["arrow-left"]}`}
        >
          {/* SVG for the left arrow */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "scale(.8)" }}
          >
            <path
              d="M23.6842 35.5343L37.8454 50.5283C38.5284 51.2514 39.6356 51.2514 40.3185 50.5283L41.9702 48.7795C42.652 48.0575 42.6533 46.8875 41.9731 46.1639L30.7502 34.225L41.9731 22.2861C42.6533 21.5625 42.652 20.3925 41.9702 19.6706L40.3185 17.9218C39.6356 17.1986 38.5283 17.1986 37.8454 17.9218L23.6843 32.9157C23.0013 33.6388 23.0013 34.8112 23.6842 35.5343Z"
              fill="#713488"
            />
            <circle
              cx="35"
              cy="35"
              r="32"
              transform="matrix(-1 0 0 1 70 0)"
              stroke="#713488"
              strokeWidth="6"
            />
          </svg>
        </button>

        {/* Carousel Items */}
        <div ref={scrollContainerRef} className={styles["carousel-items"]}>
          {children.map((child, index) => (
            <div key={index} className={styles["carousel-item-" + columns]}>
              {child}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`${styles["arrow-button"]} ${styles["arrow-right"]}`}
        >
          {/* SVG for the right arrow */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "scale(.8)" }}
          >
            <path
              d="M46.3158 35.5343L32.1546 50.5283C31.4716 51.2514 30.3644 51.2514 29.6815 50.5283L28.0298 48.7795C27.348 48.0575 27.3467 46.8875 28.0269 46.1639L39.2498 34.225L28.0269 22.2861C27.3467 21.5625 27.348 20.3925 28.0298 19.6706L29.6815 17.9218C30.3644 17.1986 31.4717 17.1986 32.1546 17.9218L46.3157 32.9157C46.9987 33.6388 46.9987 34.8112 46.3158 35.5343Z"
              fill="#713488"
            />
            <circle cx="35" cy="35" r="32" stroke="#713488" strokeWidth="6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
