"use client";

import React, { useEffect, useMemo, useRef } from "react";
import styles from "../AiTools.module.css";
import PageButton from "./PageButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching: boolean;
  paginationType: "onScroll" | "ByIndicators";
};

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPageChange, isFetching, paginationType }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const pageNumbers = useMemo(() => {
      const visiblePages = 5;
      const half = Math.floor(visiblePages / 2);
      let start = Math.max(1, currentPage - half);
      let end = start + visiblePages - 1;

      if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - visiblePages + 1);
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }, [currentPage, totalPages]);

    useEffect(() => {
      if (paginationType === "onScroll" && containerRef.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (
              entry.isIntersecting &&
              !isFetching &&
              currentPage < totalPages
            ) {
              onPageChange(currentPage + 1);
            }
          },
          { root: null, threshold: 1.0 }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
      }
    }, [paginationType, currentPage, totalPages, isFetching, onPageChange]);

    if (paginationType === "onScroll") {
      return <div ref={containerRef} className={styles["pagination"]}></div>;
    }

    return (
      <div className={styles["pagination"]}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isFetching}
        >
          →
        </button>

        {pageNumbers.map((page) => (
          <PageButton
            key={page}
            page={page}
            isActive={page === currentPage}
            onPageChange={onPageChange}
          />
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isFetching}
        >
          ←
        </button>
      </div>
    );
  }
);

Pagination.displayName = "Pagination";

export default Pagination;
