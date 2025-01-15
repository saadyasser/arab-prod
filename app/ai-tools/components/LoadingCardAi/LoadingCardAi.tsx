import Skeleton from "@/components/Skeleton/Skeleton";
import React from "react";
import styles from "../CardAi/CardAi.module.css"; // Assuming a CSS module for the other styles

const LoadingCardAi = () => {
  return (
    <div className={styles["card-ai"]}>
      <div className={styles["avatar-favorite"]}>
        <Skeleton
          style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
        />
      </div>
      <Skeleton
        style={{ width: "100%", height: "6rem", borderRadius: "0.25rem" }}
      />
      <div className={styles["content"]}>
        <Skeleton
          style={{ height: "1.5rem", width: "75%", marginBottom: "0.5rem" }}
        />
        <Skeleton
          style={{ height: "1rem", width: "50%", marginBottom: "1rem" }}
        />
        <Skeleton
          style={{ height: "1rem", width: "83.3333%", marginBottom: "0.5rem" }}
        />
        <Skeleton
          style={{ height: "1rem", width: "100%", marginBottom: "1rem" }}
        />
        <Skeleton style={{ height: "2.5rem", width: "25%" }} />
      </div>
    </div>
  );
};

export default LoadingCardAi;
