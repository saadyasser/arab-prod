"use client";

import React, { useMemo } from "react";
import styles from "../AiTools.module.css";
import PageButton from "./PageButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching: boolean;
};

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPageChange, isFetching }) => {
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

    return (
      <div className={styles["pagination"]}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isFetching}
        >
          ←
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
          →
        </button>
      </div>
    );
  }
);
Pagination.displayName = "Pagination";

export default Pagination;
