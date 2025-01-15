import React from "react";
import styles from "../AiTools.module.css";

type PageButtonProps = {
  page: number;
  isActive: boolean;
  onPageChange: (page: number) => void;
};

const PageButton: React.FC<PageButtonProps> = React.memo(
  ({ page, isActive, onPageChange }) => {
    return (
      <button
        className={isActive ? styles.active : ""}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    );
  }
);

PageButton.displayName = "PageButton";

export default PageButton;
