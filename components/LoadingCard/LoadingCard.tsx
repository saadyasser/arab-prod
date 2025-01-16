import Skeleton from "@/components/Skeleton/Skeleton";
import React from "react";
import styles from "./LoadingCard.module.css";

const LoadingCard = ({}) => {
  return (
    <div className={styles["skeleton-card"]}>
      <Skeleton
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <Skeleton
        style={{ height: "1.5rem", width: "30%", marginTop: "0.5rem" }}
      />
      <div className={styles["content"]}>
        <Skeleton
          style={{
            height: "1rem",
            width: "80%",
            margin: "1.5rem auto",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Skeleton
            style={{ height: "1rem", width: "25%", marginBottom: "0.5rem" }}
          />
          <Skeleton
            style={{ height: "1rem", width: "25%", marginBottom: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
