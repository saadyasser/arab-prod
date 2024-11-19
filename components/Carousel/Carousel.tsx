"use client";

import { useRef, useCallback, ReactNode } from "react";
import styles from "./Carousel.module.css";
import ArrowButton from "../ArrowButton/ArrowButton";

type CarouselProps = {
  children: ReactNode[]; // Carousel items
  columns?: number; // Number of visible columns
};

const Carousel = ({ children, columns = 4 }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -offsetWidth : offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount + (direction === "right" ? 30 : -30),
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-wrapper"]}>
        {/* Left Arrow */}
        <ArrowButton direction="left" onClick={() => scroll("left")} />

        {/* Carousel Items */}
        <div
          ref={scrollContainerRef}
          className={styles["carousel-items"]}
          style={{ gap: `${30}px` }}
        >
          {children.map((child, index) => (
            <div key={index} className={styles[`carousel-item-${columns}`]}>
              {child}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <ArrowButton direction="right" onClick={() => scroll("right")} />
      </div>
    </div>
  );
};

export default Carousel;
