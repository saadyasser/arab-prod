import React, { useEffect, useMemo, useState } from "react";
import styles from "../AiTools.module.css";
import PageButton from "./PageButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching: boolean; // To disable buttons during fetching
};

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPageChange, isFetching }) => {
    const [allPages, setAllPages] = useState<number[]>([]);

    useEffect(() => {
      const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
      console.log(isFetching, "isFetching");

      setAllPages(pageNumbers);
    }, [totalPages]);

    // Precompute page numbers
    const pageNumbers = useMemo(() => {
      const visiblePages = 3;
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
      !isFetching && (
        <div className={styles["pagination"]}>
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 || isFetching}
          >
            →
          </button>

          {allPages.map((page) => (
            <PageButton
              key={page}
              page={page}
              isActive={page === currentPage}
              onPageChange={onPageChange}
            />
          ))}

          {/* {isFetching && (
          <span className={styles["loading-indicator"]}>Loading...</span>
        )} */}

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isFetching}
          >
            ←
          </button>
        </div>
      )
    );
  }
);
Pagination.displayName = "Pagination";

export default Pagination;
